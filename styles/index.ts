import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#1C1C1C',
        padding: 20
    },
    titulo: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#8E44AD',
        marginBottom: 10
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#D3D3D3',
        borderRadius: 10,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        marginBottom: 20
    },
    button: {
        backgroundColor: '#3498DB',
        height: 40,
        alignItems: 'center',
        borderRadius: 10,
        justifyContent: 'center',
        width: '100%'
    },
    buttonText: {
        fontWeight: 'bold',
        color: '#FFF'
    },
    card: {
        borderWidth: 1,
        backgroundColor: 'lightgray',
        marginTop: 30,
        width: '100%',
        borderRadius: 10,
        padding: 20,
        borderColor: '#ddd'
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    cardText: {
        fontSize: 16,
        color: '#666'
    }
})

export default styles;