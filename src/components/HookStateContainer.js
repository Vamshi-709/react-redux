import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'

function HookStateContainer() {
  const numOfCakes =  useSelector (state =>state.cake.numOfCakes)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of Cakes : {numOfCakes}</h2>
      <button onClick={()=>dispatch()}>Buy Cake</button>
    </div>
  )
}

export default HookStateContainer
