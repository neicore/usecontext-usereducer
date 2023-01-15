import { nanoid } from 'nanoid'
import { useState } from 'react'
import { useTodoState } from '../../context/TodoState'

const TodoInput = () => {
  const [value, setValue] = useState('')
  const { state, dispatch } = useTodoState()

  return (
    <form
      className="bg-slate-900 w-full rounded-lg p-4"
      onSubmit={(e) => {
        e.preventDefault()

        if (value.trim()) {
          dispatch({
            type: 'CREATE',
            payload: {
              id: nanoid(5),
              name: value,
              isDone: false,
            },
          })

          setValue('')
        }
      }}
    >
      <h1 className="text-xl">Simple Todo</h1>
      <h2 className="text-slate-500 mb-4 text-s sm:text-base">
        useContext + useReducer practice
      </h2>

      <div className="flex flex-col gap-4 sm:flex-row items-start sm:items-center sm:gap-6 text-slate-900">
        <input
          type="text"
          name="todo"
          placeholder="New todo"
          className="w-full sm:w-3/4 py-2 px-5 rounded-lg bg-slate-100 outline-none"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button className="w-full sm:w-1/4 py-2 bg-sky-500  rounded-lg">
          Add
        </button>
      </div>
    </form>
  )
}
export default TodoInput
