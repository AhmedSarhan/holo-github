import React from "react";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import SearchProvider from "../resources/context";
import SearchPage from "./..";

const SearchPageMock = () => {
  return (
    <Provider store={store}>
      <SearchProvider>
        <SearchPage />
      </SearchProvider>
    </Provider>
  );
};

const formSelectors = () => {
  const heroText = screen.getByRole("heading", {
    name: /github searcher/i,
  });
  const searchInput = screen.getByRole("searchbox", {
    name: /search/i,
  });
  const searchType = screen.getByRole("combobox");
  const usersOption = screen.getByRole("option", {
    name: "User",
  }) as HTMLOptionElement;
  const reposOption = screen.getByRole("option", {
    name: "Repository",
  }) as HTMLOptionElement;

  return { heroText, searchInput, searchType, usersOption, reposOption };
};

const listingSelectors = async () => {
  const list = await screen.findByRole("list");
  const card = await screen.findByRole("listitem");
  return { list, card };
};

const fetchCheck = async () => {
  const { list, card } = await listingSelectors();
  expect(list).toBeInTheDocument();
  expect(card).toHaveLength(30);
};
const fetchReposAction = async () => {
  user.setup();
  render(<SearchPageMock />);
  const { searchInput } = formSelectors();
  await user.type(searchInput, "john");
  expect(searchInput).toHaveValue("john");
  fetchCheck();
};
describe("Testing Search Page", () => {
  it("renders correctly", () => {
    render(<SearchPageMock />);

    const { heroText, searchInput, searchType } = formSelectors();

    expect(heroText).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveAttribute("placeholder", "Search");
    expect(searchType).toBeInTheDocument();
    expect(searchType).toHaveValue("repos");
  });
  it("fetches repos on search", async () => {
    fetchReposAction();
  });
  it("fetches users on switch", async () => {
    fetchReposAction();
    const { searchType, reposOption, usersOption } = formSelectors();

    await user.selectOptions(searchType, ["users"]);
    expect(reposOption.selected).toBeFalsy();
    expect(usersOption.selected).toBeTruthy();
    fetchCheck();
  });
});
