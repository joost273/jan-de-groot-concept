/* Inhoud overgenomen van www.bosschebollen.nl (producten, prijzen, tijden, regels). */
const SITE = 'https://www.bosschebollen.nl/';

const IMAGES = {
  hero: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Bossche_bol_1.jpg/1280px-Bossche_bol_1.jpg',
  cut: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/%27s-Hertogenbosch-36-Bossche_Bol-2010-gje.jpg/1280px-%27s-Hertogenbosch-36-Bossche_Bol-2010-gje.jpg',
  shop: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Den_Bosch_Bosche_bollen_Bakkerij_De_Groot.jpg/1280px-Den_Bosch_Bosche_bollen_Bakkerij_De_Groot.jpg',
  logo: SITE + 'layout/tab_logo.png',
  logoWide: SITE + 'layout/tab_logo-responsive.png',
  kus: SITE + 'images/bosschekus/4-bossche-kussen.jpg',
  likeur: SITE + 'images/likeur/bosschebollen-likorette-jandegroot2.jpg',
  bol: SITE + 'bollencatalog/fotos-280px/2.JPG',
  mini: SITE + 'bollencatalog/fotos-280px/3.JPG',
  lunch: n => SITE + 'images/lunchroom19/' + String(n).padStart(2, '0') + '.JPG',
};

const CONTACT = {
  name: 'Banketbakkerij Jan de Groot',
  street: 'Stationsweg 24',
  city: "5211 TW 's-Hertogenbosch",
  phone: '073 - 613 38 30',
  phoneHref: 'tel:+31736133830',
  email: 'winkel@bosschebollen.nl',
  maps: 'https://www.google.com/maps/search/?api=1&query=Banketbakkerij+Jan+de+Groot+Stationsweg+24+%27s-Hertogenbosch',
  route: 'https://www.google.com/maps/dir/?api=1&destination=Stationsweg+24%2C+5211+TW+%27s-Hertogenbosch',
  embed: 'https://www.google.com/maps?q=Stationsweg+24,+5211+TW+%27s-Hertogenbosch&z=16&output=embed',
  facebook: 'https://www.facebook.com/Bakkerijjandegroot',
  instagram: 'https://www.instagram.com/bbjandegroot/',
  twitter: 'https://twitter.com/@bbjandegroot',
};

/* Menukaart lunchroom — overgenomen uit de menukaart van Jan de Groot (maart 2020).
   Die kaart bevat geen prijzen; vul `price` in zodra de actuele prijzen bekend zijn.
   veg: gemarkeerd met ❦ op de menukaart. stock: *indien voorradig. */
