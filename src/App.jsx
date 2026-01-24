
import {counterAtom, isEvenSelector} from './store/atoms/counter'
import { useRecoilValue ,useSetRecoilState,RecoilRoot} from 'recoil'
function App() {


  return (
    <>
      <RecoilRoot>
        <Counter/>
      </RecoilRoot>
    </>
  )
}

function Counter()
{

  return <>
        
            <Count />
            <Increase />
            <Decrease />
            <Condition/>
        </>
}

function Count()
{
  const count = useRecoilValue(counterAtom);
    return <>
              {count}
              <br/>
          </>
}

function Increase()
{
  let setcount = useSetRecoilState(counterAtom);
  function increase()
  {
    setcount(c=>c+2);
  }
  return <>
              <button onClick={increase}>Increase</button>
        </>
}

function Decrease()
{
  let setcount = useSetRecoilState(counterAtom);
  function decrease()
  {
    setcount(c=>c-1);
  }
    return <>
              <button onClick={decrease}>Decrease</button>
        </>
}

function Condition()
{
  const value = useRecoilValue(isEvenSelector);
  console.log("condition  rerendered")
  return <>
            <br/>
           { value ? "TRUE" : "FALSE"}
        </>
}
export default App
