// File containing the information to be used in areas where there are components that repeat a lot
// (like the skills section)

// Navigation links

import github from '$lib/assets/github.svg';
import linkedin from '$lib/assets/linkedin.svg';
import mail from '$lib/assets/mail.svg';

export const navigationLinks = [
    {id: 1, name: 'about me', link: '#'},
    {id: 2, name: 'skills', link: '#'},
    {id: 3, name: 'experience', link: '#'},
    {id: 4, name: 'projects', link: '#'},
    {id: 5, name: 'contact me', link: '#'},
]

export const socials = [
    {id: 1, name: 'GitHub', svg: github, link: 'https://github.com/luiselmuller'},
    {id: 2, name: 'LinkedIn', svg: linkedin, link: 'https://linkedin.com/in/luiselmuller'},
    {id: 3, name: 'Email', svg: mail, link: 'mailto:luiselmuller@gmail.com'},
]