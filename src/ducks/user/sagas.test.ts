import axios from 'axios'
import { expectSaga, testSaga } from 'redux-saga-test-plan'
import * as matchers from 'redux-saga-test-plan/matchers'
import { throwError } from 'redux-saga-test-plan/providers'
import { userSagaWatcher, userActions } from '.'
import { userSaga } from './sagas'
import type { User } from './types'

describe('user sagas', () => {
    it('watches for correct actions on saga watcher', () => {
        testSaga(userSagaWatcher)
            .next()
            .takeEvery(userActions.fetch.toString(), userSaga)
            .next()
            .isDone()
    })

    it('calls endpoint and returns success on fetchUser', () => {
        const user: User = {
            username: 'username',
            isActive: false
        }

        return expectSaga(userSagaWatcher)
            .provide([
                [
                    matchers.call(axios.get, '/user'),
                    {
                        data: user
                    },
                ],
            ])
            .put(userActions.fetchSuccess(user))
            .dispatch(userActions.fetch())
            .silentRun()
    })

    it('puts error action on failure', () => expectSaga(userSagaWatcher)
        .provide([
            [
                matchers.call(axios.get, '/user'),
                throwError(),
            ],
        ])
        .put(userActions.fetchError())
        .dispatch(userActions.fetch())
        .silentRun()
    )
})
