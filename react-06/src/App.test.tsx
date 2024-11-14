import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import { UserProvider } from "./context/UserContext";
import { MemoryRouter } from "react-router-dom";

describe("App routing", () => {
  test("Renders the main page", () => {
    render(
      <Provider store={store}>
        <UserProvider>
          <MemoryRouter initialEntries={["/"]}>
            <App />
          </MemoryRouter>
        </UserProvider>
      </Provider>
    );
    const homeHeading = screen
      .getAllByText(/HomePage/i)
      .find((element) => element.tagName === "DIV");
    expect(homeHeading).toBeInTheDocument();
  });
});
