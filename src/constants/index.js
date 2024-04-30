import project1 from "../assets/projects/ohmyfood.webp";
import project2 from "../assets/projects/sophie-bluel.webp";
import project3 from "../assets/projects/kasa.webp";
import project4 from "../assets/projects/argent-bank.webp";

export const HERO_CONTENT = `Communication claire: Excellentes compétences en communication écrite et verbale pour expliquer des concepts techniques de manière claire et compréhensible aux utilisateurs de tous niveaux de compétence.

Collaboration et travail d'équipe: Capacité à travailler efficacement en équipe, à partager les connaissances et à collaborer avec d'autres membres du département informatique pour résoudre les problèmes complexes.`;

export const ABOUT_TEXT = `J'ai suivi le parcours d'OpenClassrooms pour augmenter mon champ de compétences en informatique. J'ai appris à coder en HTML, CSS, JavaScript, React, Tailwind et bien d'autres technologies.

J'ai aussi eu un parcours en système et réseau informatique. J'ai travaillé en tant que technicien informatique pour une entreprise de services informatiques. Dans ce parcours, j'ai appris à gérer des serveurs, des réseaux, des postes de travail et des périphériques informatiques`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Développeur Frontend",
    company: "Openclassrooms",
    description: `Apprentissage de divers langages de programmation et technologies web, y compris HTML, CSS, JavaScript, React, et Tailwind. Création de projets web pour démontrer les compétences acquises.`,
    technologies: ["Javascript", "React.js", "Tailwind", "Typescript"],
  },
  {
    year: "2022 - 2023",
    role: "Technicien Informatique",
    company: "Cesi",
    description: `Technicien support et administration système Linux et Windows. Gestion de serveurs, réseaux, postes de travail et périphériques informatiques. Installation et configuration de logiciels et matériels informatiques.`,
    technologies: ["Debian", "Windows", "Ubuntu", "CentOS"],
  },
  {
    year: "2021 - 2022",
    role: "Professeur de guitare",
    company: "Auto-entrepreneur",
    description: `Enseignement de la guitare acoustique et électrique à des étudiants de tous âges et niveaux de compétence. Création de programmes d'études personnalisés pour répondre aux besoins individuels des étudiants. Organisation de concerts et de spectacles pour les étudiants.`,
    technologies: ["Guitare", "Musique", "Pédagogie", "Concerts"],
  },
  {
    year: "2020 - 2021",
    role: "Développeur web",
    company: "Afpa",
    description: `Apprentissage des langages de programmation web, y compris HTML, CSS, JavaScript, PHP, et MySQL. Création de sites web dynamiques et interactifs pour des clients locaux. Utilisation de frameworks et bibliothèques web pour accélérer le développement.`,
    technologies: ["Node", "PHP", "Symfony", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "ohmyfood",
    image: project1,
    description:
      "Un site web de livraison de nourriture qui permet aux utilisateurs de commander des repas auprès de leurs restaurants préférés et de se les faire livrer à domicile.",
    technologies: ["HTML", "SCSS"],
    githubLink: "https://github.com/DevLepsy/P4-OhMyFood",
  },
  {
    title: "sophie-bluel",
    image: project2,
    description:
      "J'ai contribué au site portfolio d'une architecte d'intérieur en développant la page de présentation de ses travaux, en créant une page de connexion pour l'administrateur et en concevant une modale d'upload de médias.",
    technologies: ["HTML", "CSS", "JS", "GIT"],
    githubLink: "https://github.com/DevLepsy/FrontEnd",
  },
  {
    title: "kasa",
    image: project3,
    description:
      "Ce projet visait à moderniser le site web de Kasa, une entreprise de location d'appartements en France, en utilisant React pour développer des composants conformes aux maquettes Figma.",
    technologies: ["HTML", "SCSS", "React"],
    githubLink: "https://github.com/DevLepsy/kasa",
  },
  {
    title: "argent-bank",
    image: project4,
    description:
      "Ce projet consistait à travailler en tant que développeur front-end chez Argent Bank pour mettre en place le tableau de bord des utilisateurs d'une nouvelle banque en ligne",
    technologies: ["HTML", "TAILWIND", "REACT", "REDUX"],
    githubLink: "https://github.com/DevLepsy/ArgentBank-website-main",
  },
];

export const CONTACT = {
  email: "henryck.paris@outlook.fr",
};
