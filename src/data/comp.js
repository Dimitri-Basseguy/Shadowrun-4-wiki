/* eslint-disable */
import etaneiAvatar from 'src/assets/images/etanei-avatar.png';
import baranAvatar from 'src/assets/images/baran.png';
import jessAvatar from 'src/assets/images/jess.png';
import khaineAvatar from 'src/assets/images/khaine.png';
import edrianAvatar from 'src/assets/images/edrian.png';

const etaneiImg = etaneiAvatar;
const baranImg = baranAvatar;
const jessImg = jessAvatar;
const khaineImg = khaineAvatar;
const edrianImg = edrianAvatar;


export default [
  {
    id: "comp-1",
    attribut: "Agilité",
    specialization: "Carabines, Fusils d'assaut, Mitraillettes, Pistolets-mitrailleurs",
    group: "Armes à feu",
    defausse: "Oui",
    players: [
      etaneiImg,
      baranImg,
      jessImg,
      khaineImg,
      edrianImg,
    ],
    name: "Armes automatiques",
    description: "La compétence Armes automatiques couvre l'utilisation des armes à feu personnelles plus grandes qu'un pistolet, capables de tirer en mode automatique, mais au canon généralement plus court qu'un fusil à canon long."
  },
  {
    id: "comp-2",
    attribut: "Agilité",
    specialization: "Bâtons (à deux mains), Marteaux, Ma-traques, Parade",
    group: "Combat rapproché",
    defausse: "Oui",
    players: [
      etaneiImg,
      baranImg,
    ],
    name: "Armes contondantes",
    description: "Armes contondantes couvre l'utilisation d'armes de mêlée qui n'ont ni lame, ni tranchant. Cette compétence permet au personnage d'utiliser tout objet contondant un tant soi peu équilibré, de la batte de baseball au démonte-pneu, en passant par le pied de chaise."
  },
  {
    id: "comp-3",
    attribut: "Agilité",
    specialization: "non applicable",
    group: "Aucun",
    defausse: "Oui",
    players: [
      khaineImg,
      baranImg,
      edrianImg,
    ],
    name: "Arme â distance exotique",
    description: "Comme pour Arme de mêlée exotique, Arme à distance exotique doit être prise séparément pout chaque arme que vous souhaitez utiliser. Quelques exemples : lasers, pistolets gyrojets, lance-flammes, armes à feu cyber-implantées."
  },
  {
    id: "comp-4",
    attribut: "Agilité",
    specialization: "En chandelle (par ex. grenade), Couteaux de lancer, Directes (par ex. balle de baseball), Shuriken.",
    group: "Aucun",
    defausse: "Oui",
    players: [
      khaineImg,
      baranImg,
      edrianImg,
    ],
    name: "Armes de jet",
    description: "La compétence Armes de jet couvre l'utilisation de tout objet lancé par le personnage."
  },
  {
    id: "comp-5",
    attribut: "Agilité",
    specialization: "Canons d'assaut, Lance-grenades, Lance-roquettes, Missiles guidés, Mitrailleuses.",
    group: "Aucun",
    defausse: "Oui",
    players: [
      khaineImg,
      baranImg,
      edrianImg,
    ],
    name: "Armes lourdes",
    description: "La compétence Armes lourdes permet à l'utilisateur de manipuler les armes à feu ou de trait plus grosses qu'un fusil d'assaut, notamment les armes de grande taille montées sur trépied, monture à crochet, gyrostabilisateur ou emplacements fixes (mais pas dans ou sur des véhicules)."
  },
];
/* eslint-enable */
