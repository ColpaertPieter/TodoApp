import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
} from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../../store/slice";
import { Feather } from "@expo/vector-icons";

const TodosScreen = () => {
  const dispatch = useDispatch();
  const todosState = useSelector((state) => state.todos);

  const todoItem = ({ item }) => {
    return (
      <View style={styles.container}>
        <View style={styles.todo}>
          <Text style={styles.todoText}>{item.name}</Text>
          <Pressable onPress={() => dispatch(removeTodo(item.id))}>
            <Feather size={24} color="red" name="trash-2" />
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={todosState}
        renderItem={todoItem}
        // when there are no todo's show text
        ListEmptyComponent={() => (
          <Text style={styles.emptyTodo}>Geen todo's</Text>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default TodosScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fadb6f",
  },
  todo: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  todoText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingLeft: 10,
  },
  emptyTodo: {
    margin: 10,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
