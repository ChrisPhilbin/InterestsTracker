const useCheckAuthStatus = (props) => {
    const authToken = localStorage.getItem('AuthToken')
    if (authToken === "null" || !authToken) {
        props.history.push('/sign_in')
    } else {
        return authToken
    }
}

export default useCheckAuthStatus