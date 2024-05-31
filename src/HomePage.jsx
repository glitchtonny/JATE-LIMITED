import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Footer from './Footer'; 

const HomePage = () => {
  const [properties, setProperties] = useState(null);

  console.log(properties);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('http://localhost:3000/properties');
        setProperties(response.data);
        console.log(response.data)
      } catch (err) {
        setError('Error fetching properties');
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <div className='main-banner'>
          <p>GET A COMFY AND SUITABLE<br/> PLACE WITH US</p>
      </div>
      
      <h1>PROPERTIES</h1>

      <div >
        <h1>House Rentals</h1>
          <div className='rents' >
           {properties.house_rentals.map(rental => (
                <div key={rental.id} style={{ width: '600px', padding: '24px'}}>
                  <Link to={`/rental/${rental.id}`}>
                    <h3>{rental.name}</h3>
                    <img src={rental.image} alt='rents' width="480px" height="350px"/>
                  </Link>
                  <h3>{rental.price}</h3>

                 
                </div>
              ))
            
            }
           </div>
        
      </div>

      <div>
        <h1>House for sale</h1>
        <div className='rents'>
        {properties.house_sales.map(sale => (
            <div key={sale.id}  style={{ width: '600px', padding: '20px'}}>
              <Link to={`/sale/${sale.id}`}>
                <h3>{sale.name}</h3>
                <img src={sale.image} alt='sales'   width="480px" height="350px" />
              </Link>
              <h3>{sale.price}</h3>

            </div>
          ))
        
      }
        </div>
          
          
      </div>


      <div>
        <h1>Apartments</h1>
            <div className='rents' >
               {properties.apartments.map(apartment => (
                  <div key={apartment.id} style={{ width: '600px', padding: '20px'}}>
                    <Link to={`/apartment/${apartment.id}`}>
                      <h3>{apartment.name}</h3>
                      <img src={apartment.image} alt='apartments'  width="480px" height="350px"/>
                    </Link>
                    <h3>{apartment.price}</h3>


                  </div>
                ))
              
               }
             </div>
      
          
      </div>

     <Footer />
    </div>
  );
};

export default HomePage;
