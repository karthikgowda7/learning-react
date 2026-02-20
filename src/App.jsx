import { useState } from "react"

function App() {
  const [by,setby] = useState("")

  return (
    <>
      <div className = "bg-blue-300 h-screen w-screen">
        <br></br>
         <div className = "text-center text-xl">
              Webinar.gg
        </div>

        <br></br>
        <br></br>

        <div className = "text-center text-xl">
          Verify Your Age
        </div>

        <br></br>
        <br></br>

         <div className = "text-center">
          Please confirm your birth year. This data will not be stored
        </div>

        <br></br>

        <div className = "flex justify-center" >
           <input value={by} onChange={(e) => setby(e.target.value)} className = "border border px-5 pl-22 py-1 rounded" type="text" placeholder = "Your Birth Year"></input>
        </div>

          <br></br>


        <div className = "flex justify-center " >
           <button className ={ `border px-10 py-1 rounded ${ by ? "bg-green-300" : "bg-red-300" }`}>Continue</button>
        </div>
        
      </div>
    </>
  )
}

export default App
