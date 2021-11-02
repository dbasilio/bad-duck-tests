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

        axiosMockAdapter.onGet('/course').reply(200, course)

        store.dispatch(courseActions.fetch())
        const fetchingState = store.getState()
        expect(isFetchingSelector(fetchingState)).toBe(true)

        await flushPromises()

        const finalState = store.getState()

        expect(courseSelector(finalState)?.courseId).toBe(course.courseId)
        expect(courseSelector(finalState)?.courseName).toBe(course.courseName)
        expect(isFetchingSelector(finalState)).toBe(false)
    })

    it('sets error when network throws', async () => {
        axiosMockAdapter.onGet('/course').networkError()

        store.dispatch(courseActions.fetch())
        await flushPromises()

        const state = store.getState()

        expect(courseSelector(state)).toBeUndefined()
        expect(hasErrorSelector(state)).toBe(true)
        expect(isFetchingSelector(state)).toBe(false)
    })
})
