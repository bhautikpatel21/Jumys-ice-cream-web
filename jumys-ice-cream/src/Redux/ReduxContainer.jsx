import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment , decrement } from './ProductSlice'

const ReduxContainer = () => {

    const ProductData = useSelector(state => state)

    console.log('ReduxContainer', ProductData);
    
    const dispatch = useDispatch()
    


    return (
      <>
            <div>ReduxContainer</div>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>decrement</button>
      </>
  )
}

export default ReduxContainer