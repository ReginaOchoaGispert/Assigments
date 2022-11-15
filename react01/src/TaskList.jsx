import React, { useState } from 'react'

function TaskList() {
    var[taskComplete, setTaskComplete] = useState(false);
    var [elementCount, setElementCount] = useState(1);
    // function completeTask() {
    //     setTaskComplete(true);
    // }
    // function unCompleteTask() {
    //     setTaskComplete(false);
    // }
    function changeStatusTask() {
        setTaskComplete(!taskComplete);
    }
    function addItem() {
        setElementCount(elementCount + 1);
    }
    function removeItem() {
        setElementCount(elementCount - 1);
    }
    return (
        <div>
            <ul>
                <li style={taskComplete ? {textDecoration:"line-through"} : null} > 
                    {" "}
                    <span onClick={changeStatusTask}>{elementCount} Buy Milk</span>
                    
                    {/* <button onClick={completeTask}>Done</button>
                    <button onClick={unCompleteTask}>Undo</button> */}
                    <button onClick={addItem}>+</button>
                    <button onClick={removeItem}>-</button>
                </li>
            </ul>
        </div>
    );
}

export default TaskList;