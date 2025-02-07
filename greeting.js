import React from "react";

function Greeting({isLoggedIn}){
    if(isLoggedIn){
        return <h1>welcome back!</h1>
    } else{
        return <h1>please Login</h1>
    }
}