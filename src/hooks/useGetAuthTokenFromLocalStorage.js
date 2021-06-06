export default useGetAuthTokenFromLocalStorage = () => {
    const authToken = localStorage.getItem('AuthToken')
    return authToken
}