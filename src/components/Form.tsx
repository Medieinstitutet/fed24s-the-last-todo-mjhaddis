import { useState } from "react"

interface Props {
  onAdd: (text: string) => void
}

export const Form = ({onAdd}: Props) => {
  const [value, setValue] = useState<string>("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (value.trim()) {
      onAdd(value)
      setValue("")
    }    
  }
    return (
        <div className="flex items-center justify-center min-h-min w-screen">
        <form className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-md w-full max-w-md" onSubmit={handleSubmit}>
        <label className='mb-[10px] block text-lg font-medium text-dark dark:text-black'>
          React Todo App ✅
        </label>
        <input
          type='text'
          placeholder='What do you need todo? '
          className='w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 py-[10px] px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2'
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button>
          Add 🚀
        </button>
        </form>
        </div>
 )
}