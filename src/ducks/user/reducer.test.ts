import type { UserState } from './types'

import { userReducer, userActions } from '.'

describe('user reducer', () => {
    const state: UserState = {
        hasError: false,
        isFetching: false,
    }

    it('has the correct defaultState', () => {
        const state = userReducer(undefined, { type: 'unknown' })

        expect(state.user).toBeUndefined()
        expect(state.hasError).toBe(false)
        expect(state.isFetching).toBe(false)
    })

    it('has the correct state when fetch user is fire', () => {
        const state = userReducer(undefined, userActions.fetch())

        expect(state.user).toBeUndefined()
        expect(state.hasError).toBe(false)
        expect(state.isFetching).toBe(true)
    })

    it('has the correct state when fetch user success returns', () => {
        const state = userReducer(undefined, userActions.fetch())

        expect(state.user).toBeUndefined()
        expect(state.hasError).toBe(false)
        expect(state.isFetching).toBe(true)
    })
})
