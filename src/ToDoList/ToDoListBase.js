import { memo, useEffect, useState } from "react";
import ToDoList from "./ToDoList"; 
import axios from "axios";


function ToDoListBase() {
    const [list, setList] = useState();
useEffect(()=> {
    // axios.get(API/tasks get)
    // const responseToDoList = res.data;
    // setList(responseToDoList)
}, [])

    return <ToDoList list={list}/>
}

export default memo(ToDoListBase)