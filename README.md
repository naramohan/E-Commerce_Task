# E-Commerce Web Application

## Overview

The E-Commerce Web Application is a full-stack web project that allows users to register, log in, browse products, add items to a cart, and place orders. The application demonstrates frontend-backend integration, database connectivity, and basic e-commerce functionality.

## Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MySQL

---

## Features

### User Management

* User Registration
* User Login Authentication
* Session-based User Tracking using Local Storage

### Product Management

* View Product Catalog
* Display Product Details
* Product Pricing Information

### Shopping Cart

* Add Products to Cart
* View Cart Items
* Calculate Total Amount

### Order Management

* Place Orders
* Store Orders in MySQL Database
* Track Order History

### Responsive Design

* Clean and user-friendly interface
* Mobile-friendly layout

---

## Project Structure

```text
ecommerce-app/
│
├── public/
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── cart.html
│   ├── style.css
│   └── script.js
│
├── server.js
├── db.js
├── package.json
└── ecommerce.sql
```

---

## Database Schema

### Users Table

| Column   | Type         |
| -------- | ------------ |
| id       | INT          |
| name     | VARCHAR(100) |
| email    | VARCHAR(100) |
| password | VARCHAR(100) |

### Products Table

| Column      | Type         |
| ----------- | ------------ |
| id          | INT          |
| name        | VARCHAR(100) |
| price       | DECIMAL      |
| description | TEXT         |

### Orders Table

| Column       | Type         |
| ------------ | ------------ |
| id           | INT          |
| user_id      | INT          |
| product_name | VARCHAR(100) |
| price        | DECIMAL      |
| order_date   | TIMESTAMP    |

---

## API Endpoints

### Authentication

* POST /register
* POST /login

### Products

* GET /products

### Orders

* POST /orders
* GET /orders

---

## Installation Steps

### 1. Clone Repository

```bash
git clone <repository-url>
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Database

* Open MySQL Workbench.
* Execute the SQL script from `ecommerce.sql`.
* Update MySQL credentials in `db.js`.

### 4. Run Application

```bash
node server.js
```

### 5. Open Application

```text
http://localhost:5000/register.html
```

---

## Application Workflow

1. User Registration
2. User Login
3. Browse Products
4. Add Products to Cart
5. View Cart
6. Checkout
7. Order Saved in Database

---

## Future Enhancements

* Admin Dashboard
* Product Add/Edit/Delete
* Role-Based Authentication (Admin/User)
* Product Search and Filtering
* Payment Gateway Integration
* Order Tracking
* Password Encryption using bcrypt
* JWT Authentication
* Product Images Upload
* Wishlist Functionality

---

## Learning Outcomes

* Full-Stack Application Development
* REST API Design
* Database Integration with MySQL
* Frontend and Backend Communication
* CRUD Operations
* E-Commerce Workflow Implementation

---

## Author

**N Mohan Krishna**

Computer Science Engineering Student

Interested in Full Stack Development, Web Technologies, Java Programming, and Database Management Systems.
