import { courseActions, courseSelector, hasErrorSelector, isFetchingSelector } from '.'

import createStore from '../../configureStore'
import type { Course } from './types'
import axiosMockAdapter from '../../testing/axiosMockAdapter'

describe('course tests', () => {
    let store: ReturnType<typeof createStore>

    const flushPromises = () => new Promise((r) => setImmediate(r))

    beforeEach(() => {
        store = createStore()
    })

    it('has correct defaultState', () => {
        const state = store.getState()

        expect(courseSelector(state)).toBeUndefined()
        expect(hasErrorSelector(state)).toBe(false)
        expect(isFetchingSelector(state)).toBe(false)
    })

    it('loads course correctly on success', async () => {
        const course: Course = {
            courseId: 1,
            courseName: 'course'
        }

        axiosMockAdapter.onGet('/course/', {
            ...course
        })

        store.dispatch(courseActions.fetch())
        await flushPromises()

        const state = store.getState()

        expect(courseSelector(state)?.courseId).toBe(course.courseId)
        expect(courseSelector(state)?.courseName).toBe(course.courseName)
    })

    it('sets error when network throws', async () => {
        axiosMockAdapter.onGet('/course/').networkError()

        store.dispatch(courseActions.fetch())
        await flushPromises()

        const state = store.getState()

        expect(courseSelector(state)).toBeUndefined()
        expect(hasErrorSelector(state)).toBe(true)
        expect(isFetchingSelector(state)).toBe(false)
    })
})
