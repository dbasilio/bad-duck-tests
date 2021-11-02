import { userSelector, isFetchingSelector, hasErrorSelector } from '.'

describe('user selectors', () => {
    it('returns undefined if state is undefined', () => {
        const user = userSelector({})

        expect(user).toBeUndefined()
    })

    it('returns undefined if duck defined but not user', () => {
        const user = userSelector({
            user: {
                isFetching: false,
                hasError: false
            }
        })

        expect(user).toBeUndefined()
    })

    it('returns user if defined', () => {
        const user = userSelector({
            user: {
                isFetching: false,
                hasError: false,
                user: {
                    username: 'username',
                    isActive: true
                }
            }
        })

        expect(user).toEqual({
            username: 'username',
            isActive: true
        })
    })

    it('returns is fetching correctly', () => {
        const isFetching = isFetchingSelector({
            user: {
                isFetching: true,
                hasError: false,
            }
        })

        expect(isFetching).toBe(true)
    })

    it('returns hasError correctly', () => {
        const hasError = hasErrorSelector({
            user: {
                isFetching: false,
                hasError: true,
            }
        })

        expect(hasError).toBe(true)
    })
})
