import './App.css';
import React, {useState} from 'react'
import {connect} from "react-redux";

function App(props) {
    const [task, setTask] = useState('')

    const addTask = () => {
        props.addTask(task)
        setTask('')
    }

    return (
        <div className="App">
            <ul>
                <input type="text" value={task} onChange={e => setTask(e.target.value)}/>
                <button onClick={addTask}>Add</button>
                {
                    props.task.map(el => <li key={el.name}>{el.name}
                        <button onClick={() => props.upTask(el.id)}>Up</button>
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
    upTask: (up) => dispatch({type: 'UP_TASK', payload: up})
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
