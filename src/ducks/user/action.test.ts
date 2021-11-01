import { userActions } from '.'
import type { User } from './types'

describe('user actions', () => {
    it('has the correct shape for user fetch', () => {
        const user: User = {
            username: 'username',
            isActive: true
        }
        const fetchUserShape = userActions.fetchSuccess(user)

        expect(fetchUserShape.payload).toEqual(user)
    })
})