const MENU = [
  { key: 'ontbijt', title: 'Ontbijt', time: 'Tot 11.00 uur', groups: [
    { items: [{ name: 'Ontbijt', desc: 'Een heerlijk begin van de dag met een warme drank naar keuze, jus d’orange, pistolet, croissant, gekookt ei, ham, kaas, jam, roomboter en een mini-worstenbroodje.' }] },
  ] },
  { key: 'lunch', title: 'Lunch', groups: [
    { title: 'Belegde broodjes', note: 'Hard wit/bruin bolletje, tijgerbol, meergranen triangel, Italiaanse bol, zachte broodjes wit/bruin of een croissant', items: [
      { name: 'Kaas', desc: 'Sla, oude of belegen kaas, radijskiemen met mosterd-dille dressing', veg: true },
      { name: 'Ham', desc: 'Met sla en radijskiemen' },
      { name: 'Salami', desc: 'Met sla en radijskiemen' },
      { name: 'Ei', desc: 'Met rucola en truffelmayonaise', veg: true },
      { name: 'Eiersalade', desc: 'Met sla en radijskiemen', veg: true },
      { name: 'Tonijnsalade', desc: 'Met sla en radijskiemen' },
      { name: 'Roomkaas', desc: 'Met rucola en radijskiemen', veg: true },
      { name: 'Brie', desc: 'Met rucola, walnoten en honing', veg: true },
      { name: 'Broodje Gezond', desc: 'Sla, belegen kaas, achterham, tomaat, komkommer, ei, radijskiemen en mosterd-dille dressing' },
      { name: 'Club sandwich', desc: 'Sla, tomaat, gerookte kip, spek, ei, truffelmayonaise' },
      { name: 'Carpaccio', desc: 'Met rucola, Parmezaanse kaas, pijnboompitten en truffelmayonaise' },
      { name: 'Vitello tonato', desc: 'Kalfsvlees, dun laagje tonijnsalade, kappertjes, rucola, ei en Parmezaanse kaas' },
    ] },
  ] },
  { key: 'warm', title: 'Soep, panini’s & tosti’s', groups: [
    { title: 'Soep', items: [
      { name: 'Tomatensoep met balletjes' }, { name: 'Seizoenssoep' }, { name: 'Vegetarische soep', veg: true },
    ] },
    { title: 'Panini’s', items: [
      { name: 'Panini ham/kaas/tomaat' },
      { name: 'Panini gerookte kip', desc: 'Gerookte kip, oude kaas, paprika en tomaat' },
      { name: 'Panini salami', desc: 'Salami, kruidenboter, oude kaas, paprika' },
      { name: 'Panini mozzarella', desc: 'Mozzarella, pesto en tomaat' },
      { name: 'Panini brie', desc: 'Brie, walnoten, honing' },
    ] },
    { title: 'Tosti’s', note: 'Wit, bruin of waldkorn', items: [{ name: 'Ham/kaas' }, { name: 'Hawaï' }] },
    { title: 'Lunchtips', items: [
      { name: 'Soep met tosti naar keuze' },
      { name: 'Soep met broodje naar keuze', desc: 'Clubsandwich, carpaccio of vitello tonato kost 2 euro extra' },
      { name: 'Soep met panini naar keuze' },
    ] },
  ] },
  { key: 'arrangementen', title: 'Lunchproeverij, high tea & koffie deluxe', groups: [
    { title: 'Lunchproeverij', time: 'Aanvang 12.30 uur', items: [{ name: 'Lunchproeverij', desc: 'Tot 15.00 uur onbeperkt genieten en kiezen uit onze kleine lunchgerechtjeskaart. Vanaf 2 personen en voor maximaal 10 personen. Van tevoren reserveren. Niet mogelijk op zaterdag en tijdens schoolvakanties.' }] },
    { title: 'High tea', time: 'Tussen 10.00 en 14.00 uur', items: [{ name: 'Brabantse High tea', desc: 'Onze eigen Brabantse High tea: een combinatie van heerlijke zoete en hartige hapjes. Waaronder de minibol, Bossche kus, bavaroistaartje, mokka schuimkoekje, mini koffiebroodje, mini worstenbroodje, mini saucijzenbroodje, Quiche Lorraine en 3 divers belegde broodjes. Vanaf 2 personen en voor maximaal 10 personen. Van tevoren reserveren. Niet mogelijk op zaterdag en tijdens schoolvakanties.' }] },
    { title: 'Koffie deluxe', items: [{ name: 'Koffie deluxe', desc: 'Groots genieten met een grote pot koffie of thee met 6 zoete lekkernijen.' }] },
  ] },
  { key: 'dranken', title: 'Dranken', groups: [
    { title: 'Warme dranken', items: [
      { name: 'Koffie' }, { name: 'Grote koffie' }, { name: 'Cappuccino' }, { name: 'Latte macchiato' }, { name: 'Koffie verkeerd' },
      { name: 'Wienermelange' }, { name: 'Espresso' }, { name: 'Dubbele espresso' }, { name: 'Extra sterk' },
      { name: 'Hot chocolate' }, { name: 'Extra portie slagroom' }, { name: 'Meerprijs cafeïnevrij' },
      { name: 'Koffiesiropen', desc: 'Amaretto, caramel, kaneel, vanille, kokos' },
      { name: 'Thee diverse smaken' }, { name: 'Potje thee Revolution' }, { name: 'Verse muntthee' }, { name: 'Gemberthee' },
    ] },
    { title: 'Koude dranken', note: 'Wij serveren geen kraanwater.', items: [
      { name: 'Spa blauw' }, { name: 'Spa rood' }, { name: 'Cola' }, { name: 'Cola Zero' }, { name: 'Sinas' }, { name: 'Sprite' },
      { name: 'Cassis' }, { name: 'Tonic' }, { name: 'Fristi' }, { name: 'Chocomel' }, { name: 'Dubbelfris' },
      { name: 'Lipton ice tea / green' }, { name: 'Melk' }, { name: 'Appelsap' }, { name: 'Verse jus d’orange' },
      { name: 'Verse jus d’orange groot' }, { name: 'Ice cappuccino', stock: true },
    ] },
  ] },
  { key: 'gebak', title: 'Gebak', groups: [
    { items: [
      { name: 'Bossche bol' }, { name: 'Aardbeienvlaaitje', stock: true }, { name: 'Vruchtenvlaaitje' }, { name: 'Kersenvlaaitje', stock: true },
      { name: 'Slagroomcake/punt' }, { name: 'Nougatinecake' }, { name: 'Marsepeincake' }, { name: 'Nougatineschuim' },
      { name: 'Marsepeinschuim' }, { name: 'Mokkacake' }, { name: 'Mokkaschuim' }, { name: 'Slagroomsoes' }, { name: 'Bananensoes' },
      { name: 'Kwarkgebak' }, { name: 'Bavaroisgebak' }, { name: 'Div. chipolatapunt' }, { name: 'Aardbeienpunt', stock: true },
      { name: 'Aardbeienmarsepein', stock: true }, { name: 'Hazelnootbol' }, { name: 'Vruchtensoes' }, { name: 'Vruchtencake' },
      { name: 'Mergpijpje' }, { name: 'Div. suikervrij gebak' }, { name: 'Polleke' }, { name: 'Hardewener' }, { name: 'Chocolade bakje' },
      { name: 'Petitfour crème' }, { name: 'Petitfour bavarois' }, { name: 'Schwarzwalderpunt' }, { name: 'Sacherpunt', stock: true },
      { name: 'Red velvet' }, { name: 'Monchou' }, { name: 'Chocopunt' }, { name: 'Seizoensgebak' }, { name: 'Kindergebakje' },
    ] },
  ] },
  { key: 'stukwerk', title: 'Stukwerk & hartig', groups: [
    { title: 'Stukwerk', items: [
      { name: 'Appelflap' }, { name: 'Appelbol' }, { name: 'Appelcarré' }, { name: 'Apfelstrudel', stock: true }, { name: 'Tompouce' },
      { name: 'Roomsoes' }, { name: 'Penseegebak', stock: true }, { name: 'Gevulde koek' }, { name: 'Kokoskoek' }, { name: 'Eierkoek' },
    ] },
    { title: 'Hartige producten', items: [
      { name: 'Worstenbroodje' }, { name: 'Saucijzenbroodje' }, { name: 'Ham/kaas croissant' }, { name: 'Kaascroissant' },
      { name: 'Tosti (ham)/kaas' }, { name: 'Quiche Lorraine' }, { name: 'Kippenpasteitje', stock: true },
    ] },
  ] },
];

