import React, { useEffect, useState } from 'react'

export default function User(props) {
  const [data,setData]=useState();
  const getData=async()=>{
    const data=await fetch("https://api.github.com/users/akshaymarch7");
    const json=await data.json();
    setData(json);
    console.log(json);
  }
  useEffect(()=>{
    getData();
  },[])
  // const {name,location,avatar_url}=data;
  return (
    <div className='user-card'>
      <h2>Name: {props.name}</h2>
      <img src="" alt="" />
      <h3>Location: Jabalpur</h3>
      <h3>This is Namaste React Web Series</h3>
      <h4>Contact : @piyushdayal1</h4>
    </div>
  )
}
