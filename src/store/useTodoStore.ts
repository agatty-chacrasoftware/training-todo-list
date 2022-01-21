import { Todo } from '@/components/TODO/TODO'
import { StatHelpText } from '@chakra-ui/react'
import { uuid } from 'uuidv4'
import create from 'zustand'

export interface TodoStore {
  todoListArray: Todo[]
  setTodoListArray: (todoData: Todo) => void
  removeTodoItem: (id: String) => void
}

const useTodoStore = create<TodoStore>((set) => ({
  todoListArray: [],

  setTodoListArray: (todoData) => {
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
}))

export default useTodoStore
