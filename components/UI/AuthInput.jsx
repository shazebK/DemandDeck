import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import { OutlinedInput } from '@mui/material';

export default function AuthInput({type,onChange,placeholder,children}) {
  return (
    <>
     <OutlinedInput
        type = {type==null?"text":type}
        placeholder = {placeholder}
        className = "rounded-3xl w-full my-2"
        startAdornment={
          <InputAdornment position="start">
            {children}
          </InputAdornment>
        }
  />
  </>
  )
}
