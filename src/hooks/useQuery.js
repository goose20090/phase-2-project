import {useState, useEffect} from "react";


function useQuery(url){
    const [data, setData]= useState({})

    useEffect(()=>{
        fetch(url)
          .then(res=>res.json())
          .then(res=> {setData(res);
            console.log(res);})
           
    }, [url])

    return {data};
}

export default useQuery;


// ,{
//   method: "GET",
//   headers:{
//       'Accept': 'application/json',
//       'Authorization': 'Bearer DXTHdjzueNO5IyvdtUYC'
//   }
// })