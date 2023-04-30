import Header from "./components/Header";
import Landing from "./components/Landing";
import GetStarted from "./components/getStarted";
import Compiler from "./components/Compiler";
import DataCenters from "./components/DisplayDataCenter";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const BrowserRouter = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <Header display={true} />
                <hr className="mt-6" />
                <Landing />
            </>
        ),
    },
    {
        path: "/get-started",
        element: (
            <>
                <GetStarted />
            </>
        ),
    },
    {
        path: "/get-data-centers",
        element: (
            <>
                <DataCenters />
            </>
        ),
    },
    {
        path: "/data-center/register/:id",
        element: (
            <>
                <Header display={false} />
                <hr className="mt-5" />
            </>
        ),
    },
    {
        path: "/compiler",
        element: (
            <>
                <Header display={false} />
                <hr className="mt-5" />
                <Compiler />
            </>
        ),
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={BrowserRouter} />
        </>
    );
}

export default App;
