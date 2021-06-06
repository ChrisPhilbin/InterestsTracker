const useIsLoggedIn = () => {
    const authToken = localStorage.getItem('AuthToken')

    if (authToken === "null" || !authToken) {
        return false
    } else {
        return true
    }
}

export default useIsLoggedIn