/* Vacatures — overgenomen van de huidige vacaturepagina van Jan de Groot. */
const VACATURES = [
  { title: 'Een Bossche bollen vuller', text: 'Heb je interesse in het bakkersvak? En zou je ons een handje willen helpen? Ben je enthousiast en weet je van aanpakken? Laat het ons weten! Diploma’s en ervaring zijn niet vereist.', tags: ['Bakkerij', 'Geen diploma’s of ervaring vereist'] },
  { title: 'Een ervaren banketbakker', text: 'Ben jij een ervaren banketbakker? Weet je van aanpakken en lijkt het je leuk om te werken in onze bakkerij?', tags: ['Bakkerij', 'Ervaren'] },
  { title: 'Een winkel- & lunchroommedewerk(st)er', text: 'Lijkt het je leuk om ons gezellige team te komen versterken? Ben je minimaal 20 uur beschikbaar en kan je iedere zaterdag werken? Op zondag ben je altijd vrij.', tags: ['Winkel & lunchroom', 'Minimaal 20 uur', 'Iedere zaterdag'] },
];

/* index = getDay(): 0 zondag … 6 zaterdag */
const HOURS = [
  { day: 'Zondag', closed: 'Gesloten' },
  { day: 'Maandag', closed: 'Tijdelijk gesloten' },
  { day: 'Dinsdag', open: '08:00', close: '18:00' },
  { day: 'Woensdag', open: '08:00', close: '18:00' },
  { day: 'Donderdag', open: '08:00', close: '21:00' },
  { day: 'Vrijdag', open: '08:00', close: '18:00' },
  { day: 'Zaterdag', open: '08:00', close: '17:00' },
];

