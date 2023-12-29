import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,vue}",
  ],
  theme: {
    fontFamily: {
      title: ['dotgothic16'],
      head: ['fira-mono']
    },
    extend: {},
  },
  plugins: [
    daisyui
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          ...require("daisyui/src/theming/themes")["black"],
          "primary": "#7989ea",
          "secondary": "#71def7",
          "accent": "#e23d61",
          "neutral": "#3d4451",
          "base-100": "#151515"
        },
      },
    ]
  }
}
