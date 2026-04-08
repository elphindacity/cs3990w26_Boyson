import { fy_shuffle, start_countdown } from './utils.js';
import { questions, assets } from './data.js'
import { QCard, ACard } from './card.js';

window.can_play = true;

function inc_score() {
    const score = document.getElementById('score-val');
    score.innerText = parseInt(score.innerText) + 1;
}

function reset_score() {
    const score = document.getElementById('score-val');
    score.innerText = '0';
}

function dec_score() {
    const score = document.getElementById('score-val');
    score.innerText = parseInt(score.innerText) - 1;
}

function asset_callback(value) {
    if (value === "💎") {
        inc_score();
    } else if (value === "🐻") {
        dec_score();
    } else if (value === "❌") {
        window.can_play = false;
        const msg = document.getElementById('feedback');
        msg.innerText = "Now you have to wait for your timer!";
    }
}


function make_q_cards() {
    const q_cards = [];
    questions.forEach(item => {
        const card = new QCard(item, inc_score);
        q_cards.push(card);
    });
    return q_cards;
}

function make_a_cards() {
    const a_cards = [];
    assets.forEach(item => {
        const card = new ACard(item, asset_callback);
        a_cards.push(card);
    });
    return a_cards;
}

function show_board() {
    const board = document.getElementById('game-board');
    board.innerHTML = '';
    
    let q_cards = make_q_cards();
    let a_cards = make_a_cards();
    let all_cards = [...q_cards, ...a_cards];
    let shuffled_deck = fy_shuffle(all_cards);

    shuffled_deck.forEach(item => {
        const tile = document.createElement('div');
        tile.classList.add('tile');
        const card = item;
        tile.appendChild(item.render($(tile))[0]); 
        board.append(tile);
    });
}

const start_btn = document.getElementById('start-btn');

function show_game_info() {
    const game_info = document.getElementById('game-info')
    game_info.style.display = 'block';
    const game_board = document.getElementById('game-board');
    game_board.style.display = 'grid';
}

start_btn.addEventListener('click', () => {
    if (!start_btn.classList.contains('disabled')) {
        start_btn.classList.add('disabled');
        reset_score();
        // 3. Game info and board appear
        show_game_info();
        show_board();
        const board = document.getElementById('game-board');
        board.scrollIntoView({ behavior: 'smooth' });
        // 4. Timer starts
        start_countdown(18, 'time-left', start_btn);
        window.can_play = true;
    }
});


const game_board = document.getElementById('game-board');
game_board.addEventListener('click', (e) => {
    if (window.can_play) {
        const tile = e.target.closest('.tile');
        if (tile && !tile.classList.contains('done')) {
            const card = tile.querySelector('.card');   
            card.style.visibility = 'visible';
        }
    }
});
