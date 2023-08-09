import React, { useEffect } from 'react'

export default function Train() {
    let url='http://20.244.56.144:80/train/trains'
    const fetchingtraindata=async()=>{
        let parsedata=fetch(url,{method:"GET",
        headers: {'Authentication': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTE1NzQ4MDgsImNvbXBhbnlOYW1lIjoiVHJhaW4gQ2VudHJhbCIsImNsaWVudElEIjoiZjViNGIzZmMtYjQ1Yy00NjBlLTk4MDAtOWRiNmU3ODhiYjMyIiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IjE2MDIifQ.G2a0yG3FzVddf23Z1vAS8gOTVSrcauq9DxWid_ay440'}
    });
    // const json=await parsedata.json();
    // console.log(json);
    console.log(parsedata);
}
    useEffect(()=>{
        fetchingtraindata()

    },[])
  return (
    <div>Train</div>
  )
}
