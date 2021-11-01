import axios from 'axios'
import { expectSaga } from 'redux-saga-test-plan'
import * as matchers from 'redux-saga-test-plan/matchers'
import { throwError } from 'redux-saga-test-plan/providers'
import { userSagaWatcher, userActions } from '.'
import type { User } from './types'

describe('user sagas', () => {
    it('calls endpoint and returns success on fetchUser', () => {
        const user: User = {
            username: 'username',
            isActive: false
        }
        return expectSaga(userSagaWatcher)
            .provide([
                [
                    matchers.call.fn(axios.get),
                    {
                        data: user
                    },
                ],
            ])
            .put(userActions.fetchSuccess(user))
            .dispatch(userActions.fetch())
            .silentRun()
    })

    it('puts error action on failure', () => {
        return expectSaga(userSagaWatcher)
            .provide([
                [
                    matchers.call.fn(axios.get),
                    throwError(),
                ],
            ])
            .put(userActions.fetchError())
            .dispatch(userActions.fetch())
            .silentRun()
    })
})
