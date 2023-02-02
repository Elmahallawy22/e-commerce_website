let navItem = document.querySelectorAll('.num-page');
let wrapper = document.querySelector('.sliderWrapper');
navItem.forEach((item, index) => {
    item.addEventListener('click', () => {
        navItem.forEach((item) => item.classList.remove('active'))
        item.classList.add('active');
    })
})

const product = [
    {
        id: 1,
        titlt: 'AIR FORRGE',
        price: 199,
        console: [
            {
                colo: 'black',
                img: 'img/air.png',
            },
            {
                colo: 'darkblue',
                img: 'img/air2.png',
            }
        ],
    },
    {
        id: 2,
        titlt: 'AIR JORDEN',
        price: 149,
        console: [
            {
                colo: 'lightgray',
                img: 'img/jordan.png'
            },
            {
                colo: 'green',
                img: 'img/jordan2.png'
            }
        ]
    },
    {
        id: 3,
        titlt: 'AIR BLAZER',
        price: 259,
        console: [
            {
                colo: 'lightgray',
                img: 'img/blazer.png'
            },
            {
                colo: 'green',
                img: 'img/blazer2.png'
            }
        ]
    },
    {
        id: 4,
        titlt: 'AIR CRATER',
        price: 169,
        console: [
            {
                colo: 'black',
                img: 'img/crater.png'
            },
            {
                colo: 'lightgray',
                img: 'img/crater2.png'
            }
        ]
    },
    {
        id: 5,
        titlt: 'AIR HIPPIe',
        price: 199,
        console: [
            {
                colo: 'gray',
                img: 'img/hippie.png'
            },
            {
                colo: 'black',
                img: 'img/hippie2.png'
            }
        ]
    },
]

let currentProdect = product[0];
let productTitle = document.querySelector('.proTitle');
let productPrice = document.querySelector('.proPrice');
let productImg = document.querySelector('.product img');
let productColor = document.querySelectorAll('.color');

navItem.forEach((item, index) => {
    item.addEventListener('click', () => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`
        currentProdect = product[index];
        productTitle.innerHTML = currentProdect.titlt;
        productPrice.innerHTML = '$' + currentProdect.price;
        productImg.src = currentProdect.console[0].img;
        productColor.forEach((item, index) => {
            item.style.backgroundColor = currentProdect.console[index].colo;
        })
    })
})

productColor.forEach((color, index) => {
    color.addEventListener('click', () => {
        productImg.src = currentProdect.console[index].img;
    })
})

let choosen = document.querySelectorAll('.choose')
choosen.forEach((item, index) => {
    item.addEventListener('click', () => {
        choosen.forEach((item) => {
            item.style.color = 'black';
            item.style.backgroundColor = 'white'
        })
        item.style.color = 'white';
        item.style.backgroundColor = 'black'
    });
})

let sign = document.querySelector('.sign')
let buy = document.querySelector('.proBtn')
let exit = document.querySelector('.exit')
buy.addEventListener('click', () => sign.style.display = 'flex')
exit.addEventListener('click',() => sign.style.display = 'none')