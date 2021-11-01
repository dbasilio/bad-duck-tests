export type User = {
    username: string,
    isActive: boolean,
}

export type UserState = {
    user?: User
    isFetching: boolean,
    hasError: boolean
}
