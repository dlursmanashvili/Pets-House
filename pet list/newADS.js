const addbutton = document.querySelector('#addbutton')
const cxovelisSuratiURL = document.querySelector('#cxovelisSuratiURL')

const agwera = document.querySelector('#agwera')
const momxmareblisAdgilmdebareoba = document.querySelector('#momxmareblisAdgilmdebareoba')
const MomxmareblisNomeri = document.querySelector('#MomxmareblisNomeri')
const momxmareblisSaxeli = document.querySelector('#momxmareblisSaxeli')
const gancxadebisSaxeli = document.querySelector('#gancxadebisSaxeli')

// const axaliGancxadeba = new gancxadeba(cxovelisSuratiURL.value, agwera.value, momxmareblisAdgilmdebareoba.value, MomxmareblisNomeri.value, momxmareblisSaxeli.value, gancxadebisSaxeli.value);


// let gancxadebamasivebi;




// if (JSON.parse(localStorage.getItem('gancxadebalocalStorage')) !== null) {
//     gancxadebamasivebi = JSON.parse(localStorage.getItem('gancxadebalocalStorage'))
// } else {
//     gancxadebamasivebi = []
// }

// const gancxadebamasivebi = JSON.parse(localStorage.getItem('gancxadebalocalStorage')) 
addbutton.addEventListener('click', () => {

    const divformid1 = document.querySelector('#divformid');
    //  განცხადების სახელი
    const iamgeErrorIcon1 = document.querySelector('#iamge-error-Icon1')
    const label_gancxadebisSaxeli = document.querySelector('#label_gancxadebisSaxeli')
    const label_gancxadebisSaxeli_icon = document.querySelector('#label_gancxadebisSaxeli_icon')
    if (gancxadebisSaxeli.value === '') {
        gancxadebisSaxeli.style.border = "1px solid green";
        gancxadebisSaxeli.style.opacity = "0.7";
        iamgeErrorIcon1.style.display = 'block';
        label_gancxadebisSaxeli.style.color = "red"
        label_gancxadebisSaxeli_icon.style.display = 'none'
    } else {
        gancxadebisSaxeli.style.border = "1px solid red";
        gancxadebisSaxeli.style.opacity = "0.7";
        iamgeErrorIcon1.style.display = 'none';
        label_gancxadebisSaxeli.style.color = "green"
        label_gancxadebisSaxeli_icon.style.display = 'inline'
    }

    //  მომხმარებლის სახელი
    const iamgeErrorIcon2 = document.querySelector('#iamge-error-Icon2')
    const label_momxmareblisSaxeli = document.querySelector('#label_momxmareblisSaxeli')
    const label_momxmareblisSaxeli_icon = document.querySelector('#label_momxmareblisSaxeli_icon')
    if (momxmareblisSaxeli.value === '') {
        momxmareblisSaxeli.style.border = "1px solid green";
        momxmareblisSaxeli.style.opacity = "0.7";
        iamgeErrorIcon2.style.display = 'block';
        label_momxmareblisSaxeli.style.color = "red"

        label_momxmareblisSaxeli_icon.style.display = 'none'
    } else {
        momxmareblisSaxeli.style.border = "1px solid red";
        momxmareblisSaxeli.style.opacity = "0.7";
        iamgeErrorIcon2.style.display = 'none';
        label_momxmareblisSaxeli.style.color = "green"

        label_momxmareblisSaxeli_icon.style.display = 'inline'
    }

    //  მომხმარებლის ნომერი
    const iamgeErrorIcon3 = document.querySelector('#iamge-error-Icon3')
    const label_MomxmareblisNomeri = document.querySelector('#label_MomxmareblisNomeri')
    const label_MomxmareblisNomeri_icon = document.querySelector('#label_MomxmareblisNomeri_icon')
    if (MomxmareblisNomeri.value === '') {
        MomxmareblisNomeri.style.border = "1px solid green";
        MomxmareblisNomeri.style.opacity = "0.7";
        label_MomxmareblisNomeri.style.color = "red"

        iamgeErrorIcon3.style.display = 'block';

        label_MomxmareblisNomeri_icon.style.display = 'none'
    } else {

        label_MomxmareblisNomeri_icon.style.display = 'inline'
        MomxmareblisNomeri.style.border = "1px solid red";
        MomxmareblisNomeri.style.opacity = "0.7";
        iamgeErrorIcon3.style.display = 'none';
        label_MomxmareblisNomeri.style.color = "green"
    }

    // //მომხმარებლის ადგილმდებარეობა
    const iamgeErrorIcon4 = document.querySelector('#iamge-error-Icon4')
    const label_momxmareblisAdgilmdebareoba = document.querySelector('#label_momxmareblisAdgilmdebareoba')
    const labelmomxmareblisAdgilmdebareobaicon = document.querySelector('#label_momxmareblisAdgilmdebareoba_icon')
    if (momxmareblisAdgilmdebareoba.value === '') {


        labelmomxmareblisAdgilmdebareobaicon.style.display = 'none'
        label_momxmareblisAdgilmdebareoba.style.color = "red"
        momxmareblisAdgilmdebareoba.style.border = "1px solid green";
        momxmareblisAdgilmdebareoba.style.opacity = "0.7";
        iamgeErrorIcon4.style.display = 'block';


    } else {

        labelmomxmareblisAdgilmdebareobaicon.style.display = 'inline'
        label_momxmareblisAdgilmdebareoba.style.color = "green"
        iamgeErrorIcon4.style.display = 'none';
        momxmareblisAdgilmdebareoba.style.border = "1px solid red";
        momxmareblisAdgilmdebareoba.style.opacity = "0.7";
    }

    // //  ცხოველის სურათი URL
    const iamgeErrorIcon = document.querySelector('#iamge-error-Icon')
    const LabelCxovelisSuratiURLText = document.querySelector('#label_cxovelisSuratiURLText')
    const labelCxovelisSuratiURLIcon = document.querySelector('#label_cxovelisSuratiURL_icon')
    if (cxovelisSuratiURL.value === '') {
        divformid1.style.display = 'none';


        labelCxovelisSuratiURLIcon.style.display = 'none';
        LabelCxovelisSuratiURLText.style.color = "red"
        cxovelisSuratiURL.style.opacity = "0.7";
        cxovelisSuratiURL.style.border = "1px solid red";
        iamgeErrorIcon.style.display = 'block';


    } else if (cxovelisSuratiURL.value !== "") {
        divformid1.style.display = 'block';
        divformid1.innerHTML += `<img class="imgcxovelisURL" src=${cxovelisSuratiURL.value} alt="">`;

        labelCxovelisSuratiURLIcon.style.display = 'inline';
        LabelCxovelisSuratiURLText.style.color = "green"

        iamgeErrorIcon.style.display = 'none';
        cxovelisSuratiURL.style.border = "1px solid green";
        cxovelisSuratiURL.style.opacity = "0.7";
    }
    // var gancxadebamasivebi = []

    // let pushmasivi1 = JSON.parse(localStorage.getItem('gancxadebebismasivilocalstorijshi'))
    // // console.log(localStoragearray);
    if (cxovelisSuratiURL.value === '' || momxmareblisAdgilmdebareoba.value === '' || MomxmareblisNomeri.value === '' || momxmareblisSaxeli.value === '' || gancxadebisSaxeli.value === '') {
        console.log('ar dasabmitda');
    } else {
        const axaliGancxadeba = new gancxadeba(gancxadebisSaxeli.value, momxmareblisSaxeli.value, MomxmareblisNomeri.value, momxmareblisAdgilmdebareoba.value, agwera.value,
            null, 0, cxovelisSuratiURL.value);


        //  window.location.replace('index.html');
        addGancxadebebi(axaliGancxadeba);
        //         gancxadebamasivebi.push(axaliGancxadeba)
        //         localStorage.setItem('gancxadebalocalStorage', JSON.stringify(gancxadebamasivebi))
        //  console.log(axaliGancxadeba);





        // const gancxadebamasiviASstring = localStorage.getItem('gancxadebamasivi1');
        // const gancxadebamasiviASArray = JSON.parse(gancxadebamasiviASstring);
        // gancxadebamasiviASArray.push(axaliGancxadeba);
        // localStorage.setItem('gancxadebamasivi1', JSON.stringify(gancxadebamasiviASstring))


        // ancxadebamasivi.push(axaliGancxadeba);
        // pushmasivi1.push(axaliGancxadeba);
        // localStorage.setItem('gancxadebebismasivilocalstorijshi', JSON.stringify(pushmasivi1));
        // gancxadebamasiviASArray.push(axaliGancxadeba)
        // localStorage.setItem('gancxadebamasivi', JSON.stringify(gancxadebamasiviASArray))

        // console.log(gancxadebamasivi);
        // console.log(gancxadebamasiviASArray);
        // console.log(cxovelisSuratiURL.value);
        //მტავარ გვერდზე გადასვლა


    }






});



