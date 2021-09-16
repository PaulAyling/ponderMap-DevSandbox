const themeDefault = {
	//section with title (includes new hierachy)
	header: {
		container: 'rounded bg-red-500 text-2xl text-gray-200 rounded text-center font-bold',
		innerText: 'p-1.5',
	},
	//Group Hierachy (Chapter)
	document: {
		container: 'container-flex-row',
		innerText: 'chapter-text"',
	},
	//(Page)
	collection: {
		container:
			'container-flex-column-card margin-left-xx red lighten-2 padding-3-px width-33pct',
		innerText: 'text-collection',
	},
	//Paragraph
	cards: {
		container:
			'container-flex-column-card margin-left-xx red lighten-2 padding-3-px width-33pct',
		textContainer: 'red lighten-2',
		innerText: 'chapter-text"',
	},
	//Item
	card: {
		container:
			'container-flex-column-card margin-left-xx red lighten-2 padding-3-px width-33pct',
		textContainer: 'red lighten-2',
		innerText: 'chapter-text"',
	},
	//section with notes & embed
	Footer: {
		container: 'container-flex-column',
		innerText: 'chapter-text"',
	},
};
module.exports = themeDefault;
