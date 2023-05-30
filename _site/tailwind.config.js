module.exports = {
    content: [
      './_drafts/**/*.html',
      './_includes/**/*.html',
      './_layouts/**/*.html',
      './_posts/*.md',
      './*.md',
      './*.html',
    ],
    theme: {
        extend: {
            fontFamily: {
                'lemonmilk': ['lemon_milk', 'sans-serif'],
                'ibm': ['IBM Plex Serif', 'serif'],
            },
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
    ]
  }