const addGancxadebebi = (gancxadebebi) => {
        $.ajax({
                method: 'POst',
                url: "http://localhost:3000/statements",
                data: gancxadebebi

            })
            .done(function(data) {
                console.log(data);
                window.location.replace('index.html');

            })
    }
    // const axaliGancxadeba = new gancxadeba(gancxadebisSaxeli.value, momxmareblisSaxeli.value, MomxmareblisNomeri.value, momxmareblisAdgilmdebareoba.value, agwera.value,
    //     null, 0, cxovelisSuratiURL.value);

// console.log(axaliGancxadeba);

// const divformid1 = document.querySelector('#divformid');
// console.log(cxovelisSuratiURL.value);

// const axaliGancxadeba = new gancxadeba(gancxadebisSaxeli.value, momxmareblisSaxeli.value, MomxmareblisNomeri.value, momxmareblisAdgilmdebareoba.value, agwera.value,
//     null, 0, cxovelisSuratiURL.value);

// console.log(axaliGancxadeba);
// const divformid1 = document.querySelector('#divformid');
// console.log(cxovelisSuratiURL.value);


// gancxadebamasivi.push(axaliGancxadeba)
// localStorage.setItem('gancxadebamasivi', JSON.stringify(gancxadebamasivi))

// if (cxovelisSuratiURL.value !== "") {




