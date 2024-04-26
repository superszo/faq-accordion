

let questions = document.getElementsByClassName('q-block');

for (let i of questions) {
    let block = i.parentNode;

    i.addEventListener('mouseover', function() {
        this.firstElementChild.style.color = '#AD28EB'
    })

    i.addEventListener('mouseout' ,function() {
        this.firstElementChild.style.color ='#301534'
    })

    i.addEventListener('click', function() {
        if (block.lastElementChild.className.match('show')) {
            block.lastElementChild.classList.remove('show')
            this.lastElementChild.src = "./assets/images/icon-plus.svg"
        } else {
            block.lastElementChild.classList.add('show');
            this.lastElementChild.src = "./assets/images/icon-minus.svg"
        }
    })
}


