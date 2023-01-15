import { useTodoState } from '../../context/TodoState'
import TodoItem from './TodoItem'

const TodoList = () => {
  const { state } = useTodoState()

  return (
    <div className="bg-slate-900 w-full h-full rounded-lg p-4 overflow-y-auto scrollbar">
      <h2 className="text-xl">Todos</h2>

      {state.length === 0 ? (
        <h2 className="text-center text-slate-500">No todos yet</h2>
      ) : (
        state.map((s) => <TodoItem id={s.id} key={s.id} />)
      )}
    </div>
  )
}
export default TodoList
