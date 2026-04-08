export class QCard {
    constructor(data, inc_score_callback) {
        this.question = data.question;
        this.options = data.options;
        this.correct = data.correct;
        this.is_done = false;
        this.inc_score = inc_score_callback;
    }

    render($tile) {
        // Create the container
        const card_div = $('<div class="card" style="visibility: hidden;"></div>');

        // Add Question
        card_div.append(`<h3>${this.question}</h3>`);

        // Add Radio Buttons
        this.options.forEach((opt, index) => {
            card_div.append(`
                <label>
                    <input type="radio" name="q-${this.question}" value="${index}"> ${opt}
                </label><br>
            `);
        });

        // Add Check Button
        const check_btn = $('<button class="check-btn">Check</button>');


        check_btn.on('click', (e) => {
            const options = $(e.target).siblings('label');
            const selected_option = options.find('input:checked');
            const value = selected_option.val();

            // 1. Prevent clicking "Check" if nothing is selected
            if (value === undefined || window.can_play === false) {
                return; 
            }

            if (!this.is_done) {
                // Use Number() to ensure the types match perfectly
                if (Number(value) === Number(this.correct)) {
                    this.inc_score();
                    console.log("Correct!"); 
                } else {
                    console.log("Wrong answer.");
                }

                this.is_done = true;
                $(e.target).closest('.tile').addClass('done');
                options.find('input').prop('disabled', true);
            }
        });

        card_div.append(check_btn);
        return card_div;
    }
}

export class ACard {
    constructor(data, asset_callback) {
        this.value = data.value;
        this.description = data.description;
        this.is_done = false;
        this.asset_callback = asset_callback;
    }

    render($tile) {
        // Create the container
        const card_div = $('<div class="card" style="visibility: hidden;"></div>');
        
        // Add Value
        card_div.append(`<h3>${this.value}</h3>`);

        // Add Description
        card_div.append(`<p>${this.description}</p>`);

        $tile.on('click', (e) => {
            if (window.can_play && !this.is_done) {
                card_div.css('visibility', 'visible');
                this.is_done = true;
                $tile.addClass('done');
                this.asset_callback(this.value);
            }
        });

        return card_div;
    }
}