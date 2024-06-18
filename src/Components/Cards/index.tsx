import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './style';
import tresPontos from '../../Assets/tresPontos.png';
import mentoriaCarreira from '../../Assets/mentoriaCarreira.jpg';
import residencia from '../../Assets/residencia.jpg';
import ingles from '../../Assets/ingles.jpg';

export function Cards() {

  return (
    <View style={styles.cards}>
      <View style={styles.card}>
        <Image style={styles.card_imagem} source={mentoriaCarreira}/>
        <View style={styles.card_conteudo}>
          <View style={styles.card_titulo}>
            <TouchableOpacity>
              <Text style={{ color: '#F6F6F6', fontSize: 23 }}>Mentoria de Carreira</Text>
            </TouchableOpacity>
            <Image style={{ width: 18, height: 18, tintColor: '#F6F6F6' }} source={tresPontos}/>
          </View>
          <View style={styles.card_autor}>
            <Text style={{ color: '#F6F6F6', fontSize: 12 }}>Serratec Oficial</Text>
          </View>
        </View>
      </View>
      <View style={styles.card}>
        <Image style={styles.card_imagem} source={ingles}/>
        <View style={styles.card_conteudo}>
          <View style={styles.card_titulo}>
            <TouchableOpacity>
              <Text style={{ color: '#F6F6F6', fontSize: 23 }}>Inglês 2024.1</Text>
            </TouchableOpacity>
            <Image style={{ width: 18, height: 18, tintColor: '#F6F6F6' }} source={tresPontos}/>
          </View>
          <View style={styles.card_autor}>
            <Text style={{ color: '#F6F6F6', fontSize: 12 }}>Serratec Oficial</Text>
          </View>
        </View>
      </View>
      <View style={styles.card}>
        <Image style={styles.card_imagem} source={residencia}/>
        <View style={styles.card_conteudo}>
          <View style={styles.card_titulo}>
            <TouchableOpacity>
              <Text style={{ color: '#F6F6F6', fontSize: 23 }}>Residentes 2024.1</Text>
            </TouchableOpacity>
            <Image style={{ width: 18, height: 18, tintColor: '#F6F6F6' }} source={tresPontos}/>
          </View>
          <View style={styles.card_autor}>
            <Text style={{ color: '#F6F6F6', fontSize: 12 }}>Serratec Oficial</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
