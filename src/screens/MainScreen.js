import React from "react";
import { StyleSheet, View, Image } from "react-native";

import { AddTodo } from "../components/AddTodo";
import { Todo } from "../components/Todo";

export const MainScreen = ({ todos, addTodo, removeTodo, onOpen }) => {
  let content = <Todo todos={todos} removeTodo={removeTodo} onOpen={onOpen} />;

  if (todos.length === 0) {
    content = (
      <View style={styles.imageWrap}>
        <Image  style={styles.image} source={require("../../assets/no-items.png")} />
        {/* <Image
          style={styles.image}
          source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" }}
        /> */}
      </View>
    );
  }

  return (
    <View>
      <AddTodo onSubmit={addTodo} />

      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  imageWrap: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    height: 300,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
