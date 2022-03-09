export const ROLES = {
	TOP: 'Top',
	JUNGLE: 'Jng',
	MIDDLE: 'Mid',
	BOTTOM: 'ADC',
	SUPPORT: 'Sup'
};

export const CORRECT_CHAMPION_NAME = {
	FiddleSticks: 'Fiddlesticks'
};

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

export const TEAMS = [
	{
		name: 'TSM',
		tag: 'TSM',
		logo: 'F1592590917094_TSMTSM-01-FullonDark.png'
	},
	{
		name: 'Team Liquid',
		tag: 'TL',
		logo: 'F1631820014208_tl-2021-worlds.png'
	},
	{
		name: 'Cloud 9',
		tag: 'C9',
		logo: 'F1631820065346_cloud9-2021-worlds.png'
	},
	{
		name: '100 Thieves',
		tag: '100',
		logo: 'F1631819887423_100t-2021-worlds.png'
	},
	{
		name: 'Evil Geniuses',
		tag: 'EG',
		logo: 'F1592590374862_EvilGeniusesEG-01-FullonDark.png'
	},
	{
		name: 'FlyQuest',
		tag: 'FLY',
		logo: 'Fflyquest-new-on-dark.png'
	},
	{
		name: 'Golden Guardians',
		tag: 'GG',
		logo: 'F1592590586919_GoldenGuardiansGGS-01-FullonDark.png'
	},
	{
		name: 'Immortals Progressive',
		tag: 'IMT',
		logo: 'Fimt-new-color.png'
	},
	{
		name: 'Dignitas QNTMPAY',
		tag: 'DIG',
		logo: 'FDIG-FullonDark.png'
	},
	{
		name: 'Counter Logic Gaming',
		tag: 'CLG',
		logo: 'F1592590248482_CounterLogicGamingCLG-01-FullonDark.png'
	}
];

export const PLAYERS = {
	'C9 Blaber':
		'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645002844455_BLABER.png',
	'C9 Fudge':
		'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645002867783_FUDGE.png',
	'C9 Summit':
		'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645003052752_SUMMIT.png',
	'C9 Berserker':
		'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645002709763_BERSERKER.png',
	'C9 Isles':
		'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645002916546_ISLES.png',
	'C9 Darshan':
		'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2Fc9-darshan.png',
	'C9 Winsome':
		'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645003141150_WINSOME.png',
	'C9 Zven':
		'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1633540407155_c9-zven-w21.png',
	'TL CoreJJ':
		'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645007452184_TL_COREJJ_512x512.png',
	'TL Santorin':
		'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645007610604_TL_SANTORIN_512x512.png',
	'TL Bwipo':
		'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645007421489_TL_BWIPO_512x512.png',
	'TL Hans sama':
		'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645007580069_TL_HANS_SAMA_512x512.png',
	'TL Bjergsen':
		'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645007317343_TL_BJERGSEN_512x512.png',
	'TL Eyla':
		'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645007499326_TL_EYLA_512x512.png',
	'TL Armao':
		'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645007285685_TL_ARMAO_512x512.png',
	'FLY Josedeodo':
		'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645005627467_JOSEDEODO.png',
	'FLY Johnsun':
		'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645005605216_JOHNSUN.png',
	'FLY Kumo':
		'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645005654576_KUMO.png',
	'FLY toucouille':
		'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645005790309_TOUCOUILLE.png',
	'FLY aphromoo':
		'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645005487446_APHROMOO.png',
	'GG Ablazeolive':
		'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645006102506_ABLAZEOLIVE.png',
	'GG Licorice':
		'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645006339810_LICORICE.png',
	'GG Pridestalkr':
		'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645006492034_PRIDESTALKER.png',
	'GG Lost':
		'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645006415366_LOST.png',
	'GG Olleh':
		'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645006459696_OLLEH.png',
	'GG Stixxay':
		'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645006646248_STIXXAY.png',
	'GG Tony Top':
		'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645006687571_TONYTOP.png',
	'100 Ssumday':
		'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645002219430_SSUMDAY.png',
	'100 Closer':
		'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645001890321_CLOSER.png',
	'100 FBI':
		'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645001923272_FBI.png',
	'100 huhi':
		'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645002147113_HUHI.png',
	'100 Abbedagge':
		'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645001857252_ABBEDAGGE.png',
	'100 Tenacity':
		'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645002245397_TENACITY.png',
	'EG Impact':
		'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645005161460_IMPACT.png',
	'EG Danny':
		'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645005131145_DANNY.png',
	'EG Inspired':
		'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645005188133_INSPIRED.png',
	'EG jojopyun':
		'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645005210742_JOJOPYUN.png',
	'EG Vulcan':
		'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645005262280_VULCAN.png',
	'IMT Revenge':
		'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645006991598_REVENGE.png',
	'IMT Xerxe':
		'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645007055418_XERXE.png',
	'IMT Destiny':
		'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645006855546_DESTINY.png',
	'IMT PowerOfEvil':
		'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645006938944_POWEROFEVIL.png',
	'IMT WildTurtle':
		'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645007023352_WILDTURTLE.png',
	'DIG Neo':
		'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645004758686_NEO.png',
	'DIG FakeGod':
		'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645004707771_FAKEGOD.png',
	'DIG River':
		'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645004785680_RIVER.png',
	'DIG Blue':
		'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645004394441_BLUE.png',
	'DIG Biofrost':
		'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645004354385_BIOFROST.png',
	'CLG Jenkins':
		'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645003747730_JENKINS.png',
	'CLG Contractz':
		'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645003662804_CONTRACTZ.png',
	'CLG Palafox':
		'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645003922510_PALAFOX.png',
	'CLG Luger':
		'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645003779243_LUGER.png',
	'CLG Poome':
		'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645003976463_POOME.png',
	'CLG Dhokla':
		'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645003716469_DHOKLA.png',
	'TSM Spica':
		'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645008192855_SPICA.png',
	'TSM Huni':
		'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645007920141_HUNI.png',
	'TSM Shenyi':
		'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645008163057_SHENYI.png',
	'TSM Keaiduo':
		'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645007963670_KEAIUDO.png',
	'TSM Tactical':
		'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645008228606_TACTICAL.png',
	'TSM Yursan':
		'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645008362538_TSM_YURSAN_JERSEY_512x512.png',
	'TSM V1per':
		'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1645008337364_TSM_V1PER_JERSEY_512x512.png'
};

export const PLAYER_DEFAULT =
	'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1641936348175_placeholder.png';
