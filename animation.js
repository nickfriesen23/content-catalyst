const businesses = [
    "Business Owners",
    "Entrepreneurs",
    "Small Businesses",
    "Startups",
    "Solopreneurs",
    "Online Businesses",
    "Service-Based Businesses",
    "Product-Based Businesses",
    "Local Businesses",
    "Health Professionals",
    "Wellness Coaches",
    "Nutritionists",
    "Therapists",
    "Mental Health Practitioners",
    "Holistic Health Businesses",
    "Spas",
    "Salons",
    "Fitness Trainers",
    "Gym Owners",
    "Yoga Instructors",
    "Pilates Instructors",
    "Dance Studios",
    "Personal Trainers",
    "Sports Coaches",
    "Restaurants",
    "Cafes",
    "Bakeries",
    "Food Trucks",
    "Caterers",
    "Food Bloggers",
    "Beverage Companies",
    "Photographers",
    "Videographers",
    "Graphic Designers",
    "Artists",
    "Writers",
    "Musicians",
    "Interior Designers",
    "Real Estate Agents",
    "Real Estate Brokers",
    "Property Managers",
    "Home Stagers",
    "Coaches",
    "Consultants",
    "Educators",
    "Online Course Creators",
    "Tutors",
    "Makeup Artists",
    "Hair Stylists",
    "Estheticians",
    "Nail Technicians",
    "Tech Startups",
    "Software Companies",
    "App Developers",
    "Web Designers",
    "Etsy Sellers",
    "Crafters",
    "DIY Businesses",
    "Artisans",
    "Marketing Agencies",
    "Sales Professionals",
    "Social Media Managers",
    "Dentists",
    "Chiropractors",
    "Landscapers",
    "Event Planners",
    "Florists",
    "Veterinarians",
    "Pet Groomers",
    "Financial Advisors",
    "Lawyers",
    "Accountants",
    "Architects",
    "Engineers",
    "Construction Companies",
    "Retail Stores",
    "Jewelers",
    "Bookstores",
    "Clothing Boutiques",
    "Car Dealerships",
    "Mechanics",
    "Cleaners",
    "Movers",
    "Plumbers",
    "Electricians",
    "Painters",
    "Roofers",
    "Window Installers",
    "Home Inspectors",
    "Travel Agents",
    "Tour Operators",
    "Hotels",
    "Bed and Breakfasts",
    "Event Venues",
    "Farmers",
    "Farmers Markets",
    "Distilleries",
    "Breweries",
    "Wineries",
    "Butchers",
    "Chefs",
    "Boutique Owners",
    "Designers",
    "Podcasters",
    "Influencers",
    "Wedding Planners",
    "Event Decorators",
    "Party Rental Companies",
    "Balloon Artists",
    "DJs",
    "Live Bands",
    "Magicians",
    "Comedians",
    "Sign Makers",
    "Print Shops",
    "Book Publishers",
    "Screen Printers",
    "Embroidery Businesses",
    "Leatherworkers",
    "Woodworkers",
    "Metalworkers",
    "Glassblowers",
    "Ceramicists",
    "Quilters",
    "Sewing Businesses",
    "Upholsterers",
    "Antique Dealers",
    "Auctioneers",
    "Appraisers",
    "Storage Companies",
    "Moving Companies",
    "Junk Removal Services",
    "Pest Control Companies",
    "Irrigation Specialists",
    "Tree Services",
    "Fence Installers",
    "Deck Builders",
    "Patio Installers",
    "Pool Maintenance Companies",
    "Hot Tub Installers",
    "Solar Panel Installers",
    "Window Cleaners",
    "Gutter Cleaners",
    "Chimney Sweeps",
    "HVAC Technicians",
    "Locksmiths",
    "Security System Installers",
    "Home Stagers",
    "Interior Stylists",
    "Closet Organizers",
    "Professional Organizers",
    "Life Coaches",
    "Relationship Coaches",
    "Career Coaches",
    "Executive Coaches",
    "Public Speakers",
    "Motivational Speakers",
    "Trainers",
    "Facilitators",
    "Mediators",
    "Arbitrators",
    "Notaries Public",
    "Translators",
    "Interpreters",
    "Proofreaders",
    "Copywriters",
    "Grant Writers",
    "Technical Writers",
    "UX Writers",
    "SEO Specialists",
    "PPC Managers",
    "Email Marketers",
    "Affiliate Marketers",
    "Content Creators",
    "Social Media Influencers",
    "Community Managers",
    "Web Developers",
    "Frontend Developers",
    "Backend Developers",
    "Full-Stack Developers",
    "Database Administrators",
    "Network Administrators",
    "Systems Administrators",
    "IT Support Specialists",
    "Data Scientists",
    "Machine Learning Engineers",
    "Robotics Engineers",
    "Drone Operators",
    "Virtual Assistants",
    "Project Managers",
    "Event Coordinators",
    "Product Managers",
    "Brand Managers",
    "Public Relations Specialists",
    "Market Researchers",
    "Fundraisers",
    "Grant Writers",
    "Nonprofit Organizations",
    "Volunteer Coordinators",
    "Community Organizers",
    "Political Campaign Managers",
    "Lobbyists",
    "Policy Analysts",
    "Urban Planners",
    "Environmental Consultants",
    "Waste Management Companies",
    "Recycling Companies",
    "Renewable Energy Installers",
    "Ethical Hackers",
    "Bug Bounty Hunters",
    "Voice Over Artists",
    "Sound Engineers",
    "Video Editors",
    "Motion Graphics Designers",
    "3D Modelers",
    "Game Designers",
    "App Testers",
    "UX Designers",
    "UI Designers",
    "Chatbot Developers",
    "Augmented Reality Developers",
    "Virtual Reality Developers",
    "Blockchain Developers",
    "Cryptocurrency Miners",
    "NFT Creators",
    "Online Course Platforms",
    "E-learning Developers",
    "Instructional Designers",
    "Language Schools",
    "Tutoring Centers",
    "Educational Consultants",
    "Homeschooling Groups",
    "Children's Entertainers",
    "Party Planners for Children",
    "Toy Makers",
    "Baby Product Designers",
    "Pet Trainers",
    "Dog Walkers",
    "Pet Sitters",
    "Horse Trainers",
    "Farriers",
    "Equine Therapists",
    "Animal Rescuers",
    "Wildlife Rehabilitators",
    "Zookeepers",
    "Aquarium Keepers",
    "Botanists",
    "Gardeners",
    "Landscapers",
    "Floral Designers",
    "Plant Nurseries",
    "Farmers Market Vendors",
    "Farm-to-Table Businesses",
    "Food Stylists",
    "Culinary Schools",
    "Wine Sommeliers",
    "Bartenders",
    "Microbrewery Owners",
    "Distillery Owners",
    "Coffee Roasters",
    "Tea Blenders",
    "Chocolate Makers",
    "Candy Makers",
    "Food Truck Owners",
    "Catering Companies",
    "Personal Chefs",
    "Dietitians",
    "Health Food Stores",
    "Supplement Companies"
];

let currentIndex = 0;
const dynamicText = document.querySelector('.dynamic-text');

function updateText() {
    dynamicText.style.opacity = '0';
    dynamicText.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        dynamicText.textContent = businesses[currentIndex];
        dynamicText.style.opacity = '1';
        dynamicText.style.transform = 'translateY(0)';
        
        currentIndex = (currentIndex + 1) % businesses.length;
    }, 250);
}

// Initial text
updateText();

// Update text every 0.5 seconds
setInterval(updateText, 500);