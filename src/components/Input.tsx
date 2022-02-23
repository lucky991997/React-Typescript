import React, { ChangeEvent } from 'react'

type InputProps = {
    value ?: string,
    handleChange : (event : ChangeEvent<HTMLInputElement>) => void 
}

const Input = ( { value, handleChange }: InputProps) => {
    // const handleChangeInput = (event:ChangeEvent<HTMLInputElement>) => {
    //     console.log(event.target.value)
    // }
  return (
    <input type="text" value={value} onChange={handleChange}/>
  )
}

export default Input