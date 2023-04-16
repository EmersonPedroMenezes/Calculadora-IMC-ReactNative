import { useState } from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import styles from "./style";
import Result from "./Result";

export default function Form(){
    const[weight, weightset] = useState(null) // Peso
    const[height, heightset] = useState(null) // Altura
    const[MSGCalc, SETCalcMSG] = useState(null) // Mensagem de calculo
    const[MSGResult, SETResultMSG] = useState(null) // Mensagem de Resultado
    const[IMC, SETImc] = useState(null) // IMC
    const[textButton, setTextButton] = useState("Calcular") // IMC  

    /*Formúla do calculo IMC weight / height * height (Peso / Altura * Altura)*/

    function ResultIMC(weight, height){ 
        let IMCResult = ((Number.parseFloat(weight) / (Number.parseFloat(height) * (Number.parseFloat(height)))))
        SETImc(IMCResult.toFixed(1))
        ResultCalc(IMCResult.toFixed(1))
    }

    /*Função para identificar onde se enquadra o peso do usuário*/
    
    /* o calculo abaixo está desta forma pois se fosse digitado a altura de 1.90 e o peso de 90kg o código coloca o resuldado de 24.93 em 
    obesidade mórbida grau 3, porém segundo as regras da OMS o resultado de 24.93 é considerado um peso normal. Então o código não consegue enquadrar
    O e mesmo como peso normal. No formato abaixo que acontece o erro

        function ResultCalc(IMC){
        if(IMC < 18.5){
            SETResultMSG("Abaixo do peso")
        }else if (IMC >= 18.5 && IMC < 24.9){
            SETResultMSG("Peso normal")
        }else if (IMC >= 25 && IMC < 29.9){
            SETResultMSG("Sobrepeso")
        }else if(IMC >= 30 && IMC < 34.9){
            SETResultMSG("Obesidade - Grau 1")
        }else if(IMC >= 35 && IMC < 39.9){
            SETResultMSG("Obesidade Severa - Grau 2")
        }else{
            SETResultMSG("Obesidade Mórbida - Grau 3")
        }
    }
    */

    function ResultCalc(IMC){
        if(IMC < 18.5){
            SETResultMSG("Abaixo do peso")
        }else if (IMC >= 18.5 && IMC < 25){
            SETResultMSG("Peso normal")
        }else if (IMC >= 25 && IMC < 30){
            SETResultMSG("Sobrepeso")
        }else if(IMC >= 30 && IMC < 35){
            SETResultMSG("Obesidade - Grau 1")
        }else if(IMC >= 35 && IMC < 40){
            SETResultMSG("Obesidade Severa - Grau 2")
        }else{
            SETResultMSG("Obesidade Mórbida - Grau 3")
        }
    }

    /*Função Para Validar o calculo do IMC e corrigir possiveis erros causados pelo usuário*/

    function IMCValid(){
        if(weight != null && height != null){ // Substituição de vírgula(,) por ponto (.)
            let formatWeight = weight.replace(",", ".")
            let formatHeight = height.replace(",", ".")

            if(formatWeight > 0 && formatHeight > 0){
                ResultIMC(formatWeight, formatHeight)
                weightset(null)
                heightset(null)
                SETCalcMSG(null)    
                setTextButton("Calcular novamente")
            }else{
                SETCalcMSG("Valor inválido")
                weightset(null)
                heightset(null)
                setTextButton("Calcular")
                setTimeout(() => {
                    SETCalcMSG(null)
                }, 3000)
            }
        }else{
            SETCalcMSG("Preencha os campos")
            SETImc(null)
            setTimeout(() => {
                SETCalcMSG(null)
            }, 3000)
        }
    }

    return (
        <View style={styles.form}>
            {IMC == null ?
                <View>
                    {/* Condição que verifica se há mensagem de erro */}
                    {MSGCalc != null && (
                        <Text style={styles.alerta}>{MSGCalc}</Text>
                    )}
                    <Text style={styles.label}>Informe sua altura:</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        value={height}
                        onChangeText={heightset}
                    />

                    <Text style={styles.label}>Informe seu peso:</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        value={weight}
                        onChangeText={weightset}
                    />

                    <TouchableOpacity onPress={() => IMCValid()}>
                        <Text style={styles.buttom}>{textButton}</Text>
                    </TouchableOpacity>
                </View>
                :
                <View>
                    <Result IMC={IMC} MSGResult={MSGResult} />
                    <TouchableOpacity onPress={() => IMCValid()}>
                        <Text style={styles.buttom}>{textButton}</Text>
                    </TouchableOpacity>
                </View>
            }
        </View>
    );
}