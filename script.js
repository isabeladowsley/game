

window.onload = function() {

    // Creating my questions\


  var question1 = new QuizQuestion(
    "From which country is this dish?",
    "./src/images/pizza.jpg",
    "Thailand",
    "Italy",
    "Turkey",
    "Italy",
    1,
    "Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and other ingredients baked at a high temperature, traditionally in a wood-fired oven."
  );
  var question2 = new QuizQuestion(
    "In which country is this building situated?",
    "./src/images/opera.jpg",
    "Japan",
    "South Africa",
    "Australia",
    "Australia",
    2,
    "The Sydney Opera House is a multi-venue performing arts centre at Sydney Harbour in Sydney, Australia. It is one of the 20th century's most famous and distinctive buildings. The building was designed by Danish architect Jørn Utzon, and was formally opened on 20 October 1973."
  );
  var question3 = new QuizQuestion(
    "In which country this party happens?",
    "./src/images/oktoberfest.jpg",
    "Germany",
    "Spain",
    "Croatia",
    "Germany",
    2,
    "Oktoberfest is the world's largest beer festival. Held annually in Munich, Germany, it is a 16- to 18-day folk festival running from mid or late September to the first weekend in October, with more than six million people from around the world attending the event every year."
  );
  var question4 = new QuizQuestion(
    "Where does a famous cherry blossom festival take place every April?",
    "./src/images/cherryblossom.jpg",
    "Morroco",
    "Japan",
    "Chile",
    "Japan",
    2,
    "Hanami is the Japanese traditional custom of enjoying the transient beauty of flowers; flowers 'hana' are in this case almost always referring to those of the cherry  or, less frequently, plum trees. From the end of March to early May, cherry trees bloom all over Japan. The blossom forecast is announced each year by the weather bureau."
  );
  var question5 = new QuizQuestion(
    "In which country are those ruins situated?",
    "./src/images/easterisland.jpg",
    "England",
    "Indonesia",
    "Chile",
    "Chile",
    3,
    "Easter Island is a Chilean island in the southeastern Pacific Ocean, at the southeasternmost point of the Polynesian Triangle in Oceania. Easter Island is most famous for its nearly 1,000 extant monumental statues, called moai, created by the early Rapa Nui people. In 1995, UNESCO named Easter Island a World Heritage Site."
  );
  var question6 = new QuizQuestion(
    "Where does this famous street market happens?",
    "./src/images/marrakech.jpg",
    "Canada",
    "Morroco",
    "Bolivia",
    "Morroco",
    3,
    "Jemaa el-Fnaa is a square and market place in Marrakesh's medina quarter (old city). It remains the main square of Marrakesh, used by locals and tourists. During the day it is predominantly occupied by orange juice stalls, water sellers, youths with chained Barbary apes and snake charmers. As darkness falls, the square fills with dozens of food-stalls as the number of people on the square peaks."
  ); 
  var question7 = new QuizQuestion(
    "Where is this beach situated?",
    "./src/images/kophiphi.jpg",
    "Mexico",
    "Brazil",
    "Thailand",
    "Thailand",
    3,
    "The Phi Phi Islands are an island group in Thailand, between the large island of Phuket and the Straits of Malacca .The islands are administratively part of Krabi Province. Ko Phi Phi Don is the largest and most populated island of the group, although the beaches of the second largest island, Ko Phi Phi Le are visited by many people as well.The islands came to worldwide prominence when Ko Phi Phi Le was used as a location for the 2000 British-American film The Beach."
  );
  var question8 = new QuizQuestion(
    "In which country is this site situated?",
    "./src/images/colosseum.jpg",
    "Italy",
    "Poland",
    "Peru",
    "Italy",
    1,
    "The Colosseum or Coliseum is an oval amphitheatre in the centre of the city of Rome, Italy. Built of travertine, tuff, and brick-faced concrete, it is the largest amphitheatre ever built. Construction began under the emperor Vespasian in AD 72 and was completed in AD 80 under his successor and heir Titus. Further modifications were made during the reign of Domitian (81–96). These three emperors are known as the Flavian dynasty, and the amphitheatre was named in Latin for its association with their family name."
  );
  var question9 = new QuizQuestion(
    "Which country is famous for its Safaris?",
    "./src/images/safari.jpg",
    "Egypt",
    "South Africa",
    "India",
    "South Africa",
    1,
    "A safari is an overland journey, usually a trip by tourists in Africa. In the past, the trip was often a big-game hunt, but today, safaris are often to observe and photograph wildlife—or hiking and sightseeing, as well. Kruger National Park is one of the largest game reserves in Africa. It covers an area of 19,485 square kilometres in the provinces of Limpopo and Mpumalanga in northeastern South Africa, and extends 360 kilometres from north to south and 65 kilometres from east to west."
  );
  var question10 = new QuizQuestion(
    "In which country this festival happens?",
    "./src/images/holi.jpg",
    "India",
    "Saudi Arabia",
    "Vietnam",
    "India",
    1,
    "Holi is a Hindu spring festival, celebrated predominantly in India,  also known as the 'festival of colours' or the 'festival of love'. The festival signifies the victory of good over evil, the arrival of spring, and for many a festive day to meet others, play and laugh. It is also celebrated as a thanksgiving for a good harvest."
  );
  var question11 = new QuizQuestion(
    "From which country this indigenous population comes from?",
    "./src/images/maori.jpg",
    "New Zealand",
    "Guatemala",
    "Peru",
    "New Zealand",
    3,
    "The Māori are the indigenous Polynesian people of New Zealand. Māori originated with settlers from eastern Polynesia, who arrived in New Zealand in several waves of canoe voyages some time between 1250 and 1300.Over several centuries in isolation, the Polynesian settlers developed a unique culture, with their own language, a rich mythology, and distinctive crafts and performing arts."
  );
  var question12 = new QuizQuestion(
    "In which country this traditional festival happens?",
    "./src/images/castell.jpg",
    "Greece",
    "Colombia",
    "Spain",
    "Spain",
    3,
    "The origin of the spanish Castells is commonly referenced to be associated with the so-called 'Dance of the Valencianos', an antique celebration that probably started around the XVIII century around religious processions. The birthplace of this celebration is thought to be some in villages of the Ribera Alta, a region in the province of Valencia, but is nowadays associated with the whole Catalan world, that is, Catalonia, Valencia and the Balearic Islands, and to the popular celebrations of its towns and villages."
  );
  var question13 = new QuizQuestion(
    "From which country is this dish?",
    "./src/images/nacho.jpg",
    "Mexico",
    "Ukraine",
    "Singapore",
    "Mexico",
    2,
    "Nachos is a Mexican dish from northern Mexico that consists of heated tortilla chips or totopos covered with melted cheese (or a cheese-based sauce), often served as a snack or appetizer. More elaborate versions of the dish add other ingredients, and may be substantial enough to serve as a main dish. Ignacio Anaya is credited with creating the dish around 1943; the original nachos consisted of fried corn tortilla chips covered with melted cheese and sliced jalapeño peppers."
  );
  var question14 = new QuizQuestion(
    "The maple leaf is the symbol of which country?",
    "./src/images/maple.jpg",
    "Pakistan",
    "Norway",
    "Canada",
    "Canada",
    1,
    "By the early 1700s, the maple leaf had been adopted as an emblem by the French Canadians along the Saint Lawrence River. The maple leaf slowly caught on as a national symbol: in 1868, it was included in the coat of arms of Ontario and the coat of arms of Quebec, and was added to the Canadian coat of arms in 1921. The maple leaf finally became the central national symbol with the introduction of the Canadian flag in 1965, which uses a highly stylized eleven-pointed maple leaf, referring to no specific species of maple."
  );
  var question15 = new QuizQuestion(
    "In which country was this wall constructed?",
    "./src/images/greatwall.jpg",
    "China",
    "Syria",
    "United States",
    "China",
    1,
    "The Great Wall of China is a series of fortifications generally built along an east-to-west line across the historical northern borders of China to protect the Chinese states and empires against the raids and invasions of the various nomadic groups of the Eurasian Steppe with an eye to expansion. Several walls were being built from as early as the 7th century BC; these were later joined together and made bigger by Qin Shi Huang (220–206 BC), the first Emperor of China. Little of that wall remains. Later on, many successive dynasties have repaired, maintained, and newly built multiple stretches of border walls. The most well-known of the walls were built during the Ming Dynasty (1368–1644)."
);
var question16 = new QuizQuestion(
    "Mate tea is usually associated with which country?",
    "./src/images/mate.jpg",
    "Argentina",
    "Finland",
    "Saudi Arabia",
    "Argentina",
    3,
    "Mate also known as chimarrão or cimarrón, is a traditional South American caffeine-rich infused drink, that was first consumed by the Guaraní and also spread by the Tupí people. It is prepared by steeping dried leaves of yerba mate in hot water and is served with a metal straw from a shared hollow calabash gourd. The straw is called a bombilla in Spanish."  
);
var question17 = new QuizQuestion(
    "In which territory is this beach located?",
    "./src/images/borabora.jpg",
    "French Polynesia",
    "Venezuela",
    "Australia",
    "French Polynesia",
    2,
    "Bora Bora is an island group in the western part of the Society Islands of French Polynesia, an overseas collectivity of France in the Pacific Ocean. The main island, located about 230 kilometres northwest of Papeete, is surrounded by a lagoon and a barrier reef. In the center of the island are the remnants of an extinct volcano rising to two peaks, Mount Pahia and Mount Otemanu, the highest point at 727 metres. Bora Bora is a major international tourist destination, famous for its aqua-centric luxury resorts. Produce of the island is mostly limited to what can be obtained from the sea and the plentiful coconut trees."
);
var question18 = new QuizQuestion(
    "With which country is this dish commonly associated?",
    "./src/images/baklava.jpg",
    "Portugal",
    "Turkey",
    "China",
    "Turkey",
    3,
    "In Turkey, baklava is traditionally made by filling between the layers of dough with pistachios, walnuts or almonds (in some parts of the Aegean Region). In the Black Sea Region hazelnuts are commonly used as a filling for baklava. Hazelnuts are also used as a filling for the Turkish dessert Sütlü Nuriye, a lighter version of the dessert which substitutes milk for the simple syrup used in traditional baklava recipes Şöbiyet is a variation that includes fresh cream in the filling, in addition to the traditional nuts."
);
var question19 = new QuizQuestion(
    "Which country is famous for its carnival?",
    "./src/images/carnival.jpg",
    "Spain",
    "Brazil",
    "Malaysia",
    "Brazil",
    1,
    "The Carnival of Brazil  is an annual Brazilian festival held between the Friday afternoon before Ash Wednesday and Ash Wednesday at noon, which marks the beginning of Lent, the forty-day period before Easter. The typical genres of music of Brazilian carnival are, in the Southeast Region in general, mostly cities of Rio de Janeiro and São Paulo: the samba-enredo, the samba de bloco, the samba de embalo and the marchinha; and in the Northeast Region including Pernambuco (mostly cities of Olinda and Recife): frevo and maracatu, and Bahia (mostly the city of Salvador)."  
);
var question20 = new QuizQuestion(
    "In which country is this site situated?",
    "./src/images/machupichu.jpg",
    "Peru",
    "Italy",
    "Nepal",
    "Peru",
    2,
    "Machu Picchu is a 15th-century Inca citadel, located in the Eastern Cordillera of southern Peru, on a mountain ridge 2,430 metres above sea level. It is located in the Cusco Region,  above the Sacred Valley, which is 80 kilometres northwest of Cuzco and through which the Urubamba River flows, which cuts through the Cordillera and originates a canyon with a tropical mountain climate. Most archaeologists believe that Machu Picchu was constructed as an estate for the Inca emperor Pachacuti (1438–1472). Often mistakenly referred to as the ’Lost City of the Incas’ (a title more accurately applied to Vilcabamba), it is the most familiar icon of Inca civilization."
  );


//   Creating my quiz

  quiz = new QuizGame([question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, question11, question12, question13, question14, question15, question16, question17, question18, question19, question20], 0, 0);    
  quiz.load();
  quiz.hello();
  quiz.start(quiz);



  //Buttons Functionality

  document.getElementById("checkbtn").addEventListener("click", function() {
    quiz.checkAnswer();
    quiz.updatePointsTable();
  });

  nextPage(quiz);
  previousPage(quiz);


};

