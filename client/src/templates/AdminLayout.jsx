import { Outlet } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Sidebar } from "../components/Sidebar";

export function AdminLayout() {
    return (
        <>
            <div className="container-fluid">
                <Header />
            </div>
            <div className="container-fluid min-page-height">
                <div className="row">
                    <Sidebar />
                    <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <Outlet />
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <Footer />
            </div>
        </>
    )
}