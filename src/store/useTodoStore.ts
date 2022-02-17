import { Todo } from '@/components/TODO/TODO'
import create from 'zustand'
import { uuid } from 'uuidv4'

export interface TodoStore {
  todoListArray: Todo[]
  addTodoItem: (todoData: Omit<Todo, 'id' | 'isCompleted'>) => void
  removeTodoItem: (id: string) => void
  markTodoComplete: (id: string) => void
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

  removeTodoItem: (id: string) => {
    set((state) => ({
      todoListArray: state.todoListArray.filter((todo) => todo.id !== id),
    }))
  },

  markTodoComplete: (id: string) => {
    set((state) => ({
      todoListArray: state.todoListArray.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      ),
    }))
  },
}))

export default useTodoStore
