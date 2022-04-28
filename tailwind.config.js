module.exports = {
  content: [

    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
    },
  
    extend: {
      colors: {
        'body': 'E6F1F2',
        'nav-text': '#464646',
        'primary': '#00B53C',
        'light' : '#FFFFFF',
        'secondary' : '#CFCFCF',
        'active' : '#000000',
        'section' : '#E2EEEF'
      },
      FOntFamily:{
        'lato': ["'Lato'", 'sans-serif']
      }
    },
  },
  
  plugins: [],
}

