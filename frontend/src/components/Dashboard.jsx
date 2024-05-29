import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropertyListing from "./PropertyListing";




const Dashboard = () =>{
    const navigate = useNavigate();
    const [search, setSearch] = useState('');
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
            <div className="dashboard-banner1 text-light py-5">
                        <h1 className="m-3 bg">Hi, {userInfo.fname +' '+userInfo.lname}</h1>
                        <p className="mx-3 fs-2  fw-bold">Are you looking to sell your property quickly and for the best price?</p>
                        <button onClick={()=>{
                                navigate('/dashboard/sell',{state:userInfo.id});
                            }}  className="btn btn-success fs-3 p-3 my-5">Why not list in our site ?</button>
                    </div>
                    <hr />
                    <div className="text-center py-4 bg-primary">
                        <p className="fs-3">Already listed your properties here?</p>
                        <button type="button" onClick={()=>{
                                    navigate('/dashboard/myProperties',{state:userInfo.id});
                            }} className="btn btn-dark fs-5 mx-4">My Properties</button>
                    </div>
                    <hr />
                    <form className="d-flex mx-lg-5 mx-md-5 px-lg-5 px-md-5" role="search">
                        <input className="form-control mx-5" onChange={(e)=>{
                            setSearch(e.target.value);
                        }} value={search} type="search" placeholder="Search or filter based on Place or Price (Ex: Bengaluru or 15000)" aria-label="Search"/>
                        <button onClick={()=>{
                            navigate('/dashboard/search',{state:search});
                        }} className="btn btn-outline-success" type="button">Search</button>
                    </form>
                    <div>
                        <PropertyListing user_id={userInfo.id}/>
                    </div>
                    <div className="text-center">
                        <hr />
                        <p className="mb-0 fs-3">Rentify, Sell your property confidently...</p>
                        <button onClick={()=>{
                                navigate('/dashboard/sell',{state:userInfo.id});
                            }}  className="btn btn-warning fs-3 p-3 my-5">Sell Property</button>
                    </div>
                </>
        
    )
}
export default Dashboard;