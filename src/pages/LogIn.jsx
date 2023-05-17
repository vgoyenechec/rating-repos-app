import { Formik, useField } from "formik";
import { Button, View, StyleSheet } from "react-native";
import StyledTextInput from "../components/StyledTextInput";
import StyledText from "../components/StyledText";
import { loginSchema } from "../validation/login";

const initialValues = {
  email: "",
  password: "",
};

const styles = StyleSheet.create({
  form: {
    margin: 12,
  },
  error: {
    color: "red",
    marginTop: -10,
    fontSize: 12,
    paddingLeft: 15,
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});

const FormikInputValue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  return (
    <>
      <StyledTextInput
        error={meta.error}
        value={field.value}
        onChangeText={(value) => helpers.setValue(value)}
        {...props}
      />
      {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
    </>
  );
};

export default function LoginPage() {
  return (
    <Formik
      validationSchema={loginSchema}
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleSubmit }) => {
        return (
          <View style={styles.form}>
            <FormikInputValue placeholder="Email" name="email" />
            <FormikInputValue
              placeholder="Password"
              name="password"
              secureTextEntry
            />
            <View style={styles.button}>
              <Button
                title="Login"
                onPress={handleSubmit}
              />
            </View>
          </View>
        );
      }}
    </Formik>
  );
}
