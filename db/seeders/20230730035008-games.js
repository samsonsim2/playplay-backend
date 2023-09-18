"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "games",
      [
        {
          title: "Catch the Dragon's Tail",
          content:
            "Form a single chain by holding hands. The person on both ends are the head and tail respectively. The aim is for the head to catch the tail. Switch roles when you catch successfully! \n\nCareful! The game can get stimulating and vigorous!",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Ready, Aim, Throw",
          content:
            "Pair up, and have one of you will be blindfolded. \nVerbally help your now blind partner to catch or throw a beanbag to or from another blindfolded player.\nThe pair of pairs with the most passes wins!",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Bucket-Beanbag",
          content:
            "Place a bucket at least 4 big steps away from a player. The player is to toss a beanbag into the bucket from a stationary position, standing or sitting. 1-2 other players may hold the bucket and move it side to side into position.",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "The Big Ship Sails",
          content:
            "Form a line. The first two players hold their hands up to make an arch, while the players at the other end dance through, keeping their hands joined at all times. Repeat and keep going without breaking the chain.",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Sports Hot Potato",
          content:
            "Split into two groups. Each group stands in a circle, arms width apart and passes the ball to one another. Every time there is a successful pass, the group takes one step back. The bigger circle after 5 minutes wins.",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Zip, Zap, Zop",
          content:
            'The first player claps, points to someone, and says "zip." The pointed-to player immediately claps, points to another person, and says "zap." The third player claps, points to someone, and says "zop," keeping the pattern going. \n\nIncrease the pace with each round, challenging participants to react more swiftly.  If someone says a word out of order or hesitates, they are out. Out players can become "land mines" by crossing their arms. If a player points to a "mine," they\'re also out.\n\nContinue until only one player remains or set a time limit for rounds.',
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Splat",
          content:
            "Gather in a circle with a gamemaster in the center. The gamemaster points to someone at random and shouts ‘splat!’. This player ducks and the people on either side of them points at each other and shouts 'splat!'. The last person to shout ‘splat!’ is out. When there are two players remaining, they stand back to back and walk away from each other. When the leader shouts ‘splat!’, the last two players turn and shout ‘splat!’ at each other. The first to shout is the winner.",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Thumper",
          content:
            "Gather in a circle. Select a hand gesture each in of the same theme (eg. Animals, Occupations, Emotions) and memorise them. Everyone to start a steady rhythm and carry out their gesture followed by someone else's. The next person will then pass it on. No passbacks allowed! ",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Thumper (Speaking!)",
          content:
            "Gather in a circle. Select a call sign each in of the same theme (eg. Animals, Occupations, Emotions) and memorise them. Everyone to start a steady rhythm of beeps with their voices, then call using their callsign followed by someone else's. The next person will then pass it on. No passbacks allowed! ",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Pass the clap",
          content:
            "Pass applause around the circle! To play, players should gather in a circle and the leader will start the clap. Other players take turns clapping in a clockwise direction until the leader makes the final clap.\n\nThere are some other variations, too. For example, the players can start the clap slowly and then gradually increase the tempo over rounds.",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Medusa",
          content:
            "Sit in a circle and put your heads down. On a count of 3 everyone sits up and looks at someone else. If you make eye contact, you are out. If the other person is not looking, you are safe. Repeat until everyone is out.",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Mr. Freeze",
          content:
            "Pick one player to be Mr. Freeze. Have everyone playing the game move around during your visit. When Mr. Freeze freezes, everyone else must freeze too. Whoever freezes last is out. Repeat for the duration of your visit.",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Stop And Walk",
          content:
            'Explain "walk" as moving and "stop" as freezing. Repeat these commands until participants understand them. Reverse the commands, so "walk" now means "stop," and "stop" means "walk." \n\nReinforce this switch until everyone adapts. Introduce new commands like "jump" (means jump) and "dance" (means dance). Clearly define each command\'s action. Call out commands randomly. \n\nPlayers must react quickly and accurately according to the reversed or added commands. \n\nExperiment with further command swaps (e.g., "jump" for "dance" and vice versa) to add an extra layer of challenge.',
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Walk Stop Mix Up",
          content:
            "Everyone to spread out. When someone says 'walk' everyone should walk around, and 'stop' to stop. Do the commands multiple times, and add the instruction to clap simultaneously but still continue walking. After awhile, reverse the commands for stop and walk. Stop=walk, vice-versa. Clap remains the same. ",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Dance-Freeze",
          content:
            "Prepare danceable music and gather players. When the music begins, players dance energetically.\n\nAs soon as the music stops, participants must freeze in their current dance pose. Anyone who doesn't freeze is out of the game. \n\nContinue playing until only one participant remains as the winner.",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Nim",
          content:
            "For 2 players, ages 8 and older.\n\nArrange the 21 tiny objects in a continuous horizontal line.\nTaking turns, each player picks up 1, 2, or 3 objects at a time. The objective of the game is to not pick up the last object!",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Hide the Bell",
          content:
            "This game needs your ears! Sit in a circle and let one person be in the centre. The others pass two bells behind their backs, not getting caught. After a minute, guess who has the bells. If the guess is correct, swap places and become the new centre person.",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Bird, Beast, or Fish",
          content:
            'The gamemaster points or call out to one of the players and says an animal type ("bird", "beast", "fish"). If the player is unable to name an animal in that category before the leader counts to ten, they\'re out. No repeating! The game continues until only one player remains.',
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Ah Ma's Underwear",
          content:
            'One person is “it”.\n\nThe other players ask "it"  questions, but only thing "it" can say is “my Ah Ma\'s underwear.”\n\nWhen someone makes “it” laugh, they become “it”.\n\nFeel free to come up with new fixed answers each round!',
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Numbers",
          content:
            "Count out loud as a group from one, without anyone saying the same number at the same time, using a predetermined order or gesturing. Anyone can speak at any time, saying any amount of numbers. If two or more people speak at the same time, start again.",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Mission: Lightyear",
          content:
            "Players imagine they've crash-landed on a distant planet with a damaged spaceship, requiring colored props to fix it. Create teams of three, with each member choosing a role: Commander, Pilot, or Engineer.\n\nCommander (can speak but not see)\nPilot (can see but not speak)\nEngineer (can move but not see)\n\nSet up positions:\nCommander stands behind a line with their back to the props.\nPilot stands in front of the Commander, facing the props.\nEngineer is blindfolded and stands on the other side of the line, facing the props away from the Commander and Pilot.\n\nPlayers must collaborate effectively to guide the Engineer to collect props for spaceship repair!",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "HVNGMVN",
          content:
            "Think of something, announce a category associated with it, and have the group think of “yes-or-no questions” to guess what it is.\n\nEach time there is a “no” answer– add another part to the Hangman.\n\nThis is great for people who have a hard time with spelling",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Animal Time ",
          content:
            "The gamemaster shouts out an animal and poses to imitate that animal. Everyone else must follow. The animal form can be adjusted until everyone is able to do it. Keep playing with as many animals as possible. This activity is meant to be slow (like a yoga workout), so put on some relaxing music!",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Mime Time",
          content:
            'Get into groups of 4 to 6. Stand in a line with the last person facing the gamemaster. A phrase ("I love apples") will be said and the message has to be passed to the person in front using their bodies without speaking. \n\n Once "understood", tap on the person in front, repeat till the end. The first in line should say what they thought the phrase was.\n\nThis can be played with a timelimit for each person passing the message.',
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Mime Time with Fingers!",
          content:
            'Get into groups of 4 to 6. Stand in a line with the last person facing the gamemaster. A phrase ("I love apples") will be said and the message has to be passed to the person in front with only their fingers and without speaking. \n\nOnce "understood", tap on the person in front, repeat till the end. The first in line should say what they thought the phrase was.\n\nThis can be played with a timelimit for each person passing the message.',
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Exquisite Corpse",
          content:
            "Each person whispers a word to the game master. The game master will add to a composition in sequence by following a rule (the sequence in which people spoke, alphabetical order of the words, etc) without showing the group.\n\nOnce all the words have been collected, reveal the word and the whole group will act out their composition. This can be through movement or sounds.",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Cooperative Drawing #1",
          content:
            "Each person uses a different colored pen, scribbles (the only rule is no intersecting lines) and passes it to the person on the right who makes a drawing out of it.\nThe drawings can be wild and imaginative - they’re for fun! ",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Cooperative Drawing #2",
          content:
            "Each player has a MARKER of their own color. \nThe first player draws any detail of the final picture so that the other players can't guess what is drawn.\nThe sheet is passed to the next player to add to the drawing and so on.. At the end, the first player tells everyone what they intended to draw.",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Mouse - A table top drawing game",
          content:
            "The aim of the game is to be the first to complete a Mouse. Each roll of the die enables a particular body part to be drawn as follows:\n\n6 = body\n5 =nose\n4 = whiskers\n3 = eyes\n2 – ears\n1 = tail\n\nThe body must be drawn before the other body parts are added to it, so players must therefore roll a 6 to start. After that, the other parts of the mouse may be added in order.\n\nIf you roll a number which relates to a part you have already added, you miss your go and pass the die on. Or keep adding parts to get a frankenmouse at the end!",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Finger Zero Game",
          content:
            "Everyone starts with two thumbs up. Each person will call out a number starting from zero. The rest can either raise or rest their thumbs. If the number called out corresponds to the number of thumbs raised, the player will place one hand down. The aim is to clear both of your hands.",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Aim for the Line",
          content:
            "Each player gets ready one item of their own as a group - either their personal shoe or paper aeroplane -  at a starting line. Make a zone or a line the target. The individual who gets their item closest to the line wins. If the item goes beyond the line, the person is out. ",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Conducted Story",
          content:
            'Gather in a circle. The first player starts the story ("Mike went to the supermarket because..."), and the second player continues ("He needed some eggs to..."). The story continues until it reaches the last person or goes around the circle a few times, depending on the group size. The goal is to create a story, one phrasee at a time. ',
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Dog and Bone",
          content:
            "Form two teams, standing at opposite ends of the court. Place an item in the center. Players will number off from 1 to the last person. The game master will sign a number - for example, 3 fingers for 3, and the 3 of each group will have to snatch the item from the center. The team with the most number of items wins.\n\nGame can be played without hearing by assigning an flashing a colour or number.\n\nCareful! The game can get stimulating and vigorous!",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Blow Wind Blow",
          content:
            "Form two teams, standing at opposite ends of the court. Place an item in the center. Game master can call out objects on the players - for example, individuals who are wearing spectacles today, individual with socks, etc. The team with the most number of items wins.\n\nCareful! The game can get stimulating and vigorous!",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Gimme 5",
          content:
            "Each person gives themselves an animal name, and try to remember everyone else's. Gather in a circle with some distance apart and put your hand up. One player stands inside the circle and calls out the animal of one of the people in the group. Upon hearing their animal, that player needs to call out the name of someone at least two people away. No call backs! \n\nThe player in the center tries to high five the person whose name was called before they can call another name. If they get high-fived, they go to the middle of the circle.\n\nCircle can get smaller and smaller to make it more challenging.\n\nCareful! The game can get stimulating and vigorous!",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Follow Me",
          content:
            "Get into pairs. The first pair will carry out an action. The next pair must memorize and repeat that action, before performing their own action. The game goes on until one pair can't remember the action of those in front.",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Follow Me (Arms only!)",
          content:
            "This is an arms-only version! Get into pairs. The first pair will carry out an action gesturing with their hands. The next pair must memorize and repeat that action, before performing their own action. The game goes on until one pair can't remember the action of those in front.",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Magic Stick",
          content:
            "Stand in two lines facing each other, with everyone's arms raised up and index fingers extended. Lay a stick across everyone's fingers. Lower the stick to the ground without anyone's fingers losing contact with the stick. If it slips, start from the beginning.\n\nThis can be done as a sensory game, with everyone closing their eyes.",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Park Bench",
          content:
            "Pick one player to sit on the bleachers. They can read the newspaper, or watch the clouds, etc. but must remain seated on the bench at all times. A second player will be a pedestrian who will try to get the park bench occupant to laugh or leave the bench. They are not allowed any physical contact.\n\nIf the park bench occupant laughs or leaves the bench, the pedestrian takes their place and the game repeats.",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Graveyard",
          content:
            "The gamemaster selects one player to be a gravekeeper, and they stand off to the side. The other students lie on their backs on the ground with their eyes open. They must stay completely still, with a straight face. The gravekeeper’s job is to go around and try to make each person laugh or speak using only acting. They are not allowed to touch the person on the ground. Anyone they succeed at making laugh is alive again and joins the gravekeeper in going around and trying to make the other students laugh or speak.",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Balloon World Cup ",
          content:
            "A balloon has to be bounced and kept off the floor. \n\nIf a player fails to stop the ball from touching the ground, everyone else gains a point. Matches last between 2 - 5 minutes.\n\nIf players are tied when time runs out, they go into overtime and must use only their head and feet to bounce the balloon.\n\nCareful! The game can get stimulating and vigorous!",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Hackeysack",
          content:
            "Players will throw and pass a hackeysack amongst each other with any body part except their hands. ",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Make a Shape Together",
          content:
            "Make a shape, together! \n\nGamemaster can offer some guidelines to ease or increase challenge. (eg. let's make a shape where you lead from your ear, make a shape that is lighter/fluid/rigid etc.)",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Word Association",
          content:
            "Participants take turns saying a word that is associated with the previously mentioned word. This game can be endless and lead to interesting word connections.",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Categories",
          content:
            "Choose a category (e.g., animals, countries, foods), and participants take turns naming items that fit into that category. The goal is to keep the list going without repeating or running out of ideas.",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Never Have I Ever",
          content:
            "Participants take turns saying things they have never done, and others who have done that thing raise their hands. Player will lose once all 5 fingers are down.  ",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Word Chain",
          content:
            "Participants form a chain of words where the last letter of one word becomes the first letter of the next (e.g., cat - tiger - rabbit).",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Rhyme Time",
          content:
            "Participants take turns whispering words that rhyme with a given word.",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "ABC Storeytelling",
          content:
            "Each player adds a sentence to a collaborative story, with each sentence starting with the next letter of the alphabet. Letter repeats to A after Z",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Word Ladder",
          content:
            "Players start with one word and try to transform it into another word by changing one letter at a time, creating a chain of real words along the way.",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Silent Sorting",
          content:
            "Give each person a number. Without talking, making sounds to indicate your number or using your fingers, arrange themselves in order. - Birthday, height, age.",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Emotion in Motion",
          content:
            'Sit in a circle. Gamemaster choose an emotion and players should try to reflect that on their face and pass around. Next, give a phrase and pass their reaction around using their face - "We are having broccoli for dinner"',
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Rain",
          content:
            "Get seated in a circle. The gamemaster starts the exercise and each person join in when they hear the sound the person to the left is making. Starts rubbing palms together. The continues until the sound comes back to the leader who then changes the sound (Snap fingers, slap thighs). Like that of a rainstorm",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Wink Thief",
          content:
            "Get into a circle. Select 2 theives on random and 2 detectives. Theives try to elimate as many players a possible by winking while detectives try to catch the murderers before getting stolen. ",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Quiet Statues",
          content:
            "Quiety whisper what statue we want the other group to become. (Moneky, elephant, policeman). At the count of three, freeze into their statue and pick the best statue. The best statue gets to decide what the next group will pose as. ",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Same Same",
          content:
            "The gamemaster faces the row of players and call out a noun - snake, heart. On a count of 3, the rest  who are in a row will carry out their action of their choice. Everyone should aim to pose the same action without communicating. Aim to succeed thrice. ",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Morph the Movement",
          content:
            "Everyone stands in a circle, ensuring that everyone can see each other. A player of your choice (Player #1)  begins by performing a simple, repetitive physical action (eg. digging). The player to their right immediately mimics the action as accurately as possible. This imitation process should be intuitive and spontaneous.\n\nOnce the first player feels satisfied with how the action is being replicated, they stop performing it.Now, the player who imitated the initial action (Player #2) starts to gradually alter and exaggerate the movement, allowing it to evolve naturally into a new action (eg. digging to throwing).When Player #2's new action is clear and distinct, the person to their right (Player #3) replicates it.Continue passing and morphing the movement around the circle until it returns to the starting player.",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "The Machine",
          content:
            "Start with one player making a noise and a simple repeatable gesture. When the player has a rhythm and another student has an idea for a movement which connects to the first gesture, that student joins the first student by making a new noise and movement which connects to the original gesture. Each student joins in with a new noise and gesture and connects to the others in some way. \n\nThe last player pretends to be a salesperson, interprets, name, and make a short pitch on the machine.\n\nA variation of this game is everyone decides on the type of machine, and collective work towards that with each player presenting different parts of it - including mechanical parts like cables! In this version, there is no salesperson.",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "The Sound Machine",
          content:
            "Start with one player making a noise. When the player has a rhythm and another student has an idea for a sound which connects to the first noise, that student joins the first student by making a new noise that connects with the original. Each player joins in with a new noise connects to the others in some way. ",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Affirmation",
          content:
            'Have the entire group stand in a circle while holding hands, looking at the floor. \n\nStart with one student saying a single word. Continue around the circle, with each student adding one word at a time, collaboratively crafting a phrase that sets a challenge for the day\'s work (or reflects on the day\'s accomplishments). When the group feels the phrase is complete, they raise their hands and step into the circle, forming a huddle while shouting "Yes!"\n\nReturn to the circle and start a new phrase where the previous one left off.\n\nExample:\n\nFor the session\'s start: "Today...we...will...listen...and...work...together." ALL: "Yes!"\n\nFor the session\'s end: "I...learned...to...never...turn...my...back...to...the...audience." ALL: "Yes!"',
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Minefield",
          content:
            'Select one player to wear a blindfold. Scatter various objects on the stage floor, designating them as "mines" (e.g., a book, crumpled paper, backpack, eraser).\n\nPlace the blindfolded player at one end of the court. The group guides the blindfolded player across the stage using precise stage directions. Each student provides one instruction, such as "Take two small steps forward" or "Move four large steps right."\n\nThe blindfolded player must avoid touching the "mines." If they touch one, it "explodes," and their turn ends. After a turn, choose another player to be blindfolded, and the class re-scatters the stage for a new round.',
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Emotion Party",
          content:
            "Each player selects an emotion to portray. One player becomes the host and stands in the center, acting out their chosen emotion to set up for a party. Another player knocks and enters, embodying their chosen emotion. The first player adapts to the second player's emotion, guessing it. \n\nMore players knock and join with unique emotions, and everyone adapts accordingly.  Players leave one by one, maintaining their respective emotions and order of entry. The game concludes when the host is alone again, acting in their original emotion. \n\nStart without sounds to emphasize non-verbal communication, with the option to introduce sounds later.",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Who am I?",
          content:
            "One person writes a name on a piece of paper and sticks it on another person's forehead. They must ask yes or no questions to figure out who they are. ",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Wizards, Giants, Goblins",
          content:
            "Divide the class into two teams, positioning them on opposite sides of the court. Each team privately selects to be WIZARDS, GIANTS, or GOBLINS.\n\nLine up facing each other, ready for the showdown. The gamemaster counts to 3, and on \"3,\" both teams simultaneously adopt their chosen character's stance and shout their phrases.\n\nGIANTS > WIZARDS, WIZARDS > GOBLINS, and GOBLINS > GIANTS.\n\nThe losing team dashes back to their side while the winners try to tag them. Captured players join the captor's team. Continue until one team dominates.\n\nIt is possible to make it challenging where every action of WIZARDS, GIANTS, GOBLINS cannot be acted before. Groups have to keep coming with new ways to express it. The group that trips up loses for that turn. \n\nCareful! The game can get stimulating and vigorous!",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Gibberish Interpreter",
          content:
            "Explain gibberish as speaking with silly sounds that convey meaning without real words. Warm up with call and response. Speak a gibberish phrase, have players repeat it, and use gestures to convey emotions and styles.\n\nInvite two players to the front. One student speaks in gibberish, and the other translates into English.\n\nProvide a situation or take suggestions from the group (e.g., a walk on Jupiter). The gibberish speaker delivers one line at a time with expressive physicality. The interpreter mimics the gestures and translates the gibberish into English, striving to make it coherent.",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Gibberish Conversation",
          content:
            'Familiarize students with gibberish, using activities like "Gibberish Interpreter."  Choose four players, two as actors and two as interpreters, to be in the front. \n\nActors engage in a scene with a given topic (e.g., "Laundry") using gibberish. Interpreters translate their gibberish lines into English for the audience.\n\nActors continue the dialogue in gibberish, and interpreters keep translating.',
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Yes, Let’s!",
          content:
            'Have all players spread out in the court. One student calls out an activity for everyone to mime, such as "Let\'s start jogging in place!". \n\nThe rest of the group responds with a spirited "Yes, let\'s!" and immediately joins in the suggested activity. Encourage each player to offer only one suggestion until they sense that everyone has had a chance to participate.\n\nAlternatively, form a circle and allow each student to take turns suggesting activities.',
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Exaggeration Circle",
          content:
            "Arrange players in a circle. One player starts with a small gesture or movement. The next player takes it over and exaggerates the movement, making it bigger. This continues around the circle. The process continues until the last person amplifies the gesture to the extreme. After a few rounds with just movements, allow players to add sounds that complement their exaggerated actions.\n\nEmphasize retaining the essence of the original gesture in their exaggerations.",
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Alphabet game",
          content:
            'Gather players in a circle. Select a category, like animals, food, or countries. Start with a letter (e.g., "A") and have players take turns suggesting words from the chosen category that begin with that letter. Move through the alphabet, with each person contributing a word for the next letter in order (e.g., "A," "B," "C," etc.).\n\nOptionally, set a time limit for responses to keep the game lively. Players aim to come up with words for each letter without hesitation or repeating words.',
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: "Tableau Olympics",
          content:
            'Divide the group into teams of four to six people and have each team choose a spot around the court. The gamemaster calls out a scene (such as "Spiderman at the scene of a bank robbery" or "a birthday party gone wrong") and then counts down from 10. Teams have 10 seconds to organize a tableau and then freeze. The teacher then goes around and views each tableau before choosing a winner for that round. The winning team receives a point. Every student from the team must participate in the tableau or the team will be disqualified from the round.\n\nRemind the students about the using facial expressions at the start of the game.',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],

      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("tags", null, {});
  },
};
