import React, { useEffect, useState } from 'react';
import doGetRequest from '../helpers/doGetRequest';

const endpoint = 'products/1';

const Home = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setProduct(await doGetRequest(endpoint));
    };

    getData();
  }, []);

  if (!product) return <p>Nada a exibir</p>;

  return (
    <div>
      <h1>{product.title}</h1>
      {product.images.map((item, index) => (
        <div key={index}>
          <img src={item} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Home;
