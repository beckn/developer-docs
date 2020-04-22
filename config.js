const config = {
	"gatsby": {
		"pathPrefix": "/",
		"siteUrl": "https://developers.beckn.org",
		"gaTrackingId": null
	},
	"header": {
		"logo": "https://beckn-branding-public.s3.ap-south-1.amazonaws.com/Beckn-Dot-Slash-Blue.png",
		"logoLink": "https://developers.beckn.org",
		"title": "Beckn for Developers",
		"githubUrl": "https://github.com/beckn/beckn.github.io",
		"helpUrl": "",
		"tweetText": "",
		"apiVersion": "0.5.3",
		"links": [
			{ "text": "", "link": "" }
		],
		"search": {
			"enabled": false,
			"indexName": "DEV_BECKN",
			"algoliaAppId": "2Y9CZOBKNK",
			"algoliaSearchKey": "5c64c21b906ecb2f6ab59b78f119586a",
			"algoliaAdminKey": "4c10dd346708cec47e67cedbb2601eee"
		}
	},
	"sidebar": {
		"forcedNavOrder": [
			"/",
			"/Core",
			"/Beckn",
			"/Mobility",
			"/FinalMileDelivery",
			"/FoodAndBeverage",
		],
		"links": [
			{ "text": "Beckn Official Page", "link": "https://beckn.org" },
		],
		"frontline": true,
		"ignoreIndex": false,
	},
	"siteMetadata": {
		"title": "Beckn for Developers",
		"description": "Documentation for developers of the Beckn Ecosystem",
		"ogImage": null,
		"docsLocation": "https://github.com/beckn/developer-docs/tree/master/content",
		"favicon": "https://beckn-branding-public.s3.ap-south-1.amazonaws.com/Beckn-Dot-Slash-Blue.png"
	},
};

module.exports = config;
