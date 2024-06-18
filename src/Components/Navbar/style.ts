import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    navbar: {
        backgroundColor: '#F6F6F6',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 90,
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5
    },
    navbar_container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 70,
        marginTop: 35
    },
    navbar_titulo: {
        flexDirection: 'row',
        gap: 5,
    },
    navbar_final: {
        flexDirection: 'row',
        gap: 15,
        alignItems: 'center'
    }
})