import { TodoContextType } from './todoContext'

export interface Action {
  type: 'CREATE' | 'EDIT' | 'SAVE_EDIT' | 'IS_DONE' | 'DELETE'
  payload: {
    id: string
    name: string
    isDone: boolean
  }
}

const todoReducer = (state: TodoContextType[], action: Action) => {
  const { type, payload } = action
  let todoIndex

  switch (type) {
    case 'CREATE':
      return [...state, payload]

    case 'EDIT':
      todoIndex = state.findIndex((s) => s.id === payload.id)

      return [state[todoIndex]]

    case 'SAVE_EDIT':
      todoIndex = state.findIndex((s) => s.id === payload.id)

      return [state[todoIndex]]

    case 'IS_DONE':
      state.forEach((s) => {
        if (s.id === payload.id) {
          s.isDone = !payload.isDone
          return s
        } else {
          return s
        }
      })

      return [...state]

    case 'DELETE':
      return state.filter((s) => s.id !== payload.id)

    default:
      return state
  }
}

export default todoReducer
