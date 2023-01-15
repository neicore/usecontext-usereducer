import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import TodoState from './context/TodoState'

function App() {
  return (
    <div className="App p-3 sm:p-0 sm:py-3 w-screen h-screen flex items-center justify-center bg-slate-900 text-slate-200">
      <div className="flex flex-col items-center w-full sm:w-3/5 h-full bg-slate-800 rounded-lg sm:p-5 p-2 gap-2 sm:gap-5">
        <TodoState>
          <TodoInput />
          <TodoList />
        </TodoState>
      </div>
    </div>
  )
}

export default App
