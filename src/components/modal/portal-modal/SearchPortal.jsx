import React, { useContext } from 'react'
import Portal from '../../Portal'
import SearchModal from '../SearchModal'
import { AuthContext } from '../../../contexts'


const SearchPortal = () => {
  const portalContext = useContext(AuthContext)

  return (
    <Portal>
      <SearchModal  />
    </Portal>
  )
}

export default SearchPortal