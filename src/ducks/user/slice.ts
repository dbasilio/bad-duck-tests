import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { UserState, User } from './types'

const initialState: UserState = {
    isFetching: false,
    hasError: false
}

export const userSlice = createSlice({
    name: 'user',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        fetch: (state) => {
            state.isFetching = true
            state.hasError = true
        },
        fetchSuccess: (state, action: PayloadAction<User>) => {
            state.isFetching = false
            state.user = action.payload
        },
        fetchError: (state) => {
            state.isFetching = false,
                state.hasError = true
        }
    },
})

const userActions = userSlice.actions
const userReducer = userSlice.reducer
const userDuckName = userSlice.name

export {
    userActions,
    userReducer,
    userDuckName,
}
