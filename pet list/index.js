// const gancxadebaConst = new gancxadeba('ჩუქდება კატა თეთრი ფერის', 'დავითი', '598202020', 'თბილისი', 'კატა არის საყვარელი ეძებს მზრუნველ პატრონს', null,
//     0, 'https://www.purina.co.uk/sites/g/files/mcldtz2481/files/styles/nppe_breed_selector_500/public/breed_library/cat_bengal.jpg?itok=dWxQ-J-d')
// const gancxadebaConst1 = new gancxadeba('shavi კატა თეთრი ფერის', 'gia', '5522', 'თბილისი', 'კატა  მზრუნველ პატრონს', null,
//     0, 'https://www.purina.co.uk/sites/g/files/mcldtz2481/files/styles/nppe_breed_selector_500/public/breed_library/cat_bengal.jpg?itok=dWxQ-J-d')
// const gancxadebaConst2 = new gancxadeba('shavi კატა თეთრი ფერის', 'gia', '5522', 'თბილისი', 'კატა  მზრუნველ პატრონს', null,
//         0, 'https://www.purina.co.uk/sites/g/files/mcldtz2481/files/styles/nppe_breed_selector_500/public/breed_library/cat_bengal.jpg?itok=dWxQ-J-d')
//     // const axaliGancxadeba = new gancxadeba(gancxadebisSaxeli.value, momxmareblisSaxeli.value, MomxmareblisNomeri.value,
//     //     momxmareblisAdgilmdebareoba.value, agwera.value, cxovelisSuratiURL.value);



// const gancxadebamasiviASstring = localStorage.getItem('gancxadebamasivi1');
// const gancxadebamasiviASArray = JSON.parse(gancxadebamasiviASstring);

// const localStorageshi_shenaxuli_gancxadebebi = localStorage.getItem('gancxadebalocalStorage')
// const localStorageshi = JSON.parse(localStorageshi_shenaxuli_gancxadebebi)
//     // console.log(localStorageshi_shenaxuli_gancxadebebi);
// console.log(localStorageshi);


const Button_Washale_Gancxadeba = document.querySelector('.delete_button')
const Gancxadebashi_delete_div = document.querySelector('.gancxadeba_delete_button_div')
    // const gancxadeba_delete_button_x = document.querySelectorall('.gancxadeba_delete_button_i')

const petlisthtml = document.querySelector('.pet-list')

let dataGancxadebebi = [];










const getGancxadebebi = () => {
    $.ajax({
            method: 'get',
            url: "http://localhost:3000/statements"
        })
        .done(function(data) {
            console.log(data);
            dataGancxadebebi = data;
            yvelagancxadeba(data);
            const deleteButton = document.querySelectorAll('.gancxadeba_delete_button_i')
            console.log(dataGancxadebebi);
            deleteButton[i].addEventListener('click', () => {
                for (let i = 0; i < deleteButton.length; i++) {
                    const statmentsID = parseInt(deleteButton[i].getAttribute('statmentID'));

                    // const statment = dataGancxadebebi.find((statment) => {
                    //     return statment.id = statmentsID;
                    // })


                    deleteGancxadebebi(statmentsID)
                    console.log(statmentsID);
                }



            })


        })

    // function togglbuttonvisibilite() {
    //     const statmentBtton = document.querySelector('gancxadeba_delete_button_i')
    //     for (let i = 0; i < statmentBtton.length; i++) {
    //         statmentBtton[i].classList.toggle('.hiden')

    //     }
    // }




}

function togglbuttonvisibilite() {
    const statmentBtton = document.querySelectorAll('.gancxadeba_delete_button_i')
    for (let i = 0; i < statmentBtton.length; i++) {
        statmentBtton[i].classList.toggle('hiden')

    }
}


Button_Washale_Gancxadeba.addEventListener('click', () => {
    togglbuttonvisibilite()

});

const deleteGancxadebebi = (id) => {

    $.ajax({
            method: 'delete',
            url: `http://localhost:3000/statements/${id}`
        })
        .done(function(data) {
            console.log(data);
            dataGancxadebebi = data;
            getGancxadebebi();
            // alert('yvelaferi kargad dailoga')

        })

}


