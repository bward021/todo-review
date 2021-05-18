import axios from "axios";
import React from "react";


const TodoList = () => {
  axios({
    method: "get",
    url: `http://127.0.0.1:5000/item/all`})
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log("error in get items: ", error)
    })


  return ( "todo-list" );
}
 
export default TodoList;