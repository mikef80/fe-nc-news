import { useEffect, useState } from "react";
import { getAllArticles } from "../api/api";
import { useSearchParams } from "react-router-dom";

const SortBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState("created_at");
  const [orderBy, setOrderBy] = useState("desc");
  const [topic, setTopic] = useState("");

  const handleSortByUpdate = (e) => {
    setSortBy(e.target.value);
  };

  const handleOrderByUpdate = (e) => {
    setOrderBy(e.target.value);
  };

  useEffect(() => {
    setSearchParams((currParams) => {
      console.log(searchParams.get('topic')); // LOOKS LIKE SORTING BY VOTES DESCENDING ISN'T WORKING. LOOK INTO IT.
      return { ...currParams, sort_by: sortBy, order: orderBy };
    });
  }, [sortBy, orderBy]);

  return (
    <div className='p-3 flex flex-col md:block'>
      <label htmlFor='sort-by'>
        Sort by:
        <select
          name='sort-by'
          id='sort-by'
          onChange={handleSortByUpdate}
          value={sortBy}
          className='border-2 rounded-md ml-1 p-1'>
          <option value='created_at'>date</option>
          <option value='comment_count'>comment count</option>
          <option value='votes'>votes</option>
        </select>
      </label>
      <label htmlFor='order-by' className="mt-3 md:mt-0 md:ml-3">
        Order by:
        <select
          name='order-by'
          id='order-by'
          onChange={handleOrderByUpdate}
          value={orderBy}
          className=' border-2 rounded-md ml-1 p-1'>
          <option value='desc'>descending</option>
          <option value='asc'>ascending</option>
        </select>
      </label>
    </div>
  );
};

export default SortBar;
