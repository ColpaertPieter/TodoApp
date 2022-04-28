import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Input } from "react-native-elements";
import { addTodo } from "../../store/slice";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { useNavigation } from "@react-navigation/native";

const AddTodoScreen = ({ props }) => {
  const navigation = useNavigation();
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo toevoegen</Text>
      <Input
        style={styles.input}
        value={text}
        onChangeText={(text) => setText(text)}
        placeholder="Geef hier je todo in"
      />
      <Button
        title="Voeg toe"
        onPress={() => {
          dispatch(addTodo({ name: text, id: uuidv4() }));
          navigation.goBack();
        }}
      />
    </View>
  );
};

export default AddTodoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
    alignItems: "center",
    backgroundColor: "#fadb6f",
  },
  title: {
    fontWeight: "bold",
    fontSize: 32,
    marginTop: 100,
  },
  input: {
    marginVertical: 16,
    marginHorizontal: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    fontWeight: '500'
  },
});
