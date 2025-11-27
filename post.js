// Copy the same posts array from script.js here
const posts = [
  {
    id: 1,
    title: "The Psychology Behind Offers That Convert",
    summary: "Deep dive into the mind triggers behind high-converting offers.",
    category: "Marketing Psychology",
    featured: true,
    image: "images/post1.jpg",
    content: `The Psychology Behind Offers That Convert

Why do some offers feel irresistible? It all comes down to understanding human psychology and the triggers that drive buying decisions. Here are key factors:

1. Scarcity: People want what’s rare or limited.
2. Social Proof: Testimonials and reviews build trust.
3. Value Proposition: Clear, tangible benefits.
4. Urgency: Time-limited deals motivate action.

By combining these elements effectively, you can create offers that consistently convert.`
  },
  {
    id: 2,
    title: "Building Viral Growth Loops",
    summary: "The hidden mechanics behind exponential customer growth.",
    category: "Strategy & Growth",
    featured: true,
    image: "images/post2.jpg",
    content: `Building Viral Growth Loops

Viral growth is more than luck—it’s a system. A growth loop is a process where each new customer brings more customers automatically. Steps include:

1. Create Shareable Value: Content or products that people want to share.
2. Referral Incentives: Reward users for inviting others.
3. Easy Sharing: Reduce friction in sharing links or codes.
4. Measure and Optimize: Track which loops bring the most growth.

Mastering viral loops accelerates customer acquisition exponentially.`
  },
  {
    id: 3,
    title: "Brand Positioning: What Works",
    summary: "A simple framework to instantly strengthen your brand.",
    category: "Brand Positioning",
    featured: false,
    image: "images/post3.jpg",
    content: `Brand Positioning: What Works

Strong brand positioning is about occupying a clear space in your customer’s mind. Steps to position your brand effectively:

1. Identify Your Unique Value: What sets you apart?
2. Know Your Audience: Understand desires, pain points, and demographics.
3. Craft Your Message: Simple, consistent, memorable.
4. Deliver Consistently: Across every channel and touchpoint.

Effective positioning creates trust, preference, and long-term loyalty.`
  }
];

// Get post ID from URL
const params = new URLSearchParams(window.location.search);
const postId = parseInt(params.get('id'));

// Find the post
const post = posts.find(p => p.id === postId);

if(post) {
  document.getElementById("post-title").textContent = post.title;
  const postImage = document.getElementById("post-image");
  postImage.src = post.image;
  postImage.alt = post.title;
  document.getElementById("post-body").innerHTML = post.content.replace(/\n/g, "<br>");
} else {
  document.getElementById("post-title").textContent = "Post Not Found";
  document.getElementById("post-body").textContent = "Sorry, the post you're looking for does not exist.";
}
