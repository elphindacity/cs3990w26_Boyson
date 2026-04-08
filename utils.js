// Utils.js

// JS doesn't have built-in shuffle, so I looked up shuffle algorithms and learned about the Fisher-Yates shuffle
// it selects a card at random from the unshuffled portion and places it at the end of the shuffled portion
// its unbiased and optimally efficient
export const fy_shuffle = (array) => {
    let current = array.length;
    while (current !== 0) {
        let random = Math.floor(Math.random() * current);
        current--;
        [array[current], array[random]] = [array[random], array[current]];
    }
    return array;
};

// Timer function 
export function start_countdown(duration, display_id, start_btn) {
  const start_time = Date.now();
  const display = document.getElementById(display_id);

  const game_timer = setInterval(() => {
    const elapsed_ms = Date.now() - start_time;
    const remaining_seconds = duration - (elapsed_ms / 1000);
    
    // Calculate display value
    const display_time = Math.max(0, remaining_seconds).toFixed(1);

    // Update the UI
    display.innerText = display_time;

    // Stop logic
    if (remaining_seconds <= 0) {
        clearInterval(game_timer);
        window.can_play = false;
        start_btn.classList.remove('disabled');
        const msg = document.getElementById('feedback');
        msg.innerText = "";
    }
  }, 100);

  return game_timer; // Return the ID so you can call clearInterval() manually
}

