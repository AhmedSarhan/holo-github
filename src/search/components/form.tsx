import { useSearchForm } from "../resources/context";

const SearchForm = () => {
  const { formValues, updateValue } = useSearchForm();
  const { queryType, searchQuery } = formValues;
  return (
    <div>
      <form role="search" onSubmit={(e) => e.preventDefault()}>
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
