import { View } from "react-native";
import Constants from "expo-constants";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import { Route, Routes, Navigate } from "react-router-native";
import LoginPage from "../pages/LogIn";

const Main = () => {
  return (
    <View style={{ marginTop: Constants.statusBarHeight, flex: 1 }}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signin" element={<LoginPage />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </View>
  );
};

export default Main;
