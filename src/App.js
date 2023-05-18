import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import SubCollectionScreen from "./components/SubCollectionScreen";
import SimplifiedArticle from "./components/SimplifiedArticle";
import LoginScreen from "./components/LoginScreen";
import { AuthContextProvider } from "./context/AuthContext";
import SignupScreen from "./components/SignupScreen";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
function App() {
  return (
    <AuthContextProvider>
      <main className=" h-[25rem]  w-[25rem] bg-blueish overflow-x-hidden overflow-y-auto break-normal">
        <Routes>
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/signup" element={<SignupScreen />} />
          <Route
            path="/homescreen/*"
            element={
              <ProtectedRoute>
                <HomeScreen />
              </ProtectedRoute>
            }
          />
          <Route
            path="/homescreen/:subcollection/*"
            element={
              <ProtectedRoute>
                <SubCollectionScreen />
              </ProtectedRoute>
            }
          />
          <Route
            path="/homescreen/:subcollection/:article"
            element={
              <ProtectedRoute>
                <SimplifiedArticle />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </main>
    </AuthContextProvider>
  );
}

export default App;
