import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  Button,
  View,
  TextInput,
  Alert,
} from "react-native";
import { THEME } from "../theme";

export const EditModal = ({ modalVisible, setModalVisible, value, onSave }) => {
  const [title, setTitle] = useState(value);

  const saveHandler = () => {
    if (title.trim().length < 3) {
      Alert.alert(
        "Ошибка",
        `Минимальная длинна названия 3 мимвола, сейчас ${title.trim().length}`
      );
    } else {
      onSave(title);
    }
  };

  return (
    <Modal animationType='slide' transparent={true} visible={modalVisible} s>
      <View style={styles.modalView}>
        <TextInput
          value={title}
          onChangeText={setTitle}
          style={styles.input}
          placeholder='Введите назначение'
          autoCapitalize='none'
          autoCorrect={false}
          maxLength={64}
        />
        <View style={styles.buttons}>
          <Button
            title='Отменить'
            onPress={() => setModalVisible(false)}
            color={THEME.DANGER_COLOR}
          />
          <Button title='Сохранить' onPress={saveHandler} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  buttons: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 10,
  },
  input: {
    padding: 10,
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 2,
    width: "80%",
  },
});
