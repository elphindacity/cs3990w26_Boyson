// Login Button Logic

document.getElementById('loginButton').onclick = function() {
    let username = prompt("Please enter your name:");

    if (username === "admin") {
        document.getElementById("sayHiButton").classList.remove("hidden");
        document.getElementById("favoriteAnimalButton").classList.remove("hidden");
    } 
    else if (username === "student") {
        document.getElementById("sayHiButton").classList.remove("hidden");
    } 
    else {
        alert("I don't know you.");
    }
};

// Say Hi Button Logic

document.getElementById('sayHiButton').onclick = function() {
    let language = prompt("Please select a language: Eng, Fr, De, Spa.").toLowerCase();
    switch (language) {
        case "eng":
            alert("Hi!");
            break;
        case "fr":
            alert("Bonjour!");
            break;
        case "de":
            alert("Hallo!");
            break;
        case "spa":
            alert("¡Hola!");
            break;
        default:
            alert("Language not recognized.");
    }
};

// Favorite Animal Button Logic

document.getElementById('favoriteAnimalButton').onclick = function() {
    let age = prompt("Please enter your age:");
    if (age >= 18 && age <= 55) {
        // display an image
        let img = document.getElementById("animalDisplay");

        if (!img) {
            img = document.createElement("img");
            img.id = "animalDisplay"; // ID ensures we can find it next time
            document.body.appendChild(img);
        }

        // Set initial placeholder
        img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Question_mark_in_square_brackets.svg/640px-Question_mark_in_square_brackets.svg.png";
        img.alt = "?";
        const container = document.getElementById("part-one");
        container.appendChild(img); 

        // call fav animal function interrupts the UI
        // fav_animal(img);

        // Timeout allows the image to render before the prompt blocks the UI
        setTimeout(() => fav_animal(img), 10);

    } else if (age > 55) {
        alert("Much like mathematics, programming is a logico-deductive system. And I think the important point that I am making is that in a purely logico-deductive system there is no philosophy - everything is known. However, insofar as there is art in mathematics, there is philosophy in mathematics. Insofar as there is art in programming, there is philosophy in programming.");
    } else {
        alert("Content is not available due to age restrictions!");
    }
};

function fav_animal(img) { 
    let animal = prompt("What is your favorite animal in this list: Cat, Dog, Mouse, Frog?").toLowerCase();
        switch (animal) {
            case "cat":
                img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Calico_cat%2C_-_Assisi%2C_Italy.jpg/640px-Calico_cat%2C_-_Assisi%2C_Italy.jpg";
                break;
            case "dog":
                img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Golde33443.jpg/640px-Golde33443.jpg";
                break;
            case "mouse":
                img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Apodemus_sylvaticus_bosmuis.jpg/640px-Apodemus_sylvaticus_bosmuis.jpg";
                break;
            case "frog":
                img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Green_and_Golden_Bell_Frog.jpg/640px-The_Green_and_Golden_Bell_Frog.jpg";
                break;
            default:
                alert("Animal not recognized.");
        }
 }

// Login2 Button Logic
document.getElementById('login_button2').onclick = function() {
    let username = prompt("Please enter your username:");

    if (username.toLowerCase() === "admin") {
        gen_pass = generate_password();
        attempts = 2;
        login = password_verification(attempts, gen_pass);
        if (login) { admin(); }
    } else if (username.toLowerCase() === "designer") {
        gen_pass = '111';
        attempts = 3;
        login = password_verification(attempts, gen_pass);
        if (login) { not_admin("Adobe XD"); }
    } else if (username.toLowerCase() === "tester") {
        gen_pass = '222';
        attempts = 3;
        login = password_verification(attempts, gen_pass);
        if (login) { not_admin("QA Pro"); }
    } else {
        alert("No such user exits.");
    }
};

function generate_password() {
    count = 6;
    pw = "";
    while (count > 0) {
        pw += d10().toString();
        count--;
    }
    return pw;
};

function d10() {
    return Math.floor(Math.random() * (10));
}

