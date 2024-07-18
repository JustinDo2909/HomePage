// import React, { useState } from 'react';
// import './Signup.scss';
// import { useNavigate } from 'react-router-dom';
// import Alert from 'react-bootstrap/Alert';
// import { createNewAccount } from '../../utils/ApiFunction';
// import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Link } from '@mui/material';
// const Signup = () => {
//     const [user , setUser] = useState({
//         email : "",
//         password : "",
//         first_name : "",
//         last_name : "",
//         location : "",
//         phone_number: ""
//     })
//     const [passwordConfirm, setPasswordConfirm] = useState('');
//     const [error, setError] = useState('');
//     const [open, setOpen] = useState(false);
//     const navigate = useNavigate();

//     const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         setUser({ ...user, [name]: value });
//     };

//     const checkPasswordConfirm = () => {
//         if(user.password !== passwordConfirm){
//             setError("Your password confirm does not match to your password!")
//         }else{
//             setError("")
//         }
//     }
//     const handleSubmit = async (e) =>{
//         e.preventDefault()
//         try {
//             if(user.password === passwordConfirm){
//                 const result = await createNewAccount(user);
//             console.log(result.status);
//             if (result.status < 200 || result.status >= 300) {
//                 setError("Email is already exist!")
//             }
//             else{
//                 setOpen(true);
//                 setTimeout(() => {
//                   setOpen(false);
//                   navigate("/login");
//                 }, 10000);
//             }
//             } else{
//                 setError("Your password confirm does not match to your password!")
//             }
            
//         } catch (error) {
//             console.log(error);
//             setError("Email is already exist!")
//         }
//         setTimeout(() => {
//             setError("");
//           }, 3000);
//     }

//     const handleClickCancel = () => {
//         navigate("/login");
//     }

//     const handleClickDialog = () => {
//         setOpen(false)
//         navigate("/");
//     }

//     return (
//         <div className='wrapperrrr'>
//             {error &&  (<Alert key='danger' variant='danger'>
//                             {error}
//                     </Alert>)}
//             <form className='login-form' onSubmit={(e)=>handleSubmit(e)}>
//                  <div className='form-group row'>
//                     <div className='col-sm-6'>
//                         <label htmlFor='first_name' className='text-start'>FirstName</label>
//                         <input
//                             className='form-control'
//                             type='text'
//                             id='first_name'
//                             name='first_name'
//                             onChange={handleInputChange}
//                             required
//                         />
//                     </div>
//                     <div className='col-sm-6 '>
//                         <label htmlFor='last_name' className='text-start'>LastName</label>
//                         <input
//                             className='form-control'
//                             type='text'
//                             id='last_name'
//                             name='last_name'
//                             onChange={handleInputChange}
//                             required
//                         />
//                     </div>
//                 </div>
//                 <div className='form-group'>
//                     <label htmlFor='email' className='text-start'>Email</label>
//                     <input
//                         className='form-control'
//                         type='email'
//                         id='email'
//                         name='email'
//                         value={user.email}
//                         onChange={handleInputChange}
//                         required
//                     />
//                 </div>
//                 <div className='form-group'>
//                     <label htmlFor='password' className='text-start'>Password</label>
//                     <input
//                         className='form-control'
//                         type='password'
//                         id='password'
//                         name='password'
//                         value={user.password}
//                         onChange={handleInputChange}
//                         minLength={5}
//                         required
//                     />
//                 </div>
//                 <div className='form-group'>
//                     <label htmlFor='password_confirm' className='text-start'>Confirm Password</label>
//                     <input
//                         className='form-control'
//                         type='password'
//                         id='password_confirm'
//                         name='password_confirm'
//                         onChange={(e) => setPasswordConfirm(e.target.value)}
//                         onBlur={checkPasswordConfirm}
//                         required
//                     />
//                 </div>
//                 <div className='form-group'>
//                     <label htmlFor='phone_number' className='text-start'>Phone Number</label>
//                     <input
//                         className='form-control'
//                         type='phone_number'
//                         id='phone_number'
//                         name='phone_number'
//                         value={user.phone_number}
//                         onChange={handleInputChange}
//                         minLength={10}
//                         maxLength={10}
//                         required
//                     />
//                 </div>
//                 <div className='form-group'>
//                     <label htmlFor='location' className='text-start'>Location</label>
//                     <input
//                         className='form-control'
//                         type='location'
//                         id='location'
//                         name='location'
//                         value={user.location}
//                         onChange={handleInputChange}
//                         required
//                     />
//                 </div>

                
                
//                 <div className="text-center">
//                     <input type="submit" value="Sign Up" className="btn btn-primary m-3 col-sm-3" />
//                     <input
//                     type="button"
//                     value="Cancel"
//                     className="btn btn-secondary"
//                     id="buttonCancel col-sm-3"
//                     onClick={() => handleClickCancel()}
//                     />
//             </div>

