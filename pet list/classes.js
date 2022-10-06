class gancxadeba {
    constructor(gancxadebisSaxeli, momxmareblisSaxeli, MomxmareblisNomeri, momxmareblisAdgilmdebareoba, agwera, coxevli, fasi, img) {
        //  const gancxadebaConst2 = new gancxadeba('shavi კატა თეთრი ფერის', 'gia', '5522', 'თბილისი', 'კატა  მზრუნველ პატრონს', null, 0, 'https://www.purina.co.uk/sites/g/files/mcldtz2481/files/styles/nppe_breed_selector_500/public/breed_library/cat_bengal.jpg?itok=dWxQ-J-d')
        // const axaliGancxadeba = new gancxadeba(gancxadebisSaxeli.value,momxmareblisSaxeli.value, MomxmareblisNomeri.value,  momxmareblisAdgilmdebareoba.value, agwera.value,cxovelisSuratiURL.value,);

        this.gancxadebisSaxeli = gancxadebisSaxeli;
        this.momxmareblisAdgilmdebareoba = momxmareblisAdgilmdebareoba;
        this.momxmareblisSaxeli = momxmareblisSaxeli;
        this.MomxmareblisNomeri = MomxmareblisNomeri;
        this.agwera = agwera;
        this.fasi = fasi;
        this.coxevli = coxevli;
        this.img = img;

    }
}
class cxovelebii {
    constructor(cxovelebisKategoria, cxovelebisSqesi, cxovelebisferi, cxovelebisAsaki) {
        this.cxovelebisKategoria = cxovelebisKategoria;
        this.cxovelebisferi = cxovelebisferi;
        this.cxovelebisSqesi = cxovelebisSqesi;
        this.cxovelebisAsaki = cxovelebisAsaki;
    }
}

class kata extends cxovelebii {

    constructor(cxovelebisKategoria, cxovelebisSqesi, cxovelebisferi, cxovelebisAsaki, toilet, pasporti, acrilia, sterilizacia, MichveuliSachmeli) {
        super(cxovelebisKategoria, cxovelebisSqesi, cxovelebisferi, cxovelebisAsaki)
        this.toilet = toilet;
        this.pasporti = pasporti;
        this.acrilia = acrilia;
        this.sterilizacia = sterilizacia;
        this.MichveuliSachmeli = MichveuliSachmeli;

    }
}