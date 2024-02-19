import { Outlet, Link } from "react-router-dom";

const NoPage = () => {
    return (
        <div className="container border">
            {/* <Outlet/> */}
            <p>The route doesnt exist.</p>
            <span className="fs-2">Error 404. Page Not Found.</span>
            <Link to="/files">Go back to Home</Link>
        </div>
    )
}

export default NoPage;