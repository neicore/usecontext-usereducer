import { TodoContextType } from './todoContext'

export interface Action {
  type: 'CREATE' | 'IS_DONE' | 'DELETE'
  payload: {
    id: string
    name: string
    isDone: boolean
  }
}

const todoReducer = (state: TodoContextType[], action: Action) => {
  const { type, payload } = action

  switch (type) {
    case 'CREATE':
      return [...state, payload]

    case 'IS_DONE':
      state.forEach((s) =>
        s.id === payload.id ? (s.isDone = !payload.isDone) : s.isDone
      )

      return [...state]

    case 'DELETE':
      return state.filter((s) => s.id !== payload.id)

    default:
      return state
  }
}

export default todoReducer
