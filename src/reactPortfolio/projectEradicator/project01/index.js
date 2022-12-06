import {AiOutlineLinkedin,AiFillGithub,AiOutlineInstagram,AiOutlineTwitter} from 'react-icons/ai';
import project1 from './components/images/project1.png';
import project2 from './components/images/project2.png';
export const navInfo = [
    {
        num: 1,
        nav: "About"
    },
    {
        num: 2,
        nav: "Experience"
    },
    {
        num:  3,
        nav: "Work"
    },
    {
        num: 4,
        nav: "Contact"
    }
]

const experience = [
    {
        company: 'Microsoft',
        title: 'Junior Front-end Developer',
        duration: "2020-2021",
        desc:[
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, provident.",
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quo ipsum minus laboriosam, laborum eius.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem modi enim ab sapiente praesentium corrupti nobis mollitia nam consectetur aspernatur.'
            
        ]
    },
    {
        company: 'Google',
        title: 'Mid Level Front-end Developer',
        duration: "2020-2021",
        desc:[
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, provident.",
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quo ipsum minus laboriosam, laborum eius.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem modi enim ab sapiente praesentium corrupti nobis mollitia nam consectetur aspernatur.'
            
        ]
    },
    {
        company: 'Apple',
        title: 'Senior Front-end Developer',
        duration: "2020-2021",
        desc:[
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, provident.",
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quo ipsum minus laboriosam, laborum eius.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem modi enim ab sapiente praesentium corrupti nobis mollitia nam consectetur aspernatur.'
            
        ]
    }
]

const project = [
    {
        title: "Ecommerce",
        image: project1,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos magni unde aspernatur cum ea, doloribus ut? Sint illo consequatur ad praesentium perspiciatis qui dolor distinctio? Saepe sed vel sequi sapiente reiciendis labore aut dicta necessitatibus, minus suscipit repellendus quod ipsa!',
        skills: ['React','Javascript','HTML5','SCSS'],
        github: '/',
        link: ""
    },
    {
        title: "Spotify",
        image: project2,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos magni unde aspernatur cum ea, doloribus ut? Sint illo consequatur ad praesentium perspiciatis qui dolor distinctio? Saepe sed vel sequi sapiente reiciendis labore aut dicta necessitatibus, minus suscipit repellendus quod ipsa!',
        skills: ['React','Javascript','HTML5','SCSS'],
        github: '/',
        link: ""
    }
]

export const constant = {
    experiences: experience,
    projects: project
}

export const icons = [
    {
        icon: <AiOutlineLinkedin/>,
        link: "https://www.linkedin.com/"
    },
    {
        icon: <AiFillGithub/>,
        link: "https://github.com/"
    },
    {
        icon: <AiOutlineInstagram/>,
        link: "https://www.instagram.com/"
    },
    {
        icon: <AiOutlineTwitter/>,
        link: 'https://twitter.com/'
    }
]