const changeGancxadebaValue = (id) => {

    $.ajax({
            method: 'put',
            url: `http://localhost:3000/statements/${id}`,
            data: {
                gancxadebisSaxeli: "iyideba gela",
                momxmareblisAdgilmdebareoba: "dusheti",
                momxmareblisSaxeli: "gela",
                MomxmareblisNomeri: "tviton gela",
                agwera: "bannjgvliani gela",
                fasi: "0",
                coxevli: "",
                img: "https://miro.medium.com/max/1000/1*qyAOepULOa_kVehhEIySKA.jpeg",
            },
            Headers: {
                'content-type': 'application/json; charset=utf-8',
            }
        })
        .done(function(data) {
            console.log(data);
            dataGancxadebebi = data;
            getGancxadebebi();
            // alert('yvelaferi kargad dailoga')

        })
}




getGancxadebebi();





// console.log(axaliGancxadeba);
// console.log(gancxadebaConst);
// let array = [gancxadebaConst2]
// localStorage.setItem('gancxadebebismasivilocalstorijshi', JSON.stringify(array));
// const gancxadebamasiviASstring = localStorage.getItem('gancxadebebismasivilocalstorijshi')
// const gancxadebamasiviASArray = JSON.parse(gancxadebamasiviASstring)

// console.log(gancxadebamasiviASstring);
// console.log(gancxadebamasiviASArray);





const appendgancxadeba = (gancxadeba) => {

    // <div class="gancxadeba_delete_button_div">  <button class="gancxadeba_delete_button_i">dwad ${gancxadeba.id} </button>     </div>

    const templatgancxadeba = `  <div class="gancxadeba-div">
   
     <button class="gancxadeba_delete_button_i"  statmentID="${gancxadeba.id}"> წაშალე განცხადება </button>
<p class="gancxadebissatauri">${gancxadeba.gancxadebisSaxeli}</p>
<img class="img-class" src=${gancxadeba.img} alt="">
<p class="product-info1">${gancxadeba.agwera}</p>
<p class="product-info">ავტორის სახელი:${gancxadeba.momxmareblisSaxeli}</p>
<p class="product-info">საკონტაქტო ნომერი:${gancxadeba.MomxmareblisNomeri}</p>
<p class="product-info">ადგილმდებარეობა:${gancxadeba.momxmareblisAdgilmdebareoba}</p>
<button class="Button-detalurad">გაიგე მეტი</button>
</div>`;
    petlisthtml.innerHTML += templatgancxadeba;
}





// const gancxadebamasivi = [gancxadebaConst, gancxadebaConst1, gancxadebaConst2]

function yvelagancxadeba(gancxadebamasivi) {

    petlisthtml.innerHTML = "";

    for (let i = 0; i < gancxadebamasivi.length; i++) {
        let element = gancxadebamasivi[i];
        appendgancxadeba(element)

    }

}


// yvelagancxadeba(dataGancxadebebi);
// yvelagancxadeba(localStorageshi);

// yvelagancxadeba(gancxadebamasivi);
// yvelagancxadeba(gancxadebamasiviASArray);
// console.log(appendgancxadeba(element));




const searchButton = document.querySelector(".search-button")
const searchInput = document.querySelector(".navigaciis-serchi")
const searchInputValue = searchInput.value




searchButton.addEventListener('click', () => {
    petlisthtml.innerHTML = '';
    if (searchInput.value === '') {
        yvelagancxadeba(dataGancxadebebi);
        return;
    }
    const shedegi = [];
    for (let b = 0; b < dataGancxadebebi.length; b++) {
        // const element = localStorageshi[b];
        // if (searchInput.value === localStorageshi[b].gancxadebisSaxeli) {
        //     shedegi.push(localStorageshi[b])
        // }

        if (dataGancxadebebi[b].gancxadebisSaxeli.includes(searchInput.value)) {
            shedegi.push(dataGancxadebebi[b])


        }


    }
    yvelagancxadeba(shedegi);

});



let idgancxadebebi = [];

