export const LOADING_STR = 'Loading...';

export const SPLITS_STARTS = {
	season1: {
		split1: '',
		split2: '2022-03-10T06:21:46.590000Z',
		split3: '2022-04-14T06:21:46.590000Z'
	},
	season2: {
		split1: '2022-05-31T06:21:46.590000Z',
		split2: '2022-06-28T06:21:46.590000Z',
		split3: '2022-07-26T06:21:46.590000Z'
	},
	worlds: {
		split1: '2022-09-24T08:00:00.000000Z'
	}
};

export const ROLES = {
	TOP: 'Top',
	JUNGLE: 'Jng',
	MIDDLE: 'Mid',
	BOTTOM: 'ADC',
	SUPPORT: 'Sup'
};

export const CORRECT_CHAMPION_DISPLAY_NAMES = {
	AurelionSol: 'Aurelion Sol',
	Chogath: "Cho'Gath",
	DrMundo: 'Dr. Mundo',
	FiddleSticks: 'Fiddlesticks',
	JarvanIV: 'Jarvan IV',
	Khazix: "Kha'Zix",
	Kaisa: "Kai'Sa",
	LeeSin: 'Lee Sin',
	MissFortune: 'Miss Fortune',
	MonkeyKing: 'Wukong',
	TahmKench: 'Tahm Kench',
	TwistedFate: 'Twisted Fate'
};

export function correctChampionImage(championName) {
	const championImageName =
		Object.fromEntries(Object.entries(CORRECT_CHAMPION_DISPLAY_NAMES).map((a) => a.reverse()))[
			championName
		] || championName;
	if (championImageName === 'FiddleSticks') return 'Fiddlesticks';
	return championImageName;
}

export function correctChampionDisplayName(championName) {
	return CORRECT_CHAMPION_DISPLAY_NAMES[championName] || championName;
}

export const INDEX_TO_ROLE = {
	0: 'TOP',
	1: 'JUNGLE',
	2: 'MIDDLE',
	3: 'BOTTOM',
	4: 'SUPPORT'
};

export const ROLE_TO_INDEX = {
	Top: 0,
	Jng: 1,
	Mid: 2,
	ADC: 3,
	Sup: 4
};

export function teamImg(size, logo) {
	return `https://am-a.akamaihd.net/image?resize=${size}:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2${logo}`;
}

export const TEAMS = {
	C9: {
		name: 'Cloud 9',
		tag: 'C9',
		logo: 'F1631820065346_cloud9-2021-worlds.png',
		hsl: '196deg 100% 39%',
		starters: ['C9 Fudge', 'C9 Blaber', 'C9 Jensen', 'C9 Berserker', 'C9 Zven']
	},
	100: {
		name: '100 Thieves',
		tag: '100',
		logo: 'F1631819887423_100t-2021-worlds.png',
		hsl: '0deg 73% 53%',
		starters: ['100 Ssumday', '100 Closer', '100 Abbedagge', '100 FBI', '100 huhi']
	},
	EG: {
		name: 'Evil Geniuses',
		tag: 'EG',
		logo: 'F1592590374862_EvilGeniusesEG-01-FullonDark.png',
		hsl: '0deg 0% 40%',
		starters: ['EG Impact', 'EG Inspired', 'EG jojopyun', 'EG Kaori', 'EG Vulcan']
	},
	DFM: {
		name: 'DetonatioN FocusMe',
		tag: 'DFM',
		logo: 'F1631820630246_dfm-2021-worlds.png',
		hsl: '195deg 100% 47%',
		starters: ['DFM Evi', 'DFM Steal', 'DFM Yaharong', 'DFM Yutapon', 'DFM Harp']
	},
	LLL: {
		name: 'LOUD',
		tag: 'LLL',
		logo: 'FLogo-LOUD-Esports_Original.png',
		hsl: '116deg 100% 50%',
		starters: ['LLL Makes', 'LLL enel1', 'LLL Aithusa', 'LLL Brance', 'LLL Ceos']
	},
	BYG: {
		name: 'Mega Bank Beyond Gaming',
		tag: 'BYG',
		logo: 'F1644501610149_BYG_White.png',
		hsl: '13deg 81% 51%',
		starters: ['BYG Liang', 'BYG Husha', 'BYG Minji', 'BYG Wako', 'BYG Kino']
	},
	FNC: {
		name: 'Fnatic',
		tag: 'FNC',
		logo: 'F1631819669150_fnc-2021-worlds.png',
		hsl: '21deg 100% 50%',
		starters: ['FNC Wunder', 'FNC Razork', 'FNC Humanoid', 'FNC Upset', 'FNC Hylissang']
	},
	CHF: {
		name: 'The Chiefs',
		tag: 'CHF',
		logo: 'F1642465931119_ChiefsLogo1000x1000.png',
		hsl: '205deg 66% 54%',
		starters: ['CHF Topoon', 'CHF Babip', 'CHF Tally', 'CHF Raes', 'CHF Dragku']
	},
	IW: {
		name: 'DenizBank İstanbul Wildcats',
		tag: 'IW',
		logo: 'F1654773501062_DenizBankIstanbulWildcatsWhite1.png',
		hsl: '45deg 55% 49%',
		starters: ['IW StarScreen', 'IW Ferret', 'IW Serin', 'IW HolyPhoenix', 'IW Farfetch']
	},
	MAD: {
		name: 'MAD Lions',
		tag: 'MAD',
		logo: 'F1631819614211_mad-2021-worlds.png',
		hsl: '44deg 65% 62%',
		starters: ['MAD Armut', 'MAD Elyoya', 'MAD Nisqy', 'MAD UNF0RGIVEN', 'MAD Kaiser']
	},
	SGB: {
		name: 'SAIGON BUFFALO ESPORTS',
		tag: 'SGB',
		logo: 'F1636524131703_900px-Saigon_Buffalo.png',
		hsl: '359deg 87% 48%',
		starters: ['SGB Hasmed', 'SGB BeanJ', 'SGB Froggy', 'SGB BigKoro', 'SGB Taki']
	},
	RNG: {
		name: 'Royal Never Give Up',
		tag: 'RNG',
		logo: 'F1631819360134_rng-2021-worlds.png',
		hsl: '30deg 34% 57%',
		starters: ['RNG Bin', 'RNG Wei', 'RNG Xiaohu', 'RNG GALA', 'RNG Ming']
	},
	DRX: {
		name: 'DRX',
		tag: 'DRX',
		logo: 'F1592589284897_DRXDRX-01-FullonDark.png',
		hsl: '221deg 100% 68%',
		starters: ['DRX Kingen', 'DRX Pyosik', 'DRX Zeka', 'DRX Deft', 'DRX BeryL']
	},
	ISG: {
		name: 'Isurus',
		tag: 'ISG',
		logo: 'FISG.png',
		hsl: '204deg 95% 49%',
		starters: ['ISG ADD', 'ISG Grell', 'ISG seiya', 'ISG Gavotto', 'ISG Jelly']
	},
	T1: {
		name: 'T1',
		tag: 'T1',
		logo: 'F1631819523085_t1-2021-worlds.png',
		hsl: '349deg 100% 45%',
		starters: ['T1 Zeus', 'T1 Oner', 'T1 Faker', 'T1 Gumayusi', 'T1 Keria']
	},
	EDG: {
		name: 'EDward Gaming',
		tag: 'EDG',
		logo: 'F1631819297476_edg-2021-worlds.png',
		hsl: '0deg 0% 98%',
		starters: ['EDG Flandre', 'EDG JieJie', 'EDG Scout', 'EDG Viper', 'EDG Meiko']
	},
	DWG: {
		name: 'DWG KIA',
		tag: 'DWG',
		logo: 'F1631819456274_dwg-kia-2021-worlds.png',
		hsl: '176deg 48% 58%',
		starters: ['DWG Nuguri', 'DWG Canyon', 'DWG ShowMaker', 'DWG deokdam', 'DWG Kellin']
	},
	G2: {
		name: 'G2 Esports',
		tag: 'G2',
		logo: 'FG2-FullonDark.png',
		hsl: '8deg 86% 54%',
		starters: ['G2 BrokenBlade', 'G2 Jankos', 'G2 caPs', 'G2 Flakked', 'G2 Targamas']
	},
	JDG: {
		name: 'JD Gaming',
		tag: 'JDG',
		logo: 'F1627457924722_29.png',
		hsl: '219deg 80% 45%',
		starters: ['JDG 369', 'JDG Kanavi', 'JDG Yagao', 'JDG Hope', 'JDG Missing']
	},
	RGE: {
		name: 'Rogue',
		tag: 'RGE',
		logo: 'F1631819715136_rge-2021-worlds.png',
		hsl: '198deg 100% 50%',
		starters: ['RGE Odoamne', 'RGE Malrang', 'RGE Larssen', 'RGE Comp', 'RGE Trymbi']
	},
	GAM: {
		name: 'GAM Esports',
		tag: 'GAM',
		logo: 'F1643263093448_GAMyellow.png',
		hsl: '44deg 99% 53%',
		starters: ['GAM Kiaya', 'GAM Levi', 'GAM Kati', 'GAM Sty1e', 'GAM Bie']
	},
	TES: {
		name: 'Top Esports',
		tag: 'TES',
		logo: 'F1592592064571_TopEsportsTES-01-FullonDark.png',
		hsl: '7deg 100% 57%',
		starters: ['TES Wayward', 'TES Tian', 'TES knight', 'TES JackeyLove', 'TES Mark']
	},
	GEN: {
		name: 'Gen.G',
		tag: 'GEN',
		logo: 'F1655210113163_GenG_logo_200407-05.png',
		hsl: '45deg 57% 43%',
		starters: ['GEN Doran', 'GEN Peanut', 'GEN Chovy', 'GEN Ruler', 'GEN Lehends']
	},
	CFO: {
		name: 'CTBC Flying Oyster',
		tag: 'CFO',
		logo: 'F1656307849320_CFO_Logo.png',
		hsl: '49deg 100% 50%',
		starters: ['CFO Rest', 'CFO Gemini', 'CFO Mission', 'CFO Atlen', 'CFO Koala']
	},
	TSM: {
		name: 'TSM',
		tag: 'TSM',
		logo: 'F1592590917094_TSMTSM-01-FullonDark.png',
		hsl: '0deg 0% 60%',
		starters: ['TSM Huni', 'TSM Spica', 'TSM Maple', 'TSM Tactical', 'TSM Shenyi']
	},
	TL: {
		name: 'Team Liquid',
		tag: 'TL',
		logo: 'F1631820014208_tl-2021-worlds.png',
		hsl: '214deg 0% 80%',
		starters: ['TL Bwipo', 'TL Santorin', 'TL Bjergsen', 'TL Hans sama', 'TL CoreJJ']
	},
	FLY: {
		name: 'FlyQuest',
		tag: 'FLY',
		logo: 'Fflyquest-new-on-dark.png',
		hsl: '152deg 97% 27%',
		starters: ['FLY Kumo', 'FLY Josedeodo', 'FLY toucouille', 'FLY Johnsun', 'FLY aphromoo']
	},
	GG: {
		name: 'Golden Guardians',
		tag: 'GG',
		logo: 'F1592590586919_GoldenGuardiansGGS-01-FullonDark.png',
		hsl: '39deg 64% 60%',
		starters: ['GG Licorice', 'GG Pridestalkr', 'GG Ablazeolive', 'GG Stixxay', 'GG Olleh']
	},
	IMT: {
		name: 'Immortals Progressive',
		tag: 'IMT',
		logo: 'Fimt-new-color.png',
		hsl: '177deg 97% 35%',
		starters: ['IMT Revenge', 'IMT Kenvi', 'IMT PowerOfEvil', 'IMT Lost', 'IMT IgNar']
	},
	DIG: {
		name: 'Dignitas QNTMPAY',
		tag: 'DIG',
		logo: 'FDIG-FullonDark.png',
		hsl: '48deg 100% 50%',
		starters: ['DIG Gamsu', 'DIG River', 'DIG Blue', 'DIG Neo', 'DIG Biofrost']
	},
	CLG: {
		name: 'Counter Logic Gaming',
		tag: 'CLG',
		logo: 'F1592590248482_CounterLogicGamingCLG-01-FullonDark.png',
		hsl: '192deg 100% 44%',
		starters: ['CLG Dhokla', 'CLG Contractz', 'CLG Palafox', 'CLG Luger', 'CLG Poome']
	}
};

