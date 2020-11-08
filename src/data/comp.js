/* eslint-disable */
import etaneiAvatar from 'src/assets/images/etanei-avatar.png';
import baranAvatar from 'src/assets/images/baran.png';
import jessAvatar from 'src/assets/images/jess.png';
import khaineAvatar from 'src/assets/images/khaine.png';
import edrianAvatar from 'src/assets/images/edrian.png';
import Combat from 'src/assets/images/comp_combat.png';
import Magic from 'src/assets/images/comp_magic.png';
import Physique from 'src/assets/images/physique.png';
import Resonance from 'src/assets/images/comp_resonance.png';
import Sociale from 'src/assets/images/comp_sociale.png';
import Tech from 'src/assets/images/comp_tech.png';
import Pilotage from 'src/assets/images/comp_pilotage.png';
import Programme from 'src/assets/images/comp_program.png';

export default [
  {
    id: "comp-1",
    attribut: "Agilité",
    type: Combat,
    specialization: "Carabines, Fusils d'assaut, Mitraillettes, Pistolets-mitrailleurs",
    group: "Armes à feu",
    defausse: "Oui",
    players: [
      'etanei',
      'baran',
    ],
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
    players: [
      'etanei',
      'jess',
    ],
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
    players: [
      'etanei',
    ],
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
    players: ['etanei',],
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
    players: ['etanei',],
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
    players: ['etanei',],
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
    players: [
      
    ],
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
    players: ['etanei',],
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
    players: ['etanei',],
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
    players: ['etanei',],
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
    players: ['etanei',],
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
    players: ['etanei',],
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
    players: ['etanei',],
    name: "Gymnastique",
    description: "Gymnastique est utilisée pour réaliser des acrobaties, garder l'équilibre, mais aussi sauter, se recroqueviller et effectuer des roulés-boulés. Voir Sauter, p. 116."
  },
  {
    id: "comp-26",
    attribut: "Agilité",
    type: Physique,
    specialization: "Urbaine, en Véhicule, en Milieu naturel, par moyen de détection (Détecteurs de mouvement, de Pres-sion, Thermiques, etc.)",
    group: "Furtivité",
    defausse: "Oui",
    players: ['etanei',],
    name: "Infiltration",
    description: "Infiltration est la compétence utilisée quand un personnage tente de passer outre des systèmes de sécurité ou d'autres personnages sans se faire détecter."
  },
  {
    id: "comp-27",
    attribut: "Force",
    type: Physique,
    specialization: "Endurance, Sprint",
    group: "Athlétisme",
    defausse: "Oui",
    players: ['etanei',],
    name: "Natation",
    description: "La compétence Natation est utilisée pour accroître la distance qu'un personnage peut parcourir à la nage et à déterminer l'aisance du personnage dans l'eau. Voir Nager, p. 116."
  },
  {
    id: "comp-28",
    attribut: "Intuition",
    type: Physique,
    specialization: "Désert, Forêt, Jungle, Montagne, Milieu polaire, Milieu urbaine, etc.",
    group: "Vie en plein air",
    defausse: "Oui",
    players: ['etanei',],
    name: "Navigation",
    description: "Cette compétence détermine la capacité d'un personnage à trouver son chemin, à lire une carte, concevoir un itinéraire et à s'y tenir sans se perdre. Voir Naviguer, p. 118."
  },
  {
    id: "comp-29",
    attribut: "Constitution",
    type: Physique,
    specialization: "FLALO, Basse altitude, Ouverture automatique",
    group: "non",
    defausse: "Oui",
    players: ['etanei',],
    name: "Parachutisme",
    description: "La compétence Parachutisme est utilisée quand un personnage quitte un avion ou un autre emplacement élevé avec un parachute."
  },
  {
    id: "comp-30",
    attribut: "Intuition",
    type: Physique,
    specialization: "Gustative, Olfactive, Auditive, Tactile, Visuelle",
    group: "non",
    defausse: "Oui",
    players: ['etanei',],
    name: "Perception",
    description: "Perception est utilisée pour déterminer dans quelle mesure un personnage remarque ce qui se passe d'anormal ou d'étrange autour de lui. Voir Percevoir, p. 118."
  },
  {
    id: "comp-31",
    attribut: "Intuition",
    type: Physique,
    specialization: "Désert, Forêt, Jungle, Montaigne, Milieu polaire, Milieu urbain, etc.",
    group: "Vie en Plein Air",
    defausse: "Oui",
    players: ['etanei',],
    name: "Pistage",
    description: "Cette compétence représente la capacité d'un personnage à traquer des humains ou des métacréatures dans la nature. Elle inclut également sa capacité à relever les traces de passage, à suivre une piste ou à trouver des empreintes de gibier. Voir Pister, p. 118."
  },
  {
    id: "comp-32",
    attribut: "Constitution",
    type: Physique,
    specialization: "Appareillage pour respiration liquide, Bouteilles standard, Extraction d'oxygène, Mélange gazeux, Plongée en apnée, par condition (Arctique, en Grotte, Com-merciale, Militaire, etc.)",
    group: "non",
    defausse: "Oui",
    players: ['etanei',],
    name: "Plongée",
    description: "Cette compétence couvre toutes les formes de plongée sous-marine, notamment les techniques de natation et l'utilisation de bouteilles et de matériel de plongée."
  },
  {
    id: "comp-33",
    attribut: "Volonté",
    type: Physique,
    specialization: "Désert, Forêt, Jungle, Montagne, Milieu polaire, Milieu urbain, etc.",
    group: "Vie en plein air",
    defausse: "Oui",
    players: ['etanaei',],
    name: "Survie",
    description: "Cette compétence couvre la capacité d'un personnage à survivre longtemps en milieu sauvage. Elle détermine sa capacité à se servir du matériel de camping et de survie ainsi qu'à dénicher de l'eau, de la nourriture et à fabriquer des abris de fortune, mais reflète aussi sa capacité à s'adapter à des conditions naturelles difficiles. Voir Survivre, p. 119."
  },
  {
    id: "comp-34",
    attribut: "Résonance",
    type: Resonance,
    specialization: "par type de sprites (Données, Machine, etc.)",
    group: "Technomancie",
    defausse: "Non",
    players: [],
    name: "Compilation",
    description: "Cette compétence est utilisée pour créer des sprites et déterminer le nombre de tâches dues au personnage (voir Sprites, p. 236)."
  },
  {
    id: "comp-35",
    attribut: "Résonance",
    type: Resonance,
    specialization: "par type de sprites (Données, Machine, etc.)",
    group: "Technomancie",
    defausse: "Non",
    players: [],
    name: "Décompilation",
    description: "Cette compétence est utilisée pour décompiler des sprites (voir Sprites, p. 236)."
  },
  {
    id: "comp-36",
    attribut: "Résonance",
    type: Resonance,
    specialization: "par type de sprites (Données, Machine, etc.)",
    group: "Technomancie",
    defausse: "Non",
    players: [],
    name: "Inscription",
    description: "Cette compétence est utilisée pour inscrire des sprites pour un service à long terme (voir Sprites, p. 236)."
  },
  {
    id: "comp-37",
    attribut: "(Charisme)",
    type: Sociale,
    specialization: "par catégorie de Compétences actives ou de Connaissances (Combat, Connaissances académiques, Connaissances de la rue, Langues, Magiques, etc.)",
    group: "non",
    defausse: "Oui",
    players: ['etanei',],
    name: "Enseignement",
    description: "La compétence Enseignement permet à un personnage d'enseigner efficacement quelque chose à un autre personnage. Voir Enseigner, p. 120."
  },
  {
    id: "comp-38",
    attribut: "Charisme",
    type: Sociale,
    specialization: "Baratin, Imposture, Séduction",
    group: "Influence",
    defausse: "Oui",
    players: ['etanei',],
    name: "Escroquerie",
    description: "Un personnage qui utilise la compétence Escroquerie maquille la vérité d'une manière ou d'une autre et tente de mettre en confiance ses adversaires. Il peut s'agir d'un mensonge pur et simple, d'une dérobade ou d'un double discours, mais le résultat est toujours le même : réussir à flouer la victime en la trompant par de fausses informations. Les Tests d'Escroquerie sont opposés à l'Intuition + Escroquerie (ou Négociation) de la cible. Voir Utiliser les compétences associées au Charisme."
  },
  {
    id: "comp-39",
    attribut: "Charisme",
    type: Sociale,
    specialization: "selon culture ou sous-culture (Haute so-ciété, Gang, Mafia, Église catholique, Corporations, Médias, Goblin Rock, etc.)",
    group: "Influence",
    defausse: "Oui",
    players: ['etanei',],
    name: "Etiquette",
    description: "La compétence Étiquette permet à un personnage de se mouvoir parmi les membres d'une culture donnée sans commettre d'impair. Cela permet au personnage de s'intégrer, d'apaiser les soupçons et de désamorcer les situations sociales explosives. Cette compétence permet également à un personnage d'éviter que le joueur qui l'incarne ne fasse une gaffe en société. Voir Respecter l'étiquette, p. 121."
  },
  {
    id: "comp-40",
    attribut: "Charisme",
    type: Sociale,
    specialization: "Interrogation, Mentale, Physique, Torture",
    group: "non",
    defausse: "Oui",
    players: ['etanei',],
    name: "Intimidation",
    description: "Cette compétence permet à un personnage de « convaincre » les gens de faire quelque chose qu'ils ne feraient sans doute pas, sous le coup de la peur inspirée par l'attitude ou l'apparence rentre-dedans du personnage. Les Tests d'Intimidation sont opposés à la Volonté + Intimidation de la cible. Voir Utiliser les compétences associées au Charisme pour les modificateurs applicables aux Tests d'Intimidation."
  },
  {
    id: "comp-41",
    attribut: "Charisme",
    type: Sociale,
    specialization: "Test de tripes, Moral, Persuasion, Straté-gie, Tactique",
    group: "Influence",
    defausse: "Oui",
    players: [],
    name: "Leadership",
    description: "La compétence Leadership couvre la capacité d'un personnage à obtenir d'autrui qu'il accomplisse sa volonté en montrant l'exemple et en faisant preuve d'autorité. Elle correspond en partir à la volonté de vouloir résoudre les problèmes mais n'est pas censée se substituer à la réflexion et à une bonne planification de la part des joueurs. Les Tests de Leadership sont opposés au Charisme + Leadership de la cible. Voir Utiliser les compétences associées au Charisme pour les modificateurs applicables au test."
  },
  {
    id: "comp-42",
    attribut: "Charisme",
    type: Sociale,
    specialization: "Diplomatie, Marchandage, Déceler les motivations",
    group: "Influence",
    defausse: "Oui",
    players: ['etanei',],
    name: "Négociation",
    description: "La compétence Négociation couvre la psychologie et les techniques de marchandage utilisées quand un personnage traite avec un autre et tente de sortir vainqueur d'un deal, que ce soit grâce à une négociation minutieusement planifiée ou à du baratin. Le test s'oppose au Charisme + Négociation de la cible. Négociation peut aussi être utilisée pour déterminer si un personnage a remarqué qu'on lui ment. Voir Utiliser les compétences associées au Charisme pour les modificateurs applicables au test."
  },
  {
    id: "comp-43",
    attribut: "Logique",
    type: Tech,
    specialization: "Accessoires d'armes, Armes à feu, Armes lourdes, Armures, Artillerie, Explosifs",
    group: "non",
    defausse: "Oui",
    players: ['etanei',],
    name: "Armurerie",
    description: "Cette compétence est utilisée pour créer ou réparer n'importe quelle arme ou pièce d'armure selon les desseins du per-sonnage. Armurerie peut être utilisée à condition d'avoir les outils et/ou l'équipement utilisés habituellement dans ce genre d'entreprise. Le personnage a toujours besoin de temps, d'outillage et des matériaux pour construire quelque chose à partir de rien. Même un personnage extrêmement compétent ne peut pas accomplir grand-chose sans disposer d'un équipement adapté. Si le personnage tente de construire quelque chose de nouveau, il a également besoin des connaissances théoriques pour concevoir l'objet, à moins que quelqu'un ne lui fournisse les plans détaillés pour la construction. Pour déterminer le seuil de la tâche et savoir si elle réussit, voir Construire et réparer, p. 125."
  },
  {
    id: "comp-44",
    attribut: "Intuition",
    type: Tech,
    defausse: "Oui",
    group: "non",
    specialization: "Guitare, Menuiserie, Peinture, Sculpture, etc",
    players: [],
    name: "Art",
    description: "La compétence Art couvre toute une série de compétences créatives différentes, notamment la peinture, le chant, etc. Un personnage disposant d'une grande culture artistique peut également posséder cette compétence."
  },
  {
    id: "comp-45",
    attribut: "Logique",
    type: Tech,
    defausse: "Oui",
    group: "Piratage",
    specialization: "selon type d'adversaire (Icônes persona, Agents, CI, Icônes persona incarné, Sprites, etc.)",
    players: ['etanei',],
    name: "Cybercombat",
    description: "La compétence Cybercombat est utilisée pour attaquer d'autres icônes dans la Matrice par le biais de programmes d'attaque et d'astuces système (voir Le cybercombat, p. 232)."
  },
  {
    id: "comp-46",
    attribut: "Logique",
    type: Tech,
    defausse: "Non",
    group: "Biotech",
    specialization: "Bioware, Céphaloware, Membres cyber-nétiques, Nanoware, Somatoware",
    players: [],
    name: "Cybertechnologie",
    description: "La compétence Cybertechnologie donne la possibilité de créer et de s'occuper de cybernétique et de bioware. Elle est essentiellement l'apanage des concepteurs, des professionnels du corps médical et des cyberdocs. Cette compétence inclut également les connaissances dans le domaine de la cyber-technologie et la capacité à réparer le cyberware endommagé. Toutefois, les installations et les matériaux appropriés restent nécessaires pour fabriquer du cyberware - voir Construire et réparer, p. 125."
  },
  {
    id: "comp-47",
    attribut: "Logique",
    type: Tech,
    defausse: "Non",
    group: "non",
    specialization: "Commerciaux, Désamorçage, Improvi-sés, Plastic",
    players: ['etanei',],
    name: "Explosifs",
    description: "La compétence Explosifs couvre la préparation, l'évaluation des quantités nécessaires et la mise en place d'explosifs chimiques. Voir Explosifs, p. 317."
  },
  {
    id: "comp-48",
    attribut: "Agilité",
    type: Tech,
    defausse: "Oui",
    group: "non",
    specialization: "Contrefaçon, Falsification de créditubes, Falsification de papiers, Fausses identités, Retouche d'images",
    players: ['etanei',],
    name: "Falsification",
    description: "Les personnes qui veulent dupliquer un document ou un autre objet utilisent la compétence Falsification. La plupart des objets falsifiés sont soit des oeuvres d'art, soit des documents officiels. Voir Falsifier."
  },
  {
    id: "comp-49",
    attribut: "Logique",
    type: Tech,
    defausse: "Non",
    group: "Piratage",
    specialization: "Brouillage, Communications, Cryptage, Opérations de senseurs",
    players: [],
    name: "Guerre électronique",
    description: "Guerre électronique est utilisée pour perturber les communications par divers moyens : brouillage, dégradation de signal ou prise de contrôle totale des systèmes de communications de la cible. La compétence sert également à encoder et à décoder des communications. Un équipement adapté est nécessaire pour utiliser cette compétence correctement."
  },
  {
    id: "comp-50",
    attribut: "Logique",
    type: Tech,
    defausse: "Oui",
    group: "Piratage",
    specialization: "selon programme (Exploitation, Reni-fleur, etc.), selon type d'appareil (Commlink, Surveillance, Médias, etc.)",
    players: ['etanei',],
    name: "Hacking",
    description: "La compétence de Hacking est utilisée pour l'exploitation et le piratage d'ordinateurs et d'appareils électroniques, en particulier les systèmes matriciels et leurs périphériques. Pour plus de détails sur les applications spécifiques du Hacking, voir Le hacking, p. 223."
  },
  {
    id: "comp-51",
    attribut: "Logique",
    type: Tech,
    defausse: "Non",
    group: "Électronique",
    specialization: "selon type d'appareil (Commlinks, Ma-glocks, Senseurs, etc.)",
    players: ['etanei',],
    name: "Hardware",
    description: "Cette compétence couvre la création, la réparation et la manipulation technique d'ordinateurs et d'appareils électro-niques. Pour créer quelque chose, les matériaux et les plans appropriés, ainsi que le temps nécessaire, restent obligatoires. Voir Construire et réparer, p. 125."
  },
  {
    id: "comp-52",
    attribut: "Logique",
    type: Tech,
    defausse: "Oui",
    group: "Électronique",
    specialization: "selon programme (Analyse, Édition, etc.), selon type d'appareil (Commlink, Surveillance, Médias, etc.)",
    players: ['etanei',],
    name: "Informatique",
    description: "La compétence Informatique couvre l'utilisation et la compréhension des ordinateurs et des appareils électroniques - autrement dit en 2070, tout ce qui est alimenté électrique-ment. Cette compétence ne concerne pas l'exploitation ou la subversion de tels systèmes, couverts par les compétences Hacking (pour le software) ou Hardware."
  },
  {
    id: "comp-53",
    attribut: "Logique",
    type: Tech,
    defausse: "Oui",
    group: "Mécanique",
    specialization: "Aérospatiale, Voilure fixe, Ballons (diri-geables), Rotors, Voilure orientable, Poussée vectorielle",
    players: [],
    name: "Mécanique aéronautique",
    description: "Les personnages disposant de cette compétence peuvent réparer et entretenir des aéronefs. Les outils adaptés et du temps restent nécessaires. Voir Construire et réparer, p. 125."
  },
  {
    id: "comp-54",
    attribut: "Logique",
    type: Tech,
    defausse: "Non",
    group: "Mécanique",
    specialization: "Anthropomorphes, Véhicules à chenilles, Glisseurs, Véhicules à roues",
    players: [],
    name: "Mécanique automobile",
    description: "La compétence Mécanique automobile est utilisée pour réparer et entretenir les véhicules terrestres de toutes sortes. L'outillage approprié et le temps imparti restent nécessaires pour y arriver. Voir Construire et réparer, p. 125."
  },
  {
    id: "comp-55",
    attribut: "Logique",
    type: Tech,
    defausse: "Non",
    group: "Mécanique",
    specialization: "Bateaux à moteur, Navires, Sous-marins, Voiliers",
    players: [],
    name: "Mécanique nautique",
    description: "La compétence Mécanique nautique est utilisée pour réparer et entretenir des véhicules aquatiques de toutes sortes. Il reste toutefois nécessaire de disposer de temps et de l'outillage approprié. Voir Construire et réparer, p. 125."
  },
  {
    id: "comp-56",
    attribut: "Logique",
    type: Tech,
    defausse: "Non",
    group: "Biotech",
    specialization: "Chirurgie, esthétique, Soins, extensifs, Chirurgie implantatoire, Soins magiques, Culture d'organes, Chirurgie traumatologique",
    players: [],
    name: "Médecine",
    description: "Médecine est la compétence utilisée lorsqu'on tente d'aider un personnage sur le plan médical, au-delà des simples premiers soins. Elle inclut le traitement des maladies et des blessures. Médecine ne touche à la cybernétique que lorsque celle-ci est implantée ou retirée. Pour plus d'informations, voir Guérison, p. 244."
  },
  {
    id: "comp-57",
    attribut: "Logique",
    type: Tech,
    defausse: "Oui",
    group: "Biotech",
    specialization: "selon type de traitement (Brûlures chi-miques, Blessures de combat, Blessures sportives, Chocs élec-triques, etc.)",
    players: ['etanei',],
    name: "Premiers soins",
    description: "Premiers soins couvre les techniques médicales au sens pratique du terme, celles qui sont utilisées par un infirmier plutôt que par un médecin. Cette compétence ne fournit que peu de connaissances dans le domaine de la cybernétique et de son fonctionnement et ne peut pas être utilisée pour réparer des implants."
  },
  {
    id: "comp-58",
    attribut: "Logique",
    type: Tech,
    defausse: "Oui",
    group: "Électronique",
    specialization: "par source (Paradis numériques, Archives publiques, Archives d'actualités, Archives financières, etc.), par type de données (Corporatistes, Célébrités, Rumeurs Ur-baines, Contenu tridéo, etc.)",
    players: ['etanei',],
    name: "Recherche de données",
    description: "Cette compétence représente les capacités de recherche du personnage, sa capacité à utiliser des moteurs de recherche, des bases de données et d'autres outils pour retrouver l'information en ligne ou sur les disques durs d'un ordinateur. Recherche de données inclut la capacité d'un personnage à définir ses critères de recherche ainsi que sa connaissance d'archives et de ressources peu connues. Voir Rechercher des données, p. 222."
  },
  {
    id: "comp-59",
    attribut: "Agilité",
    type: Tech,
    defausse: "Oui",
    group: "non",
    specialization: "par type de serrures (à Combinaison, à Cylindre, à Goupille, Coffres, etc.)",
    players: ['etanei',],
    name: "Serrurerie",
    description: "La Serrurerie est l'art de manipuler, d'ouvrir et de réparer les serrures mécaniques. Voir Forcer des serrures, p. 125."
  },
  {
    id: "comp-60",
    attribut: "Logique",
    type: Tech,
    defausse: "Non",
    group: "Électronique",
    specialization: "Utilitaires spécifiques (à préciser)",
    players: ['etanei',],
    name: "Software",
    description: "La compétence Software entre en jeu quand le personnage écrit des utilitaires pour s'en servir dans la Matrice (voir Développer vos propres programmes, p. 242)."
  },
  {
    id: "comp-61",
    attribut: "Réaction",
    type: Pilotage,
    defausse: "Non",
    group: "non",
    specialization: "Bipode, Quadripode, Opération à distance",
    players: [
      'etanei',
    ],
    name: "Anthropomorphe",
    description: "Cette compétence est employée pour piloter les véhicules utilisant des articulations mécaniques (contrôle à distance compris)."
  },
  {
    id: "comp-62",
    attribut: "Réaction",
    type: Pilotage,
    defausse: "Oui",
    group: "non",
    specialization: "Espace profond, Lancement d'appareil, Opération à distance, Semi-ballistiques, Suborbitaux",
    players: [],
    name: "Appareils spatiaux",
    description: "Cette compétence est utilisée pour piloter les appareils suborbitaux propulsés par des réacteurs et tous les appareils extra-atmosphériques (contrôle à distance compris)."
  },
  {
    id: "comp-63",
    attribut: "Réaction",
    type: Pilotage,
    defausse: "Non",
    group: "non",
    specialization: "Voilure fixe, Plus léger que l'air, Opération à distance, Rotors, Poussée vectorielle, Voilure orientable",
    players: [
      'etanei',
    ],
    name: "Appareils valants",
    description: "Appareils volants couvre le pilotage de tous les appareils atmosphériques (contrôle à distance compris)."
  },
  {
    id: "comp-64",
    attribut: "Agilité",
    type: Pilotage,
    defausse: "Oui",
    group: "non",
    specialization: "Balistique, Canons, Armes à énergie, Missiles guidés, Roquettes",
    players: ['etanei',],
    name: "Armes de véhicules",
    description: "La compétence Armes de véhicules couvre l'utilisation d'armes montées sur véhicules (montures, crochets ou tourel-les). Cette compétence couvre l'artillerie manuelle ou opérée par senseurs."
  },
  {
    id: "comp-65",
    attribut: "Réaction",
    type: Pilotage,
    defausse: "Non",
    group: "non",
    specialization: "Bateaux à moteur, Navires, Opération à distance, Sous-marins, Voiliers",
    players: ['etanei',],
    name: "Véhicules aquatiques",
    description: "Cette compétence est utilisée pour piloter tous les types de véhicules aquatiques (contrôle à distance compris)."
  },
  {
    id: "comp-66",
    attribut: "Agilité",
    type: Pilotage,
    defausse: "Non",
    group: "non",
    specialization: "N/A",
    players: [],
    name: "Véhicule exotique",
    description: "Cette compétence couvre l'utilisation de véhicules exotiques tels que les traîneaux sous-marins, les ascenseurs per-sonnels, les jetpacks, les ballons à air chaud, etc. Chaque fois qu'une telle compétence est choisie, le véhicule exotique spécifique auquel elle s'applique doit être indiqué. Cette compétence est utilisée à chaque fois que le personnage pilote ce véhicule, directement ou à distance."
  },
  {
    id: "comp-67",
    attribut: "Agilité",
    type: Pilotage,
    defausse: "Non",
    group: "non",
    specialization: "Aéroglisseurs, Véhicules à chenilles, Mo-tos, Opération à distance, Véhicules à roues",
    players: ['etanei',],
    name: "Véhicules terrestres",
    description: "Cette compétence est utilisée pour piloter tous les types de véhicules terrestres (hors motorisation par articulations méca-nisées, contrôle à distance compris)."
  },
  // PROGRAMMES
  {
    id: "prog-1",
    attribut: "Programmes courants",
    type: Programme,
    defausse: "",
    group: "",
    specialization: "",
    players: ['etanei',],
    name: "Commande",
    description: "Les programmes Commande permettent à l'utilisateur de contrôler un appareil via la Matrice, qu'il s'agisse d'une caméra de surveillance, d'un drone (p. 240), d'un agent (p. 229) ou d'un système électronique."
  },
  {
    id: "prog-2",
    attribut: "Programmes courants",
    type: Programme,
    defausse: "",
    group: "Guerre électronique",
    specialization: "",
    players: ['etanei',],
    name: "Cryptage",
    description: "Les programmes de Cryptage utilisent divers systèmes et méthodes de chiffrement cryptographiques pour sécuriser les fichiers, les nœuds d'accès et les communications entre les nœuds. On accède aux objets cryptés avec le mot de passe approprié (voir Les accès autorisés, p. 217) ; sinon ces objets n'affichent que du charabia. Utilisez les programmes de Cryptage pour les actions de Cryptage (p. 228). Plusieurs fichiers peuvent être archivés et cryptés ensemble."
  },
  {
    id: "prog-3",
    attribut: "Programmes courants",
    type: Programme,
    defausse: "",
    group: "Guerre électronique",
    specialization: "",
    players: ['etanei',],
    name: "Scan",
    description: "Les programmes de Scan vous permettent de localiser des réseaux sans fil. Tout OS d'appareil sans fil a un programme Scan intégré d'indice 1, mais les utilisateurs souhaitant un meilleur contrôle d'accès peuvent le mettre à jour avec un meilleur utilitaire. Scan est utilisé pour Détecter les nœuds sans fil (p. 227)."
  },
  {
    id: "prog-4",
    attribut: "Programmes de hacking",
    type: Programme,
    defausse: "",
    group: "",
    specialization: "",
    players: ['etanei',],
    name: "CCME",
    description: "Les Contre-contre-mesures électroniques (CCME) filtrent les signaux de brouillage qui tentent de perturber une connexion sans fil. La CCME ajoute son indice à l'indice de Signal d'un appareil protégé dans la défense contre le brouillage (voir p. 227)."
  },
  {
    id: "prog-5",
    attribut: "Programmes de hacking",
    type: Programme,
    defausse: "",
    group: "",
    specialization: "",
    players: ['etanei',],
    name: "Furtivité",
    description: "Furtivité est un programme pour hacker intelligent qui tente de rendre le hacker aussi « invisible » que possible des autres traitements du système en camouflant ses activités, en effaçant les traces systèmes et en imitant le trafic autorisé. Fur-tivité dissimule le hacker du regard vigilant du Firewall pendant qu'il pénètre illicitement dans un système (voir Entrer par effraction, p. 223). Furtivité protège également le hacker contre les actions indiscrètes d'Analyse (p. 228) et les tentatives de traçage (p. 221)."
  },
];
/* eslint-enable */
