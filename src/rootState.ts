import { userDuckName, UserState } from './ducks/user'
import { courseDuckName, CourseState, } from './ducks/course'

export type RootState = {
    [userDuckName]?: UserState,
    [courseDuckName]?: CourseState,
}
