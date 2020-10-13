module.exports = {
    name: 'q',
    description: 'Gives the user a quote of a specific feeling',
    run: async (bot, message, args) => {
        if(!args[0]) {
            message.channel.send('You have to specify what kind of quote you want. Available options: \`happy\`, \`sad\`, \`angry\`, \`bored\`')
        } 
        switch(args[0]) {
            case 'happy':
                const happy_q = [
                    '\"Happiness is a directoin, not a place\"\nSydney J. Harris',
                    '\"Learn to value yourself, which means: fight for your happiness\"\nAyn Rand',
                    '\"Our capacity to draw happiness from aesthetic objects or material goods in fact seems critically dependent on our first satisfying a more important range of emotional or psychological needs, among them the need for understanding, for love, expression and respect\"\nAlainn De Botton',
                    '\"The true secret of happiness lies in the taking a genuine interest in all the details of daily life\"\nWilliam Morris',
                    '\"The greatest happiness you can have is knowing that you do not necessarily require happiness\"\nWilliam Saroyan',
                    '\"People should find happiness in the little things, like family\"\nAmanda Bynes',
                    '\"Happiness depends upon ourselves\"\nAristotle',
                    '\"As people spin faster and faster in the pursuit of merely personal happiness, they become exhausted in the futile effort of chasing themselves\"\nAndrew Delbanco',
                    '\"All happiness or unhappiness solely depends upon the quality of the object to which we are attached by love\"\nBaruch Spinoza',
                    '\"Happiness consists more in conveniences of pleasure that occur everyday than in great pieces of good fortune that happen but seldom\"\nBenjamin Franklin',
                    '\"Happiness is not an ideal of reason, but of imagination\"\nImmanuel Kant',
                    '\"To be without some of the things you want is an indispensable part of happiness\"\nBertrand Russell',
                    '\"A great obstacle to happiness is to expect too much happiness\"\nBernard de Fontenelle',
                    '\"To enjoy good health, to bring true happiness to one’s family, to bring peace to all, one must first discipline and control one’s own mind. If a man can control his mind he can find the way to Enlightenment, and all wisdom and virtue will naturally come to him\"\nBuddha',
                    '\"There is some kind of a sweet innocence in being human—in not having to be just happy or just sad—in the nature of being able to be both broken and whole, at the same time\"\nC. JoyBell C.',
                    '\"Even a happy life cannot be without a measure of darkness, and the word happy would lose its meaning if it were not balanced by sadness. It is far better to take things as they come along with patience and equanimity\"\nCarl Jung',
                    '\"The secret of happiness is freedom, the secret of freedom is courage\"\nCarrie Jones',
                    '\"It is not how much we have, but how much we enjoy, that makes happiness\"\nCharles Spurgeon',
                    '\"There is no happiness like that of being loved by your fellow creatures, and feeling that your presence is an addition to their comfort\"\nCharlotte Bronte',
                    '\"If you want happiness for an hour, take a nap. If you want happiness for a day, go fishing. If you want happiness for a year, inherit a fortune. If you want happiness for a lifetime, help someone else\"\nChinese Proverb',
                    '\"The only way to find true happiness is to risk being completely cut open\"\nChuck Palahniuk'
                ]
                message.channel.send(`${happy_q[Math.floor(Math.random() * happy_q.length)]}`)
            break;

            case 'sad':
                const sad_q = [
                    '\"The way sadness works is one of the strange riddles of the world. If you are stricken with a great sadness, you may feel as if you have been set aflame, not only because of the enormous pain but also because your sadness may spread over your life, like smoke from an enormous fire\"\nLemony Snicket',
                    '\"Our sweetest songs are those that tell of saddest thought\"\nPercy Bysshe Shelley',
                    '\"Sadness flies away on the wings of time\"\nJean de La Fontaine',
                    '\"Sadness is but a wall between two gardens\"\nKahlil Gibran',
                    '\"Tears are words that need to be written\"\nPaulo Coelho',
                    '\"We must understand that sadness is an ocean, and sometimes we drown, while other days we are forced to swim\"\nR.M. Drake',
                    '\"There are moments when I wish I could roll back the clock and take all the sadness away, but I have the feeling that if I did, the joy would be gone as well\"\nNicholas Sparks',
                    '\"Experiencing sadness and anger can make you feel more creative, and by being creative you can get beyond your pain or negativity\"\nYoko Ono',
                    '\"Any fool can be happy. It takes a man with real heart to make beauty out of the stuff that makes us weep\"\nClive Barker',
                    '\"There is no point treating a depressed person as though she were just feeling sad, saying, ‘There now, hang on, you’ll get over it.’ Sadness is more or less like a head cold- with patience, it passes. Depression is like cancer.\"\nBarbara Kingsolver',
                    '\"There is no greater sorrow than to recall in misery the time when we were happy\"\nDante Alighieri',
                    '\"Depression is the most unpleasant thing I have ever experienced. . . . It is that absence of being able to envisage that you will ever be cheerful again. The absence of hope. That very deadened feeling, which is so very different from feeling sad. Sad hurts but it’s a healthy feeling. It is a necessary thing to feel. Depression is very different\"\nJ.K. Rowling',
                    '\"Every man has his secret sorrows which the world knows not; and often times we call a man cold when he is only sad\"\nHenry Wadsworth Longfellow',
                    '\"Sometimes we get sad about things and we don’t like to tell other people that we are sad about them. We like to keep it a secret. Or sometimes, we are sad but we really don’t know why we are sad, so we say we aren’t sad but we really are\"\nMark Haddon',
                    '\"Leaning against my father, the sadness finally broke open inside me, hollowing out my heart and leaving me bleeding. My feet felt rooted in the dirt. There were more than two bodies buried here. Pieces of me that I didn’t even know were under the ground. Pieces of dad, too\"\nLaurie Halse Anderson',
                    '\"You cannot protect yourself from sadness without protecting yourself from happiness\"\nJonathan Safran Foer',
                    '\"The word ‘happy’ would lose its meaning if it were not balanced by sadness\"\nCarl Jung',
                    '\"Tears shed for another person are not a sign of weakness. They are a sign of a pure heart\"\nJose N. Harris',
                    '\"The longer and more carefully we look at a funny story, the sadder it becomes\"\nNikolai Gogol',
                    '\"There is some kind of a sweet innocence in being human- in not having to be just happy or just sad- in the nature of being able to be both broken and whole, at the same time\"\nC. Joybell',
                    '\"So it’s true, when all is said and done, grief is the price we pay for love\"\nE.A. Bucchianeri',
                ]
                message.channel.send(`${sad_q[Math.floor(Math.random() * sad_q.length)]}`)
            break;

            case 'angry':
                const angry_q = [
                    '\"Never go to bed mad. Stay up and fight\"\nPhyllis Diller',
                    '\"Angry people are not always wise\"\nJane Austen',
                    '\"Don’t waste your time in anger, regrets, worries, and grudges. Life is too short to be unhappy\"\nRoy T. Bennett',
                    '\"I am awfully greedy; I want everything from life. I want to be a woman and to be a man, to have many friends and to have loneliness, to work much and write good books, to travel and enjoy myself, to be selfish and to be unselfish… You see, it is difficult to get all which I want. And then when I do not succeed I get mad with anger\"\nSimone de Beauvoir',
                    '\"The best fighter is never angry\"\nLao Tzu',
                    '\"Anybody can become angry — that is easy, but to be angry with the right person and to the right degree and at the right time and for the right purpose, and in the right way — that is not within everybody\'s power and is not easy\"\nAristotle',
                    '\"Speak when you are angry and you will make the best speech you will ever regret\"\nAmbrose Bierce',
                    '\"If you spend your time hoping someone will suffer the consequences for what they did to your heart, then you\'re allowing them to hurt you a second time in your mind\"\nShannon L. Alder',
                    '\"Anger, resentment and jealousy doesn\'t change the heart of others-- it only changes yours\"\nShannon Alder',
                    '\"Anger ... it\'s a paralyzing emotion ... you can\'t get anything done. People sort of think it\'s an interesting, passionate, and igniting feeling — I don\'t think it\'s any of that — it\'s helpless ... it\'s absence of control — and I need all of my skills, all of the control, all of my powers ... and anger doesn\'t provide any of that — I have no use for it whatsoever\"\nToni Morrison',
                    '\"Usually when people are sad, they don\'t do anything. They just cry over their condition. But when they get angry, they bring about a change\"\nMalcolm X',
                    '\"Anger is just anger. It isn\'t good. It isn\'t bad. It just is. What you do with it is what matters. It\'s like anything else. You can use it to build or to destroy. You just have to make the choice\"\nJim Butcher',
                    '\"Never respond to an angry person with a fiery comeback, even if he deserves it...Don\'t allow his anger to become your anger\"\nBohdi Sanders',
                    '\"A heart filled with anger has no room for love\"\nJoan Lunden',
                    '\"It is wise to direct your anger towards problems -- not people; to focus your energies on answers -- not excuses\"\nWilliam Arthur Ward',
                    '\"How much more grievous are the consequences of anger than the causes of it\"\nMarcus Aurelius',
                    '\"Most hatred is based on fear, one way or another. Yeah. I wrapped myself in anger, with a dash of hate, and at the bottom of it all was an icy center of pure terror\"\nLaurell K. Hamilton',
                    '\"There are two things a person should never be angry at, what they can help, and what they cannot\"\nPlato',
                    '\"Don\'t hold to anger, hurt or pain. They steal your energy and keep you from love\"\nLeo Buscaglia',
                    '\"Anger is stupid, and stupidity will kill you more surely than your opponent\'s blade\"\nPatricia Briggs',
                    '\"Men in rage strike those that wish them best\"\nWilliam Shakespeare',
                ]
                message.channel.send(`${angry_q[Math.floor(Math.random() * angry_q.length)]}`)
            break;

            case 'bored':
                const bored_q = [
                    '\"There are no uninteresting things, only uninterested people\"\nG.K. Chesterton',
                    '\"I abhor the idea of a perfect world. It would bore me to tears\"\nShelby Foote',
                    '\"I would rather die of passion than of boredom\"\nÉmile Zola',
                    '\"I’m bored’ is a useless thing to say. I mean, you live in a great, big, vast world that you’ve seen none percent of. Even the inside of your own mind is endless; it goes on forever, inwardly, do you understand? The fact that you’re alive is amazing, so you don’t get to say ‘I’m bored\"\nLouis C.K.',
                    '\"That\'s right,\' she told the girls. \'You are bored. And I\'m going to let you in on a little secret about life. You think it\'s boring now? Well, it only gets more boring. The sooner you learn it\'s on you to make life interesting, the better off you\'ll be\"\nMaria Semple',
                    '\"Is life not a thousand times too short for us to bore ourselves?\"\nFriedrich Nietzsche',
                    '\"The truth is that everyone is bored, and devotes himself to cultivating habits\"\nAlbert Camus',
                    '\"The absence of the will to live is, alas, not sufficient to make one want to die\"\nMichel Houellebecq',
                    '\"I really think I write about everyday life. I don\'t think I\'m quite as odd as others say I am. Life is intrinsically, well, boring and dangerous at the same time. At any given moment the floor may open up. Of course, it almost never does; that\'s what makes it so boring\"\nEdward Gorey',
                    '\"Never underestimate the determination of a kid who is time-rich and cash-poor\"\nCory Doctorow',
                    '\"The writer\'s curse is that even in solitude, no matter its duration, he never grows lonely or bored\"\nCriss Jami',
                    '\"Our labour preserves us from three great evils -- weariness, vice, and want\"\nVoltaire,',
                    '\"Life swings like a pendulum backward and forward between pain and boredom\"\nArthur Schopenhauer',
                    '\"He had been bored, that\'s all, bored like most people. Hence he had made himself out of whole cloth a life full of complications and drama. Something must happen - and that explains most human commitments. Something must happen, even loveless slavery, even war or death. Hurray then for funerals!\"\nAlbert Camus',
                    '\"Boredom is the conviction that you can\'t change ... the shriek of unused capacities\"\nSaul Bellow',
                    '\"Boredom can be a lethal thing on a small island\"\nChristopher Moore',
                    '\"The price of being a sheep is boredom. The price of being a wolf is loneliness. Choose one or the other with great care\"\nHugh MacLeod',
                    '\"I\'m bored with it all.- Last Words\"\nWinston Churchill',
                    '\"Boredom comes from a boring mind\"\nMetallica',
                    '\"Boredom is a pleasing antidote for fear\"\nDaphne DuMaurier',
                    '\"I am never bored; to be bored is an insult to one\'s self\"\nJules Renard',
                ]
                message.channel.send(`${bored_q[Math.floor(Math.random() * bored_q.length)]}`)
            break;
        }
    }
}