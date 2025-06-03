import { useEffect, useState } from "react";

const SelectCategory = ({ url, name, setCurrentCategory }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url, { method: 'GET', mode: 'cors' });
        const fetchData = await res.json()
        setData([...data, ...fetchData.data])
      } catch (err) {
        setData([...data, err])
      }
    }
    fetchData();
  }, [])

  return (
    <div id="select-subcategory" class="">
      <h3 class="text-xs ml-3 text-nowrap font-black">{name}</h3>
      <select
        class="md:w-11/12 xs:w-full text-center drop-shadow-xl rounded-sm text-xs bg-neutral-700 text-neutral-100 font-semibold ml-3"
        onChange={(e)=> setCurrentCategory(e.target.value)}
      >
        {
          data.map((val) => <option value={val.id}>{val.name}</option>)
        }
      </select>
      {
      }
    </div>
  )
}

export default SelectCategory;