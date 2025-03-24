import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('/countries').then(res => setCountries(res.data));
  }, []);

  return (
    <div className="grid">
      {countries.map(c => (
        <Link key={c.name} to={`/country/${c.name}`}>
          <img src={c.flag} alt={c.name} width={100} />
          <p>{c.name}</p>
        </Link>
      ))}
    </div>
  );
}

export default Home;