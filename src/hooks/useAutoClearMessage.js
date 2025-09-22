import { useEffect } from "react";

export function useAutoClearMessages(message, setMessage, timeout){
    useEffect(()=>{
        if(message!==''){
            const timer = setTimeout(()=>setMessage(''),timeout);
            return ()=>clearTimeout(timer);
        }
    },[message, setMessage, timeout]);
}