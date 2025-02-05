import { useNavigate } from "react-router-dom";
import { AuthProvider, useAuth } from "../context/AuthContext";


const Dashboard = () => {
    const { user, logout }: any = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <div className="flex flex-col w-1/6">
            <h1 className="text-3xl font-bold">Welcome, {user.username}!</h1>
            <button onClick={() => navigate("/profile")} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">
                Go to Profile
            </button>
            <button onClick={() => navigate("/settings")} className="mt-2 bg-green-500 text-white px-4 py-2 rounded-lg">
                Go to Settings
            </button>
            <button onClick={handleLogout} className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg">
                Logout
            </button>
        </div>
    );
};

export default Dashboard;
