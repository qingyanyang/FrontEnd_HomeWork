import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useUser } from "../../context/useUser";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import routerConfig from "../../routes";
import { Provider } from "react-redux";
import store from "../../store";

jest.mock("../../context/useUser", () => ({
  useUser: jest.fn(),
}));
const mockUseUser = useUser as jest.Mock;

// Helper function to set up the component with the required providers
const setup = (initialEntries = ["/"]) => {
  const router = createMemoryRouter(routerConfig, {
    initialEntries,
  });
  const user = userEvent.setup();
  render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
  return { router, user };
};

describe("NavBar component", () => {
  beforeEach(() => {
    let isAuthenticatedMock = true;
    mockUseUser.mockReturnValue({
      logout: () => {
        isAuthenticatedMock = false;
      },
      userName: "Qian_5059",
      isAuthenticated: isAuthenticatedMock,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders basic nav bar details correctly", () => {
    setup();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Courses")).toBeInTheDocument();
    expect(screen.getByText("Profile")).toBeInTheDocument();
    expect(screen.getByText("Qian_5059")).toBeInTheDocument();
    expect(screen.getByText("Logout")).toBeInTheDocument();
  });

  test("renders 'Login' button when not authenticated", async () => {
    mockUseUser.mockReturnValue({ isAuthenticated: false });
    setup();
    await waitFor(() => {
      expect(screen.getByText("Login")).toBeInTheDocument();
    });
  });

  test("navigates to the home page when 'Home' link is clicked", async () => {
    const { router, user } = setup();
    await user.click(screen.getByText("Home"));
    await waitFor(() => {
      expect(router.state.location.pathname).toEqual("/");
    });
  });

  test("navigates to the courses page when 'Courses' link is clicked", async () => {
    const { router, user } = setup();
    await user.click(screen.getByText("Courses"));
    await waitFor(() => {
      expect(router.state.location.pathname).toEqual("/courses");
    });
  });

  test("navigates to the profile page when 'Profile' link is clicked while authenticated", async () => {
    const { router, user } = setup();
    await user.click(screen.getByText("Profile"));
    await waitFor(() => {
      expect(router.state.location.pathname).toEqual("/profile");
    });
  });

  test("navigates to the login page when 'Profile' link is clicked while not authenticated", async () => {
    mockUseUser.mockReturnValue({ isAuthenticated: false });
    const { router, user } = setup();
    await user.click(screen.getByText("Profile"));
    await waitFor(() => {
      expect(router.state.location.pathname).toEqual("/login");
    });
    expect(screen.queryByText("LoginPage")).toBeInTheDocument();
  });

  test("calls logout function and navigates to home when Logout button is clicked", async () => {
    const { router, user } = setup(["/courses"]);
    const button = screen.getByText("Logout");
    expect(button).toBeInTheDocument();
    await user.click(button);
    expect(screen.queryByText("HomePage")).toBeInTheDocument();
    await waitFor(() => {
      expect(router.state.location.pathname).toEqual("/");
    });
  });
});
