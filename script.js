// script.js

const posts = [
  {
    id: 1,
    title: "The Psychology Behind Offers That Convert",
    summary: "Deep dive into the mind triggers behind high-converting offers.",
    category: "Marketing Psychology",
    featured: true,
    image: "images/post1.jpg",
    content: `
The Psychology Behind Offers That Convert

Why do some offers feel irresistible? It all comes down to understanding human psychology and the triggers that drive buying decisions. Here are key factors:

1. **Scarcity:** People want what’s rare or limited.
2. **Social Proof:** Testimonials and reviews build trust.
3. **Value Proposition:** Clear, tangible benefits.
4. **Urgency:** Time-limited deals motivate action.

By combining these elements effectively, you can create offers that consistently convert.`
  },
  {
    id: 2,
    title: "Building Viral Growth Loops",
    summary: "The hidden mechanics behind exponential customer growth.",
    category: "Strategy & Growth",
    featured: true,
    image: "images/post2.jpg",
    content: `
Building Viral Growth Loops

Viral growth is more than luck—it’s a system. A growth loop is a process where each new customer brings more customers automatically. Steps include:

1. **Create Shareable Value:** Content or products that people want to share.
2. **Referral Incentives:** Reward users for inviting others.
3. **Easy Sharing:** Reduce friction in sharing links or codes.
4. **Measure and Optimize:** Track which loops bring the most growth.

Mastering viral loops accelerates customer acquisition exponentially.`
  },
  {
    id: 3,
    title: "Brand Positioning: What Works",
    summary: "A simple framework to instantly strengthen your brand.",
    category: "Brand Positioning",
    featured: false,
    image: "images/post3.jpg",
    content: `
Brand Positioning: What Works

Strong brand positioning is about occupying a clear space in your customer’s mind. Steps to position your brand effectively:

1. **Identify Your Unique Value:** What sets you apart?
2. **Know Your Audience:** Understand desires, pain points, and demographics.
3. **Craft Your Message:** Simple, consistent, memorable.
4. **Deliver Consistently:** Across every channel and touchpoint.

Effective positioning creates trust, preference, and long-term loyalty.`
    }
];

// Render categories dynamically
const categoryGrid = document.querySelector(".category-grid");
if(categoryGrid) {
  const categories = ["All", ...new Set(posts.map(p => p.category))];
  categories.forEach(cat => {
    const catCard = document.createElement("a");
    catCard.href = "#";
    catCard.className = "category-card";
    if(cat === "All") catCard.classList.add("active");
    catCard.textContent = cat;
    categoryGrid.appendChild(catCard);
  });
}

// Render featured posts dynamically
const featuredSection = document.querySelector(".featured-grid");
if(featuredSection) {
  posts.forEach(post => {
    if(post.featured) {
      const featuredCard = document.createElement("a");
      featuredCard.href = `post.html?id=${post.id}`;
      featuredCard.className = "featured-card";
      featuredCard.innerHTML = `
        <img src="${post.image}" alt="${post.title}" class="featured-img">
        <h3>${post.title}</h3>
        <p>${post.summary}</p>
        <a href="post.html?id=${post.id}" class="read-more">Read More →</a>
      `;
      featuredSection.appendChild(featuredCard);
    }
  });
}

// Render all posts dynamically
const postList = document.querySelector(".post-list");
function renderPosts(filteredPosts) {
  postList.innerHTML = "";
  filteredPosts.forEach(post => {
    const postCard = document.createElement("a");
    postCard.href = `post.html?id=${post.id}`;
    postCard.className = "post-card";
    postCard.innerHTML = `
      <img src="${post.image}" alt="${post.title}" class="post-img">
      <h3>${post.title}</h3>
      <p>${post.summary}</p>
      <a href="post.html?id=${post.id}" class="read-more">Read More →</a>
    `;
    postList.appendChild(postCard);
  });
}

renderPosts(posts);

// Filter posts by category
const categoryCards = document.querySelectorAll(".category-card");
categoryCards.forEach(card => {
  card.addEventListener("click", e => {
    e.preventDefault();
    const selectedCategory = card.textContent;

    // Highlight active category
    categoryCards.forEach(c => c.classList.remove("active"));
    card.classList.add("active");

    // Filter and render posts
    if(selectedCategory === "All") {
      renderPosts(posts);
    } else {
      renderPosts(posts.filter(p => p.category === selectedCategory));
    }
  });
});