//     divformid1.style.display = 'block'

//     divformid1.innerHTML += `<img class="imgcxovelisURL" src=${cxovelisSuratiURL.value} alt="">`;
// } else {
//     divformid1.style.display = 'none'
// }

// //  განცხადების სახელი
// const iamgeErrorIcon1 = document.querySelector('#iamge-error-Icon1')
// const label_gancxadebisSaxeli = document.querySelector('#label_gancxadebisSaxeli')
// const label_gancxadebisSaxeli_icon = document.querySelector('#label_gancxadebisSaxeli_icon')
// if (gancxadebisSaxeli.value === '') {
//     gancxadebisSaxeli.style.border = "1px solid green";
//     gancxadebisSaxeli.style.opacity = "0.7";
//     iamgeErrorIcon1.style.display = 'block';
//     label_gancxadebisSaxeli.style.color = "red"
//     label_gancxadebisSaxeli_icon.style.display = 'none'
// } else {
//     gancxadebisSaxeli.style.border = "1px solid red";
//     gancxadebisSaxeli.style.opacity = "0.7";
//     iamgeErrorIcon1.style.display = 'none';
//     label_gancxadebisSaxeli.style.color = "green"
//     label_gancxadebisSaxeli_icon.style.display = 'inline'
// }

// //  მომხმარებლის სახელი
// const iamgeErrorIcon2 = document.querySelector('#iamge-error-Icon2')
// const label_momxmareblisSaxeli = document.querySelector('#label_momxmareblisSaxeli')
// const label_momxmareblisSaxeli_icon = document.querySelector('#label_momxmareblisSaxeli_icon')
// if (momxmareblisSaxeli.value === '') {
//     momxmareblisSaxeli.style.border = "1px solid green";
//     momxmareblisSaxeli.style.opacity = "0.7";
//     iamgeErrorIcon2.style.display = 'block';
//     label_momxmareblisSaxeli.style.color = "red"

//     label_momxmareblisSaxeli_icon.style.display = 'none'
// } else {
//     momxmareblisSaxeli.style.border = "1px solid red";
//     momxmareblisSaxeli.style.opacity = "0.7";
//     iamgeErrorIcon2.style.display = 'none';
//     label_momxmareblisSaxeli.style.color = "green"

//     label_momxmareblisSaxeli_icon.style.display = 'inline'
// }



