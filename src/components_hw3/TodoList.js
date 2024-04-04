import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import '../styles/TodoList.css'; 

function TodoList() {
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState(['Покормить кота', 'Вынести мусор']);

    const handleAddTodo = () => {
        if (inputText.trim() !== '') {
            setTodos([...todos, inputText]);
            setInputText('');
        }
    };

    const handleDeleteTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    return (
        <div>
            <h3>Список дел</h3>
            <div className="container">
                <TextField label="Введите новую задачу" value={inputText} onChange={(e) => setInputText(e.target.value)} />
                <Button variant="contained" onClick={handleAddTodo}>Добавить</Button>
            </div>
            {todos.map((todo, index) => (
                <Card key={index} className="todo-card">
                    <CardContent>
                        <div className="todo-content">
                            <span>{todo}</span>
                            <IconButton onClick={() => handleDeleteTodo(index)}>
                                <DeleteIcon />
                            </IconButton>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}

export default TodoList;
