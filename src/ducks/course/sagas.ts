import axios, { AxiosResponse } from 'axios'
import { call, put, takeEvery } from 'redux-saga/effects'
import { userActions } from './slice'
import type { Course } from './types'

function* userSaga() {
    try {
        const response: AxiosResponse<Course> = yield call(axios.get, '/course')
        yield put(userActions.fetchSuccess(response.data))
    } catch {
        yield put(userActions.fetchError())
    }
}

export function* courseSagaWatcher() {
    yield takeEvery(userActions.fetch.toString(), userSaga)
}
