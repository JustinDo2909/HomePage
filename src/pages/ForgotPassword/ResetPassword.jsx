import React, { useState } from 'react'
import {TextField, Alert } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { resetPassword } from '../../utils/ApiFunction'
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';
import { useSearchParams } from 'react-router-dom'
const ResetPassword = () => {
    const [password , setPassword] = useState("")
    const [passwordConfirm , setPasswordConfirm] = useState("")
    const navigate = useNavigate();
    const [error , setError] = useState("")
    const [searchParams] = useSearchParams();
    const [open, setOpen] = useState(false);
    
    const  handleSubmit= async (e) => {
        e.preventDefault();
        try {
            const code = searchParams.get('code')
            if(password.length < 5 || passwordConfirm.length < 5 || password !== passwordConfirm){
                setError("Your password or comfirm password is not match or not have atleast 5 characters!")
            }
            else{
                const response = await resetPassword(code, password)
                if(response !== null && response.status ===200){
                    setOpen(true);
                }
            }
        } catch (error) {
            
        }
    }

    const checkPasswordConfirm = (e) => {
        if(passwordConfirm !== password){
            setError("Your comfirm password is not match!")
        }
        setTimeout(() => {
            setError('');
        }, 5000);
    }

    const handleClickDialog = () => {
        setOpen(false)
        navigate("/");
    }
  return (
    <div className='wrapperrrr'>
        <form className='login-form' onSubmit={(e)=>handleSubmit(e)}>
            {error && <Alert severity="error" className='mb-3'>{error}</Alert>}               
            <TextField id="outlined-basic" label="NewPassword" onChange={e => setPassword(e.target.value)} variant="outlined" fullWidth required/>
                <br/>
            <TextField id="outlined-basic" label="Confirm Password" onChange={e => setPasswordConfirm(e.target.value)} onBlur={checkPasswordConfirm} variant="outlined" fullWidth required/>
                
                
                
                <div className="text-center">
                    <input type="submit" value="Save" className="btn btn-primary m-3 col-sm-3" />
                    <input
                    type="button"
                    value="Cancel"
                    className="btn btn-secondary"
                    id="buttonCancel col-sm-3"
                    onClick={e => navigate('/login')}
                    />
                </div>
                <Dialog
                open={open}
                onClose={handleClickDialog}
                >
                <DialogTitle>Success</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    Reset Password successfully!
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
  )
}

export default ResetPassword