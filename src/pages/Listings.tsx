import React, { useEffect, useState } from 'react';
import "./styles/Listings.css";

interface Listing {
  name: string;
  link: string;
  price: string;
  description: string;
  location: string;
  image: string;
}

const Listings: React.FC = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/listings');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setListings(data);
      } catch (error) {
        console.error('Error fetching listings:', error);
        setError('Error fetching listings.');
      }
    };

    fetchListings();
  }, []);

  return (
    <div className='listings-container'>
      <div className='heading-container'>
        <h1 id='listing-page-title'>Search Featured Properties</h1>
        <p id='listing-page-subtitle'>Find the Perfect Place for You!</p>
      </div>
      <div className='search-container'>
        <div className='bar-container'>
          <input placeholder='Search Listings...' />
          <div className='listing-filters'>
            <div className='listbox'>
              <p>Duration</p>
              <select name="duration">
                <option value="4-month">4-month</option>
                <option value="8-month">8-month</option>
                <option value="12-month">12-month</option>
              </select>
            </div>
            <div className='listbox'>
              <p>Max Price</p>
              <select name="max-price">
                <option value="price-500">$500</option>
                <option value="price-1000">$1000</option>
                <option value="price-1500">$1500</option>
                <option value="price-2000">$2000</option>
              </select>
            </div>
            <div className='listbox'>
              <p>Building Type</p>
              <select name="building-type">
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
              </select>
            </div>
          </div>
          <button id='search-listing-button'>Search</button>
        </div>
      </div>
      {error && <p>Error: {error}</p>}
      {listings.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul className='all-listings-container'>
          {listings.map((listing, index) => (
            <li key={index} className='listing-item'>
              <h2>{listing.name}</h2>
              <a href={listing.link} target="_blank" rel="noopener noreferrer">View Listing</a>
              <p>{listing.price}</p>
              <p>{listing.location}</p>
              <p>{listing.description}</p>
              <img id="listing-image" src={listing.image} alt={listing.name} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Listings;
