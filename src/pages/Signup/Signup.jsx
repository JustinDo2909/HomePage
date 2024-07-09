import React, { useState } from 'react';
import './Signup.scss';
import { useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import { createNewAccount } from '../../utils/ApiFunction';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Link } from '@mui/material';
const Signup = () => {
    const [user , setUser] = useState({
        email : "",
        password : "",
        first_name : "",
        last_name : "",
        location : "",
        phone_number: ""
    })
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [error, setError] = useState('');
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const checkPasswordConfirm = () => {
        if(user.password !== passwordConfirm){
            setError("Your password confirm does not match to your password!")
        }else{
            setError("")
        }
    }
    const handleSubmit = async (e) =>{
        e.preventDefault()
        try {
            if(user.password === passwordConfirm){
                const result = await createNewAccount(user);
            console.log(result.status);
            if (result.status < 200 || result.status >= 300) {
                setError("Email is already exist!")
            }
            else{
                setOpen(true);
                setTimeout(() => {
                  setOpen(false);
                  navigate("/login");
                }, 10000);
            }
            } else{
                setError("Your password confirm does not match to your password!")
            }
            
        } catch (error) {
            console.log(error);
            setError("Email is already exist!")
        }
        setTimeout(() => {
            setError("");
          }, 3000);
    }

    const handleClickCancel = () => {
        navigate("/login");
    }

    const handleClickDialog = () => {
        setOpen(false)
        navigate("/");
    }

    return (
        <div className='wrapperrrr'>
            {error &&  (<Alert key='danger' variant='danger'>
                            {error}
                    </Alert>)}
            <form className='login-form' onSubmit={(e)=>handleSubmit(e)}>
                 <div className='form-group row'>
                    <div className='col-sm-6'>
                        <label htmlFor='first_name' className='text-start'>FirstName</label>
                        <input
                            className='form-control'
                            type='text'
                            id='first_name'
                            name='first_name'
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className='col-sm-6 '>
                        <label htmlFor='last_name' className='text-start'>LastName</label>
                        <input
                            className='form-control'
                            type='text'
                            id='last_name'
                            name='last_name'
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                </div>
                <div className='form-group'>
                    <label htmlFor='email' className='text-start'>Email</label>
                    <input
                        className='form-control'
                        type='email'
                        id='email'
                        name='email'
                        value={user.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='password' className='text-start'>Password</label>
                    <input
                        className='form-control'
                        type='password'
                        id='password'
                        name='password'
                        value={user.password}
                        onChange={handleInputChange}
                        minLength={5}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='password_confirm' className='text-start'>Confirm Password</label>
                    <input
                        className='form-control'
                        type='password'
                        id='password_confirm'
                        name='password_confirm'
                        onChange={(e) => setPasswordConfirm(e.target.value)}
                        onBlur={checkPasswordConfirm}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='phone_number' className='text-start'>Phone Number</label>
                    <input
                        className='form-control'
                        type='phone_number'
                        id='phone_number'
                        name='phone_number'
                        value={user.phone_number}
                        onChange={handleInputChange}
                        minLength={10}
                        maxLength={10}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='location' className='text-start'>Location</label>
                    <input
                        className='form-control'
                        type='location'
                        id='location'
                        name='location'
                        value={user.location}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                
                
                <div className="text-center">
                    <input type="submit" value="Sign Up" className="btn btn-primary m-3 col-sm-3" />
                    <input
                    type="button"
                    value="Cancel"
                    className="btn btn-secondary"
                    id="buttonCancel col-sm-3"
                    onClick={() => handleClickCancel()}
                    />
            </div>

            <Dialog
                open={open}
                onClose={handleClickDialog}
            >
            <DialogTitle>Success</DialogTitle>
            <DialogContent>
            <DialogContentText>
                Account created successfully! Please check your email to verify acocunt before login.
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClickDialog} color="primary">
                Close
            </Button>
            </DialogActions>
            </Dialog>

            </form>
        </div>
    );
}

export default Signup;
