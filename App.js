import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Navbar } from "./src/components/Navbar";
import { AddTodo } from "./src/components/AddTodo";
import { Todo } from "./src/components/Todo";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: Date.now().toString(),
        title,
      },
    ]);
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <View>
      <Navbar title='Todo app' />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />
        <Todo todos={todos} removeTodo={removeTodo} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
