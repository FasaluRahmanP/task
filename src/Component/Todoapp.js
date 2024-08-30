import React, { useState } from 'react'

const TodoApp = () => {
    const [input, setinput] = useState()
    const [list, setlist] = useState([])
    function inputchange(event) {
        setinput(event.target.value)
    }
    const Addbutton = () => {
        setlist([...list, input])
        setinput("")
    }
    const deletebutton = (value) => {
        const filteredlist = list.filter((_, index) => index != value)
        setlist(filteredlist)
    }
    return (
        <div>
            <h1>TodoApp</h1>
            <input value={input} placeholder='Enter Your Task' onChange={inputchange}></input>
            <button onClick={Addbutton}>Add</button>
            <ul>
                {
                    list.map((element, index) => (
                        <li key={index}><span>{element}</span>
                            <button onClick={() => deletebutton(index)}>Delete</button></li>

                    ))
                }
            </ul>
        </div>
    )
}
export default TodoApp