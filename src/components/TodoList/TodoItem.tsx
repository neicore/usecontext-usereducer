import { useTodoState } from '../../context/TodoState'

interface Props {
  id: string
}

const TodoItem = ({ id }: Props) => {
  const { state, dispatch } = useTodoState()
  let todoIndex = state.findIndex((s) => s.id === id)

  return (
    <div className="flex flex-col gap-1 items-start justify-between py-4 px-4 bg-slate-800 rounded-lg mt-4 sm:flex-row sm:items-center sm:gap-0">
      <span
        className={`${
          state[todoIndex].isDone ? 'line-through text-slate-400' : null
        }`}
      >
        {state[todoIndex].name}
      </span>

      <div className="flex items-center justify-between gap-4">
        <button
          className={`${
            state[todoIndex].isDone ? 'text-yellow-400' : 'text-emerald-400'
          }`}
          onClick={() =>
            dispatch({
              type: 'IS_DONE',
              payload: {
                id,
                name: state[todoIndex].name,
                isDone: state[todoIndex].isDone,
              },
            })
          }
        >
          {state[todoIndex].isDone ? 'Not Done' : 'Done'}
        </button>
        <button
          className="text-sky-400"
          onClick={() =>
            dispatch({
              type: 'EDIT',
              payload: {
                id,
                name: state[todoIndex].name,
                isDone: state[todoIndex].isDone,
              },
            })
          }
        >
          Edit
        </button>
        <button
          className="text-rose-400"
          onClick={() =>
            dispatch({
              type: 'DELETE',
              payload: {
                id,
                name: state[todoIndex].name,
                isDone: state[todoIndex].isDone,
              },
            })
          }
        >
          Delete
        </button>
      </div>
    </div>
  )
}
export default TodoItem
