let movie = new Vue({
    el: "#app",
    data: {
        vid: {
            name: "Arcane",
            description: "Set in utopian Piltover and the oppressed underground of Zaun, the story follows the origins of two iconic League champions-and the power that will tear them apart.",
            video: "../video/arcane.mp4",
            fileType: "video/mp4",
            comingSoon: 0,
            actors: ["Hailee Steinfeld", "Jason Spisak", "Kevin Alejandro"]
        },
        popularList: [{
            name: "Hawkeye",
            description: "Series based on the Marvel Comics superhero Hawkeye, centering on the adventures of Young Avenger, Kate M. Bishop, who took on the role after the original Avenger, Clint Barton.",
            image: "../images/movies/hawkeye.jpg",
            comingSoon: 0,
            actors: ["Jeremy Renner", "Hailee Steinfeld", "Florence Pugh"],
            director: ""
        },
        {
            name: "Red Notice",
            description: "An Interpol agent tracks the world's most wanted art thief.",
            image: "../images/movies/red-notice.jpg",
            comingSoon: 0,
            actors: ["Dwayne Johnson", "Ryan Reynolds", "Gal Gadot"],
            director: "Rawson Marshall Thurber"
        },
        {
            name: "Shang-Chi and the Legend of the Ten Rings",
            description: "Shang-Chi, the master of weaponry-based Kung Fu, is forced to confront his past after being drawn into the Ten Rings organization.",
            image: "../images/movies/shangchi.jpg",
            comingSoon: 0,
            actors: ["Simu Liu", "Awkwafina", "Tony Chiu-Wai Leung"],
            director: "Destin Daniel Cretton"
        },
        {
            name: "Venom: Let There Be Carnage",
            description: "Eddie Brock attempts to reignite his career by interviewing serial killer Cletus Kasady, who becomes the host of the symbiote Carnage and escapes prison after a failed execution.",
            image: "../images/movies/venom.jpg",
            comingSoon: 0,
            actors: ["Tom Hardy", "Woody Harrelson", "Michelle Williams"],
            director: "Andy Serkis"
        },
        {
            name: "Black Widow",
            description: "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.",
            image: "../images/movies/black-widow.jpg",
            comingSoon: 0,
            actors: ["Scarlett Johansson", "Florence Pugh", "David Harbour", "Rachel Weisz"],
            director: "Cate Shortland"
        },
        {
            name: "Dune",
            description: "Feature adaptation of Frank Herbert's science fiction novel, about the son of a noble family entrusted with the protection of the most valuable asset and most vital element in the galaxy.",
            image: "../images/movies/dune.jpg",
            comingSoon: 0,
            actors: ["Timothee Chalamet", "Rebecca Furguson", "Zendaya"],
            director: "Denis Villeneuve"
        },
        {
            name: "Spencer",
            description: "During her Christmas holidays with the royal family at the Sandringham estate in Norfolk, England, Diana Spencer, struggling with mental health problems, decides to end her decade-long marriage to Prince Charles.",
            image: "../images/movies/spencer.jpg",
            comingSoon: 0,
            actors: ["Kristen Stewert", "Timothy Spall", "Jack Nielen"],
            director: "Pablo Larrain"
        },
        {
            name: "The Matrix Resurrections",
            description: "The plot is currently unknown.",
            image: "../images/movies/matrix-resurrection.jpg",
            comingSoon: 1,
            actors: ["Christina Ricci", "Keanu Reeves", "Jessica Henwick"],
            director: "Lana Wachowski"
        },
        {
            name: "Squid Game",
            description: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits with deadly high stakes. A survival game that has a whopping 45.6 billion-won prize at stake.",
            image: "../images/movies/squid-game.jpg",
            comingSoon: 0,
            actors: ["Lee Jung-jae", "Park Hae-soo", "Wi Ha-joon"],
            director : ""
        },
        {
            name: "A Boy Called Christmas",
            description: "In this origin story of Father Christmas, an ordinary boy (with a loyal pet mouse and a reindeer at his side) sets out on an extraordinary adventure to find his father who is on a quest to discover the fabled village of Elfhelm.",
            image: "../images/movies/boy-called-christmas.jpg",
            comingSoon: 0,
            actors: ["Maggie Smith", "Isabella O'Sullivan", "Joel Fry"],
            director: "Gil Kenan"
        }],

        comedyList: [{
            name: "Jungle Cruise",
            description: "Based on Disneyland's theme park ride where a small riverboat takes a group of travelers through a jungle filled with dangerous animals and reptiles but with a supernatural element.",
            image: "../images/movies/jungle-cruise.jpg",
            comingSoon: 0,
            actors: ["Dwayne Johnson", "Emily Blunt", "Edgar Ramirez"],
            director: "Jaume Collet-Serra"
        },
        {
            name: "The Hangover",
            description: "Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing. They make their way around the city in order to find their friend before his wedding.",
            image: "../images/movies/hangover.jpg",
            comingSoon: 0,
            actors: ["Zach Galifianakis", "Bradley Cooper", "Justin Bartha"],
            director: "Todd Phillips"
        },
        {
            name: "Knocked Up",
            description: "For fun-loving party animal Ben Stone, the last thing he ever expected was for his one-night stand to show up on his doorstep eight weeks later to tell him she's pregnant with his child.",
            image: "../images/movies/knocked-up.jpg",
            comingSoon: 0,
            actors: ["Seth Rogen", "Katherine Heigl", "Paul Rudd"],
            director: "Judd Apatow"
        },
        {
            name: "Jumanji: Welcome to the Jungle",
            description: "Four teenagers are sucked into a magical video game, and the only way they can escape is to work together to finish the game.",
            image: "../images/movies/jumanji.jpg",
            comingSoon: 0,
            actors: ["Dwayne Johnson", "Karen Gillan", "Kevin Hart", "Jack Black"],
            director: "Jake Kasdan"
        },
        {
            name: "Jumanji: The Next Level",
            description: "In Jumanji: The Next Level, the gang is back but the game has changed. As they return to rescue one of their own, the players will have to brave parts unknown from arid deserts to snowy mountains, to escape the world's most dangerous game.",
            image: "../images/movies/jumanji-next-level.jpg",
            comingSoon: 0,
            actors: ["Dwayne Johnson", "Karen Gillan", "Kevin Hart", "Jack Black"],
            director: "Jake Kasdan"
        },
        {
            name: "Bridesmaids",
            description: "Competition between the maid of honor and a bridesmaid, over who is the bride's best friend, threatens to upend the life of an out-of-work pastry chef.",
            image: "../images/movies/bridesmaids.jpg",
            comingSoon: 0,
            actors: ["Kristen Wiig", "Maya Rudolph", "Rose Byrne"],
            director: "Paul Feig"
        },
        {
            name: "Vacation Friends",
            description: "A couple meets up with another couple while on vacation in Mexico, but their friendship takes an awkward turn when they get back home.",
            image: "../images/movies/vacation-friends.jpg",
            comingSoon: 0,
            actors: ["Lil Rel Howery", "Yvonne Orji", "John Cena"],
            director: "Clay Tarver"
        },
        {
            name: "Tag",
            description: "A small group of former classmates organize an elaborate, annual game of tag that requires some to travel all over the country.",
            image: "../images/movies/tag.jpg",
            comingSoon: 0,
            actors: ["Jeremy Renner", "Ed Helms", "Jake Johnson"],
            director: "Jeff Tomsic"
        },
        {
            name: "Free Guy",
            description: "A small group of former classmates organize an elaborate, annual game of tag that requires some to travel all over the country.",
            image: "../images/movies/free-guy.jpg",
            comingSoon: 0,
            actors: ["Ryan Reynolds", "Jodie Comer", "Taika Waititi"],
            director: "Shawn Levy"
        },
        {
            name: "Ghostbusters: Afterlife",
            description: "When a single mom and her two kids arrive in a small town, they begin to discover their connection to the original Ghostbusters and the secret legacy their grandfather left behind.",
            image: "../images/movies/ghostbusters.jpg",
            comingSoon: 0,
            actors: ["Carrie Coon", "Paul Rudd", "Finn Wolfhard"],
            director: "Jason Reitman"
        }],

        actionList: [
            {
                name: "The Batman",
                description: "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
                image: "../images/movies/the-batman.jpg",
                comingSoon: 1,
                actors: ["Robert Pattinson", "Peter Sarsgaard", "Barry Keoghan"],
                director: "Matt Reeves"
            },
            {
                name: "The Avengers",
                description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
                image: "../images/movies/avengers.jpg",
                comingSoon: 0,
                actors: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson", "Mark Ruffalo", "Jeremy Renner"],
                director: "Joss Whedon"
            },
            {
                name: "Avengers: Age of Ultron",
                description: "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
                image: "../images/movies/avengers-aou.jpg",
                comingSoon: 0,
                actors: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson", "Mark Ruffalo", "Jeremy Renner"],
                director: "Joss Whedon"
            },
            {
                name: "Avengers: Infinity War",
                description: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
                image: "../images/movies/avengers-iw.jpg",
                comingSoon: 0,
                actors: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson", "Mark Ruffalo", "Jeremy Renner"],
                director: ["Joe Russo", "Anthony Russo"]
            },
            {
                name: "Avengers: Endgame",
                description: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
                image: "../images/movies/avengers-endgame.jpg",
                comingSoon: 0,
                actors: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson", "Mark Ruffalo", "Jeremy Renner"],
                director: ["Joe Russo", "Anthony Russo"]
            },
            {
                name: "Spider-Man: No Way Home",
                description: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
                image: "../images/movies/spider-man-no-way-home.jpg",
                comingSoon: 1,
                actors: ["Tom Holland", "Zendaya", "Benedict Cumberbatch"],
                director: "Jon Watts"
            },
            {
                name: "Justice League",
                description: "Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.",
                image: "../images/movies/justice-league.jpg",
                comingSoon: 0,
                actors: ["Henry Cavill", "Ben Affleck", "Gal Gadot", "Ray Fisher", "Jason Momoa", "Ezra Miller"],
                director: "Zack Snyder"
            },
            {
                name: "Man of Steel",
                description: "An alien child is evacuated from his dying world and sent to Earth to live among humans. His peace is threatened, when other survivors of his home planet invade Earth.",
                image: "../images/movies/man-of-steel.jpg",
                comingSoon: 0,
                actors: ["Henry Cavill", "Amy Adams", "Michael Shannon"],
                director: "Zack Snyder"
            },
            {
                name: "Shazam!",
                description: "A newly fostered young boy in search of his mother instead finds unexpected super powers and soon gains a powerful enemy.",
                image: "../images/movies/shazam.jpg",
                comingSoon: 0,
                actors: ["Zachary Levi", "Mark Strong", "Asher Angel"],
                director: "David F. Sandberg"
            },
            {
                name: "Aquaman",
                description: "Arthur Curry, the human-born heir to the underwater kingdom of Atlantis, goes on a quest to prevent a war between the worlds of ocean and land.",
                image: "../images/movies/aquaman.jpg",
                comingSoon: 0,
                actors: ["Jason Momoa", "Amber Heard", "Willem Dafoe"],
                director: "James Wan"
            }
        ],

        kidList: [{
            name: "Madagascar",
            description: "A group of animals who have spent all their life in a New York zoo end up in the jungles of Madagascar, and must adjust to living in the wild.",
            image: "../images/movies/madagascar.jpg",
            comingSoon: 0,
            actors: ["Chris Rock", "Ben Stiller", "David Schwimmer"],
            director: ["Eric Darnell", "Tom McGrath"]
        },
        {
            name: "Madagascar: Escape 2 Africa",
            description: "The Madagascar animals fly back to New York City, but crash-land on an African nature reserve, where they meet others of their own kind, and Alex especially discovers his royal heritage as prince of a lion pride.",
            image: "../images/movies/madagascar-two.jpg",
            comingSoon: 0,
            actors: ["Chris Rock", "Ben Stiller", "David Schwimmer"],
            director: ["Eric Darnell", "Tom McGrath"]
        },
        {
            name: "Madagascar 3: Europe's Most Wanted",
            description: "The Madagascar animals join a struggling European circus to get back to New York, but find themselves being pursued by a psychotic animal control officer.",
            image: "../images/movies/madagascar-three.jpg",
            comingSoon: 0,
            actors: ["Jada Pinkett Smith", "Ben Stiller", "David Schwimmer"],
            director: ["Eric Darnell", "Tom McGrath"]
        },
        {
            name: "DC League of Super-Pets",
            description: "Superman's dog teams up with a flying cat to stop crime while Superman is on vacation.",
            image: "../images/movies/superpets.jpg",
            comingSoon: 1,
            actors: ["Dwayne Johnson", "Kate McKinnon", "Kevin Hart",],
            director: ["Jared Stern", "Sam Levine"]
        },
        {
            name: "Trolls",
            description: "After the Bergens invade Troll Village, Poppy, the happiest Troll ever born, and the curmudgeonly Branch set off on a journey to rescue her friends.",
            image: "../images/movies/trolls.jpg",
            comingSoon: 0,
            actors: ["Anna Kendrick", "Justin Timberlake", "Zooey Deschanel"],
            director: ["Mike Mitchell", "Walt Dohrn"]
        },
        {
            name: "Turning Red",
            description: "A 13-year-old girl named Mei Lee turns into a giant red panda whenever she gets too excited.",
            image: "../images/movies/turning-red.jpg",
            comingSoon: 1,
            actors: ["Rosalie Chiang", "Sandra Oh", "James Hong"],
            director: "Domee Shi"
        },
        {
            name: "Cars",
            description: "A hot-shot race-car named Lightning McQueen gets waylaid in Radiator Springs, where he finds the true meaning of friendship and family.",
            image: "../images/movies/cars.jpg",
            comingSoon: 0,
            actors: ["Owen Wilson", "Bonnie Hunt", "Paul Newman"],
            director: ["John Lasseter", "Joe Ranft"]
        },
        {
            name: "Cars 2",
            description: "Star race car Lightning McQueen and his pal Mater head overseas to compete in the World Grand Prix race. But the road to the championship becomes rocky as Mater gets caught up in an intriguing adventure of his own: international espionage.",
            image: "../images/movies/cars-two.jpg",
            comingSoon: 0,
            actors: ["Owen Wilson", "Larry the Cable Guy", "Michael Caine"],
            director: ["John Lasseter", "Bradford Lewis"]
        },
        {
            name: "Cars 3",
            description: "Lightning McQueen sets out to prove to a new generation of racers that he's still the best race car in the world.",
            image: "../images/movies/cars-three.jpg",
            comingSoon: 0,
            actors: ["Owen Wilson", "Cristela Alonzo", "Chris Cooper"],
            director: "Brian Fee"
        },
        {
            name: "Avatar: The Last Airbender",
            description: "In a war-torn world of elemental magic, a young boy reawakens to undertake a dangerous mystic quest to fulfill his destiny as the Avatar, and bring peace to the world.",
            image: "../images/movies/avatar.jpg",
            comingSoon: 0,
            actors: ["Dee Bradley Baker", "Zach Tyler Eisen", "Mae Whitman"],
            director: ""
        }],
        watchList: []
    },
    
})