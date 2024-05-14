import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
const Todo = ({ text, updateMode, deleteTodo, isCompleted }) => {
  return (
    <div>
      <div className="todoList">
        <div className="text">{text}</div>
        <div className="icons">
          <AiFillEdit className="icon" onClick={updateMode} />
          <MdDelete className="icon" onClick={deleteTodo} />
          <FaCheck className="icon" onClick={isCompleted} />
        </div>
      </div>
    </div>
  );
};

export default Todo;
