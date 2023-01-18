// File containing the information to be used in areas where there are components that get repeated
// (like the skills section and others)

// Socials icon imports
import github from '$lib/assets/github.svg';
import linkedin from '$lib/assets/linkedin.svg';
import mail from '$lib/assets/mail.svg';

// SKill icon imports
import tailwind from '$lib/assets/skill-icons/tailwindcss.svg';
import cpp from '$lib/assets/skill-icons/cpp.svg';
import html from '$lib/assets/skill-icons/html.svg';
import python from '$lib/assets/skill-icons/python.svg';
import typescript from '$lib/assets/skill-icons/typescript.svg';
import javascript from '$lib/assets/skill-icons/javascript.svg';
import arduino from '$lib/assets/skill-icons/arduino.svg';
import espressif from '$lib/assets/skill-icons/espressif.svg';
import vercel from '$lib/assets/skill-icons/vercel.svg';
import firebase from '$lib/assets/skill-icons/firebase.svg';
import sveltekit from '$lib/assets/skill-icons/sveltekit.svg';

// Project images
import microdash from '$lib/assets/images/microdash.png'
import arduinoCar from '$lib/assets/images/images/arduino-icon.png'
import calculator from '$lib/assets/images/images/calculator.jpeg'
import countdown from '$lib/assets/images/images/countdown.png'

export const navigationLinks = [
    {
        id: 1, 
        name: 'about me', 
        link: '#', 
        section: 'about-me'
    },
    {
        id: 2, 
        name: 'skills', 
        link: '#', 
        section: 'skills'
    },
    {
        id: 3, 
        name: 'experience', 
        link: '#', 
        section: 'experience'
    },
    {
        id: 5, 
        name: 'projects', 
        link: '#', 
        section: 'projects'
    },
    {
        id: 6, 
        name: 'contact me', 
        link: '#', 
        section: 'contact-me'
    },

]

export const socials = [
    {
        id: 1, 
        name: 'GitHub', 
        svg: github, 
        link: 'https://github.com/luiselmuller'
    },
    {
        id: 2, 
        name: 'LinkedIn', 
        svg: linkedin, 
        link: 'https://linkedin.com/in/luiselmuller'
    },
    {
        id: 3, 
        name: 'Email', 
        svg: mail, 
        link: 'mailto:luiselmuller@gmail.com'
    },
]

export const skills = [
    {
        id: 1, 
        name: "TailwindCSS", 
        icon: tailwind, 
        color: "177.05,52.14%,45.88%",
    },
    {
        id: 2, 
        name: "C++", 
        icon: cpp, 
        color: "205.77,100%,30.59%",
    },
    {
        id: 3, 
        name: "HTML5", 
        icon: html, 
        color: "13.02,77.14%,51.96%",
    },
    {
        id: 4, 
        name: "Python", 
        icon: python, 
        color: "207.17,49.53%,41.96%",
    },
    {
        id: 5, 
        name: "Typescript", 
        icon: typescript, 
        color: "204.12,100%,40%",
    },
    {
        id: 6, 
        name: "Javascript",
        icon: javascript, 
        color: "80,3.03%,19.41%",
    },
    {
        id: 7, 
        name: "Arduino", 
        icon: arduino, 
        color: "182.29,100%,30.78%",
    },
    {
        id: 8, 
        name: "Espressif", 
        icon: espressif, 
        color: "2.89,79.57%,53.92%",
    },
    {
        id: 9, 
        name: "Vercel", 
        icon: vercel, 
        color: "0,0%,0%",
    },
    {
        id: 10, 
        name: "Firebase", 
        icon: firebase, 
        color: "45.21,100%,57.84%",
    },
    {
        id: 11, 
        name: "SvelteKit", 
        icon: sveltekit, 
        color: "14.59,100%,50%",
    },
]

export const experience = [
    {
        id: 1,
        workplace: "Oasis Synergistic Technologies", 
        jobTitle: "Agrotechnology Intern", 
        city: "Carolina, Puerto Rico", 
        startDate: "0/0/00", 
        endDate: "0/0/00",
        tasks: ["• task1", "• task2", "• task3"]
    },
    {
        id: 2,
        workplace: "Oasis Synergistic Technologies", 
        jobTitle: "Agrotechnology Intern", 
        city: "Carolina, Puerto Rico", 
        startDate: "0/0/00", 
        endDate: "0/0/00",
        tasks: ["• task1", "• task2", "• task3"]
    },
]

export const education = [
    {
        id: 1,
        school: "Sistema Universitario Ana G. Mendez",
        city: "Gurabo, Puerto Rico",
        degree: "Bachelor's:",
        degreeName: "Computer Engineering",
        graduationDate: "Expected in 2024",
    },
    {
        id: 2,
        school: "Escuela Superior Vocacional Benjamin Harrison",
        city: "Cayey, Puerto Rico",
        degree: "High School Diploma",
        degreeName: "",
        graduationDate: "06/2019",
    }
]

export const projects = [
    {
        id:1,
        title: "Microcontroller Dashboard",
        projectLink: "https://github.com/luiselmuller/uni-project-microcontroller-dashboard",
        imageLink: microdash,
    },
    {
        id:2,
        title: "Flip Countdown Timer",
        projectLink: "https://www.frontendmentor.io/solutions/launch-countdown-timer-QYzC7xOWva",
        imageLink: countdown,
    },
    {
        id:3,
        title: "Calculator With Color Themes",
        projectLink: "https://www.frontendmentor.io/solutions/calculator-app-zgwvjVN7Qv",
        imageLink: calculator,
    },
    {
        id:4,
        title: "Arduino Bluetooth Controlled Car",
        projectLink: "https://github.com/luiselmuller/ArduinoBTControlledCar",
        imageLink: arduinoCar,
    }
]
