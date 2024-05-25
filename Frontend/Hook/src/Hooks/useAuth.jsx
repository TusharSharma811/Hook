import React, { useCallback } from "react";
import { useEffect } from "react";


const useAuth = (url , username, email, password) => {
  
 let data = fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  })
    .then((response) => { return {status : response.status , data : response.json()}})
    .then(({status , data}) => {
      
      localStorage.setItem( "token" , data.token );
      return {status , data} ;
    }) ;
   return data ;
};

export default useAuth;
