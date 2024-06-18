import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '95%',
        alignSelf: 'center',
        marginTop: 10,
        borderWidth: 0.5,
        borderColor: '#dddddd',
        borderRadius: 10
    },
    cabecalho: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: 95,
        marginTop: 15
    },
    autor: {
        flexDirection: 'row',
        gap: 9
    },
    texto: {
        padding: 15
    },
    comentario: {
        borderTopColor: '#dddddd',
        borderTopWidth: 0.5,
        padding: 15,
        justifyContent: 'center'
    }

})