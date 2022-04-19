export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","images/Arrow.png","images/CSS3D_nobg_cropped.png","images/bullet.png","images/jagged.svg","images/jaggedmobile.svg","images/wave.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		entry: {"file":"start-3f5d23de.js","js":["start-3f5d23de.js","chunks/index-996e7094.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
