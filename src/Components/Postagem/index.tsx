import { View, Text, Image } from "react-native";
import React from "react";
import { styles } from "./style";
import tresPontos from "../../Assets/tresPontos.png";
import fotoSerratec from "../../Assets/fotoSerratec.jpg";

export function Postagem() {
  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <View style={styles.autor}>
          <Image
            source={fotoSerratec}
            style={{ height: 50, width: 50, borderRadius: 50 }}
          />
          <View>
            <Text style={{ fontWeight: "bold" }}>Serratec Oficial</Text>
            <Text style={{ color: "#55565a" }}>12:59</Text>
          </View>
        </View>
        <Image
          source={tresPontos}
          style={{
            height: 20,
            width: 20,
            marginRight: 20,
            tintColor: "#636466",
          }}
        />
      </View>
      <View style={styles.texto}>
        <Text style={{ fontWeight: 'bold' }}>
          Pessoal, bom dia! {'\n\n'}
          Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Quia debitis harum sapiente natus amet? Ipsa minima quo omnis
          voluptate recusandae voluptatum, dolorum, dolorem in natus magni
          assumenda vel? Iure, autem.
        </Text>
      </View>
      <View style={styles.comentario}>
        <Text style={{ color: '#57585b', fontWeight: 'bold' }}>Fazer comentário para a turma</Text>
      </View>
    </View>
  );
}
