const defaultFetchOptions = {
    headers: {
        'Authorization': localStorage.getItem('AuthToken'),
        'Content-Type':'application/json'
    }
}

export default defaultFetchOptions