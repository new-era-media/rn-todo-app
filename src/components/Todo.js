import React from "react";
import { StyleSheet, Text, FlatList, TouchableOpacity } from "react-native";

export const Todo = ({ todos, removeTodo, onOpen }) => {
  return (
    <FlatList
      style={styles.list}
      data={todos}
      renderItem={({ item }) => (
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => onOpen(item.id)}
          onLongPress={removeTodo.bind(null, item.id)}>
          <Text style={styles.todo}>{item.title}</Text>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    height: "80%",
  },
  todos: {
    flexDirection: "column",
  },
  todo: {
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 5,
    marginVertical: 5,
  },
});
