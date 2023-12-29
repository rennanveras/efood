import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import TypeMenu from '../../types/menu'

type CartState = {
  items: TypeMenu[]
  isOpen: boolean
  quantity: number
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  quantity: 1
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<TypeMenu>) => {
      const product = state.items.find((item) => item.id === action.payload.id)

      if (!product) {
        state.items.push(action.payload)
      } else {
        state.quantity += 1
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, open, close, remove } = cartSlice.actions
export default cartSlice.reducer
