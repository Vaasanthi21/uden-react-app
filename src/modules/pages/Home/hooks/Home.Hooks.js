import { useState } from "react";


const useToogleWorkFlow = ()=>{
    const [isCompany, setCompany] = useState(true);
    const displayCompany = ()=> setCompany(true);
    const displayJobSeeker = ()=> setCompany(false);
    
    return {displayCompany,displayJobSeeker,isCompany}
}

const WorkFlow = {
    useToogleWorkFlow
}

export const HomeHooks = {
    WorkFlow
}