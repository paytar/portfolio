import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


const Dashboard = () => {
    const { user, logout }: any = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <div className="justify-center flex mt-4">
            <div className="flex flex-col">
                <h1 className="text-3xl font-bold">Welcome, {user.username}!</h1>
                <div className="mt-4 gap-4 flex">
                    <button onClick={() => navigate("/profile")} className="border-2 border-black px-4 py-2 rounded-lg">
                        Go to Profile
                    </button>
                    <button onClick={() => navigate("/settings")} className=" bg-green-500  px-4 py-2 rounded-lg">
                        Go to Settings
                    </button>
                    <button onClick={handleLogout} className=" bg-red-500  px-4 py-2 rounded-lg">
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
