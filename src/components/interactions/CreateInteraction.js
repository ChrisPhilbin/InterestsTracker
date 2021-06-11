// import React, { useEffect, useState } from 'react'
// import { useDispatch } from 'react-redux'
// import Button from '@material-ui/core/Button'
// import TextField from '@material-ui/core/TextField'
// import Dialog from '@material-ui/core/Dialog'
// import DialogActions from '@material-ui/core/DialogActions'
// import DialogContent from '@material-ui/core/DialogContent'
// import DialogContentText from '@material-ui/core/DialogContentText'
// import DialogTitle from '@material-ui/core/DialogTitle'

// const CreateInteraction = (props) => {

//     console.log(props, "props from Create Interaction")

//     useEffect(() => {
//         let [open, setOpen] = useState(props.openDialog)
//     },[])

//     const handleSubmit = () => {
//         alert("Handling submit...")
//         props.setOpen(false)
//     }

//     return(
//         <>
//             <Dialog open={open} onClose={setOpen(false)} aria-labelledby="form-dialog-title">
//                 <DialogTitle id="form-dialog-title">Log an interaction</DialogTitle>
//                     <DialogContent>
//                         <DialogContentText>
//                             Fill out the form below to log a recent interaction you had with Employee
//                         </DialogContentText>
//                         <TextField
//                             autoFocus
//                             margin="dense"
//                             id="name"
//                             label="Notes/Detsils about interaction"
//                             type="text"
//                             fullWidth
//                         />
//                     </DialogContent>
//                     <DialogActions>
//                     <Button onClick={handleSubmit} color="primary">
//                         Save
//                     </Button>
//                     <Button onClick={(e) => setOpen(false)} color="primary">
//                         Cancel
//                     </Button>
//                     </DialogActions>
//             </Dialog>
//         </>
//     )
// }

// export default CreateInteraction
