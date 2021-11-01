import { userSelector } from '.'

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
})
