const businesses = [
    "Entrepreneurs",
    "Health Professionals",
    "Tech Startups",
    "Coaches",
    "Real Estate Agents",
    "Photographers",
    "Restaurant Owners",
    "Fitness Trainers",
    "Marketing Agencies",
    "Artists",
    "Wedding Planners",
    "Consultants",
    "Online Course Creators",
    "Nutritionists",
    "Interior Designers",
    "Software Companies",
    "Content Creators",
    "Life Coaches",
    "Small Businesses",
    "Therapists",
    "Graphic Designers",
    "Yoga Instructors",
    "Food Bloggers",
    "Executive Coaches",
    "Web Developers",
    "Dentists",
    "Event Planners",
    "Boutique Owners",
    "Personal Trainers",
    "Social Media Managers",
    "Chiropractors",
    "Podcasters",
    "Makeup Artists",
    "Realtors",
    "Business Coaches",
    "Wellness Professionals",
    "E-commerce Brands",
    "Dance Studios",
    "Financial Advisors",
    "Videographers",
    "Local Businesses",
    "Writers",
    "Musicians",
    "Property Managers",
    "Home Stagers",
    "Online Businesses",
    "Educators",
    "Tutors",
    "Hair Stylists",
    "Estheticians",
    "App Developers",
    "Web Designers",
    "Etsy Sellers",
    "Crafters",
    "DIY Businesses",
    "Artisans",
    "Sales Professionals",
    "Landscapers",
    "Florists",
    "Veterinarians",
    "Pet Groomers",
    "Lawyers",
    "Accountants",
    "Architects",
    "Engineers",
    "Construction Companies",
    "Retail Stores",
    "Jewelers",
    "Bookstores",
    "Clothing Boutiques"
];

let currentIndex = 0;
const dynamicText = document.querySelector('.dynamic-text');

function updateText() {
    dynamicText.style.opacity = '0';
    
    setTimeout(() => {
        dynamicText.textContent = businesses[currentIndex];
        dynamicText.style.opacity = '1';
        
        currentIndex = (currentIndex + 1) % businesses.length;
    }, 100); // Faster fade out/in transition
}

// Initial text
updateText();

// Update text every 0.4 seconds
setInterval(updateText, 400);