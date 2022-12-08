import Button from '@atoms/common/button'
import Input from '@atoms/input/input'
import AddField from '@layouts/AddField'
import { skillLevel } from '@lib/data'
import Dropdown from '../input/dropdown'

const AddSkills = (props: undefined) => {
  return (
    <AddField onClose={()=>console.log("")}>
      <div className='w-full flex flex-col gap-2'>
        <div className='w-full grid grid-cols-2 gap-4'>
            <Input name={"name"} value={""} customeStyle={"w-full"}/>
            <Dropdown name={"level"} data={skillLevel} customeStyle={"w-full"}/>
        </div>
        <div className='w-full grid grid-cols-4 gap-4'>
            <Input name={"type"} value={""} customeStyle={"w-full col-start-1 col-end-3"}/>
            <Button name={"add"} customeStyle={"bg-cd700 w-[4rem] mt-auto"} onClick={()=>console.log("")}/>
        </div>
      </div>
    </AddField>
  )
}

export default AddSkills