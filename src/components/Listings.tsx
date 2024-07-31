import React, { useEffect, useState } from 'react';
import "../styles/Listings.css";
import { Navbar } from '../components/Navbar';


// all the information we are fetching for a listing
interface Listing {
  name: string;
  link: string;
  price: string;
  description: string;
  location: string;
  image: string;
}

const Listings: React.FC = () => {

  // get states for listings, the text currently in the search bar, and the final searched item
  const [listings, setListings] = useState<Listing[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [searchInput, setSearchInput] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // get listings from the backend API
  useEffect(() => {
    const fetchListings = async () => {
      try {
        const apiServer = 'http://127.0.0.1:5000/listings'; // listings are waiting on port 5000/listings
        const response = await fetch(apiServer);

        // no response => http error
        if (!response.ok) {
          throw new Error(`HTTP Error. Status: ${response.status}`);
        }

        // get the data in json format
        const data = await response.json();

        // update state for current listings
        setListings(data);
      } catch (error) {
        console.error('Error fetching listings:', error);
        setError('Error fetching listings.');
      }
    };
    fetchListings();
  }, []);

  // search through listings for the listing name in the search bar
  const handleUpdatedSearch = () => {
    setSearchTerm(searchInput);
  }

  const filteredListings = listings.filter(listing =>
    listing.name.toLowerCase().includes(searchTerm.toLowerCase()) // convert listing titles to lowercase for comparison
  );

  return (
    <div className='listings-container'>
        <Navbar />
      <div className='heading-container'>
        <h1 id='listing-page-title'>Search Featured Properties</h1>
        <p id='listing-page-subtitle'>Find the Perfect Place for You!</p>
      </div>
      <div className='search-container'>
        <div className='bar-container'>
          <input
            id="user-search"
            placeholder='Search Listings...'
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <div className='listing-filters'>
            <div className='listbox'>
              <p>Duration</p>
              <select id="duration-option" name="duration">
                <option value="4-month">4-month</option>
                <option value="8-month">8-month</option>
                <option value="12-month">12-month</option>
              </select>
            </div>
            <div className='listbox'>
              <p>Max Price</p>
              <select id="price-option" name="max-price">
                <option value="price-500">$500</option>
                <option value="price-1000">$1000</option>
                <option value="price-1500">$1500</option>
                <option value="price-2000">$2000</option>
              </select>
            </div>
            <div className='listbox'>
              <p>Building Type</p>
              <select id="building-option" name="building-type">
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
              </select>
            </div>
          </div>
          <button
            id='search-listing-button'
            onClick={handleUpdatedSearch}>
            Search
          </button>
        </div>
      </div>

      {error && <p>Error: {error}</p>}
      {filteredListings.length === 0 ? ( // ensure there are listings to display, otherwise api might be still trying to fetch them (show "loading.." if that's the case)
        <p>Loading...</p>
      ) : (
        <ul className='all-listings-container'>
          {filteredListings.map((listing, index) => (
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
