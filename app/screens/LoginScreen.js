import React, { useState } from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import * as Yup from "yup";
import Button from "../components/Button";
import Screen from "../components/Screen";
import {
  ErrorMessage,
  Form,
  FormField,
  SubmitButton,
} from "../components/forms";
import generalStyles from "../config/styles";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";

const validationSchema = Yup.object().shape({
  nationalCode: Yup.string()
    .required("کد ملی وارد نشده است")
    .min(10, "کد ملی باید 10 رقم باشد")
    .max(10, "کد ملی باید 10 رقم باشد")
    .label("NationalCode"),
  password: Yup.string()
    .required("کلمه عبور وارد نشده است")
    .min(4, "کلمه عبور باید حداقل 4 رقم باشد")
    .label("Password"),
});

function LoginScreen({ navigation }) {
  const auth = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ nationalCode, password }) => {
    const result = await authApi.login(nationalCode, password);
    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    auth.logIn(result.data);
  };

  return (
    <Screen style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />

        <Text style={styles.logoTitle2}>ورود به سامانه آمار و بودجه</Text>
      </View>
      <Form
        initialValues={{ nationalCode: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage
          error="Invalid email and/or password."
          visible={loginFailed}
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="account"
          keyboardType="numeric"
          name="nationalCode"
          placeholder="کد ملی"
          maxLength={10}
          //textContentType="numeric"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="کلمه عبور"
          keyboardType="numeric"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="ورود به سامانه" color="grey" />

        <Button
          title="بازگشت"
          color="dark"
          onPress={() => navigation.goBack()}
        />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: generalStyles.colors.silver,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginTop: -20,
    marginBottom: 0,
  },
  logoContainer: {
    alignItems: "center",
  },

  buttonContainer: { padding: 20, width: "100%" },

  logoTitle2: {
    fontSize: 30,
    //fontWeight: "bold",
    color: generalStyles.colors.pbRedColor,
    fontFamily: "Harmattan",
    marginBottom: 10,
  },
});

export default LoginScreen;
