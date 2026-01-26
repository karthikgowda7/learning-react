import {RecoilRoot, useRecoilValue} from "recoil"
import { todoAtomFamily } from "./todoAtoms"

function App() {
  

  return (
    <>
      <RecoilRoot>
          <Todo id={1}/>
          <br/>
          <Todo id={2}/>
      </RecoilRoot>
    </>
  )
}

function Todo({id})
{
  const todo = useRecoilValue(todoAtomFamily(id));

  return <>
              {todo.title}
        </>
}
export default App
