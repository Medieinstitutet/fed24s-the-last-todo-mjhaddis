import TodoTypes from "../models/todo";

interface Props {
    todo: TodoTypes
    onToggle: (id: number) => void
    onRemove: (id: number) => void
}

export const TodoItem = ({ todo, onToggle, onRemove }: Props) => {
    return (
        <li className="flex items-center gap-4 p-2 border rounded">
            <input 
            type="checkbox" 
            checked={todo.done} 
            onChange={() => onToggle(todo.id)}
            className="cursor-pointer" 
            />
            <span className={todo.done ? "line-through text-gray-500" : ""}>
                {todo.text}
            </span>
            <button
            onClick={() => onRemove(todo.id)}
            className="text-red-500 ml-auto"
            >
                ❌
            </button>
        </li>
    )
}