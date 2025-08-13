import { useEffect, useState } from "react";

const SelectCategory = ({ url, name, setApiUrl, currentCategory}) => {
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
        onChange={(e)=> {
          /*Cambiar la url del form y comparar si es igual a la actual*/
          setApiUrl(`http://localhost:4321/categorias?filter=0&id=${e.target.value}&page=0`) 
        }}
      >
        {
          data.map((val) => <option selected={val.id == currentCategory} value={val.id}>{val.name}</option>)
        }
      </select>
      {
      }
    </div>
  )
}

export default SelectCategory;