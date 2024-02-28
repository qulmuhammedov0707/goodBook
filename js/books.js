const dataTarix = [
    {
        id: 1,
        image: "https://api.kitob.itsm.uz/data/books/cover/1775.jpg",
        name: `Saryuzliklar tarixi`,
        descr: `Kitobda Saryuz qishlog'ining kelib chiqishi tarixi, u yerning o'ziga xos tabiati, mehnatkash aholisi haqida hikoya qilinadi. Har bir inson o'z qishlog'i, mahallasi tarixini yaxshi bilishi zarur. Shu jihatdan juda ko,p ma'lumotlarga ega ushbu kitobni o'qib, o'z yashayotgan xududingiz tarixiga qiziqib qolasiz.., maxsus o'yinlar bilan raqobatlashish mumkin`,
        download : `https://kitob.uz/book/1775/reader`,
        button : `Onlayn o'qish`
    },
    {
        id: 2,
        image: "https://api.kitob.itsm.uz/data/books/cover/1362.jpg",
        name: `Hazrat sohibqiron`,
        descr: `Biz ulkan imkoniyatlar mamlakatida yashaymiz. Bu hol faqat tabiiy omillarga bog'liq bo'lmay, shu zaminda yashab o'tgan allomalarning boy merosi ham bizning bebaho xazinamizdir.`,
        download : `https://kitob.uz/book/1362/reader`,
        button : `Onlayn o'qish`
    },
    {
        id: 3,
        image: "https://api.kitob.itsm.uz/data/books/cover/1365.jpg",
        name: `SULTON JALOLIDDIN MANGUBERDI HAYOTI`,
        descr: ` Shihobiddin Muhammad an-Nasaviy Inson faqat bugungi kun bilangina yashamaydi, uning qalbida ertaning umidi ham bo'y ko'rsatishi tabiiy. Bizlarga o'rnak bo'luvchi, bizlarni ulug'vor ishlarga, yaratuvchiliklarga undovchi ajdodlarimizni yaxshi bilamizmi? Bu mangulik savolga har bir avlod o'zicha javob axtarmog'i aniq. .`,
        download : `https://kitob.uz/book/1365/reader`,
        button : `Onlayn o'qish`
    },
];
const dataJaxonAdabiyoti = [
    {
    id: 4,
    image: "https://api.kitob.itsm.uz/data/books/cover/1213.jpg",
    name: `Choliqushi`,
    descr: `Umumturkiy va jahon adabiyotining barkamol asarlaridan biri bo'lgan "Choliqushi" romani yaratilganiga ham salkam 100 yil bo'lyapti. Zabardast turk adibi Rashod Nuri Guntekin qalamidan yo'g'rilgan ushbu fasohatli asarning taniqli yozuvchi Mirzakalon Ismoiliy tomonidan yaratilgan o'zbekcha tarjimasi ham bir yigit umrini sharaf bilan yashadi. Endilikda mumtoz tarjima obidasining mazkur nashrida avvalgilarini aynan takrorlagan holda birgina "Qushotasi" manzili o'rniga Marmar dengizida mavjud Qushadasi oroli (Qushlar oroli) ning asliyatdagi turkcha nomini tiklash barobarida arzimas uslubiy tuzatishlar kiritishga jazm etdik. Ushbu nashr munis onaxonlarimiz, dilbar va dilobar opa-singillarimiz, umuman o'zbek kitobxlonlariga manzur bo'ladi degan umiddamiz.`,
    download : `https://kitob.uz/book/1213/reader`,
    button : `Onlayn o'qish`
    },
    {
    id: 5,
    image: "https://api.kitob.itsm.uz/data/books/cover/3352.jpg",
    name: `Ellada`,
    descr: `Nodar Dumbadze-Ellada`,
    download : `https://kitob.uz/book/3352/reader`,
    button : `Onlayn o'qish`
    },
    {
    id: 6,
    image: "https://api.kitob.itsm.uz/data/books/cover/3772.jpg",
    name: `Semiz va oriq`,
    descr: `Anton Chexov-Semiz va oriq. `,
    download : `https://kitob.uz/book/3772/reader`,
    button : `Onlayn o'qish`
    },
]
const dataUzbekAdabiyoti = [
    {
    id: 7,
    image: "https://api.kitob.itsm.uz/data/books/cover/3971.jpg",
    name: `Shodivoyning g'aroyib sarguzashtlari`,
    descr: `Otabek Quvvat`,
    download : `https://kitob.uz/book/3971/reader`,
    button : `Onlayn o'qish`
    },
    {
    id: 8,
    image: "https://api.kitob.itsm.uz/data/books/cover/3751.jpg",
    name: `Movarounnahr tongi (Jaxongirni tug'ulishi)`,
    descr: `Nuriddin Ismoilov`,
    download : `https://kitob.uz/book/3751/reader`,
    button : `Onlayn o'qish`
    },
    {
    id: 9,
    image: "https://api.kitob.itsm.uz/data/books/cover/3348.jpg",
    name: `Ulug'bek xazinasi`,
    descr: `Odil Yoqubov-Ulug'bek xazinasi`,
    download : `https://kitob.uz/book/3348/reader`,
    button : `Onlayn o'qish`
    },
]
const templateJ = document.getElementById('templateJaxonAdabiyoti');
const template = document.getElementById('templateTarix');
const templateU = document.getElementById(`templateUzbekAdabiyoti`)
const cardsContainer = document.querySelector('.cards');
const cardsJContainer = document.querySelector('.cardsJ');
const cardsUContainer = document.getElementById(`cardsU`)
dataTarix.forEach ( tarix => {
    const clone = document.importNode(template.content, true);
    clone.querySelector('.tarixImage').src = tarix.image;
    clone.querySelector('.tarixImage').alt = tarix.name;
    clone.querySelector('.tarixName').textContent = tarix.name;
    clone.querySelector('.tarixDescr').textContent = tarix.descr;
    const tarixLink = clone.querySelector('.tarixDownload');
    const link = document.createElement('a');
    link.href = tarix.download;
    const button = document.createElement('button');
    button.className = 'button';
    button.textContent = tarix.button;
    link.appendChild(button);
    tarixLink.appendChild(link);
    cardsContainer.appendChild(clone);
});
dataJaxonAdabiyoti.forEach(jaxonAdabiyoti => {
    const clone = document.importNode(templateJ.content, true);
    clone.querySelector('.jaxonAdabiyotiImage').src = jaxonAdabiyoti.image;
    clone.querySelector('.jaxonAdabiyotiImage').alt = jaxonAdabiyoti.name;
    clone.querySelector('.jaxonAdabiyotiName').textContent = jaxonAdabiyoti.name;
    clone.querySelector('.jaxonAdabiyotiDescr').textContent = jaxonAdabiyoti.descr;
    const jaxonAdabiyotiLink = clone.querySelector('.jaxonAdabiyotiDownload');
    const link = document.createElement('a');
    link.href = jaxonAdabiyoti.download;
    const button = document.createElement('button');
    button.className = 'button';
    button.textContent = jaxonAdabiyoti.button;
    link.appendChild(button);
    jaxonAdabiyotiLink.appendChild(link);
    cardsJContainer.appendChild(clone);
});
dataUzbekAdabiyoti.forEach(uzbekAdabiyoti => {
    const clone = document.importNode(templateU.content, true);
    clone.querySelector('.uzbekAdabiyotiImage').src = uzbekAdabiyoti.image;
    clone.querySelector('.uzbekAdabiyotiImage').alt = uzbekAdabiyoti.name;
    clone.querySelector('.uzbekAdabiyotiName').textContent = uzbekAdabiyoti.name;
    clone.querySelector('.uzbekAdabiyotiDescr').textContent = uzbekAdabiyoti.descr;
    const uzbekAdabiyotiLink = clone.querySelector('.uzbekAdabiyotiDownload');
    const link = document.createElement('a');
    link.href = uzbekAdabiyoti.download;
    const button = document.createElement('button');
    button.className = 'button';
    button.textContent = uzbekAdabiyoti.button;
    link.appendChild(button);
    uzbekAdabiyotiLink.appendChild(link);
    cardsUContainer.appendChild(clone);
});
const tarixCard = document.getElementById(`tarixCard`)
const jaxonAdabiyotiCard = document.getElementById(`jaxonAdabiyotiCard`)
const uzbekAdabiyotiCard = document.getElementById(`uzbekAdabiyoti`)
const clearButton = document.getElementById('clearButton');
const clearButtonJ = document.getElementById(`clearButtonJ`)
const clearButtonU = document.getElementById(`clearButtonU`)
clearButton.addEventListener('click', (e) => {
    e.preventDefault();
    tarixCard.innerHTML = '';
    tarixCard.style.display = 'none';
});
clearButtonJ.addEventListener('click', (e) => {
    e.preventDefault();
    jaxonAdabiyotiCard.innerHTML = '';
    jaxonAdabiyotiCard.style.display = 'none';
});
clearButtonU.addEventListener('click', (e) => {
    e.preventDefault();
    uzbekAdabiyotiCard.innerHTML = '';
    uzbekAdabiyotiCard.style.display = 'none';
});