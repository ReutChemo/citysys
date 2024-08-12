import React from "react";
import Signup from "./signup";
import Toolbar from "./toolbar";

function Header(){
 return(
     <div style={{ width: 500 , direction: 'rtl', textAlign: 'right'}}>
     <Toolbar/ >
     <h1 className="TitleC">צור חשבון</h1> 
     <h2 className="subTitle">לחברות או אדם פרטי</h2>   

     <Signup/ >
    </div>

 );
}

export default Header;