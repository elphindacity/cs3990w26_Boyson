let recipes = [
    {
        name: "Spaghetti Bolognese",
        category: "Dinner",
        image: "https://img.freepik.com/free-photo/pasta-spaghetti-with-tomato-sauce-cheese-served-plate_1220-6910.jpg?semt=ais_hybrid&w=740&q=80",
        ingredients: [
            "200g spaghetti",
            "200g ground beef",
            "100ml tomato sauce",
            "1 onion",
            "2 cloves garlic"
        ],
        description: "A classic Italian pasta dish with a rich meat sauce."
    },
    {
        name: "Chicken Caesar Salad",
        category: "Lunch",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtUOhrGgQJxk1kxUq4bZ05MyL-trzdgx52jg&s",
        ingredients: [
            "1 chicken breast",
            "1 head romaine lettuce",
            "100g parmesan cheese",
            "200g croutons",
            "Caesar dressing"
        ],
        description: "A refreshing salad with grilled chicken and classic Caesar dressing."
    },
    {
        name: "Pancakes",
        category: "Breakfast",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo9CfbDfo8zMLHoE98D7csJ8xKSW3z3czGkw&s",
        ingredients: [
            "200g flour",
            "2 eggs",
            "300ml milk",
            "1 tbsp sugar",
            "1 tsp baking powder"
        ],
        description: "Fluffy pancakes perfect for a weekend breakfast."
    },
    {
        name: "PB&J Sandwich",
        category: "Lunch",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOyn407Wewsx-Iu_ney1XDLaBmKIA9Yt6kKQ&s",
        ingredients: [
            "2 slices of bread",
            "1 tbsp peanut butter",
            "1 tbsp jam"
        ],
        description: "A classic American sandwich with peanut butter and jam."
    }
];

function generateButtons() {
    let categories = [...new Set(recipes.map(recipe => recipe.category))];
    let buttonContainer = document.createElement('div');
    let dishPanel = document.getElementById('dishPanel');
    categories.forEach(category => {
        let button = document.createElement('button');
        button.textContent = category;
        buttonContainer.appendChild(button);
    });
    dishPanel.appendChild(buttonContainer);
}

class Dish {
    constructor (name = "No name",  image = "No image", paragraph = "No text" ) {
        this.name = name;
        this.image = image;
        this.paragraph = paragraph;
    }

    render() {
        return `
            <article>
                <h2>${this.name}</h2>
                <img src="${this.image}" alt="picture of ${this.name}">
                <p>${this.paragraph}</p>
            </article>
        `;}
};

function generate_dishes(category) {
    let dishDesc = document.getElementById('dishDesc');
    dishDesc.innerHTML = '';
    recipes.filter(recipe => recipe.category === category).forEach(recipe => {
        const dish = new Dish(recipe.name, recipe.image, recipe.description);
        dishDesc.innerHTML += dish.render();
    });
};


let dishPanel = document.querySelector('#dishPanel');

dishPanel.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        category = event.target.textContent;
        // alert(`YOU selected ${category}`);
        generate_dishes(category);
        dishPanel.style.backgroundColor = "peachpuff";
    }
});


var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
script.onload = function() {
    $("h3").css({
        "padding": "5px",
    });
    $("#dishPanel").css("background-color", "peachpuff");
    generateButtons();
    $("#dishPanel button").css({
        "background-color": "orange",
        "margin": "10px",
        "padding": "5px",
        "box-shadow": "2px 2px 1px rgb(114, 59, 0)",
        "border": "none",
    });
    $("#dishDesc").css({
        "background-color": "orange",
        "padding": "10px",
        "font-weight": "bold",
    });
};
document.head.appendChild(script);