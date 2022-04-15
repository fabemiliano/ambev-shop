/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react';

export const ContextApplication = createContext()

const ApplicationProvider = ({ children }) => {
  const [teste, setTeste] = useState(1)
  const context = {
    teste,
    setTeste
  }

  return <ContextApplication.Provider value={context}>{children}</ContextApplication.Provider>
}


export default ApplicationProvider
