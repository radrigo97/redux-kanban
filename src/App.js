import './App.css';
import {connect} from "react-redux";

function App(props) {
  return (
    <div className="App">
     <ul>
       {
         props.task.map(el => <li key={el.name}>{el.name}</li>)
       }
     </ul>
    </div>
  );
}

const mapStateToProps = (state) => ({
  task: state.tasks
})

export default connect(mapStateToProps)(App);
