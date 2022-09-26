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
          .then(res=> {setData(res.docs[0]);
            console.log(res.docs[0]);})
           
    }, [url])

    return {data};
}

export default useQuery;