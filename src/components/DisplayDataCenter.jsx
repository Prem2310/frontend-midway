import Header from "./Header";
import DataCenterCard from "./dataCenterCard";
import { useEffect, useState } from "react";
import gsap from "gsap";

export default function DataCenters() {
    const [dataCenters, setDataCenters] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            gsap.fromTo(
                ".card",
                {
                    y: -100,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.2,
                    ease: "power3.inOut",
                }
            );
        }, 300);

        fetch("http://localhost:5000/data-center/all")
            .then((res) => res.json())
            .then((result) => {
                setDataCenters(result.data);
            });
    }, []);
    return (
        <section>
            <Header display={false} />
            <hr className="mt-5 mb-5" />
            <div className="container grid grid-cols-5 gap-5 p-4">
                {dataCenters.map((dataCenter, id) => {
                    return (
                        <DataCenterCard
                            id={id + 1}
                            name={`Data Center - ${id + 1}`}
                            total={dataCenter.total_records}
                            region={dataCenter.region}
                        />
                    );
                })}
            </div>
        </section>
    );
}
