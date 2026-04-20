import { useState } from "react"


export default function SearchBar({val, onChange, onSearch}){
    
    return (
        <>
            <input type="text" placeholder="Search" 
                value={val} onChange={(e) => onChange(e.target.value)}
            />
            <button onClick = {() => onSearch()}>Search</button>
        </>
    )
}