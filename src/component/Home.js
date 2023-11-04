import React from "react";
import { useState } from "react";
import SearchBar from "./SearchBar";
import Header from "./Header";
import { Button } from "@mui/material";
import Articles from "./Article/Articles";
import { useSelector } from "react-redux";
import './scrollbar.css'
export default function Home(){

    const result=useSelector((state)=>state.search.value.result)
    const academic=useSelector((state)=>state.search.value.type)
    console.log("length : "+result.length)
    console.log("content"+result)
    return(
        <>
        
        <div className="custom-scrollbar-container" style={{height:"100vh", overflow:"scroll", overflowX:"hidden"}}>
            {/* Header */}
            <div style={{backgroundColor:"white"}}>
                <Header/>
            </div>
            {/* Search Bar */}
            <div style={{marginTop:result.length ?"5%":"40%",marginBottom:"auto",alignItems:"center",justifyContent:"center"}}> 
                
                    <SearchBar />
                 
            </div>
            <div className="custom-scrollbar-content">
                {/* Academic Search or Web Results */}
                <div style={{marginLeft:"15px"}}>{result.length? academic==true?<h3>Academic Search</h3>:<h3>Web Results</h3>:<span></span>}</div>
                
                {/* Display the result to the page */}
                {result.length? result.map((cont,key)=>{
                    return<div key={key} style={{display: 'flex',paddingright:"7px",paddingLeft:"7px",paddingTop:"10px",alignItems:"center",justifyContent:"center"}}>
                        <Articles content={cont}/>
                        </div>;
                    }) : null}
            
                </div>
            
        </div>
        </>
    );
}



