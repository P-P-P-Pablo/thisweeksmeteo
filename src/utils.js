export default function fetchPicto(code) {
	if (code <= 1) {
		return 'http://www.meteo.fr/guide/pics/p1.jpg';
	} else if (code == 2) {
		return 'http://www.meteo.fr/guide/pics/p2.jpg';
	} else if (code < 6) {
		return 'http://www.meteo.fr/guide/pics/p3.jpg';
	} else if (code < 8) {
		return 'http://www.meteo.fr/guide/pics/p15.jpg';
	} else if (code < 13) {
		return 'http://www.meteo.fr/guide/pics/p9.jpg';
	} else if (code < 16) {
		return 'http://www.meteo.fr/guide/pics/p17.jpg';
	} else if (code < 33) {
		return 'http://www.meteo.fr/guide/pics/p10.jpg';
	} else if (code < 49) {
		return 'http://www.meteo.fr/guide/pics/p9.jpg';
	} else if (code < 79) {
		return 'http://www.meteo.fr/guide/pics/p10.jpg';
	} else if (code > 99) {
		return 'http://www.meteo.fr/guide/pics/p14.jpg';
	}
}
