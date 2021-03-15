import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { EditModal } from "../components/EditModal";
import { AppCard } from "../components/ui/AppCard";
import { THEME } from "../theme";

export const TodoScreen = ({ goBack, todo, removeTodo, onSave }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const saveHandler = (title) => {
    onSave(todo.id, title);
    setModalVisible(false);
  };

  return (
    <View>
      <AppCard style={styles.card}>
        <Text style={styles.title}>{todo.title}</Text>
        <Button
          title='Редактировать'
          onPress={() => {
            setModalVisible(true);
          }}
        />
      </AppCard>
      <View style={styles.buttonBlock}>
        <View style={styles.button}>
          <Button title='Назад' color={THEME.GREY_COLOR} onPress={goBack} />
        </View>
        <View style={styles.button}>
          <Button
            title='Удалить'
            color={THEME.DANGER_COLOR}
            onPress={() => removeTodo(todo.id)}
          />
        </View>
      </View>
      <EditModal
        onSave={saveHandler}
        value={todo.title}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonBlock: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: "40%",
  },
  title: {
    fontSize: 16,
  },
  card: {
    marginBottom: 20,
    padding: 15,
  },
});
