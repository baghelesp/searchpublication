import { useState } from 'react';
import axios from 'axios';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Switch from '@mui/material/Switch';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import { useSelector } from 'react-redux';
import {setAcademic,onSearch,cancleSearch} from './store/search'
import {setloading, catchError} from './store/load'
import { useDispatch } from 'react-redux';

const label = { inputProps: { 'aria-label': 'Switch demo' } };
export default function SearchBar(){
    const error=useSelector((state)=>state.load.value.error)
    const academic=useSelector((state)=>state.search.value.type)
    const load=useSelector((state)=>state.load.value.isloading)
    const result=useSelector((state)=>state.search.value.result)
    const dispatch=useDispatch();

    const [searchKey, setSearchKey]=useState(null)
    const [check, setCheck]=useState(academic)

    //set keyword which need to be searched
    const handleSearch = (event) => {  setSearchKey(event.target.value); };
    
    //set academic or non academic
    const handleCheck=(event)=>{
        setCheck(event.target.checked);
        dispatch(setAcademic(event.target.checked));
    }
    
    function apiCall(keyword)
    {
        if(keyword!=null && keyword!="")
        {   
            dispatch(setloading(true));
            dispatch(catchError(null));
            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'https://api.gyanibooks.com/search_publication/',
                headers: { 'Content-Type': 'application/json'},
                data : JSON.stringify({
                    "keyword": keyword,
                    "limit": "10",
                    
                })
            };
            
            axios.request(config).then((response) => {
                dispatch(setloading(false))
                if(response.data.error)
                {   
                    dispatch(catchError("Exceeded the Search limit, please try after sometime"));
                }
                else{
                    dispatch(onSearch(response.data.data))
                }
            })
            .catch((error) => {
                dispatch(setloading(false))
                dispatch(catchError(error.message))
                setSearchKey(null)
                console.log("error "+(error.message));
            });
        }
        // Input Error
        else{ dispatch(catchError("Please input keyword")) }
    }

    //Function return
    return(
        <div style={{display:"flex-col",width:"auto",padding:"15px"}}>
            <div style={{display:"flex",placeItems:"center", backgroundColor:"white",  border: result.length?'1px solid #15d815':'1px solid #ccd2d7', borderRadius: '25px',}}>
                {/* SearchIcon */}
                <SearchOutlinedIcon onClick={()=>{apiCall(searchKey)}} style={{margin:"12px"}}/>
                
                <input type='text' 
                style={{
                    padding: '5px',
                    width:'60%',
                    border: 'none',
                    outline: 'none',
                }} onChange={handleSearch} />

                <div style={{display:"flex"}}>Academic<Switch size="small" checked={check} onChange={handleCheck} {...label}  /></div> 
                
            </div>
            {load ?<Box sx={{ display: 'flex',marginTop:"25px", marginLeft:"45%" }}><CircularProgress /></Box>:null}
            {error?<div style={{display:"flex",margin: "10px", color:"red", justifyContent:"center", alignItems:"center"}}>{error}</div>:null}
        </div>
    );
}