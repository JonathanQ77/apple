// Libraries
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export default function Main() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-apple">
            <div className="flex-1">
                {/* Logo */}
                <Header />

                {/* Children */}
                <Outlet />
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}
