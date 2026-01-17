import {useState,useEffect} from 'react'

function useFetch(url)
{
    const [finalData,setfinalData] = useState({});
    const [loading,setloading] = useState(true);
    async function getData()
    {
        setloading(true);
        const response = await fetch(url);
        const json = await response.json();
        setfinalData(json);
        setloading(false);
    }

    useEffect(function()
    {
            getData();
    },[url])
        
return {finalData,loading}

}

export {useFetch}