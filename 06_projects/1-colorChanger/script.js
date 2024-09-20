const buttons = document.querySelectorAll('.button');
// console.log(buttons);

const body = document.querySelector("body");

const H2 = document.querySelector("h2");

buttons.forEach((button) => {
    button.addEventListener('click', function (e) {
        // console.log(e)
        // console.log(e.target)
        if (e.target.id === 'gray') {
            body.style.backgroundColor = e.target.id;
            H2.style.color = 'blue';
        }
        else if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id;
            H2.style.color = e.target.id.toLowerCase();
        }
        else if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
            H2.style.color = e.target.id.toLowerCase();
        }
        else {
            body.style.backgroundColor = 'green';
            H2.style.color = e.target.id.toLowerCase();
        }
    })
});