# Abyssinia Pizza Ordering System

## Overview

Abyssinia Pizza is a web application for ordering pizzas online. The application allows users to browse a menu, add items to a cart, and place orders. It also features user management, order tracking, and geolocation services for address validation.

## Features

### 1. **Menu Display**

- **Description:** The application provides a dynamic menu interface where users can browse a variety of pizzas and other items. Each item includes details such as name, description, and price.
- **Technologies Used:**
  - **React.js:** The menu is rendered using React components. Each menu item is a reusable component (`MenuItem.jsx`) that accepts props for item details.
  - **Redux:** The menu data is fetched from the API and stored in the Redux store, ensuring a consistent state across the application.
- **How It Works:**
  - The menu is populated by fetching data from a backend API via the `apiRestaurant.js` service. The data is then stored in the Redux store, and the `Menu.jsx` component maps over this data to display each item.

### 2. **Cart Management**

- **Description:** Users can add items to their cart, update quantities, and remove items. The cart overview provides a summary before checkout.
- **Technologies Used:**
  - **React.js:** The cart UI is built with components like `Cart.jsx` and `CartItem.jsx`.
  - **Redux:** The cart's state, including items and quantities, is managed globally through `cartSlice.js`.
- **How It Works:**
  - When a user adds an item to the cart, an action is dispatched to the Redux store. The cart state is updated accordingly, and the UI re-renders to reflect the current contents. Quantity updates and item removals are also managed via dispatched actions.

### 3. **Order Placement**

- **Description:** Once the user is satisfied with their cart, they can place an order. The application captures the user's information and processes the order.
- **Technologies Used:**
  - **React.js:** Components such as `CreateOrder.jsx` and `OrderItem.jsx` handle the order process.
  - **Redux:** The order data is stored in Redux and can be accessed throughout the application.
  - **API Interaction:** The `apiRestaurant.js` service handles the backend communication to place the order.
- **How It Works:**
  - Upon confirming the cart, the `CreateOrder.jsx` component collects user details and submits an order through an API call. The response, including order confirmation, is stored in Redux and displayed to the user.

### 4. **User Management**

- **Description:** The application allows users to create profiles and log in to save their order history and preferences.
- **Technologies Used:**
  - **React.js:** User forms and displays are handled by components like `CreateUser.jsx` and `Username.jsx`.
  - **Redux:** User information and authentication states are managed by `userSlice.js`.
  - **Local Storage:** User sessions can be persisted using the browser’s local storage.
- **How It Works:**
  - User details are submitted via the `CreateUser.jsx` component. The data is then processed and stored in Redux. User sessions may be saved in local storage to maintain login status between sessions.

### 5. **Geolocation Services**

- **Description:** To enhance the user experience, the app includes geolocation functionality that allows users to input and validate their delivery addresses.
- **Technologies Used:**
  - **API Integration:** `apiGeocoding.js` integrates with a geocoding API (e.g., Google Maps API) to convert user-entered addresses into geographical coordinates.
  - **React.js:** Components interact with the geocoding service to provide real-time feedback to users.
- **How It Works:**
  - When a user enters an address, the `apiGeocoding.js` service is called to validate the address and provide suggestions. This helps ensure accurate delivery information.

### 6. **Responsive UI**

- **Description:** The application is designed to be fully responsive, providing a seamless experience across devices.
- **Technologies Used:**
  - **Tailwind CSS:** A utility-first CSS framework is used for styling, ensuring that the application is responsive out of the box.
- **How It Works:**
  - The UI components are built with responsive design principles using Tailwind CSS classes. This ensures that the layout adjusts automatically based on screen size, providing an optimal experience on both mobile and desktop devices.

### 7. **Error Handling and Loading States**

- **Description:** The application includes robust error handling and visual loading indicators to improve user experience.
- **Technologies Used:**
  - **React.js:** Error boundaries and loading components (`Error.jsx`, `Loader.jsx`) are used to manage different states of the application.
- **How It Works:**
  - When data is being fetched or processed, the `Loader.jsx` component is displayed. If an error occurs, the `Error.jsx` component provides user-friendly feedback.

## Technologies Used

- **Frontend:**
  - **React.js:** Core library for building the UI.
  - **Redux:** State management for the application.
  - **Tailwind CSS:** Utility-first CSS framework for styling.
  - **Vite:** Build tool for development and production.
  - **PostCSS:** Used for processing CSS.
- **API Services:**

  - Custom JavaScript modules for API requests related to geocoding and restaurant data.

- **Development Tools:**
  - **ESLint:** Linting utility for maintaining code quality.
  - **Prettier:** Code formatting to ensure consistent style.
  - **Vite:** For build and development environment.

## Project Structure

- **`src/`**: Contains all the source code for the application.
  - **`features/`**: Modularized features like cart, menu, order, and user.
  - **`services/`**: API service files.
  - **`ui/`**: Reusable UI components.
  - **`utils/`**: Utility functions.
- **`public/`**: Public assets like images and the main HTML file.

## Data Flow

1. **User Interaction:**
   - The user interacts with the UI components like the menu, cart, or order buttons.
2. **State Management:**
   - Actions are dispatched to Redux slices, updating the application state.
3. **API Interaction:**
   - For certain features, such as geolocation or restaurant data, the app makes API calls using custom service modules.
4. **Rendering:**
   - The state changes trigger re-renders in React components, reflecting the updated data in the UI.

## Getting Started

1. **Install Dependencies:**
   ```bash
   npm install
   ```
2. **Run the Application:**

   ```bash
   npm run dev
   ```

   This will start the development server.

3. **Build for Production:**
   ```bash
   npm run build
   ```
   This will create an optimized production build.

## Contributing

Contributions are welcome! Please follow the code style guidelines enforced by ESLint and Prettier. Open a pull request for any features or bug fixes. Email me `yonathanber@icloud.com` for more info.

## License

This project is licensed under the MIT License.
