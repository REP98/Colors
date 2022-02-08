const colors = {
	"white": 		"#FFF",
	"black": 		"#000",
	"red": 			"#F44336",
	"pink":  		"#E91E63",
	"magenta":		"#FF00DC",
	"purple": 		"#9C27B0",
	"deep-purple":	"#673ab7",
	"rose":    "#e91e63",
	"indigo":		"#3f51b5",
	"blue":			"#1a4cd6",
	"light-blue": 	"#03a9f4",
	"cyan": 			"#00bcd4",
	"teal": 			"#009688",
	"green": 		"#3bb650",
	"light-green": 	"#8bc34a",
	"lime": 			"#cddc39",
	"green-yellow": 	"#B8FF2F",
	"yellow": 		"#ffeb3b",
	"yellowk":		"#f3ec7a",
	"amber": 		"#ffc107",
	"orange": 		"#ff9800",
	"deep-orange": 	"#ff5722",
	"brown": 		"#795548",
	"blue-grey":		"#607d8b",
	"grey":			"#9e9e9e",
	"gray":			"#E5E5E5",
	"darken": 		"#232732",
	"nickel": 		"#727c7b",
	"gray-dark": 	"#343a40",
	"transparent":	"transparent",
}
const theme = [
	"primary",
	"secondary",
	"success",
	"info",
	"warning",
	"danger",
	"light",
	"dark",
	"valid",
	"invalid"
]

