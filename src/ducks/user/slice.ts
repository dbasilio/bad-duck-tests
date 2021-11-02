import { createAction, createReducer } from '@reduxjs/toolkit'

import type { UserState, User } from './types'

const initialState: UserState = {
    isFetching: false,
    hasError: false
}

const userDuckName = 'user'

const fetch = createAction('user/fetch')
const fetchSuccess = createAction('user/fetchSuccess', (user: User) => ({ payload: user }))
const fetchError = createAction('user/fetchFail')

const userReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetch, (state) => {
            state.isFetching = true
            state.hasError = false
        }).addCase(fetchError, (state) => {
            state.isFetching = false
            state.hasError = true
        }).addCase(fetchSuccess, (state, action) => {
            state.isFetching = false
            state.user = action.payload
        })
})

const userActions = {
    fetch,
    fetchError,
    fetchSuccess
}

export {
    userActions,
    userReducer,
    userDuckName,
}
