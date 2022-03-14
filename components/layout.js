import React from "react";
import Navbar from "./navbar";

const layout = ({children}) => {
    return ( 
        <div>
            <Navbar/>
            {children}
        </div>
     );
}
 
export default layout;