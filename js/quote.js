const quote = document.querySelector('#quote span:first-child')
const author = document.querySelector('#quote span:last-child')

const quotes = [
  {
    quote:
      'You will face many defeats in life, but never let yourself be defeated',
    author: 'Maya Angelou',
  },
  {
    quote:
      'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    author: 'Nelson Mandela',
  },
  {
    quote:
      'In the end, it’s not the years in your life that count. It’s the life in your years.',
    author: 'Abraham Lincoln',
  },
  {
    quote: 'Life is either a daring adventure or nothing at all.',
    author: 'Helen Keller',
  },
  {
    quote:
      'Many of life’s failures are people who did not realize how close they were to success when they gave up.',
    author: 'Thomas A. Edison',
  },
  {
    quote: 'Life is either a great adventure or nothing.',
    author: ' Helen Keller',
  },
  {
    quote:
      'If you spend too much time thinking about a thing, you’ll never get it done.',
    author: 'Bruce Lee',
  },
  {
    quote: 'Keep your eyes on the stars and your feet on the ground.',
    author: 'Theodore Roosevelt',
  },
  {
    quote: 'Despite the forecast, live like it’s spring.',
    author: 'Lilly Pulitzer',
  },
  {
    quote:
      'The two most important days in your life are the day you are born and the day you find out why.',
    author: 'Mark Twain',
  },
  {
    quote:
      'There is always some madness in love. But there is also always some reason in madness.',
    author: 'Friedrich Nietzsche',
  },
  {
    quote:
      'Love, free as air at sight of human ties, Spreads his light wings, and in a moment flies.',
    author: 'Alexander Pope',
  },
]

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todaysQuote.quote
author.innerText = todaysQuote.author
