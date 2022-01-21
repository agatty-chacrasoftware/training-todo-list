import { Todo } from '@/components/TODO/TODO'
import create from 'zustand'

export interface TodoStore {
  todoListArray: Todo[]
  setTodoListArray: (todoData: Todo) => void
}

const useTodoStore = create<TodoStore>((set) => ({
  todoListArray: [],
  setTodoListArray: (todoData) => {
    set((state) => ({
      todoListArray: [...state.todoListArray, todoData],
    }))
  },
}))

export default useTodoStore
