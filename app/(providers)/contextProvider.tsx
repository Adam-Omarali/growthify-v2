'use client'

import { useState } from 'react'
import { defaultContext, appContext } from '../../components/appContext'

function ContextProvider({
    children,
  }: {
    children: React.ReactNode
  }) {

    const [context, setContext] = useState(defaultContext)
    const val = {...defaultContext, set: setContext}


    return (
        <appContext.Provider value={val}>
            {children}
        </appContext.Provider>

    )
}

export default ContextProvider