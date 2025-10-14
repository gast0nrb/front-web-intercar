const SelectSubcategory = () => {
   return(
      <div class="text-left flex-1">
         <label for="select-subcategory" class="text-sm mb-1">Subcategorias</label> 
         <select name="select-subcategory" class="p-2
          rounded px-2 py-auto w-12/12
          focus:flex-1
          duration-100
          text-center
          text-zinc-600
          hover:text-zinc-800
          hover:opacity-100
          duration-150
          border-1 border-zinc-300
          text-sm">
            <option>opt 1</option>
            <option>opt 2</option>
            <option>opt 3</option>
         </select>
      </div>
   )
};

export default SelectSubcategory;
