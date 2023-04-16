import {Text, View} from 'react-native';
import styles from "./style";

export default function Result(props) {
    let cor 
    if (props.IMC < 18.5) {
        cor = styles.corPesoBaixo
    } else if (props.IMC >= 18.5 && props.IMC < 24.9) {
        cor = styles.corPesoNormal
    } else if (props.IMC >= 25 && props.IMC < 29.9) {
        cor = styles.corSobrepeso
    } else if (props.IMC >= 30 && props.IMC < 34.9) {
        cor = styles.corObesidadeGrau1
    } else if (props.IMC >= 35 && props.IMC < 39.9) {
        cor = styles.corObesidadeGrau2
    } else {
        cor = styles.corObesidadeGrau3
    }

    return(
        <View style={styles.ResultImc}>
            <Text style={styles.Info}>Classificação:</Text>
            <Text style={styles.IMC}>{props.IMC}</Text>
            <Text style={[styles.MSGResult, cor]}>{props.MSGResult}</Text>
        </View>
    );
}