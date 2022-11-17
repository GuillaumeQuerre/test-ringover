import { memo } from "react";
import ToDoList from "./ToDoList"; 

function ToDoListBase() {
    return <ToDoList />
}

export default memo(ToDoListBase)