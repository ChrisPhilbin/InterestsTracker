const useCheckAuthStatus = (props) => {
    const authToken = localStorage.getItem('AuthToken')
    if (authToken === null) {
        props.history.push('/sign_in')
    }
}

export default useCheckAuthStatus