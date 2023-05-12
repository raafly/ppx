const { initFlowbite } = require("flowbite");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require("flowbite")],
};

// module.exports = {
//   plugins: [require("flowbite/plugin")],
// };
