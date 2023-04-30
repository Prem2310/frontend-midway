import { useRef } from "react";
import axios from "axios";

export default function Compiler() {
    const json1 = useRef();
    const json2 = useRef();

    const graphql1 = useRef();
    const graphql2 = useRef();

    const soap1 = useRef();
    const soap2 = useRef();

    const lhsTextArea = useRef();
    const rhsTextArea = useRef();

    const handleConversion = () => {
        const json1Value = json1.current.checked;
        const json2Value = json2.current.checked;

        const graphql1Value = graphql1.current.checked;
        const graphql2Value = graphql2.current.checked;

        const soap1Value = soap1.current.checked;
        const soap2Value = soap2.current.checked;

        let lhs;
        if (json1Value) lhs = "json";
        else if (graphql1Value) lhs = "graphql";
        else if (soap1Value) lhs = "soap";

        let rhs;
        if (json2Value) rhs = "json";
        else if (graphql2Value) rhs = "graphql";
        else if (soap2Value) rhs = "soap";

        if (lhs === rhs) {
            rhsTextArea.current.value = lhsTextArea.current.value;
            return;
        }

        const lhsValue = lhsTextArea.current.value;

        if (lhs === "json") {
            if (rhs == "graphql") {
                axios
                    .post("http://localhost:5000/compiler/json-to-graphql", {
                        json: JSON.parse(lhsValue),
                    })
                    .then((res) => (rhsTextArea.current.value = res.data));
            } else if (rhs == "soap") {
                axios
                    .post("http://localhost:5000/compiler/json-to-soap", {
                        json: JSON.parse(lhsValue),
                    })
                    .then((res) => (rhsTextArea.current.value = res.data));
            }
        } else if (lhs === "graphql") {
            if (rhs == "json") {
                rhsTextArea.current.value = lhsValue;
            } else if (rhs == "soap") {
                rhsTextArea.current.value = lhsValue;
            }
        } else if (lhs === "soap") {
            if (rhs == "json") {
                axios
                    .post("http://localhost:5000/compiler/soap-to-json", {
                        soap: lhsValue,
                    })
                    .then((res) => (rhsTextArea.current.value = res.data));
            } else if (rhs == "graphql") {
                rhsTextArea.current.value = lhsValue;
            }
        }
    };

    return (
        <div className="border border-black h-[80vh] m-10 mt-6">
            <div className="h-10 flex items-center ">
                <div className="flex-1 text-center font-ibm font-bold">
                    <form className="flex gap-10  justify-evenly">
                        <div>
                            <input
                                ref={json1}
                                type="checkbox"
                                id="json-1"
                                className="mr-4"
                            />
                            <label htmlFor="json">JSON</label>
                        </div>
                        <div>
                            <input
                                ref={graphql1}
                                type="checkbox"
                                id="graphql-1"
                                className="mr-4"
                            />
                            <label htmlFor="graphql">GraphQL</label>
                        </div>
                        <div>
                            <input
                                ref={soap1}
                                type="checkbox"
                                id="soap-1"
                                className="mr-4"
                            />
                            <label htmlFor="soap">SOAP</label>
                        </div>
                    </form>
                </div>
                <div className="flex-1 text-center font-ibm font-bold">
                    <form className="flex gap-10  justify-evenly">
                        <div>
                            <input
                                ref={json2}
                                type="checkbox"
                                id="json-2"
                                className="mr-4"
                            />
                            <label htmlFor="json">JSON</label>
                        </div>
                        <div>
                            <input
                                ref={graphql2}
                                type="checkbox"
                                id="graphql-2"
                                className="mr-4"
                            />
                            <label htmlFor="graphql">GraphQL</label>
                        </div>
                        <div>
                            <input
                                ref={soap2}
                                type="checkbox"
                                id="soap-2"
                                className="mr-4"
                            />
                            <label htmlFor="soap">SOAP</label>
                        </div>
                    </form>
                </div>
            </div>
            <div className="flex h-[75vh] font-ibm font-bold">
                <textarea
                    ref={lhsTextArea}
                    className="flex-1 outline-none border-2 p-4"
                ></textarea>
                <textarea
                    ref={rhsTextArea}
                    className="flex-1 outline-none border-2 p-4"
                ></textarea>
            </div>
            <button
                onClick={() => handleConversion()}
                className="bg-[#FF6D60] text-white font-inconsolata hover:bg-[#fb4433] mt-2 p-3 rounded-lg"
            >
                Convert
            </button>
        </div>
    );
}
