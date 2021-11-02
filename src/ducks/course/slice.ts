import { createAction, createReducer } from '@reduxjs/toolkit'

import type { Course, CourseState } from './types'

const initialState: CourseState = {
    isFetching: false,
    hasError: false
}

const courseDuckName = 'course'

const fetch = createAction('course/fetch')
const fetchSuccess = createAction('course/fetchSuccess', (course: Course) => ({ payload: course }))
const fetchError = createAction('course/fetchFail')

const courseReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetch, (state) => {
            state.isFetching = true
            state.hasError = false
        }).addCase(fetchError, (state) => {
            state.isFetching = false
            state.hasError = true
        }).addCase(fetchSuccess, (state, action) => {
            state.isFetching = false
            state.course = action.payload
        })
})

const courseActions = {
    fetch,
    fetchError,
    fetchSuccess
}

export {
    courseActions,
    courseReducer,
    courseDuckName,
}
