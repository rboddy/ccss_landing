export { matchers } from './client-matchers.js';

export const components = [
	() => import("../runtime/components/layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/free.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/launch.svelte")
];

export const dictionary = {
	"": [[0, 3], [1]],
	"free": [[0, 2], [1]],
	"launch": [[0, 4], [1]]
};