import React, { createContext } from "react";

export const LOGIN="login";
export const LOGOUT="logout";

export const initialState={
    result:false,
    userName:'guest'
};
  
export const reducer=(state,action)=>{
    switch(action.type){
        case LOGIN:
        return {...state,result:true,userName:action.userName};
        
        case LOGOUT:
        return {...state,result:false,userName:'guest'};
        
        default:
        return state;
    }
};

const UserCtxt=createContext();

export default UserCtxt;