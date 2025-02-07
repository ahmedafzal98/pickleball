module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
        'primary': '#3490dc', // A custom blue color
        'secondary': '#ffed4a', // A custom yellow color
        'danger': '#e3342f', // A custom red color
        'custom-green': '#38c172', // A custom green color
      },
    },
  },
  plugins: [
    require("daisyui"), 
  ],
};
