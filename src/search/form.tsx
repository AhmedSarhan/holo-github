import { useForm } from "./resources/hooks";

const SearchForm = () => {
  const [formValues, updateValue] = useForm();
  const { queryType, searchQuery } = formValues;
  return (
    <div>
      <form role="search">
        <input
          aria-label="Search"
          placeholder="Search"
          type="search"
          name="searchQuery"
          value={searchQuery}
          onChange={updateValue}
        />
        <select name="queryType" value={queryType} onChange={updateValue}>
          <option value="user">User</option>
          <option value="repo">Repository</option>
        </select>
      </form>
    </div>
  );
};

export default SearchForm;
