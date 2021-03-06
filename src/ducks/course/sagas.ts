import axios, { AxiosResponse } from 'axios'
import { call, put, takeEvery } from 'redux-saga/effects'
import { userActions, User } from '../user'
import { courseActions } from './slice'
import type { Course } from './types'

function* userSaga() {
    try {
        const response: AxiosResponse<Course> = yield call(axios.get, '/course')
        yield put(courseActions.fetchSuccess(response.data))
    } catch {
        yield put(courseActions.fetchError())
    }
}

export function* courseSagaWatcher() {
    yield takeEvery(courseActions.fetch.toString(), userSaga)
}
