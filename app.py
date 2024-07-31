from flask import Flask, jsonify
from flask_cors import CORS
from bs4 import BeautifulSoup
import requests

app = Flask(__name__)
CORS(app)


listingInformation = []

@app.route('/')
def home():
    return "Welcome to DormDirect"


@app.route('/listings', methods=['GET'])
def get_listings():
    
    # reset listings array before refresh to avoid duplication
    global listingInformation
    listingInformation = []
    
    getListingsForEachUrl()
    # listing Information array is now populated
    
    return jsonify(listingInformation)

 
def scrapeFromKijiji(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')

    global listingInformation
    global listingCount
    
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
    
    return

def getListingsForEachUrl():
    urls = [
        "https://www.kijiji.ca/b-room-rental-roommate/kitchener-waterloo/kitchener-student-housing/k0c36l1700212?radius=50.0&address=Waterloo%2C+ON&ll=43.4642578%2C-80.5204096",
        "https://www.kijiji.ca/b-room-rental-roommate/kitchener-waterloo/waterloo-student-housing/k0c36l1700212?radius=50.0&address=Waterloo%2C+ON&ll=43.4642578%2C-80.5204096",
        "https://www.kijiji.ca/b-room-rental-roommate/kitchener-waterloo/waterloo-sublet/k0c36l1700212?radius=50.0&address=Waterloo%2C+ON&ll=43.4642578%2C-80.5204096"
    ] # 3 default urls to fetch from
    
    for url in urls:
        scrapeFromKijiji(url)
    
    return


def findListingInfo(listingData):
    listingName = listingData.find('h3', attrs={"data-testid": "listing-title"}).text
    listingLink = "https://www.kijiji.ca" + listingData.find('a', attrs={"data-testid": "listing-link"}).get("href")
    listingPrice = listingData.find('p', attrs={"data-testid": "listing-price"}).text 
    listingDescription = listingData.find('p', attrs={"data-testid": "listing-description"}).text
    listingLocation = listingData.find('p', attrs={"data-testid": "listing-location"}).text if listingData else None
    listingImage = listingData.find('img', attrs={"data-testid": "listing-card-image"}).get("src")
    
    return listingName, listingLink, listingPrice, listingDescription, listingLocation, listingImage


if __name__ == '__main__':
    app.run(debug=True)


"""
TODO: price, building type, and length of lease filters don't work yet
! Below is the logic for implementing them based on each listing's info:

search listings => listingName = searchbar value

max price =>  listingPrice < max price listbox value

building type => if listing description **includes** building type (set false at beginning at break at keyword)
"""
