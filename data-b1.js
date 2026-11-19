// Contenu du cours — niveau B1
// vocab :     [anglais, français, emoji]
// sentences : [anglais, français, [autres réponses anglaises acceptées]]
// blanks :    [phrase avec ___, bonne réponse, [options], traduction, astuce si erreur, point de grammaire]

window.COURSE_B1 = [
  {
    id: "b1u1", emoji: "✨", title: "Mes expériences", subtitle: "Raconter ce qu'on a déjà vécu", color: "#FF7A45",
    vocab: [
      ["to explore", "explorer", "🧭"],
      ["adventure", "aventure", "🏕️"],
      ["challenge", "défi", "🎯"],
      ["memory", "souvenir", "📸"],
      ["unforgettable", "inoubliable", "🌟"],
      ["recently", "récemment", "🕐"],
      ["so far", "jusqu'à présent", "📈"],
      ["to climb", "escalader", "🧗"],
      ["skydiving", "parachutisme", "🪂"],
      ["scuba diving", "plongée sous-marine", "🤿"],
      ["cruise", "croisière", "🚢"],
      ["breathtaking", "à couper le souffle", "😮"]
    ],
    sentences: [
      ["Have you ever been to London?", "Tu es déjà allé à Londres ?", ["Have you already been to London?", "Have you been to London?", "Have you been to London before?", "Have you been to London already?", "Have you ever visited London?", "Have you already visited London?", "Have you visited London before?", "Did you ever go to London?"]],
      ["I have never eaten Japanese food.", "Je n'ai jamais mangé de cuisine japonaise.", ["I have never eaten Japanese cuisine.", "I have never tried Japanese food.", "I have never tried Japanese cuisine.", "I never ate Japanese food."]],
      ["She has lived in Paris for ten years.", "Elle habite à Paris depuis dix ans.", ["She has been living in Paris for ten years."]],
      ["I have known Tom since we were children.", "Je connais Tom depuis notre enfance.", ["I have known Tom since we were kids.", "I have known Tom since we were little.", "I have known Tom since childhood.", "I have known Tom since our childhood."]],
      ["Have you booked the hotel yet?", "Tu as déjà réservé l'hôtel ?", ["Have you booked the hotel already?", "Have you reserved the hotel yet?", "Have you reserved the hotel already?", "Have you already booked the hotel?", "Have you already reserved the hotel?", "Did you book the hotel yet?", "Did you reserve the hotel yet?", "Did you already book the hotel?", "Did you already reserve the hotel?"]],
      ["We have just arrived at the airport.", "Nous venons d'arriver à l'aéroport.", ["We just arrived at the airport.", "We have just got to the airport.", "We just got to the airport.", "We have just reached the airport."]],
      ["I have already seen this film twice.", "J'ai déjà vu ce film deux fois.", ["I have already seen this movie twice.", "I have already seen that film twice.", "I have already seen that movie twice.", "I have seen this film twice.", "I have seen this film twice already.", "I have seen this movie twice.", "I have seen this movie twice already.", "I have seen that film twice.", "I have seen that film twice already.", "I have seen that movie twice.", "I have seen that movie twice already.", "I already saw this film twice.", "I already saw this movie twice.", "I already saw that film twice.", "I already saw that movie twice."]],
      ["How long have you worked here?", "Depuis combien de temps travailles-tu ici ?", ["How long have you worked here for?", "How long have you been working here?", "How long have you been working here for?"]],
      ["It is the best meal I have ever had.", "C'est le meilleur repas que j'aie jamais mangé.", ["It is the best meal I have ever eaten.", "It is the best meal that I have ever had.", "It is the best meal that I have ever eaten.", "This is the best meal I have ever had.", "This is the best meal I have ever eaten.", "This is the best meal that I have ever had.", "This is the best meal that I have ever eaten.", "That is the best meal I have ever had.", "That is the best meal I have ever eaten.", "That is the best meal that I have ever had.", "That is the best meal that I have ever eaten."]],
      ["I haven't seen my cousins since last summer.", "Je n'ai pas vu mes cousins depuis l'été dernier.", []]
    ],
    blanks: [
      ["We have been friends ___ more than twenty years.", "for", ["for", "since", "during", "ago"], "Nous sommes amis depuis plus de vingt ans.", "for + durée (twenty years). since + point de départ (Monday, last year…).", "Since / for"],
      ["She has worked at this company ___ January.", "since", ["since", "for", "from", "ago"], "Elle travaille dans cette entreprise depuis janvier.", "since + point de départ (January). for + durée (three months).", "Since / for"],
      ["I haven't finished the report ___.", "yet", ["yet", "already", "ever", "never"], "Je n'ai pas encore fini le rapport.", "« pas encore » = not… yet, avec yet en fin de phrase.", "Already / yet"],
      ["Have you ever ___ snails?", "eaten", ["eaten", "ate", "eat", "eating"], "Tu as déjà mangé des escargots ?", "Après have, on met le participe passé : eat → ate → eaten.", "Present perfect"],
      ["I have ___ been to Asia, but I would love to go.", "never", ["never", "ever", "yet", "already"], "Je ne suis jamais allé en Asie, mais j'adorerais y aller.", "never = jamais, dans une phrase affirmative. ever s'utilise surtout dans les questions.", "Ever / never"],
      ["I ___ that film last week with Anna.", "saw", ["saw", "have seen", "seen", "see"], "J'ai vu ce film la semaine dernière avec Anna.", "Avec un moment précis du passé (last week, yesterday), on utilise le prétérit, pas le present perfect.", "Passé simple / present perfect"]
    ]
  },
  {
    id: "b1u2", emoji: "💼", title: "Carrière et entretien", subtitle: "Réussir un entretien d'embauche", color: "#3B82F6",
    vocab: [
      ["job interview", "entretien d'embauche", "👔"],
      ["application", "candidature", "📨"],
      ["to apply", "postuler", "📝"],
      ["skill", "compétence", "🛠️"],
      ["strength", "point fort", "💪"],
      ["weakness", "point faible", "🔻"],
      ["degree", "diplôme universitaire", "🎓"],
      ["internship", "stage", "🧑‍🎓"],
      ["training", "formation", "📚"],
      ["to hire", "embaucher", "🧑‍💼"],
      ["reliable", "fiable", "🔒"],
      ["deadline", "date limite", "⏰"]
    ],
    sentences: [
      ["Why do you want to work for our company?", "Pourquoi voulez-vous travailler pour notre entreprise ?", ["Why do you want to work for our firm?", "Why do you want to work at our company?", "Why do you want to work at our firm?", "Why do you want to work in our company?", "Why do you want to work in our firm?", "Why would you like to work for our company?"]],
      ["I have worked in sales for five years.", "Je travaille dans la vente depuis cinq ans.", ["I have been working in sales for five years."]],
      ["What are your main strengths and weaknesses?", "Quels sont vos principaux points forts et points faibles ?", ["What are your main strengths and your weaknesses?", "What are your key strengths and weaknesses?", "What are your key strengths and your weaknesses?", "What are your biggest strengths and weaknesses?", "What are your biggest strengths and your weaknesses?"]],
      ["I work well under pressure and I am very organised.", "Je travaille bien sous pression et je suis très organisé.", ["I work well under pressure and am very organised."]],
      ["When would you be available to start?", "Quand seriez-vous disponible pour commencer ?", ["When would you be available to begin?", "When will you be available to start?", "When will you be available to begin?"]],
      ["I have just finished a degree in marketing.", "Je viens de terminer un diplôme en marketing.", ["I have just finished a diploma in marketing.", "I have just completed a degree in marketing.", "I have just completed a diploma in marketing.", "I just finished a degree in marketing.", "I just finished a diploma in marketing.", "I just completed a degree in marketing.", "I just completed a diploma in marketing.", "I have just finished a marketing degree.", "I have just finished a marketing diploma.", "I have just completed a marketing degree.", "I have just completed a marketing diploma.", "I just finished a marketing degree.", "I just finished a marketing diploma.", "I just completed a marketing degree.", "I just completed a marketing diploma."]],
      ["I would like to apply for the manager position.", "Je voudrais postuler au poste de responsable.", ["I would like to apply for the manager job.", "I would like to apply for the manager post.", "I would like to apply for the manager role.", "I would like to apply for the position of manager.", "I would like to apply for the job of manager.", "I would like to apply for the post of manager.", "I would like to apply for the role of manager."]],
      ["Could you give me more details about the salary?", "Pourriez-vous me donner plus de détails sur le salaire ?", ["Could you give me more details on the salary?", "Could you give me more information about the salary?", "Could you give me more information on the salary?", "Can you give me more details about the salary?", "Can you give me more details on the salary?", "Can you give me more information about the salary?", "Can you give me more information on the salary?"]],
      ["I am used to working in a team.", "J'ai l'habitude de travailler en équipe.", ["I am used to working in teams.", "I am used to working as part of a team.", "I am used to working as a team.", "I am used to teamwork.", "I am accustomed to working in a team."]],
      ["They offered me the job after the second interview.", "Ils m'ont proposé le poste après le deuxième entretien.", ["They offered me the position after the second interview.", "They offered me the post after the second interview."]]
    ],
    blanks: [
      ["I am good ___ solving problems.", "at", ["at", "to", "of", "on"], "Je suis doué pour résoudre les problèmes.", "good at + nom ou verbe en -ing = doué pour, bon en.", "Prépositions"],
      ["I am very interested ___ this position.", "in", ["in", "on", "at", "for"], "Ce poste m'intéresse beaucoup.", "interested in = intéressé par.", "Prépositions"],
      ["I look forward to ___ from you.", "hearing", ["hearing", "hear", "heard", "hears"], "J'ai hâte d'avoir de vos nouvelles.", "look forward to est suivi d'un verbe en -ing.", "Gérondif / infinitif"],
      ["I really enjoy ___ with customers.", "working", ["working", "to work", "work", "worked"], "J'aime vraiment travailler avec les clients.", "Après enjoy, le verbe se met en -ing.", "Gérondif / infinitif"],
      ["I have been ___ for a new job since March.", "looking", ["looking", "look", "looked", "looks"], "Je cherche un nouvel emploi depuis mars.", "have been + verbe en -ing : action commencée dans le passé et toujours en cours.", "Present perfect continu"],
      ["I would like ___ more about the company.", "to know", ["to know", "knowing", "know", "known"], "Je voudrais en savoir plus sur l'entreprise.", "would like est suivi de to + base verbale.", "Gérondif / infinitif"]
    ]
  },
  {
    id: "b1u3", emoji: "💬", title: "Donner son avis", subtitle: "Opinions, accord et désaccord", color: "#A855F7",
    vocab: [
      ["point of view", "point de vue", "👀"],
      ["in my opinion", "à mon avis", "💭"],
      ["to agree", "être d'accord", "👍"],
      ["to disagree", "ne pas être d'accord", "👎"],
      ["debate", "débat", "🎙️"],
      ["obviously", "évidemment", "🙄"],
      ["to convince", "convaincre", "🗣️"],
      ["advantage", "avantage", "➕"],
      ["disadvantage", "inconvénient", "➖"],
      ["however", "cependant", "🔀"],
      ["actually", "en fait", "🧐"],
      ["to doubt", "douter", "🤨"]
    ],
    sentences: [
      ["In my opinion, working from home is more efficient.", "À mon avis, le télétravail est plus efficace.", ["In my opinion, working from home is more effective.", "In my opinion, remote work is more efficient.", "In my opinion, remote work is more effective.", "In my opinion, remote working is more efficient.", "In my opinion, remote working is more effective.", "In my view, working from home is more efficient.", "In my view, working from home is more effective.", "In my view, remote work is more efficient.", "In my view, remote work is more effective.", "In my view, remote working is more efficient.", "In my view, remote working is more effective."]],
      ["I completely agree with you about that.", "Je suis complètement d'accord avec toi là-dessus.", ["I completely agree with you about this.", "I completely agree with you on that.", "I completely agree with you on this.", "I totally agree with you about that.", "I totally agree with you about this.", "I totally agree with you on that.", "I totally agree with you on this.", "I fully agree with you about that.", "I fully agree with you about this.", "I fully agree with you on that.", "I fully agree with you on this."]],
      ["I am not sure that is a good idea.", "Je ne suis pas sûr que ce soit une bonne idée.", ["I am not sure it is a good idea.", "I am not sure this is a good idea.", "I am not sure that this is a good idea.", "I am not sure that it is a good idea.", "I am not certain that is a good idea.", "I am not certain it is a good idea.", "I am not certain this is a good idea.", "I am not certain that this is a good idea.", "I am not certain that it is a good idea."]],
      ["I see your point, but I don't agree.", "Je comprends ton point de vue, mais je ne suis pas d'accord.", ["I see your point, but I disagree.", "I see your point of view, but I don't agree.", "I see your point of view, but I disagree.", "I understand your point, but I don't agree.", "I understand your point, but I disagree.", "I understand your point of view, but I don't agree.", "I understand your point of view, but I disagree."]],
      ["What do you think about the new mayor?", "Que penses-tu du nouveau maire ?", ["What do you think of the new mayor?"]],
      ["It depends on the price of the tickets.", "Ça dépend du prix des billets.", ["It depends on the price of tickets.", "It depends on the ticket price.", "It depends on the ticket prices.", "That depends on the price of the tickets.", "That depends on the price of tickets.", "That depends on the ticket price.", "That depends on the ticket prices."]],
      ["You are absolutely right, I hadn't thought of that.", "Tu as tout à fait raison, je n'y avais pas pensé.", ["You are absolutely right, I hadn't thought about that.", "You are absolutely right, I didn't think of that.", "You are absolutely right, I didn't think about that.", "You are completely right, I hadn't thought of that.", "You are completely right, I hadn't thought about that.", "You are completely right, I didn't think of that.", "You are completely right, I didn't think about that.", "You are totally right, I hadn't thought of that.", "You are totally right, I hadn't thought about that.", "You are totally right, I didn't think of that.", "You are totally right, I didn't think about that.", "You are quite right, I hadn't thought of that.", "You are quite right, I hadn't thought about that.", "You are quite right, I didn't think of that.", "You are quite right, I didn't think about that."]],
      ["I am afraid I don't agree with you.", "Je crains de ne pas être d'accord avec vous.", ["I am afraid I disagree with you."]],
      ["Although it is expensive, I think it is worth it.", "Bien que ce soit cher, je pense que ça vaut le coup.", ["Although it is expensive, I think that it is worth it.", "Although it is expensive, I believe it is worth it.", "Although it is expensive, I believe that it is worth it.", "Even though it is expensive, I think it is worth it.", "Even though it is expensive, I think that it is worth it.", "Even though it is expensive, I believe it is worth it.", "Even though it is expensive, I believe that it is worth it.", "Though it is expensive, I think it is worth it.", "Though it is expensive, I think that it is worth it.", "Though it is expensive, I believe it is worth it.", "Though it is expensive, I believe that it is worth it."]],
      ["Do you really believe that this plan will work?", "Tu crois vraiment que ce plan va marcher ?", ["Do you really believe that this plan is going to work?", "Do you really believe this plan will work?", "Do you really believe this plan is going to work?", "Do you really think that this plan will work?", "Do you really think that this plan is going to work?", "Do you really think this plan will work?", "Do you really think this plan is going to work?"]]
    ],
    blanks: [
      ["I ___ with you about this.", "agree", ["agree", "am agree", "agrees", "agreeing"], "Je suis d'accord avec toi là-dessus.", "être d'accord = to agree. On ne dit jamais « I am agree ».", "Être d'accord"],
      ["What do you think ___ the new rules?", "of", ["of", "on", "at", "for"], "Que penses-tu des nouvelles règles ?", "Que penses-tu de… ? = What do you think of / about… ?", "Prépositions"],
      ["It depends ___ the weather.", "on", ["on", "of", "from", "to"], "Ça dépend de la météo.", "dépendre de = depend on (jamais depend of).", "Prépositions"],
      ["___ it was raining, we enjoyed the concert.", "Although", ["Although", "However", "Despite", "Unless"], "Même s'il pleuvait, nous avons apprécié le concert.", "although + sujet + verbe = bien que, même si. despite est suivi d'un nom.", "Connecteurs"],
      ["It is a good idea. ___, it is too expensive.", "However", ["However", "Although", "Despite", "Even"], "C'est une bonne idée. Cependant, c'est trop cher.", "however = cependant. Il se place en début de phrase, suivi d'une virgule.", "Connecteurs"],
      ["In my opinion, this film is worth ___.", "seeing", ["seeing", "to see", "see", "seen"], "À mon avis, ce film vaut la peine d'être vu.", "be worth + verbe en -ing = valoir la peine de.", "Gérondif / infinitif"]
    ]
  },
  {
    id: "b1u4", emoji: "📢", title: "Réclamations", subtitle: "Se plaindre et demander poliment", color: "#EF4444",
    vocab: [
      ["complaint", "réclamation", "📢"],
      ["to complain", "se plaindre", "😤"],
      ["compensation", "dédommagement", "💶"],
      ["replacement", "remplacement", "🆕"],
      ["faulty", "défectueux", "🔧"],
      ["to exchange", "échanger", "🔄"],
      ["customer service", "service client", "🎧"],
      ["delivery", "livraison", "🚚"],
      ["damaged", "endommagé", "📦"],
      ["disappointed", "déçu", "😞"],
      ["unacceptable", "inacceptable", "🙅"],
      ["out of order", "en panne", "🚧"]
    ],
    sentences: [
      ["I would like to make a complaint, please.", "Je voudrais faire une réclamation, s'il vous plaît.", ["I would like to file a complaint, please.", "I would like to lodge a complaint, please.", "I would like to complain, please."]],
      ["Could you turn the music down, please?", "Pourriez-vous baisser la musique, s'il vous plaît ?", ["Could you turn down the music, please?", "Can you turn the music down, please?", "Can you turn down the music, please?", "Would you turn the music down, please?", "Would you turn down the music, please?", "Could you lower the music, please?", "Can you lower the music, please?"]],
      ["Would you mind closing the window?", "Ça vous dérangerait de fermer la fenêtre ?", ["Would you mind shutting the window?"]],
      ["The heating in my room doesn't work.", "Le chauffage de ma chambre ne marche pas.", ["The heating in my room isn't working.", "The heater in my room doesn't work.", "The heater in my room isn't working.", "The heating doesn't work in my room.", "The heating isn't working in my room.", "The heater doesn't work in my room.", "The heater isn't working in my room."]],
      ["I ordered a laptop three weeks ago, but it hasn't arrived.", "J'ai commandé un ordinateur portable il y a trois semaines, mais il n'est pas arrivé.", ["I ordered a laptop three weeks ago, but it didn't arrive.", "I ordered a laptop three weeks ago, but it hasn't come.", "I ordered a laptop three weeks ago, but it didn't come."]],
      ["Can I speak to the manager, please?", "Je peux parler au responsable, s'il vous plaît ?", ["Can I speak with the manager, please?", "Can I talk to the manager, please?", "Can I talk with the manager, please?", "Could I speak to the manager, please?", "Could I speak with the manager, please?", "Could I talk to the manager, please?", "Could I talk with the manager, please?", "May I speak to the manager, please?", "May I speak with the manager, please?", "May I talk to the manager, please?", "May I talk with the manager, please?"]],
      ["I would like a refund or a replacement.", "Je voudrais un remboursement ou un remplacement.", ["I would like either a refund or a replacement."]],
      ["We have been waiting for our meal for an hour.", "Nous attendons notre plat depuis une heure.", ["We have been waiting for our meal for one hour.", "We have been waiting for our food for an hour.", "We have been waiting for our food for one hour.", "We have been waiting for our dish for an hour.", "We have been waiting for our dish for one hour.", "We have waited for our meal for an hour.", "We have waited for our food for an hour."]],
      ["I think there is a mistake on the bill.", "Je crois qu'il y a une erreur sur l'addition.", ["I think there is a mistake on the check.", "I think there is a mistake in the bill.", "I think there is a mistake in the check.", "I think there is an error on the bill.", "I think there is an error on the check.", "I think there is an error in the bill.", "I think there is an error in the check.", "I believe there is a mistake on the bill.", "I believe there is a mistake on the check.", "I believe there is a mistake in the bill.", "I believe there is a mistake in the check.", "I believe there is an error on the bill.", "I believe there is an error on the check.", "I believe there is an error in the bill.", "I believe there is an error in the check."]],
      ["I am sorry, but this is not what I ordered.", "Je suis désolé, mais ce n'est pas ce que j'ai commandé.", ["I am sorry, but that is not what I ordered.", "I am sorry, but it is not what I ordered.", "Sorry, but this is not what I ordered.", "Sorry, but that is not what I ordered.", "Sorry, but it is not what I ordered."]]
    ],
    blanks: [
      ["Would you mind ___ a little more slowly?", "speaking", ["speaking", "to speak", "speak", "spoke"], "Ça vous dérangerait de parler un peu plus lentement ?", "Would you mind est toujours suivi d'un verbe en -ing.", "Demandes polies"],
      ["Could you ___ the problem as soon as possible?", "fix", ["fix", "to fix", "fixing", "fixed"], "Pourriez-vous régler le problème dès que possible ?", "Après could (comme can, would…), le verbe est à la base verbale, sans to.", "Verbes modaux"],
      ["Would you mind ___ I sat here?", "if", ["if", "that", "when", "so"], "Ça vous dérangerait que je m'asseye ici ?", "Would you mind if + sujet + prétérit ? = Ça vous dérangerait que… ?", "Demandes polies"],
      ["I would like to complain ___ the noise from the next room.", "about", ["about", "at", "on", "for"], "Je voudrais me plaindre du bruit de la chambre d'à côté.", "se plaindre de quelque chose = complain about something.", "Prépositions"],
      ["The lift is out ___ order again.", "of", ["of", "from", "off", "in"], "L'ascenseur est encore en panne.", "en panne (pour une machine) = out of order.", "Expressions figées"],
      ["I ___ for my package since Monday.", "have been waiting", ["have been waiting", "am waiting", "wait", "waited"], "J'attends mon colis depuis lundi.", "depuis + action toujours en cours = have been + verbe en -ing (jamais le présent).", "Present perfect continu"]
    ]
  },
  {
    id: "b1u5", emoji: "📋", title: "Conseils et obligations", subtitle: "Donner des conseils, parler des règles", color: "#F59E0B",
    vocab: [
      ["rule", "règle", "📏"],
      ["law", "loi", "⚖️"],
      ["advice", "conseil", "💡"],
      ["compulsory", "obligatoire", "📌"],
      ["allowed", "autorisé", "✅"],
      ["forbidden", "interdit", "🚫"],
      ["fine", "amende", "💰"],
      ["speed limit", "limitation de vitesse", "🚦"],
      ["helmet", "casque", "⛑️"],
      ["to avoid", "éviter", "↪️"],
      ["to warn", "avertir", "⚠️"],
      ["safety", "sécurité", "🦺"]
    ],
    sentences: [
      ["You should take a jacket, it might rain later.", "Tu devrais prendre une veste, il risque de pleuvoir plus tard.", ["You should take a jacket, it may rain later.", "You should take a jacket, it could rain later.", "You should bring a jacket, it might rain later.", "You should bring a jacket, it may rain later.", "You should bring a jacket, it could rain later.", "You ought to take a jacket, it might rain later.", "You ought to take a jacket, it may rain later.", "You ought to take a jacket, it could rain later.", "You ought to bring a jacket, it might rain later.", "You ought to bring a jacket, it may rain later.", "You ought to bring a jacket, it could rain later.", "You should take a jacket because it might rain later."]],
      ["You don't have to come if you are too tired.", "Tu n'es pas obligé de venir si tu es trop fatigué.", ["You don't need to come if you are too tired.", "You needn't come if you are too tired."]],
      ["You must wear your seat belt in the car.", "Tu dois mettre ta ceinture de sécurité dans la voiture.", ["You must wear your seatbelt in the car.", "You must wear a seat belt in the car.", "You must wear a seatbelt in the car.", "You must put on your seat belt in the car.", "You must put on your seatbelt in the car.", "You must put on a seat belt in the car.", "You must put on a seatbelt in the car.", "You have to wear your seat belt in the car.", "You have to wear your seatbelt in the car.", "You have to wear a seat belt in the car.", "You have to wear a seatbelt in the car.", "You have to put on your seat belt in the car.", "You have to put on your seatbelt in the car.", "You have to put on a seat belt in the car.", "You have to put on a seatbelt in the car."]],
      ["You mustn't use your phone while you are driving.", "Tu ne dois pas utiliser ton téléphone en conduisant.", ["You mustn't use your phone while driving.", "You mustn't use your phone while you drive.", "You mustn't use your phone when driving.", "You mustn't use your mobile phone while you are driving.", "You mustn't use your mobile phone while driving.", "You mustn't use your mobile phone while you drive.", "You mustn't use your mobile phone when driving.", "You can't use your phone while you are driving.", "You can't use your phone while driving.", "You can't use your phone while you drive.", "You can't use your phone when driving.", "You can't use your mobile phone while you are driving.", "You can't use your mobile phone while driving.", "You can't use your mobile phone while you drive.", "You can't use your mobile phone when driving."]],
      ["Do we have to pay to visit the museum?", "Est-ce qu'on doit payer pour visiter le musée ?", ["Do we have to pay to go into the museum?", "Do we have to pay to enter the museum?", "Do we need to pay to visit the museum?", "Do we need to pay to go into the museum?", "Do we need to pay to enter the museum?", "Do you have to pay to visit the museum?", "Do you have to pay to go into the museum?", "Do you have to pay to enter the museum?", "Do you need to pay to visit the museum?", "Do you need to pay to go into the museum?", "Do you need to pay to enter the museum?", "Must we pay to visit the museum?", "Must we pay to enter the museum?"]],
      ["I think you should apologise to her.", "Je pense que tu devrais t'excuser auprès d'elle.", ["I think you should say sorry to her.", "I think you ought to apologise to her.", "I think you ought to say sorry to her.", "I think that you should apologise to her.", "I think that you should say sorry to her.", "I think that you ought to apologise to her.", "I think that you ought to say sorry to her."]],
      ["Visitors are not allowed to take photos inside the church.", "Les visiteurs n'ont pas le droit de prendre des photos dans l'église.", ["Visitors are not allowed to take photos in the church.", "Visitors are not allowed to take pictures inside the church.", "Visitors are not allowed to take pictures in the church.", "Visitors can't take photos inside the church.", "Visitors can't take photos in the church.", "Visitors can't take pictures inside the church.", "Visitors can't take pictures in the church.", "The visitors are not allowed to take photos inside the church.", "The visitors are not allowed to take photos in the church.", "The visitors are not allowed to take pictures inside the church.", "The visitors are not allowed to take pictures in the church.", "The visitors can't take photos inside the church.", "The visitors can't take photos in the church.", "The visitors can't take pictures inside the church.", "The visitors can't take pictures in the church."]],
      ["I have to get up at six every morning.", "Je dois me lever à six heures tous les matins.", ["I have to get up at six o'clock every morning.", "I have to wake up at six every morning.", "I have to wake up at six o'clock every morning.", "I must get up at six every morning.", "I must get up at six o'clock every morning.", "I must wake up at six every morning.", "I must wake up at six o'clock every morning.", "I need to get up at six every morning.", "I need to get up at six o'clock every morning.", "I need to wake up at six every morning.", "I need to wake up at six o'clock every morning."]],
      ["You shouldn't spend so much time on your phone.", "Tu ne devrais pas passer autant de temps sur ton téléphone.", ["You shouldn't spend so much time on your mobile.", "You shouldn't spend so much time on your mobile phone.", "You shouldn't spend that much time on your phone.", "You shouldn't spend that much time on your mobile.", "You shouldn't spend that much time on your mobile phone.", "You ought not to spend so much time on your phone.", "You ought not to spend so much time on your mobile.", "You ought not to spend so much time on your mobile phone.", "You ought not to spend that much time on your phone.", "You ought not to spend that much time on your mobile.", "You ought not to spend that much time on your mobile phone."]],
      ["Everyone has to wear a badge in the building.", "Tout le monde doit porter un badge dans le bâtiment.", ["Everyone has to wear a badge inside the building.", "Everyone must wear a badge in the building.", "Everyone must wear a badge inside the building.", "Everybody has to wear a badge in the building.", "Everybody has to wear a badge inside the building.", "Everybody must wear a badge in the building.", "Everybody must wear a badge inside the building."]]
    ],
    blanks: [
      ["You ___ smoke in the hospital, it is forbidden.", "mustn't", ["mustn't", "don't have to", "needn't", "can"], "Tu ne dois pas fumer à l'hôpital, c'est interdit.", "mustn't = interdiction. don't have to = ce n'est pas obligatoire.", "Verbes modaux"],
      ["The museum is free, so you ___ pay.", "don't have to", ["don't have to", "mustn't", "haven't to", "don't must"], "Le musée est gratuit, donc tu n'es pas obligé de payer.", "don't have to = ne pas être obligé de. mustn't = interdiction.", "Verbes modaux"],
      ["You look tired. You ___ go to bed earlier.", "should", ["should", "must to", "ought", "have"], "Tu as l'air fatigué. Tu devrais te coucher plus tôt.", "should + base verbale = tu devrais (conseil). Jamais de to après should ou must.", "Verbes modaux"],
      ["You had better ___ an umbrella, it's going to rain.", "take", ["take", "to take", "taking", "took"], "Tu ferais mieux de prendre un parapluie, il va pleuvoir.", "had better + base verbale (sans to) = ferais mieux de.", "Verbes modaux"],
      ["Yesterday I ___ work until nine in the evening.", "had to", ["had to", "must", "have to", "should"], "Hier, j'ai dû travailler jusqu'à neuf heures du soir.", "must n'a pas de passé : on utilise had to.", "Verbes modaux"],
      ["___ I have to bring my passport?", "Do", ["Do", "Must", "Am", "Have"], "Est-ce que je dois apporter mon passeport ?", "have to se conjugue comme un verbe normal : la question se fait avec do / does.", "Verbes modaux"]
    ]
  },
  {
    id: "b1u6", emoji: "🔮", title: "Et si…", subtitle: "Faire des hypothèses avec if", color: "#10B981",
    vocab: [
      ["unless", "à moins que", "⛔"],
      ["in case", "au cas où", "🧯"],
      ["otherwise", "sinon", "↩️"],
      ["to afford", "avoir les moyens", "💳"],
      ["lottery", "loterie", "🎰"],
      ["opportunity", "occasion", "🚪"],
      ["risk", "risque", "🎲"],
      ["decision", "décision", "🪙"],
      ["to retire", "prendre sa retraite", "👴"],
      ["wish", "souhait", "🌠"],
      ["desert island", "île déserte", "🌴"],
      ["to hesitate", "hésiter", "🤷"]
    ],
    sentences: [
      ["If it rains tomorrow, we will stay at home.", "S'il pleut demain, nous resterons à la maison.", ["If it rains tomorrow, we will stay home.", "If it rains tomorrow, we will stay in.", "If it rains tomorrow, we are going to stay at home.", "If it rains tomorrow, we are going to stay home.", "If it rains tomorrow, we are going to stay in.", "We will stay at home if it rains tomorrow.", "We will stay home if it rains tomorrow.", "We are going to stay at home if it rains tomorrow.", "We are going to stay home if it rains tomorrow."]],
      ["If I won the lottery, I would travel around the world.", "Si je gagnais au loto, je ferais le tour du monde.", ["If I won the lottery, I would travel round the world.", "If I won the lottery, I would go around the world.", "I would travel around the world if I won the lottery.", "I would travel round the world if I won the lottery.", "I would go around the world if I won the lottery."]],
      ["What would you do if you lost your job?", "Que ferais-tu si tu perdais ton travail ?", ["If you lost your job, what would you do?"]],
      ["If I were you, I would accept the offer.", "À ta place, j'accepterais l'offre.", ["If I were you, I would take the offer.", "If I was you, I would accept the offer.", "If I was you, I would take the offer.", "I would accept the offer if I were you.", "I would accept the offer if I was you.", "I would take the offer if I were you.", "I would take the offer if I was you."]],
      ["I will call you as soon as I arrive.", "Je t'appellerai dès que j'arriverai.", ["I will call you as soon as I get there.", "I will phone you as soon as I arrive.", "I will phone you as soon as I get there.", "I will ring you as soon as I arrive.", "I will ring you as soon as I get there."]],
      ["We won't go out unless the weather improves.", "Nous ne sortirons pas à moins que le temps ne s'améliore.", ["We won't go out unless the weather gets better.", "We are not going to go out unless the weather improves.", "We are not going to go out unless the weather gets better.", "We won't go out if the weather doesn't improve."]],
      ["Take an umbrella in case it rains this afternoon.", "Prends un parapluie au cas où il pleuvrait cet après-midi.", ["Bring an umbrella in case it rains this afternoon."]],
      ["If I had more free time, I would learn the piano.", "Si j'avais plus de temps libre, j'apprendrais le piano.", ["If I had more free time, I would learn piano.", "If I had more free time, I would learn to play the piano.", "I would learn the piano if I had more free time.", "I would learn to play the piano if I had more free time."]],
      ["If you don't hurry, you will miss the bus.", "Si tu ne te dépêches pas, tu vas rater le bus.", ["If you don't hurry, you are going to miss the bus.", "If you don't hurry up, you will miss the bus.", "If you don't hurry up, you are going to miss the bus.", "Unless you hurry, you will miss the bus.", "Unless you hurry, you are going to miss the bus.", "Unless you hurry up, you will miss the bus.", "Unless you hurry up, you are going to miss the bus."]],
      ["Would you live abroad if you had the chance?", "Tu vivrais à l'étranger si tu en avais l'occasion ?", ["Would you live abroad if you had the opportunity?", "If you had the chance, would you live abroad?", "If you had the opportunity, would you live abroad?"]]
    ],
    blanks: [
      ["If it ___ tomorrow, we will cancel the picnic.", "rains", ["rains", "will rain", "rained", "would rain"], "S'il pleut demain, nous annulerons le pique-nique.", "Premier conditionnel : if + présent, puis will + base verbale. Jamais will juste après if.", "Conditionnel"],
      ["If I had more money, I ___ buy a house.", "would", ["would", "will", "can", "have"], "Si j'avais plus d'argent, j'achèterais une maison.", "Deuxième conditionnel : if + prétérit, puis would + base verbale.", "Conditionnel"],
      ["If I ___ you, I would talk to him.", "were", ["were", "am", "will be", "would be"], "À ta place, je lui parlerais.", "If I were you = à ta place. Après if, on emploie were à toutes les personnes.", "Conditionnel"],
      ["We will miss the train ___ we leave now.", "unless", ["unless", "in case", "as soon as", "otherwise"], "Nous allons rater le train si nous ne partons pas maintenant.", "unless = à moins que, sauf si (= if… not).", "Conditionnel"],
      ["I'll tell her the news when she ___ home.", "gets", ["gets", "will get", "would get", "got"], "Je lui annoncerai la nouvelle quand elle rentrera.", "Après when, as soon as, before…, on utilise le présent pour parler du futur.", "When / as soon as"],
      ["What would you do if you ___ a million euros?", "won", ["won", "win", "will win", "would win"], "Que ferais-tu si tu gagnais un million d'euros ?", "Deuxième conditionnel : après if, on met le prétérit (won), jamais would.", "Conditionnel"]
    ]
  },
  {
    id: "b1u7", emoji: "🧳", title: "Imprévus en voyage", subtitle: "Retards, annulations, bagages perdus", color: "#06B6D4",
    vocab: [
      ["delay", "retard", "⏳"],
      ["cancellation", "annulation", "🛑"],
      ["luggage", "bagages", "🧳"],
      ["connecting flight", "vol de correspondance", "🔗"],
      ["boarding pass", "carte d'embarquement", "🎟️"],
      ["to board", "embarquer", "🛫"],
      ["car rental", "location de voiture", "🚙"],
      ["insurance", "assurance", "🛡️"],
      ["deposit", "caution", "🔐"],
      ["strike", "grève", "✊"],
      ["platform", "quai", "🚆"],
      ["customs", "douane", "🛃"]
    ],
    sentences: [
      ["Our flight has been cancelled because of the storm.", "Notre vol a été annulé à cause de la tempête.", ["Our flight has been cancelled due to the storm.", "Our flight was cancelled because of the storm.", "Our flight was cancelled due to the storm."]],
      ["The train is forty minutes late.", "Le train a quarante minutes de retard.", ["The train is running forty minutes late.", "The train is delayed by forty minutes.", "The train is delayed forty minutes.", "The train has a forty minute delay."]],
      ["My suitcase hasn't arrived, what should I do?", "Ma valise n'est pas arrivée, que dois-je faire ?", ["My suitcase hasn't arrived, what do I do?", "My suitcase hasn't arrived, what do I have to do?", "My suitcase hasn't arrived, what must I do?", "My suitcase didn't arrive, what should I do?", "My suitcase didn't arrive, what do I do?", "My suitcase didn't arrive, what do I have to do?", "My suitcase didn't arrive, what must I do?"]],
      ["I missed my connecting flight in London.", "J'ai raté ma correspondance à Londres.", ["I missed my connection in London.", "I have missed my connecting flight in London.", "I have missed my connection in London."]],
      ["Is there another train to London this evening?", "Y a-t-il un autre train pour Londres ce soir ?", ["Is there another train to London tonight?", "Is there another train for London this evening?", "Is there another train for London tonight?"]],
      ["We would like to rent a car for a week.", "Nous voudrions louer une voiture pour une semaine.", ["We would like to rent a car for one week.", "We would like to hire a car for a week.", "We would like to hire a car for one week."]],
      ["Is insurance included in the price?", "L'assurance est-elle comprise dans le prix ?", ["Is the insurance included in the price?"]],
      ["The airline has lost my luggage.", "La compagnie aérienne a perdu mes bagages.", ["The airline has lost my baggage.", "The airline has lost my bags.", "The airline lost my luggage.", "The airline lost my baggage.", "The airline lost my bags."]],
      ["There is a strike, so all the trains are cancelled.", "Il y a une grève, donc tous les trains sont annulés.", ["There is a strike, so all trains are cancelled."]],
      ["We were stuck at the airport for six hours.", "Nous sommes restés bloqués à l'aéroport pendant six heures.", ["We were stranded at the airport for six hours.", "We have been stuck at the airport for six hours.", "We have been stranded at the airport for six hours.", "We got stuck at the airport for six hours.", "We got stranded at the airport for six hours."]]
    ],
    blanks: [
      ["Our flight has been ___ because of the fog.", "cancelled", ["cancelled", "cancel", "cancelling", "cancels"], "Notre vol a été annulé à cause du brouillard.", "Voix passive : be + participe passé (cancelled).", "Voix passive"],
      ["We were waiting at the gate when they ___ the delay.", "announced", ["announced", "announce", "have announced", "announces"], "Nous attendions à la porte d'embarquement quand ils ont annoncé le retard.", "Action longue au past continuous (were waiting), action courte qui l'interrompt au prétérit (announced).", "Passé continu"],
      ["I ___ for a taxi when it started to rain.", "was waiting", ["was waiting", "am waiting", "have waited", "were waiting"], "J'attendais un taxi quand il a commencé à pleuvoir.", "Action en cours dans le passé : was / were + verbe en -ing. Avec I : was.", "Passé continu"],
      ["We arrived ___ the airport two hours late.", "at", ["at", "to", "in", "on"], "Nous sommes arrivés à l'aéroport avec deux heures de retard.", "arrive at + lieu précis (aéroport, gare). arrive in + ville ou pays. Jamais arrive to.", "Prépositions de lieu"],
      ["My suitcase was ___ at the airport.", "stolen", ["stolen", "stole", "steal", "stealing"], "Ma valise a été volée à l'aéroport.", "Voix passive : was + participe passé (steal → stole → stolen).", "Voix passive"],
      ["I'd like to rent a car ___ three days.", "for", ["for", "during", "since", "while"], "Je voudrais louer une voiture pour trois jours.", "for + durée (three days). during + nom d'événement (during the trip).", "Prépositions de temps"]
    ]
  },
  {
    id: "b1u8", emoji: "🧘", title: "Bien-être", subtitle: "Sommeil, stress, sport et alimentation", color: "#8B5CF6",
    vocab: [
      ["lifestyle", "mode de vie", "🌿"],
      ["balanced diet", "alimentation équilibrée", "🥗"],
      ["workout", "séance de sport", "🏋️"],
      ["to stretch", "s'étirer", "🤸"],
      ["insomnia", "insomnie", "🦉"],
      ["nap", "sieste", "💤"],
      ["fit", "en forme", "🏃"],
      ["exhausted", "épuisé", "🥱"],
      ["junk food", "malbouffe", "🍟"],
      ["habit", "habitude", "🔁"],
      ["mental health", "santé mentale", "🧠"],
      ["to breathe", "respirer", "🌬️"]
    ],
    sentences: [
      ["I have been sleeping badly for a few weeks.", "Je dors mal depuis quelques semaines.", ["I have been sleeping badly for several weeks.", "I have been sleeping badly for some weeks.", "I have been sleeping poorly for a few weeks.", "I have been sleeping poorly for several weeks.", "I have been sleeping poorly for some weeks.", "I have slept badly for a few weeks."]],
      ["I used to smoke, but I gave up last year.", "Avant, je fumais, mais j'ai arrêté l'année dernière.", ["I used to smoke, but I quit last year.", "I used to smoke, but I stopped last year."]],
      ["Going for a walk every day is good for your health.", "Faire une promenade tous les jours, c'est bon pour la santé.", ["Going for a walk every day is good for you.", "Taking a walk every day is good for your health.", "Taking a walk every day is good for you.", "Walking every day is good for your health.", "Walking every day is good for you."]],
      ["I try to go to bed before eleven every night.", "J'essaie de me coucher avant onze heures tous les soirs.", ["I try to go to bed before eleven every evening.", "I try to go to bed before eleven o'clock every night.", "I try to go to bed before eleven o'clock every evening."]],
      ["You don't drink enough water during the day.", "Tu ne bois pas assez d'eau pendant la journée.", ["You aren't drinking enough water during the day."]],
      ["Stress can have a negative effect on sleep.", "Le stress peut avoir un effet négatif sur le sommeil.", ["Stress can have a negative effect on your sleep.", "Stress can have a bad effect on sleep.", "Stress can have a bad effect on your sleep."]],
      ["I have taken up yoga to reduce my stress.", "Je me suis mis au yoga pour réduire mon stress.", ["I took up yoga to reduce my stress.", "I have started doing yoga to reduce my stress.", "I have started to do yoga to reduce my stress.", "I started doing yoga to reduce my stress.", "I started to do yoga to reduce my stress."]],
      ["I eat less junk food than I used to.", "Je mange moins de malbouffe qu'avant.", ["I eat less junk food than before.", "I eat less junk food than I did before."]],
      ["How many hours do you sleep a night?", "Tu dors combien d'heures par nuit ?", ["How many hours do you sleep per night?", "How many hours do you sleep each night?", "How many hours do you sleep every night?", "How many hours of sleep do you get a night?", "How many hours of sleep do you get per night?"]],
      ["I am exhausted because I worked late all week.", "Je suis épuisé parce que j'ai travaillé tard toute la semaine.", ["I am exhausted because I have worked late all week.", "I am exhausted because I have been working late all week."]]
    ],
    blanks: [
      ["I ___ play football every weekend when I was younger.", "used to", ["used to", "use to", "was used to", "am used to"], "Je jouais au foot tous les week-ends quand j'étais plus jeune.", "used to + base verbale = habitude passée (avant, je…).", "Used to"],
      ["Did you ___ to do any sport at school?", "use", ["use", "used", "using", "uses"], "Tu faisais du sport à l'école ?", "Dans une question avec did, on écrit use to (sans d).", "Used to"],
      ["___ sport regularly helps you sleep better.", "Doing", ["Doing", "Do", "To doing", "Done"], "Faire du sport régulièrement aide à mieux dormir.", "Un verbe sujet de la phrase se met en -ing.", "Gérondif / infinitif"],
      ["I'm trying to give up ___ coffee.", "drinking", ["drinking", "to drink", "drink", "drank"], "J'essaie d'arrêter de boire du café.", "Après give up, stop, avoid…, le verbe se met en -ing.", "Gérondif / infinitif"],
      ["I'm too tired ___ go to the gym tonight.", "to", ["to", "for", "that", "of"], "Je suis trop fatigué pour aller à la salle de sport ce soir.", "trop… pour… = too + adjectif + to + verbe.", "Too / enough"],
      ["You aren't getting ___ sleep.", "enough", ["enough", "too", "many", "very"], "Tu ne dors pas assez.", "enough = assez. Il se place avant un nom (enough sleep), mais après un adjectif (old enough).", "Too / enough"]
    ]
  },
  {
    id: "b1u9", emoji: "📰", title: "Actualité et société", subtitle: "Infos, environnement, technologie", color: "#EC4899",
    vocab: [
      ["headline", "gros titre", "🗞️"],
      ["environment", "environnement", "🌱"],
      ["climate change", "changement climatique", "🌡️"],
      ["renewable energy", "énergie renouvelable", "🔋"],
      ["to recycle", "recycler", "♻️"],
      ["waste", "déchets", "🗑️"],
      ["government", "gouvernement", "🏛️"],
      ["election", "élection", "🗳️"],
      ["social media", "réseaux sociaux", "📱"],
      ["artificial intelligence", "intelligence artificielle", "🤖"],
      ["unemployment", "chômage", "📉"],
      ["survey", "sondage", "📊"]
    ],
    sentences: [
      ["Did you hear the news about the election?", "Tu as entendu les infos sur l'élection ?", ["Did you hear the news on the election?", "Have you heard the news about the election?", "Have you heard the news on the election?"]],
      ["More and more people are working from home.", "De plus en plus de gens travaillent de chez eux.", ["More and more people are working remotely.", "More and more people work from home.", "More and more people work remotely."]],
      ["Plastic waste is a huge problem for the oceans.", "Les déchets plastiques sont un énorme problème pour les océans.", ["Plastic waste is a huge problem for oceans.", "Plastic waste is a big problem for the oceans.", "Plastic waste is a big problem for oceans.", "Plastic waste is a massive problem for the oceans.", "Plastic waste is a massive problem for oceans.", "Plastic waste is an enormous problem for the oceans.", "Plastic waste is an enormous problem for oceans."]],
      ["The new law was passed by the government last week.", "La nouvelle loi a été adoptée par le gouvernement la semaine dernière.", ["The new law was adopted by the government last week.", "The new law was approved by the government last week.", "The government passed the new law last week.", "The government adopted the new law last week."]],
      ["According to the survey, most people are worried about climate change.", "D'après le sondage, la plupart des gens s'inquiètent du changement climatique.", ["According to the survey, most people worry about climate change.", "According to the survey, most people are concerned about climate change.", "According to the poll, most people are worried about climate change.", "According to the poll, most people worry about climate change.", "According to the poll, most people are concerned about climate change."]],
      ["The minister said that prices would go down.", "Le ministre a dit que les prix allaient baisser.", ["The minister said that prices would fall.", "The minister said that prices were going to go down.", "The minister said that prices were going to fall.", "The minister said that the prices would go down.", "The minister said that the prices would fall.", "The minister said that the prices were going to go down.", "The minister said that the prices were going to fall.", "The minister said prices would go down.", "The minister said prices would fall.", "The minister said prices were going to go down.", "The minister said prices were going to fall.", "The minister said the prices would go down.", "The minister said the prices would fall.", "The minister said the prices were going to go down.", "The minister said the prices were going to fall."]],
      ["Smartphones have completely changed the way we communicate.", "Les smartphones ont complètement changé notre façon de communiquer.", ["Smartphones have completely changed how we communicate.", "Smartphones have completely changed the way that we communicate.", "Smartphones completely changed the way we communicate.", "Smartphones completely changed how we communicate.", "Smartphones completely changed the way that we communicate.", "Smartphones have completely changed our way of communicating."]],
      ["I don't trust everything I read on social media.", "Je ne crois pas tout ce que je lis sur les réseaux sociaux.", ["I don't trust everything that I read on social media.", "I don't believe everything I read on social media.", "I don't believe everything that I read on social media."]],
      ["We should use public transport instead of our cars.", "Nous devrions prendre les transports en commun au lieu de nos voitures.", ["We should use public transportation instead of our cars.", "We should take public transport instead of our cars.", "We should take public transportation instead of our cars.", "We ought to use public transport instead of our cars.", "We ought to use public transportation instead of our cars.", "We ought to take public transport instead of our cars.", "We ought to take public transportation instead of our cars."]],
      ["Artificial intelligence will change many jobs in the future.", "L'intelligence artificielle va changer beaucoup de métiers à l'avenir.", ["Artificial intelligence will change a lot of jobs in the future.", "Artificial intelligence will change lots of jobs in the future.", "Artificial intelligence is going to change many jobs in the future.", "Artificial intelligence is going to change a lot of jobs in the future.", "Artificial intelligence is going to change lots of jobs in the future."]]
    ],
    blanks: [
      ["Millions of plastic bottles ___ every day.", "are thrown away", ["are thrown away", "throw away", "are throwing away", "is thrown away"], "Des millions de bouteilles en plastique sont jetées chaque jour.", "Voix passive au présent : am / is / are + participe passé.", "Voix passive"],
      ["The article ___ by a famous journalist.", "was written", ["was written", "wrote", "was wrote", "has written"], "L'article a été écrit par un journaliste célèbre.", "Voix passive au passé : was / were + participe passé (write → wrote → written).", "Voix passive"],
      ["This is the journalist ___ won the prize.", "who", ["who", "which", "where", "whose"], "C'est le journaliste qui a gagné le prix.", "who pour une personne, which pour une chose.", "Pronoms relatifs"],
      ["It is an app ___ helps you save energy.", "which", ["which", "who", "where", "what"], "C'est une appli qui t'aide à économiser de l'énergie.", "which (ou that) pour une chose, who pour une personne.", "Pronoms relatifs"],
      ["The minister said that the situation ___ improving.", "was", ["was", "were", "has", "be"], "Le ministre a dit que la situation s'améliorait.", "Discours indirect : après said, le présent recule d'un temps (is → was).", "Discours indirect"],
      ["The journalist ___ us that the story was true.", "told", ["told", "said", "spoke", "talked"], "Le journaliste nous a dit que l'histoire était vraie.", "tell + personne (told us). say sans personne (said that…).", "Discours indirect"]
    ]
  },
  {
    id: "b1u10", emoji: "❤️", title: "Relations", subtitle: "Couple, amis, famille et phrasal verbs", color: "#0EA5E9",
    vocab: [
      ["to get on with", "bien s'entendre avec", "🙌"],
      ["to break up", "rompre", "💔"],
      ["to fall out", "se brouiller", "⚡"],
      ["to make up", "se réconcilier", "🕊️"],
      ["to look after", "s'occuper de", "🤱"],
      ["to bring up", "élever", "👨‍👧"],
      ["to grow up", "grandir", "🌳"],
      ["to find out", "découvrir", "🔍"],
      ["to count on", "compter sur", "🫂"],
      ["to keep in touch", "rester en contact", "📬"],
      ["relationship", "relation", "💞"],
      ["engaged", "fiancé", "💍"]
    ],
    sentences: [
      ["I get on really well with my sister.", "Je m'entends très bien avec ma sœur.", ["I get on very well with my sister.", "I get along really well with my sister.", "I get along very well with my sister."]],
      ["They broke up after five years together.", "Ils ont rompu après cinq ans ensemble.", ["They split up after five years together.", "They have broken up after five years together.", "They have split up after five years together."]],
      ["Who looks after your children when you are at work?", "Qui s'occupe de tes enfants quand tu es au travail ?", ["Who looks after your children while you are at work?", "Who looks after your kids when you are at work?", "Who looks after your kids while you are at work?", "Who takes care of your children when you are at work?", "Who takes care of your children while you are at work?", "Who takes care of your kids when you are at work?", "Who takes care of your kids while you are at work?"]],
      ["I found out the truth by accident.", "J'ai découvert la vérité par hasard.", ["I found out the truth by chance.", "I discovered the truth by accident.", "I discovered the truth by chance."]],
      ["We fell out last year, but we have made up since.", "Nous nous sommes brouillés l'année dernière, mais nous nous sommes réconciliés depuis.", ["We fell out last year, but we have since made up.", "We fell out last year, but we have made up since then."]],
      ["My grandparents brought me up in the countryside.", "Mes grands-parents m'ont élevé à la campagne.", ["My grandparents brought me up in the country.", "My grandparents raised me in the countryside.", "My grandparents raised me in the country."]],
      ["You can always count on me if you need help.", "Tu peux toujours compter sur moi si tu as besoin d'aide.", ["You can always rely on me if you need help.", "You can always depend on me if you need help."]],
      ["We have kept in touch since we left school.", "Nous sommes restés en contact depuis que nous avons quitté l'école.", ["We have kept in contact since we left school.", "We have stayed in touch since we left school.", "We have stayed in contact since we left school."]],
      ["I grew up in a small village near London.", "J'ai grandi dans un petit village près de Londres.", ["I grew up in a small village close to London."]],
      ["My brother and his girlfriend got engaged last month.", "Mon frère et sa copine se sont fiancés le mois dernier.", ["My brother and his girlfriend became engaged last month."]]
    ],
    blanks: [
      ["Do you get on ___ your neighbours?", "with", ["with", "by", "for", "from"], "Tu t'entends bien avec tes voisins ?", "get on with someone = bien s'entendre avec quelqu'un.", "Phrasal verbs"],
      ["Can you look ___ my cat while I'm on holiday?", "after", ["after", "on", "into", "forward"], "Tu peux t'occuper de mon chat pendant que je suis en vacances ?", "look after = s'occuper de (à ne pas confondre avec look for = chercher).", "Phrasal verbs"],
      ["I found ___ that he had lied to me.", "out", ["out", "up", "off", "on"], "J'ai découvert qu'il m'avait menti.", "find out = découvrir (une information, la vérité).", "Phrasal verbs"],
      ["What do you want to be when you grow ___?", "up", ["up", "out", "on", "off"], "Que veux-tu devenir quand tu seras grand ?", "grow up = grandir, devenir adulte.", "Phrasal verbs"],
      ["We have known each other ___ we were at school.", "since", ["since", "for", "during", "when"], "Nous nous connaissons depuis l'école.", "since + point de départ (ici : since we were at school).", "Since / for"],
      ["I know I can count ___ my best friend.", "on", ["on", "of", "at", "to"], "Je sais que je peux compter sur ma meilleure amie.", "count on someone = compter sur quelqu'un.", "Phrasal verbs"]
    ]
  }
];
