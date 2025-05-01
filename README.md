# E-Commerce React App

This is a simple e-commerce web application built with **React** that allows users to browse products, add them to a cart, view a mini-cart, and place orders.

## 🚀 Features

- 📦 **Product Catalog** – Browse a list of products with images, titles, and prices.
- 🛒 **Add to Cart** – Add items to the cart and see them update live.
- 🧺 **Mini Cart** – View selected items, quantities, and total price.
- 🧩 **Responsive Design** – Works smoothly on mobile, tablet, and desktop.
- 📱 **Mobile Toggle Menu** – Compact menu on small devices for navigation.
- ✅ **Order Handling** – Place an order and clear the cart after proceeding.

## 🏗️ Tech Stack

- **React** (with class components)
- **React Router** for navigation
- **CSS** for styling and responsive layout
- **React Context** for cart state management

## 📸 Screenshots

![Homepage](./screenshots/homepage.png)
![Products](./screenshots/products.png)
![Mini Cart](./screenshots/minicart.png)

*(Make sure to place screenshots in a `/screenshots` folder or remove this section if you don't want images.)*

## ⚙️ Installation

1️⃣ **Clone the repo**
```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
2️⃣ Install dependencies

bash
Copy
Edit
npm install
3️⃣ Start the development server

bash
Copy
Edit
npm start
The app will run on http://localhost:3000.

🛠️ Folder Structure
bash
Copy
Edit
/src
  /components
    Header.js
    Footer.js
    ProductCard.js
    MiniCart.js
  /contexts
    CartContext.js
  App.js
  index.js