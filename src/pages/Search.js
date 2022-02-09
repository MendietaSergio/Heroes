import React from "react";
import {useSearchParams} from 'react-router-dom'
import {useForm} from '../hooks/useForm'
import { getHeroesBySearch } from "../selectors/getHeroesBySearch";

export const Search = () => {
  
  const [searchParams, setSearchParams] = useSearchParams({
      keyword : ""
  })
  
  const [{keyword}, handleInputChange] = useForm({
      keyword : searchParams.get('keyword')
  })
  const resultado = getHeroesBySearch(searchParams.get('keyword'))
  console.log(resultado);
    const handleSearch = (e) => {
    e.preventDefault();
    setSearchParams({
        keyword
    })
  };

  return (
    <div className="row">
      <div className="col-3">
        <h4>Busqueda</h4>
        <hr />
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Buscá tu héroe"
            className="form-control"
            name="keyword"
            value={keyword}
            onChange={handleInputChange}
          />
        </form>
      </div>

      <div className="col93"></div>
    </div>
  );
};
