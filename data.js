// Contenu du cours — niveau A1
// vocab :     [anglais, français, emoji]
// sentences : [anglais, français, [autres réponses anglaises acceptées]]
// blanks :    [phrase avec ___, bonne réponse, [options], traduction, astuce si erreur]

window.COURSE = [
  {
    id: "u1", emoji: "👋", title: "Bonjour !", subtitle: "Saluer et se présenter", color: "#FF7A45",
    vocab: [
      ["hello", "bonjour", "👋"],
      ["goodbye", "au revoir", "🚪"],
      ["please", "s'il vous plaît", "🙏"],
      ["thank you", "merci", "😊"],
      ["yes", "oui", "✅"],
      ["no", "non", "❌"],
      ["name", "nom", "🏷️"],
      ["sorry", "désolé", "😔"],
      ["friend", "ami", "🤝"],
      ["French", "français", "🇫🇷"],
      ["English", "anglais", "🇬🇧"],
      ["nice to meet you", "enchanté", "🤗"]
    ],
    sentences: [
      ["Hello, my name is Tom.", "Bonjour, je m'appelle Tom.", ["Hello, I am Tom.", "Hi, my name is Tom.", "Hi, I am Tom.", "Hello, I am called Tom."]],
      ["What is your name?", "Comment tu t'appelles ?", ["What's your name?"]],
      ["I am French.", "Je suis français.", []],
      ["Nice to meet you.", "Enchanté.", ["Pleased to meet you."]],
      ["How are you?", "Comment vas-tu ?", []],
      ["I am fine, thank you.", "Je vais bien, merci.", ["I am good, thank you.", "I am fine, thanks.", "I am good, thanks.", "Fine, thank you.", "I am well, thank you."]],
      ["And you?", "Et toi ?", []],
      ["See you tomorrow!", "À demain !", []],
      ["I don't understand.", "Je ne comprends pas.", []],
      ["Can you repeat, please?", "Pouvez-vous répéter, s'il vous plaît ?", ["Could you repeat, please?", "Can you repeat that, please?", "Could you repeat that, please?"]]
    ],
    blanks: [
      ["I ___ French.", "am", ["am", "is", "are"], "Je suis français.", "Avec I, on utilise toujours am."],
      ["You ___ my friend.", "are", ["am", "is", "are"], "Tu es mon ami.", "Avec you, on utilise are."],
      ["___ name is Tom.", "My", ["My", "I", "Me"], "Je m'appelle Tom.", "my = mon / ma (ce qui m'appartient)."],
      ["How ___ you?", "are", ["is", "are", "am"], "Comment vas-tu ?", "How are you? est une formule figée : avec you, toujours are."]
    ]
  },
  {
    id: "u2", emoji: "🔢", title: "Les nombres", subtitle: "Compter, dire son âge", color: "#3B82F6",
    vocab: [
      ["one", "un", "1️⃣"],
      ["two", "deux", "2️⃣"],
      ["three", "trois", "3️⃣"],
      ["four", "quatre", "4️⃣"],
      ["five", "cinq", "5️⃣"],
      ["six", "six", "6️⃣"],
      ["seven", "sept", "7️⃣"],
      ["eight", "huit", "8️⃣"],
      ["nine", "neuf", "9️⃣"],
      ["ten", "dix", "🔟"],
      ["twenty", "vingt", "2️⃣0️⃣"],
      ["thirty", "trente", "3️⃣0️⃣"]
    ],
    sentences: [
      ["How old are you?", "Quel âge as-tu ?", []],
      ["I am thirty years old.", "J'ai trente ans.", ["I am thirty."]],
      ["I have two children.", "J'ai deux enfants.", ["I have two kids.", "I have got two children."]],
      ["She is twenty.", "Elle a vingt ans.", ["She is twenty years old."]],
      ["It costs five euros.", "Ça coûte cinq euros.", ["It is five euros.", "That costs five euros.", "This costs five euros."]],
      ["One coffee, please.", "Un café, s'il vous plaît.", ["A coffee, please."]],
      ["Two coffees, please.", "Deux cafés, s'il vous plaît.", []],
      ["We are four.", "Nous sommes quatre.", ["There are four of us."]],
      ["I am ten minutes late.", "J'ai dix minutes de retard.", []],
      ["My son is eight.", "Mon fils a huit ans.", ["My son is eight years old."]]
    ],
    blanks: [
      ["I am thirty years ___.", "old", ["old", "age", "year"], "J'ai trente ans.", "En anglais, on « est » son âge : I am 30 years old."],
      ["How ___ are you?", "old", ["old", "many", "much"], "Quel âge as-tu ?", "Pour demander l'âge : How old are you?"],
      ["I ___ two children.", "have", ["have", "am", "has"], "J'ai deux enfants.", "I have = j'ai."],
      ["She ___ twenty.", "is", ["is", "are", "has"], "Elle a vingt ans.", "Pour l'âge, on utilise be (is), pas have."]
    ]
  },
  {
    id: "u3", emoji: "👨‍👩‍👧", title: "La famille", subtitle: "Parler de ses proches", color: "#A855F7",
    vocab: [
      ["mother", "mère", "👩"],
      ["father", "père", "👨"],
      ["sister", "sœur", "👭"],
      ["brother", "frère", "👦"],
      ["son", "fils", "🧒"],
      ["daughter", "fille", "👧"],
      ["husband", "mari", "🤵"],
      ["wife", "épouse", "👰"],
      ["children", "enfants", "👫"],
      ["family", "famille", "🏠"],
      ["baby", "bébé", "👶"],
      ["grandmother", "grand-mère", "👵"]
    ],
    sentences: [
      ["This is my mother.", "Voici ma mère.", ["Here is my mother.", "This is my mom.", "This is my mum."]],
      ["I have a sister.", "J'ai une sœur.", ["I have got a sister.", "I have one sister."]],
      ["My brother is tall.", "Mon frère est grand.", []],
      ["Do you have children?", "As-tu des enfants ?", ["Have you got children?", "Do you have kids?", "Have you got any children?", "Do you have any children?"]],
      ["My wife is a nurse.", "Ma femme est infirmière.", []],
      ["My father works in Paris.", "Mon père travaille à Paris.", ["My dad works in Paris."]],
      ["His name is Paul.", "Il s'appelle Paul.", ["He is called Paul."]],
      ["Her son is five.", "Son fils a cinq ans.", ["His son is five.", "Her son is five years old.", "His son is five years old."]],
      ["We are a big family.", "Nous sommes une grande famille.", []],
      ["I love my family.", "J'aime ma famille.", ["I like my family."]]
    ],
    blanks: [
      ["This ___ my brother.", "is", ["is", "are", "am"], "Voici mon frère.", "This is = voici / c'est."],
      ["I have ___ sister.", "a", ["a", "an", "two"], "J'ai une sœur.", "Devant un son consonne : a. Devant un son voyelle : an."],
      ["___ name is Paul. He is my father.", "His", ["His", "Her", "Your"], "Il s'appelle Paul. C'est mon père.", "his = son / sa pour un homme, her = son / sa pour une femme."],
      ["My sister ___ two children.", "has", ["has", "have", "is"], "Ma sœur a deux enfants.", "Avec he / she / it : has (pas have)."]
    ]
  },
  {
    id: "u4", emoji: "🍽️", title: "Au restaurant", subtitle: "Commander et payer", color: "#EF4444",
    vocab: [
      ["water", "eau", "💧"],
      ["bread", "pain", "🍞"],
      ["coffee", "café", "☕"],
      ["tea", "thé", "🍵"],
      ["cheese", "fromage", "🧀"],
      ["chicken", "poulet", "🍗"],
      ["fish", "poisson", "🐟"],
      ["wine", "vin", "🍷"],
      ["meat", "viande", "🥩"],
      ["the bill", "l'addition", "🧾"],
      ["hungry", "affamé", "😋"],
      ["delicious", "délicieux", "🤤"]
    ],
    sentences: [
      ["I would like a coffee, please.", "Je voudrais un café, s'il vous plaît.", ["A coffee, please.", "Can I have a coffee, please?", "Could I have a coffee, please?"]],
      ["Can I see the menu?", "Je peux voir la carte ?", ["Can I see the menu, please?", "Could I see the menu?", "May I see the menu?"]],
      ["I am hungry.", "J'ai faim.", []],
      ["I am thirsty.", "J'ai soif.", []],
      ["The bill, please.", "L'addition, s'il vous plaît.", ["Can I have the bill, please?", "The check, please.", "Could I have the bill, please?"]],
      ["I don't eat meat.", "Je ne mange pas de viande.", []],
      ["Some water, please.", "De l'eau, s'il vous plaît.", ["Water, please."]],
      ["It is delicious!", "C'est délicieux !", ["This is delicious!", "That is delicious!"]],
      ["Where are the toilets?", "Où sont les toilettes ?", ["Where is the toilet?", "Where is the bathroom?", "Where are the restrooms?"]],
      ["I'll have the chicken.", "Je vais prendre le poulet.", ["I would like the chicken.", "I will take the chicken."]]
    ],
    blanks: [
      ["I would ___ a tea, please.", "like", ["like", "liking", "likes"], "Je voudrais un thé, s'il vous plaît.", "I would like = je voudrais. Le verbe reste à sa forme de base."],
      ["I ___ hungry.", "am", ["am", "have", "is"], "J'ai faim.", "J'ai faim = I am hungry (on utilise be, pas have)."],
      ["Can I ___ the bill, please?", "have", ["have", "has", "am"], "Je peux avoir l'addition, s'il vous plaît ?", "Après can, le verbe reste à sa forme de base : have."],
      ["___ are the toilets?", "Where", ["Where", "What", "Who"], "Où sont les toilettes ?", "where = où."]
    ]
  },
  {
    id: "u5", emoji: "⏰", title: "L'heure et la journée", subtitle: "Jours, heures, routine", color: "#F59E0B",
    vocab: [
      ["morning", "matin", "🌅"],
      ["evening", "soir", "🌆"],
      ["night", "nuit", "🌙"],
      ["today", "aujourd'hui", "📅"],
      ["tomorrow", "demain", "➡️"],
      ["yesterday", "hier", "⬅️"],
      ["Monday", "lundi", "1️⃣"],
      ["Saturday", "samedi", "🎉"],
      ["Sunday", "dimanche", "😴"],
      ["hour", "heure", "⏳"],
      ["week", "semaine", "🗓️"],
      ["now", "maintenant", "⚡"]
    ],
    sentences: [
      ["What time is it?", "Quelle heure est-il ?", []],
      ["It is seven o'clock.", "Il est sept heures.", ["It is seven."]],
      ["I get up at seven.", "Je me lève à sept heures.", ["I get up at seven o'clock.", "I wake up at seven.", "I wake up at seven o'clock."]],
      ["I work on Monday.", "Je travaille lundi.", ["I work on Mondays.", "I work Monday."]],
      ["See you on Sunday!", "À dimanche !", ["See you Sunday!"]],
      ["I am busy today.", "Je suis occupé aujourd'hui.", ["Today I am busy."]],
      ["Good evening!", "Bonsoir !", []],
      ["Good night!", "Bonne nuit !", []],
      ["I go to bed at eleven.", "Je me couche à onze heures.", ["I go to bed at eleven o'clock.", "I go to sleep at eleven."]],
      ["We eat at noon.", "Nous mangeons à midi.", ["We eat at twelve.", "We have lunch at noon."]]
    ],
    blanks: [
      ["It is seven ___.", "o'clock", ["o'clock", "hours", "time"], "Il est sept heures.", "Il est 7 heures = It is seven o'clock."],
      ["I work ___ Monday.", "on", ["on", "in", "at"], "Je travaille lundi.", "Devant un jour : on."],
      ["I get up ___ seven.", "at", ["at", "on", "in"], "Je me lève à sept heures.", "Devant une heure : at."],
      ["See you ___!", "tomorrow", ["tomorrow", "yesterday", "hour"], "À demain !", "tomorrow = demain, yesterday = hier."]
    ]
  },
  {
    id: "u6", emoji: "🛒", title: "Les courses", subtitle: "Acheter, payer, demander un prix", color: "#10B981",
    vocab: [
      ["shop", "magasin", "🏪"],
      ["money", "argent", "💶"],
      ["price", "prix", "🏷️"],
      ["cheap", "pas cher", "👍"],
      ["expensive", "cher", "💸"],
      ["bag", "sac", "👜"],
      ["apple", "pomme", "🍎"],
      ["milk", "lait", "🥛"],
      ["eggs", "œufs", "🥚"],
      ["card", "carte", "💳"],
      ["cash", "espèces", "💵"],
      ["supermarket", "supermarché", "🛒"]
    ],
    sentences: [
      ["How much is it?", "C'est combien ?", ["How much is this?", "How much does it cost?", "How much?", "How much is that?"]],
      ["It is too expensive.", "C'est trop cher.", ["That is too expensive.", "This is too expensive."]],
      ["Do you have a bag?", "Vous avez un sac ?", ["Have you got a bag?"]],
      ["I am looking for milk.", "Je cherche du lait.", ["I am looking for some milk."]],
      ["Can I pay by card?", "Je peux payer par carte ?", ["Can I pay with a card?", "Can I pay with card?", "Can I pay by credit card?", "May I pay by card?"]],
      ["I would like six eggs.", "Je voudrais six œufs.", []],
      ["Where is the supermarket?", "Où est le supermarché ?", []],
      ["That's all, thank you.", "C'est tout, merci.", ["That is all, thanks.", "That's all, thanks."]],
      ["I only have cash.", "J'ai seulement des espèces.", ["I just have cash.", "I have only cash."]],
      ["It is cheap!", "Ce n'est pas cher !", ["That is cheap!", "It is not expensive!", "It isn't expensive!"]]
    ],
    blanks: [
      ["How ___ is it?", "much", ["much", "many", "old"], "C'est combien ?", "Pour un prix : How much?"],
      ["Can I pay ___ card?", "by", ["by", "in", "on"], "Je peux payer par carte ?", "Payer par carte = pay by card."],
      ["I am ___ for milk.", "looking", ["looking", "look", "looks"], "Je cherche du lait.", "I am + verbe en -ing = action en cours."],
      ["It is ___ expensive.", "too", ["too", "to", "two"], "C'est trop cher.", "too = trop. to = à / vers. two = deux. Même son, sens différent !"]
    ]
  },
  {
    id: "u7", emoji: "✈️", title: "Aéroport et hôtel", subtitle: "Voyager sans stress", color: "#06B6D4",
    vocab: [
      ["plane", "avion", "✈️"],
      ["ticket", "billet", "🎫"],
      ["passport", "passeport", "🛂"],
      ["suitcase", "valise", "🧳"],
      ["room", "chambre", "🛏️"],
      ["key", "clé", "🔑"],
      ["flight", "vol", "🛫"],
      ["gate", "porte d'embarquement", "🚪"],
      ["breakfast", "petit-déjeuner", "🥐"],
      ["airport", "aéroport", "🛬"],
      ["booking", "réservation", "📋"],
      ["late", "en retard", "⏱️"]
    ],
    sentences: [
      ["I have a reservation.", "J'ai une réservation.", ["I have a booking."]],
      ["Here is my passport.", "Voici mon passeport.", ["This is my passport."]],
      ["Where is gate twelve?", "Où est la porte douze ?", []],
      ["My flight is at ten.", "Mon vol est à dix heures.", ["My flight is at ten o'clock."]],
      ["I lost my suitcase.", "J'ai perdu ma valise.", ["I have lost my suitcase."]],
      ["A room for two nights, please.", "Une chambre pour deux nuits, s'il vous plaît.", []],
      ["What time is breakfast?", "À quelle heure est le petit-déjeuner ?", ["When is breakfast?"]],
      ["Is breakfast included?", "Le petit-déjeuner est inclus ?", []],
      ["The flight is late.", "Le vol est en retard.", ["The flight is delayed."]],
      ["One ticket to London, please.", "Un billet pour Londres, s'il vous plaît.", ["A ticket to London, please."]]
    ],
    blanks: [
      ["Here ___ my passport.", "is", ["is", "are", "am"], "Voici mon passeport.", "Here is = voici (pour une seule chose)."],
      ["I ___ my suitcase.", "lost", ["lost", "lose", "loses"], "J'ai perdu ma valise.", "lost = perdu (passé de lose)."],
      ["My flight is ___ ten.", "at", ["at", "in", "on"], "Mon vol est à dix heures.", "Devant une heure : at."],
      ["A room ___ two nights, please.", "for", ["for", "to", "of"], "Une chambre pour deux nuits, s'il vous plaît.", "for = pour (une durée)."]
    ]
  },
  {
    id: "u8", emoji: "🧭", title: "Trouver son chemin", subtitle: "Demander et comprendre une direction", color: "#8B5CF6",
    vocab: [
      ["left", "gauche", "⬅️"],
      ["right", "droite", "➡️"],
      ["straight on", "tout droit", "⬆️"],
      ["street", "rue", "🛣️"],
      ["station", "gare", "🚉"],
      ["near", "près", "📍"],
      ["far", "loin", "🏔️"],
      ["map", "plan", "🗺️"],
      ["corner", "coin", "📐"],
      ["bridge", "pont", "🌉"],
      ["bank", "banque", "🏦"],
      ["lost", "perdu", "😵"]
    ],
    sentences: [
      ["Where is the station?", "Où est la gare ?", ["Where is the train station?"]],
      ["Turn left.", "Tournez à gauche.", ["Go left."]],
      ["Turn right at the corner.", "Tournez à droite au coin.", ["Turn right on the corner."]],
      ["Go straight on.", "Allez tout droit.", ["Go straight ahead.", "Go straight."]],
      ["Is it far?", "C'est loin ?", ["Is it far away?"]],
      ["It is near the bank.", "C'est près de la banque.", ["It is close to the bank."]],
      ["I am lost.", "Je suis perdu.", []],
      ["Can you help me?", "Pouvez-vous m'aider ?", ["Could you help me?", "Can you help me, please?", "Could you help me, please?"]],
      ["Take the second street on the right.", "Prenez la deuxième rue à droite.", ["Take the second street on your right.", "Take the second road on the right."]],
      ["It is five minutes on foot.", "C'est à cinq minutes à pied.", ["It is a five minute walk."]]
    ],
    blanks: [
      ["The bank is ___ the station.", "near", ["near", "far", "next"], "La banque est près de la gare.", "near = près de. (far et next ont besoin d'un autre mot : far from, next to.)"],
      ["Where ___ the station?", "is", ["is", "are", "am"], "Où est la gare ?", "Une seule chose → is."],
      ["Go straight ___.", "on", ["on", "in", "at"], "Allez tout droit.", "Tout droit = straight on."],
      ["Can you help ___?", "me", ["me", "I", "my"], "Pouvez-vous m'aider ?", "Après un verbe : me (pas I)."]
    ]
  },
  {
    id: "u9", emoji: "🎨", title: "Loisirs et goûts", subtitle: "Dire ce qu'on aime", color: "#EC4899",
    vocab: [
      ["music", "musique", "🎵"],
      ["book", "livre", "📖"],
      ["movie", "film", "🎬"],
      ["to read", "lire", "📚"],
      ["to cook", "cuisiner", "🍳"],
      ["to swim", "nager", "🏊"],
      ["to walk", "marcher", "🚶"],
      ["to dance", "danser", "💃"],
      ["to play", "jouer", "🎮"],
      ["garden", "jardin", "🌻"],
      ["weekend", "week-end", "🏖️"],
      ["favourite", "préféré", "⭐"]
    ],
    sentences: [
      ["I like music.", "J'aime la musique.", ["I love music."]],
      ["I don't like sport.", "Je n'aime pas le sport.", ["I don't like sports."]],
      ["What do you like?", "Qu'est-ce que tu aimes ?", []],
      ["I love reading.", "J'adore lire.", ["I love to read."]],
      ["She plays tennis.", "Elle joue au tennis.", []],
      ["We go swimming on Sunday.", "Nous allons nager le dimanche.", ["We go swimming on Sundays.", "We swim on Sunday.", "We swim on Sundays."]],
      ["Do you like to cook?", "Tu aimes cuisiner ?", ["Do you like cooking?"]],
      ["My favourite colour is blue.", "Ma couleur préférée est le bleu.", ["My favorite color is blue.", "My favourite color is blue.", "My favorite colour is blue."]],
      ["I walk in the park.", "Je marche dans le parc.", ["I go for a walk in the park."]],
      ["What do you do at the weekend?", "Que fais-tu le week-end ?", ["What do you do on the weekend?", "What do you do on weekends?", "What do you do at weekends?"]]
    ],
    blanks: [
      ["I don't ___ sport.", "like", ["like", "likes", "liking"], "Je n'aime pas le sport.", "Après don't, le verbe reste à sa forme de base."],
      ["She ___ tennis.", "plays", ["plays", "play", "playing"], "Elle joue au tennis.", "Avec he / she / it, on ajoute -s au verbe."],
      ["I love ___.", "reading", ["reading", "read", "reads"], "J'adore lire.", "Après love / like, on met souvent le verbe en -ing."],
      ["What ___ you like?", "do", ["do", "does", "are"], "Qu'est-ce que tu aimes ?", "Pour poser une question avec you : do."]
    ]
  },
  {
    id: "u10", emoji: "☀️", title: "Météo et discussions", subtitle: "Faire la conversation", color: "#0EA5E9",
    vocab: [
      ["sun", "soleil", "☀️"],
      ["rain", "pluie", "🌧️"],
      ["snow", "neige", "❄️"],
      ["wind", "vent", "💨"],
      ["cold", "froid", "🥶"],
      ["hot", "chaud", "🥵"],
      ["weather", "météo", "🌦️"],
      ["summer", "été", "🏝️"],
      ["winter", "hiver", "⛄"],
      ["sky", "ciel", "🌤️"],
      ["umbrella", "parapluie", "☂️"],
      ["cloud", "nuage", "☁️"]
    ],
    sentences: [
      ["It is sunny today.", "Il fait beau aujourd'hui.", ["It is nice today.", "The weather is nice today.", "Today it is sunny.", "It is a nice day today."]],
      ["It is raining.", "Il pleut.", ["It rains."]],
      ["It is cold!", "Il fait froid !", []],
      ["I am hot.", "J'ai chaud.", []],
      ["What is the weather like?", "Quel temps fait-il ?", ["How is the weather?"]],
      ["I love summer.", "J'adore l'été.", ["I love the summer."]],
      ["Have a nice day!", "Bonne journée !", ["Have a good day!"]],
      ["Have a nice weekend!", "Bon week-end !", ["Have a good weekend!"]],
      ["It is snowing in the mountains.", "Il neige à la montagne.", ["It snows in the mountains."]],
      ["Take an umbrella.", "Prends un parapluie.", []]
    ],
    blanks: [
      ["It ___ raining.", "is", ["is", "are", "has"], "Il pleut.", "Pour la météo, on commence par It is…"],
      ["I ___ cold.", "am", ["am", "have", "is"], "J'ai froid.", "J'ai froid = I am cold (be, pas have)."],
      ["What is the weather ___?", "like", ["like", "as", "how"], "Quel temps fait-il ?", "Formule figée : What is the weather like?"],
      ["Take ___ umbrella.", "an", ["an", "a", "two"], "Prends un parapluie.", "Devant un son voyelle (u-mbrella) : an."]
    ]
  }
];
