import React, { useState } from "react";
import { TextInput, Text, View, StyleSheet } from "react-native";
import { Button } from "react-native";
import { Dimensions } from "react-native";
function Authentication() {
  const [assesmentType, setAssesmentType] = useState("SignIn");
  const [credentials, setcredentials] = useState({
    username: "",
    password: "",
  });

  const changeAssesmentType = () => {
    if (assesmentType === "SignIn") {
      setAssesmentType("Signup");
      console.log("pressed the button");
    } else {
      setAssesmentType("SignIn");
    }
  };

  const submitHandler = () => {};

  return (
    <View style={styles.formMainContainer}>
      <View style={styles.formSubContainer}>
        <InputGroup
          type="username"
          credentials={credentials}
          setcredentials={setcredentials}
        />
        {assesmentType === "Signup" && <InputGroup type="reenter username" />}
        <InputGroup type="password" />
        {assesmentType === "Signup" && <InputGroup type="confirm password" />}
        <Button title="Submit" />
        <Button
          title={assesmentType === "SignIn" ? "Sign In" : "Sign Up"}
          onPress={changeAssesmentType}
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  formMainContainer: {
    borderColor: "black",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  formSubContainer: {
    width: "80%",
    height: "70%",
    borderColor: "black",
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  eachGroup: {
    marginBottom: 20,
  },
  usernameLabel: {
    marginBottom: 10,
    fontSize: 16,
    width: Dimensions.get("window").width * 0.6,
  },
  inputTextField: {
    borderBottomWidth: 1,
    height: 24,
  },
});
export default Authentication;

function InputGroup(props) {
  function inputChangeHandler(enteredValue) {
    if (props.type === "username") {
      props.setcredentials((prev) => {
        return { ...prev, username: enteredValue };
      });
    } else if (props.type === "password") {
      props.setcredentials((prev) => {
        return { ...prev, password: enteredValue };
      });
    }
  }
  return (
    <View style={styles.eachGroup}>
      <Text style={styles.usernameLabel}>{props.type}</Text>
      <TextInput
        style={[styles.usernameLabel, styles.inputTextField]}
        placeholder={props.type}
        onChangeText={inputChangeHandler}
        value={
          props.type === "username"
            ? props.credentials.username
            : props.credentials.password
        }
      />
    </View>
  );
}
