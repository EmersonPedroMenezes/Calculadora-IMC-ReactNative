import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    MSGImc: {
        marginBottom: 20,
    },

    Info: {
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10,
    },

    IMC: {
        height: 60,
        width: 320,
        marginBottom: 30,
        backgroundColor: '#DDD',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 10,
        borderRadius: 10,
    },

    MSGResult: {
        fontSize: 22,
        color: '#fff',
        textAlign: 'center',
        padding: 10,
        borderRadius: 10,
    },

    corPesoBaixo: {
        backgroundColor: '#FFFF00',
    },

    corPesoNormal: {
        color: '#000000',
        backgroundColor: '#00AF50',
    },

    corSobrePeso: {
        color: '#000000',
        backgroundColor: '#F9BF8F', 
    },

    corObesidadeGrau1: {
        color: '#000000',
        backgroundColor: '#FF9B09',
        
    },

    corObesidadeGrau2: {
        color: '#000000',
        backgroundColor: '#FF3737',
    },

    corObesidadeGrau3: {
        color: '#000000',
        backgroundColor: '#FE0000',
    },
});

export default styles;