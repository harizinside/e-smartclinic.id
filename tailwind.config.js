import defaultTheme from 'tailwindcss/defaultTheme'
import pluginForm from '@tailwindcss/forms'
import aspectRatio from '@tailwindcss/aspect-ratio'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [ 'Plus Jakarta Sans', ...defaultTheme.fontFamily.sans ]
      }
    }
  },
  plugins: [
    pluginForm,
    aspectRatio
  ]
}
