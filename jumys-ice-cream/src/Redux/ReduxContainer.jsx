import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment , decrement } from './ProductSlice'

const ReduxContainer = () => {

    const ProductData = useSelector(state => state.counter.count)

    console.log('ReduxContainer', ProductData);
    
    const dispatch = useDispatch()
    


    return (
      <>
            <div>ReduxContainer</div>
            <div>{ProductData}</div>
            <button onClick={() => dispatch(increment())}>Increment</button>
      </>
  )
}

export default ReduxContainer