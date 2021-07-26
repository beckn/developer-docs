const config = {
	"gatsby": {
		"pathPrefix": "/",
		"siteUrl": "https://developers.beckn.org",
		"gaTrackingId": null
	},
	"header": {
		"logo": "",
		"logoLink": "http://developers.beckn.org",
		"title": "Beckn for Developers",
		"githubUrl": "https://github.com/beckn/protocol-specifications",
		"helpUrl": "",
		"tweetText": "",
		"links": [
			{ "text": "beckn home", "link": "https://beckn.org" },
			{ "text": "github", "link": "https://github.com/beckn/protocol-specifications" }
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
            "ReleaseHistory",
			"Core",
			"Core/Transaction Layer Specification",
			"Core/Infrastructure Layer Specification",
			"Mobility"
		],
		"links": [
			{ "text": "Code of sharing", "link": "https://beckn.org/code-of-sharing/" },
		],
		"frontline": false,
		"ignoreIndex": false,
	},
	"siteMetadata": {
		"title": "Beckn for Developers",
		"description": "Documentation for developers of the Beckn Ecosystem",
		"ogImage": null,
		"docsLocation": "https://github.com/beckn/developer-docs/tree/master/content",
		"favicon": "https://beckn.org/wp-content/uploads/2020/04/beckn-marker.png",
		"logo" : ""
	},
};

module.exports = config;