const gancxadebebisID = () => {
    $.ajax({
            method: 'GET',
            url: `http://localhost:3000/statements/`
        })
        .done(function(data) {
            idgancxadebebi = data.id;
            // yvelagancxadeba(data);
            console.log(idgancxadebebi);

        })
}

gancxadebebisID()








// const Button_Washale_Gancxadeba = document.querySelector('.delete_button')
// const Gancxadebashi_delete_div = document.querySelector('.gancxadeba_delete_button_div')
// const gancxadeba_delete_button_x = document.querySelectorall('.gancxadeba_delete_button_i')





// .gancxadeba_delete_button_div - ში css - shi გადააკეთე დისპლეი ფლეხი დისპლეი ნონად
// let d = 0;
// Button_Washale_Gancxadeba.addEventListener('click', () => {
//     d++;


//     if (d % 2) {
//         Gancxadebashi_delete_div.style.display = 'flex'
//             // console.log('block');
//     } else {

//         Gancxadebashi_delete_div.style.display = 'none'
//     }


// });

// let y = 0;
// gancxadeba_delete_button_x.addEventListener('click', () => {
//     y++;


//     if (y % 2) {
//         console.log('1');

//     } else {
//         console.log('2');
//     }


// });












































// const petlisthtml = document.querySelector('.pet-list')

// const appendgancxadeba = (gancxadeba) => {
//     const templatgancxadeba = `  <div class="gancxadeba-div">
// <p class="gancxadebissatauri">${gancxadeba.gancxadebisSaxeli}</p>
// <img class="img-class" src=${gancxadeba.img} alt="">
// <p class="product-info1">${gancxadeba.agwera}</p>
// <p class="product-info">ავტორის სახელი:${gancxadeba.momxmareblisSaxeli}</p>
// <p class="product-info">საკონტაქტო ნომერი:${gancxadeba.MomxmareblisNomeri}</p>
// <p class="product-info">ადგილმდებარეობა:${gancxadeba.momxmareblisAdgilmdebareoba}</p>
// <button class="Button-detalurad">გაიგე მეტი</button>
// </div>`;
//     petlisthtml.innerHTML += templatgancxadeba;
// }





// const gancxadebamasivi = [gancxadebaConst, gancxadebaConst1, gancxadebaConst2]

// function yvelagancxadeba(gancxadebamasivi) {



//     for (let i = 0; i < gancxadebamasivi.length; i++) {
//         const element = gancxadebamasivi[i];
//         appendgancxadeba(element)

//     }

// }


// yvelagancxadeba(gancxadebamasivi);
// // console.log(appendgancxadeba(element));




// const searchButton = document.querySelector(".search-button")
// const searchInput = document.querySelector(".navigaciis-serchi")
// const searchInputValue = searchInput.value




// searchButton.addEventListener('click', () => {
//     petlisthtml.innerHTML = '';
//     if (searchInput.value === '') {
//         yvelagancxadeba(gancxadebamasivi);
//         return;
//     }

//     const shedegi = [];
//     for (let b = 0; b < gancxadebamasivi.length; b++) {
//         // const element = gancxadebamasivi[b];
//         // if (searchInput.value === gancxadebamasivi[b].gancxadebisSaxeli) {
//         //     shedegi.push(gancxadebamasivi[b])
//         // }

//         if (gancxadebamasivi[b].gancxadebisSaxeli.includes(searchInput.value)) {
//             shedegi.push(gancxadebamasivi[b])


//         }


//     }
//     yvelagancxadeba(shedegi);
//     // for (let b = 0; b < gancxadebamasivi.length; b++) {
//     //     // const element = gancxadebamasivi[b];
//     //     // if (searchInput.value === gancxadebamasivi[b].gancxadebisSaxeli) {
//     //     //     shedegi.push(gancxadebamasivi[b])
//     //     // }



//     //     if (searchInput.value !== gancxadebamasivi[b].gancxadebisSaxeli.includes(searchInput.value)) {
//     //         // searchInput.value !== '' &&
//     //         // && searchInput.value !== ''
//     //         alert('arafers ar udris')


//     //     }

//     // }

// });