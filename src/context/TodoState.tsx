import { ReactNode, useContext, useReducer } from 'react'
import TodoContext, { TodoContextType } from './todoContext'
import todoReducer from './todoReducer'

interface Props {
  children: ReactNode
}

const TodoState = ({ children }: Props) => {
  const initialState: TodoContextType[] = []

  const [state, dispatch] = useReducer(todoReducer, initialState)

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoState
export const useTodoState = () => useContext(TodoContext)
