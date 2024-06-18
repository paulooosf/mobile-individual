import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        height: 70,
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#FFFFFF',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: -10 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 10
    },
    mural: {
        alignItems: 'center'
    },
    atividades: {
        alignItems: 'center'
    },
    pessoas: {
        alignItems: 'center'
    }
})
