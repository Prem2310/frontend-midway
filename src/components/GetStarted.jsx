import Login from "./Login";
import Register from "./Register";
export default function GetStarted() {
    return (
        <div className="flex overflow-hidden">
            <div className="flex-1">
                <Login />
            </div>
            <div className="flex-1">
                <Register />
            </div>
        </div>
    );
}
