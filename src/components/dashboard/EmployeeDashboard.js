import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchEmployeeAlerts } from '../../actions/AlertActions'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import ShowLoading from '../../util/ShowLoading'
import Typoegraphy from '@material-ui/core/Typography'
import useCheckAuthStatus from '../../hooks/useCheckAuthStatus'

const EmployeeDashboard = () => {

    const dispatch = useDispatch()

    const authToken = useCheckAuthStatus()

    useEffect(() => {
        dispatch(fetchEmployeeAlerts(authToken))
    }, [dispatch])

    let alerts    = useSelector(state => state.alerts.alerts)
    let loading   = useSelector(state => state.alerts.loading)

    const formatDate = (date) => {
        let d = new Date(date),
        month = d.getMonth() + 1,
        day = d.getDate()

        if (month.length < 2) {
            month = '0' + month
        }
        if (day.length < 2) {
            day = '0' + day
        }

        return [month, day].join('-')

    }
    
    if (loading) {
        return(
            <>
                <ShowLoading />
            </>
        )
    }

    if (Object.keys(alerts).length > 0) {
        return(
            <>
                <Typoegraphy variant="h3" gutterBottom>Your team: At-A-Glance</Typoegraphy>

                <Grid container spacing={3}>
                    <Grid item xs={12} md={3}>
                        <Paper elevation={3} style={{ padding: 20 }}>
                            <Typoegraphy variant="h5" gutterBottom>Overdue alerts</Typoegraphy> { alerts.overdue_alerts.length ?
                                <div>
                                    {alerts.overdue_alerts.map((employee) => (
                                        <span key={employee.id}>{employee.name}</span>
                                    ))}
                                </div>
                                    :
                                <div>
                                    There are no overdue alerts
                                </div>
                                    }
                        </Paper>
                    </Grid>
                
                    <Grid item xs={12} md={3}>
                        <Paper elevation={3} style={{ padding: 20 }}>
                            <Typoegraphy variant="h5" gutterBottom>Today's birthdays</Typoegraphy> { alerts.todays_birthdays.length ?
                                <div>
                                    {alerts.todays_birthdays.map((employee) => (
                                        <span key={employee.id}>{employee.name}</span>
                                    ))}
                                </div>
                            :
                                <div>
                                    There are no birthdays today
                                </div>
                            }
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <Paper elevation={3} style={{ padding: 20 }}>
                            <Typoegraphy variant="h5" gutterBottom>Upcoming birthdays</Typoegraphy> { alerts.upcoming_birthdays.length ? 
                                <div>
                                    {alerts.upcoming_birthdays.map((employee) => (
                                        <span key={employee.id}>{employee.name} on {formatDate(employee.birthday)}</span>
                                    ))}
                                </div>
                            :
                                <div>
                                    No upcoming birthdays
                                </div>
                            }
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <Paper elevation={3} style={{ padding: 10 }}>
                            <Typoegraphy variant="h5" gutterBottom>Upcoming anniversaries</Typoegraphy> { alerts.upcoming_work_anniversaries.length ? 
                                <div>
                                    {alerts.upcoming_work_anniversaries.map((employee) => (
                                        <span key={employee.id}>{employee.name} on {formatDate(employee.birthday)}<br /></span>
                                    ))}
                                </div>
                            :
                                <div>
                                    No upcoming birthdays
                                </div>
                            }
                        </Paper>
                    </Grid>
                </Grid>
            </>
        )
    } else {
        return(
            <>
                <ShowLoading />
            </>
        )
    }
}

export default EmployeeDashboard
