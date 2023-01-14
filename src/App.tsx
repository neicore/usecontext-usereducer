import { useReducer, useState } from 'react'

interface StateType {
  count: number
}

interface Actions {
  type: 'initialize' | 'increment' | 'decrement'
  payload: StateType
}

const reducer = (state: StateType, action: Actions) => {
  const { count } = state
  const { type, payload } = action

  switch (type) {
    case 'initialize':
      return {
        ...state,
        count: payload?.count,
      }

    case 'increment':
      return {
        ...state,
        count: count + 1,
      }

    case 'decrement':
      return {
        ...state,
        count: count - 1,
      }

    default:
      return state
  }
}

const initialState = {
  count: 0,
} satisfies StateType

function App() {
  const [input, setInput] = useState(0)
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <h1>useReducer Example</h1>

      <div>
        <label>Start Count</label>
        <input
          type="number"
          onChange={(e) => setInput(parseInt(e.target.value))}
          value={input}
        />
        <br />
        <button
          onClick={() =>
            dispatch({
              type: 'initialize',
              payload: {
                count: input,
              },
            })
          }
        >
          Initialize Counter
        </button>
      </div>

      <p>{state.count}</p>
      <div>
        <button
          onClick={() =>
            dispatch({
              type: 'increment',
              payload: {
                count: state.count,
              },
            })
          }
        >
          Increment
        </button>
        <button
          onClick={() =>
            dispatch({
              type: 'decrement',
              payload: {
                count: state.count,
              },
            })
          }
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default App