// //  მომხმარებლის ნომერი
// const iamgeErrorIcon3 = document.querySelector('#iamge-error-Icon3')
// const label_MomxmareblisNomeri = document.querySelector('#label_MomxmareblisNomeri')
// const label_MomxmareblisNomeri_icon = document.querySelector('#label_MomxmareblisNomeri_icon')
// if (MomxmareblisNomeri.value === '') {
//     MomxmareblisNomeri.style.border = "1px solid green";
//     MomxmareblisNomeri.style.opacity = "0.7";
//     label_MomxmareblisNomeri.style.color = "red"

//     iamgeErrorIcon3.style.display = 'block';

//     label_MomxmareblisNomeri_icon.style.display = 'none'
// } else {

//     label_MomxmareblisNomeri_icon.style.display = 'inline'
//     MomxmareblisNomeri.style.border = "1px solid red";
//     MomxmareblisNomeri.style.opacity = "0.7";
//     iamgeErrorIcon3.style.display = 'none';
//     label_MomxmareblisNomeri.style.color = "green"
// }




// //მომხმარებლის ადგილმდებარეობა

// const iamgeErrorIcon4 = document.querySelector('#iamge-error-Icon4')
// const label_momxmareblisAdgilmdebareoba = document.querySelector('#label_momxmareblisAdgilmdebareoba')
// const labelmomxmareblisAdgilmdebareobaicon = document.querySelector('#label_momxmareblisAdgilmdebareoba_icon')
// if (momxmareblisAdgilmdebareoba.value === '') {


//     labelmomxmareblisAdgilmdebareobaicon.style.display = 'none'
//     label_momxmareblisAdgilmdebareoba.style.color = "red"
//     momxmareblisAdgilmdebareoba.style.border = "1px solid green";
//     momxmareblisAdgilmdebareoba.style.opacity = "0.7";
//     iamgeErrorIcon4.style.display = 'block';


// } else {

//     labelmomxmareblisAdgilmdebareobaicon.style.display = 'inline'
//     label_momxmareblisAdgilmdebareoba.style.color = "green"
//     iamgeErrorIcon4.style.display = 'none';
//     momxmareblisAdgilmdebareoba.style.border = "1px solid red";
//     momxmareblisAdgilmdebareoba.style.opacity = "0.7";
// }



// //  ცხოველის სურათი URL
// const iamgeErrorIcon = document.querySelector('#iamge-error-Icon')
// const LabelCxovelisSuratiURLText = document.querySelector('#label_cxovelisSuratiURLText')
// const labelCxovelisSuratiURLIcon = document.querySelector('#label_cxovelisSuratiURL_icon')
// if (cxovelisSuratiURL.value === '') {
//     divformid1.style.display = 'none';


//     labelCxovelisSuratiURLIcon.style.display = 'none';
//     LabelCxovelisSuratiURLText.style.color = "red"
//     cxovelisSuratiURL.style.opacity = "0.7";
//     cxovelisSuratiURL.style.border = "1px solid red";
//     iamgeErrorIcon.style.display = 'block';


// } else if (cxovelisSuratiURL.value !== "") {
//     divformid1.style.display = 'block';
//     divformid1.innerHTML += `<img class="imgcxovelisURL" src=${cxovelisSuratiURL.value} alt="">`;

//     labelCxovelisSuratiURLIcon.style.display = 'inline';
//     LabelCxovelisSuratiURLText.style.color = "green"

//     iamgeErrorIcon.style.display = 'none';
//     cxovelisSuratiURL.style.border = "1px solid green";
//     cxovelisSuratiURL.style.opacity = "0.7";
// }










// divformid.style.display = 'none'











// const appendgancxadeba = (gancxadeba) => {
//     const photoADD = ` <img class="imgcxovelisURL" src="" alt=""> `;
//    divformid.innerHTML += templatgancxadeba;
// } 











// const divformid1 = document.querySelector('#divformid');

// if (cxovelisSuratiURL.value === '' && momxmareblisAdgilmdebareoba.value === '') {



//     if (momxmareblisAdgilmdebareoba.value === '') {


//         labelmomxmareblisAdgilmdebareobaicon.style.display = 'none'
//         label_momxmareblisAdgilmdebareoba.style.color = "red"
//         momxmareblisAdgilmdebareoba.style.border = "1px solid green";
//         momxmareblisAdgilmdebareoba.style.opacity = "0.7";
//         iamgeErrorIcon4.style.display = 'block';


//     } else if (momxmareblisAdgilmdebareoba.value !== '') {

