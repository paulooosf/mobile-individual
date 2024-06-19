import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './style'

export function BotaoPlus() {
  return (
    <View style={styles.botao}>
      <Text style={styles.plus}>+</Text>
    </View>
  )
}