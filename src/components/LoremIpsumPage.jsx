import React,{useState} from "react";
import '../App.css';
import {Login} from "./PageLogin";
import {Register} from "./PageRegistration";
import cn from "classnames";

export default function LoremIpsumPage(){
    const [isLoginVisible,setIsLoginVisible] = useState(false)
    const handleOpenLoginPage = ()=> setIsLoginVisible(true)
    const handleOpenRegistrationPage = ()=> setIsLoginVisible(false)
    return (
       <div class="form">
        <div class="picture">
          <p class="tekst_sverhu_kartinki">Lorem Ipsum is simply</p>
          <p class="text">Lorem Ipsum is simply</p>
        </div>
      
      <div class="form_css">
          <div class="form_display">
        <p class="welcome">Welcome to lorem..!</p>
        <div class="button_group">
          <button className={cn({"button_active": isLoginVisible,"button_inactive": !isLoginVisible})} onClick={handleOpenLoginPage}>Login</button>
          <button className={cn({"button_active": !isLoginVisible,"button_inactive": isLoginVisible})} onClick={handleOpenRegistrationPage}>Register</button>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        {isLoginVisible && <Login/>}
        {!isLoginVisible && <Register/>}
        </div>
        </div>
        </div>
    )
}
