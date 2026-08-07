function Button({
        children,
        type='button',
        textColor='white',
        bgColor='bg-blue-600',
        className='',
        ...props  // others like onclick , disabled etc
        }) {
  return (
    <button 
    type={type}
    className={`px-4 py-2 rounded-lg ${textColor} ${bgColor} ${className}`}
    {...props}>
        {children}
    </button>
  )
}

export default Button