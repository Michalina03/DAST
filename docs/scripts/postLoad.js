function loadNewsUpdates() {
    const data = {
        posts: [
            {
    image: "img/ogrod8.jpg",
    title: "Nowy ogród w Warszawie",
    description: "Dzisiaj zakończyliśmy aranżację przydomowego ogrodu w Warszawie – klient był zachwycony nową rabatą kwiatową i altanką.",
    date: "2025-09-02",
},
{
    image: "img/ogrod5.jpg",
    title: "Taras z ogrodem w Krakowie",
    description: "Stworzyliśmy nowoczesny taras z zielonymi donicami w Krakowie. Sezon letni w pełni, a rośliny już pięknie kwitną!",
    date: "2025-09-01",
},
{
    image: "img/ogrod6.jpg",
    title: "Ogród przy firmie w Poznaniu",
    description: "Dzisiaj wykonaliśmy kompleksową pielęgnację ogrodu przy firmie w Poznaniu – nowy system podlewania działa bez zarzutu.",
    date: "2025-08-30",
},
{
    image: "img/ogrod7.jpg",
    title: "Mały ogródek w Gdańsku",
    description: "Zmieniliśmy aranżację małego ogródka miejskiego w Gdańsku – klient dostał dodatkowe miejsce na warzywa i zioła.",
    date: "2025-08-29",
},
{
    image: "img/ogrod10.webp",
    title: "Ogród pokazowy w Łodzi",
    description: "Dzisiaj zakończyliśmy ogród pokazowy w Łodzi. Ścieżki kamienne i oczko wodne przyciągają uwagę każdego przechodnia.",
    date: "2025-08-28",
},
{
    image: "img/ogrod4.jpg",
    title: "Ogród przy domu w Szczecinie",
    description: "Stworzyliśmy piękny ogród przydomowy w Szczecinie z dużą ilością roślin kwitnących – idealne miejsce na weekendowe relaksowanie się.",
    date: "2025-08-27",
}

            
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