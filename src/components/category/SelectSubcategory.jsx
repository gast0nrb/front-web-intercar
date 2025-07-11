import { useEffect, useState } from "react";

const SelectSubcategory = ({ url, name, setApiUrl }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url, { method: 'GET', mode: 'cors' });
        const fetchData = await res.json()
          setData([...data, ...fetchData.data])
      } catch (err) {
        setData([{id : 1 , name : 'Sin subcategorias'}])
      }
    }
    fetchData();
  }, [])

  return (
    <div id="select-subcategory" class="">
      <h3 class="text-xs ml-3 text-nowrap font-black">{name}</h3>
      <select
        className="md:w-11/12 xs:w-full text-center drop-shadow-xl rounded-sm text-xs font-semibold ml-3 ${changeSubcategories bg-neutral-700 text-neutral-100"
        onChange={(e) => {
          /* Cambiar la url del form y comparar si es igual a la actual (comparar con la apiUrl)*/
          setApiUrl(`http://localhost:4321/categorias?filter=1&id=${e.target.value}&page=0`);
        }}
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