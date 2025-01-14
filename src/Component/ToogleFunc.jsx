import FunCompOne from './FuncCompOne'
import FunCompTwo from './FunCompTwo'
import { useState } from 'react'

const ToggleFunc = () => {

    const [funcOne,setfunOne] = useState(false);
    const [funcTwo,setfunTwo] = useState(false);

  return (
    <div className="toggle-container">
            <div className="button-container">
        <button onClick={()=>setfunOne(!funcOne)}>First Functional Component</button>
        <button onClick={()=>setfunTwo(!funcTwo)}>Second Functional Component</button>
        </div>
        <div className="component-container">
        {funcOne ? <FunCompOne/> : null}
        {funcTwo? <FunCompTwo/> : null}
    </div>
    </div>
  )
}

export default ToggleFunc