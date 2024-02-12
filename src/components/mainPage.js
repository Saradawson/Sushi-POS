import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {

return (
    <div>
        <nav style={{display: 'flex', justifyContent: 'right'}}>
            <Link to=''>Orders</Link>
            <Link>Settings</Link>
        </nav>  
    </div>
)

};

export default MainPage;