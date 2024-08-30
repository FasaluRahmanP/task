import React from 'react'

const Task = () => {
    let arr = [8, 10, 13, 5, 20, 1, 8, 13, 6]
    let deletearr = arr.filter((element, index, array) => {
        return array.indexOf(element) == index
    })
    console.log(deletearr)
    return (
        <div>Task</div>
    )
}

export default Task