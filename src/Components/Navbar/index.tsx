import { View, Text, Image } from 'react-native'
import React from 'react'
import menuHamburguer from '../../Assets/menuHamburguer.png'
import fotoUsuario from '../../Assets/fotoUsuario.jpg'
import tresPontos from '../../Assets/tresPontos.png'
import { styles } from './style'

export function Navbar() {
  return (
    <>
    <View style={styles.navbar}>
        <View style={styles.navbar_container}>
          <View style={styles.navbar_titulo}>
            <Image style={{ width: 25, height: 25, marginRight: 10, tintColor: '#636466' }} source={menuHamburguer} alt="Menu hamburguer"/>
            <Text style={{ color: '#0077c0', fontWeight: '900' }}>Serratec</Text>
            <Text style={{ color: '#636466' }}>Classroom</Text>
          </View>
          <View style={styles.navbar_final}>
            <Image style={{ width: 40, height: 40, borderRadius: 50 }} source={fotoUsuario} alt="Foto de perfil do usuário"/>
            <Image style={{ width: 20, height: 20, tintColor: '#636466' }} source={tresPontos} alt="Menu extra"/>
          </View>
        </View>
    </View>
    </>
  )
}