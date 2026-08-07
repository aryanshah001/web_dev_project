import { useId } from "react"

function Input({
  className='',
  type='text',
  
  label
},ref) {
  const id = useId()
  return (
    <div>
      {
        label && <label
        className={bg-red-400 `${className}`}
        id={id}
        type={type}
        ref={ref}        
        >{label} </label>
      }

      <input 
      
      type={type} />
    </div>
  )
}

export default Input