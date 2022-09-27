import {useState, useEffect} from "react";


function useQuery(url){
    const [data, setData]= useState({})

    useEffect(()=>{
        fetch(url,{
              method: "GET",
              headers:{
                  'Accept': 'application/json',
                  'Authorization': 'Bearer DXTHdjzueNO5IyvdtUYC'
              }
            })
          .then(res=>res.json())
          .then(res=> {setData(res);
            console.log(res);})
           
    }, [url])

    return {data};
}

export default useQuery;