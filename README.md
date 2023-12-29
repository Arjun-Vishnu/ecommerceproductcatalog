

### `Project Overview`
This project is an e-commerce product catalog that fetches product data from the Fake Store API. Users can browse through the available products, view product details including ratings, and add products to their cart. Additionally, the project features push notifications to enhance the user experience.

### `Features`

# Product Catalog

- Fetches product data from the Fake Store API.
- Displays a grid of products in a visually appealing card format.
- Clicking on a product card reveals additional details about the product, including its rating.

# Product Rating

- Ratings are displayed using a star system, including partial stars for decimal ratings.

# Shopping Cart

- Users can add products to their shopping cart.
- The shopping cart keeps track of the selected products and their quantities.

# Push Notifications

- Implements push notifications to provide feedback to the user when adding products to the cart.
- Uses the `react-toastify` library for notification display.

 # Technologies Used

## React
- Frontend library for building user interfaces.

## Redux
- State management library for managing the application's state.

## Thunk
- Middleware for handling asynchronous actions in Redux.

## Fake Store API
- External API for fetching product data.

## React Toastify
- Library for displaying push notifications.

  # Getting Started

### Clone the repository:


git clone https://github.com/Arjun-Vishnu/ecommerce-product-catalog.git
  
  ### Install Dependencies:

  npm install
  
  ### Start the development server: 
  
  npm start

  The application will be accessible at http://localhost:3000.
  
### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

# Usage

1. **Browse through the product catalog** by visiting the homepage.
2. **Click on a product card** to view detailed information, including its rating.
3. **Add products to the cart** by adjusting the quantity and clicking the "Add to Cart" button.
4. **Push notifications** will provide feedback on successful additions to the cart.
5. **Explore the shopping cart** to review selected items.

# Contributing

If you would like to contribute to the project, please follow the contributing guidelines.

# License

This project is licensed under the MIT License.

# Acknowledgments

Special thanks to the Fake Store API for providing the product data.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
