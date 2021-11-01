export type Course = {
    courseId: number,
    courseName: string
}

export type CourseState = {
    course?: Course,
    isFetching: boolean,
    hasError: boolean
}
