import { useState } from 'react'
import ColorContext from './ColorContext'

const ColorProvider = ({children}) => {
    const [color ,setColor] = useState()
    return(
        <ColorContext.Provider  value={{color ,setColor}} >
        {children}
        </ColorContext.Provider>
    )
}
export default ColorProvider