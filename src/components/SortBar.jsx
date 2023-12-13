import { getAllArticles } from "../api/api";

const SortBar = ({ setArticles }) => {
  const handleUpdate = () => {
    getAllArticles()
  }

  return (
    <div>
      <label htmlFor='sort-by'>
        Sort by:
        <select name='sort-by' id='sort-by'>
          <option value="date-desc">Date descending</option>
          <option value="date-asc">Date ascending</option>
        </select>
      </label>
    </div>
  );
};

export default SortBar;
