import { useState } from "react";




const route =  window.location.href.split(window.location.host)[1].split("/")[1];

const useDrawer = ()=>{
    const [isDrawer, setMobileOpen] = useState(false);

  const handleDrawerToggle = ()=>{
        setMobileOpen((prevState) => !prevState);
  };

  const closeDrawer = ()=>{
    setMobileOpen(true);
}; 
return {handleDrawerToggle,closeDrawer,isDrawer}
}

export const useHeaderHooks = {
    route,
    useDrawer
}