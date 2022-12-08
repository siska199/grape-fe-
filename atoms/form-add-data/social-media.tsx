import React from 'react'
import Button from '@atoms/common/button'
import Input from '@atoms/input/input'
import AddField from '@layouts/AddField'

const AddSocialMedia = (props: undefined) => {
  const handleOnChange = (e : React.ChangeEvent<HTMLInputElement>)=>{
    
  }
  return (
    <AddField onClose={()=>console.log()}>
          <Input onChange={handleOnChange} type="text" name={"name"} value={""} customeStyle={"w-[40%]"}/>
          <Input onChange={handleOnChange} type="text" name={"link"} value={""} customeStyle={"w-full"}/>   
          <Button customeStyle={"bg-cd700 mt-auto h-[2.2rem]"} name={"Add"} onClick={()=>console.log("")}/>  
    </AddField>

  )
}

export default AddSocialMedia