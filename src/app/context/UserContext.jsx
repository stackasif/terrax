'use client'
import Countries from '@/data/countryCard.json'
import React, { createContext, useState } from 'react'
export const dataContext=createContext()

const UserContext = ({children}) => {
  let [input,setInput]=useState("")
  let [card,setCard]=useState(Countries)

  let data={
    input,
    setInput,
    card,setCard
  }

  return (
    <dataContext.Provider value={data}>
      {children}
    </dataContext.Provider>
    
  )
}

export default UserContext