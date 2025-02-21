import React, { useContext,useEffect,useState } from "react";
import { CaptainDataContext } from "../context/CaptainContext";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import axios from 'axios'


const CaptainProtectedWrapper = ({ children }) => {
    const token = localStorage.getItem("token");
    const [loading, setLoading] = useState(true); 
    const {captain,setCaptain} = useContext(CaptainDataContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(!token){navigate('/login')}
    },[token])
    axios.get(`${import.meta.env.VITE_BASE_URL}/captain/profile`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    }).then(res=>{
        if(res.status ===200){
            setCaptain(res.data.captain)
            setLoading(false);
        }
    }).catch(err=>{
        localStorage.removeItem('token')
        navigate('/captain-login')
    },[token])

    if(loading){
        return(
            <div><Loader /></div>
        )
    }


  return <>{children}</>;
};

export default CaptainProtectedWrapper;
