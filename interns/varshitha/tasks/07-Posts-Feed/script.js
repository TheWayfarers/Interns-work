const postsList = document.getElementById("posts-list");
const searchInput = document.getElementById("search-input");
const reloadButton = document.getElementById("reload-button");
const apiSource = document.getElementById("api-source");

const loadingMessage = document.getElementById("loading-message");
const errorMessage = document.getElementById("error-message");
const postDetail = document.getElementById("post-detail");

let posts = [];

async function fetchPostsLive() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=30"
    );

    if (!response.ok) {
        throw new Error("Network response was not ok");
    }

    return response.json();
}

async function loadPosts() {
    showLoading();
    postsList.innerHTML = "";

    postDetail.innerHTML = `
        <h2>Post Details</h2>
        <p>Select a post to see its details.</p>
    `;

    try {
        if (apiSource.value === "mock") {
            posts = await fetchPostsMock();
        } else {
            posts = await fetchPostsLive();
        }

        hideLoading();
        hideError();
        renderPosts(posts);
    } catch (error) {
        hideLoading();
        showError(error.message);
    }
}

function renderPosts(postData) {
    if (postData.length === 0) {
        postsList.innerHTML = `
            <p class="empty-message">No posts found.</p>
        `;
        return;
    }

    postsList.innerHTML = postData
        .map((post) => {
            return `
                <article class="post-card" data-id="${post.id}">
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                    <span class="post-id">Post ID: ${post.id}</span>
                </article>
            `;
        })
        .join("");

    addCardEvents();
}

function addCardEvents() {
    const cards = document.querySelectorAll(".post-card");

    cards.forEach((card) => {
        card.addEventListener("click", () => {
            const postId = Number(card.dataset.id);

            const selectedPost = posts.find(
                (post) => post.id === postId
            );

            if (selectedPost) {
                showPostDetail(selectedPost);
            }
        });
    });
}

function showPostDetail(post) {
    postDetail.innerHTML = `
        <h2>Post Details</h2>
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <p>Post ID: ${post.id}</p>
        <p>User ID: ${post.userId}</p>
    `;

    postDetail.scrollIntoView({
        behavior: "smooth"
    });
}

function searchPosts() {
    const searchText = searchInput.value.trim().toLowerCase();

    const filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(searchText)
    );

    if (filteredPosts.length === 0) {
        postsList.innerHTML = `
            <p class="empty-message">
                No posts match your search.
            </p>
        `;
        return;
    }

    renderPosts(filteredPosts);
}

function showLoading() {
    loadingMessage.style.display = "block";
    errorMessage.style.display = "none";
}

function hideLoading() {
    loadingMessage.style.display = "none";
}

function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = "block";
    postsList.innerHTML = "";
}

function hideError() {
    errorMessage.style.display = "none";
}

searchInput.addEventListener("input", searchPosts);

reloadButton.addEventListener("click", loadPosts);

apiSource.addEventListener("change", loadPosts);

loadPosts();