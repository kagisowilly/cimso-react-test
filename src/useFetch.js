import { useState, useEffect } from "react";
import axios from 'axios';

const useFetch =(url) => {
    const [data,setData] = useState();
    const [isPending,setIsPending] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=> {
        const abortCont = new AbortController();

        async function getData(){
            try{
                // console.log("Hello")
        let res = await axios(url, {signal: abortCont.signal});
    //    console.log(res)
        if(res.status !== 200){
            throw Error("Could not fetch dataaaaaaa")
        }else{
        setData(res);
        setIsPending(false);
            }               
            }catch(err){
                if(err.name === 'AbortError')
                {
                    console.log(' Fetch aborted')
                }else{
                setIsPending(false);
                setError(err.message)                    
                }
            }
        }
        getData();
        return () => abortCont.abort();
}, [url]);

    return {data, isPending, error}
}

export default useFetch;