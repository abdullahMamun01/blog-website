import React, { useContext } from 'react'
import { PortalContext } from '../contexts'

export const usePortalContext = () => {
  return useContext(PortalContext)
}
