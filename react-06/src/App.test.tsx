import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import { UserProvider } from "./context/UserContext";

describe("App routing", () => {
  test("Renders the main page", () => {
    render(
      <Provider store={store}>
        <UserProvider>
          <App />
        </UserProvider>
      </Provider>
    );
    const homeHeading = screen
      .getAllByText(/HomePage/i)
      .find((element) => element.tagName === "DIV");
    expect(homeHeading).toBeInTheDocument();
  });
});