export const TEAMS_WORLDS = {
	C9: true,
	100: true,
	EG: true,
	DFM: true,
	LLL: true,
	BYG: true,
	FNC: true,
	CHF: true,
	IW: true,
	MAD: true,
	SGB: true,
	RNG: true,
	DRX: true,
	ISG: true,
	T1: true,
	EDG: true,
	DWG: true,
	G2: true,
	JDG: true,
	RGE: true,
	GAM: true,
	TES: true,
	GEN: true,
	CFO: true
};

export const PLAYERS = {
	'MAD Kaiser': {
		summonerName: 'Kaiser',
		summonerNameWithTeam: 'MAD Kaiser',
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1655318626736_kaiser.png'
	},
	'MAD Armut': {
		summonerName: 'Armut',
		summonerNameWithTeam: 'MAD Armut',
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1655318599074_armut.png'
	},
	'MAD Elyoya': {
		summonerName: 'Elyoya',
		summonerNameWithTeam: 'MAD Elyoya',
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1655318613626_elyoya.png'
	},
	'MAD UNF0RGIVEN': {
		summonerName: 'UNF0RGIVEN',
		summonerNameWithTeam: 'MAD UNF0RGIVEN',
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1655318653437_unforgiven.png'
	},
	'MAD Nisqy': {
		summonerName: 'Nisqy',
		summonerNameWithTeam: 'MAD Nisqy',
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1655318638204_nisqy.png'
	},

	'T1 Faker': {
		summonerName: 'Faker',
		summonerNameWithTeam: 'T1 Faker',
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1655457397135_T1_Faker_784x621.png'
	},
	'T1 Gumayusi': {
		summonerName: 'Gumayusi',
		summonerNameWithTeam: 'T1 Gumayusi',
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1655457417659_T1_Gumayusi_784x621.png'
	},
	'T1 Oner': {
		summonerName: 'Oner',
		summonerNameWithTeam: 'T1 Oner',
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1655457463943_T1_Oner_784x621.png'
	},
	'T1 Keria': {
		summonerName: 'Keria',
		summonerNameWithTeam: 'T1 Keria',
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1655457436104_T1_Keria_784x621.png'
	},
	'T1 Zeus': {
		summonerName: 'Zeus',
		summonerNameWithTeam: 'T1 Zeus',
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1655457480889_T1_Zeus_784x621.png'
	},
	'T1 Asper': {
		summonerName: 'Asper',
		summonerNameWithTeam: 'T1 Asper',
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1655457378799_T1_Asper_784x621.png'
	},

	'DFM Evi': {
		summonerName: 'Evi',
		summonerNameWithTeam: 'DFM Evi',
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1644905234834_dfm_evi.png'
	},
	'DFM Steal': {
		summonerName: 'Steal',
		summonerNameWithTeam: 'DFM Steal',
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1644905307225_dfm_steal.png'
	},
	'DFM Yaharong': {
		summonerName: 'Yaharong',
		summonerNameWithTeam: 'DFM Yaharong',
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1656051596240_dfm_yaharong.png'
	},
	'DFM Yutapon': {
		summonerName: 'Yutapon',
		summonerNameWithTeam: 'DFM Yutapon',
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1644905347846_dfm_yutapon.png'
	},
	'DFM Harp': {
		summonerName: 'Harp',
		summonerNameWithTeam: 'DFM Harp',
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1656051630613_dfm_harp.png'
	},
	'DFM Marimo': {
		summonerName: 'Marimo',
		summonerNameWithTeam: 'DFM Marimo',
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1644905281811_dfm_marimo.png'
	},

	'DRX Pyosik': {
		summonerName: 'Pyosik',
		summonerNameWithTeam: 'DRX Pyosik',
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1655455094807_DRX_Pyosik_784x621.png'
	},
	'DRX Kingen': {
		summonerName: 'Kingen',
		summonerNameWithTeam: 'DRX Kingen',
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1655455076023_DRX_Kingen_784x621.png'
	},
	'DRX Taeyoon': {
		summonerName: 'Taeyoon',
		summonerNameWithTeam: 'DRX Taeyoon',
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1655455115535_DRX_Taeyoon_784x621.png'
	},
	'DRX Zeka': {
		summonerName: 'Zeka',
		summonerNameWithTeam: 'DRX Zeka',
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1655455135475_DRX_Zeka_784x621.png'
	},
	'DRX Deft': {
		summonerName: 'Deft',
		summonerNameWithTeam: 'DRX Deft',
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1655455056599_DRX_Deft_784x621.png'
	},
	'DRX BeryL': {
		summonerName: 'BeryL',
		summonerNameWithTeam: 'DRX BeryL',
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1655455031274_DRX_BeryL_784x621.png'
	},
	'DRX Juhan': {
		summonerName: 'Juhan',
		summonerNameWithTeam: 'DRX Juhan',
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1644557297606_PSG_Juhan.png'
	},

	'BYG Liang': {
		summonerName: 'Liang',
		summonerNameWithTeam: 'DRX Liang',
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1656575802324_Liang.png'
	},
	'BYG Husha': {
		summonerName: 'Husha',
		summonerNameWithTeam: 'DRX Husha',
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1656575825196_Husha.png'
	},
	'BYG Kino': {
		summonerName: 'Kino',
		summonerNameWithTeam: 'DRX Kino',
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1656575886308_Kino.png'
	},
	'BYG Likai': {
		summonerName: 'Likai',
		summonerNameWithTeam: 'DRX Likai',
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1656575906558_Likai.png'
	},
	'BYG Minji': {
		summonerName: 'Minji',
		summonerNameWithTeam: 'DRX Minji',
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1656575846595_Minji.png'
	},
	'BYG Wako': {
		summonerName: 'Wako',
		summonerNameWithTeam: 'DRX Wako',
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1656575866382_Wako.png'
	},

	'FNC Hylissang': {
		summonerName: 'Hylissang',
		summonerNameWithTeam: 'FNC Hylissang',
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1655318443157_hylissang.png'
	},
	'FNC Upset': {
		summonerName: 'Upset',
		summonerNameWithTeam: 'FNC Upset',
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1655318468554_upset.png'
	},
	'FNC Humanoid': {
		summonerName: 'Humanoid',
		summonerNameWithTeam: 'FNC Humanoid',
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1655318432564_humanoid.png'
	},
	'FNC Wunder': {
		summonerName: 'Wunder',
		summonerNameWithTeam: 'FNC Wunder',
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1655318481877_wunder.png'
	},
	'FNC Razork': {
		summonerName: 'Razork',
		summonerNameWithTeam: 'FNC Razork',
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1655318455881_razork.png'
	},
	'FNC BEAN': {
		summonerName: 'BEAN',
		summonerNameWithTeam: 'FNC BEAN',
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1633541248506_fnc-bean-w21.png'
	},

	'CHF Raes': {
		summonerName: 'Raes',
		summonerNameWithTeam: 'CHF Raes',
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2Fimt-raes-2021.png'
	},
	'CHF Tally': {
		summonerName: 'Tally',
		summonerNameWithTeam: 'CHF Tally',
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1633539183660_pce-tally-w21.png'
	},
	'CHF Dragku': {
		summonerName: 'Dragku',
		summonerNameWithTeam: 'CHF Dragku',
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=https%3A%2F%2Flolstatic-a.akamaihd.net%2Fesports-assets%2Fproduction%2Fplayer%2Fdragku-9znhn75e.png'
	},
	'CHF Babip': {
		summonerName: 'Babip',
		summonerNameWithTeam: 'CHF Babip',
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1633539136875_pce-babip-w21.png'
	},
	'CHF Aladoric': {
		summonerName: 'Aladoric',
		summonerNameWithTeam: 'CHF Aladoric',
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1633539119343_pce-aladoric-w21.png'
	},
	'CHF Arthur': {
		summonerName: 'Arthur',
		summonerNameWithTeam: 'CHF Arthur',
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2Fhle-arthur.png'
	},
	'CHF Topoon': {
		summonerName: 'Topoon',
		summonerNameWithTeam: 'CHF Topoon',
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1600450776168_lgc-topoon.png'
	},

	'100 Ssumday': {
		summonerName: 'Ssumday',
		summonerNameWithTeam: '100 Ssumday',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Ssumday'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/ssumday'
			},
			{
				platform: 'youtube',
				link: 'https://youtube.com/ssumday'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645002219430_SSUMDAY.png'
	},
	'100 Closer': {
		summonerName: 'Closer',
		summonerNameWithTeam: '100 Closer',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/closerlol'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/closer/'
			},
			{
				platform: 'youtube',
				link: 'https://youtube.com/CloserLol'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645001890321_CLOSER.png'
	},
	'100 Abbedagge': {
		summonerName: 'Abbedagge',
		summonerNameWithTeam: '100 Abbedagge',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Abbedagge'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/abbedagge'
			},
			{
				platform: 'youtube',
				link: 'https://youtube.com/huhi'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645001857252_ABBEDAGGE.png'
	},
	'100 FBI': {
		summonerName: 'FBI',
		summonerNameWithTeam: '100 FBI',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/VictorHuang'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/fbiadc/'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645001923272_FBI.png'
	},
	'100 Huhi': {
		summonerName: 'Huhi',
		summonerNameWithTeam: '100 Huhi',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/huhi'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/huhi'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645002147113_HUHI.png'
	},
	'100 Tenacity': {
		summonerName: 'Tenacity',
		summonerNameWithTeam: '100 Tenacity',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/tenacityna'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/tenacityna'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645002245397_TENACITY.png'
	},
	'DIG Gamsu': {
		summonerName: 'Gamsu',
		summonerNameWithTeam: 'DIG Gamsu',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/GamsuLoL'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/gamsuow'
			}
		],
		image: null
	},
	'IMT Kenvi': {
		summonerName: 'Kenvi',
		summonerNameWithTeam: 'IMT Kenvi',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/kenvilol'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/kenvilol'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645001290617_KENVI.png'
	},
	'100 JimieN': {
		summonerName: 'JimieN',
		summonerNameWithTeam: '100 JimieN',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/JimieNlol'
			}
		],
		image: null
	},
	'C9 Wixxi': {
		summonerName: 'Wixxi',
		summonerNameWithTeam: 'C9 Wixxi',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Wixxilol'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/wixxilol'
			}
		],
		image: null
	},
	'100 Busio': {
		summonerName: 'Busio',
		summonerNameWithTeam: '100 Busio',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Busio'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/100tbusio'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645001167641_BUSIO.png'
	},
	'C9 Summit': {
		summonerName: 'Summit',
		summonerNameWithTeam: 'C9 Summit',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/C9Summit'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645003052752_SUMMIT.png'
	},
	'C9 Blaber': {
		summonerName: 'Blaber',
		summonerNameWithTeam: 'C9 Blaber',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/blaber'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/blaber'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645002844455_BLABER.png'
	},
	'C9 Fudge': {
		summonerName: 'Fudge',
		summonerNameWithTeam: 'C9 Fudge',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Fudgecakey'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/fudgeoce'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645002867783_FUDGE.png'
	},
	'C9 Berserker': {
		summonerName: 'Berserker',
		summonerNameWithTeam: 'C9 Berserker',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/C9Berserker'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645002709763_BERSERKER.png'
	},
	'C9 Winsome': {
		summonerName: 'Winsome',
		summonerNameWithTeam: 'C9 Winsome',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/dannykkim00'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645003141150_WINSOME.png'
	},
	'C9 Darshan': {
		summonerName: 'Darshan',
		summonerNameWithTeam: 'C9 Darshan',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/DarshanU'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/darshan'
			},
			{
				platform: 'youtube',
				link: 'https://youtube.com/channel/UC7p8MWUZ15B-2uCt0QWhcyQ'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2Fc9-darshan.png'
	},
	'C9 Lxwrence': {
		summonerName: 'Lxwrence',
		summonerNameWithTeam: 'C9 Lxwrence',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/lolspeedo'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/lolspeedo'
			}
		],
		image: null
	},
	'C9 Malice': {
		summonerName: 'Malice',
		summonerNameWithTeam: 'C9 Malice',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/LolMalice'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/lolmalice'
			}
		],
		image: null
	},
	'C9 FrostForest': {
		summonerName: 'FrostForest',
		summonerNameWithTeam: 'C9 FrostForest',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/FrostForestt'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/frostforest4'
			}
		],
		image: null
	},
	'C9 Copy': {
		summonerName: 'Copy',
		summonerNameWithTeam: 'C9 Copy',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/lol_copy'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/copy1'
			}
		],
		image: null
	},
	'C9 Zven': {
		summonerName: 'Zven',
		summonerNameWithTeam: 'C9 Zven',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Zven'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/c9zven'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1633540407155_c9-zven-w21.png'
	},
	'C9 k1ng': {
		summonerName: 'k1ng',
		summonerNameWithTeam: 'C9 k1ng',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/k1ngyb'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/k1ngyb'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2Fc9-k1ng-2021.png'
	},
	'C9 Isles': {
		summonerName: 'Isles',
		summonerNameWithTeam: 'C9 Isles',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/islesworld1'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/islesworld'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645002916546_ISLES.png'
	},
	'C9 Qit0ng': {
		summonerName: 'Qit0ng',
		summonerNameWithTeam: 'C9 Qit0ng',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Qitonggg'
			}
		],
		image: null
	},
	'CLG Jenkins': {
		summonerName: 'Jenkins',
		summonerNameWithTeam: 'CLG Jenkins',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/BobjenkinsLoL'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/bobjenkins'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645003747730_JENKINS.png'
	},
	'CLG Contractz': {
		summonerName: 'Contractz',
		summonerNameWithTeam: 'CLG Contractz',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Contractz'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/contractz'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645003662804_CONTRACTZ.png'
	},
	'CLG Palafox': {
		summonerName: 'Palafox',
		summonerNameWithTeam: 'CLG Palafox',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/palafoxlol'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/palafox'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645003922510_PALAFOX.png'
	},
	'CLG Luger': {
		summonerName: 'Luger',
		summonerNameWithTeam: 'CLG Luger',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/lugerlol'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/luger'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645003779243_LUGER.png'
	},
	'CLG Poome': {
		summonerName: 'Poome',
		summonerNameWithTeam: 'CLG Poome',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/poomelol'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/poome'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645003976463_POOME.png'
	},
	'CLG Dhokla': {
		summonerName: 'Dhokla',
		summonerNameWithTeam: 'CLG Dhokla',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/dhoklalol'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/dhoklalol'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645003716469_DHOKLA.png'
	},
	'CLG RoseThorn': {
		summonerName: 'RoseThorn',
		summonerNameWithTeam: 'CLG RoseThorn',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/RoseThornLoL'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/rosethornlol'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645004135091_ROSETHORN.png'
	},
	'CLG Triple': {
		summonerName: 'Triple',
		summonerNameWithTeam: 'CLG Triple',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/TripleOCE'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/tripleoce'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645004175043_TRIPLE.png'
	},
	'CLG Prismal': {
		summonerName: 'Prismal',
		summonerNameWithTeam: 'CLG Prismal',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/prismal'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/prismal'
			},
			{
				platform: 'youtube',
				link: 'https://youtube.com/channel/UCRf035zmo2q-Lq87LIWT2KA'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645004107752_PRISMAL.png'
	},
	'CLG Breezy': {
		summonerName: 'Breezy',
		summonerNameWithTeam: 'CLG Breezy',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/breezyyylol'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/lolbreezyyy'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645003618481_BREEZY.png'
	},
	'DIG FakeGod': {
		summonerName: 'FakeGod',
		summonerNameWithTeam: 'DIG FakeGod',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/FakeGod'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/fakegod'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645004707771_FAKEGOD.png'
	},
	'DIG River': {
		summonerName: 'River',
		summonerNameWithTeam: 'DIG River',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/lolRiver'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/lolriver9'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645004785680_RIVER.png'
	},
	'DIG Blue': {
		summonerName: 'Blue',
		summonerNameWithTeam: 'DIG Blue',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/BlueEG7'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/blueeg7'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645004394441_BLUE.png'
	},
	'DIG Neo': {
		summonerName: 'Neo',
		summonerNameWithTeam: 'DIG Neo',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/ukpneo'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/lol_neo'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645004758686_NEO.png'
	},
	'DIG Biofrost': {
		summonerName: 'Biofrost',
		summonerNameWithTeam: 'DIG Biofrost',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Biofrostlol'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/biofrostlol'
			},
			{
				platform: 'youtube',
				link: 'https://youtube.com/channel/UC_hu07lh7DXi_NG0hzlFyRg'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645004354385_BIOFROST.png'
	},
	'DIG Eclipse': {
		summonerName: 'Eclipse',
		summonerNameWithTeam: 'DIG Eclipse',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Ec1ipselol'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645004509707_ECLIPSE.png'
	},
	'DIG eXyu': {
		summonerName: 'eXyu',
		summonerNameWithTeam: 'DIG eXyu',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/lol_eXyu'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/lol_exyu'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645004647807_EXYU.png'
	},
	'100X DARKWINGS': {
		summonerName: 'DARKWINGS',
		summonerNameWithTeam: '100X DARKWINGS',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/DARKWINGSLOL'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/darkwingslol'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645004464260_DARKWINGS.png'
	},
	'DIG Spawn': {
		summonerName: 'Spawn',
		summonerNameWithTeam: 'DIG Spawn',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Spawwwwn1'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/spawwwwn'
			}
		],
		image: null
	},
	'DIG JayJ': {
		summonerName: 'JayJ',
		summonerNameWithTeam: 'DIG JayJ',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/JayJLoL'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/JayJLoL'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2Fdig-jayj.png'
	},
	'EG Impact': {
		summonerName: 'Impact',
		summonerNameWithTeam: 'EG Impact',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Impact'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/egimpact'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645005161460_IMPACT.png'
	},
	'EG Inspired': {
		summonerName: 'Inspired',
		summonerNameWithTeam: 'EG Inspired',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Inspiredlol'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/eginspired'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645005188133_INSPIRED.png'
	},
	'EG jojopyun': {
		summonerName: 'jojopyun',
		summonerNameWithTeam: 'EG jojopyun',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/jojopyunlol'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/jojopyun'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645005210742_JOJOPYUN.png'
	},
	'EG Danny': {
		summonerName: 'Danny',
		summonerNameWithTeam: 'EG Danny',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/DannnyIoI'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/EG_Danny'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645005131145_DANNY.png'
	},
	'EG Vulcan': {
		summonerName: 'Vulcan',
		summonerNameWithTeam: 'EG Vulcan',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Vulcanlol'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/vulcan_lol'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645005262280_VULCAN.png'
	},
	'EG Srtty': {
		summonerName: 'Srtty',
		summonerNameWithTeam: 'EG Srtty',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/_Srtty'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/srtty_lol'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645001564154_SRTTY.png'
	},
	'EG Tomio': {
		summonerName: 'Tomio',
		summonerNameWithTeam: 'EG Tomio',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/loltomio'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/loltomio'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645001589136_TOMIO.png'
	},
	'EG Soligo': {
		summonerName: 'Soligo',
		summonerNameWithTeam: 'EG Soligo',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/soligoms'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/soligo'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645001538238_SOLIGO.png'
	},
	'EG Kaori': {
		summonerName: 'Kaori',
		summonerNameWithTeam: 'EG Kaori',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/KaoriLoL'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/kaori123'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645001489525_KAORI.png'
	},
	'EG SkyTec': {
		summonerName: 'SkyTec',
		summonerNameWithTeam: 'EG SkyTec',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/SkyTecLoL'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/skyteclol'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645001511855_SKYTEC.png'
	},
	'FLY Kumo': {
		summonerName: 'Kumo',
		summonerNameWithTeam: 'FLY Kumo',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/KumoLoL'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/kumo'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645005654576_KUMO.png'
	},
	'FLY Josedeodo': {
		summonerName: 'Josedeodo',
		summonerNameWithTeam: 'FLY Josedeodo',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Josedeodo'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/josedeodo'
			},
			{
				platform: 'youtube',
				link: 'https://youtube.com/channel/UC2eN658_WN0a0pkRVW-U8eg'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645005627467_JOSEDEODO.png'
	},
	'FLY toucouille': {
		summonerName: 'toucouille',
		summonerNameWithTeam: 'FLY toucouille',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Toucouille_lol'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/toucouille_lol'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645005790309_TOUCOUILLE.png'
	},
	'FLY Johnsun': {
		summonerName: 'Johnsun',
		summonerNameWithTeam: 'FLY Johnsun',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Johnsun_lol'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/johnsunlol'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645005605216_JOHNSUN.png'
	},
	'FLY Aphromoo': {
		summonerName: 'Aphromoo',
		summonerNameWithTeam: 'FLY Aphromoo',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/aphromoo'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/aphromoo'
			},
			{
				platform: 'youtube',
				link: 'https://youtube.com/user/Aphromoo'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645005487446_APHROMOO.png'
	},
	'FLY Philip': {
		summonerName: 'Philip',
		summonerNameWithTeam: 'FLY Philip',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/TheRealPhilip5'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/nottherealphilip'
			}
		],
		image: null
	},
	'FLY Yuuji': {
		summonerName: 'Yuuji',
		summonerNameWithTeam: 'FLY Yuuji',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/yuujilol'
			}
		],
		image: null
	},
	'FLY Spirax': {
		summonerName: 'Spirax',
		summonerNameWithTeam: 'FLY Spirax',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Spirax141'
			}
		],
		image: null
	},
	'FLY Tomo': {
		summonerName: 'Tomo',
		summonerNameWithTeam: 'FLY Tomo',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/lolTomo12'
			}
		],
		image: null
	},
	'FLY Diamond': {
		summonerName: 'Diamond',
		summonerNameWithTeam: 'FLY Diamond',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Diamondgg'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/diamond'
			}
		],
		image: null
	},
	'GG Licorice': {
		summonerName: 'Licorice',
		summonerNameWithTeam: 'GG Licorice',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Licorice'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/licoricelol'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645006339810_LICORICE.png'
	},
	'GG Pridestalkr': {
		summonerName: 'Pridestalkr',
		summonerNameWithTeam: 'GG Pridestalkr',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/PridestalkerLoL'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/pridestalkerrlol'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645006492034_PRIDESTALKER.png'
	},
	'GG Ablazeolive': {
		summonerName: 'Ablazeolive',
		summonerNameWithTeam: 'GG Ablazeolive',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Ablazeolive'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/ablazeolive'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645006102506_ABLAZEOLIVE.png'
	},
	'IMT Lost': {
		summonerName: 'Lost',
		summonerNameWithTeam: 'IMT Lost',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Lost_adc'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645006415366_LOST.png'
	},
	'GG Olleh': {
		summonerName: 'Olleh',
		summonerNameWithTeam: 'GG Olleh',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Olleh'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/olleh'
			},
			{
				platform: 'youtube',
				link: 'https://youtube.com/channel/UC4MEnVYIzBzRWHDWEKmWsbA'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645006459696_OLLEH.png'
	},
	'GG Tony Top': {
		summonerName: 'Tony Top',
		summonerNameWithTeam: 'GG Tony Top',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/LOLTonyTop'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/tonytoplol'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645006687571_TONYTOP.png'
	},
	'GG Iconic': {
		summonerName: 'Iconic',
		summonerNameWithTeam: 'GG Iconic',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/iconic_lol'
			}
		],
		image: null
	},
	'JK ry0ma': {
		summonerName: 'ry0ma',
		summonerNameWithTeam: 'JK ry0ma',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Ryoma1'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/ryomaoce'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F100-ryoma.png'
	},
	'GG Violet': {
		summonerName: 'Violet',
		summonerNameWithTeam: 'GG Violet',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Violet_OCE'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/violetoce'
			}
		],
		image: null
	},
	'GG Stixxay': {
		summonerName: 'Stixxay',
		summonerNameWithTeam: 'GG Stixxay',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Stixxay'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/stixxay'
			},
			{
				platform: 'youtube',
				link: 'https://youtube.com/channel/UCDN2B1tqw4r8Q6YvvKOz-jw'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645006646248_STIXXAY.png'
	},
	'GG Chime': {
		summonerName: 'Chime',
		summonerNameWithTeam: 'GG Chime',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/LoLChime'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/ChimeLoL'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645006152919_CHIME.png'
	},
	'IMT Revenge': {
		summonerName: 'Revenge',
		summonerNameWithTeam: 'IMT Revenge',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Revengeleague'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/revenge'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645006991598_REVENGE.png'
	},
	'IMT Xerxe': {
		summonerName: 'Xerxe',
		summonerNameWithTeam: 'IMT Xerxe',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/XerxeLoL'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/xerxe'
			},
			{
				platform: 'youtube',
				link: 'https://youtube.com/channel/UCQHULmfx8WziaDg1Q2jAtqA'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645007055418_XERXE.png'
	},
	'IMT PowerOfEvil': {
		summonerName: 'PowerOfEvil',
		summonerNameWithTeam: 'IMT PowerOfEvil',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/PowerOfEvilLoL'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/thepowerofevil'
			},
			{
				platform: 'youtube',
				link: 'https://youtube.com/channel/UCD777FoaysRYNiIxL79Nmlg'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645006938944_POWEROFEVIL.png'
	},
	'IMT Wildturtle': {
		summonerName: 'Wildturtle',
		summonerNameWithTeam: 'IMT Wildturtle',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/WildTurtle'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/wildturtle'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645007023352_WILDTURTLE.png'
	},
	'C9 Destiny': {
		summonerName: 'Destiny',
		summonerNameWithTeam: 'C9 Destiny',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Destinyy'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/destinyoce'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645006855546_DESTINY.png'
	},
	'GG Concept': {
		summonerName: 'Concept',
		summonerNameWithTeam: 'GG Concept',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/ConceptNALoL'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/lol_concept'
			}
		],
		image: null
	},
	'IMT Chad': {
		summonerName: 'Chad',
		summonerNameWithTeam: 'IMT Chad',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/ChadJungleLoL'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/ChadJungle'
			}
		],
		image: null
	},
	'IMT Pretty': {
		summonerName: 'Pretty',
		summonerNameWithTeam: 'IMT Pretty',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Pretty_GRE'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/prettygre'
			}
		],
		image: null
	},
	'IMT Arrow': {
		summonerName: 'Arrow',
		summonerNameWithTeam: 'IMT Arrow',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/ArrowDongTak'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/arrowioi'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=https%3A%2F%2Flolstatic-a.akamaihd.net%2Fesports-assets%2Fproduction%2Fplayer%2Farrow-i2i2u1af.png'
	},
	'IMT Joey': {
		summonerName: 'Joey',
		summonerNameWithTeam: 'IMT Joey',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/TheAirIsDry'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/joeyyylol'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2Fimt-joey.png'
	},
	'TL Bwipo': {
		summonerName: 'Bwipo',
		summonerNameWithTeam: 'TL Bwipo',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Bwipo'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/bwipolol'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645007421489_TL_BWIPO_512x512.png'
	},
	'TL Santorin': {
		summonerName: 'Santorin',
		summonerNameWithTeam: 'TL Santorin',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Santorin'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/santorin'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645007610604_TL_SANTORIN_512x512.png'
	},
	'TL Bjergsen': {
		summonerName: 'Bjergsen',
		summonerNameWithTeam: 'TL Bjergsen',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/bjergsen'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/bjergsenlol'
			},
			{
				platform: 'youtube',
				link: 'https://youtube.com/user/BjergsenLoL'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645007317343_TL_BJERGSEN_512x512.png'
	},
	'TL Hans Sama': {
		summonerName: 'Hans Sama',
		summonerNameWithTeam: 'TL Hans Sama',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Hanssama'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/hanssama'
			},
			{
				platform: 'youtube',
				link: 'https://youtube.com/channel/UCG8yF_KHSQj2jGOoLb4gRHA'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645007580069_TL_HANS_SAMA_512x512.png'
	},
	'TL CoreJJ': {
		summonerName: 'CoreJJ',
		summonerNameWithTeam: 'TL CoreJJ',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/TLCoreJJ'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/corejj'
			},
			{
				platform: 'youtube',
				link: 'https://youtube.com/channel/UCVDepsrgho0zQxMvkik7KUw'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645007452184_TL_COREJJ_512x512.png'
	},
	'TL Bradley': {
		summonerName: 'Bradley',
		summonerNameWithTeam: 'TL Bradley',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/bradleyyylol'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645007395594_TL_BRADLEY_512x512.png'
	},
	'TL Armao': {
		summonerName: 'Armao',
		summonerNameWithTeam: 'TL Armao',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/armao_lol'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/armaolol'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645007285685_TL_ARMAO_512x512.png'
	},
	'TL Haeri': {
		summonerName: 'Haeri',
		summonerNameWithTeam: 'TL Haeri',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Haeri_lol'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/haeri2'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645007546446_TL_HAERI_512x512.png'
	},
	'TL Yeon': {
		summonerName: 'Yeon',
		summonerNameWithTeam: 'TL Yeon',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Yeon7lol'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/yeon7lol'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645007642833_TL_YEON_512x512.png'
	},
	'TL Eyla': {
		summonerName: 'Eyla',
		summonerNameWithTeam: 'TL Eyla',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/SupportEyla'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/eylaa'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645007499326_TL_EYLA_512x512.png'
	},
	'TL Rhino': {
		summonerName: 'Rhino',
		summonerNameWithTeam: 'TL Rhino',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/PocketRhinolol'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/pocketrhinolol'
			}
		],
		image: null
	},
	'TSM Huni': {
		summonerName: 'Huni',
		summonerNameWithTeam: 'TSM Huni',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Huni'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/huni'
			},
			{
				platform: 'youtube',
				link: 'https://youtube.com/c/Hunilolpro'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645007920141_HUNI.png'
	},
	'TSM Spica': {
		summonerName: 'Spica',
		summonerNameWithTeam: 'TSM Spica',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Spicalol'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/spicalol'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645008192855_SPICA.png'
	},
	'TSM Keaiduo': {
		summonerName: 'Keaiduo',
		summonerNameWithTeam: 'TSM Keaiduo',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/tsm_keaiduo'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/tsm_keaiduo'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645007963670_KEAIUDO.png'
	},
	'TSM Tactical': {
		summonerName: 'Tactical',
		summonerNameWithTeam: 'TSM Tactical',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Tactical'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/tactical'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645008228606_TACTICAL.png'
	},
	'TSM Shenyi': {
		summonerName: 'Shenyi',
		summonerNameWithTeam: 'TSM Shenyi',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/tsm_shenyi'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645008163057_SHENYI.png'
	},
	'TSM V1per': {
		summonerName: 'V1per',
		summonerNameWithTeam: 'TSM V1per',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/hiitsviper'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/viper'
			},
			{
				platform: 'youtube',
				link: 'https://youtube.com/channel/UCbhTDvxYDkkhDDZG6PGSV3A'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645008337364_TSM_V1PER_JERSEY_512x512.png'
	},
	'TSM Hyper': {
		summonerName: 'Hyper',
		summonerNameWithTeam: 'TSM Hyper',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/WARMACHINEHYPER'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/warmachinehyper'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645008250836_TSM_HYPER_JERSEY_512x512.png'
	},
	'TSM Yursan': {
		summonerName: 'Yursan',
		summonerNameWithTeam: 'TSM Yursan',
		socialLinks: [],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645008362538_TSM_YURSAN_JERSEY_512x512.png'
	},
	'TSM Takeover': {
		summonerName: 'Takeover',
		summonerNameWithTeam: 'TSM Takeover',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/tsm_takeover'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645008309825_TSM_TAKEOVER_JERSEY_512x512.png'
	},
	'TSM Instinct': {
		summonerName: 'Instinct',
		summonerNameWithTeam: 'TSM Instinct',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/InstincttLoL'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645008288713_TSM_INSTINCT_JERSEY_512x512.png'
	},
	'100X Sniper': {
		summonerName: 'Sniper',
		summonerNameWithTeam: '100X Sniper',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/GeneralSniperr'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/generalsniper'
			},
			{
				platform: 'youtube',
				link: 'https://youtube.com/c/GeneralSniperLoL'
			}
		],
		image: null
	},
	'100X Fanatiik': {
		summonerName: 'Fanatiik',
		summonerNameWithTeam: '100X Fanatiik',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/FanatiiK_Lol'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/fanatiiklol'
			}
		],
		image: null
	},
	'DIG Insanity': {
		summonerName: 'Insanity',
		summonerNameWithTeam: 'DIG Insanity',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/insanitylol'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/insanity'
			}
		],
		image: null
	},
	'GG Array': {
		summonerName: 'Array',
		summonerNameWithTeam: 'GG Array',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/array_lol'
			}
		],
		image: null
	},
	'EG donbray': {
		summonerName: 'donbray',
		summonerNameWithTeam: 'EG donbray',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/donbraylol'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/donbraylol'
			}
		],
		image: null
	},
	'100X Sword': {
		summonerName: 'Sword',
		summonerNameWithTeam: '100X Sword',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/lol_sword'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/sword_lol'
			}
		],
		image: null
	},
	'DARE Censored': {
		summonerName: 'Censored',
		summonerNameWithTeam: 'DARE Censored',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/censoredmercy'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/censoredmercy'
			}
		],
		image: null
	},
	'TFTS Leemo': {
		summonerName: 'Leemo',
		summonerNameWithTeam: 'TFTS Leemo',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/LeemoLoL'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/leemolol'
			},
			{
				platform: 'youtube',
				link: 'https://youtube.com/channel/UC4YFy-D2OHa1WqderEg3eiQ?'
			}
		],
		image: null
	},
	'DARE Enigma': {
		summonerName: 'Enigma',
		summonerNameWithTeam: 'DARE Enigma',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/EnigmaQc99'
			}
		],
		image: null
	},
	'100 BMFX': {
		summonerName: 'BMFX',
		summonerNameWithTeam: '100 BMFX',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Bmfxlol'
			}
		],
		image: null
	},
	'DARE Blossoms': {
		summonerName: 'Blossoms',
		summonerNameWithTeam: 'DARE Blossoms',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Blossomslolx'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/haoyuevt'
			}
		],
		image: null
	},
	'EGP Faisal': {
		summonerName: 'Faisal',
		summonerNameWithTeam: 'EGP Faisal',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/FaisalLoL9'
			}
		],
		image: null
	},
	'300 Perry': {
		summonerName: 'Perry',
		summonerNameWithTeam: '300 Perry',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/perryjglol'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/perryjglol'
			}
		],
		image: null
	},
	'EGP Leo99': {
		summonerName: 'Leo99',
		summonerNameWithTeam: 'EGP Leo99',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Leo_LoL9'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/babyleo99'
			}
		],
		image: null
	},
	'FEAR Sketch': {
		summonerName: 'Sketch',
		summonerNameWithTeam: 'FEAR Sketch',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Sketchdreams'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/sketchdreams'
			}
		],
		image: null
	},
	'EGP Daption': {
		summonerName: 'Daption',
		summonerNameWithTeam: 'EGP Daption',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/lolDaption'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/daption'
			}
		],
		image: null
	},
	'IMA animegirl': {
		summonerName: 'animegirl',
		summonerNameWithTeam: 'IMA animegirl',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/animegirl_lol'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/animegirl2007'
			}
		],
		image: null
	},
	'IMA Winston': {
		summonerName: 'Winston',
		summonerNameWithTeam: 'IMA Winston',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/winstonleague'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/winston_lol'
			}
		],
		image: null
	},
	'IMA shochi': {
		summonerName: 'shochi',
		summonerNameWithTeam: 'IMA shochi',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/lolshochi'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/lolshochi'
			}
		],
		image: null
	},
	'CLG Meech': {
		summonerName: 'Meech',
		summonerNameWithTeam: 'CLG Meech',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/meechyyy2'
			}
		],
		image: null
	},
	'C9 Trevor': {
		summonerName: 'Trevor',
		summonerNameWithTeam: 'C9 Trevor',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/trevor1lol'
			}
		],
		image: null
	},
	'MU Niles': {
		summonerName: 'Niles',
		summonerNameWithTeam: 'MU Niles',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/NilesLol'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/niles'
			}
		],
		image: null
	},
	'MU Kind Jungle': {
		summonerName: 'Kind Jungle',
		summonerNameWithTeam: 'MU Kind Jungle',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Kind_Jungle'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/kindjunglelol'
			}
		],
		image: null
	},
	'MU Odd Orange': {
		summonerName: 'Odd Orange',
		summonerNameWithTeam: 'MU Odd Orange',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/TheOddOrange'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/TheOddOrange'
			},
			{
				platform: 'youtube',
				link: 'https://youtube.com/channel/UCN0lgneW5k7RX541XPbN4mA'
			}
		],
		image: null
	},
	'MU Getback': {
		summonerName: 'Getback',
		summonerNameWithTeam: 'MU Getback',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/getback71'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/getback71'
			}
		],
		image: null
	},
	'MU Azog': {
		summonerName: 'Azog',
		summonerNameWithTeam: 'MU Azog',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Azoglol'
			}
		],
		image: null
	},
	'MU EvanRL': {
		summonerName: 'EvanRL',
		summonerNameWithTeam: 'MU EvanRL',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/EvanrlLoL'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/evanrl'
			}
		],
		image: null
	},
	'MU Shady': {
		summonerName: 'Shady',
		summonerNameWithTeam: 'MU Shady',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/ShadyL0L'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/shadyl0l'
			}
		],
		image: null
	},
	'BAY Bejjaniii': {
		summonerName: 'Bejjaniii',
		summonerNameWithTeam: 'BAY Bejjaniii',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/bejjaniii'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/bejjaniii'
			},
			{
				platform: 'youtube',
				link: 'https://youtube.com/channel/UCVRsyw0LIKZtLVGK5tvL6zA'
			}
		],
		image: null
	},
	'BAY Dragonmin': {
		summonerName: 'Dragonmin',
		summonerNameWithTeam: 'BAY Dragonmin',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/DragonminkimLOL'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/Dragonminkim'
			}
		],
		image: null
	},
	'BAY Seranok': {
		summonerName: 'Seranok',
		summonerNameWithTeam: 'BAY Seranok',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Seranoklol'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/seranok'
			}
		],
		image: null
	},
	'BAY SophistSage': {
		summonerName: 'SophistSage',
		summonerNameWithTeam: 'BAY SophistSage',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/SophistSageLoL'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/sophistsage'
			}
		],
		image: null
	},
	'BAY Braine': {
		summonerName: 'Braine',
		summonerNameWithTeam: 'BAY Braine',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/SwordbIue'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/swordblue'
			}
		],
		image: null
	},
	'3P Dinka': {
		summonerName: 'Dinka',
		summonerNameWithTeam: '3P Dinka',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/okdinka'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/okdinka'
			}
		],
		image: null
	},
	Creamcheese: {
		summonerName: 'Creamcheese',
		summonerNameWithTeam: 'Creamcheese',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/svmmylol'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/svmmylol'
			}
		],
		image: null
	},
	'DNHA CptShrimps': {
		summonerName: 'CptShrimps',
		summonerNameWithTeam: 'DNHA CptShrimps',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/CptShrimps'
			}
		],
		image: null
	},
	'DNHA Duoking1': {
		summonerName: 'Duoking1',
		summonerNameWithTeam: 'DNHA Duoking1',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/duoking1'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/duoking1'
			}
		],
		image: null
	},
	'NOT Dragoon': {
		summonerName: 'Dragoon',
		summonerNameWithTeam: 'NOT Dragoon',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/DragoonL0L'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/dragoon'
			}
		],
		image: null
	},
	'NOT Gryffinn': {
		summonerName: 'Gryffinn',
		summonerNameWithTeam: 'NOT Gryffinn',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/GryffinnLoL'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/Gryffinn'
			},
			{
				platform: 'youtube',
				link: 'https://youtube.com/channel/UCf-okMJuT12sRkA1MIPXobA'
			}
		],
		image: null
	},
	'NOT Blazze': {
		summonerName: 'Blazze',
		summonerNameWithTeam: 'NOT Blazze',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/LoLBlazze'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/lolblazze'
			}
		],
		image: null
	},
	'JK Scoooped': {
		summonerName: 'Scoooped',
		summonerNameWithTeam: 'JK Scoooped',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/ScooopedLoL'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/scoooped'
			}
		],
		image: null
	},
	'NOT Jishuka': {
		summonerName: 'Jishuka',
		summonerNameWithTeam: 'NOT Jishuka',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Pluxlol'
			}
		],
		image: null
	},
	'RAD Porsche': {
		summonerName: 'Porsche',
		summonerNameWithTeam: 'RAD Porsche',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/TCporsche'
			}
		],
		image: null
	},
	'RAD Bluster': {
		summonerName: 'Bluster',
		summonerNameWithTeam: 'RAD Bluster',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Bluster_1'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/blusterjg'
			}
		],
		image: null
	},
	'RAD Crimson': {
		summonerName: 'Crimson',
		summonerNameWithTeam: 'RAD Crimson',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/myswordcrimson'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/myswordcrimson'
			}
		],
		image: null
	},
	'300 Raheen': {
		summonerName: 'Raheen',
		summonerNameWithTeam: '300 Raheen',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/RaheenLoL'
			}
		],
		image: null
	},
	'RAD Lightpulse': {
		summonerName: 'Lightpulse',
		summonerNameWithTeam: 'RAD Lightpulse',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/LightpulseLol'
			}
		],
		image: null
	},
	'RAD Nova': {
		summonerName: 'Nova',
		summonerNameWithTeam: 'RAD Nova',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/NovaBottt'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/novabotlol'
			}
		],
		image: null
	},
	'SN Firetheft': {
		summonerName: 'Firetheft',
		summonerNameWithTeam: 'SN Firetheft',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Firetheftlol'
			}
		],
		image: null
	},
	'CLG Baekh0': {
		summonerName: 'Baekh0',
		summonerNameWithTeam: 'CLG Baekh0',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/baekhokrr'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/baekho3'
			}
		],
		image: null
	},
	'SN Ariendel': {
		summonerName: 'Ariendel',
		summonerNameWithTeam: 'SN Ariendel',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Ariendel_lol'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/ariendel_lol'
			},
			{
				platform: 'youtube',
				link: 'https://youtube.com/channel/UC44D6qse4l8_Cf2mK6Icrww'
			}
		],
		image: null
	},
	'SN Saico': {
		summonerName: 'Saico',
		summonerNameWithTeam: 'SN Saico',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/lolSaico'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/lolsaico'
			}
		],
		image: null
	},
	'SN Pseudo': {
		summonerName: 'Pseudo',
		summonerNameWithTeam: 'SN Pseudo',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/lolpseudo'
			}
		],
		image: null
	},
	'TG Cozy': {
		summonerName: 'Cozy',
		summonerNameWithTeam: 'TG Cozy',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/lol_cozy'
			}
		],
		image: null
	},
	'FEAR Trixter': {
		summonerName: 'Trixter',
		summonerNameWithTeam: 'FEAR Trixter',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Trixterjg'
			}
		],
		image: null
	},
	'EGP Doxa': {
		summonerName: 'Doxa',
		summonerNameWithTeam: 'EGP Doxa',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/lol_doxa'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/lol_doxa'
			},
			{
				platform: 'youtube',
				link: 'https://youtube.com/channel/UCsBjY-mHpH80hN98S24Kttw'
			}
		],
		image: null
	},
	'TG Links': {
		summonerName: 'Links',
		summonerNameWithTeam: 'TG Links',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/links57'
			}
		],
		image: null
	},
	'TG Gweiss': {
		summonerName: 'Gweiss',
		summonerNameWithTeam: 'TG Gweiss',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/gweisslol'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/Gweiss96'
			}
		],
		image: null
	},
	'AOER Nemesis9': {
		summonerName: 'Nemesis9',
		summonerNameWithTeam: 'AOER Nemesis9',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/na_nemesis'
			}
		],
		image: null
	},
	'TA Nightstar': {
		summonerName: 'Nightstar',
		summonerNameWithTeam: 'TA Nightstar',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/NightstarLoL'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/nightstarlol'
			},
			{
				platform: 'youtube',
				link: 'https://youtube.com/channel/UCCmMIGHLjDAvzgyZ3hFAnUg'
			}
		],
		image: null
	},
	'TA Chookies': {
		summonerName: 'Chookies',
		summonerNameWithTeam: 'TA Chookies',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/chookieslol'
			}
		],
		image: null
	},
	'UCI Berik': {
		summonerName: 'Berik',
		summonerNameWithTeam: 'UCI Berik',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/berikeggie'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/beriklol'
			}
		],
		image: null
	},
	'UCI Cinna': {
		summonerName: 'Cinna',
		summonerNameWithTeam: 'UCI Cinna',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/lolcinnabread'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/cinnamonbreaddd'
			}
		],
		image: null
	},
	'UCI sahori': {
		summonerName: 'sahori',
		summonerNameWithTeam: 'UCI sahori',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/lolsahori'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/sahori'
			}
		],
		image: null
	},
	'UCI dtro18': {
		summonerName: 'dtro18',
		summonerNameWithTeam: 'UCI dtro18',
		socialLinks: [
			{
				platform: 'twitch',
				link: 'https://twitch.tv/dtro18'
			}
		],
		image: null
	},
	'UCI Kim Down': {
		summonerName: 'Kim Down',
		summonerNameWithTeam: 'UCI Kim Down',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/KimDownLoL'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/kimdown99'
			}
		],
		image: null
	},
	'C9 Allorim': {
		summonerName: 'Allorim',
		summonerNameWithTeam: 'C9 Allorim',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Allorim'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/allorim'
			},
			{
				platform: 'youtube',
				link: 'https://youtube.com/user/AllorimLoL'
			}
		],
		image: null
	},
	'WC Griffin': {
		summonerName: 'Griffin',
		summonerNameWithTeam: 'WC Griffin',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/lol_Wiggily'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/wiggily_lol'
			}
		],
		image: null
	},
	'WC Strompest': {
		summonerName: 'Strompest',
		summonerNameWithTeam: 'WC Strompest',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Strompest'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/strompest'
			},
			{
				platform: 'youtube',
				link: 'https://youtube.com/channel/UCD7CMRY-ShDuOSRwkunzXDg'
			}
		],
		image: null
	},
	'300 Minui': {
		summonerName: 'Minui',
		summonerNameWithTeam: '300 Minui',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Minuilol'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/minuilol'
			}
		],
		image: null
	},
	'WC Pockus': {
		summonerName: 'Pockus',
		summonerNameWithTeam: 'WC Pockus',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Pockusss'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/lolpockus'
			}
		],
		image: null
	},
	'WC Jeremy': {
		summonerName: 'Jeremy',
		summonerNameWithTeam: 'WC Jeremy',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/lolJeremyyy'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/loljeremyy'
			}
		],
		image: null
	},
	'WIN Mabud': {
		summonerName: 'Mabud',
		summonerNameWithTeam: 'WIN Mabud',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Mabudlol'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/mabud'
			}
		],
		image: null
	},
	'WIN Mordio': {
		summonerName: 'Mordio',
		summonerNameWithTeam: 'WIN Mordio',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/MordioYang'
			}
		],
		image: null
	},
	'WIN Avano': {
		summonerName: 'Avano',
		summonerNameWithTeam: 'WIN Avano',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/__Avano'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/avano'
			}
		],
		image: null
	},
	'WIN Saint GRIMM': {
		summonerName: 'Saint GRIMM',
		summonerNameWithTeam: 'WIN Saint GRIMM',
		socialLinks: [
			{
				platform: 'twitch',
				link: 'https://twitch.tv/GrimmmLOL'
			}
		],
		image: null
	},
	'WIN Vex': {
		summonerName: 'Vex',
		summonerNameWithTeam: 'WIN Vex',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/KingVex3'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/ikingvex'
			}
		],
		image: null
	},
	'WU Kenji': {
		summonerName: 'Kenji',
		summonerNameWithTeam: 'WU Kenji',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/SrkenjiLoL'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/srkenji'
			},
			{
				platform: 'youtube',
				link: 'https://youtube.com/channel/UCVSPmFFqDWI2riLWJqgVclw'
			}
		],
		image: null
	},
	'EST Acce': {
		summonerName: 'Acce',
		summonerNameWithTeam: 'EST Acce',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/acce1111'
			},
			{
				platform: 'twitch',
				link: 'https://www.twitch.tv/acce11'
			}
		],
		image: null
	},
	'ISG Grell': {
		summonerName: 'Grell',
		summonerNameWithTeam: 'ISG Grell',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/GrellLol'
			},
			{
				platform: 'twitch',
				link: 'https://www.twitch.tv/grelllol'
			}
		],
		image: null
	},
	'AK Leza': {
		summonerName: 'Leza',
		summonerNameWithTeam: 'AK Leza',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/leza_lol'
			}
		],
		image: null
	},
	'EST Bvoy': {
		summonerName: 'Bvoy',
		summonerNameWithTeam: 'EST Bvoy',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Bvoylol'
			}
		],
		image: null
	},
	'TSM Mia': {
		summonerName: 'Mia',
		summonerNameWithTeam: 'TSM Mia',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Mialol98'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1643396680140_Mia-1.png'
	},
	'INF Jauny': {
		summonerName: 'Jauny',
		summonerNameWithTeam: 'INF Jauny',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/JaunyLoL'
			}
		],
		image: null
	},
	'INF SolidSnake': {
		summonerName: 'SolidSnake',
		summonerNameWithTeam: 'INF SolidSnake',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/SolidSnakeLoL'
			}
		],
		image: null
	},
	'INF cody': {
		summonerName: 'cody',
		summonerNameWithTeam: 'INF cody',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Codyei3'
			},
			{
				platform: 'twitch',
				link: 'https://www.twitch.tv/1c0dy'
			}
		],
		image: null
	},
	'INF Kz': {
		summonerName: 'Kz',
		summonerNameWithTeam: 'INF Kz',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Kzz_lol'
			},
			{
				platform: 'twitch',
				link: 'https://www.twitch.tv/kz_lol'
			}
		],
		image: null
	},
	'INF Ackerman': {
		summonerName: 'Ackerman',
		summonerNameWithTeam: 'INF Ackerman',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/ACKSUP1'
			}
		],
		image: null
	},
	'AK Zothve': {
		summonerName: 'Zothve',
		summonerNameWithTeam: 'AK Zothve',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/zzzothve'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/zothve'
			}
		],
		image: null
	},
	'AK Hoglet': {
		summonerName: 'Hoglet',
		summonerNameWithTeam: 'AK Hoglet',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/hoglet99'
			},
			{
				platform: 'twitch',
				link: 'https://witch.tv/hoglet99'
			}
		],
		image: null
	},
	'AK Kiefer': {
		summonerName: 'Kiefer',
		summonerNameWithTeam: 'AK Kiefer',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Kieferlol1'
			}
		],
		image: null
	},
	'AK Pancake': {
		summonerName: 'Pancake',
		summonerNameWithTeam: 'AK Pancake',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Pancakelol_'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/pancaak3'
			}
		],
		image: null
	},
	'AK Luci': {
		summonerName: 'Luci',
		summonerNameWithTeam: 'AK Luci',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/luciii_lol'
			}
		],
		image: null
	},
	'ISG ADD': {
		summonerName: 'ADD',
		summonerNameWithTeam: 'ISG ADD',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/LoLADD12'
			},
			{
				platform: 'twitch',
				link: 'https://www.twitch.tv/lol_add'
			}
		],
		image: null
	},
	'R7 SoHwan': {
		summonerName: 'SoHwan',
		summonerNameWithTeam: 'R7 SoHwan',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/sohwan96'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/sohwan9'
			}
		],
		image: null
	},
	'R7 Oddie': {
		summonerName: 'Oddie',
		summonerNameWithTeam: 'R7 Oddie',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/OddieLAN'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/oddielan'
			}
		],
		image: null
	},
	'GET Warangelus': {
		summonerName: 'Warangelus',
		summonerNameWithTeam: 'GET Warangelus',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/1warangelus'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/warangelus'
			}
		],
		image: null
	},
	'R7 Ceo': {
		summonerName: 'Ceo',
		summonerNameWithTeam: 'R7 Ceo',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/ceolol_'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/ceol0l'
			}
		],
		image: null
	},
	'R7 Slow': {
		summonerName: 'Slow',
		summonerNameWithTeam: 'R7 Slow',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/slowqt'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/slowqt'
			}
		],
		image: null
	},
	'CQ Playtest 1': {
		summonerName: 'CQ Playtest 1',
		summonerNameWithTeam: 'CQ Playtest 1',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/RiotWhoopley'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/whoopley'
			}
		],
		image: null
	},
	'CQ Playtest 2': {
		summonerName: 'CQ Playtest 2',
		summonerNameWithTeam: 'CQ Playtest 2',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/RiotWhoopley'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/whoopley'
			}
		],
		image: null
	},
	'CQ Playtest 3': {
		summonerName: 'CQ Playtest 3',
		summonerNameWithTeam: 'CQ Playtest 3',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/RiotWhoopley'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/whoopley'
			}
		],
		image: null
	},
	'CQ Playtest 4': {
		summonerName: 'CQ Playtest 4',
		summonerNameWithTeam: 'CQ Playtest 4',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/RiotWhoopley'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/whoopley'
			}
		],
		image: null
	},
	'CQ Playtest 5': {
		summonerName: 'CQ Playtest 5',
		summonerNameWithTeam: 'CQ Playtest 5',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/RiotWhoopley'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/whoopley'
			}
		],
		image: null
	},
	'CQ Playtest 6': {
		summonerName: 'CQ Playtest 6',
		summonerNameWithTeam: 'CQ Playtest 6',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/RiotWhoopley'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/whoopley'
			}
		],
		image: null
	},
	'CQ Playtest 7': {
		summonerName: 'CQ Playtest 7',
		summonerNameWithTeam: 'CQ Playtest 7',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/RiotWhoopley'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/whoopley'
			}
		],
		image: null
	},
	'CQ Playtest 8': {
		summonerName: 'CQ Playtest 8',
		summonerNameWithTeam: 'CQ Playtest 8',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/RiotWhoopley'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/whoopley'
			}
		],
		image: null
	},
	'CQ Playtest 9': {
		summonerName: 'CQ Playtest 9',
		summonerNameWithTeam: 'CQ Playtest 9',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/RiotWhoopley'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/whoopley'
			}
		],
		image: null
	},
	'CQ Playtest 10': {
		summonerName: 'CQ Playtest 10',
		summonerNameWithTeam: 'CQ Playtest 10',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/RiotWhoopley'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/whoopley'
			}
		],
		image: null
	},
	'CQ Playtest 11': {
		summonerName: 'CQ Playtest 11',
		summonerNameWithTeam: 'CQ Playtest 11',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/RiotWhoopley'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/whoopley'
			}
		],
		image: null
	},
	'CQ Playtest 12': {
		summonerName: 'CQ Playtest 12',
		summonerNameWithTeam: 'CQ Playtest 12',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/RiotWhoopley'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/whoopley'
			}
		],
		image: null
	},
	'CQ Playtest 13': {
		summonerName: 'CQ Playtest 13',
		summonerNameWithTeam: 'CQ Playtest 13',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/RiotWhoopley'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/whoopley'
			}
		],
		image: null
	},
	'CQ Playtest 14': {
		summonerName: 'CQ Playtest 14',
		summonerNameWithTeam: 'CQ Playtest 14',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/RiotWhoopley'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/whoopley'
			}
		],
		image: null
	},
	'CQ Playtest 15': {
		summonerName: 'CQ Playtest 15',
		summonerNameWithTeam: 'CQ Playtest 15',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/RiotWhoopley'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/whoopley'
			}
		],
		image: null
	},
	'CQ Playtest 16': {
		summonerName: 'CQ Playtest 16',
		summonerNameWithTeam: 'CQ Playtest 16',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/RiotWhoopley'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/whoopley'
			}
		],
		image: null
	},
	'CQ Playtest 17': {
		summonerName: 'CQ Playtest 17',
		summonerNameWithTeam: 'CQ Playtest 17',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/RiotWhoopley'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/whoopley'
			}
		],
		image: null
	},
	'CQ Playtest 18': {
		summonerName: 'CQ Playtest 18',
		summonerNameWithTeam: 'CQ Playtest 18',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/RiotWhoopley'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/whoopley'
			}
		],
		image: null
	},
	'CQ Playtest 19': {
		summonerName: 'CQ Playtest 19',
		summonerNameWithTeam: 'CQ Playtest 19',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/RiotWhoopley'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/whoopley'
			}
		],
		image: null
	},
	'CQ Playtest 20': {
		summonerName: 'CQ Playtest 20',
		summonerNameWithTeam: 'CQ Playtest 20',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/RiotWhoopley'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/whoopley'
			}
		],
		image: null
	},
	'CLG Damonte': {
		summonerName: 'Damonte',
		summonerNameWithTeam: 'CLG Damonte',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Damonte'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/damonte'
			},
			{
				platform: 'youtube',
				link: 'https://youtube.com/c/DamonteGaming'
			}
		],
		image: null
	},
	'100X Mist': {
		summonerName: 'Mist',
		summonerNameWithTeam: '100X Mist',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Mist6ix'
			}
		],
		image: null
	},
	'C9 Jensen': {
		summonerName: 'Jensen',
		summonerNameWithTeam: 'C9 Jensen',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Jensen'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/jensen'
			},
			{
				platform: 'youtube',
				link: 'https://youtube.com/c/Jensenlol'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1655450133707_JENSEN.png'
	},
	Pobelter: {
		summonerName: 'Pobelter',
		summonerNameWithTeam: 'Pobelter',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Pobelter'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/pobelter'
			},
			{
				platform: 'youtube',
				link: 'https://youtube.com/user/Pobelt'
			}
		],
		image: null
	},
	'EG Smoothie': {
		summonerName: 'Smoothie',
		summonerNameWithTeam: 'EG Smoothie',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Smoothie'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/smoothie'
			},
			{
				platform: 'youtube',
				link: 'https://youtube.com/c/SmoothieLoL'
			}
		],
		image: null
	},
	Doublelift: {
		summonerName: 'Doublelift',
		summonerNameWithTeam: 'Doublelift',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Doublelift1'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/doublelift'
			},
			{
				platform: 'youtube',
				link: 'https://youtube.com/c/doublelift'
			}
		],
		image: null
	},
	Sneaky: {
		summonerName: 'Sneaky',
		summonerNameWithTeam: 'Sneaky',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Sneaky'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/sneakylol'
			},
			{
				platform: 'youtube',
				link: 'https://youtube.com/c/SneakyLoL'
			}
		],
		image: null
	},
	Meteos: {
		summonerName: 'Meteos',
		summonerNameWithTeam: 'Meteos',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/MeteosLoL'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/meteos'
			}
		],
		image: null
	},
	'100 Goldenglue': {
		summonerName: 'Goldenglue',
		summonerNameWithTeam: '100 Goldenglue',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Goldenglue'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/goldenglue'
			},
			{
				platform: 'youtube',
				link: 'https://youtube.com/user/lolgoldenglue'
			}
		],
		image: null
	},
	'GG Akaadian': {
		summonerName: 'Akaadian',
		summonerNameWithTeam: 'GG Akaadian',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Akaadian'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/Akaadian'
			},
			{
				platform: 'youtube',
				link: 'https://youtube.com/c/akaadian'
			}
		],
		image: null
	},
	'BOG RJS': {
		summonerName: 'RJS',
		summonerNameWithTeam: 'BOG RJS',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/rjsdndgod'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/rjsmid'
			},
			{
				platform: 'youtube',
				link: 'https://youtube.com/channel/UCDCrDvNTdFTAKKCMpBpluRQ'
			}
		],
		image: null
	},
	Lourlo: {
		summonerName: 'Lourlo',
		summonerNameWithTeam: 'Lourlo',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Lourlo'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/lourlo'
			},
			{
				platform: 'youtube',
				link: 'https://youtube.com/c/Lourlo'
			}
		],
		image: null
	},
	'IMT Dardoch': {
		summonerName: 'Dardoch',
		summonerNameWithTeam: 'IMT Dardoch',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Dardoch'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/dardoch'
			}
		],
		image: null
	},
	'CLG Apollo': {
		summonerName: 'Apollo',
		summonerNameWithTeam: 'CLG Apollo',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/ApolloPrice'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/apollo_price'
			}
		],
		image: null
	},
	'CLG Mash': {
		summonerName: 'Mash',
		summonerNameWithTeam: 'CLG Mash',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/dontmashme'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/mash'
			}
		],
		image: null
	},
	'DARE Snow2': {
		summonerName: 'Snow2',
		summonerNameWithTeam: 'DARE Snow2',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'http://twitter.com/lol_Snow2'
			},
			{
				platform: 'twitch',
				link: 'http://twitch.tv/lolsnow2'
			}
		],
		image: null
	},
	'SN im baekho': {
		summonerName: 'im baekho',
		summonerNameWithTeam: 'SN im baekho',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'http://twitter.com/baekhokrr'
			},
			{
				platform: 'twitch',
				link: 'http://twitch.tv/baekho3'
			}
		],
		image: null
	},
	'TG Matty': {
		summonerName: 'Matty',
		summonerNameWithTeam: 'TG Matty',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'http://twitter.com/lolMattyy'
			},
			{
				platform: 'twitch',
				link: 'http://twitch.tv/lol_matty'
			}
		],
		image: null
	},
	'XTN Keine': {
		summonerName: 'Keine',
		summonerNameWithTeam: 'XTN Keine',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Mid_Keine'
			},
			{
				platform: 'twitch',
				link: 'https://www.twitch.tv/wnscjf7753'
			}
		],
		image: null
	},
	'AZE Lonely': {
		summonerName: 'Lonely',
		summonerNameWithTeam: 'AZE Lonely',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/gksrbwns1004'
			}
		],
		image: null
	},
	'AZE 5Kid': {
		summonerName: '5Kid',
		summonerNameWithTeam: 'AZE 5Kid',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/jhokdd'
			}
		],
		image: null
	},
	'XTN Archer': {
		summonerName: 'Archer',
		summonerNameWithTeam: 'XTN Archer',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Archer980917'
			},
			{
				platform: 'twitch',
				link: 'https://www.twitch.tv/archer980917'
			}
		],
		image: null
	},
	'ISG Jelly': {
		summonerName: 'Jelly',
		summonerNameWithTeam: 'ISG Jelly',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/jellylol_'
			}
		],
		image: null
	},
	'GET Plugo': {
		summonerName: 'Plugo',
		summonerNameWithTeam: 'GET Plugo',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Plugolol'
			}
		],
		image: null
	},
	'XTN Zerito': {
		summonerName: 'Zerito',
		summonerNameWithTeam: 'XTN Zerito',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/zzzerito'
			},
			{
				platform: 'twitch',
				link: 'https://www.twitch.tv/zeritoo'
			}
		],
		image: null
	},
	'ISG Gavotto': {
		summonerName: 'Gavotto',
		summonerNameWithTeam: 'ISG Gavotto',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/GavottoLA'
			},
			{
				platform: 'twitch',
				link: 'https://www.twitch.tv/gavotto'
			}
		],
		image: null
	},
	'XTN camilo': {
		summonerName: 'camilo',
		summonerNameWithTeam: 'XTN camilo',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/camilonicolau15'
			}
		],
		image: null
	},
	'XTN Bardito': {
		summonerName: 'Bardito',
		summonerNameWithTeam: 'XTN Bardito',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/ssanti_martin'
			}
		],
		image: null
	},
	'GET Fix': {
		summonerName: 'Fix',
		summonerNameWithTeam: 'GET Fix',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/fixlol1'
			}
		],
		image: null
	},
	'AZE Aloned': {
		summonerName: 'Aloned',
		summonerNameWithTeam: 'AZE Aloned',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Alonedlol'
			}
		],
		image: null
	},
	'AZE Straight': {
		summonerName: 'Straight',
		summonerNameWithTeam: 'AZE Straight',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Straightlol_'
			},
			{
				platform: 'twitch',
				link: 'https://www.twitch.tv/elstraight'
			}
		],
		image: null
	},
	'GET Fs': {
		summonerName: 'Fs',
		summonerNameWithTeam: 'GET Fs',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/FROSTSTRIKE1'
			}
		],
		image: null
	},
	Svenskeren: {
		summonerName: 'Svenskeren',
		summonerNameWithTeam: 'Svenskeren',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Svenskeren1'
			},
			{
				platform: 'twitch',
				link: 'https://www.twitch.tv/svenskeren'
			}
		],
		image: null
	},
	Hauntzer: {
		summonerName: 'Hauntzer',
		summonerNameWithTeam: 'Hauntzer',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/htzr'
			},
			{
				platform: 'twitch',
				link: 'https://www.twitch.tv/hauntzer'
			}
		],
		image: null
	},
	Xmithie: {
		summonerName: 'Xmithie',
		summonerNameWithTeam: 'Xmithie',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Xmithie'
			},
			{
				platform: 'twitch',
				link: 'https://www.twitch.tv/xmithie'
			}
		],
		image: null
	},
	'CLG Solo': {
		summonerName: 'Solo',
		summonerNameWithTeam: 'CLG Solo',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/SoloLCS'
			},
			{
				platform: 'twitch',
				link: 'https://www.twitch.tv/SoloLCS'
			}
		],
		image: null
	},
	AnDa: {
		summonerName: 'AnDa',
		summonerNameWithTeam: 'AnDa',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/AnDa'
			},
			{
				platform: 'twitch',
				link: 'https://www.twitch.tv/AnDa'
			}
		],
		image: null
	},
	Stunt: {
		summonerName: 'Stunt',
		summonerNameWithTeam: 'Stunt',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/stuntopolis'
			},
			{
				platform: 'twitch',
				link: 'https://www.twitch.tv/stunt'
			},
			{
				platform: 'youtube',
				link: 'https://www.youtube.com/user/stuntopia'
			}
		],
		image: null
	},
	'100 Will': {
		summonerName: 'Will',
		summonerNameWithTeam: '100 Will',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Will_Na1'
			},
			{
				platform: 'twitch',
				link: 'https://www.twitch.tv/playemotional'
			}
		],
		image: null
	},
	'AZE Dimitry': {
		summonerName: 'Dimitry',
		summonerNameWithTeam: 'AZE Dimitry',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Dimitrylol'
			},
			{
				platform: 'twitch',
				link: 'https://www.twitch.tv/dimitrylol'
			}
		],
		image: null
	},
	'EST Lyg': {
		summonerName: 'Lyg',
		summonerNameWithTeam: 'EST Lyg',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/1lyg1'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/1lyg'
			}
		],
		image: null
	},
	'INF Brayaron': {
		summonerName: 'Brayaron',
		summonerNameWithTeam: 'INF Brayaron',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/brayaronlol'
			}
		],
		image: null
	},
	'AK Skeeto': {
		summonerName: 'Skeeto',
		summonerNameWithTeam: 'AK Skeeto',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/skeetolol'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/skeetolol'
			}
		],
		image: null
	},
	'ISG Flare': {
		summonerName: 'Flare',
		summonerNameWithTeam: 'ISG Flare',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/midflare'
			}
		],
		image: null
	},
	'R7 Daiky': {
		summonerName: 'Daiky',
		summonerNameWithTeam: 'R7 Daiky',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/daiky_17'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/daiky7089'
			}
		],
		image: null
	},
	'R7 Cepted': {
		summonerName: 'Cepted',
		summonerNameWithTeam: 'R7 Cepted',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/east8568'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/cepted8568'
			}
		],
		image: null
	},
	'XTN Horus': {
		summonerName: 'Horus',
		summonerNameWithTeam: 'XTN Horus',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/horuslol'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/horus1'
			}
		],
		image: null
	},
	'AGT Keel': {
		summonerName: 'Keel',
		summonerNameWithTeam: 'AGT Keel',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Keel7lol'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/frostynomad'
			}
		],
		image: null
	},
	'BOG dshao': {
		summonerName: 'dshao',
		summonerNameWithTeam: 'BOG dshao',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/zigLoL'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/zig'
			}
		],
		image: null
	},
	'BOG Inori': {
		summonerName: 'Inori',
		summonerNameWithTeam: 'BOG Inori',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Inorilol'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/inori'
			},
			{
				platform: 'youtube',
				link: 'https://youtube.com/user/LIquidInori'
			}
		],
		image: null
	},
	'BOG Tuesday': {
		summonerName: 'Tuesday',
		summonerNameWithTeam: 'BOG Tuesday',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Tuesday_lol'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/Tuesday_lol'
			}
		],
		image: null
	},
	'BOG Benji': {
		summonerName: 'Benji',
		summonerNameWithTeam: 'BOG Benji',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/BenjiL0L'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/benji'
			}
		],
		image: null
	},
	'BOG Hooks': {
		summonerName: 'Hooks',
		summonerNameWithTeam: 'BOG Hooks',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Hookslol'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/osama'
			}
		],
		image: null
	},
	'WIN FrostForest': {
		summonerName: 'FrostForest',
		summonerNameWithTeam: 'WIN FrostForest',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/FrostForestt'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/frostforest4'
			}
		],
		image: null
	},
	'WIN Paralisys': {
		summonerName: 'Paralisys',
		summonerNameWithTeam: 'WIN Paralisys',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Paralisys_'
			}
		],
		image: null
	},
	'IMA Brandini': {
		summonerName: 'Brandini',
		summonerNameWithTeam: 'IMA Brandini',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Brandini'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/brandini'
			}
		],
		image: null
	},
	'IMA Julius': {
		summonerName: 'Julius',
		summonerNameWithTeam: 'IMA Julius',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/CoachJuliusLoL'
			}
		],
		image: null
	},
	'GTC existence': {
		summonerName: 'existence',
		summonerNameWithTeam: 'GTC existence',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/LoL_Rare'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/rare'
			}
		],
		image: null
	},
	'GTC Siddywiddy': {
		summonerName: 'Siddywiddy',
		summonerNameWithTeam: 'GTC Siddywiddy',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/SiddyWiddy_lol'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/SiddyWiddy'
			},
			{
				platform: 'youtube',
				link: 'https://youtube.com/user/CoCaCoLaBaws'
			}
		],
		image: null
	},
	'GTC DNA': {
		summonerName: 'DNA',
		summonerNameWithTeam: 'GTC DNA',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/dnashockwave'
			}
		],
		image: null
	},
	'GTC duoking': {
		summonerName: 'duoking',
		summonerNameWithTeam: 'GTC duoking',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/duoking1'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/duoking1'
			}
		],
		image: null
	},
	'GTC Tempest': {
		summonerName: 'Tempest',
		summonerNameWithTeam: 'GTC Tempest',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/WayOfTheTempest'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/Tempest'
			}
		],
		image: null
	},
	'GTC Vakin': {
		summonerName: 'Vakin',
		summonerNameWithTeam: 'GTC Vakin',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Vakin_jg'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/vakin'
			}
		],
		image: null
	},
	'ISU GFP': {
		summonerName: 'GFP',
		summonerNameWithTeam: 'ISU GFP',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/GFreePandalol'
			}
		],
		image: null
	},
	'ISU DrewDozer': {
		summonerName: 'DrewDozer',
		summonerNameWithTeam: 'ISU DrewDozer',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/DrewDozer'
			}
		],
		image: null
	},
	'ISU Yen': {
		summonerName: 'Yen',
		summonerNameWithTeam: 'ISU Yen',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/yeniaRLoL'
			}
		],
		image: null
	},
	'ISU Tempos': {
		summonerName: 'Tempos',
		summonerNameWithTeam: 'ISU Tempos',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/TemposLol'
			}
		],
		image: null
	},
	'ISU Nausicaa': {
		summonerName: 'Nausicaa',
		summonerNameWithTeam: 'ISU Nausicaa',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/NausicaaOCE'
			}
		],
		image: null
	},
	'EGP Yukino': {
		summonerName: 'Yukino',
		summonerNameWithTeam: 'EGP Yukino',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/dayumjohny'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/yukinocat1'
			}
		],
		image: null
	},
	'NOT 5Fire': {
		summonerName: '5Fire',
		summonerNameWithTeam: 'NOT 5Fire',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/5fireleague'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/5fire'
			}
		],
		image: null
	},
	'AOE Zamudo': {
		summonerName: 'Zamudo',
		summonerNameWithTeam: 'AOE Zamudo',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Zamudo72'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/zamudo72'
			}
		],
		image: null
	},
	'3P Munchy': {
		summonerName: 'Munchy',
		summonerNameWithTeam: '3P Munchy',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/lolmunchy'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/munchythemonster'
			}
		],
		image: null
	},
	'3P Messages': {
		summonerName: 'Messages',
		summonerNameWithTeam: '3P Messages',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Messages_lol'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/messages_lol'
			}
		],
		image: null
	},
	'3P Lunar': {
		summonerName: 'Lunar',
		summonerNameWithTeam: '3P Lunar',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Lunar_ADC'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/lunar_na'
			}
		],
		image: null
	},
	'3P Out of Wit': {
		summonerName: 'Out of Wit',
		summonerNameWithTeam: '3P Out of Wit',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/ranoutofwit'
			}
		],
		image: null
	},
	'3P Aito': {
		summonerName: 'Aito',
		summonerNameWithTeam: '3P Aito',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Aito_LoL'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/AitoLoL'
			}
		],
		image: null
	},
	'3P MikeYeung': {
		summonerName: 'MikeYeung',
		summonerNameWithTeam: '3P MikeYeung',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/mikeyeung'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/mikeyeung'
			},
			{
				platform: 'youtube',
				link: 'https://youtube.com/c/MikeYeunglol'
			}
		],
		image: null
	},
	'MUS PCL': {
		summonerName: 'PCL',
		summonerNameWithTeam: 'MUS PCL',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/PieCakeLord'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/piecakelord'
			}
		],
		image: null
	},
	'MUS Kind': {
		summonerName: 'Kind',
		summonerNameWithTeam: 'MUS Kind',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Kind_Jungle'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/kindjunglelol'
			}
		],
		image: null
	},
	'MUS Getback': {
		summonerName: 'Getback',
		summonerNameWithTeam: 'MUS Getback',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/getback71'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/getback71'
			}
		],
		image: null
	},
	'MUS EvanRL': {
		summonerName: 'EvanRL',
		summonerNameWithTeam: 'MUS EvanRL',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/EvanrlLoL'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/evanrl'
			}
		],
		image: null
	},
	'MUS Zyko': {
		summonerName: 'Zyko',
		summonerNameWithTeam: 'MUS Zyko',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Zykolol'
			}
		],
		image: null
	},
	'MUS Aizo': {
		summonerName: 'Aizo',
		summonerNameWithTeam: 'MUS Aizo',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/aizolol'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/aizolol'
			},
			{
				platform: 'youtube',
				link: 'https://youtube.com/channel/UCkD0audCDrzuj1UGVC2Dh1A'
			}
		],
		image: null
	},
	'WC Rapid': {
		summonerName: 'Rapid',
		summonerNameWithTeam: 'WC Rapid',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/LoLRapid'
			}
		],
		image: null
	},
	'TFTS ToastyAlex': {
		summonerName: 'ToastyAlex',
		summonerNameWithTeam: 'TFTS ToastyAlex',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Toastyalex_LoL'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/toastyb0i'
			}
		],
		image: null
	},
	'WC Crazy Goose': {
		summonerName: 'Crazy Goose',
		summonerNameWithTeam: 'WC Crazy Goose',
		socialLinks: [
			{
				platform: 'twitch',
				link: 'https://twitch.tv/thecrazygooselol'
			}
		],
		image: null
	},
	'WC 0nat': {
		summonerName: '0nat',
		summonerNameWithTeam: 'WC 0nat',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/lilonivert'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/onatlol'
			}
		],
		image: null
	},
	'MU APA': {
		summonerName: 'APA',
		summonerNameWithTeam: 'MU APA',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/alwaysplanahea1'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/alwaysplanahealol'
			}
		],
		image: null
	},
	'TG rovex': {
		summonerName: 'rovex',
		summonerNameWithTeam: 'TG rovex',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/RovexLoL'
			}
		],
		image: null
	},
	'TG Latence': {
		summonerName: 'Latence',
		summonerNameWithTeam: 'TG Latence',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/latencelol'
			}
		],
		image: null
	},
	'TG Qwacker': {
		summonerName: 'Qwacker',
		summonerNameWithTeam: 'TG Qwacker',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/QwackerLoL'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/qwackerlol'
			},
			{
				platform: 'youtube',
				link: 'https://youtube.com/channel/UC25esrq-6DidjZTl2dztfFw'
			}
		],
		image: null
	},
	'DKC Clyde': {
		summonerName: 'Clyde',
		summonerNameWithTeam: 'DKC Clyde',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/ClydeLoL1'
			}
		],
		image: null
	},
	'NML Koic': {
		summonerName: 'Koic',
		summonerNameWithTeam: 'NML Koic',
		socialLinks: [
			{
				platform: 'twitch',
				link: 'https://twitch.tv/koiccc'
			}
		],
		image: null
	},
	'NML Detention': {
		summonerName: 'Detention',
		summonerNameWithTeam: 'NML Detention',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/DetentionLoL'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/detention'
			}
		],
		image: null
	},
	'NML Pynt': {
		summonerName: 'Pynt',
		summonerNameWithTeam: 'NML Pynt',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/RongruiM'
			}
		],
		image: null
	},
	'AK CaD': {
		summonerName: 'CaD',
		summonerNameWithTeam: 'AK CaD',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Chosungyong0220'
			}
		],
		image: null
	},
	Keith: {
		summonerName: 'Keith',
		summonerNameWithTeam: 'Keith',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/keithmcbrief'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/keith'
			},
			{
				platform: 'youtube',
				link: 'https://youtube.com/c/KEITHMCBRIEFLOL'
			}
		],
		image: null
	},
	Gweiss: {
		summonerName: 'Gweiss',
		summonerNameWithTeam: 'Gweiss',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/gweisslol'
			},
			{
				platform: 'twitch',
				link: 'https://twitch.tv/Gweiss96'
			}
		],
		image: null
	},
	'EST Bugi': {
		summonerName: 'Bugi',
		summonerNameWithTeam: 'EST Bugi',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/yeopbugi'
			},
			{
				platform: 'twitch',
				link: 'https://www.twitch.tv/yeopbugi'
			}
		],
		image: null
	},
	'INF Snaker': {
		summonerName: 'Snaker',
		summonerNameWithTeam: 'INF Snaker',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Snakerlol'
			},
			{
				platform: 'twitch',
				link: 'https://www.twitch.tv/snaker7'
			}
		],
		image: null
	},
	'TSM S0ul': {
		summonerName: 'S0ul',
		summonerNameWithTeam: 'TSM S0ul',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Soul_lol1'
			}
		],
		image: null
	},
	'EST Mireu': {
		summonerName: 'Mireu',
		summonerNameWithTeam: 'EST Mireu',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/jeongjobin1'
			}
		],
		image: null
	},
	'AK Crash': {
		summonerName: 'Crash',
		summonerNameWithTeam: 'AK Crash',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Crash_lol1'
			}
		],
		image: null
	},
	'AOER Geiger': {
		summonerName: 'Geiger',
		summonerNameWithTeam: 'AOER Geiger',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/GeigerIsCool'
			}
		],
		image: null
	},
	'GET Newbie': {
		summonerName: 'Newbie',
		summonerNameWithTeam: 'GET Newbie',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/newbiel0l'
			},
			{
				platform: 'twitch',
				link: 'https://www.twitch.tv/NewbieSupp'
			}
		],
		image: null
	},
	'CLG Town': {
		summonerName: 'Town',
		summonerNameWithTeam: 'CLG Town',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/T0WNMID'
			},
			{
				platform: 'twitch',
				link: 'https://www.twitch.tv/townmid'
			}
		],
		image: null
	},
	'UCI Misterdot': {
		summonerName: 'Misterdot',
		summonerNameWithTeam: 'UCI Misterdot',
		socialLinks: [],
		image: null
	},
	'3P Just': {
		summonerName: 'Just',
		summonerNameWithTeam: '3P Just',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Just01LoL'
			}
		],
		image: null
	},
	'SN Tomeito': {
		summonerName: 'Tomeito',
		summonerNameWithTeam: 'SN Tomeito',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/t0meitoo'
			},
			{
				platform: 'twitch',
				link: 'https://www.twitch.tv/t0meito'
			}
		],
		image: null
	},
	'AOER Sybr': {
		summonerName: 'Sybr',
		summonerNameWithTeam: 'AOER Sybr',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/SybrLoL'
			},
			{
				platform: 'twitch',
				link: 'https://www.twitch.tv/SybrLoL'
			},
			{
				platform: 'youtube',
				link: 'https://www.youtube.com/c/SybrLoL'
			}
		],
		image: null
	},
	'AK Alive': {
		summonerName: 'Alive',
		summonerNameWithTeam: 'AK Alive',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Alivelol2'
			}
		],
		image: null
	},
	'TFTS Winter': {
		summonerName: 'Winter',
		summonerNameWithTeam: 'TFTS Winter',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/TheWinterlol'
			},
			{
				platform: 'twitch',
				link: 'https://www.twitch.tv/thewinterlol'
			},
			{
				platform: 'youtube',
				link: 'https://www.youtube.com/channel/UCMMIF-R1HAj-2GsGrhzKfZw/'
			}
		],
		image: null
	},
	'R7 Ophelia': {
		summonerName: 'Ophelia',
		summonerNameWithTeam: 'R7 Ophelia',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Bjs_ophelia'
			}
		],
		image: null
	},
	'TBA Kitzuo': {
		summonerName: 'Kitzuo',
		summonerNameWithTeam: 'TBA Kitzuo',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/KitzuoLoL'
			},
			{
				platform: 'twitch',
				link: 'https://www.twitch.tv/Kitzuo'
			}
		],
		image: null
	},
	'CLG Airren': {
		summonerName: 'Airren',
		summonerNameWithTeam: 'CLG Airren',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/airren_lol'
			},
			{
				platform: 'twitch',
				link: 'https://www.twitch.tv/airren_lol'
			}
		],
		image: null
	},
	'DKC Sandflame': {
		summonerName: 'Sandflame',
		summonerNameWithTeam: 'DKC Sandflame',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Sandflamelol'
			},
			{
				platform: 'twitch',
				link: 'https://www.twitch.tv/sandflamelol'
			}
		],
		image: null
	},
	'SN Actor': {
		summonerName: 'Actor',
		summonerNameWithTeam: 'SN Actor',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/actxrjg'
			}
		],
		image: null
	},
	'AOER Stevenator': {
		summonerName: 'Stevenator',
		summonerNameWithTeam: 'AOER Stevenator',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Stevenator546'
			},
			{
				platform: 'twitch',
				link: 'https://www.twitch.tv/stevenator546'
			},
			{
				platform: 'youtube',
				link: 'https://www.youtube.com/channel/UCEmMnIYB8JzDcLz5hbrK0fg'
			}
		],
		image: null
	},
	'IMT IgNar': {
		summonerName: 'IgNar',
		summonerNameWithTeam: 'IMT IgNar',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/IgNarLoL'
			},
			{
				platform: 'twitch',
				link: 'https://www.twitch.tv/IgNarlol'
			}
		],
		image:
			'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2Feg-ignar-2021.png'
	},
	'TG Ayukura': {
		summonerName: 'Ayukura',
		summonerNameWithTeam: 'TG Ayukura',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/ayukuraaa'
			},
			{
				platform: 'twitch',
				link: 'https://www.twitch.tv/ayukura'
			}
		],
		image: null
	},
	'3P Traffi': {
		summonerName: 'Traffi',
		summonerNameWithTeam: '3P Traffi',
		socialLinks: [
			{
				platform: 'twitch',
				link: 'https://www.twitch.tv/traffilol'
			}
		],
		image: null
	},
	'300 Nyma': {
		summonerName: 'Nyma',
		summonerNameWithTeam: '300 Nyma',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/NymaJG'
			},
			{
				platform: 'twitch',
				link: 'https://www.twitch.tv/nyma5'
			}
		],
		image: null
	},
	'TBA Smalls': {
		summonerName: 'Smalls',
		summonerNameWithTeam: 'TBA Smalls',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/draven_baka'
			},
			{
				platform: 'twitch',
				link: 'https://www.twitch.tv/dravenbaka'
			},
			{
				platform: 'youtube',
				link: 'https://www.youtube.com/channel/UCSDOKsgfgGc4KjTOpd-ktlA'
			}
		],
		image: null
	},
	'AOER Devin': {
		summonerName: 'Devin',
		summonerNameWithTeam: 'AOER Devin',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/devin11111111'
			},
			{
				platform: 'twitch',
				link: 'https://www.twitch.tv/devin11110'
			}
		],
		image: null
	},
	'100X Lens': {
		summonerName: 'Lens',
		summonerNameWithTeam: '100X Lens',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/lenslol1'
			}
		],
		image: null
	},
	'GET Whitelotus': {
		summonerName: 'Whitelotus',
		summonerNameWithTeam: 'GET Whitelotus',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Whitelotuslol'
			},
			{
				platform: 'twitch',
				link: 'https://www.twitch.tv/whitelotuslol'
			}
		],
		image: null
	},
	'SN Plut0': {
		summonerName: 'Plut0',
		summonerNameWithTeam: 'SN Plut0',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/plutxlol'
			},
			{
				platform: 'twitch',
				link: 'https://www.twitch.tv/plutxlol'
			}
		],
		image: null
	},
	'AK Baula': {
		summonerName: 'Baula',
		summonerNameWithTeam: 'AK Baula',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/BaulaLoL'
			},
			{
				platform: 'twitch',
				link: 'https://www.twitch.tv/baulalol'
			}
		],
		image: null
	},
	'CLG Draco': {
		summonerName: 'Draco',
		summonerNameWithTeam: 'CLG Draco',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/dracoiwnl'
			},
			{
				platform: 'twitch',
				link: 'https://www.twitch.tv/dracoiwnl'
			}
		],
		image: null
	},
	'EST Shadow': {
		summonerName: 'Shadow',
		summonerNameWithTeam: 'EST Shadow',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/1Shadowlol'
			}
		],
		image: null
	},
	'GG Jido': {
		summonerName: 'Jido',
		summonerNameWithTeam: 'GG Jido',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/LoLJido'
			}
		],
		image: null
	},
	'SN Meslo': {
		summonerName: 'Meslo',
		summonerNameWithTeam: 'SN Meslo',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Meslo_'
			},
			{
				platform: 'twitch',
				link: 'https://www.twitch.tv/meslok'
			}
		],
		image: null
	},
	'TSM Maple': {
		summonerName: 'Maple',
		summonerNameWithTeam: 'TSM Maple',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/TSMMaple'
			}
		],
		image: null
	},
	'XTN Seize': {
		summonerName: 'Seize',
		summonerNameWithTeam: 'XTN Seize',
		socialLinks: [],
		image: null
	},
	'XTN Krim': {
		summonerName: 'Krim',
		summonerNameWithTeam: 'XTN Krim',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Krim_lol'
			},
			{
				platform: 'twitch',
				link: 'https://www.twitch.tv/krimlol'
			}
		],
		image: null
	}
};

export const PLAYER_DEFAULT =
	'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1641936348175_placeholder.png';
