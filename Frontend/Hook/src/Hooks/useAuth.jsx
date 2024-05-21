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
    .then((response) => response.json())
    .then((data) => {
      localStorage.setItem( "token" , data.token );
      return data ;
    }) ;
   return data ;
};

export default useAuth;
