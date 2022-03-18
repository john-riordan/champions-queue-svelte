export const ROLES = {
	TOP: 'Top',
	JUNGLE: 'Jng',
	MIDDLE: 'Mid',
	BOTTOM: 'ADC',
	SUPPORT: 'Sup'
};


export const CORRECT_CHAMPION_DISPLAY_NAMES = {
  AurelionSol: "Aurelion Sol",
  Chogath: "Cho'Gath",
  DrMundo: "Dr. Mundo",
  FiddleSticks: "Fiddlesticks",
  JarvanIV: "Jarvan IV",
  Khazix: "Kha'Zix",
	Kaisa: "Kai'Sa",
  LeeSin: "Lee Sin",
  MissFortune: "Miss Fortune",
  MonkeyKing: "Wukong",
  TahmKench: "Tahm Kench",
  TwistedFate: "Twisted Fate",
};

export function correctChampionImage(championName) {
	const championImageName = Object.fromEntries(Object.entries(CORRECT_CHAMPION_DISPLAY_NAMES).map(a => a.reverse()))[championName] || championName;
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
	TSM: {
		name: 'TSM',
		tag: 'TSM',
		logo: 'F1592590917094_TSMTSM-01-FullonDark.png',
		hsl: '0deg 0% 60%'
	},
	TL: {
		name: 'Team Liquid',
		tag: 'TL',
		logo: 'F1631820014208_tl-2021-worlds.png',
		hsl: '214deg 0% 80%'
	},
	C9: {
		name: 'Cloud 9',
		tag: 'C9',
		logo: 'F1631820065346_cloud9-2021-worlds.png',
		hsl: '196deg 100% 39%'
	},
	100: {
		name: '100 Thieves',
		tag: '100',
		logo: 'F1631819887423_100t-2021-worlds.png',
		hsl: '0deg 73% 53%'
	},
	EG: {
		name: 'Evil Geniuses',
		tag: 'EG',
		logo: 'F1592590374862_EvilGeniusesEG-01-FullonDark.png',
		hsl: '0deg 0% 40%'
	},
	FLY: {
		name: 'FlyQuest',
		tag: 'FLY',
		logo: 'Fflyquest-new-on-dark.png',
		hsl: '152deg 97% 27%'
	},
	GG: {
		name: 'Golden Guardians',
		tag: 'GG',
		logo: 'F1592590586919_GoldenGuardiansGGS-01-FullonDark.png',
		hsl: '39deg 64% 60%'
	},
	IMT: {
		name: 'Immortals Progressive',
		tag: 'IMT',
		logo: 'Fimt-new-color.png',
		hsl: '177deg 97% 35%'
	},
	DIG: {
		name: 'Dignitas QNTMPAY',
		tag: 'DIG',
		logo: 'FDIG-FullonDark.png',
		hsl: '48deg 100% 50%'
	},
	CLG: {
		name: 'Counter Logic Gaming',
		tag: 'CLG',
		logo: 'F1592590248482_CounterLogicGamingCLG-01-FullonDark.png',
		hsl: '192deg 100% 44%'
	}
};

