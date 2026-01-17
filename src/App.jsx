import {useState} from 'react'
import {useFetch} from './hooks/useFetch'

function App() {
 const [currenttab,setcurrenttab] = useState(1);
 const {finalData,loading} = useFetch("https://dummyjson.com/todos/"+ currenttab);

  return <> 
            {loading ? "loading...." : JSON.stringify(finalData)}
            <br/>
            <br/>
            <button onClick = {()=> setcurrenttab(1)}>1</button>
            <button onClick = {()=> setcurrenttab(2)}>2</button>
            <button onClick = {()=> setcurrenttab(3)}>3</button>
         </>

  
}

export default App
