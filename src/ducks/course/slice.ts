import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { Course, CourseState } from './types'

const initialState: CourseState = {
    isFetching: false,
    hasError: false
}

export const courseSlice = createSlice({
    name: 'course',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        fetch: (state) => {
            state.isFetching = true
            state.hasError = true
        },
        fetchSuccess: (state, action: PayloadAction<Course>) => {
            state.isFetching = false
            state.course = action.payload
        },
        fetchError: (state) => {
            state.isFetching = false
            state.hasError = true
        }
    },
})

const courseActions = courseSlice.actions
const courseReducer = courseSlice.reducer
const courseDuckName = courseSlice.name

export {
    courseActions,
    courseReducer,
    courseDuckName,
}
