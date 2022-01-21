import { Todo } from '@/components/TODO/TODO'
import { uuid } from 'uuidv4'
import create from 'zustand'

export interface TodoStore {
  todoListArray: Todo[]
  addTodoItem: (todoData: Todo) => void
  removeTodoItem: (id: String) => void
  markTodoComplete: (id: String) => void
}

const useTodoStore = create<TodoStore>((set) => ({
  todoListArray: [],

  addTodoItem: (todoData) => {
    set((state) => ({
      todoListArray: [
        ...state.todoListArray,
        {
          id: uuid(),
          title: todoData.title,
          description: todoData.description,
          isCompleted: false,
        },
      ],
    }))
  },

  removeTodoItem: (id: String) => {
    set((state) => ({
      todoListArray: state.todoListArray.filter((todo) => todo.id !== id),
    }))
  },

  markTodoComplete: (id: String) => {
    set((state) => ({
      todoListArray: state.todoListArray.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      ),
    }))
  },
}))

export default useTodoStore
