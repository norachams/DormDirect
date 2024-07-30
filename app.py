from flask import Flask, jsonify
from flask_cors import CORS
from bs4 import BeautifulSoup
import requests

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return "Welcome to DormDirect"

@app.route('/api/listings', methods=['GET'])
def get_listings():
    listings = scrapeFromKijiji()
    return jsonify(listings)

def scrapeFromKijiji():
    url = 'https://www.kijiji.ca/b-room-rental-roommate/kitchener-waterloo/waterloo-student-housing/k0c36l1700212?radius=50.0&address=Waterloo%2C+ON&ll=43.4642578%2C-80.5204096'  # Example URL, replace with the actual Kijiji URL
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')

    listingInformation = []
    
    listingsHTML = soup.find_all('li', attrs={"data-testid": True})
    
    for listingData in listingsHTML:
        listingName, listingLink, listingPrice, listingDescription, listingLocation, listingImage = findListingInfo(listingData)
        
        listingEntry = {
            'name': listingName,
            'link': listingLink,
            'price': listingPrice,
            'description': listingDescription,
            'location': listingLocation,
            'image': listingImage
        }
        
        listingInformation.append(listingEntry)
        
    return listingInformation

def findListingInfo(listingData):
    listingName = listingData.find('h3', attrs={"data-testid": "listing-title"}).text
    listingLink = "https://www.kijiji.ca" + listingData.find('a', attrs={"data-testid": "listing-link"}).get("href")
    listingPrice = listingData.find('p', attrs={"data-testid": "listing-price"}).text 
    listingDescription = listingData.find('p', attrs={"data-testid": "listing-description"}).text
    listingLocation = listingData.find('div', attrs={"data-testid": "listing-details"}).text if listingData else None
    listingImage = listingData.find('img', attrs={"data-testid": "listing-card-image"}).get("src")
    
    return listingName, listingLink, listingPrice, listingDescription, listingLocation, listingImage

if __name__ == '__main__':
    app.run(debug=True)
