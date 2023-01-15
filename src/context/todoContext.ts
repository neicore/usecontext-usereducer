import { createContext, Dispatch } from 'react'
import { Action } from './todoReducer'

export interface TodoContextType {
  id: string
  name: string
  isDone: boolean
}

const TodoContext = createContext(
  {} as { state: TodoContextType[]; dispatch: Dispatch<Action> }
)

export default TodoContext
