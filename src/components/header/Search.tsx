import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Search: React.FC = () => {
  const router = useRouter();
  const pathName = router.pathname;
  console.log("fghjk", router);
  

  const [searchText, setSearchText] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

    useEffect(()=>{
      if (searchText === '' && pathName === "/products") {
        router.push('/products');
      } else if(searchText === '' && pathName !== "/products"){
        router.push(pathName)
      }
      else {
        router.push(`/products?search=${searchText}`);
      }
  
    }, [searchText])
  return (
    <div>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchText}
          onChange={handleInputChange}
        />
        <button className="btn btn-outline-light border-2" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
