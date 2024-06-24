import {useState} from 'react';
import { Action} from '../types';
import './todoform.scss';

interface TodoFormProps {
    dispatch: React.Dispatch<Action>;
}

function TodoForm({dispatch}: TodoFormProps) {
    const [text, setText] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!text.trim()) return;
        dispatch({type: 'ADD_TODO', payload: text});
        setText('');
    };

    return (
        <form onSubmit={handleSubmit} className='todo-form'>
            <input
                className='todo-input'
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Create a new todo..."
            />
        </form>
    );
}

export default TodoForm;