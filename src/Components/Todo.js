import { deletetodo } from "../redux/todoslice";
import { useDispatch } from "react-redux";
const Todo = ({job}) => {
const  dispatch =useDispatch ();
  return (
    <>
      <h1>title: {job.title}</h1>
      <p>status: {job.isDone?"True":"false"}</p>
      <button onClick={()=>dispatch (deletetodo(job.id))}>delete</button>
    </>
  );
};

export default Todo;
