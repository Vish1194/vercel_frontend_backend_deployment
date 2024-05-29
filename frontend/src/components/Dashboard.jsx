import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";




const Dashboard = () =>{
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({
        id:sessionStorage.getItem('id'),
        fname:sessionStorage.getItem('fname'),
        lname:sessionStorage.getItem('lname'),
        email:sessionStorage.getItem('email'),
    });
    useEffect(()=>{
        const checkLogin = async () =>{
            if(userInfo.id == null){
                navigate('/')
            }
        }
        checkLogin();
    },[])


    return(
        <>
            <h1 className="m-3 bg">Hi, {userInfo.fname +' '+userInfo.lname}</h1>
        </>
        
    )
}
export default Dashboard;