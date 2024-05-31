import React, { useState, useEffect} from 'react';
import '../assets/Blog.css';
import Footer from '../Footer';

function Blog() {
    const [blogData, setBlogData] = useState({});
  
    useEffect(() => {
      fetch('http://localhost:4000/properties')
        .then((response) => response.json())
        .then((data) => setBlogData(data));
    }, []);

  return (
    <div className='blog'>
     
      <div className="rentals">
  {/* {data.house_rentals && ( */}
    <ul>
      {/* {data.house_rentals.map((house, index) => ( */}
        <li  className="rental-item">
          <h2>{"Runda Heights"}</h2>
          <p>{"###Rentals for rent at JATE estate in Runda"}</p>
          <p>{'**Location:Runda'}</p>
          <p>{'**Lot Size:80by100'}</p>
          <p>{'**Asking Price:ksh60thousand'}</p>
          <br />
          <p>{'Property Overview'}</p>
          <p>{'The exceptional property is set on a sprawling 1-acre lot which is divided into five 80by100 pieces of land each with  a block of house and they are arranged in rows.It is a gated community and security lights installed on the  path ways a sign of tight security.The area is developed as it is near schools,religous places ,hospitals,near a railway station and all roads are tarmaced and well maintained including the ones inside the estate.Water is sufficient as there areboreholes in the estate and electricity to is sufficientbecause KPLC have its branch a kilometer away '}</p>
          <p>{'Apartment Features:Each block has seven floors and a basement.On each floor there are six apartments which are three bedroomed.'}</p>
          <p>{'Key Features'}</p>
          <p>{'Rooms:All houses feature 3 bedrooms, all ensuite on the first floor, with kitchens ,dining room,a library room, a private room and a balcony on the master bedroom'}</p>
          <p>{'Additional Facilities: Includes domestic staff rooms and ample parking on the basement.'}</p>
          <p>{'Amenities:Each block has a swimming pool, gym, barbecue area for leisure and entertainment and three basketball courts for each block'}</p> 
          <div className="images-row">
            <img src={"https://i.roamcdn.net/prop/brk/listing-full-1920w/e92896fa736ed2698a509fe825c3b8d5/-/prod-property-core-backend-media-brk/4810859/dcfa28dc-a0a4-4b10-985d-1e7817b4d71d.jpeg"} alt={"exterior view"} />
            <img src={"https://i.roamcdn.net/prop/brk/listing-full-1920w/bcbe8e269e2637cf804c2ce3854baf1c/-/prod-property-core-backend-media-brk/4771390/11e9bbec-549b-405e-9cff-3ecd95689ce8.jpg"} alt={"interior view"} />
            <img src={"https://i.roamcdn.net/prop/brk/listing-full-1920w/d302df41ad9f5a054613aa80ed4fab99/-/prod-property-core-backend-media-brk/4771393/e1611fcc-93f6-4570-aa76-c1a42a1c2ce8.jpg"} alt={"swimming pool"} />
          </div>
        </li>
      {/* ))} */}
    </ul>
  {/* )} */}
</div>
    <div classname="rentals">
      {/* {data.house_sales && ( */}
        <ul>
          {/* {data.house_sales.map((house, index) => ( */}
            <li  className="rental-item">
              <h2>{'Runda Mansionattes'}</h2>
              <p>{'###Mansionattes for sale at JATE estate in Runda'}</p>
              <p>{'**Location:Runda'}</p>
              <p>{'**Lot Size:50by100'}</p>
              <p>{'**Asking Price:ksh450million'}</p>
              <br />
              <p>{'**Property Overview**'}</p>
              <p>{'The exceptional property is set on a sprawling 2.629-acre lot which is divided into thirty 50by100 pieces of land each with  a house arranged in rows.It is a gated community and security lights installed on the  path ways a sign of tight security.The area is developed as it is near schools,religous places ,hospitals,near a railway station and all roads are tarmaced and well maintained including the ones inside the estate.Water is sufficient as there areboreholes in the estate and electricity to is sufficientbecause KPLC have its branch a kilometer away '}</p>
              <p>{'**Key Features**'}</p>
              <p>{'**Rooms**:All houses feature 4 bedrooms, all ensuite on the first floor, with kitchens on the ground floor,dining room,a library room on the ground floor and a private room on the first floor.'}</p>
              <p>{'**Additional Facilities**: Includes domestic staff quarters, guest wings,ample parking on the basement.'}</p>
              <p>{'**Amenities**:Each house has a swimming pool, gym, barbecue area for leisure and entertainment and three basketball courts for the estate'}</p>
              <div className="images-row">
             <img src={"https://apartmentsinheightshouston.com/wp-content/uploads/2018/09/apartments-in-the-heights-houston-welcome-to-an-apartment-complex-with-balconies.jpg"} alt={"Exterior veiew of the mansions"} />
             <img src={"https://i.roamcdn.net/prop/brk/listing-full-1920w/bd937125e0ec8884d3f86ef9f8d06b81/-/prod-property-core-backend-media-brk/6576761/39971701-2135-4361-ae90-06849ff9d23b.jpg"} alt={"Interior of the house"} /> 
             <img src={"https://i.roamcdn.net/prop/brk/listing-full-1920w/52bcb601bfa1a2ef7f2abe2618d1aad9/-/prod-property-core-backend-media-brk/6577065/feccfe57-2fd7-43b4-ba63-6f1c5162548a.jpg"} alt={"master bedroom"} /> 
             </div>
            </li>
          {/* ))} */}
        </ul>
      {/* )} */}
    </div>
    <div classname="rentals">
      {/* {data.house_apartment && ( */}
        <ul>
          {/* {data.house_apartment.map((house, index) => ( */}
            <li  className="rental-item">
              <h2>{"*Runda Heights*"}</h2>
              <p>{"###Apartments for sale at JATE estate in Runda"}</p>
              <p>{'**Location:Runda'}</p>
              <p>{'**Lot Size:80by100'}</p>
              <p>{'**Asking Price:ksh40million'}</p>
              <br />
              <p>{'**Property Overview**'}</p>
              <p>{'The exceptional property is set on a sprawling 1.6-acre lot which is divided into five 80by100 pieces of land each with  a block of house and they are arranged in rows.It is a gated community and security lights installed on the  path ways a sign of tight security.The area is developed as it is near schools,religous places ,hospitals,near a railway station and all roads are tarmaced and well maintained including the ones inside the estate.Water is sufficient as there areboreholes in the estate and electricity to is sufficientbecause KPLC have its branch a kilometer away '}</p>
              <p>{'**Apartment Features**:Each block has seven floors and a basement.On each floor there are six apartments which are three bedroomed.'}</p>
              <p>{'**Key Features**'}</p>
              <p>{'**Rooms**:All houses feature 3 bedrooms, all ensuite on the first floor, with kitchens ,dining room,a library room, a private room and a balcony on the master bedroom'}</p>
              <p>{'**Additional Facilities**: Includes domestic staff rooms and ample parking on the basement.'}</p>
              <p>{'**Amenities**:Each block has a swimming pool, gym, barbecue area for leisure and entertainment and three basketball courts for each block'}</p>
              <div className="images-row">
              <img src={"https://apartmentsinheightshouston.com/wp-content/uploads/2018/09/apartments-in-the-heights-houston-welcome-to-an-apartment-complex-with-balconies.jpg"} alt={"exterior of the apartment"} />
              <img src={"https://i.roamcdn.net/prop/brk/listing-full-1920w/1a046f7dabc3b27d1851b0f5383e1da4/-/prod-property-core-backend-media-brk/6526577/c857b3cc-4812-4b94-89e8-c4175f5416ee.jpeg"} alt={"interior of the apartment"} />
              <img src={"https://i.roamcdn.net/prop/brk/listing-full-1920w/d302df41ad9f5a054613aa80ed4fab99/-/prod-property-core-backend-media-brk/4771393/e1611fcc-93f6-4570-aa76-c1a42a1c2ce8.jpg"} alt={"Basement parking"} /> 
              </div>
            </li>
          {/* ))} */}
        </ul>
      {/* )} */}
    </div>
    <Footer />
    </div>
  );
};

export default Blog;