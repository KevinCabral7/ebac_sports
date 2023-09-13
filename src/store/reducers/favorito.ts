import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritoState = {
  favoritos: Produto[]
}

const initialState: FavoritoState = {
  favoritos: []
}

const favoritoSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const fav = action.payload
      const indexToRemove = state.favoritos.findIndex((f) => f.id === fav.id)

      if (indexToRemove !== -1) {
        state.favoritos.splice(indexToRemove, 1)
      } else {
        state.favoritos.push(fav)
      }
    }
  }
})

export const { favoritar } = favoritoSlice.actions
export default favoritoSlice.reducer
