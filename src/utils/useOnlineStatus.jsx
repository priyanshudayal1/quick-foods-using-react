// #region constants

import { useEffect, useState } from "react";

// #endregion


// #region functions

// #endregion

/**
 * 
 */
const useOnlineStatus = () => {
    const [onlineStatus,setOnlineStatus]=useState(true);
    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setOnlineStatus(false);
        })
    },[])
    return onlineStatus;
}

export default useOnlineStatus;