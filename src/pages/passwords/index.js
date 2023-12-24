import { View, Text, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useStorage from "../../hooks/useStorage";
import { useEffect, useState } from "react";
import { useIsFocused } from '@react-navigation/native';
import { PasswordItem } from "./components/passwordItem";

export function Passwords() {
  const [listPasswords, setListPasswrods] = useState([]);
  const focused = useIsFocused();
  const { getItem, removeItem } = useStorage();

  useEffect(() => {
    async function loadPasswords() {
      const passwords = await getItem("@pass");
      setListPasswrods(passwords);
    }

    loadPasswords();

  }, [focused]);

  async function handleRemovePassword(item) {
    const passwords = await removeItem("@pass", item);
    setListPasswrods(passwords);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Minhas Senhas</Text>
      </View>

      <View style={styles.content}>
        <FlatList
          style={styles.list}
          data={listPasswords}
          keyExtractor={ (item) => String(item) }
          renderItem={ ({ item }) => <PasswordItem data={item} removePassword={ () => handleRemovePassword(item) } />}
        />
      </View>
      
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#392de9",
    paddingTop: 58,
    paddingBottom: 14,
    paddingHorizontal: 14,
  },
  title: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    paddingLeft: 14,
    paddingRight: 14,
  },
  list: {
    flex: 1,
    paddingTop: 14,
  }
});
