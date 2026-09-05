import { useState} from 'react'
import {useSelector} from 'react-redux'


function Search({type}) {

  const [search, setSearch] = useState('')
  const transaction = useSelector(state => state.transaction)

  const filterSearch = search ? (
    transaction
              .filter((items) => items.type === type)                      
              .filter((item) => item.text.toLowerCase().includes(search.toLowerCase()) )
  ) : []
  
  return (
    <div className='relative'>
      <input 
      type="text" 
      className="border-2 border-black rounded-2xl px-3 w-40"
      placeholder="Search"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      />

      {
      search && filterSearch.length === 0 ? (<p className='ml-4'>No result found</p> ): (filterSearch.map((items) => (
         <div
            key={items.id}        
          >
            <p className='ml-4'>{items.text}</p>
          </div>
      )))
      }
      
    </div>
  )
}

export default Search