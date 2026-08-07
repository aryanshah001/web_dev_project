import {forwardRef,useId} from 'react'

const Input = forwardRef(function Input({
    label,
    type='text',
    className='',
    ...props

},ref) {

  const id = useId()
  return (
    
    <div>
      {
        label && <label
        htmlFor={id}
        >
          {label}
        </label>
      }

      <input  
      type={type} 
      className={ `${className}`}
      id={id}
      {...props}
      ref={ref}
      />

    </div>
  )
})




export default Input