export const getUsername = state => state.auth.user.name;
export const getStatus = state => state.auth.isLoggedIn

export const authSelectors = {
    getUsername: getUsername,
    getStatus: getStatus,
}

// export default authSelectors = {
//     getUsername:getUsername,
//     getStatus:getStatus
// }