//             <Dialog
//                 open={open}
//                 onClose={handleClickDialog}
//             >
//             <DialogTitle>Success</DialogTitle>
//             <DialogContent>
//             <DialogContentText>
//                 Account created successfully! Please check your email to verify acocunt before login.
//             </DialogContentText>
//             </DialogContent>
//             <DialogActions>
//             <Button onClick={handleClickDialog} color="primary">
//                 Close
//             </Button>
//             </DialogActions>
//             </Dialog>

//             </form>
//         </div>
//     );
// }

// export default Signup;



import React, { useState } from 'react';
import './Signup.scss';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, TextField, Alert, Grid, Box, CircularProgress, Typography } from '@mui/material';
import { createNewAccount } from '../../utils/ApiFunction';

const Signup = () => {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        location: "",
        phone_number: ""
    });
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [error, setError] = useState('');
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const checkPasswordConfirm = () => {
        if (user.password !== passwordConfirm) {
            setError("Your password confirmation does not match your password!");
        } else {
            setError("");
        }
    };

    const validate = () => {
        // Validate email format
        if (!user.email.endsWith('@gmail.com') && !user.email.endsWith('@fpt.edu.vn')) {
            setError("Please enter a valid email address ending with @gmail.com or @fpt.edu.vn.");
            return false;
        }

        // Validate phone number format
        if (!/^(0\d{9})$/.test(user.phone_number)) {
            setError("Please enter a valid phone number starting with '0' and containing 10 digits.");
            return false;
        }
        if (user.password.length < 5) {
            setError("Please enter password with 5 character");
            return false;
        }

        return true;
    };
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            if (user.password === passwordConfirm) {
                if (!validate()) {
                    return;
                }

                const result = await createNewAccount(user);
                if (result.status < 200 || result.status >= 300) {
                    setError("Email already exists!");
                } else {
                    setOpen(true);
                    setTimeout(() => {
                        setOpen(false);
                        navigate("/login");
                    }, 10000);
                }
            } else {
                setError("Your password confirmation does not match your password!");
            }
        } catch (error) {
            console.log(error);
            setError("Email already exists!");
        }finally{
            setLoading(false)
        }
        setTimeout(() => {
            setError("");
        }, 3000);
    };

    const handleClickCancel = () => {
        navigate("/login");
    };

    const handleClickDialog = () => {
        setOpen(false);
        navigate("/");
    };

    if (loading) {
        return (
          <Box mt={20} mb={38} textAlign={'center'}>
             <CircularProgress size={50} color="primary" />
                  <Box mt={2}>
                    <h3>LOADING. . .</h3>
                  </Box>
          </Box>
        );
      }


    return (
        <>
       

        <Box className='wrapperrrr' sx={{ p: 3, maxWidth: '600px', mx: 'auto', backgroundColor: '#f9f9f9', borderRadius: 2, boxShadow: 3 }}>
            {error && (
                <Alert severity="error" sx={{ mb: 2 }}>
                    {error}
                </Alert>
            )}
             <Typography sx={{mb: 4}} variant='h4'>Sign Up</Typography>
            <form className='login-form' onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="First Name"
                            variant="outlined"
                            id='first_name'
                            name='first_name'
                            onChange={handleInputChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Last Name"
                            variant="outlined"
                            id='last_name'
                            name='last_name'
                            onChange={handleInputChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Email"
                            variant="outlined"
                            type='email'
                            id='email'
                            name='email'
                            value={user.email}
                            onChange={handleInputChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Password"
                            variant="outlined"
                            type='password'
                            id='password'
                            name='password'
                            value={user.password}
                            onChange={handleInputChange}
                            minLength={5}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Confirm Password"
                            variant="outlined"
                            type='password'
                            id='password_confirm'
                            name='password_confirm'
                            onChange={(e) => setPasswordConfirm(e.target.value)}
                            onBlur={checkPasswordConfirm}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Phone Number"
                            variant="outlined"
                            type='text'
                            id='phone_number'
                            name='phone_number'
                            value={user.phone_number}
                            onChange={handleInputChange}
                            inputProps={{ minLength: 10, maxLength: 10 }}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Location"
                            variant="outlined"
                            type='text'
                            id='location'
                            name='location'
                            value={user.location}
                            onChange={handleInputChange}
                            required
                        />
                    </Grid>
                </Grid>
                <Box textAlign="center" sx={{ mt: 3 }}>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{ mr: 2 }}
                    >
                        Sign Up
                    </Button>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={handleClickCancel}
                    >
                        Cancel
                    </Button>
                </Box>
            </form>
            <Dialog
                open={open}
                onClose={handleClickDialog}
            >
                <DialogTitle>Success</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Account created successfully! Please check your email to verify your account before logging in.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClickDialog} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
        </>

    );
}

export default Signup;