export const PLAYERS = {
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
	'100 huhi': {
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
	'100 Gamsu': {
		summonerName: 'Gamsu',
		summonerNameWithTeam: '100 Gamsu',
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
	'100 Kenvi': {
		summonerName: 'Kenvi',
		summonerNameWithTeam: '100 Kenvi',
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
		image: null
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
	'100 Wixxi': {
		summonerName: 'Wixxi',
		summonerNameWithTeam: '100 Wixxi',
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
		image: null
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
		image: null
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
		image: null
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
		image: null
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
		image: null
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
		image: null
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
		image: null
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
		image: null
	},
	'DIG DARKWINGS': {
		summonerName: 'DARKWINGS',
		summonerNameWithTeam: 'DIG DARKWINGS',
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
		image: null
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
		image: null
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
		image: null
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
		image: null
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
		image: null
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
		image: null
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
		image: null
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
		image: null
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
	'GG Lost': {
		summonerName: 'Lost',
		summonerNameWithTeam: 'GG Lost',
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
	'GG ry0ma': {
		summonerName: 'ry0ma',
		summonerNameWithTeam: 'GG ry0ma',
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
		image: null
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
		image: null
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
	'IMT WildTurtle': {
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
	'IMT Destiny': {
		summonerName: 'Destiny',
		summonerNameWithTeam: 'IMT Destiny',
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
	'IMT Concept': {
		summonerName: 'Concept',
		summonerNameWithTeam: 'IMT Concept',
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
		image: null
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
		image: null
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
	'TL Hans sama': {
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
		image: null
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
		image: null
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
		image: null
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
		image: null
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
	'100X Insanity': {
		summonerName: 'Insanity',
		summonerNameWithTeam: '100X Insanity',
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
	'100X Array': {
		summonerName: 'Array',
		summonerNameWithTeam: '100X Array',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/array_lol'
			}
		],
		image: null
	},
	'100X donbray': {
		summonerName: 'donbray',
		summonerNameWithTeam: '100X donbray',
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
	'DARE Leemo': {
		summonerName: 'Leemo',
		summonerNameWithTeam: 'DARE Leemo',
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
	'DARE BMFX': {
		summonerName: 'BMFX',
		summonerNameWithTeam: 'DARE BMFX',
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
	'EGP Perry': {
		summonerName: 'Perry',
		summonerNameWithTeam: 'EGP Perry',
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
	'EGP Sketch': {
		summonerName: 'Sketch',
		summonerNameWithTeam: 'EGP Sketch',
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
	'IMA Meech': {
		summonerName: 'Meech',
		summonerNameWithTeam: 'IMA Meech',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/meechyyy2'
			}
		],
		image: null
	},
	'IMA Trevor': {
		summonerName: 'Trevor',
		summonerNameWithTeam: 'IMA Trevor',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/King1Trevor'
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
	'DNHA Dinka': {
		summonerName: 'Dinka',
		summonerNameWithTeam: 'DNHA Dinka',
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
	'DNHA Svmmy': {
		summonerName: 'Svmmy',
		summonerNameWithTeam: 'DNHA Svmmy',
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
	'NOT Scoooped': {
		summonerName: 'Scoooped',
		summonerNameWithTeam: 'NOT Scoooped',
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
	'RAD Raheen': {
		summonerName: 'Raheen',
		summonerNameWithTeam: 'RAD Raheen',
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
	'SN baekho': {
		summonerName: 'baekho',
		summonerNameWithTeam: 'SN baekho',
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
	'TG Trixter': {
		summonerName: 'Trixter',
		summonerNameWithTeam: 'TG Trixter',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Trixterjg'
			}
		],
		image: null
	},
	'TG Doxa': {
		summonerName: 'Doxa',
		summonerNameWithTeam: 'TG Doxa',
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
	'TA Nemesis9': {
		summonerName: 'Nemesis9',
		summonerNameWithTeam: 'TA Nemesis9',
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
	'WC Allorim': {
		summonerName: 'Allorim',
		summonerNameWithTeam: 'WC Allorim',
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
	'WC Minui': {
		summonerName: 'Minui',
		summonerNameWithTeam: 'WC Minui',
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
	'WIN Kenji': {
		summonerName: 'Kenji',
		summonerNameWithTeam: 'WIN Kenji',
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
	'EST Grell': {
		summonerName: 'Grell',
		summonerNameWithTeam: 'EST Grell',
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
	'EST Leza': {
		summonerName: 'Leza',
		summonerNameWithTeam: 'EST Leza',
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
	'EST Mia': {
		summonerName: 'Mia',
		summonerNameWithTeam: 'EST Mia',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/Mialol98'
			}
		],
		image: null
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
	'R7 Warangelus': {
		summonerName: 'Warangelus',
		summonerNameWithTeam: 'R7 Warangelus',
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
	Jensen: {
		summonerName: 'Jensen',
		summonerNameWithTeam: 'Jensen',
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
		image: null
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
	Smoothie: {
		summonerName: 'Smoothie',
		summonerNameWithTeam: 'Smoothie',
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
	'GET Bardito': {
		summonerName: 'Bardito',
		summonerNameWithTeam: 'GET Bardito',
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
	Solo: {
		summonerName: 'Solo',
		summonerNameWithTeam: 'Solo',
		socialLinks: [
			{
				platform: 'twitter',
				link: 'https://twitter.com/SoloLCS'
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
	Will: {
		summonerName: 'Will',
		summonerNameWithTeam: 'Will',
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
	'100X Keel': {
		summonerName: 'Keel',
		summonerNameWithTeam: '100X Keel',
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
	'NOT Yukino': {
		summonerName: 'Yukino',
		summonerNameWithTeam: 'NOT Yukino',
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
	'3P Zamudo': {
		summonerName: 'Zamudo',
		summonerNameWithTeam: '3P Zamudo',
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
	'WC ToastyAlex': {
		summonerName: 'ToastyAlex',
		summonerNameWithTeam: 'WC ToastyAlex',
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
	'SN Clyde': {
		summonerName: 'Clyde',
		summonerNameWithTeam: 'SN Clyde',
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
	}
};

export const PLAYER_DEFAULT =
	'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1641936348175_placeholder.png';
