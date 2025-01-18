function loadNewsUpdates() {
    const data = {
        posts: [
            
            {
                image: "img/ogrod4.jpg",
                title: "Main Post Title",
                description: "This is the description for the main post.",
                date: "2023-10-01",
            },
            {
                image: "img/ogrod5.jpg",
                title: "Other Post 1 Title",
                description:
                    "This is the description for the first other post.",
                date: "2023-09-30",
            },
            {
                image: "img/ogrod6.jpg",
                title: "Other Post 2 Title",
                description:
                    "This is the description for the second other post.",
                date: "2023-09-29",
            },
            {
                image: "img/ogrod7.jpg",
                title: "Other Post 3 Title",
                description:
                    "This is the description for the third other post.",
                date: "2023-09-28",
            },
            
        ],
    };

    const mainPost = data.posts[0];
    const otherPosts = data.posts.slice(1, 4);

    const mainPostHtml = `
    <div class="news-updates__content-main">
      <img src="${mainPost.image}" alt="${mainPost.title}" />
      <h3>${mainPost.title}</h3>
      <p>${mainPost.description}</p>
      <span>${mainPost.date}</span>
    </div>
  `;

    const otherPostsHtml = otherPosts
        .map(
            (post) => `
    <div class="article">
      <img src="${post.image}" alt="${post.title}" />
      <div class="article-text">
        <h4>${post.title}</h4>
        <p>${post.description}</p>
        <span>${post.date}</span>
      </div>
    </div>
  `
        )
        .join("");

    document.querySelector(".news-updates__content").innerHTML =
        mainPostHtml +
        '<div class="news-updates__content-list">' +
        otherPostsHtml +
        "</div>";
}
loadNewsUpdates()