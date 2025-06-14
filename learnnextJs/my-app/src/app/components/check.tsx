"use client";
import { useState } from "react"


export const Check =() =>{
    const [date,newdate]= useState(new Date().toLocaleDateString());
    console.log(date);
    return <h1>{date}</h1>
}