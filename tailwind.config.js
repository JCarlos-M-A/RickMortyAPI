/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'rickMorty': "url('https://images.ctfassets.net/swt2dsco9mfe/68E6LMFZQwPohE4ntLFtqE/b4335601eafd1ade3e773a50c43a18e9/product-faded-background-rickandmort.jpg?q=70')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    }
  },
  plugins: [],
}