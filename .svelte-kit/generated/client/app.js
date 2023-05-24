export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14')
];

export const server_loads = [0,2];

export const dictionary = {
		"/": [4],
		"/api/newsletter": [5],
		"/api/posts": [6],
		"/images/[width]x[height]": [7],
		"/login": [~8],
		"/media/[...file]/[width]/[height]": [9],
		"/posts": [10,[2]],
		"/posts/create": [11,[2],[,3]],
		"/posts/[slug]": [~12,[2]],
		"/todos": [~13],
		"/[lang]/about": [14]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';