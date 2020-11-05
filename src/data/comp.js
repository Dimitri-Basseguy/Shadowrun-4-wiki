/* eslint-disable */
import etaneiAvatar from 'src/assets/images/etanei-avatar.png';
import baranAvatar from 'src/assets/images/baran.png';
import jessAvatar from 'src/assets/images/jess.png';
import khaineAvatar from 'src/assets/images/khaine.png';
import edrianAvatar from 'src/assets/images/edrian.png';
import Combat from 'src/assets/images/comp_combat.png';
import Magic from 'src/assets/images/comp_magic.png';
import Physique from 'src/assets/images/physique.png';

const etaneiImg = etaneiAvatar;
const baranImg = baranAvatar;
const jessImg = jessAvatar;
const khaineImg = khaineAvatar;
const edrianImg = edrianAvatar;

export default [
  {
    id: "comp-1",
    attribut: "Agilité",
    type: Combat,
    specialization: "Carabines, Fusils d'assaut, Mitraillettes, Pistolets-mitrailleurs",
    group: "Armes à feu",
    defausse: "Oui",
    players: [],
    name: "Armes automatiques",
    description: "La compétence Armes automatiques couvre l'utilisation des armes à feu personnelles plus grandes qu'un pistolet, capables de tirer en mode automatique, mais au canon généralement plus court qu'un fusil à canon long."
  },
  {
    id: "comp-2",
    attribut: "Agilité",
    type: Combat,
    specialization: "Bâtons (à deux mains), Marteaux, Ma-traques, Parade",
    group: "Combat rapproché",
    defausse: "Oui",
    players: [],
    name: "Armes contondantes",
    description: "Armes contondantes couvre l'utilisation d'armes de mêlée qui n'ont ni lame, ni tranchant. Cette compétence permet au personnage d'utiliser tout objet contondant un tant soi peu équilibré, de la batte de baseball au démonte-pneu, en passant par le pied de chaise."
  },
  {
    id: "comp-3",
    attribut: "Agilité",
    type: Combat,
    specialization: "non applicable",
    group: "Aucun",
    defausse: "Oui",
    players: [],
    name: "Arme â distance exotique",
    description: "Comme pour Arme de mêlée exotique, Arme à distance exotique doit être prise séparément pout chaque arme que vous souhaitez utiliser. Quelques exemples : lasers, pistolets gyrojets, lance-flammes, armes à feu cyber-implantées."
  },
  {
    id: "comp-4",
    attribut: "Agilité",
    type: Combat,
    specialization: "En chandelle (par ex. grenade), Couteaux de lancer, Directes (par ex. balle de baseball), Shuriken.",
    group: "Aucun",
    defausse: "Oui",
    players: [],
    name: "Armes de jet",
    description: "La compétence Armes de jet couvre l'utilisation de tout objet lancé par le personnage."
  },
  {
    id: "comp-5",
    type: Combat,
    attribut: "Agilité",
    specialization: "Canons d'assaut, Lance-grenades, Lance-roquettes, Missiles guidés, Mitrailleuses.",
    group: "Aucun",
    defausse: "Oui",
    players: [],
    name: "Armes lourdes",
    description: "La compétence Armes lourdes permet à l'utilisateur de manipuler les armes à feu ou de trait plus grosses qu'un fusil d'assaut, notamment les armes de grande taille montées sur trépied, monture à crochet, gyrostabilisateur ou emplacements fixes (mais pas dans ou sur des véhicules)."
  },
  {
    id: "comp-6",
    attribut: "Agilité",
    type: Combat,
    specialization: "non applicable",
    group: "Aucun",
    defausse: "Oui",
    players: [],
    name: "Arme de mêlée exotique",
    description: "La compétence Arme de mêlée exotique doit être prise séparément pour chaque arme que vous souhaitez utiliser. Quelques exemples : sais, armes d'hast, tronçonneuses, armes cyber-implantées à des endroits peu communs (par exemple : éperon de coude, lames de pied...)."
  },
  {
    id: "comp-7",
    attribut: "Agilité",
    type: Combat,
    specialization: "Couteaux, Épées, Haches, Lames cyber-implantées, Parade",
    group: "Combat rapproché",
    defausse: "Oui",
    players: [],
    name: "Armes de trait",
    description: "La compétence Armes tranchantes concerne l'utilisation d'armes de mêlée à lame ou à pointe. Cette compétence permet d'utiliser efficacement couteaux, épées et haches. Elle est aussi utilisée pour les lames cybernétiques implantées dans les mains ou dans les avant-bras mais pas dans les autres parties du corps (voir Armes de mêlée exotiques, p. 94)."
  },
  {
    id: "comp-8",
    attribut: "Réaction",
    type: Combat,
    specialization: "Combat au corps à corps, Combat à Distance",
    group: "Aucun",
    defausse: "Oui",
    players: [],
    name: "Esquive",
    description: "Esquive couvre votre capacité à éviter une attaque dirigée contre vous ou toute autre menace à votre encontre."
  },
  {
    id: "comp-9",
    attribut: "Agilité",
    type: Combat,
    specialization: "Shotguns, Fusils de précision, Fusils de sport",
    group: "Armes à feu",
    defausse: "Oui",
    players: [],
    name: "Fusils",
    description: "Cette compétence couvre l'utilisation de toutes les armes à feu personnelles à canon long, en particulier celles conçues pour être calées contre l'épaule."
  },
  {
    id: "comp-10",
    attribut: "Agilité",
    type: Combat,
    specialization: "Armes de poche, Revolvers, Semi-auto-matiques, Tasers",
    group: "Armes à feu",
    defausse: "Oui",
    players: [],
    name: "Pistolets",
    description: "La compétence Pistolets couvre l'utilisation de tous les types d'armes de poing, notamment les pistolets de poche, les pistolets légers et lourds ainsi que les tasers."
  },
  {
    id: "comp-11",
    attribut: "Intuition",
    type: Magic,
    specialization: "Lecture d'aura, Psychométrie, Signatures astrales, par type d'aura (Métahumains, Esprits, Focus, Runes de garde, etc.)",
    group: "Aucun",
    defausse: "Oui",
    players: [],
    name: "Analyse astrale",
    description: "Analyse astrale permet de dévoiler des informations par la lecture d'auras, les formes astrales et les signatures astrales (voir La perception astrale, p. 183). Seul un personnage disposant de perception astrale (qu'il dispose du trait Magicien ou de l'un des traits Adepte ou Adepte mystique avec le pouvoir d'adepte Perception Astrale) peut choisir cette compétence."
  },
  {
    id: "comp-12",
    attribut: "Magie",
    type: Magic,
    specialization: "par type d'esprit (Esprits de l'air, Esprits du feu, etc.)",
    group: "Conjuration",
    defausse: "Oui",
    players: [],
    name: "Bannissement",
    description: "Les magiciens utilisent la compétence Bannissement pour dissiper les esprits, les éliminant des plans physique et astral (voir Bannissement, p. 180)."
  },
  {
    id: "comp-13",
    attribut: "(Magie)",
    type: Magic,
    specialization: "par type de focus ou d'adversaires. (Es-prits, Arme focus, Magiciens, Runes de garde, etc.)",
    group: "Volonté",
    defausse: "Oui",
    players: [],
    name: "Combat astral",
    description: "La compétence Combat astral est utilisée pour combattre dans l'espace astral, où les techniques normales de combat sont pratiquement sans effet (voir Le combat astral, p. 185). Seul un personnage disposant de perception astrale (qu'il dispose du trait Magicien ou de l'un des traits Adepte ou Adepte mystique avec le pouvoir d'adepte Perception astrale) peut choisir cette compétence."
  },
  {
    id: "comp-14",
    attribut: "Magie",
    type: Magic,
    specialization: "par catégorie de sort (Sorts de combat, Sorts de détection, etc.)",
    group: "Sorcellerie",
    defausse: "Non",
    players: [],
    name: "Contresort",
    description: "Un magicien utilise la compétence Contresort pour annuler des sorts soutenus sur des individus ou des objets ou pour contrer des sorts lancés contre eux ou contre un tiers (voir Contresort, p. 176)."
  },
  {
    id: "comp-15",
    attribut: "Magie",
    type: Magic,
    specialization: "par type d'esprit (Esprits de l'air, Esprits de la terre, etc.)",
    group: "Conjuration",
    defausse: "Non",
    players: [],
    name: "Contrôle d'esprits",
    description: "La compétence Contrôle d'esprits est utilisée pour demander ou exiger des services à long terme à un esprit que le magicien a déjà invoqué (voir Contrôle d'esprits, p. 180)."
  },
  {
    id: "comp-16",
    attribut: "Magie",
    type: Magic,
    specialization: "par type d'esprits (Esprits du feu, Esprits de l'eau, etc.)",
    group: "Conjuration",
    defausse: "Non",
    players: [],
    name: "Invocation",
    description: "Cette compétence est utilisée pour invoquer des esprits et déterminer le nombre de services dus au magicien (voir Invo-cation, p. 179)."
  },
  {
    id: "comp-17",
    attribut: "Magie",
    type: Magic,
    specialization: "par catégorie de sorts (Sorts de sombat, Sorts de détection, etc.)",
    group: "Sorcellerie",
    defausse: "Non",
    players: [],
    name: "Lancement de sorts",
    description: "La compétence de Lancement de sorts couvre le contrôle de l'énergie magique, canalisée sous forme de sorts (voir Lancement de sorts, p. 173)."
  },
  {
    id: "comp-18",
    attribut: "Magie",
    type: Magic,
    specialization: "par catégorie de sorts (Sorts de combat, Sorts de détection, etc.)",
    group: "Sorcellerie",
    defausse: "Non",
    players: [],
    name: "Lancement de sorts rituel",
    description: "La compétence Lancement de sotts rituel est utilisée pour lancer des sorts de manière rituelle (voir Lancement de sorts rituel, p. 175). Dans ces cas-là, Lancement de sorts rituel est utilisé en lieu et place de Lancement de sorts)."
  },
  {
    id: "comp-19",
    attribut: "Force",
    type: Physique,
    specialization: "Course de fond, Milieu naturel, Sprint, Milieu urbain",
    group: "Athlétisme",
    defausse: "Oui",
    players: [],
    name: "Course",
    description: "Course est utilisée pour allonger la distance de course d'un personnage et pour déterminer comment il sait trouver un rythme et mesurer son endurance à la course. Voir Courir, p. 114."
  },
  {
    id: "comp-20",
    attribut: "Intuition",
    type: Physique,
    specialization: "Camouflage, Cosmétique, Théâtral, Tridéo",
    group: "Furtivité",
    defausse: "Oui",
    players: [],
    name: "Déguisement",
    description: "Quand un personnage veut se travestir de quelque manière que ce soit, il se sert de la compétence Déguisement. La compétence est utilisée que le personnage veuille ressembler à quelqu'un d'autre ou se fondre dans le décor. Voir Se déguiser, p. 116."
  },
  {
    id: "comp-21",
    attribut: "Force",
    type: Physique,
    specialization: "Assuré, Libre, Rappel, par type d'environnement (Falaises, Glace, Bâtiments, etc.)",
    group: "Athlétisme",
    defausse: "Oui",
    players: [],
    name: "Escalade",
    description: "Escalade est utilisée pour l'ascension d'obstacles verticaux ou de murs, avec ou sans équipement. Voir Escalader, p. 115."
  },
  {
    id: "comp-22",
    attribut: "Agilité",
    type: Physique,
    specialization: "Prestidigitation, Pickpocket, Vol à l'étalage",
    group: "Furtivité",
    defausse: "Oui",
    players: [],
    name: "Escamotage",
    description: "La compétence Escamotage est faite pour ceux qui ont les mains trop rapides pour qu'on puisse les suivre des yeux, ce qui demande de savoir tromper le spectateur tout en restant précis dans ses mouvements. Cette compétence est employée pour dissimuler de petits objets un peu partout sur et autour du personnage et pour les récupérer sur d'autres sans être repéré."
  },
  {
    id: "comp-23",
    attribut: "Agilité",
    type: Physique,
    specialization: "par type de liens (Bracelets, Corde, Col-son, etc.)",
    group: "Aucun",
    defausse: "Oui",
    players: [],
    name: "Evasion",
    description: "Évasion entre en jeu quand un personnage tente de se libérer de liens ou de menottes sans utiliser la force brute. Voir S'évader, p. 115."
  },
  {
    id: "comp-24",
    attribut: "Intuition",
    type: Physique,
    specialization: "Planques, Semer, Suivre",
    group: "Furtivité",
    defausse: "Oui",
    players: [],
    name: "Filature",
    description: "Filature est employée pour suivre discrètement quelqu'un sans se faire repérer ou au contraire pour s'assurer qu'on n'est pas suivi (voir Rester furtif, p. 116)."
  },
  {
    id: "comp-25",
    attribut: "Agilité",
    type: Physique,
    specialization: "Equilibre, Réception de chute, Danse, Roulades, Saut",
    group: "Athlétisme",
    defausse: "Oui",
    players: [],
    name: "Gymnastique",
    description: "Gymnastique est utilisée pour réaliser des acrobaties, garder l'équilibre, mais aussi sauter, se recroqueviller et effectuer des roulés-boulés. Voir Sauter, p. 116."
  },
  {
    id: "comp-25",
    attribut: "Agilité",
    type: Physique,
    specialization: "Urbaine, en Véhicule, en Milieu naturel, par moyen de détection (Détecteurs de mouvement, de Pres-sion, Thermiques, etc.)",
    group: "Furtivité",
    defausse: "Oui",
    players: [],
    name: "Infiltration",
    description: "Infiltration est la compétence utilisée quand un personnage tente de passer outre des systèmes de sécurité ou d'autres personnages sans se faire détecter."
  },
];
/* eslint-enable */
