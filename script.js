// UTILITIES

function show_task(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = 'none';
    });
    const active_page = document.getElementById(page_id);
    active_page.style.display = 'block';
};









// TASK 1 

class NumberGenerator {
    constructor() {
        this.value = 0;
        this.container = document.getElementById('n');
        this.generate();}

    render() {
        const num_con = document.getElementById('number-container');
        num_con.innerHTML = `
            <button id="dec" onclick="number_gen.decrement()">↓</button>
            <div id="number">${this.value}</div>
            <button id="inc" onclick="number_gen.increment()">↑</button>`;
        const gen_con = document.getElementById('gen-container');    
        gen_con.innerHTML = `
            <button id="gen" onclick="number_gen.generate()">Random Number</button>
            <hr>`;}

    generate() {
        this.value = Math.floor(Math.random() * 11);
        this.render();
        generate_news(this.value);}
    increment() {
        this.value++;
        this.render();
        generate_news(this.value);}
    decrement() {
        this.value--;
        this.render();
        generate_news(this.value);}
};

class News {
    constructor (title = "No title", paragraph = "No text", id_num = 0 ) {
        this.title = title;
        this.paragraph = paragraph;
        this.id = `news-${id_num}`;}

    render() {
        return `
            <article id="${this.id}">
                <h4>${this.title}</h4>
                <div class="content-body">
                    <p>${this.paragraph}</p>
                    <button>Remove</button>
                </div>
                <hr>
            </article>
        `;}

    remove(id) {
        const element = document.getElementById(id);
        element.remove();}
};

function generate_news(num) {
    const news_container = document.getElementById('news-container');
    news_container.innerHTML = '';
    for (let i = 0; i < num; i++) {
        const title = `News Title ${i + 1}`;
        const paragraph = `This is the content of news item ${i + 1}.`;
        const newsItem = new News(title, paragraph, i);
        news_container.innerHTML += newsItem.render();
    }
};

const news_con = document.getElementById('news-container');

news_con.addEventListener('click', (event) => {
    t = event.target
    if (t.tagName === 'BUTTON' && t.innerText === 'Remove') {
        const article = t.closest('article'); // closest = nearest parent matching the selector
        article.remove();
    }
});

const number_gen = new NumberGenerator();










// TASK 2

const color_palette = [
  "#000000", "#ffffff", "#FFCA3A", "#1eff00", "#49a300", "#2c6b47",
  "#1982C4", "#05296d", "#8240df", "#cf6179", "#d10007", "#ff630e",
  "#a7ceff", "#d493ff", "#520010", "#3a3a3a", "#b8b8b8", "#69ffed"
];

function create_palette() {
    const palette_container = document.getElementById('palette');

    color_palette.forEach(color => {
        const btn = document.createElement('button');
        btn.style.backgroundColor = color;
        btn.style.width = '50px';
        btn.style.height = '50px';
    
        btn.onclick = () => {
            console.log(`You picked ${color}!`);
    };
    
    palette_container.appendChild(btn);
    });
}

const latin = "Lorem ipsum dolor sit amet, consectetur adipiscing elit." + 
    " Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const latin_text = document.getElementById('latin-text');
latin_text.textContent = latin + latin + latin + latin + latin; // 5x for more text to scroll through

const palette = document.querySelector('#palette');

palette.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const color = event.target.style.backgroundColor;
        latin_text.style.color = color;
        console.log('You clicked:', color);
    }
});

col_con = document.getElementById('color-container');
let last_bg_color = 'wheat';

palette.addEventListener('mouseover', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const color = event.target.style.backgroundColor;
        col_con.style.backgroundColor = color;
    }
});

palette.addEventListener('mouseout', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const color = event.target.style.backgroundColor;
        col_con.style.backgroundColor = last_bg_color;
        console.log('You clicked:', color);
    }
});

palette.addEventListener('contextmenu', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const color = event.target.style.backgroundColor;
        last_bg_color = color;
        col_con.style.backgroundColor = color;
        console.log('You clicked:', color);
    }
});

create_palette();











// TASK 3

const dropdown_container = document.getElementById('dropdown-container');
const dropdown_menu = document.getElementById('dropdown-menu');

