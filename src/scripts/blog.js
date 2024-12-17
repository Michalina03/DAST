const blog = document.querySelector("#blog");
const blogContainer = document.querySelector("#blogContainer");
const blogClose = document.querySelector("#blog--close");

const openBlog = () => {
    console.log("Blog otwarty!");
    blogContainer.style.display = "block";
};
  
const closeBlog = () => {
    console.log("Blog zamknięty!");
    blogContainer.style.display = "none";
};
  
blog.addEventListener("click", () => {
    openBlog();
});
  
blogClose.addEventListener("click", () => {
    closeBlog();
});

openBlog();
