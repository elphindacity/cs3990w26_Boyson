class News {

    constructor (title = "No title", image_url = undefined, paragraph = "No text", id_num = 0 ) {
        this.like_counter = 0;
        this.title = title;
        this.image_url = image_url;
        this.paragraph = paragraph;
        this.id_num = `news-${id_num}`;
    }

    // Render method produces HTML : title, img, paragraph, stars, like btn, hide btn
    // onclick event HTML attribute to set event handlers for the buttons

    render() {
        return `
            <article id="${this.id_num}">
                <h2>
                    ${this.title}
                    <button class="hide-btn" onclick="window['${this.id_num}'].hide()">Hide</button>
                </h2>
                <div class="content-body">
                    <img src="${this.image_url}" alt="News Image" style="max-width: 200px; height: auto;">
                    <p>${this.paragraph}</p>
                    <div class="stars" style="font-size: 60px">${'\u2660'.repeat(this.like_counter)}</div> 
                    <div class="actions">
                        <button class="like-btn" onclick="window['${this.id_num}'].incLikes()">Like</button>
                    </div>
                </div>
                <hr>
            </article>
        `;
    }

    // LIKE BUTTON
    incLikes() {
        this.like_counter++;
        // The html doesn't automatically update, so we need to re-render the article
        const element = document.getElementById(this.id_num);
        if (element) {
            element.outerHTML = this.render();
        }
    }

    // HIDE BUTTON 
    hide() {

        // First get the article element and its children
        const element = document.getElementById(this.id_num);
        const body = element.querySelector('.content-body');
        const btn = element.querySelector('.hide-btn');
        const likeBtn = element.querySelector('.like-btn');

        // Toggle Show/Hide based on button text
        if (btn.textContent === "Hide") {
            // ACTION: HIDE
            body.style.opacity = "0.3";
            body.style.filter = "grayscale(1)";
            likeBtn.disabled = true;
            btn.textContent = "Show";
        } else {
            // ACTION: SHOW
            body.style.opacity = "1";
            body.style.filter = "none";
            likeBtn.disabled = false;
            btn.textContent = "Hide";
        }
}



    show(targetElementId) {
        const target = document.getElementById(targetElementId);
        if (target) {
            window[this.id_num] = this; // Use id_num to match the onclick calls
            target.innerHTML += this.render();
        }
    }
}



let arrRecourses = [
 {
 srcImg: 'park.jpg',
 newsTitle: 'Local Playground Opens',
 newsContent: "The new playground at Avondale north is open to the public."
 },
  {
 srcImg: 'pattyday.webp',
 newsTitle: "Happy St. Patrick's Day!",
 newsContent: "Join us for a celebration of Irish culture with music, food, and fun activities for all ages."
 },
  {
 srcImg: 'socks.jpg',
 newsTitle: 'Socktember is Here!',
 newsContent: "Please donate new socks to help those in need during the colder months. Drop-off locations are available throughout the city."
 }
]

function generateNews() {
    const content = document.getElementById('content')
    const allParagraphs = content.querySelectorAll('p');
    allParagraphs.forEach((paragraph, index) => {
        title = arrRecourses[index].newsTitle;
        img_url = arrRecourses[index].srcImg;
        text = arrRecourses[index].newsContent;
        const newsItem = new News(title, img_url, text, index);
        newsItem.show(`content`);
    });
};

// MAIN

generateNews();
