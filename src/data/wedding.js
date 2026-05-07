export const COUPLE_DISPLAY = 'GINOLA & ADE RISMA';

export const couple = Object.freeze({
  bride: Object.freeze({
    fullName: 'Ade Risma',
    nickName: 'Ade Risma',
    parentsLine: 'Putri dari Bapak Suhandi & Ibu Marsiah',
    address: 'Griya Karawaci Blok A5 No.17',
  }),
  groom: Object.freeze({
    fullName: 'Ginola',
    nickName: 'Ginola',
    parentsLine: 'Putra dari Bapak Syahril & Ibu Rohati',
    address: 'Kerinci, Jambi',
  }),
});

export const AKAD = Object.freeze({
  title: 'Akad Nikah',
  day: 'Sabtu',
  dateLine: '06 Juni 2026',
  time: '10.00 – Selesai',
  venue: 'Kediaman mempelai wanita',
});

export const RESEPSI = Object.freeze({
  title: 'Resepsi',
  day: 'Sabtu',
  dateLine: '06 Juni 2026',
  time: '12.00 – 17.00 WIB',
  venue: 'Kediaman mempelai wanita',
  address: 'Griya Karawaci Blok A5 No.17, Sukabakti, Curug, Kab. Tangerang',
});

/** Tautan lokasi acara (Google Maps). */
export const MAP_URL =
  'https://maps.app.goo.gl/zUJvbeXg5GFwftZWA?g_st=ac';

export const WEDDING_COUNTDOWN_ISO = '2026-06-06T10:00:00+07:00';

/** Teks segel (spasi + titik di akhir mengurangi kata nyambung di titik temu lingkaran). */
export const SEAL_CIRCULAR_PHRASE = `THE WEDDING OF ${COUPLE_DISPLAY}-     `;
