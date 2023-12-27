export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store",".nojekyll","120275647_1367693733436663_8663752487400813982_n.jpg","about.json","favicon.png","images/.DS_Store","images/art_for_charity/closeup.png","images/art_for_charity/line.png","images/art_for_charity/overlayed.png","images/art_for_charity/scale.png","images/art_for_charity/tiny_people.png","images/sketchbook_drawings/1.png","images/sketchbook_drawings/2.png","images/sketchbook_drawings/3.png","images/sketchbook_drawings/4.png","images/sketchbook_drawings/5.png","images/work/brothers.png","images/work/chair_1_butthistory.png","images/work/chair_2.png","images/work/flogging_a_dead_horse.png","images/work/fungus_refugium.png","images/work/in_the_lake.png","images/work/olgas_chair.png","images/work/selfportrait.png","images/work/siblings.png","images/work/still_life_with_fetus.png","images/work/sudden_arrythmic_death_syndrom.png","images/work/the_man_in_the_moon.png","images/work/the_pond.png","images/work/the_seashell_pond.png","images.json","underpants.jpg"]),
	mimeTypes: {".jpg":"image/jpeg",".json":"application/json",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.DFpPdt8Q.js","app":"_app/immutable/entry/app.CzPfO4pH.js","imports":["_app/immutable/entry/start.DFpPdt8Q.js","_app/immutable/chunks/scheduler.GJjAvMcU.js","_app/immutable/chunks/singletons.OIFzo_el.js","_app/immutable/entry/app.CzPfO4pH.js","_app/immutable/chunks/scheduler.GJjAvMcU.js","_app/immutable/chunks/index.-quLlP0Y.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
