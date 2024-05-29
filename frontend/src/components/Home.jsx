import { useEffect, useState } from "react";
import axios from 'axios';


const Home1 = () => {
    const [msg,setMsg] = useState('');

    useEffect(()=>{
        const getMsg = async () =>{
            try {
                const resp = await axios.post('https://vercel-deployment-backend-gilt.vercel.app/hi');
                setMsg(resp.data);
            } catch (error) {
                console.log(error);
            }
        }
        getMsg();
    },[])

    return(
        <>
        <h1>{msg}</h1>
        </>
    )
}

export default Home1;