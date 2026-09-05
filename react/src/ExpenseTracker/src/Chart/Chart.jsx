import { useState } from 'react'
import {useSelector} from 'react-redux'

function Chart({type}) {
    const [search, setSearch] = useState('')
    const transaction = useSelector(state => state.transaction)

    const filterSearch = transaction.filter(items => items.type === type)
                                    .filter(items => items.text.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
        <input 
        type="text"
        className='border border-black'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
         />

        {filterSearch.map((items) => (
            <div key={items.id}>
                <p>
                    {items.text}
                </p>
            </div>
        ))}

    </div>
  )
}

export default Chart