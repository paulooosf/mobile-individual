import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './style'
import mural from '../../Assets/mural.png';
import atividades from '../../Assets/atividades.png';
import pessoas from '../../Assets/pessoas.png';

export function Footer() {
  return (
    <View style={styles.footer}>
      <View style={styles.mural}>
        <Image source={mural} style={{ height: 25, width: 25, tintColor: '#1b5fc3' }}/>
        <Text style={{ color: '#1b5fc3', fontWeight: 'bold', fontSize: 12 }}>Mural</Text>
      </View>
      <View style={styles.atividades}>
        <Image source={atividades} style={{ height: 25, width: 25, tintColor: '#636466' }}/>
        <Text style={{ color: '#636466', fontWeight: 'bold', fontSize: 12 }}>Atividades</Text>
      </View>
      <View style={styles.pessoas}>
        <Image source={pessoas} style={{ height: 25, width: 25, tintColor: '#636466' }}/>
        <Text style={{ color: '#636466', fontWeight: 'bold', fontSize: 12 }}>Pessoas</Text>
      </View>
    </View>
  )
}