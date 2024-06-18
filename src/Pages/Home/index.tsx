import React from 'react'
import { Navbar } from '../../Components/Navbar'
import { Cards } from '../../Components/Cards'
import { BotaoPlus } from '../../Components/BotaoPlus'

export function Home() {
  return (
    <>
      <Navbar/>
      <Cards/>
      <BotaoPlus/>
    </>
  )
}