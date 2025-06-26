import { act, useEffect, useState } from 'react'
import Card from './Card';

function App() {
  const [pages, setPages] = useState(0);
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const fetchProduct = async () => {
    const res = await fetch(`https://dummyjson.com/products?limit=10&skip=${pages*10}`);
    const data = await res.json();
    //console.log(data);
    setProducts(data.products);
    setTotalPages(Math.ceil(data.total / 10));
  }

  useEffect(()=> {
    fetchProduct();
  },[pages]);

  const getColor = (i) => {
    return (i == pages) ? "blue-400" : "white";
  };

  const handleClick = (i) => {
    setPages(i);
  }

  const handlFlow = (add) => {
    let next = pages + add;
    if(next >= 0 && next < totalPages){
      setPages(next);
    }
  }

  return (
    <div className='container mx-auto py-6'>
      <div className='w-full min-h-full p-6 flex gap-7 flex-wrap justify-center items-center'>
        {
          products.map((product) => (
            <Card key={product.id} thumbnail={product.thumbnail} title={product.title} />
          ))
        }
      </div>

      <div className='flex justify-center gap-2'>
        <span
          onClick={(e) => (handlFlow(-1))}
          className={`h-10 w-14 border-2 border-black text-lg flex items-center justify-center cursor-pointer`}
          >
          prev
        </span>
        {
          totalPages > 0 && [...Array(totalPages)].map( (_, i) => {
            return (
              <span
                onClick={() => (handleClick(i))}
                className={`h-10 w-14 border-2 border-black text-lg bg-${getColor(i)} flex items-center justify-center cursor-pointer`}
                >
                {i + 1}
              </span>
            )
          })
        }

        <span
          onClick={(e) => (handlFlow(1))}
          className={`h-10 w-14 border-2 border-black text-lg flex items-center justify-center cursor-pointer`}
          >
          next
        </span>
      </div>
    </div>
  );

}

export default App
