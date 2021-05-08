import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'

const List = () => {

    let dispatch = useDispatch()

    let loading   = useSelector(state => state.employees.loading)
    let hasErrors = useSelector(state => state.employees.hasErrors)
    let employees = useSelector(state => state.employees.interests)

    useEffect(() => {
        console.log("component has mounted!")
    },[])

    if (loading) {
        return(
            <>
                Loading... Please wait
            </>
        )
    } else if (hasErrors) {
        return(
            <>
                Error. Something went wrong!
            </>
        )
    } else {
        return(
        <>
            <h3>This is the build component</h3>
        </>
        )
    }
}

export default List