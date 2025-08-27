# TechStore

## Project Description
TechStore is a responsive e-commerce web application built with **Next.js**, **Tailwind CSS**, and **NextAuth.js**.  
Users can browse products, view product details, and add new products if authenticated. Authentication is securely handled using NextAuth. The app is fully responsive, with a mobile-friendly navbar and smooth navigation.

---

## Live Site
[View Live Demo](YOUR_VERCEL_LIVE_LINK_HERE)

## GitHub Repository
[GitHub Repo](YOUR_GITHUB_REPO_LINK_HERE)

---

## Setup & Installation

1. **Clone the repository**
```bash
git clone YOUR_GITHUB_REPO_LINK_HERE
cd techstore
Install dependencies

bash
Copy code
npm install
Set up environment variables
Create a .env.local file at the root and add:

env
Copy code
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=YOUR_SECRET_KEY
# Add provider credentials if using Google or other OAuth
Run the development server

bash
Copy code
npm run dev
Open http://localhost:3000 to view the app.

Build & deploy

bash
Copy code
npm run build
npm start
Route Summary
Route	Description
/	Home page
/products	Products listing page
/AddProduct	Add product page (requires login)
/login	Login page
/api/auth/[...nextauth]	Authentication API routes

Features
Responsive Navbar with desktop and mobile views (hamburger menu)

User authentication using NextAuth.js

Add new products (accessible only to logged-in users)

Mobile-friendly layout and smooth navigation

Tailwind CSS for modern UI styling

Tech Stack
Next.js – React framework for server-side rendering and routing

Tailwind CSS – Utility-first CSS framework for styling

NextAuth.js – Authentication for secure login/logout

Vercel – Hosting and deployment

Screenshots
Home Page

Products Page

Add Product Page

Contribution
This project is built as a personal submission. You can fork it and add extra features like:

Product search and filtering

User profile and dashboard

Payment integration

License
This project is open-source and free to use for learning purposes.

yaml
Copy code

---

If you want, I can also **create a shorter version** that is specifically **submission-ready for your course or assignment**, keeping it concise but professional.  

Do you want me to do that?