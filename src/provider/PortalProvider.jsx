import React, { createContext, useState, useContext } from 'react';
import { PortalContext } from '../contexts';



export const PortalProvider = ({ children }) => {
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  return (
    <PortalContext.Provider value={{ isPortalOpen, setIsPortalOpen }}>
      {children}
    </PortalContext.Provider>
  );
};
