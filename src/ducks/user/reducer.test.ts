import { userReducer, userActions } from '.'

describe('user reducer', () => {
    it('has the correct defaultState', () => {
        const state = userReducer(undefined, { type: 'unknown' })

        expect(state.user).toBeUndefined()
        expect(state.hasError).toBe(false)
        expect(state.isFetching).toBe(false)
    })

    it('has the correct state when fetch user is fired', () => {
        const state = userReducer(undefined, userActions.fetch())

        expect(state.user).toBeUndefined()
        expect(state.hasError).toBe(false)
        expect(state.isFetching).toBe(true)
    })

    it('has the correct state when fetch user success returns', () => {
        const state = userReducer(undefined, userActions.fetchSuccess({
            username: 'username',
            isActive: true
        }))

        expect(state.user).toBeDefined()
        expect(state.user?.isActive).toBe(true)
        expect(state.user?.username).toBe('username')
        expect(state.hasError).toBe(false)
        expect(state.isFetching).toBe(false)
    })

    it('has the correct state when fetch user failed', () => {
        const state = userReducer(undefined, userActions.fetchError())

        expect(state.user).toBeUndefined()
        expect(state.hasError).toBe(true)
        expect(state.isFetching).toBe(false)
    })
})
