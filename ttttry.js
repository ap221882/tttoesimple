var click = document.querySelector('#click')
var td = document.querySelectorAll('td')

function clearBoard(){
for (let i = 0; i < td.length; i++) {
    td[i].innerText = '';
}   
}

click.addEventListener('click',clearBoard)

function eventMaker(){
    if (this.innerText ===''){
        this.innerText = 'X'
    }else if(this.innerText === 'X'){
        this.innerText = 'O';
    }else if (this.innerText ==='O'){
        this.innerText = ''
    }
}

for (let i = 0; i < td.length; i++) {
    td[i].addEventListener('click',eventMaker)
    
}