import styled from "styled-components";
import Logo from "../../app/components/logo";
import { useSearchForm } from "../resources/context";

const SearchForm = () => {
  const { formValues, updateValue } = useSearchForm();
  const { queryType, searchQuery } = formValues;
  return (
    <Header>
      <Hero>
        <Logo />
        <div>
          <h1>Github Searcher</h1>
          <h3>Search users or repositories below</h3>
        </div>
      </Hero>
      <Form role="search" onSubmit={(e) => e.preventDefault()}>
        <Input
          aria-label="Search"
          placeholder="Search"
          type="search"
          name="searchQuery"
          value={searchQuery}
          onChange={updateValue}
        />
        <Select name="queryType" value={queryType} onChange={updateValue}>
          <option value="user">User</option>
          <option value="repo">Repository</option>
        </Select>
      </Form>
    </Header>
  );
};

export default SearchForm;

const Header = styled.header`
  width: fit-content;
  margin-inline: 15px;
`;
const Hero = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    margin-inline-end: 5px;
    width: 50px;
    height: 50px;
  }
  div {
    margin-inline-start: 5px;
  }
  h1 {
    font-size: 24px;
    font-weight: 900;
    margin: 0;
    margin-bottom: 5px;
  }
  h3 {
    color: darkgray;
    margin: 0;
  }
`;
const Form = styled.form`
  display: flex;
  margin-block: 15px;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;
const inputStyles = `
  border: 1.5px solid #c4c4c4;
  border-radius: 2px;
  outline: none;
  color: darkgray;
  
  &:focus {
    outline: none;
  }
`;

const Input = styled.input`
  margin-inline-end: 5px;
  padding: 10px;
  width: 80%;
  ${inputStyles};
`;
const Select = styled.select`
  margin-inline-start: 5px;
  padding: 9px;
  ${inputStyles};
`;