//         labelmomxmareblisAdgilmdebareobaicon.style.display = 'inline'
//         label_momxmareblisAdgilmdebareoba.style.color = "green"
//         iamgeErrorIcon4.style.display = 'none';
//         momxmareblisAdgilmdebareoba.style.border = "1px solid red";
//         momxmareblisAdgilmdebareoba.style.opacity = "0.7";
//     }






//     if (cxovelisSuratiURL.value === '') {
//         divformid1.style.display = 'none';

//         labelCxovelisSuratiURLIcon.style.display = 'none';
//         LabelCxovelisSuratiURLText.style.color = "red"
//         cxovelisSuratiURL.style.opacity = "0.7";
//         cxovelisSuratiURL.style.border = "1px solid red";
//         iamgeErrorIcon.style.display = 'block';

//     } else if (cxovelisSuratiURL.value !== "") {
//         divformid1.style.display = 'block';
//         divformid1.innerHTML += `<img class="imgcxovelisURL" src=${cxovelisSuratiURL.value} alt="">`;

//         labelCxovelisSuratiURLIcon.style.display = 'inline';
//         LabelCxovelisSuratiURLText.style.color = "green"

//         iamgeErrorIcon.style.display = 'none';
//         cxovelisSuratiURL.style.border = "1px solid green";
//         cxovelisSuratiURL.style.opacity = "0.7";
//     }

// } else if (cxovelisSuratiURL.value !== '' || momxmareblisAdgilmdebareoba.value !== '') {







//     if (momxmareblisAdgilmdebareoba.value === '') {


//         labelmomxmareblisAdgilmdebareobaicon.style.display = 'none'
//         label_momxmareblisAdgilmdebareoba.style.color = "red"
//         momxmareblisAdgilmdebareoba.style.border = "1px solid green";
//         momxmareblisAdgilmdebareoba.style.opacity = "0.7";
//         iamgeErrorIcon4.style.display = 'block';


//     } else if (momxmareblisAdgilmdebareoba.value !== '') {

//         labelmomxmareblisAdgilmdebareobaicon.style.display = 'inline'
//         label_momxmareblisAdgilmdebareoba.style.color = "green"
//         iamgeErrorIcon4.style.display = 'none';
//         momxmareblisAdgilmdebareoba.style.border = "1px solid red";
//         momxmareblisAdgilmdebareoba.style.opacity = "0.7";
//     }












//     if (cxovelisSuratiURL.value === '') {
//         divformid1.style.display = 'none';

//         labelCxovelisSuratiURLIcon.style.display = 'none';
//         LabelCxovelisSuratiURLText.style.color = "red"
//         cxovelisSuratiURL.style.opacity = "0.7";
//         cxovelisSuratiURL.style.border = "1px solid red";
//         iamgeErrorIcon.style.display = 'block';

//     } else if (cxovelisSuratiURL.value !== "") {
//         divformid1.style.display = 'block';
//         divformid1.innerHTML += `<img class="imgcxovelisURL" src=${cxovelisSuratiURL.value} alt="">`;

//         labelCxovelisSuratiURLIcon.style.display = 'inline';
//         LabelCxovelisSuratiURLText.style.color = "green"

//         iamgeErrorIcon.style.display = 'none';
//         cxovelisSuratiURL.style.border = "1px solid green";
//         cxovelisSuratiURL.style.opacity = "0.7";
//     }



//     const axaliGancxadeba = new gancxadeba(gancxadebisSaxeli.value, momxmareblisSaxeli.value, MomxmareblisNomeri.value, momxmareblisAdgilmdebareoba.value, agwera.value,
//         null, 0, cxovelisSuratiURL.value);

//     console.log(axaliGancxadeba);

//     console.log(cxovelisSuratiURL.value);

// }























// else {
//     divformid1.style.display = 'none'
// }



// <input id="fileinput" type="file" style="display:none;"/>


// <span id="selected_filename">No file selected</span>


// $(document).ready( function() {
//   $('#falseinput').click(function(){
//     $("#fileinput").click();
//   });
// });
// $('#fileinput').change(function() {
//   $('#selected_filename').text($('#fileinput]')[0].files[0].name);
// });

// $(document).ready( function() {
//       $('#falseinput').click(function(){
//         $("#fileinput").click();
//       });
//     });
//     $('#fileinput').change(function() {

//       $('#selected_filename').text($('#fileinput]')[0].files[0].name);
//     });