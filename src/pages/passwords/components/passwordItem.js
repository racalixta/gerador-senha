import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";

export function PasswordItem({ data, removePassword }) {
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);


  return (
    <View style={styles.container}>

      <TextInput secureTextEntry={passwordIsVisible} editable={false} style={styles.text}>{data}</TextInput>

      <View style={styles.buttons}>

        <Pressable onPress={() => setPasswordIsVisible(!passwordIsVisible)}>
          <Ionicons size={22}  name="eye" />
        </Pressable>

        <Pressable onPress={removePassword}>
          <Ionicons size={22} name="trash" />
        </Pressable>

      </View>

    </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0e0e0e",
    padding: 14,
    width: "100%",
    marginBottom: 14,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    color: "#FFF",
  },
  buttons: {
    flexDirection: "row",
    width: "18%",
    justifyContent: "space-between"
  },
});
