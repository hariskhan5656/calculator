let string = "";

let buttons = document.querySelectorAll('.btn');

Array.from(buttons).forEach((buttons) => {
    buttons.addEventListener('click', (e) => {

        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'AC') {
            string = "";
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'DE') {
            string = string.slice(0, -1) ;
            document.querySelector('input').value = string;
            
        }
        else {
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }

    })
});

let a = Math;
console.log(a);