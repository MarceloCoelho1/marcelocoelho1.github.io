// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Marcelo',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	// weatherKey: 'InsertYourAPIKeyHere123456', // Write here your API Key
	// weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	// weatherUnit: 'C', // 'F', 'C'
	// language: 'en', // More languages in https://openweathermap.org/current#multi

	// trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	// defaultLatitude: '37.775',
	// defaultLongitude: '-122.419',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/MarceloCoelho1',
		},
		{
			id: '2',
			name: 'File-text',
			icon: 'file-text',
			link: 'https://myportfolio-one-black.vercel.app/',
		},
		{
			id: '3',
			name: 'Instagram',
			icon: 'instagram',
			link: 'https://www.instagram.com/marcelo_henri22/',
		},
		{
			id: '4',
			name: 'Mail',
			icon: 'mail',
			link: 'mailto:mhbcoelho99@gmail.com',
		},
		{
			id: '5',
			name: 'code',
			icon: 'code',
			link: 'https://github.com/MarceloCoelho1/marcelocoelho1.github.io',
		},
		{
			id: '6',
			name: 'Odysee',
			icon: 'youtube',
			link: 'https://www.youtube.com/channel/UCFrO7cnUTyOYEJHO4dgHenw',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'youtube',
			titleTab: 'Latest videos',
			id: '1',
			links: [
				{
					name: 'Coming soon',
					link: 'https://www.youtube.com/channel/UCFrO7cnUTyOYEJHO4dgHenw',
				},
				{
					name: 'Coming soon',
					link: 'https://www.youtube.com/channel/UCFrO7cnUTyOYEJHO4dgHenw',
				},
				{
					name: 'Coming soon',
					link: 'https://www.youtube.com/channel/UCFrO7cnUTyOYEJHO4dgHenw',
				},
				{
					name: 'Coming soon',
					link: 'https://www.youtube.com/channel/UCFrO7cnUTyOYEJHO4dgHenw',
				},
			],
		},
		{
			icon: 'coffee',
			titleTab: 'Socials',
			id: '2',
			links: [
				{
					name: 'Linkedin',
					link: 'https://www.linkedin.com/in/marcelo-brito-287122204/',
				},
				{
					name: 'Instagram',
					link: 'https://www.instagram.com/marcelo_henri22/',
				}
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/migueravila',
				},
			],
		},
	],
};
