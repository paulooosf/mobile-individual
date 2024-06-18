import { ScrollView } from 'react-native'
import React from 'react'
import { NavbarDisciplina } from '../../Components/NavbarDisciplina'
import { Card } from '../../Components/Card'
import { Footer } from '../../Components/Footer'
import { Postagem } from '../../Components/Postagem'

export function Disciplina() {
  return (
    <>
      <NavbarDisciplina/>
      <ScrollView>
        <Card/>
        <Postagem/>
        <Postagem/>
        <Postagem/>
        <Postagem/>
        <Postagem/>
      </ScrollView>
      <Footer/>
    </>
  )
}