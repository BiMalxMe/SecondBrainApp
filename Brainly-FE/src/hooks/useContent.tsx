import { useEffect, useState } from "react";
import { Backend_url } from "../config";
import axios from "axios";


export function useContent(){
    const [content,setContent] = useState([])

    async function fetching(){
        const response = await axios.get(Backend_url+"/api/v1/content",{
            headers :{
                "Authorization" : localStorage.getItem("token")
            }
        })
        setContent(response.data.content)
    }

    useEffect(()=> {
        fetching()
    },[])

    return content
}