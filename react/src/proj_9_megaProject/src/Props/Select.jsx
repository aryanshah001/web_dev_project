import {forwardRef, useId} from 'react'

function Select({
    options,
    label,
    ...props
},ref) 
{
    const id = useId()
  return (
    <div>

        {
        label && <label htmlFor={id}>{label}</label>
        }

        <select 
        id={id}
        {...props}
        ref={ref}
        >
           { options?.map((opt) => (
                <option
                key={opt}
                value={opt}
                >
                    {opt}
                </option>
            ))}
        </select>
        
    </div>
  )
}

export default forwardRef(Select) 