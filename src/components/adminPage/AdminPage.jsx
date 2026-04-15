import React from "react";
import { Link } from "react-router-dom";

const AdminPage = () => {
    return (
        <>
            <div>
                Admin Page here
                <Link className="router-link"
                to={ `/`}>
                    <p>Home Page</p>
                </Link>
            </div>
        </>
    )
}
export default AdminPage;