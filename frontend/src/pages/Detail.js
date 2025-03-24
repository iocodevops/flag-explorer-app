import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Detail() {
  const { name } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    axios.get(`/countries/${name}`).then(res => setCountry(res.data));
  }, [name]);

  if (!country) return <p>Loading...</p>;

  return (
    <div>
      <h2>{country.name}</h2>
      <img src={country.flag} alt={country.name} width={200} />
      <p>Population: {country.population}</p>
      <p>Capital: {country.capital}</p>
    </div>
  );
}

export default Detail;
