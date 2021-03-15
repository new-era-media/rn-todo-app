import React, { useState } from "react";
import { StyleSheet, View, Alert } from "react-native";
import { Navbar } from "./src/components/Navbar";
import { MainScreen } from "./src/screens/MainScreen";
import { TodoScreen } from "./src/screens/TodoScreen";

export default function App() {
  const [todoId, setTodoId] = useState(null);
  const [todos, setTodos] = useState([
    { id: "1", title: "Выучить React Native" },
  ]);

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
    Alert.alert(
      "Удаление эллемента",
      `Вы уверены что хотите удалить ${id} ?`,
      [
        {
          text: "Отмена",
          onPress: () => console.log("Отменить"),
          style: "cancel",
        },
        {
          text: "Удалить",
          onPress: () => {
            setTodos((prev) => prev.filter((todo) => todo.id !== id));
            goBack();
          },
        },
      ],
      { cancelable: false } //Закрытие при клике по темной области
    );
  };
  const goBack = () => {
    setTodoId(null);
  };

  const onSave = (id, title) => {
    setTodos((old) =>
      old.map((todo) => {
        if (todo.id === id) {
          todo.title = title;
        }
        return todo;
      })
    );
  };

  let content = (
    <MainScreen
      todos={todos}
      addTodo={addTodo}
      removeTodo={removeTodo}
      onOpen={setTodoId}
    />
  );

  if (todoId) {
    const selectedTodo = todos.find((el) => el.id === todoId);

    content = (
      <TodoScreen
        goBack={goBack}
        todo={selectedTodo}
        removeTodo={removeTodo}
        onSave={onSave}
      />
    );
  }

  return (
    <View>
      <Navbar title='Todo app' />
      <View style={styles.container}>{content}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