const HORECA = [
  "Golden Tulip Hotel Central (Markt)", 'Hotel Juliën', "'t Opkikkertje (Markt)", 'Jheronimus (Markt)',
  'Silva Ducis (Parade)', 'Van Puffelen (Molenstraat)', 'Élance Boutique Cafe', 'Cinq (Parade)',
  'Stadscafé de Basiliek', 'Christoffel (Korenbrugstraat)', "Stadsherberg 't Pumpke",
  'De Bagatelle (Hinthamerstraat)', "'t Vervolg (Fonteinplein)", 'De Roosekrans (Hinthamerstraat)',
  'Good Seasons Hotel', 'Rhodos', 'Bolwerk Den Bosch (Sint Janssingel)', 'Bistro Bon', 'Carras', 'Doppio Espresso',
];

const CATEGORIES = [
  { key: 'bollen', label: 'Bossche Bollen', short: 'Bossche Bollen' },
  { key: 'gebak', label: 'Gebakjes', short: 'Gebakjes' },
  { key: 'taart', label: 'Taarten & Vlaaien', short: 'Taarten' },
  { key: 'hartig', label: 'Hartige producten', short: 'Hartig' },
  { key: 'overig', label: 'Overige', short: 'Overige' },
];

/* [id, naam, prijs, foto (bestandsnaam in bollencatalog/fotos-280px), omschrijving, let-op] */
const RAW = {
  bollen: [
    [2, 'Bossche bol', 3.10, '2.JPG', 'De enige echte Bosschebol, ook wel chocolade bol of sjeklade bol genoemd.', 'Hoeft niet vooraf besteld te worden'],
    [3, 'Mini Bossche bol', 2.50, '3.JPG', 'De enige echte Bosschebol, maar dan in het klein.', 'Minimaal 2 werkdagen vooraf bestellen'],
    [115, 'Grote Bossche bol', 17.95, 'hero', 'De enige echte bosschebol maar dan supergroot, voor maximaal 6 personen.', 'Altijd vooraf bestellen'],
    [116, 'Grote Bossche bol (kado)', 19.50, 'hero', 'De grote Bossche bol voor maximaal 6 personen, verpakt als kado.', 'Altijd vooraf bestellen'],
  ],
  gebak: [
    [21, 'Aardbeienpunt', 3.20, '21.JPG'], [11, 'Aardbeienvlaaitje', 3.50, '11.JPG'], [25, 'Appelbol', 3.30, '25.JPG'],
    [49, 'Appelcarré', 2.45, '49.JPG'], [4, 'Appelflap', 2.45, '4.JPG'], [123, 'Bananensoes', 3.20, '123.JPG'],
    [1004, 'Bavarois aardbei', 3.20, '1004.JPG'], [24, 'Bavarois appel-citroen', 3.20, '24.JPG'],
    [1029, 'Bavaroisgebak framboos-chocolade', 3.20, '1029.jpg'], [1012, 'Bavaroisgebak tropische vruchten', 3.20, '1012.JPG'],
    [165, 'Bavaroisgebak walnoot', 3.20, '165.jpg'], [1028, 'Cherise', 3.20, '1028.jpg'], [27, 'Chipolatapunt', 3.20, '27.JPG'],
    [121, 'Chocolade slagroomcake gebak', 3.05, '121.JPG'], [1013, 'Chocopunt', 3.20, '1013.jpg'], [177, 'Gebak divers', 3.10, '177.jpg'],
    [28, 'Hardewener', 3.05, '28.JPG'], [1003, 'Hazelnootbol', 3.20, '1003.JPG'], [114, 'Kersenvlaaitje', 3.30, '114.jpg'],
    [1011, 'Kindergebakje', 2.95, '1011.JPG'], [46, 'Kwarkgebak', 3.20, '46.JPG'], [1032, 'Lemon cheesecake', 3.20, '1032.jpg'],
    [119, 'Marsepein cakegebak', 3.05, '119.JPG'], [31, 'Marsepein schuimgebak', 3.05, '31.JPG'], [5, 'Mergpijpje', 2.75, '5.JPG'],
    [32, 'Mocca cake', 3.05, '32.JPG'], [33, 'Mocca schuimgebak', 3.05, '33.JPG'], [1010, 'MonChou', 3.20, '1010.JPG'],
    [35, 'Nougatientje', 3.05, '35.JPG'], [34, 'Nougatine cakegebak', 3.05, '34.JPG'], [36, 'Pensee gebak', 2.70, '36.jpg'],
    [19, 'Petit four (rond)', 2.80, '19.JPG'], [9, 'Petit four', 3.05, '9.JPG'], [120, 'Polleke', 3.20, '120.JPG'],
    [38, 'Progress gebak', 3.05, '38.JPG'], [1026, 'Red velvet', 3.20, '1026.jpg'], [52, 'Roomsoes', 2.45, '52.JPG'],
    [170, 'Schwarzwalderpunt', 3.20, '170.JPG'], [77, 'Slagroomsoesjes', 4.05, ''], [43, 'Slagroomcake', 3.05, '43.JPG'],
    [122, 'Slagroompunt', 3.05, '122.JPG'], [45, 'Slagroomsoes', 3.20, '45.JPG'], [154, 'Suikervrij gebak bavarois', 3.35, '154.jpg'],
    [54, 'Suikervrij gebak bol', 3.35, '54.jpg'], [153, 'Suikervrij gebak slagroom', 3.35, '153.JPG'], [51, 'Tompouce', 2.45, '51.JPG'],
    [48, 'Vruchtencake', 3.05, '48.JPG'], [125, 'Vruchtensoes', 3.20, '125.JPG'], [10, 'Vruchtenvlaaitje', 3.20, '10.JPG'],
  ],
  taart: [
    [100, 'Aardbeientaart', 24.80, '', '8 personen'], [107, 'Aardbeientaart', 31.00, '', '10 personen'], [103, 'Aardbeientaart', 37.20, '', '12 personen'],
    [110, 'Aardbeienvla klein', 30.95, ''], [111, 'Aardbeienvla groot', 34.75, ''],
    [1023, 'Abrikozenvlaai klein', 21.00, ''], [22, 'Abrikozenvlaai', 23.75, '22.JPG'],
    [182, 'Apfelstrudeltaart', 15.50, '', '6 personen'], [99, 'Appeltaart', 15.95, ''],
    [97, 'Bavaroistaart klein', 21.95, ''], [98, 'Bavaroistaart groot', 34.75, ''],
    [104, 'Chipolatataart', 24.80, '', '8 personen'], [155, 'Chipolatataart', 31.00, '', '10 personen'], [156, 'Chipolatataart', 37.20, '', '12 personen'],
    [174, 'Chocoladetaart', 24.80, '', '8 personen'], [181, 'Chocoladetaart', 31.00, '', '10 personen'], [184, 'Chocoladetaart', 37.20, '', '12 personen'],
    [1005, 'Kersenschelp klein', 28.95, ''], [1006, 'Kersenschelp groot', 32.75, ''],
    [95, 'Kwarktaart klein', 21.95, ''], [96, 'Kwarktaart groot', 34.75, ''],
    [92, 'Moccataart', 23.95, '', '8 personen'], [93, 'Moccataart', 29.95, '', '10 personen'], [94, 'Moccataart', 35.95, '', '12 personen'],
    [109, 'Profiterol', 94.00, ''],
    [89, 'Progresstaart', 23.95, '', '8 personen'], [90, 'Progresstaart', 29.95, '', '10 personen'], [91, 'Progresstaart', 35.95, '', '12 personen'],
    [180, 'Rijstevlaai klein', 22.95, '180.JPG'], [39, 'Rijstevlaai', 25.50, '39.JPG'],
    [86, 'Schuimtaart', 23.95, '', '8 personen'], [87, 'Schuimtaart', 29.95, '', '10 personen'], [88, 'Schuimtaart', 35.95, '', '12 personen'],
    [83, 'Slagroomtaart', 23.95, '', '8 personen'], [84, 'Slagroomtaart', 29.95, '', '10 personen'], [85, 'Slagroomtaart', 35.95, '', '12 personen'],
    [175, 'Slagroomtaart', 41.95, '', '14 personen'], [179, 'Slagroomtaart', 47.95, '', '16 personen'], [185, 'Slagroomtaart', 59.95, '', '20 personen'],
    [134, 'Vruchtentaart', 23.95, '', '8 personen'], [135, 'Vruchtentaart', 29.95, '', '10 personen'], [136, 'Vruchtentaart', 35.95, '', '12 personen'],
    [112, 'Vruchtenvlaai klein', 28.95, ''], [113, 'Vruchtenvlaai groot', 32.75, ''],
  ],
  hartig: [
    [65, 'Croissant', 1.50, '65.JPG'], [59, 'Eierkoek', 1.50, '59.jpg'], [55, 'Gevulde koek', 2.20, '55.JPG'],
    [57, 'Ham/kaascroissant', 2.35, '57.JPG'], [29, 'Kaascroissant', 2.35, '29.JPG'], [53, 'Koffiebroodje', 2.20, '53.JPG'],
    [56, 'Kokoskoek', 2.20, '56.JPG'], [1027, 'Mini worstenbroodje', 1.10, '1027.jpg'], [58, 'Saucijzenbroodje', 2.35, '58.JPG'],
    [64, 'Timp', 1.50, ''], [7, 'Worstenbroodje', 2.35, '7.JPG'], [1034, 'Worstenbroodjes per 10', 21.50, '', 'Per 10 stuks'],
    [1039, 'Worstenbroodje vegan', 2.50, ''],
  ],
  overig: [
    [1017, 'Bossche bollen likorette', 23.50, '1017.jpg', 'De vloeibare smaak van de echte Bosschebol: pure Callebaut chocolade en echte room. Flesje 50 cl, 14,9%.'],
    [1014, 'Bossche Kus puur, los', 1.60, '1014.jpg', 'Grote bonbon met stevige chocoladevulling, een vleugje brandewijn en hazelnoot.'],
    [1015, 'Bossche Kus melk, los', 1.60, '1015.jpg', 'Grote bonbon met stevige chocoladevulling, een vleugje brandewijn en hazelnoot.'],
    [1018, 'Bossche Kus puur (kado)', 2.00, '1018.jpg', '1 Bossche Kus in kadoverpakking.'],
    [1019, 'Bossche Kus melk (kado)', 2.00, '1019.jpg', '1 Bossche Kus in kadoverpakking.'],
    [1022, '4 Bossche Kussen gesorteerd (kado)', 7.25, '1022.jpg', 'Kadoverpakking, melk en puur.'],
    [1021, '4 Bossche Kussen melk (kado)', 7.25, '1021.jpg', 'Kadoverpakking.'],
    [1020, '4 Bossche Kussen puur (kado)', 7.25, '1020.jpg', 'Kadoverpakking.'],
    [66, 'Bossche koek', 8.95, '66.JPG'], [69, 'Bossche koek gember', 9.50, '69.JPG'], [67, 'Bossche koek kandij', 9.25, '67.JPG'],
    [68, 'Bossche koek noten', 9.50, '68.JPG'], [79, 'Amandelkoekjes', 5.95, '79.JPG'], [26, 'Bonbons', 5.95, '26.JPG'],
    [75, 'Chocolaatjes', 5.50, '75.JPG'], [72, 'Cake', 5.95, '72.JPG'], [71, 'Kandijkoek', 4.95, '71.JPG'],
    [70, 'Kruidcakekoek', 6.95, '70.JPG'], [81, 'Roomboterkoekjes', 5.95, '81.JPG'], [76, 'Schuimpjes', 4.50, '76.JPG'],
    [80, 'Speculaas', 5.95, '80.JPG'], [82, 'Stroopwafels', 4.95, '82.JPG'], [162, 'Roomboteramandelletter', 17.50, ''],
    [60, 'Brood bruin', 2.95, '60.JPG'], [127, 'Brood bruin half', 1.50, '127.JPG'], [126, 'Brood wit', 2.95, '126.JPG'],
    [128, 'Brood wit half', 1.50, '128.JPG'], [61, 'Broodjes bruin', 0.90, '61.JPG'], [131, 'Broodjes wit', 0.90, ''],
    [62, 'Harde broodjes', 1.30, '62.jpg'], [63, 'Krentenbol', 1.20, '63.JPG'], [129, 'Waldcorn', 3.50, ''], [130, 'Waldcorn half', 1.80, ''],
    [183, 'Pasteibakjes', 2.00, ''],
    [1037, 'Helemaol uit oe bol – carnavalsembleem', 6.00, '1037.jpg'], [1038, 'Helemaol uit oe bol – carnavalsembleem (2 stuks)', 11.11, '1038.jpg'],
    [158, 'Extra versiering', 3.95, '', 'Extra bij uw taart'], [157, 'Opschrift', 3.95, '', 'Extra bij uw taart'],
    [42, 'Foto op taart', 9.25, '', 'Extra bij uw taart'], [41, 'Logo op taart', 8.95, '', 'Extra bij uw taart'], [40, 'Logo op gebak', 0.60, '', 'Extra bij uw gebak'],
  ],
};

const DEFAULT_DESC = { bollen: '', gebak: 'Gebakje, per stuk', taart: '', hartig: 'Per stuk', overig: '' };

const PRODUCTS = [];
for (const [cat, rows] of Object.entries(RAW)) {
  for (const [id, name, price, img, desc, note] of rows) {
    let d = desc || DEFAULT_DESC[cat];
    let title = name;
    if (cat === 'taart' && desc && /personen/.test(desc)) { title = name + ' · ' + desc.replace(' personen', ' pers.'); d = 'Voor ' + desc; }
    if (cat === 'taart' && !desc) d = /vla/i.test(name) ? 'Vlaai' : 'Taart';
    PRODUCTS.push({
      id, cat, name: title, price, note: note || '',
      desc: d,
      img: img === 'hero' ? IMAGES.hero : img ? SITE + 'bollencatalog/fotos-280px/' + img : '',
    });
  }
}
const PRODUCT_BY_ID = Object.fromEntries(PRODUCTS.map(p => [p.id, p]));
const DELIVERY_FEE = 4.00;
const BOL_IDS = [2, 3, 115, 116];
