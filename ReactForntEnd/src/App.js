import React from "react";
import "./App.css";
import { store } from "./Actions/store";
import { Provider } from "react-redux";
import UserCandidate from "./Components/UserCandidatesList";
import { Container } from "@material-ui/core";
import { ToastProvider } from "react-toast-notifications";

function App() {
  return (
    <Provider store={store}>
      <ToastProvider autoDismiss={true}>
        <Container maxWidth="lg">
          <UserCandidate />
        </Container>
      </ToastProvider>
    </Provider>
  );
}

export default App;
