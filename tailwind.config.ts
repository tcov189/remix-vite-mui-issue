import { blue } from '@mui/material/colors'
import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: blue[50],
          100: blue[100],
          200: blue[200],
          300: blue[300],
          400: blue[400],
          500: blue[500],
          600: blue[600],
          700: blue[700],
          800: blue[800],
          900: blue[900],
        }
      }
    },
  },
  plugins: [],
} satisfies Config

