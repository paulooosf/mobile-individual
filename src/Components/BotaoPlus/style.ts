import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    botao: {
        backgroundColor: '#FFF',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 20,
        right: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5
    },
    plus: {
        fontSize: 30,
        color: '#0077c0'
    }
})