const brand = {
	"adobe": "#ff0000",
		"adobe-1": "#ff0000",
		"adobe-2": "#fbb034",
		"adobe-3": "#ffdd00",
		"adobe-4": "#c1d82f",
		"adobe-5": "#00a4e4",
		"adobe-6": "#8a7967",
		"adobe-7": "#6a737b",
		"algolia": "#050f2c",
		"algolia-1": "#050f2c",
		"algolia-2": "#003666",
		"algolia-3": "#00aeff",
		"algolia-4": "#3369e7",
		"algolia-5": "#8e43e7",
		"algolia-6": "#b84592",
		"algolia-7": "#ff4f81",
		"algolia-8": "#ff6c5f",
		"algolia-9": "#ffc168",
		"algolia-10": "#2dde98",
		"algolia-11": "#1cc7d0",
		"amazon": "#ff9900",
		"amazon-1": "#ff9900",
		"amazon-2": "#146eb4",
		"android": "#a4c639",
		"angularjs": "#b52e31",
		"angularjs-1": "#b52e31",
		"angularjs-2": "#000000",
		"baidu": "#de0f17",
		"baidu-1": "#de0f17",
		"baidu-2": "#2529d8",
		"behance": "#1769ff",
		"bing": "#ffb900",
		"bing-1": "#ffb900",
		"bing-2": "#505050",
		"bing-3": "#a3a3a3",
		"bitbucket": "#205081",
		"blogger": "#f57d00",
		"codepen": "#0ebeff",
		"codepen-1": "#0ebeff",
		"codepen-2": "#47cf73",
		"codepen-3": "#ae63e4",
		"codepen-4": "#fcd000",
		"codepen-5": "#ff3c41",
		"codepen-6": "#76daff",
		"dailymotion": "#00aaff",
		"dailymotion-1": "#00aaff",
		"dailymotion-2": "#00d2f3",
		"delicious": "#3399ff",
		"delicious-1": "#3399ff",
		"delicious-2": "#222222",
		"delicious-3": "#eeeeee",
		"deviantart": "#05cc47",
		"deviantart-1": "#05cc47",
		"deviantart-2": "#4dc47d",
		"deviantart-3": "#181a1b",
		"disqus": "#2e9fff",
		"dribbble": "#444444",
		"dribbble-1": "#444444",
		"dribbble-2": "#ea4c89",
		"dribbble-3": "#8aba56",
		"dribbble-4": "#ff8833",
		"dribbble-5": "#00b6e3",
		"dribbble-6": "#9ba5a8",
		"dropbox": "#007ee5",
		"dropbox-1": "#007ee5",
		"dropbox-2": "#7b8994",
		"dropbox-3": "#47525d",
		"dropbox-4": "#3d464d",
		"drupal": "#0077c0",
		"drupal-1": "#0077c0",
		"drupal-2": "#81ceff",
		"drupal-3": "#00598e",
		"ebay": "#e53238",
		"ebay-1": "#e53238",
		"ebay-2": "#0064d2",
		"ebay-3": "#f5af02",
		"ebay-4": "#86b817",
		"facebook": "#1877f2",
		"firefox": "#e66000",
		"firefox-1": "#e66000",
		"firefox-2": "#ff9500",
		"firefox-3": "#ffcb00",
		"firefox-4": "#00539f",
		"firefox-5": "#0095dd",
		"firefox-6": "#331e54",
		"firefox-7": "#002147",
		"flickr": "#0063dc",
		"flickr-1": "#0063dc",
		"flickr-2": "#ff0084",
		"fontawesome": "#228ae6",
		"foursquare": "#f94877",
		"foursquare-1": "#f94877",
		"foursquare-2": "#0732a2",
		"foursquare-3": "#2d5be3",
		"github": "#4078c0",
		"github-1": "#4078c0",
		"github-2": "#6cc644",
		"github-3": "#bd2c00",
		"github-4": "#c9510c",
		"github-5": "#6e5494",
		"github-6": "#fafafa",
		"github-7": "#f5f5f5",
		"github-8": "#333",
		"gitlab": "#fca326",
		"gitlab-1": "#fca326",
		"gitlab-2": "#fc6d26",
		"gitlab-3": "#e24329",
		"gitlab-4": "#554488",
		"google": "#4285f4",
		"google-1": "#4285f4",
		"google-2": "#34a853",
		"google-3": "#fbbc05",
		"google-4": "#ea4335",
		"google-allo": "#fbbc05",
		"google-duo": "#4285f4",
		"google-plus": "#dd4b39",
		"gravatar": "#1e8cbe",
		"gravatar-1": "#1e8cbe",
		"hangouts": "#0f9d58",
		"html5": "#e34f26",
		"cloudflare": "#f38020",
		"cloudflare-1": "#f38020",
		"cloudflare-2": "#faae40",
		"cloudflare-3": "#404041",
		"dev-to": "#0a0a0a",
		"dev-to-1": "#0a0a0a",
		"dev-to-2": "#ffffff",
		"digg": "#005be2",
		"digg-1": "#005be2",
		"digg-2": "#000000",
		"discord": "#7289da",
		"discord-1": "#7289da",
		"discord-2": "#99aab5",
		"discord-3": "#2c2f33",
		"discord-4": "#23272a",
		"ibm": "#006699",
		"imgur": "#85bf25",
		"instagram": "#405de6",
		"instagram-1": "#405de6",
		"instagram-2": "#5851db",
		"instagram-3": "#833ab4",
		"instagram-4": "#c13584",
		"instagram-5": "#e1306c",
		"instagram-6": "#fd1d1d",
		"instagram-7": "#f56040",
		"instagram-8": "#f77737",
		"instagram-9": "#fcaf45",
		"instagram-10": "#ffdc80",
		"ios": "#5fc9f8",
		"ios-1": "#5fc9f8",
		"ios-2": "#fecb2e",
		"ios-3": "#fd9426",
		"ios-4": "#fc3158",
		"ios-5": "#147efb",
		"ios-6": "#53d769",
		"ios-7": "#fc3d39",
		"ios-8": "#8e8e93",
		"javascript": "#f7df1e",
		"joomla": "#f44321",
		"joomla-1": "#f44321",
		"joomla-2": "#5091cd",
		"joomla-3": "#f9a541",
		"joomla-4": "#7ac143",
		"jquery": "#0769ad",
		"jquery-1": "#0769ad",
		"jquery-2": "#7acef4",
		"laravel": "#f55247",
		"linkedin": "#0077b5",
		"linkedin-1": "#0077b5",
		"linkedin-2": "#000000",
		"linkedin-3": "#313335",
		"linkedin-4": "#86888a",
		"linkedin-5": "#caccce",
		"linkedin-6": "#00a0dc",
		"linkedin-7": "#8d6cab",
		"linkedin-8": "#dd5143",
		"linkedin-9": "#e68523",
		"line": "#00c300",
		"magento": "#f46f25",
		"mailchimp": "#239ab9",
		"mailchimp-1": "#239ab9",
		"mailchimp-2": "#52bad5",
		"mailchimp-3": "#6dc5dc",
		"mailchimp-4": "#373737",
		"mailchimp-5": "#5d5c5d",
		"mailchimp-6": "#b7b7b7",
		"messenger": "#0084ff",
		"mozilla": "#c13832",
		"mozilla-1": "#c13832",
		"mozilla-2": "#d7d3c8",
		"mozilla-3": "#4d4e53",
		"mysql": "#00758f",
		"mysql-1": "#00758f",
		"mysql-2": "#f29111",
		"node-js": "#215732",
		"node-js-1": "#215732",
		"node-js-2": "#6cc24a",
		"node-js-3": "#44883e",
		"node-js-4": "#333333",
		"npm": "#cb3837",
		"onlyfans": "#00AFF0",
		"onlyfans-1": "#00AFF0",
		"onlyfans-2": "#27272B",
		"onlyfans-3": "#8A96A3",
		"opera": "#cc0f16",
		"opera-1": "#cc0f16",
		"opera-2": "#9c9e9f",
		"paypal": "#003087",
		"paypal-1": "#003087",
		"paypal-2": "#009cde",
		"paypal-3": "#012169",
		"php": "#8892be",
		"php-1": "#8892be",
		"php-2": "#4f5b93",
		"php-3": "#99cc99",
		"pinterest": "#e60023",
		"postman": "#ef5b25",
		"python": "#ffde57",
		"python-1": "#ffde57",
		"python-2": "#4584b6",
		"python-3": "#646464",
		"react": "#00d8ff",
		"reddit": "#ff4500",
		"reddit-1": "#ff4500",
		"reddit-2": "#5f99cf",
		"reddit-3": "#cee3f8",
		"shopify": "#96bf48",
		"shopify-1": "#96bf48",
		"shopify-2": "#479ccf",
		"shopify-3": "#2d3538",
		"shopify-4": "#f5f5f5",
		"shopify-5": "#f2f7fa",
		"shopify-6": "#666666",
		"skype": "#00aff0",
		"slack": "#6ecadc",
		"slack-1": "#6ecadc",
		"slack-2": "#e9a820",
		"slack-3": "#e01563",
		"slack-4": "#3eb991",
		"snapchat": "#fffc00",
		"spotify": "#1db954",
		"spotify-1": "#1db954",
		"spotify-2": "#191414",
		"soundcloud": "#ff8800",
		"soundcloud-1": "#ff8800",
		"soundcloud-2": "#ff3300",
		"stack-exchange": "#1e5397",
		"stack-exchange-1": "#1e5397",
		"stack-exchange-2": "#376db6",
		"stack-exchange-3": "#4ca2da",
		"stack-exchange-4": "#91d8f4",
		"stackoverflow": "#f48024",
		"stackoverflow-1": "#f48024",
		"stackoverflow-2": "#222426",
		"stackoverflow-3": "#bcbbbb",
		"steam": "#00adee",
		"steam-1": "#00adee",
		"steam-2": "#000000",
		"stripe": "#00afe1",
		"telegram": "#0088cc",
		"tiktok": "#000000",
		"tiktok-1": "#ff0050",
		"tiktok-2": "#00f2ea",
		"tiktok-3": "#000000",
		"trello": "#0079bf",
		"trello-1": "#0079bf",
		"trello-2": "#70b500",
		"trello-3": "#ff9f1a",
		"trello-4": "#eb5a46",
		"trello-5": "#f2d600",
		"trello-6": "#c377e0",
		"trello-7": "#ff78cb",
		"trello-8": "#00c2e0",
		"trello-9": "#51e898",
		"trello-10": "#c4c9cc",
		"tumblr": "#35465c",
		"twitch": "#9146ff",
		"twitch-1": "#9146ff",
		"twitch-2": "#000000",
		"twitch-3": "#f0f0ff",
		"twitter": "#1da1f2",
		"twitter-1": "#1da1f2",
		"twitter-2": "#14171a",
		"twitter-3": "#657786",
		"twitter-4": "#aab8c2",
		"twitter-5": "#e1e8ed",
		"twitter-6": "#f5f8fa",
		"ubuntu": "#dd4814",
		"ubuntu-1": "#dd4814",
		"ubuntu-2": "#77216f",
		"ubuntu-3": "#5e2750",
		"ubuntu-4": "#2c001e",
		"ubuntu-5": "#aea79f",
		"ubuntu-6": "#333333",
		"viber": "#59267c",
		"viber-1": "#59267c",
		"viber-2": "#8f5db7",
		"viber-3": "#e2d4e7",
		"viber-4": "#a5cfd5",
		"viber-5": "#81cd50",
		"vimeo": "#162221",
		"vimeo-1": "#162221",
		"vimeo-2": "#1ab7ea",
		"vine": "#00b488",
		"vkontakte": "#45668e",
		"vue-js": "#42b883",
		"vue-js-1": "#42b883",
		"vue-js-2": "#35495e",
		"whatsapp": "#075e54",
		"whatsapp-1": "#075e54",
		"whatsapp-2": "#128c7e",
		"whatsapp-3": "#25d366",
		"whatsapp-4": "#dcf8c6",
		"whatsapp-5": "#34b7f1",
		"whatsapp-6": "#ece5dd",
		"wikimedia": "#339966",
		"wikimedia-1": "#339966",
		"wikimedia-2": "#0063bf",
		"wikimedia-3": "#990000",
		"windows": "#0078d7",
		"windows-1": "#0078d7",
		"windows-2": "#002050",
		"windows-3": "#ffb900",
		"windows-4": "#d83b01",
		"windows-5": "#e81123",
		"windows-6": "#b4009e",
		"windows-7": "#5c2d91",
		"windows-8": "#008272",
		"windows-9": "#107c10",
		"woocommerce": "#96588a",
		"woocommerce-1": "#96588a",
		"woocommerce-2": "#3c3c3c",
		"woocommerce-3": "#71b02f",
		"wordpress": "#21759b",
		"wordpress-1": "#21759b",
		"wordpress-2": "#d54e21",
		"wordpress-3": "#464646",
		"wordpress-com": "#0087be",
		"wordpress-com-1": "#0087be",
		"wordpress-com-2": "#78dcfa",
		"wordpress-com-3": "#00aadc",
		"wordpress-com-4": "#005082",
		"wordpress-com-5": "#87a6bc",
		"wordpress-com-6": "#f3f6f8",
		"wordpress-com-7": "#e9eff3",
		"wordpress-com-8": "#e9eff3",
		"wordpress-com-9": "#a8bece",
		"wordpress-com-10": "#668eaa",
		"wordpress-com-11": "#4f748e",
		"wordpress-com-12": "#3d596d",
		"wordpress-com-13": "#2e4453",
		"wordpress-com-14": "#d54e21",
		"wordpress-com-15": "#f0821e",
		"wordpress-com-16": "#4ab866",
		"wordpress-com-17": "#f0b849",
		"wordpress-com-18": "#d94f4f",
		"yahoo": "#410093",
		"yandex": "#ffcc00",
		"yelp": "#af0606",
		"youtube": "#ff0000",
		"youtube-1": "#ff0000",
		"youtube-2": "#282828",
		"zoom": "#2d8cff",
		"zoom-1": "#2d8cff",
		"zoom-2": "#f26d21",
}

function section(cls, parent, gradient = false){
	var s = document.createElement('section'),
		h = document.createElement('h3'),
		t = document.createTextNode(cls);
	h.appendChild(t)
	s.appendChild(h)
	s.classList.add(`bg-${gradient ? 'gradient-' : ''}${cls}`)
	document.querySelector(parent).appendChild(s);
}

window.addEventListener('load', function(){
	Prism.plugins.NormalizeWhitespace.setDefaults({
		'remove-trailing': true,
		'remove-indent': true,
		'left-trim': true,
		'right-trim': true,
		'indent': 2,
		'remove-initial-line-feed': false,
		'tabs-to-spaces': 4,
		'spaces-to-tabs': 4
		/*'break-lines': 80,
		'*/
	});
	Object.keys(colors).forEach(function(c){
		section(c, '#color')
	})
	theme.forEach(function(c){
		section(c, '#theme')
	})
	theme.forEach(function(c){
		section(c, '#gradient', true)
		section(`faded-${c}`, '#gradient', true)
		section(`${c}-radial`, '#gradient', true)
	})

	Object.keys(brand).forEach(function(c){
		section(c, '#brand')
	})
}, false)