import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchEmployeeNewsfeed } from '../../actions/NewsfeedActions'
import ShowLoading from '../../util/ShowLoading'
import ShowErrors from '../../util/ShowErrors'
import Paper from '@material-ui/core/Paper'
import Typoegraphy from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

const DisplayAllEmployeeNews = (props) => {

    const dispatch = useDispatch()

    const employee_id   = props.employee_id
    const employee_name = props.employee_name

    let newsfeed  = useSelector(state => state.newsfeeds.news)
    let loading   = useSelector(state => state.newsfeeds.loading)
    let hasErrors = useSelector(state => state.newsfeeds.hasErrors)

    console.log(newsfeed, "data inside newsfeed array")

    useEffect(() => {
        dispatch(fetchEmployeeNewsfeed(employee_id))
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
                <Paper elevation={3} square={false} style={{ padding: 15 }}>
                    <Typoegraphy variant="h4" gutterBottom>{employee_name}'s Newsfeed</Typoegraphy>

                    {newsfeed.map((article) => (
                        <div>{article.title}</div>
                    ))}
                </Paper>
            </>
        )
    }
}

export default DisplayAllEmployeeNews