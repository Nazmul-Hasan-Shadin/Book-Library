import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

 
   const instance = axios.create({
    baseURL:'https://books-server-six.vercel.app/',
    // baseURL:'http://localhost:5000/',
    withCredentials:true
   });
const useAxios = () => {
    const {logOut}=useContext(AuthContext)
    instance.interceptors.response.use(function (response) {
      
        return response
      },
       function (error) {
       
        if (error.response.status === 401) {
            console.log(error);
            logOut()
        }
     
      })
  
    return instance

};

export default useAxios;