function password_verification(attempts, gen_pass)   {
    while (true) {
        let password = prompt(`Please enter your password (${gen_pass}) :`);
        if (password === gen_pass) {
            alert("Login successful!");
            return true;
        } else {
            attempts--;
            if (attempts === 0) {
                alert("Too many failed attempts. Please try again later.");
                return false;
            }
        }
    }
};

function admin() {
    let age = "-1";
    while (isNaN(age) || age < 0) {
        age = prompt("Please enter the age you were when you started your degree:");
    }
    let year = "-1";
    while (isNaN(year) || year < 0) {
        year = prompt("Please enter the year you started your degree:");
    }
    alert(`You will be ${Number(age)+4} years old and started your degree in ${Number(year)+4}.`);
};

function not_admin(course) {
    let num_p = "-1";
    while (isNaN(num_p) || num_p < 0) {
        num_p = prompt("Please enter the number of available portfolios:");
    }
    let age = "-1";
    while (isNaN(age) || age < 0) {
        age = prompt("Please enter your age:");
    }
    if (age >= 14 && age <= 18 && num_p >= 5 && num_p <= 10) {
        alert(`You are eligible for a 10% discount on the ${course} course.`);
    } else if (age > 18 && num_p >= 10 && num_p <= 20) {
        alert(`You are eligible for a 7% discount on the ${course} course.`);
    } else {
        alert(`You are not eligible for a discount on the ${course} course.`);
    }
};

// FRUIT EXERCISES

let fruits = ["orange", "apple", "banana"];
displayArray('fruit_list', fruits);

function displayArray(list_id, array_name) {
    // Get HTML list
    const list = document.getElementById(list_id);
    // Clear the current list so we don't get duplicates
    list.innerHTML = ""; 
    // Loop through the JS array and create <li> tags for each item
    array_name.forEach(item => {
        let li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
    });
};

document.getElementById('add_fruit').onclick = function() {
    let newFruit = prompt("Enter a fruit to add:").toLowerCase();
    let start = confirm("OK will add the fruit to the start of the list. Cancel will add the fruit to the end of the list.");
    if (!start) {
        fruits.push(newFruit);
    } else {
        fruits.unshift(newFruit);
    }
    displayArray('fruit_list', fruits);
};

document.getElementById('index_fruit').onclick = function() {
    let newFruit = prompt("Enter the fruit you wish to know the index of:").toLowerCase();
    let index = fruits.indexOf(newFruit);
    if (index !== -1) {
        alert(`The index of ${newFruit} is ${index}.`);
    } else {
        alert(`The fruit ${newFruit} is not in the list.`);
    }
    displayArray('fruit_list', fruits);
};

// NUMBER EXERCISES

let numbers = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
displayArray('number_list', numbers);

document.getElementById('sum_numbers').onclick = function() {
    t = prompt("Do you wish to sum (a)ll numbers, (e)ven numbers, or (o)dd numbers?").toLowerCase();
    if (t === 'a') {
        s = sum_all(numbers);
        alert(`The sum of all numbers is ${s}.`);
    } else if (t === 'e') {
        let evenNumbers = numbers.filter(n => n % 2 === 0);
        s = sum_all(evenNumbers);
        alert(`The sum of even numbers is ${s}.`);
    } else if (t === 'o') {
        let oddNumbers = numbers.filter(n => n % 2 !== 0);
        s = sum_all(oddNumbers);
        alert(`The sum of odd numbers is ${s}.`);
    } else {
        alert("Invalid option.");
    }
};

function sum_all(array) {
    let sum = 0;
    array.forEach(n => {
        sum += n;
    });
    return sum;
};

document.getElementById('splice').onclick = function() {
    i = prompt("Enter the index of the number you wish to start splicing:");
    n = prompt("Enter the number of elements you wish to splice:");
    numbers.splice(i, n);
    displayArray('number_list', numbers);
};

document.getElementById('reset_numbers').onclick = function() {
    numbers = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
    displayArray('number_list', numbers);
};
