import React from 'react'
import { useState } from 'react';

export default function AddTodo({addTodo}) {
    const[title, setTitle] = useState("");
    const[desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc){
            alert("title and desc cannot be blank");
        } else {
        addTodo(title, desc);
        setTitle("");
        setDesc("");
        }
    }

  return (
    <div classNameName='container my-3'>
        <h3>Add a Todo</h3>
      <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Todo Title</label>
    <input type="text" value = {title} onChange = {((e) =>setTitle(e.target.value))}
     className="form-control" id="inputEmail4"/>
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Tdo Description</label>
    <input type="text" value = {desc} onChange = {((e) =>{setDesc(e.target.value)})}
    className="form-control" id="desc"/>
  </div>

  <div className="col-12">
    <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
  </div>
</form>
    </div>
  )
}
