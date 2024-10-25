/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",      // Adjust the path based on your project structure
    "./src/**/*.js",  // If you're using JavaScript files
    "./src/**/*.jsx", // If you're using React
    // Add other paths if needed
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

