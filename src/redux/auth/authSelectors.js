export const getUsername = state => state.auth.user.name;
export const getStatus = state => state.auth.isLoggedIn

export const authSelectors = {
    getUsername,
    getStatus
}

