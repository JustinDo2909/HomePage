import React from "react";
import Header from "./Home/Header";
import Footer from "./Home/Footer";

const MasterLayout = ({ children, ...props }) => {
    return (
        <div {...props}>
            <Header/>
            {children}
            <Footer/>
        </div>
    );
};


export default MasterLayout;