dropdown_container.addEventListener('click', () => {
    if (dropdown_menu.style.display === 'block') {
        dropdown_menu.style.display = 'none';
        dropdown_container.classList.remove('open');
    } else {
        dropdown_menu.style.display = 'block';
        dropdown_container.classList.add('open');
    }
});

dropdown_container.addEventListener('mouseover', (event) => {
    if (event.target.tagName === 'LI') {
        const emoji = event.target.querySelector('.emoji');
        emoji.style.visibility = 'visible';
    }
});

dropdown_container.addEventListener('mouseout', (event) => {
    if (event.target.tagName === 'LI') {
        const emoji = event.target.querySelector('.emoji');
        emoji.style.visibility = 'hidden';
    }
});










// TASK 4

class Fruit {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }


    render() {
        const li = document.createElement('li');
        li.textContent = this.name;
        li.style.backgroundColor = this.color;
        li.style.margin = '15px';
        li.classList.add(this.color);
        return li;
    }
}

let fruit_data = [
    { name: 'Apple', color: 'Red', rating: 4 },
    { name: 'Banana', color: 'Yellow', rating: 3 },
    { name: 'Plum', color: 'Purple', rating: 5 },
    { name: 'Orange', color: 'Orange', rating: 2 },
    { name: 'Lemon', color: 'Yellow', rating: 1 },
    { name: 'Strawberry', color: 'Red', rating: 3 }
];

const fruit_objects = [];
fruit_data.forEach(f => {
    const fruit = new Fruit(f.name, f.color);
    fruit_objects.push(fruit);
});


function add_fruits() {
    const fruit_list = document.querySelector('#Fruits ul');
    fruit_objects.forEach(fruit => {
        fruit_list.appendChild(fruit.render());
    });
}


function make_buttons() {
    unique_colors = [];
    fruit_data.forEach(fruit => {
        if (!unique_colors.includes(fruit.color)) {
            unique_colors.push(fruit.color);
        }
    });
    unique_colors.forEach(color => {
        const btn = document.createElement('button');
        btn.textContent = color;
        btn.style.backgroundColor = color;
        document.querySelector('#colors').appendChild(btn);
    });

}

const color_container = document.getElementById('colors');
color_container.addEventListener('click', (event) => {
    t = event.target;
    if (t.tagName === 'BUTTON') {
        const selected_color = t.textContent;
        const fruit_items = document.querySelectorAll('#Fruits ul li');
        fruit_items.forEach(fruit => {
            if (fruit.classList.contains(selected_color)) {
                fruit.style.color = 'white';
                fruit.style.boxShadow = "10px 10px 5px 0px rgba(0,0,0,0.75)";
            } else {
                fruit.style.color = 'black';
                fruit.style.boxShadow = 'none';
            }
        });
    }
});

class RatedFruit extends Fruit {
    constructor(name, color, rating = 1) {
        super(name, color);
        this.rating = rating;
    }

    render() {
        const li = super.render();
        li.style.display = 'flex';
        li.style.justifyContent = 'space-between';
        const star_container = document.createElement('div');
        star_container.style.display = 'inline-block';
        star_container.style.cursor = 'pointer';

        // Generate 5 stars
        for (let i = 1; i <= 5; i++) {
            const star = document.createElement('span');
            star.textContent = '★';
            
            if (i <= this.rating) {
                star.style.color = 'gold';
            } else {
                star.style.color = 'black';
            }
            
            star.onclick = () => {
                this.rating = i;
                this.update_stars(star_container);
            };

            star_container.appendChild(star);
        }

        li.appendChild(star_container);
        return li;
    }

    update_stars(container) {
        const stars = container.querySelectorAll('span');
        stars.forEach((star, index) => {
            if (index < this.rating) {
                star.style.color = 'gold';
            } else {
                star.style.color = 'black';
            }
        });
    }
}

const rated_fruit_objects = [];
fruit_data.forEach(f => {
    const fruit = new RatedFruit(f.name, f.color, f.rating);
    rated_fruit_objects.push(fruit);
});

function add_rated_fruits() {
    const fruit_list = document.querySelector('#Fruits ul');
    rated_fruit_objects.forEach(fruit => {
        fruit_list.appendChild(fruit.render());
    });
}

// add_fruits();
add_rated_fruits();
make_buttons();