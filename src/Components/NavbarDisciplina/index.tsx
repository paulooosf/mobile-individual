import { View, Image } from 'react-native'
import React from 'react'
import menuHamburguer from '../../Assets/menuHamburguer.png'
import info from '../../Assets/info.png'
import tresPontos from '../../Assets/tresPontos.png'
import { styles } from './style'

export function NavbarDisciplina() {
  return (
    <>
    <View style={styles.navbar}>
        <View style={styles.navbar_container}>
          <View style={styles.navbar_titulo}>
            <Image style={{ width: 25, height: 25, marginRight: 10, tintColor: '#636466' }} source={menuHamburguer} alt="Menu hamburguer"/>
          </View>
          <View style={styles.navbar_final}>
            <Image style={{ width: 25, height: 25, tintColor: '#636466' }} source={info} alt="Botão de informações"/>
            <Image style={{ width: 20, height: 20, tintColor: '#636466' }} source={tresPontos} alt="Menu extra"/>
          </View>
        </View>
    </View>
    </>
  )
}