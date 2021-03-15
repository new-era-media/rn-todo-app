import React from "react";
import { StyleSheet, View } from "react-native";

import { AddTodo } from "../components/AddTodo";
import { Todo } from "../components/Todo";

export const MainScreen = ({ todos, addTodo, removeTodo, onOpen }) => {
  return (
    <View>
      <AddTodo onSubmit={addTodo} />
      <Todo todos={todos} removeTodo={removeTodo} onOpen={onOpen} />
    </View>
  );
};

const styles = StyleSheet.create({});
