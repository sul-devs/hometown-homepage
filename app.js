// Smooth scroll for "Find out more" button
document.querySelector(".btn").addEventListener("click", function (event) {
  event.preventDefault()
  document.querySelector("#things-to-do").scrollIntoView({
    behavior: "smooth",
  })
})

// Quote data
const quotes = [
  {
    name: "Katie Price",
    text: "I like to spend time with my family. The majority of my time is spent in London, but I do like to escape and spend time with them in my hometown of Brighton on the south coast.",
  },
  {
    name: "Brian Eno",
    text: "I love San Francisco and Brighton has something of San Francisco about it. It's by the sea, there's a big gay community, a feeling of people being there because they enjoy their life there.",
  },
  {
    name: "Gabrielle Aplin",
    text: "I feel more comfortable in a place like Brighton - a town, with one centre, one bus station, one train station. And there are so many arty, creative people, and things are less rushed, less stressed.",
  },
]

let currentQuoteIndex = 0

document.getElementById("next-quote").addEventListener("click", function () {
  currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length
  const quoteCard = document.querySelector(".quote-card")
  quoteCard.querySelector(".name").textContent = quotes[currentQuoteIndex].name
  quoteCard.querySelector(".quote-text").textContent =
    quotes[currentQuoteIndex].text
})

// Show "Back to Top" button after scrolling
window.addEventListener("scroll", function () {
  const backToTopBtn = document.getElementById("back-to-top")
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block"
  } else {
    backToTopBtn.style.display = "none"
  }
})

// Scroll to the top when "Back to Top" button is clicked
document.getElementById("back-to-top").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
})
