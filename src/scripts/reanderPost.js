const data = {
    posts: [
        {
            image: "../img/ogrod4.jpg",
            title: "Main Post Title",
            description: "This is the description for the main post.",
            date: "2023-10-01",
        },
        {
            image: "../img/ogrod5.jpg",
            title: "Other Post 1 Title",
            description: "This is the description for the first other post.",
            date: "2023-09-30",
        },
        {
            image: "../img/ogrod6.jpg",
            title: "Other Post 2 Title",
            description: "This is the description for the second other post.",
            date: "2023-09-29",
        },
        {
            image: "../img/ogrod7.jpg",
            title: "Other Post 3 Title",
            description: "This is the description for the third other post.",
            date: "2023-09-28",
        },
        {
            image: "../img/ogrod6.jpg",
            title: "Other Post 2 Title",
            description: "This is the description for the second other post.",
            date: "2023-09-29",
        },
        {
            image: "../img/ogrod7.jpg",
            title: "Other Post 3 Title",
            description: "This is the description for the third other post.",
            date: "2023-09-28",
        },
    ]
}
function renderPosts(data) {
    const worksList = document.querySelector(".works__list");

    const postsHtml = data.posts
        .map(
            (post) => `
            <div class="works__item">
              <img
                class="works__item-image"
                src="${post.image}"
                alt="${post.title}"
              />
              <div class="works__item-content">
                <h3 class="works__item-title">${post.title}</h3>
                <span class="works__item-date">${new Date(
                    post.date
                ).getFullYear()}</span>
                <p class="works__item-description">${post.description}</p>
              </div>
            </div>
          `
        )
        .join("");

    worksList.innerHTML = postsHtml;
}

renderPosts(data);