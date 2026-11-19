// Contenu du cours — niveau A2
// vocab :     [anglais, français, emoji]
// sentences : [anglais, français, [autres réponses anglaises acceptées]]
// blanks :    [phrase avec ___, bonne réponse, [options], traduction, astuce si erreur, point de grammaire]

window.COURSE_A2 = [
  {
    id: "a2u0", emoji: "🪤", title: "Tes pièges à éviter", subtitle: "D'après tes erreurs du niveau A1", color: "#E0393E",
    vocab: [
      ["to be hungry", "avoir faim", "😋"],
      ["to be thirsty", "avoir soif", "🥤"],
      ["to be cold", "avoir froid", "🥶"],
      ["to be hot", "avoir chaud", "🥵"],
      ["to be right", "avoir raison", "👍"],
      ["to be wrong", "avoir tort", "👎"],
      ["to be afraid", "avoir peur", "😨"],
      ["to be lucky", "avoir de la chance", "🍀"],
      ["to be sleepy", "avoir sommeil", "😪"],
      ["to be ashamed", "avoir honte", "😳"],
      ["to be in a hurry", "être pressé", "🏃"],
      ["to be fed up", "en avoir marre", "😤"]
    ],
    sentences: [
      ["She is thirty years old.", "Elle a trente ans.", ["She is thirty."]],
      ["Are you thirsty?", "As-tu soif ?", []],
      ["You are right, it is too late.", "Tu as raison, il est trop tard.", []],
      ["My son is afraid of dogs.", "Mon fils a peur des chiens.", ["My son is scared of dogs.", "My son is frightened of dogs."]],
      ["We are lucky today.", "Nous avons de la chance aujourd'hui.", ["Today we are lucky."]],
      ["I get up at seven in the morning.", "Je me lève à sept heures du matin.", ["I get up at seven o'clock in the morning.", "I wake up at seven in the morning.", "I wake up at seven o'clock in the morning."]],
      ["We go to the market on Saturday morning.", "Nous allons au marché le samedi matin.", ["We go to the market on Saturday mornings.", "We go to the market every Saturday morning.", "On Saturday mornings we go to the market.", "Every Saturday morning we go to the market."]],
      ["My mother works in a hospital.", "Ma mère travaille dans un hôpital.", ["My mother works at a hospital.", "My mom works in a hospital.", "My mom works at a hospital."]],
      ["Does your brother like cooking?", "Est-ce que ton frère aime cuisiner ?", ["Does your brother like to cook?", "Does your brother love cooking?", "Does your brother love to cook?", "Does your brother enjoy cooking?"]],
      ["I am cold, can you close the window?", "J'ai froid, tu peux fermer la fenêtre ?", ["I am cold, could you close the window?", "I am cold, can you shut the window?", "I am cold, could you shut the window?"]]
    ],
    blanks: [
      ["She ___ forty years old.", "is", ["is", "has", "have", "are"], "Elle a quarante ans.", "L'âge se dit avec be : she is forty. Jamais has.", "L'âge (be + old)"],
      ["I ___ thirsty, can I have some water?", "am", ["am", "have", "has", "do"], "J'ai soif, je peux avoir de l'eau ?", "Avoir soif, faim, froid, chaud, peur… se disent avec be en anglais.", "Be ou have (faim, froid…)"],
      ["You ___ right, it is a good idea.", "are", ["are", "have", "has", "is"], "Tu as raison, c'est une bonne idée.", "Avoir raison = to be right.", "Be ou have (faim, froid…)"],
      ["My meeting is ___ Monday morning.", "on", ["on", "at", "in", "the"], "Ma réunion est lundi matin.", "Devant un jour, même suivi de morning : on.", "Prépositions de temps"],
      ["The film starts ___ eight o'clock.", "at", ["at", "on", "in", "to"], "Le film commence à huit heures.", "Devant une heure précise : at.", "Prépositions de temps"],
      ["We always go on holiday ___ August.", "in", ["in", "on", "at", "the"], "Nous partons toujours en vacances en août.", "Devant un mois, une saison ou une année : in.", "Prépositions de temps"],
      ["My brother ___ in a bank.", "works", ["works", "work", "working", "is work"], "Mon frère travaille dans une banque.", "Avec he / she / it, on ajoute -s au verbe : he works.", "Présent simple (-s à la 3e personne)"],
      ["She enjoys ___ with her friends.", "dancing", ["dancing", "dance", "to dance", "dances"], "Elle aime danser avec ses amies.", "Après enjoy, le verbe prend toujours -ing.", "Gérondif / infinitif"]
    ]
  },
  {
    id: "a2u1", emoji: "📸", title: "Le week-end dernier", subtitle: "Raconter ce qu'on a fait", color: "#FF7A45",
    vocab: [
      ["last night", "hier soir", "🌃"],
      ["party", "fête", "🎉"],
      ["beach", "plage", "🏖️"],
      ["museum", "musée", "🏛️"],
      ["concert", "concert", "🎤"],
      ["to visit", "visiter", "🏰"],
      ["to stay", "rester", "⏸️"],
      ["to forget", "oublier", "🤦"],
      ["to meet", "rencontrer", "🤝"],
      ["to buy", "acheter", "🛍️"],
      ["to relax", "se détendre", "🧘"],
      ["to win", "gagner (un match)", "🏆"]
    ],
    sentences: [
      ["We went to the beach on Saturday.", "Nous sommes allés à la plage samedi.", ["We went to the beach last Saturday.", "We went to the beach Saturday.", "On Saturday we went to the beach.", "Last Saturday we went to the beach."]],
      ["I saw a good film last night.", "J'ai vu un bon film hier soir.", ["I saw a good movie last night.", "I saw a good film yesterday evening.", "I saw a good movie yesterday evening.", "I watched a good film last night.", "I watched a good movie last night.", "Last night I saw a good film.", "Last night I saw a good movie.", "Yesterday evening I saw a good film.", "Yesterday evening I saw a good movie.", "I watched a good film yesterday evening.", "I watched a good movie yesterday evening.", "Last night I watched a good film.", "Last night I watched a good movie."]],
      ["Did you have a good weekend?", "Tu as passé un bon week-end ?", ["Did you have a nice weekend?", "Have you had a good weekend?", "Have you had a nice weekend?"]],
      ["We ate at a good restaurant yesterday.", "Nous avons mangé dans un bon restaurant hier.", ["We ate in a good restaurant yesterday.", "We ate at a nice restaurant yesterday.", "We ate in a nice restaurant yesterday.", "Yesterday we ate at a good restaurant.", "Yesterday we ate in a good restaurant.", "Yesterday we ate at a nice restaurant.", "Yesterday we ate in a nice restaurant."]],
      ["She bought a present for her mother.", "Elle a acheté un cadeau pour sa mère.", ["She bought a gift for her mother.", "She has bought a present for her mother.", "She has bought a gift for her mother.", "She bought her mother a present.", "She bought her mother a gift.", "She has bought her mother a present.", "She has bought her mother a gift.", "She bought a present for her mom.", "She bought a gift for her mom.", "She bought her mom a present."]],
      ["The museum was closed on Monday.", "Le musée était fermé lundi.", ["The museum was closed last Monday.", "The museum was closed Monday.", "On Monday the museum was closed."]],
      ["Were you at home last night?", "Tu étais à la maison hier soir ?", ["Were you home last night?", "Were you at home yesterday evening?", "Were you home yesterday evening?"]],
      ["What did you do yesterday?", "Qu'est-ce que tu as fait hier ?", []],
      ["We had a good time at the party.", "On s'est bien amusés à la fête.", ["We had a great time at the party.", "We had a nice time at the party.", "We had fun at the party.", "We had a lot of fun at the party.", "We had great fun at the party.", "We enjoyed ourselves at the party."]],
      ["I left my keys at home.", "J'ai oublié mes clés à la maison.", ["I have left my keys at home.", "I forgot my keys at home.", "I have forgotten my keys at home."]]
    ],
    blanks: [
      ["Last summer we ___ to London.", "went", ["went", "go", "goes", "gone"], "L'été dernier, nous sommes allés à Londres.", "go est irrégulier : au passé, on dit went (à toutes les personnes).", "Passé simple irrégulier"],
      ["I ___ my grandmother last Sunday.", "visited", ["visited", "visit", "visits", "visiting"], "J'ai rendu visite à ma grand-mère dimanche dernier.", "Verbe régulier : on ajoute -ed pour former le passé (visit → visited).", "Passé simple régulier"],
      ["___ you go out last night?", "Did", ["Did", "Do", "Were", "Have"], "Tu es sorti hier soir ?", "Question au passé : Did + sujet + verbe à la base.", "Passé simple : question et négation"],
      ["She didn't ___ the film.", "see", ["see", "saw", "seen", "sees"], "Elle n'a pas vu le film.", "Après didn't, le verbe reste à la base : didn't see (pas didn't saw).", "Passé simple : question et négation"],
      ["Yesterday we ___ very tired.", "were", ["were", "was", "are", "been"], "Hier, nous étions très fatigués.", "Passé de be : was avec I / he / she / it, were avec you / we / they.", "Passé de be (was / were)"],
      ["He ___ a new phone last week.", "bought", ["bought", "buyed", "buys", "buy"], "Il a acheté un nouveau téléphone la semaine dernière.", "buy est irrégulier : au passé, on dit bought.", "Passé simple irrégulier"]
    ]
  },
  {
    id: "a2u2", emoji: "💼", title: "Au travail", subtitle: "Métiers, bureau et collègues", color: "#3B82F6",
    vocab: [
      ["job", "emploi", "💼"],
      ["office", "bureau (lieu de travail)", "🏢"],
      ["colleague", "collègue", "👥"],
      ["boss", "patron", "🧑‍💼"],
      ["meeting", "réunion", "📊"],
      ["salary", "salaire", "💰"],
      ["company", "entreprise", "🏭"],
      ["computer", "ordinateur", "💻"],
      ["customer", "client", "🛎️"],
      ["teacher", "professeur (à l'école)", "👩‍🏫"],
      ["engineer", "ingénieur", "👷"],
      ["day off", "jour de congé", "🏝️"]
    ],
    sentences: [
      ["What do you do for a living?", "Qu'est-ce que tu fais dans la vie ?", ["What do you do?", "What is your job?", "What job do you do?"]],
      ["I work for a big company.", "Je travaille pour une grande entreprise.", ["I work for a large company.", "I work in a big company.", "I work in a large company.", "I work at a big company.", "I work at a large company."]],
      ["My office is on the third floor.", "Mon bureau est au troisième étage.", []],
      ["We have a meeting at ten o'clock.", "Nous avons une réunion à dix heures.", ["We have a meeting at ten.", "We have got a meeting at ten o'clock.", "We have got a meeting at ten."]],
      ["She is working from home today.", "Elle travaille de chez elle aujourd'hui.", ["She is working at home today.", "She works from home today.", "She works at home today.", "Today she is working from home.", "Today she is working at home."]],
      ["My colleagues are very friendly.", "Mes collègues sont très sympas.", ["My colleagues are very nice.", "My coworkers are very friendly.", "My coworkers are very nice."]],
      ["I have to finish this report today.", "Je dois finir ce rapport aujourd'hui.", ["I must finish this report today.", "I need to finish this report today.", "I have got to finish this report today.", "Today I have to finish this report.", "Today I must finish this report.", "Today I need to finish this report."]],
      ["He started his new job on Monday.", "Il a commencé son nouveau travail lundi.", ["He started his new job last Monday.", "He started his new job Monday.", "He began his new job on Monday.", "He began his new job last Monday.", "He began his new job Monday.", "On Monday he started his new job.", "On Monday he began his new job.", "Last Monday he started his new job."]],
      ["Can I take a day off on Friday?", "Je peux prendre un jour de congé vendredi ?", ["Can I take a day off Friday?", "Can I have a day off on Friday?", "Could I take a day off on Friday?", "Could I have a day off on Friday?", "May I take a day off on Friday?", "May I have a day off on Friday?", "Can I take Friday off?"]],
      ["The boss is in a meeting.", "Le patron est en réunion.", ["The boss is at a meeting."]]
    ],
    blanks: [
      ["She is ___ engineer.", "an", ["an", "a", "some", "any"], "Elle est ingénieure.", "Devant un métier, on met a / an. Devant un son voyelle (engineer) : an.", "Articles (a / an)"],
      ["I ___ in an office every day.", "work", ["work", "works", "working", "to work"], "Je travaille dans un bureau tous les jours.", "Habitude (every day) → présent simple. Avec I : work, sans -s.", "Présent simple / continu"],
      ["Look, the boss ___ to a customer right now.", "is talking", ["is talking", "talks", "talk", "talking"], "Regarde, le patron parle à un client en ce moment.", "Action en cours (right now) → présent continu : is + verbe en -ing.", "Présent simple / continu"],
      ["What ___ your sister do?", "does", ["does", "do", "is", "has"], "Que fait ta sœur dans la vie ?", "Question au présent avec he / she / it : does + verbe à la base.", "Questions avec do / does"],
      ["You ___ wear a tie at work.", "don't have to", ["don't have to", "doesn't have to", "mustn't to", "not have to"], "Tu n'es pas obligé de porter une cravate au travail.", "don't have to = ne pas être obligé de (ce n'est pas nécessaire).", "Verbes modaux"],
      ["She ___ start work at seven.", "has to", ["has to", "have to", "must to", "has"], "Elle doit commencer le travail à sept heures.", "Obligation avec he / she / it : has to + verbe à la base.", "Verbes modaux"]
    ]
  },
  {
    id: "a2u3", emoji: "🩺", title: "Chez le médecin", subtitle: "Le corps, les symptômes, la pharmacie", color: "#A855F7",
    vocab: [
      ["doctor", "médecin", "🩺"],
      ["head", "tête", "🙆"],
      ["arm", "bras", "💪"],
      ["leg", "jambe", "🦵"],
      ["tooth", "dent", "🦷"],
      ["headache", "mal de tête", "🤕"],
      ["fever", "fièvre", "🤒"],
      ["cough", "toux", "😷"],
      ["medicine", "médicament", "💊"],
      ["pharmacy", "pharmacie", "⚕️"],
      ["appointment", "rendez-vous (chez le médecin)", "📅"],
      ["ill", "malade", "🛌"]
    ],
    sentences: [
      ["I have a headache and a fever.", "J'ai mal à la tête et de la fièvre.", ["I have got a headache and a fever.", "I have a headache and fever.", "I have got a headache and fever.", "I have a headache and a temperature.", "I have got a headache and a temperature."]],
      ["Show me where it hurts.", "Montrez-moi où vous avez mal.", []],
      ["I would like to make an appointment.", "Je voudrais prendre rendez-vous.", ["I would like to book an appointment.", "I would like an appointment."]],
      ["You should stay in bed for two days.", "Vous devriez rester au lit pendant deux jours.", ["You ought to stay in bed for two days."]],
      ["Take this medicine three times a day.", "Prenez ce médicament trois fois par jour.", ["Take this medication three times a day.", "Take this medicine three times per day.", "Take this medication three times per day."]],
      ["I don't feel very well today.", "Je ne me sens pas très bien aujourd'hui.", ["I am not feeling very well today.", "Today I don't feel very well.", "Today I am not feeling very well.", "I don't feel very good today.", "I am not feeling very good today."]],
      ["Do you have something for a cough?", "Vous avez quelque chose contre la toux ?", ["Do you have anything for a cough?", "Have you got something for a cough?", "Have you got anything for a cough?"]],
      ["My son has a high temperature.", "Mon fils a beaucoup de fièvre.", ["My son has a high fever.", "My son has got a high temperature.", "My son has got a high fever."]],
      ["I broke my arm last year.", "Je me suis cassé le bras l'année dernière.", ["Last year I broke my arm."]],
      ["How long have you been ill?", "Depuis combien de temps êtes-vous malade ?", ["How long have you been sick?"]]
    ],
    blanks: [
      ["You ___ see a doctor.", "should", ["should", "should to", "shoulds", "ought"], "Tu devrais voir un médecin.", "Pour conseiller : should + verbe à la base, sans to.", "Verbes modaux"],
      ["You ___ eat so much sugar.", "shouldn't", ["shouldn't", "don't should", "not should", "shouldn't to"], "Tu ne devrais pas manger autant de sucre.", "Négation de should : shouldn't + verbe à la base.", "Verbes modaux"],
      ["She ___ got a fever.", "has", ["has", "have", "is", "does"], "Elle a de la fièvre.", "have got = avoir. Avec he / she / it : has got.", "Have got"],
      ["I ___ feel well yesterday.", "didn't", ["didn't", "don't", "wasn't", "haven't"], "Je ne me sentais pas bien hier.", "Négation au passé : didn't + verbe à la base.", "Passé simple : question et négation"],
      ["How ___ times a day do I take it?", "many", ["many", "much", "long", "often"], "Je le prends combien de fois par jour ?", "times (fois) se compte : how many. How much s'emploie pour l'indénombrable.", "Quantité (much / many)"],
      ["I have an appointment ___ Tuesday morning.", "on", ["on", "in", "at", "the"], "J'ai rendez-vous mardi matin.", "Devant un jour, même suivi de morning / evening : on.", "Prépositions de temps"]
    ]
  },
  {
    id: "a2u4", emoji: "🏡", title: "La maison", subtitle: "Pièces, meubles et tâches ménagères", color: "#EF4444",
    vocab: [
      ["kitchen", "cuisine (la pièce)", "🍳"],
      ["bathroom", "salle de bains", "🛁"],
      ["living room", "salon", "📺"],
      ["sofa", "canapé", "🛋️"],
      ["fridge", "frigo", "🧊"],
      ["flat", "appartement", "🏘️"],
      ["rent", "loyer", "📃"],
      ["washing machine", "machine à laver", "🧺"],
      ["window", "fenêtre", "🪟"],
      ["stairs", "escalier", "🪜"],
      ["to clean", "nettoyer", "🧽"],
      ["to tidy", "ranger", "🧹"]
    ],
    sentences: [
      ["There are three bedrooms in the house.", "Il y a trois chambres dans la maison.", ["The house has three bedrooms.", "The house has got three bedrooms."]],
      ["The kitchen is next to the living room.", "La cuisine est à côté du salon.", ["The kitchen is beside the living room.", "The kitchen is next to the lounge.", "The kitchen is beside the lounge."]],
      ["How much is the rent per month?", "Le loyer est de combien par mois ?", ["How much is the rent a month?", "How much is the rent each month?", "How much is the monthly rent?", "What is the rent per month?", "What is the monthly rent?"]],
      ["Can you do the washing up tonight?", "Tu peux faire la vaisselle ce soir ?", ["Can you do the dishes tonight?", "Could you do the washing up tonight?", "Could you do the dishes tonight?", "Can you wash the dishes tonight?", "Could you wash the dishes tonight?", "Can you do the washing up this evening?", "Can you do the dishes this evening?", "Could you do the washing up this evening?", "Could you do the dishes this evening?"]],
      ["I clean the bathroom every Saturday.", "Je nettoie la salle de bains tous les samedis.", ["I clean the bathroom on Saturdays.", "Every Saturday I clean the bathroom."]],
      ["The sofa is in front of the window.", "Le canapé est devant la fenêtre.", ["The couch is in front of the window."]],
      ["We are looking for a flat to rent.", "Nous cherchons un appartement à louer.", ["We are looking for an apartment to rent.", "We are searching for a flat to rent.", "We are searching for an apartment to rent."]],
      ["There isn't any milk in the fridge.", "Il n'y a pas de lait dans le frigo.", ["There is no milk in the fridge.", "There isn't any milk in the refrigerator.", "There is no milk in the refrigerator."]],
      ["My bedroom is upstairs, on the left.", "Ma chambre est en haut, à gauche.", ["My room is upstairs, on the left.", "My bedroom is upstairs, to the left.", "My room is upstairs, to the left."]],
      ["Is there a washing machine in the flat?", "Il y a une machine à laver dans l'appartement ?", ["Is there a washing machine in the apartment?", "Does the flat have a washing machine?", "Does the apartment have a washing machine?", "Has the flat got a washing machine?", "Has the apartment got a washing machine?"]]
    ],
    blanks: [
      ["There ___ two chairs in the kitchen.", "are", ["are", "is", "have", "has"], "Il y a deux chaises dans la cuisine.", "There are + pluriel (two chairs), there is + singulier.", "There is / there are"],
      ["___ there a lift in the building?", "Is", ["Is", "Are", "Has", "Does"], "Il y a un ascenseur dans l'immeuble ?", "Question au singulier : Is there… ? (au pluriel : Are there… ?)", "There is / there are"],
      ["The bed is next ___ the window.", "to", ["to", "of", "at", "from"], "Le lit est à côté de la fenêtre.", "À côté de = next to.", "Prépositions de lieu"],
      ["I always ___ the washing up after dinner.", "do", ["do", "make", "doing", "does"], "Je fais toujours la vaisselle après le dîner.", "Pour les tâches ménagères, on utilise do : do the washing up, do the cleaning.", "Do / make"],
      ["Can you ___ your bed, please?", "make", ["make", "do", "doing", "makes"], "Tu peux faire ton lit, s'il te plaît ?", "Faire son lit = make the bed (expression avec make).", "Do / make"],
      ["There aren't ___ towels in the bathroom.", "any", ["any", "some", "a", "no"], "Il n'y a pas de serviettes dans la salle de bains.", "À la forme négative, on utilise any : there aren't any…", "Some / any"]
    ]
  },
  {
    id: "a2u5", emoji: "👕", title: "Les vêtements", subtitle: "Tailles, essayages et retours", color: "#F59E0B",
    vocab: [
      ["shirt", "chemise", "👔"],
      ["dress", "robe", "👗"],
      ["trousers", "pantalon", "👖"],
      ["shoes", "chaussures", "👞"],
      ["jacket", "veste", "🧥"],
      ["sweater", "pull", "🧶"],
      ["size", "taille (d'un vêtement)", "📏"],
      ["changing room", "cabine d'essayage", "🚪"],
      ["to try on", "essayer (un vêtement)", "🪞"],
      ["to wear", "porter (un vêtement)", "🧣"],
      ["receipt", "ticket de caisse", "🧾"],
      ["refund", "remboursement", "🔄"]
    ],
    sentences: [
      ["Can I try on this jacket?", "Je peux essayer cette veste ?", ["Can I try this jacket on?", "Could I try on this jacket?", "Could I try this jacket on?", "May I try on this jacket?", "May I try this jacket on?"]],
      ["What size do you take?", "Quelle taille faites-vous ?", ["What size are you?", "What is your size?", "What size do you wear?"]],
      ["These trousers are too small for me.", "Ce pantalon est trop petit pour moi.", ["These pants are too small for me.", "This pair of trousers is too small for me.", "This pair of pants is too small for me."]],
      ["Do you have it in a bigger size?", "Vous l'avez dans une taille plus grande ?", ["Do you have it in a larger size?", "Have you got it in a bigger size?", "Have you got it in a larger size?"]],
      ["Where are the changing rooms?", "Où sont les cabines d'essayage ?", ["Where are the fitting rooms?"]],
      ["I would like to return these shoes.", "Je voudrais rendre ces chaussures.", ["I would like to take these shoes back.", "I would like to take back these shoes.", "I would like to bring these shoes back.", "I would like to bring back these shoes."]],
      ["Can I have a refund, please?", "Je peux me faire rembourser, s'il vous plaît ?", ["Can I get a refund, please?", "Could I have a refund, please?", "Could I get a refund, please?", "May I have a refund, please?", "Can I be refunded, please?", "Could I be refunded, please?"]],
      ["Have you got the receipt?", "Vous avez le ticket de caisse ?", ["Do you have the receipt?"]],
      ["She is wearing a beautiful red dress today.", "Elle porte une belle robe rouge aujourd'hui.", ["She is wearing a lovely red dress today.", "She is wearing a pretty red dress today.", "She is wearing a nice red dress today.", "Today she is wearing a beautiful red dress.", "Today she is wearing a lovely red dress.", "Today she is wearing a pretty red dress.", "Today she is wearing a nice red dress."]],
      ["This shirt doesn't fit me.", "Cette chemise ne me va pas.", ["This shirt doesn't suit me."]]
    ],
    blanks: [
      ["___ shoes are too small.", "These", ["These", "This", "That", "It"], "Ces chaussures sont trop petites.", "Devant un nom pluriel : these (ces… -ci) ou those (ces… -là).", "Démonstratifs (this / these)"],
      ["I like this jacket. Can I try ___ on?", "it", ["it", "them", "its", "they"], "J'aime bien cette veste. Je peux l'essayer ?", "jacket est singulier → it. Le pronom se place entre try et on.", "Pronoms"],
      ["This jacket isn't big ___.", "enough", ["enough", "too", "very", "much"], "Cette veste n'est pas assez grande.", "assez = enough, placé après l'adjectif : big enough.", "Too / enough"],
      ["These jeans are ___ tight. I need a bigger size.", "too", ["too", "enough", "to", "so much"], "Ce jean est trop serré. Il me faut une taille au-dessus.", "trop = too, placé avant l'adjectif : too tight.", "Too / enough"],
      ["Look! She ___ a blue dress.", "is wearing", ["is wearing", "wears", "wear", "wearing"], "Regarde ! Elle porte une robe bleue.", "Ce qu'on porte en ce moment → présent continu : is wearing.", "Présent simple / continu"],
      ["I don't like the red shirt. I prefer the blue ___.", "one", ["one", "ones", "it", "them"], "Je n'aime pas la chemise rouge. Je préfère la bleue.", "one remplace un nom singulier déjà cité (ones au pluriel).", "One / ones"]
    ]
  },
  {
    id: "a2u6", emoji: "🎯", title: "Mes projets", subtitle: "Parler du futur : going to et will", color: "#10B981",
    vocab: [
      ["holiday", "vacances", "🌴"],
      ["trip", "voyage", "🚆"],
      ["plan", "projet (ce qu'on prévoit de faire)", "📝"],
      ["to book", "réserver", "📲"],
      ["next", "prochain", "⏭️"],
      ["soon", "bientôt", "🔜"],
      ["abroad", "à l'étranger", "🌍"],
      ["countryside", "campagne", "🌾"],
      ["to move", "déménager", "📦"],
      ["to save", "économiser", "🐷"],
      ["to hope", "espérer", "🤞"],
      ["maybe", "peut-être", "🤔"]
    ],
    sentences: [
      ["I am going to visit my aunt next week.", "Je vais rendre visite à ma tante la semaine prochaine.", ["I am going to see my aunt next week.", "I will visit my aunt next week.", "I will see my aunt next week.", "I am visiting my aunt next week.", "I am seeing my aunt next week.", "Next week I am going to visit my aunt.", "Next week I am going to see my aunt.", "Next week I will visit my aunt.", "Next week I will see my aunt."]],
      ["We are going to spend a week in the mountains.", "Nous allons passer une semaine à la montagne.", ["We are going to spend one week in the mountains.", "We will spend a week in the mountains.", "We are spending a week in the mountains."]],
      ["What are you going to do this summer?", "Qu'est-ce que tu vas faire cet été ?", ["What will you do this summer?", "What are you doing this summer?"]],
      ["I think it will rain tomorrow.", "Je pense qu'il va pleuvoir demain.", ["I think it is going to rain tomorrow.", "I think that it will rain tomorrow.", "I think that it is going to rain tomorrow."]],
      ["I will call you when I arrive.", "Je t'appellerai quand j'arriverai.", ["I will phone you when I arrive.", "I will ring you when I arrive.", "I will call you when I get there.", "I will phone you when I get there."]],
      ["We have already booked the hotel.", "Nous avons déjà réservé l'hôtel.", ["We already booked the hotel.", "We have already reserved the hotel.", "We already reserved the hotel."]],
      ["Maybe I will move to London next year.", "Je déménagerai peut-être à Londres l'année prochaine.", ["I will maybe move to London next year.", "Perhaps I will move to London next year.", "I might move to London next year.", "I may move to London next year.", "Next year I might move to London.", "Maybe I am going to move to London next year."]],
      ["Are you going to take the train?", "Tu vas prendre le train ?", ["Will you take the train?", "Are you taking the train?"]],
      ["I hope to go abroad next summer.", "J'espère partir à l'étranger l'été prochain.", ["I hope to travel abroad next summer.", "I hope I can go abroad next summer.", "Next summer I hope to go abroad."]],
      ["Don't worry, I will help you.", "Ne t'inquiète pas, je vais t'aider.", ["Don't worry, I am going to help you."]]
    ],
    blanks: [
      ["Look at those black clouds! It's ___ rain.", "going to", ["going to", "will", "go to", "going"], "Regarde ces nuages noirs ! Il va pleuvoir.", "On voit que ça va arriver (les nuages) → be going to + verbe.", "Futur (will / going to)"],
      ["We ___ going to visit Paris in May.", "are", ["are", "will", "is", "do"], "Nous allons visiter Paris en mai.", "be going to : we are going to + verbe.", "Futur (will / going to)"],
      ["I'm tired. I think I ___ go to bed early.", "will", ["will", "am", "going", "would to"], "Je suis fatigué. Je crois que je vais me coucher tôt.", "Décision prise sur le moment → will + verbe à la base.", "Futur (will / going to)"],
      ["She ___ be thirty next month.", "will", ["will", "is", "going", "does"], "Elle aura trente ans le mois prochain.", "Fait futur → will + verbe à la base.", "Futur (will / going to)"],
      ["I won't ___ late, I promise.", "be", ["be", "to be", "being", "am"], "Je ne serai pas en retard, c'est promis.", "Après will / won't : verbe à la base, sans to.", "Futur (will / going to)"],
      ["We're going on holiday ___ August.", "in", ["in", "on", "at", "the"], "Nous partons en vacances en août.", "Devant un mois : in (in August, in May).", "Prépositions de temps"]
    ]
  },
  {
    id: "a2u7", emoji: "⚖️", title: "Comparer", subtitle: "Comparatifs et superlatifs", color: "#06B6D4",
    vocab: [
      ["fast", "rapide", "🏎️"],
      ["slow", "lent", "🐢"],
      ["tall", "grand (en hauteur)", "🦒"],
      ["heavy", "lourd", "🏋️"],
      ["young", "jeune", "🧒"],
      ["old", "vieux", "👴"],
      ["easy", "facile", "👌"],
      ["difficult", "difficile", "🧗"],
      ["quiet", "calme", "🤫"],
      ["noisy", "bruyant", "📢"],
      ["better", "meilleur (que…)", "📈"],
      ["worse", "pire (que…)", "📉"]
    ],
    sentences: [
      ["My brother is taller than me.", "Mon frère est plus grand que moi.", ["My brother is taller than I am."]],
      ["The train is faster than the bus.", "Le train est plus rapide que le bus.", ["The train is quicker than the bus."]],
      ["This is the best restaurant in town.", "C'est le meilleur restaurant de la ville.", ["It is the best restaurant in town.", "That is the best restaurant in town.", "This is the best restaurant in the city.", "It is the best restaurant in the city.", "That is the best restaurant in the city.", "This is the best restaurant in the town.", "It is the best restaurant in the town."]],
      ["London is bigger than Paris.", "Londres est plus grand que Paris.", ["London is larger than Paris."]],
      ["English is easier than French.", "L'anglais est plus facile que le français.", []],
      ["It is the most beautiful city in the world.", "C'est la plus belle ville du monde.", ["This is the most beautiful city in the world.", "That is the most beautiful city in the world.", "It is the most beautiful town in the world.", "This is the most beautiful town in the world."]],
      ["My sister is not as tall as me.", "Ma sœur n'est pas aussi grande que moi.", ["My sister is not as tall as I am.", "My sister is not so tall as me.", "My sister is not so tall as I am."]],
      ["Which is the cheapest hotel?", "Quel est l'hôtel le moins cher ?", ["Which hotel is the cheapest?", "What is the cheapest hotel?", "Which is the least expensive hotel?", "Which hotel is the least expensive?", "What is the least expensive hotel?"]],
      ["Your English is better than mine.", "Ton anglais est meilleur que le mien.", []],
      ["This is the worst day of my life!", "C'est le pire jour de ma vie !", ["It is the worst day of my life!", "That is the worst day of my life!", "This is the worst day in my life!", "It is the worst day in my life!"]]
    ],
    blanks: [
      ["Their house is ___ than ours.", "bigger", ["bigger", "biger", "more big", "biggest"], "Leur maison est plus grande que la nôtre.", "Adjectif court : + -er. Big double sa consonne finale : bigger.", "Comparatif"],
      ["This book is more interesting ___ the film.", "than", ["than", "that", "as", "then"], "Ce livre est plus intéressant que le film.", "plus… que = more… than.", "Comparatif"],
      ["She is the ___ student in the class.", "best", ["best", "better", "goodest", "most good"], "C'est la meilleure élève de la classe.", "good → better → the best (irrégulier).", "Superlatif"],
      ["It's the ___ expensive hotel in the city.", "most", ["most", "more", "much", "mostly"], "C'est l'hôtel le plus cher de la ville.", "Adjectif long : the most + adjectif (le plus…).", "Superlatif"],
      ["Is London as big ___ Paris?", "as", ["as", "than", "like", "that"], "Londres est-il aussi grand que Paris ?", "aussi… que = as… as.", "Comparatif"],
      ["The weather is ___ today than yesterday.", "worse", ["worse", "bad", "worst", "badder"], "Il fait plus mauvais aujourd'hui qu'hier.", "bad → worse → the worst (irrégulier).", "Comparatif"]
    ]
  },
  {
    id: "a2u8", emoji: "📞", title: "Au téléphone", subtitle: "Appels, messages et e-mails", color: "#8B5CF6",
    vocab: [
      ["phone", "téléphone", "📱"],
      ["message", "message", "💬"],
      ["email", "e-mail", "📧"],
      ["to call", "appeler", "📞"],
      ["to answer", "répondre (au téléphone)", "🙋"],
      ["to send", "envoyer", "📤"],
      ["number", "numéro", "#️⃣"],
      ["battery", "batterie", "🔋"],
      ["charger", "chargeur", "🔌"],
      ["attachment", "pièce jointe", "📎"],
      ["to hang up", "raccrocher", "📴"],
      ["to cancel", "annuler", "🚫"]
    ],
    sentences: [
      ["Can I speak to Sarah, please?", "Est-ce que je peux parler à Sarah, s'il vous plaît ?", ["Could I speak to Sarah, please?", "May I speak to Sarah, please?", "Can I talk to Sarah, please?", "Could I talk to Sarah, please?", "May I talk to Sarah, please?", "Can I speak with Sarah, please?", "Could I speak with Sarah, please?", "May I speak with Sarah, please?"]],
      ["May I ask who is calling?", "C'est de la part de qui ?", ["Can I ask who is calling?", "Who is calling?", "Who is calling, please?", "Who is speaking?", "Who shall I say is calling?"]],
      ["She isn't here at the moment.", "Elle n'est pas là pour le moment.", ["She is not here right now.", "She is not in at the moment.", "She is not in right now."]],
      ["Would you like to leave a message?", "Voulez-vous laisser un message ?", ["Do you want to leave a message?"]],
      ["I will call you back later.", "Je te rappelle plus tard.", ["I will phone you back later.", "I will ring you back later.", "I am going to call you back later."]],
      ["Sorry, I can't hear you very well.", "Désolé, je ne t'entends pas très bien.", ["I am sorry, I can't hear you very well."]],
      ["My battery is almost dead.", "Ma batterie est presque vide.", ["My battery is nearly dead.", "My battery is almost empty.", "My battery is nearly empty.", "My battery is almost flat.", "My battery is nearly flat."]],
      ["I sent you an email this morning.", "Je t'ai envoyé un e-mail ce matin.", ["I have sent you an email this morning.", "I sent an email to you this morning.", "I have sent an email to you this morning.", "I emailed you this morning.", "This morning I sent you an email."]],
      ["Can you send me your phone number?", "Tu peux m'envoyer ton numéro de téléphone ?", ["Could you send me your phone number?", "Can you send me your telephone number?", "Could you send me your telephone number?"]],
      ["I need to cancel my appointment.", "Je dois annuler mon rendez-vous.", ["I have to cancel my appointment.", "I must cancel my appointment."]]
    ],
    blanks: [
      ["Can you call ___ back later?", "me", ["me", "I", "my", "mine"], "Tu peux me rappeler plus tard ?", "Après un verbe : pronom complément (me, you, him, her, us, them).", "Pronoms"],
      ["Sorry, she's ___ the phone right now.", "on", ["on", "in", "to", "of"], "Désolé, elle est au téléphone en ce moment.", "Être au téléphone = be on the phone.", "Prépositions"],
      ["Could you ___ me your email address?", "give", ["give", "giving", "gave", "gives"], "Pourriez-vous me donner votre adresse e-mail ?", "Après could, le verbe reste à la base.", "Verbes modaux"],
      ["Sorry, I ___ call you yesterday.", "couldn't", ["couldn't", "can't", "didn't can", "wasn't"], "Désolé, je n'ai pas pu t'appeler hier.", "Passé de can : could. Négation : couldn't + verbe à la base.", "Verbes modaux"],
      ["I'm waiting ___ an important call.", "for", ["for", "to", "at", "after"], "J'attends un appel important.", "Attendre quelque chose = wait for something.", "Prépositions"],
      ["Who ___ you talking to on the phone?", "were", ["were", "did", "was", "have"], "À qui tu parlais au téléphone ?", "Passé continu : was / were + verbe en -ing. Avec you : were.", "Passé continu"]
    ]
  },
  {
    id: "a2u9", emoji: "🥂", title: "Sorties et invitations", subtitle: "Inviter, accepter, refuser poliment", color: "#EC4899",
    vocab: [
      ["invitation", "invitation", "💌"],
      ["birthday", "anniversaire (de naissance)", "🎂"],
      ["wedding", "mariage (la cérémonie)", "💒"],
      ["dinner", "dîner", "🍝"],
      ["theatre", "théâtre", "🎭"],
      ["show", "spectacle", "🎪"],
      ["guest", "invité", "🧑‍🤝‍🧑"],
      ["free", "libre", "🆓"],
      ["to invite", "inviter", "✉️"],
      ["to celebrate", "fêter", "🥳"],
      ["to join", "rejoindre", "🙌"],
      ["unfortunately", "malheureusement", "😕"]
    ],
    sentences: [
      ["Would you like to come to my party?", "Tu veux venir à ma fête ?", ["Do you want to come to my party?"]],
      ["Are you free on Saturday evening?", "Tu es libre samedi soir ?", ["Are you free on Saturday night?", "Are you free Saturday evening?", "Are you free Saturday night?"]],
      ["I'd love to, thank you!", "Avec plaisir, merci !", ["I would love to, thanks!", "With pleasure, thank you!", "With pleasure, thanks!"]],
      ["Sorry, I can't, I'm busy that day.", "Désolé, je ne peux pas, je suis occupé ce jour-là.", ["Sorry, I can't, I am busy on that day."]],
      ["Let's go to the theatre tonight!", "Allons au théâtre ce soir !", ["Let's go to the theatre this evening!"]],
      ["Shall we meet in front of the cinema?", "On se retrouve devant le cinéma ?", ["Shall we meet outside the cinema?", "Should we meet in front of the cinema?", "Should we meet outside the cinema?", "Shall we meet in front of the movie theater?", "Shall we meet outside the movie theater?"]],
      ["Thank you for inviting me.", "Merci de m'avoir invité.", ["Thanks for inviting me.", "Thank you for the invitation.", "Thanks for the invitation."]],
      ["What time does the film start?", "À quelle heure commence le film ?", ["What time does the movie start?", "What time does the film begin?", "What time does the movie begin?", "When does the film start?", "When does the movie start?", "When does the film begin?", "When does the movie begin?"]],
      ["Unfortunately, I have other plans.", "Malheureusement, j'ai d'autres projets.", ["Unfortunately, I have got other plans."]],
      ["Why don't we have dinner together?", "Et si on dînait ensemble ?", ["Shall we have dinner together?", "How about having dinner together?", "What about having dinner together?", "How about we have dinner together?"]]
    ],
    blanks: [
      ["Would you like ___ to the cinema?", "to come", ["to come", "come", "coming", "came"], "Ça te dirait de venir au cinéma ?", "Would you like + to + verbe ?", "Gérondif / infinitif"],
      ["How about ___ a pizza tonight?", "having", ["having", "have", "to have", "had"], "Et si on mangeait une pizza ce soir ?", "Après how about / what about : verbe en -ing.", "Proposer (let's, how about)"],
      ["Let's ___ out tonight!", "go", ["go", "going", "to go", "goes"], "Sortons ce soir !", "Après let's : verbe à la base, sans to.", "Proposer (let's, how about)"],
      ["___ we meet at eight?", "Shall", ["Shall", "Are", "Let's", "Does"], "On se retrouve à huit heures ?", "Pour proposer quelque chose : Shall we… ?", "Proposer (let's, how about)"],
      ["Thanks for the invitation, but I'm afraid I ___ come.", "can't", ["can't", "don't can", "not can", "can't to"], "Merci pour l'invitation, mais je crains de ne pas pouvoir venir.", "Négation de can : can't + verbe à la base.", "Verbes modaux"],
      ["What ___ you doing on Saturday?", "are", ["are", "do", "will", "did"], "Qu'est-ce que tu fais samedi ?", "Projet déjà organisé → présent continu : What are you doing… ?", "Présent simple / continu"]
    ]
  },
  {
    id: "a2u10", emoji: "😄", title: "Caractère et émotions", subtitle: "Décrire les gens et ce qu'on ressent", color: "#0EA5E9",
    vocab: [
      ["happy", "heureux", "😃"],
      ["sad", "triste", "😢"],
      ["angry", "en colère", "😠"],
      ["tired", "fatigué", "🥱"],
      ["worried", "inquiet", "😟"],
      ["surprised", "surpris", "😮"],
      ["scared", "effrayé", "😨"],
      ["kind", "gentil", "💝"],
      ["funny", "drôle", "😂"],
      ["shy", "timide", "🙈"],
      ["lazy", "paresseux", "🦥"],
      ["proud", "fier", "🦚"]
    ],
    sentences: [
      ["Why are you so sad today?", "Pourquoi tu es si triste aujourd'hui ?", []],
      ["My sister is very shy.", "Ma sœur est très timide.", []],
      ["My boss gets angry very easily.", "Mon patron se met très facilement en colère.", []],
      ["I was really worried about you.", "J'étais vraiment inquiet pour toi.", ["I was very worried about you.", "I was so worried about you."]],
      ["She is always kind to everyone.", "Elle est toujours gentille avec tout le monde.", ["She is always kind to everybody.", "She is always nice to everyone.", "She is always nice to everybody."]],
      ["I am very proud of my daughter.", "Je suis très fier de ma fille.", []],
      ["Are you scared of spiders?", "Tu as peur des araignées ?", ["Are you afraid of spiders?", "Are you frightened of spiders?"]],
      ["What is your best friend like?", "Comment est ton meilleur ami ?", []],
      ["He is funny but a little lazy.", "Il est drôle mais un peu paresseux.", ["He is funny but a bit lazy."]],
      ["I feel tired and a bit stressed.", "Je me sens fatigué et un peu stressé.", ["I feel tired and a little stressed.", "I am feeling tired and a bit stressed.", "I am feeling tired and a little stressed."]]
    ],
    blanks: [
      ["This film is really ___.", "boring", ["boring", "bored", "bore", "bores"], "Ce film est vraiment ennuyeux.", "-ing décrit ce qui provoque l'émotion (un film ennuyeux).", "Adjectifs en -ed / -ing"],
      ["I'm ___ because I have nothing to do.", "bored", ["bored", "boring", "bore", "bores"], "Je m'ennuie parce que je n'ai rien à faire.", "-ed décrit ce qu'on ressent : I'm bored = je m'ennuie.", "Adjectifs en -ed / -ing"],
      ["She is afraid ___ dogs.", "of", ["of", "from", "about", "with"], "Elle a peur des chiens.", "Avoir peur de = be afraid of.", "Prépositions"],
      ["What is your brother ___? He is very funny.", "like", ["like", "look", "likes", "as"], "Comment est ton frère ? Il est très drôle.", "Pour demander comment est quelqu'un : What is he / she like?", "What … like?"],
      ["You look ___. Are you OK?", "sad", ["sad", "sadly", "sadness", "more sadly"], "Tu as l'air triste. Ça va ?", "Après look (avoir l'air), on met un adjectif, pas un adverbe.", "Adjectif / adverbe"],
      ["She speaks very ___.", "quietly", ["quietly", "quiet", "quieter", "quietness"], "Elle parle très doucement.", "Pour dire comment on fait une action : adverbe en -ly (quietly).", "Adjectif / adverbe"]
    ]
  }
];
