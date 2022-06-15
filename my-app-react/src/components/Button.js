import React, {useState} from 'react'

const Button = () => {
    const [count, setCount]= useState(0)


    //TO increase the count on button press
    const onClickHandler = (event) =>{
        setCount(count+1)
    }

    return (<>
    <div>{
        count
    }</div>
    <button onClick={onClickHandler}>Add</button>
    
    </>)
}

export default Button