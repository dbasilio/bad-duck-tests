import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import { userDuckName, userReducer, userSagaWatcher } from './ducks/user'
import { courseDuckName, courseReducer, courseSagaWatcher } from './ducks/course'

const sagaMiddleware = createSagaMiddleware()

const sagaWatchers = [
    userSagaWatcher,
    courseSagaWatcher
]

export default function createStore() {
    const store = configureStore({
        reducer: {
            [userDuckName]: userReducer,
            [courseDuckName]: courseReducer,
        },
        middleware: [
            sagaMiddleware
        ]
    })

    sagaWatchers.forEach(watcher => sagaMiddleware.run(watcher))

    return store
}

