import React, { ChangeEvent, useState } from 'react';
import './AddTaskForm.css';

interface TaskFormProps {
    onSubmit: (task: { id: string, text: string }) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit }) => {
    const [taskText, setTaskText] = useState('');

    const onTextChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTaskText(event.target.value);
    };

    const onFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (taskText.trim() === '') return;

        const newTask = {
            id: Math.random().toString(),
            text: taskText
        };

        onSubmit(newTask);
        setTaskText('');
    };

    return (
        <form className={"AddTaskForm"} onSubmit={onFormSubmit}>
            <input className={"AddTaskForm-input"} type="text" value={taskText} onChange={onTextChange} />
            <button className={"AddTaskForm-btn"} type="submit">Add</button>
        </form>
    );
};

export default TaskForm;
