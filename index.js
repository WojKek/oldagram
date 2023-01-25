const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const postSection = document.getElementById("post-section")

function renderPosts(posts) {
    for (let i = 0; i<posts.length; i++) {
        postSection.innerHTML +=`
            <div class = "post">
                <div class="user-description">
                    <img class="user-avatar" src="${posts[i].avatar}">
                    <div class="user-destription-texts">
                        <p class="bold">${posts[i].name}</p>
                        <p>${posts[i].location}</p>
                    </div>
                </div>
                <img class="post-img" src="${posts[i].post}">
                <div class="interact-section">
                    <div class="reactions-container">
                        <img class="icon heart-icon" src="images/icon-heart.png">
                        <img class="icon comment-icon" src="images/icon-comment.png">
                        <img class="icon dm-icon" src="images/icon-dm.png">
                    </div>
                    <p class="bold">${posts[i].likes} likes</p>
                    <p><span class="bold">${posts[i].username}</span> ${posts[i].comment}</p>
                </div>
                <div class="break">
                </div>
            </div>
        ` 
    }
}

renderPosts(posts)

