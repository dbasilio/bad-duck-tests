import type { RootState } from '../../rootState'

import { courseDuckName } from './slice'

const rootStateSelector = (state: RootState) => state[courseDuckName]

export const courseSelector = (state: RootState) => rootStateSelector(state)?.course

export const isFetchingSelector = (state: RootState) => rootStateSelector(state)?.isFetching ?? false

export const hasErrorSelector = (state: RootState) => rootStateSelector(state)?.hasError ?? false


