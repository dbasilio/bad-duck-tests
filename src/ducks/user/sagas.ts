import axios, { AxiosResponse } from 'axios'
import { call, put, takeEvery } from 'redux-saga/effects'
import { userActions } from './slice'
import type { User } from './types'


function* userSaga() {
    try {
        const response: AxiosResponse<User> = yield call(axios.get, '/user')
        yield put(userActions.fetchSuccess(response.data))
    } catch {
        yield put(userActions.fetchError())
    }
}

export function* userSagaWatcher() {
    yield takeEvery(userActions.fetch.toString(), userSaga)
}
