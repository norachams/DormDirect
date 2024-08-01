import React, { useEffect, useState } from 'react';
import "../styles/Listings.css";
import { Navbar } from '../components/Navbar';
import noResultFound from '../images/nothing found.png'


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

  const [maxPrice, setMaxPrice] = useState<string>('None');
  const [buildingType, setBuildingType] = useState<string>('All');
  const [duration, setDuration] = useState<string>('All');
  

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

  const filteredListings = listings.filter(listing => {
    // see if there is a match in the listing name
    const nameMatches = listing.name.toLowerCase().includes(searchTerm.toLowerCase());
  
    // no max price filter or the listing price is non-numeric => compare only the listing name for a match
    if ((maxPrice === "None" || listing.price.toLowerCase() === "please contact")) {
      return nameMatches;
    }

    const buildingTypeMatches = listing.description.toLowerCase().includes(buildingType.toLowerCase());
    const durationMatches = listing.description.toLowerCase().includes(duration.toLowerCase());
    
    // there is a max price filter
    
    // remove formatting from listing price for comparison with max price
    const cleanedPrice = listing.price.slice(1,listing.price.length-3).replace(",","");
    
    return nameMatches && (Number(cleanedPrice) <= Number(maxPrice)) && buildingTypeMatches && durationMatches;
  });

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
              <select 
                id="duration-option" 
                name="duration"
                onChange={(e) => setDuration(e.target.value)}>
                <option value="All">All</option>
                <option value="4 month">4-month</option>
                <option value="8 month">8-month</option>
                <option value="12 month">12-month</option>
              </select>
            </div>
            <div className='listbox'>
              <p>Max Price</p>
              <select 
                id="price-option" 
                name="max-price"
                onChange={(e) => setMaxPrice(e.target.value)}>
                <option value="None">None</option>
                <option value="500">$500</option>
                <option value="1000">$1000</option>
                <option value="1500">$1500</option>
                <option value="2000">$2000</option>
              </select>
            </div>
            <div className='listbox'>
              <p>Building Type</p>
              <select 
                id="building-option"
                name="building-type"
                onChange={(e) => setBuildingType(e.target.value)}>
                <option value="All">All</option>
                <option value="Apartment">Apartment</option>
                <option value="House">House</option>
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
        <div>
          <p>Hmm no listing was found that satisfies the searched criteria. Try again?</p>
          <img src={noResultFound}/>
        </div>
      ) : (
        <ul className='all-listings-container'>
          {filteredListings.map((listing, index) => (
            <li key={index} className='listing-item'>
              <h2 id='listing-name'>{listing.name}</h2>
              <p id='listing-price'>{listing.price}</p>
              <p id='listing-location'>{listing.location}</p>
              <p>{listing.description}</p>
              <button id='visit-listing-button'><a href={listing.link} target="_blank" rel="noopener noreferrer">View Listing</a></button>
              <img id="listing-image" src={listing.image} alt={listing.name} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Listings;
