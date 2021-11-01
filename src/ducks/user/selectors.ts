import type { RootState } from '../../rootState'

import { userDuckName } from './slice'

const rootStateSelector = (state: RootState) => state[userDuckName]

export const userSelector = (state: RootState) => rootStateSelector(state)?.user

export const isFetchingSelector = (state: RootState) => rootStateSelector(state)?.isFetching ?? false

export const hasErrorSelector = (state: RootState) => rootStateSelector(state)?.hasError ?? false


