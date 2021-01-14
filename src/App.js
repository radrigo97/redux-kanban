import './App.css';
import React, {useState} from 'react'
import {connect} from "react-redux";

function App(props) {
    const [task, setTask] = useState('')

    const addTask = () => {
        props.addTask(task)
        setTask('')
    }

    const up = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-short"
         viewBox="0 0 16 16">
        <path fillRule="evenodd"
              d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
    </svg>)

    const down = (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down"
             viewBox="0 0 16 16">
            <path fillRule="evenodd"
                  d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
        </svg>)

    return (
        <div className="App">
            <ul>
                <input type="text" value={task} onChange={e => setTask(e.target.value)}/>
                <button onClick={addTask}>Add</button>
                {
                    props.task.map((el, index) => <li key={el.id}>{el.name}
                        <button onClick={() => props.upTask(index)}>{up}</button>
                        <button onClick={() => props.downTask(index)}>{down}</button>
                    </li>)
                }
            </ul>
        </div>
    );
}

const mapStateToProps = (state) => ({
    task: state.tasks
})

const mapDispatchToProps = (dispatch) => ({
    addTask: (task) => dispatch({type: 'ADD_TASK', payload: task}),
    upTask: (up) => dispatch({type: 'UP_TASK', payload: up}),
    downTask: (down) => dispatch({type: 'DOWN_TASK', payload: down})
    downTask: (down) => dispatch({type: 'DOWN_TASK', payload: down})
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

