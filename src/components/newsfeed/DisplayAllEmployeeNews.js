import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchEmployeeNewsfeed } from '../../actions/NewsfeedActions'
import ShowLoading from '../../util/ShowLoading'
import ShowErrors from '../../util/ShowErrors'

const DisplayAllEmployeeNews = (props) => {

    dispatch = useDispatch()

    let newsfeed  = useSelector(state => state.newsfeed.news)
    let loading   = useSelector(state => state.newsfeed.loading)
    let hasErrors = useSelector(state => state.newsfeed.hasErrors)

    useEffect(() => {
        dispatch(fetchEmployeeNewsfeed)
    },[])

    if (loading) {
        return(
            <ShowLoading />
        )
    }

    if (hasErrors) {
        return(
            <ShowErrors />
        )
    }

    if (newsfeed) {
        return(
            <>
                {newsfeed.map((article) => (
                    <div>{article.title}</div>
                ))}
            </>
        )
    }
}

export default DisplayAllEmployeeNews