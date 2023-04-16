import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    MSGImc: {
        marginBottom: 20,
    },

    Info: {
        textAlign: 'center',
        fontSize: 10,
        marginBottom: 10,
    },

    IMC: {
        backgroundColor: '#DDD',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },

    MSGResult: {
        fontSize: 22,
        color: '#fff',
        textAlign: 'center',
        padding: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },

    corPesoBaixo: {
        backgroundColor: '#ffff00',
    },

    corPesoNormal: {
        backgroundColor: '#228b22',
    },

    corSobrePeso: {
        backgroundColor: '#ffa07a', 
    },

    corObesidadeGrau1: {
        backgroundColor: '#ff8c00',
    },

    corObesidadeGrau2: {
        backgroundColor: '#FF4500',
    },

    corObesidadeGrau3: {
        backgroundColor: '#ff0000',
    },
});

export default styles;