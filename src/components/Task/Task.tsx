import React from 'react';
import './task.css';

interface TaskProps{
    text: string;
    onRemove: React.MouseEventHandler;
}

const Task: React.FC<TaskProps> = ({
    text    ,
    onRemove
}) => {
    return (
        <span className="task">
            <p>{text}</p>
            <button className={"button-task"} onClick={onRemove}>Удалить</button>
        </span>
    );
};

export default Task;

