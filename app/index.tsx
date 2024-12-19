import { gerarRanking } from "@/services/ai/generator";
import styles from "@/styles";
import { MotiView } from 'moti';
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Index() {
  const [estilo, setEstilo] = useState("")
  const [ranking, setRanking] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const callDesculpa = async () => {
    if (estilo.length < 2) {
      alert("Desculpa, o estilo musical precisa ter mais de 2 caracteres")
      return;
    }

    setIsLoading(true);
    setEstilo("");

    try {
      const result = await gerarRanking(estilo);
      setRanking(result)
    } catch (error) {
      alert(error)
    } finally {
      setIsLoading(false);
    }

  }

  return (
    <View
      style={styles.container}
    >
      <Text style={styles.titulo}>Musical Ranking</Text>
      <TextInput
        onChangeText={setEstilo}
        value={estilo}
        style={styles.input}
        placeholder="Digite o estilo musical que deseja ver o ranking ..."></TextInput>

      <TouchableOpacity style={styles.button} onPress={callDesculpa}>
        <Text style={styles.buttonText}>{isLoading ? "Carregando..." : "Carregar Ranking"}</Text>
      </TouchableOpacity>

      {
        ranking && (
          <MotiView
            style={styles.card}
            from={{ opacity: 0, translateY: 200 }}
            animate={{ opacity: 1, translateY: 0 }}>
            <Text style={styles.cardTitle}>O ranking está carregado</Text>
            <Text style={styles.cardText}>{ranking}</Text>
          </MotiView>
        )
      }

    </View>
  );
}
