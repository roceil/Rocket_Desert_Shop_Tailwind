module.exports = {
  content: ["./app/**/*.{html,ejs}"],
  theme: {
    extend: {
      colors: {
        primary: '#3F5D45',
        secondary: '#FFE180',
        light_primary: '#8DA291',
        light_plus_primary: '#EAF0ED',
      },
      backgroundImage: {
        'img-favorite01': "url('https://tina3295.github.io/sweet_taste/sweet%20homepage/images/SW02.png')",
        'img-favorite02': "url('https://tina3295.github.io/sweet_taste/sweet%20homepage/images/SW05.png')",
        'img-favorite03': "url('https://tina3295.github.io/sweet_taste/sweet%20homepage/images/SW03.png')",
        'favoBtn': "url('https://tina3295.github.io/sweet_taste/sweet/images/favorite_border.png')",
        'pay-success-bg': "url('https://tina3295.github.io/sweet_taste/sweets%20pay%20success/images/payment_success.jpg')",
        'address-btn': "url('https://tina3295.github.io/sweet_taste/sweets%20delivery/images/sort-solid.svg')",
        'credit-btn': "url('    https://tina3295.github.io/sweet_taste/sweets%20pay/images/credit-card.svg')",
      }
    },
    container: {
      center: true,
      padding: '30px',
    },
    screens: {
      'sm': '375px',
      // => @media (min-width: 375px) { ... }
  
      'md': '768px',
      // => @media (min-width: 768px) { ... }
  
      'lg': '1000px',
      // => @media (min-width: 1000px) { ... }
    },
  },

  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}