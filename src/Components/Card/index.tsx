import { View, Text, Image } from 'react-native';
import React from 'react';
import { styles } from './style';
import mentoriaCarreira from '../../Assets/mentoriaCarreira.jpg';

export function Card() {
  return (
    <View style={styles.cards}>
      <View style={styles.card}>
        <Image style={styles.card_imagem} source={mentoriaCarreira} />
        <View style={styles.card_conteudo}>
          <View style={styles.card_titulo}>
            <Text style={{ color: '#F6F6F6', fontSize: 23 }}>Mentoria de Carreira</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
