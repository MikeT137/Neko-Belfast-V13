module.exports = {
    name:'storyrun',
    description: "It tells the story of a helpless boy (RUN)",
    run: async (bot, message, args) => {
        if(args[0]) {
            return;
        }else if (!args[0]) {
            message.channel.send('**Story - RUN**\n*You\'re a 20 year old boy. You live in a small cabin inside a forest. You\'re there alone, no parents, no friends, no one. Its currently 17th of october. You thought that it would be really good if you chopped some wood with an axe so you can warm yourself when winter comes. You chop wood, doing your business. But suddenly you hear a weird sound coming from afar. In that moment you:\n\n👍 - still chop wood\n✊ - go inside your house\n👎 - take your axe with you and investigate the zone*\n\n**Select your choice:**')
            .then(msg => {
            msg.react('👍'),
            msg.react('✊'),
            msg.react('👎')

            const filter = (reaction, user) => {
                return ['👍', '✊', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
            }
            const filter2 = (reaction2, user) => {
                return ['👍', '👎'].includes(reaction2.emoji.name) && user.id === message.author.id;
            };
            const filter3 = (reaction3, user) => {
                return ['👍', '👎'].includes(reaction3.emoji.name) && user.id === message.author.id;
            };
            const filter4 = (reaction4, user) => {
                return ['👍', '👎'].includes(reaction4.emoji.name) && user.id === message.author.id;
            };
            const filter5 = (reaction5, user) => {
                return ['👍', '👎'].includes(reaction5.emoji.name) && user.id === message.author.id;
            };
            const filter6 = (reaction6, user) => {
                return ['👍', '👎'].includes(reaction6.emoji.name) && user.id === message.author.id;
            };
            const filter7 = (reaction7, user) => {
                return ['👍', '👎'].includes(reaction7.emoji.name) && user.id === message.author.id;
            };
            const filter8 = (reaction8, user) => {
                return ['👍', '✊', '👎'].includes(reaction8.emoji.name) && user.id === message.author.id;
            };
            const filter9 = (reaction9, user) => {
                return ['👍', '👎'].includes(reaction9.emoji.name) && user.id === message.author.id;
            };

            msg.awaitReactions(filter, { max: 1 })
                .then(collected => {
                    const reaction = collected.first();
                    if(reaction.emoji.name === '👍') {
                        msg.edit('*You think to yourself that it was just an animal or something, so you decide to ignore it. You then finish chopping the wood, you grab all of it, and go towards your basement so you can leave it there. But then you hear that weird sound again, this time coming from your basement. You then:\n\n👍 - go in the basement\n👎 - leave the cabin*\n\n**Select your choice:**')

                        msg.awaitReactions(filter2, { max: 1 })
                        .then(collected2 => {
                            const reaction2 = collected2.first();
                            if(reaction2.emoji.name === '👍') {
                                msg.edit('*You decided to ignore that sound again, and you went in the basement. Everything seems fine, nothing out of place. You put all the logs in a corner, but when you turn around, a creature with very sharp claws starts to cut your throat and intestines open as you scream in torture.*\n\n**YOU DIED**\nEnding 1 out of 11: The fool')

                                setTimeout(function(){
                                    msg.edit('**YOU DIED**')
                                }, 45000);
                            }
                            if(reaction2.emoji.name === '👎') {
                                msg.edit('*You were too scared to go in the basement so you left the cabin because who knows what could be down there, it might come to the surface! So you decide to leave that place and walk in the forest. Surprisingly, the forest was very quiet, no animals, no birds, nothing. But suddenly, you hear some siren noises that aren\'t too far from where you are. You start hiding. And then a voice the that sounds like being on a radio says:* Can anyone hear me ? I\'m looking for a 20 year old boy, is anyone there ? *Hearing that, you then:\n\n👍 - run away\n👎 - get closer and say hi*\n\n**Select your choice:**')

                                msg.awaitReactions(filter3, { max: 1 })
                                .then(collected3 => {
                                    const reaction3 = collected3.first();
                                    if(reaction3.emoji.name === '👍') {
                                        msg.edit('*You thought that something was a little fishy so you instead run away from the voice. But as you run, you then see a weird and tall creature with a siren for its head walking through the forest, the creature sees you and it starts to run straight at you doing some siren noises. You immediately get scared and you run for your life as fast as you could, until suddenly you see another cabin. And you go inside the cabin and close the door behind you without knowing who\'s cabin it was. And the you see a girl that starts to point a gun at you.*\n\ngirl: Who are you and why did you come in my house?\nyou: I was chased by that siren headed thing. Sorry for intruding in your house\ngirl: Its alright, you can stay, but dont touch me okay?\nyou: I wasn\'t going to but okay\n\n*Suddenly you hear something bashing on the door really hard like they were trying to break it. Than the girl says:* We need to get you covered. Here, take this gun. *In that moment you:\n\n👍 - try both of you to kill the creature by shooting at it\n👎 - exit the house through the backdoor and run away*\n\n**Select your choice:**')
                                        
                                        msg.awaitReactions(filter4, { max: 1 })
                                        .then(collected4 => {
                                            const reaction4 = collected4.first();
                                            if(reaction4.emoji.name === '👍') {
                                                msg.edit('*You thought to yourself that the creature can\'t be that tough so it can survive multiple bullets. The creature breaks the door, you and the girl start shooting at it. But that only slowed him down, and since both of you we\'re so close to the door, the creature grabbed you with it\'s long hands and suffocated you both.*\n\n**YOU DIED**\nEnding 2 out of 10: The slaughter')
                                                
                                                setTimeout(function(){
                                                    msg.edit('**YOU DIED**')
                                                }, 45000);
                                            }
                                            if(reaction4.emoji.name === '👎') {
                                                msg.edit('*You and the girl got through the back door and ran away in the woods. Fortunately, the creature didn\'t see in what direction you went, so you run and run and run, until eventually you take a break. The night came. You make a fire so you can warm yourselves. But the night in the forest is never to be trusted. So both you and the girl stay awake in case the creature finds you. At last, you fall asleep, but the girl stays awake. She then hears a branch breaking.* Who\'s there ? *she said. But of course there was no response. And then the girl hears weird noises like static as she could see the creature from afar.*\n\ngirl: You gotta get up RIGHT NOW\nyou: Why? let me sleep a little more..\ngirl: Because the creature is coming to get us, idiot!\n\n*She then grabs you and you both start running more from the creature. An hour later, you escape from the creature. But you then started to get hungry. So you both kill a deer and eat it.*\n\ngirl: We have to do something about this, we cant just keep running forever\nyou:\n\n👍 - We could try to kill it from a distance.\n👎 - Let\'s try to \"tank it\", we have 2 guns and 1 axe, can\'t be that hard.\n\n**Select your choice:**')

                                                msg.awaitReactions(filter5, { max: 1 })
                                                .then(collected5 => {
                                                    const reaction5 = collected5.first();
                                                    if(reaction5.emoji.name === '👍') {
                                                        msg.edit('*You and the girl separate each other, as she watches you getting ready with her gun. And then you loudly say:* Siren head, i\'m here! *You then hear the siren noises, but it was coming from a little far then where you\'re at. And then you hear a girl\'s scream as she craves for help while being killed. You then run again, but eventually you find a lake, with a very deep fog that you can barely see through it. You go in the fog, and you throw a rock very far from you to your left. The creature goes to that sound, meanwhile you walk quietly through the fog until eventually you see a watch tower. You decided to go inside the watch tower. Once you got up there you see a sniper and a radio. You:\n\n👍 - you get the sniper and destroy that siren head\n👎 - get the radio and call for help*\n\n**Select your choice:**')

                                                        msg.awaitReactions(filter6, { max: 1 })
                                                        .then(collected6 => {
                                                            const reaction6 = collected6.first();
                                                            if(reaction6.emoji.name === '👍') {
                                                                msg.edit('*You picked up the sniper and you had more than enough ammo, so its time to take this freak down. Because the creature is very tall you were able to see its head, and you could\'ve already detected where its body is too. You shoot his legs first so you make sure he wont come quickly at you, then you shoot his head 2 times, just so you make sure he wont break your ears with its siren sounds. And you shoot him 3 times in the chest. You then say:* Take that bitch! *After that you take the sniper with you just in case and go back to your cabin.*\n\n**YOU SURVIVED**\nEnding 3 out of 11: The last survivor')

                                                                setTimeout(function(){
                                                                    msg.edit('**YOU SURVIVED**')
                                                                }, 45000);
                                                            }
                                                            if(reaction6.emoji.name === '👎') {
                                                                msg.edit('*You try to call for help but the radio is broken. Unfortunately siren head hears the static the the radio gives and finds out that you\'re in the watch tower and demolishes it. By falling from that much high up, you crack your skull open.*\n\n**YOU DIED**\nEnding 4 out of 10: Failed reinforcement')

                                                                setTimeout(function(){
                                                                    msg.edit('**YOU DIED**')
                                                                }, 45000);
                                                            }
                                                        })
                                                    }
                                                    if(reaction5.emoji.name === '👎') {
                                                        msg.edit('*You and the girl get ready to attack, at last siren head arrives and the fight begins. You throw the axe on his neck, and then both you and the girl start to shoot at siren head with all of your bullets. Eventually, he is finally defeated. You and the girl then get back to your cabins and live happily ever after.*\n\n**YOU SURVIVED**\nEnding 5 out of 11: The team')

                                                        setTimeout(function(){
                                                            msg.edit('**YOU SURVIVED**')
                                                        }, 45000);
                                                    }
                                                })
                                            }
                                        })
                                    }
                                    if(reaction3.emoji.name === '👎') {
                                        msg.edit('*You became very brave and got closer to the voice and said hi, but then the voice was actually coming from a weird and tall creature with a siren for its head. Then the creature started making very loud siren noises that exploded your eardrums. And then the creature grabs your neck and kills you.*\n\n**YOU DIED**\nEnding 6 out of 10: the brave dead soldier')

                                        setTimeout(function(){
                                            msg.edit('**YOU DIED**')
                                        }, 45000);
                                    }
                                })
                            }
                        })
                    }
                    if(reaction.emoji.name === '✊') {
                        msg.edit('*The noises started to get louder and louder. And so because you were scared you tried to call for help, but there was no signal. And then a tall creature with a siren for a head gets closer to your cabin. You:*\n\n👍 - go on bed and hide yourself with a blanket\n✊ - wait untill siren head gets inside to have a 1v1\n👎 - go outside and try to run away from the siren head*\n\n**Select your choice:**')

                        msg.awaitReactions(filter7, { max: 1 })
                        .then(collected7 => {
                            const reaction7 = collected7.first();
                            if(reaction7.emoji.name === '👍') {
                                msg.edit('*You knew that if you went outside you couldn\'t make it out alive, so you decide to stay hidden. But then there are some different sounds coming from beneath your bed. And then a creature with sharp claws comes from underneath your bed and you couldn\'t move because you were in shock and the creature quickly starts to cut your whole body until it eventually kills you.*\n\n**YOU DIED**\nEnding 7 out of 11: The fearful hider')

                                setTimeout(function(){
                                    msg.edit('**YOU DIED**')
                                }, 45000);
                            }
                            if(reaction7.emoji.name === '✊') {
                                msg.edit('*You thought that even if you escape from the creature, other people might run into it eventually and cause even more problems, then suddenly, you hear a car near your place that throws a bottle of gasoline and drives off, the car was red, but then you say:* That\'s odd, whatever, i need to keep my focus, i can use this gasoline to my advantage!\n*Then suddenly you pour all that gasoline around the inside of the house, you leave the axe by your side, after that you realize that the gas cooker you sometimes cook with (aside from the grill) is powered with a gas tank, you put the gas tank in the middle of the house, and with the axe on your hand, and a lighter in the other, you wait for siren head.\nSiren head eventually gets inside, you throw the axe at his chest to slow him down, then you get outside the house through the backdoor, then you say:* Let the show begin! *You use the lighter and the house starts to go on fire, you suddenly get some distance, and the gas tank explodes, and after you relax a bit, you say:* (sigh) Well that was really crazy, and all the work i put into this house is gone now, but at least i got rid of him for good.\n*You suddenly hear the same weird siren noises, this time interrupted by a bit of silence, then siren head starts to crawl towards you, because most likely the explosing ripped his legs off, you then:\n\n👍 - get angry and try to kill siren head\n✊ - wait for a miracle to happen\n👎 - run away*\n\n**Select your choice:**')

                                msg.awaitReactions(filter8, { max: 1 })
                                .then(collected8 => {
                                    const reaction8 = collected8.first();
                                    if(reaction8.emoji.name === '👍') {
                                        msg.edit('How is he still alive? *you say to yourself, and because of anger, you try to kill siren head with your own hands, then you say:* If i somehow rip those sirens off of him then he might not be such a pain in the butt\n*That was the plan...but, sometimes things dont go as planned. You try to get closer to siren head, but as you do so, the sirens start to get louder and louder, and so you back off. You try to run away, until you suddenly reach a bit pit that leads to a waterfall, and behind you there was siren head. You got cornered, and so your only solution was to jump in the water. While you fall, there was siren head, in fire, \"looking\" at you (altough he doesn\'t have eyes) from a distance.\n You pass start to pass out, and some hours later, you wake up on a island, unfortunately there were no trees, no food, nothing. And after 3 days you die from hunger*\n\n**YOU DIED**\nEnding 8 out of 11: The hopeful fighter that lost it all')
                                    }
                                    if(reaction8.emoji.name === '✊') {
                                        msg.edit('WIP')
                                    }
                                    if(reaction8.emoji.name === '👎') {
                                        msg.edit('WIP')
                                    }
                                })
                            }
                            if(reaction7.emoji.name === '👎') {
                                msg.edit('*You thought that you could eventually escape from him if you run quickly. But when you try to, siren head gets to you very rapidly and it catches you.*\n\n**YOU DIED**\nEnding 9 out of 11: The runner')

                                setTimeout(function(){
                                    msg.edit('**YOU DIED**')
                                }, 45000);
                            }
                        })
                    }
                    if(reaction.emoji.name === '👎') {
                        msg.edit('*You then decide to investigate the zone. But then you see a tall creature with a siren for a head. The creature sees you and runs at you really fast, and then your reflexes starts to kick in and you hit his leg with your axe and then you quickly run away. And because you were very close to your cabin, you thought it wasn\'t the best idea to hide in your cabin. You then start running away from him and eventually you see a hunter with a double barrel shotgun driving near you. You then say:* Help! This creature is chasing me! *And then you get in the car and the hunter drives away from the monster. It was a long ride, but eventually you arrive at the hunter\'s cabin. You then sit down at the table with him and have a chat.*\n\nhunter: What was that creature?\nyou: I don\'t know, but it definitely wasn\'t friendly. I was just doing my thing, cutting wood and all, and then i heard some siren noises coming from the forest. Though it was my mistake that i went to check what it was. Thanks for saving me from that thing\nhunter: You\'re welcome. Come on, eat up, i imagine you\'re pretty hungry.\nyou: Ah, thanks.\n\n*You then start eating, but whatever it was, it had a weird flavour. After you\'re done eating. You then go to sleep. The hunter said he\'ll go to sleep too. But he lied. And he slowly walks in with a knife and a fork towards you. You then realise that the hunter was a cannibal. You then:\n\n👍 - try to fight him\n👎 - get your axe and throw it at him*\n\n**Select your choice:**')

                        msg.awaitReactions(filter9, { max: 1 })
                        .then(collected9 => {
                            const reaction9 = collected9.first();
                            if(reaction9.emoji.name === '👍') {
                                msg.edit('*You wake up and try to fight him, but he had 2 weapons and you had none, so as you try to stop him, he stabs the fork to your belly, and the knife to your chest.*\n\n**YOU DIED**\nEnding 10 out of 11: The betrayed')

                                setTimeout(function(){
                                    msg.edit('**YOU DIED**')
                                }, 45000);
                            }
                            if(reaction9.emoji.name === '👎') {
                                msg.edit('*You throw the axe at the hunter and kill him. And then you go back to sleep. The next day you take the double barrel shotgun and the axe, and go to kill the creature. You then finally find siren head and you throwing the axe and then you start shooting siren head. And you finally killed it and then you go back to your cabin living your life peacefully.*\n\n**YOU SURVIVED**\nEnding 11 out of 11: The betrayed winner')

                                setTimeout(function(){
                                    msg.edit('**YOU SURVIVED**')
                                }, 45000);
                            }
                        })
                    }
                })
            })
        }else return;
    }
}