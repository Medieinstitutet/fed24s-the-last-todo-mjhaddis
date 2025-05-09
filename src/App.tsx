import { useState } from 'react'
import './App.css'
import { Form } from './components/Form'
import { TodoList } from './components/TodoList'
import TodoTypes from './models/todo'

function App() {
  const [todos, setTodos] = useState<TodoTypes[]>([
    { id: 1, text: "Learn React.js", done: false },
    { id: 2, text: "Learn Next.js", done: false },
    { id: 3, text: "Learn Vue.js", done: false },
  ])

  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest")

  const addTodo = (text: string) => {
    const newTodo = {
      id: Date.now(),
      text,
      done: false
    }
    setTodos(prev => [...prev, newTodo])
  }

  const toggleTodo = (id: number) => {
    setTodos(prev =>
      prev.map(todo => 
        todo.id === id ? { ... todo, done: !todo.done } : todo
      )
    )
  }
  const removeTodo = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  const sortedTodos = [...todos].sort((a, b) =>
  sortOrder === "newest" ? b.id - a.id : a.id - b.id
)

const completedCount = todos.filter(todo => todo.done).length
const activeCount = todos.length - completedCount
 

  return (
    <>
      <Form onAdd={addTodo}/>
      <div className='flex justify-center my-4'>
        <button
        onClick={() => setSortOrder(prev => (prev === "newest" ? "oldest" : "newest"))}>
          Sort: {sortOrder === "newest" ? "Newest first ⬇️" : "Oldest first ⬆️"}
        </button>
      </div>
      <div className='flex justify-center gap-4 text-sm my-2'>
        <span>✅ Done: {completedCount}</span>
        <span>📝 Not done: {activeCount}</span>
      </div>
      <TodoList
      todos={sortedTodos}
      onToggle={toggleTodo}
      onRemove={removeTodo}
      />
    </>
  )
}

export default App
