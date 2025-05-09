import TodoTypes from "../models/todo"
import { TodoItem } from "./TodoItem"

interface Props {
    todos: TodoTypes[]
    onToggle: (id: number) => void
    onRemove: (id: number) => void
}

export const TodoList = ({todos, onToggle, onRemove}: Props) => {
    return(
        <div className="w-full flex justify-center px-4 mt-6">
            <ul className="w-full max-w-md space-y-2">
                {todos.map((todo) => (
                    <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    />
                ))}
            </ul>
        </div>
    )
}