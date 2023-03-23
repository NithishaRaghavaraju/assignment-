import React, { useState } from 'react'

// import { div } from '@mui/material';

const Login = () => {
    const [Input, setInput] = useState('');
    const [NewInput, setNewInput] = useState([]);
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    function handleNewTodoAdd() {
        if (Input !== '') {
          console.log(Input)
          setNewInput([...NewInput,Input]);
          setInput('');
        }
      }
      console.log(NewInput)

  

  return (
    <div>
    <div backgroundColor='#ADE792' display='flex' >
        <div sx={{ margin: '50px'}}>
            <h1>To Do List</h1>
        </div>
    </div>

    <div mt={5}>
        <div ml={10}>
            <h2>Add Items</h2>
        </div>
        <div display='flex' p = {2}  mt={3} ml={8} >
            <div display='flex' sx={{ height: 30, width: 500}}>
            <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Enter your task' value={Input} onChange={(event) => setInput(event.target.value)} />
            <button onClick={handleNewTodoAdd}>
                Submit
            </button>
            </form>
            </div>
        </div>
    </div>

    <div mt={5} ml={10}>
        <h1>Tasks</h1>

        <div backgroundColor='#F0EEED' mt={3} sx={{
        width:300, height: 200
        }}>
        <div sx={{ ml:3}} fontSize={20} fontWeight={12} color='black'>
        <ul>
        {NewInput.map((input, index) => (
          <li key={index}>{input}</li>
        ))}
      </ul>
        </div>
        </div>
        
    </div>
    </div>
  )
}

export default Login