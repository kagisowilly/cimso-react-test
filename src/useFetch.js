import { useState, useEffect } from "react";
import axios from 'axios';

const useFetch =(url) => {
    const [data,setData] = useState();
    const [data2,setData2] = useState();
    const [isPending,setIsPending] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=> {
        async function getData(){
            try{
        let res = await axios(url);
        console.log(res)
        if(res.data.error_code === -999){
            throw Error("Could not fetch dataaaaaaa")
        }else{
          const { payload } = await res.data;
          setData(payload["Unit Types"]);
          setData2(payload["Booking Units"])
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
}, [url]);

    return {data,data2, isPending, error}
}

export default useFetch;