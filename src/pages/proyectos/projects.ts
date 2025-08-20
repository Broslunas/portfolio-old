import { getRepositoryDetails } from '@/utils';

export interface Project {
	name: string;
	demoLink: string;
	tags?: string[];
	description?: string;
	postLink?: string;
	demoLinkRel?: string;
	[key: string]: any;
	cover: string;
}

export const projects: Project[] = [
	{
		name: 'Link Shortener',
		description: 'Acorta tus enlaces de forma rápida y sencilla con esta herramienta de acortamiento de enlaces.',
		demoLink: 'https://l.broslunas.com',
		postLink: '/link-shortener',
		tags: ['Astro', 'Javascript', 'Typescript', 'API', 'MongoDB'],
		cover: 'https://cdn.broslunas.com/projects/link-shortener.webp'
	},
	{
		...(await getRepositoryDetails('broslunas/chat-ai')),
		name: 'Chat IA',
		description: 'Aplicación web de chat impulsada por IA, diseñada para interactuar con los usuarios de manera natural y fluida.',
		demoLink: 'https://chat.broslunas.com',
		postLink: '/chat',
		tags: ['Astro', 'React', 'Javascript', 'Typescript', 'IA', 'API', 'MongoDB'],
		cover: 'https://cdn.broslunas.com/projects/chat.webp'
	},
	{
		...(await getRepositoryDetails('broslunas/Spotify-Stats')),
		name: 'Spotify Stats',
		description: 'Plataforma web para ver tus estadísticas de spotify.',
		postLink: '/spotify-stats',
		tags: ['Astro', 'APIs', 'NodeJS', 'Typescript'],
		cover: 'https://cdn.broslunas.com/projects/stats.webp'
	},
	{
		...(await getRepositoryDetails('broslunas/games')),
		name: 'Games',
		description: 'Una colección de juegos interactivos desarrollados para la web.',
		demoLink: 'https://games.broslunas.com',
		postLink: '/games',
		tags: ['Astro', 'Javascript', 'HTML', 'CSS'],
		cover: 'https://cdn.broslunas.com/projects/games.webp'
	},
	{
		...(await getRepositoryDetails('broslunas/clock')),
		name: 'Clock',
		description: 'Aplicación web para crear temporizadores y cronómetros personalizados.',
		demoLink: 'https://clock.broslunas.com',
		postLink: '/clock',
		tags: ['HTML', 'CSS', 'Javascript'],
		cover: 'https://cdn.broslunas.com/projects/clock.webp'
	},
	{
		...(await getRepositoryDetails('broslunas/Calculator')),
		name: 'Calculadora',
		description: 'Calculadora web sencilla para realizar operaciones matemáticas básicas.',
		demoLink: 'https://calc.broslunas.com',
		postLink: '/calc',
		tags: ['HTML', 'CSS', 'Javascript'],
		cover: 'https://cdn.broslunas.com/projects/calc.webp'
	},
	{
		name: 'Videos',
		description: 'Plataforma web para disfrutar de tus series y películas favoritas en un solo lugar.',
		demoLink: 'https://videos.broslunas.com',
		postLink: '/videos',
		tags: ['Astro', 'Markdown', 'Typescript'],
		cover: 'https://cdn.broslunas.com/projects/brl-videos.webp'
	},
	{
		...(await getRepositoryDetails('broslunas/portfolio')),
		name: 'Portfolio',
		description: 'Mi portfolio personal donde presento mis proyectos, habilidades y experiencia profesional.',
		demoLink: 'https://broslunas.com',
		tags: ['Astro', 'Typescript'],
		cover: 'https://cdn.broslunas.com/projects/portfolio.webp'
	}
];
