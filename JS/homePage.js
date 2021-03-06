const menuButton = document.querySelector('.menu-btn');
const navMobile = document.querySelector('.nav-mobile');
const btnCloseNav = document.querySelector('.button-close');
const linkAbout = document.querySelector('.link-aboutPage');
const linkProgram = document.querySelector('.link-program');
const linkJoin = document.querySelector('.link-join');
const linkSponsor = document.querySelector('.link-sponsor');
const speakerContainerCard = document.querySelector('.speaker-container-card');
const speakerBtn = document.querySelector('.speakers-btn');
const mediaqueryList = window.matchMedia('(max-width: 768px)');

menuButton.addEventListener('click', () => {
  menuButton.classList.add('hidden');
  navMobile.classList.remove('hidden');
});

btnCloseNav.addEventListener('click', () => {
  menuButton.classList.remove('hidden');
  navMobile.classList.add('hidden');
});

linkAbout.addEventListener('click', () => {
  navMobile.classList.add('hidden');
  menuButton.classList.remove('hidden');
});

linkProgram.addEventListener('click', () => {
  navMobile.classList.add('hidden');
  menuButton.classList.remove('hidden');
});

linkJoin.addEventListener('click', () => {
  navMobile.classList.add('hidden');
  menuButton.classList.remove('hidden');
});

linkSponsor.addEventListener('click', () => {
  navMobile.classList.add('hidden');
  menuButton.classList.remove('hidden');
});

const dataSpeakers = [
  {
    id: 0,
    url: 'assets/speaker_01.png',
    name: 'Yochai Benkler',
    position:
        'Beykman Professor of Enterpreanurial Legal Studies of Harvard Law School',
    description:
           'Benlder studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
  },
  {
    id: 1,
    url: 'assets/speaker_06.png',
    name: 'SohYeong Noh',
    position: 'Director of Art Centre Nabl and a board member of CC Korea',
    description:
           'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },
  {
    id: 2,
    url: 'assets/speaker_02.png',
    name: 'Lila Tretikov',
    position: 'Executive Director of the Wikimedia Foundation',
    description:
           'Lila Tretikov is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia Wikipedia is freely available in 290 languag es and used by nearly half a billion people around the world every month',
  },
  {
    id: 3,
    url: 'assets/speaker_03.png',
    name: 'Kilnam Chon',
    position:
            'Beykman Professor of Enterpreanurial Legal Studies of Harvard Law School',
    description:
            "Kinam Chon helped bring the Internet to Asia and is an outspoken advocate for the open web and digital com mons. In 2012, he was inducted into the inaugural class of the Internet Society's (SOC) Internet Hall of Fame.",
  },
  {
    id: 4,
    url: 'assets/speaker_04.png',
    name: 'Julia Leda',
    position: 'President of Young Pirates of Europe',
    description:
           "European ingetration, political democracy and participa tion of youth through online as her major condern, Reda's report outlining potential changes to EU copyright law was approved by the Parliament in July",
  },
  {
    id: 5,
    url: 'assets/speaker_05.png',
    name: 'Ryan Merkley',
    position: 'CEO of Creative Commons, ex COO of the Mozilla Foundation',
    description:
         'Ryan had been leading open-source projects at the Mozilla Foundation such as the open source movement',
  },
];

const cardSpeaker = (index) => `
  <div class="speaker-card-img">
      <img src=${dataSpeakers[index].url} alt="image of speaker ${dataSpeakers[index].name}">
  </div>
  <div class="speaker-card-content">
      <div class="speaker-card-name">
          <p>
              ${dataSpeakers[index].name}
          </p>
      </div>
      <div class="speaker-card-position">
          <p>
              ${dataSpeakers[index].position}
          </p>
      </div>
      <div class="speaker-card-description">
          <p>${dataSpeakers[index].description}</p>
      </div>
  </div>
  `;

const deployTwoSpeakers = () => {
  speakerContainerCard.innerHTML = ' ';
  for (let i = 0; i < 2; i += 1) {
    const speaker = document.createElement('div');
    speaker.classList.add('speaker-card');
    speaker.innerHTML = cardSpeaker(i);
    speakerContainerCard.appendChild(speaker);
  }
};

const deployAllSpeakers = () => {
  speakerContainerCard.innerHTML = ' ';
  for (let i = 0; i < dataSpeakers.length; i += 1) {
    const speaker = document.createElement('div');
    speaker.classList.add('speaker-card');
    speaker.innerHTML = cardSpeaker(i);
    speakerContainerCard.appendChild(speaker);
  }
};

speakerBtn.addEventListener('click', () => {
  const regex = /MORE/;
  const flag = regex.test(speakerBtn.textContent);
  if (flag) {
    speakerBtn.innerHTML = 'LESS <i class="fas fa-chevron-up"></i>';
    deployAllSpeakers();
  } else {
    speakerBtn.innerHTML = 'MORE <i class="fas fa-chevron-down"></i>';
    deployTwoSpeakers();
  }
});

const screenTest = (e) => {
  if (e.matches) {
    deployTwoSpeakers();
  } else {
    deployAllSpeakers();
  }
};

screenTest(mediaqueryList);

mediaqueryList.addListener(screenTest);