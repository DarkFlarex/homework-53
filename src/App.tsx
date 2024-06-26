import { useState } from 'react';
import AddTaskForm  from "./components/AddTaskForm/AddTaskForm";
import Task from './components/Task/Task';
import './App.css';

interface Task {
    id: string;
    text: string;
}

const App = () => {
    const [tasks, setTasks] = useState<Task[]>([
        { id: '1', text: 'buy milk' },
        { id: '2', text: 'walk with dock' },
        { id: '3', text: 'do home work' },
    ]);

    const removeTask = (id: string) => {
        setTasks((prevTasks)=>{
            return prevTasks.filter((task) => task.id !== id);
        });
    };

    const createTask = (newTask:Task) => {
        setTasks(prevTasks => [...prevTasks, newTask ]);
    };

    return (
        <div className="App">
            <AddTaskForm onSubmit={createTask}
            />

            <div className={"task-list"}>
                {tasks.map(task => (
                    <Task
                        key={task.id}
                        text={task.text}
                        onRemove={() => removeTask(task.id)}
                    />
                ))}
            </div>
        </div>

    );
};

export default App;
