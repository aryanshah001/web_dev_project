import { useEffect, useState } from "react";

function useCustomHooks(currency){
    let[data , setData] = useState({})
    useEffect(() => {
        fetch(https://api.com)
            .then((res) => res.json())
            .then((res) => setdata(res[currency]))
    },[currency])
    return data
}
export default useCustomHooks