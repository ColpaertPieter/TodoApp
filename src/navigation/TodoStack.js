import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import TodosScreen from "../screens/TodosScreen";
import AddTodoScreen from "../screens/AddTodoScreen";
import { Feather } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

const TodoStack = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#fadb6f",
        },
      }}
    >
      <Stack.Screen
        options={{
          headerRight: ({}) => (
            <Pressable onPress={() => navigation.navigate("AddTodo")}>
              <Feather size={24} color="white" name="plus" />
            </Pressable>
          ),
        }}
        name="Todos"
        component={TodosScreen}
      />
      <Stack.Screen
        name="AddTodo"
        component={AddTodoScreen}
      />
    </Stack.Navigator>
  );
};

export default TodoStack;

const styles = StyleSheet.create({});
