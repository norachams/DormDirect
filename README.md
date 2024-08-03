<img width="1438" alt="Screenshot 2024-08-02 at 9 47 13 PM" src="https://github.com/user-attachments/assets/bc1f1bda-feaf-42a3-8b9c-c1896ff20e61">


_Are You a University Student Looking for housing in Waterloo? Are You Tired of All the Time It Takes to Scour Multiple Listing Sites for Housing Postings? Well DormDirect is Your Solution! Sign-Up Today, Free-of Charge._

## 🎥 Demo
https://github.com/user-attachments/assets/17fe21a8-d3f7-481d-b6e9-400894cf1222


## 💡 Inspiration
Navigating between schoolwork, tuition fees, and internships is already difficult enough for university students. Looking for housing becomes strenuous, especially between work and school terms. That's why we built DormDirect to streamline the process of finding listings for university students in Waterloo. All of us are Co-op students which means we're constantly looking for housing between work terms and we thought to build a platform that will help us do this. 

## 🛠️ What it does
DormDirect uses a BeautifulSoup Web Scrapper to scrape listings from 3 popular listing searches on Kijiji (1 => "Student housing waterloo", 2 => "Wilfrid Laurier University housing", 3 => "University of Waterloo housing"). Once the listings are scrapped, they are contained within a Flask backend that Jsonifies the fetched listing information and makes it available at an API endpoint. The React frontend  retrieves the jsonified listing content from the endpoint and displays it in a clean way.      

## 🧰 How we built it
As mentioned we used ```React```, ```Flask```, ```BeautifulSoup```, ```css/tailwind.css```, and ```Firebase``` for user authentication.

## 🔮 What's next?
- Incorporating listings from **Facebook MarketPlace**, **Bamboo Housing**, and **Airbnb** to create one centralized location for students to find listings on.
- Making the search filters functional 
