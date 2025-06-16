import { useEffect, useState } from "react";

const SelectSubcategory = ({ url, name, setCurrentValue, changeSubcategories }) => {
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
        className={`md:w-11/12 xs:w-full text-center drop-shadow-xl rounded-sm text-xs font-semibold ml-3 ${changeSubcategories ?'bg-neutral-500 text-neutral-400' : 'bg-neutral-700 text-neutral-100 '}`}
        onChange={(e) => setCurrentValue(e.target.value)}
        disabled={changeSubcategories}
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

export default SelectSubcategory;