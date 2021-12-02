let movie = new Vue({
    el: "#app",
    data: {
        // movie data (ends on line 383)
        vid: {
            name: "Arcane",
            description: "Set in utopian Piltover and the oppressed underground of Zaun, the story follows the origins of two iconic League champions-and the power that will tear them apart.",
            video: "video/arcane-trailer.mp4",
            fileType: "video/mp4",
            comingSoon: 0,
            actors: "Hailee Steinfeld, Jason Spisak and Kevin Alejandro"
        },
        popularList: [{
            name: "Hawkeye",
            description: "Series based on the Marvel Comics superhero Hawkeye, centering on the adventures of Young Avenger, Kate M. Bishop, who took on the role after the original Avenger, Clint Barton.",
            image: "images/movies/hawkeye.jpg",
            comingSoon: 1,
            date: new Date(2021, 11, 8),
            actors: "Jeremy Renner, Hailee Steinfeld and Florence Pugh",
            director: "",
            hover: false
        },
        {
            name: "Red Notice",
            description: "An Interpol agent tracks the world's most wanted art thief.",
            image: "images/movies/red-notice.jpg",
            comingSoon: 0,
            actors: "Dwayne Johnson, Ryan Reynolds and Gal Gadot",
            director: "Rawson Marshall Thurber",
            hover: false
        },
        {
            name: "Shang-Chi and the Legend of the Ten Rings",
            description: "Shang-Chi, the master of weaponry-based Kung Fu, is forced to confront his past after being drawn into the Ten Rings organization.",
            image: "images/movies/shangchi.jpg",
            comingSoon: 0,
            actors: "Simu Liu, Awkwafina and Tony Chiu-Wai Leung",
            director: "Destin Daniel Cretton",
            hover: false
        },
        {
            name: "Venom: Let There Be Carnage",
            description: "Eddie Brock attempts to reignite his career by interviewing serial killer Cletus Kasady, who becomes the host of the symbiote Carnage and escapes prison after a failed execution.",
            image: "images/movies/venom.jpg",
            comingSoon: 0,
            actors: "Tom Hardy, Woody Harrelson and Michelle Williams",
            director: "Andy Serkis",
            hover: false
        },
        {
            name: "Black Widow",
            description: "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.",
            image: "images/movies/black-widow.jpg",
            comingSoon: 0,
            actors: "Scarlett Johansson, Florence Pugh, David Harbour and Rachel Weisz",
            director: "Cate Shortland",
            hover: false
        },
        {
            name: "Dune",
            description: "Feature adaptation of Frank Herbert's science fiction novel, about the son of a noble family entrusted with the protection of the most valuable asset and most vital element in the galaxy.",
            image: "images/movies/dune.jpg",
            comingSoon: 0,
            actors: "Timothee Chalamet, Rebecca Furguson and Zendaya",
            director: "Denis Villeneuve",
            hover: false
        },
        {
            name: "Spencer",
            description: "During her Christmas holidays with the royal family at the Sandringham estate in Norfolk, England, Diana Spencer, struggling with mental health problems, decides to end her decade-long marriage to Prince Charles.",
            image: "images/movies/spencer.jpg",
            comingSoon: 0,
            actors: "Kristen Stewert, Timothy Spall and Jack Nielen",
            director: "Pablo Larrain",
            hover: false
        },
        {
            name: "The Matrix Resurrections",
            description: "The plot is currently unknown.",
            image: "images/movies/matrix-resurrection.jpg",
            comingSoon: 1,
            date: new Date(2021, 11, 22),
            actors: "Christina Ricci, Keanu Reeves and Jessica Henwick",
            director: "Lana Wachowski",
            hover: false
        },
        {
            name: "Squid Game",
            description: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits with deadly high stakes. A survival game that has a whopping 45.6 billion-won prize at stake.",
            image: "images/movies/squid-game.jpg",
            comingSoon: 0,
            actors: "Lee Jung-jae, Park Hae-soo and Wi Ha-joon",
            director: "",
            hover: false
        },
        {
            name: "A Boy Called Christmas",
            description: "In this origin story of Father Christmas, an ordinary boy (with a loyal pet mouse and a reindeer at his side) sets out on an extraordinary adventure to find his father who is on a quest to discover the fabled village of Elfhelm.",
            image: "images/movies/boy-called-christmas.jpg",
            comingSoon: 0,
            actors: "Maggie Smith, Isabella O'Sullivan and Joel Fry",
            director: "Gil Kenan",
            hover: false
        }],

        comedyList: [{
            name: "Jungle Cruise",
            description: "Based on Disneyland's theme park ride where a small riverboat takes a group of travelers through a jungle filled with dangerous animals and reptiles but with a supernatural element.",
            image: "images/movies/jungle-cruise.jpg",
            comingSoon: 0,
            actors: "Dwayne Johnson, Emily Blunt and Edgar Ramirez",
            director: "Jaume Collet-Serra",
            hover: false
        },
        {
            name: "The Hangover",
            description: "Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing. They make their way around the city in order to find their friend before his wedding.",
            image: "images/movies/hangover.jpg",
            comingSoon: 0,
            actors: "Zach Galifianakis, Bradley Cooper and Justin Bartha",
            director: "Todd Phillips",
            hover: false
        },
        {
            name: "Knocked Up",
            description: "For fun-loving party animal Ben Stone, the last thing he ever expected was for his one-night stand to show up on his doorstep eight weeks later to tell him she's pregnant with his child.",
            image: "images/movies/knocked-up.jpg",
            comingSoon: 0,
            actors: "Seth Rogen, Katherine Heigl and Paul Rudd",
            director: "Judd Apatow",
            hover: false
        },
        {
            name: "Jumanji: Welcome to the Jungle",
            description: "Four teenagers are sucked into a magical video game, and the only way they can escape is to work together to finish the game.",
            image: "images/movies/jumanji.jpg",
            comingSoon: 0,
            actors: "Dwayne Johnson, Karen Gillan, Kevin Hart and Jack Black",
            director: "Jake Kasdan",
            hover: false
        },
        {
            name: "Jumanji: The Next Level",
            description: "In Jumanji: The Next Level, the gang is back but the game has changed. As they return to rescue one of their own, the players will have to brave parts unknown from arid deserts to snowy mountains, to escape the world's most dangerous game.",
            image: "images/movies/jumanji-next-level.jpg",
            comingSoon: 0,
            actors: "Dwayne Johnson, Karen Gillan, Kevin Hart and Jack Black",
            director: "Jake Kasdan",
            hover: false
        },
        {
            name: "Bridesmaids",
            description: "Competition between the maid of honor and a bridesmaid, over who is the bride's best friend, threatens to upend the life of an out-of-work pastry chef.",
            image: "images/movies/bridesmaids.jpg",
            comingSoon: 0,
            actors: "Kristen Wiig, Maya Rudolph and Rose Byrne",
            director: "Paul Feig",
            hover: false
        },
        {
            name: "Vacation Friends",
            description: "A couple meets up with another couple while on vacation in Mexico, but their friendship takes an awkward turn when they get back home.",
            image: "images/movies/vacation-friends.jpg",
            comingSoon: 0,
            actors: "Lil Rel Howery, Yvonne Orji and John Cena",
            director: "Clay Tarver",
            hover: false
        },
        {
            name: "Tag",
            description: "A small group of former classmates organize an elaborate, annual game of tag that requires some to travel all over the country.",
            image: "images/movies/tag.jpg",
            comingSoon: 0,
            actors: "Jeremy Renner, Ed Helms and Jake Johnson",
            director: "Jeff Tomsic",
            hover: false
        },
        {
            name: "Free Guy",
            description: "A small group of former classmates organize an elaborate, annual game of tag that requires some to travel all over the country.",
            image: "images/movies/free-guy.jpg",
            comingSoon: 0,
            actors: "Ryan Reynolds, Jodie Comer and Taika Waititi",
            director: "Shawn Levy",
            hover: false
        },
        {
            name: "Ghostbusters: Afterlife",
            description: "When a single mom and her two kids arrive in a small town, they begin to discover their connection to the original Ghostbusters and the secret legacy their grandfather left behind.",
            image: "images/movies/ghostbusters.jpg",
            comingSoon: 0,
            actors: "Carrie Coon, Paul Rudd and Finn Wolfhard",
            director: "Jason Reitman",
            hover: false
        }],

        actionList: [
            {
                name: "The Batman",
                description: "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
                image: "images/movies/the-batman.jpg",
                comingSoon: 1,
                date: new Date(2022, 2, 4),
                actors: "Robert Pattinson, Peter Sarsgaard and Barry Keoghan",
                director: "Matt Reeves",
                hover: false
            },
            {
                name: "The Avengers",
                description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
                image: "images/movies/avengers.jpg",
                comingSoon: 0,
                actors: "Robert Downey Jr., Chris Evans, Scarlett Johansson, Mark Ruffalo and Jeremy Renner",
                director: "Joss Whedon",
                hover: false
            },
            {
                name: "Avengers: Age of Ultron",
                description: "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
                image: "images/movies/avengers-aou.jpg",
                comingSoon: 0,
                actors: "Robert Downey Jr., Chris Evans, Scarlett Johansson, Mark Ruffalo and Jeremy Renner",
                director: "Joss Whedon",
                hover: false
            },
            {
                name: "Avengers: Infinity War",
                description: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
                image: "images/movies/avengers-iw.jpg",
                comingSoon: 0,
                actors: "Robert Downey Jr., Chris Evans, Scarlett Johansson, Mark Ruffalo and Jeremy Renner",
                director: "Joe Russo and Anthony Russo",
                hover: false
            },
            {
                name: "Avengers: Endgame",
                description: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
                image: "images/movies/avengers-endgame.jpg",
                comingSoon: 0,
                actors: "Robert Downey Jr., Chris Evans, Scarlett Johansson, Mark Ruffalo and Jeremy Renner",
                director: "Joe Russo and Anthony Russo",
                hover: false
            },
            {
                name: "Spider-Man: No Way Home",
                description: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
                image: "images/movies/spider-man-no-way-home.jpg",
                comingSoon: 1,
                date: new Date(2021, 11, 17),
                actors: "Tom Holland, Zendaya and Benedict Cumberbatch",
                director: "Jon Watts",
                hover: false
            },
            {
                name: "Justice League",
                description: "Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.",
                image: "images/movies/justice-league.jpg",
                comingSoon: 0,
                actors: "Henry Cavill, Ben Affleck, Gal Gadot, Ray Fisher, Jason Momoa and Ezra Miller",
                director: "Zack Snyder",
                hover: false
            },
            {
                name: "Man of Steel",
                description: "An alien child is evacuated from his dying world and sent to Earth to live among humans. His peace is threatened, when other survivors of his home planet invade Earth.",
                image: "images/movies/man-of-steel.jpg",
                comingSoon: 0,
                actors: "Henry Cavill, Amy Adams and Michael Shannon",
                director: "Zack Snyder",
                hover: false
            },
            {
                name: "Shazam!",
                description: "A newly fostered young boy in search of his mother instead finds unexpected super powers and soon gains a powerful enemy.",
                image: "images/movies/shazam.jpg",
                comingSoon: 0,
                actors: "Zachary Levi, Mark Strong and Asher Angel",
                director: "David F. Sandberg",
                hover: false
            },
            {
                name: "Aquaman",
                description: "Arthur Curry, the human-born heir to the underwater kingdom of Atlantis, goes on a quest to prevent a war between the worlds of ocean and land.",
                image: "images/movies/aquaman.jpg",
                comingSoon: 0,
                actors: "Jason Momoa, Amber Heard and Willem Dafoe",
                director: "James Wan",
                hover: false
            }
        ],

        kidList: [{
            name: "Madagascar",
            description: "A group of animals who have spent all their life in a New York zoo end up in the jungles of Madagascar, and must adjust to living in the wild.",
            image: "images/movies/madagascar.jpg",
            comingSoon: 0,
            actors: "Chris Rock, Ben Stiller and David Schwimmer",
            director: "Eric Darnell and Tom McGrath",
            hover: false
        },
        {
            name: "Madagascar: Escape 2 Africa",
            description: "The Madagascar animals fly back to New York City, but crash-land on an African nature reserve, where they meet others of their own kind, and Alex especially discovers his royal heritage as prince of a lion pride.",
            image: "images/movies/madagascar-two.jpg",
            comingSoon: 0,
            actors: "Chris Rock, Ben Stiller and David Schwimmer",
            director: "Eric Darnell and Tom McGrath",
            hover: false
        },
        {
            name: "Madagascar 3: Europe's Most Wanted",
            description: "The Madagascar animals join a struggling European circus to get back to New York, but find themselves being pursued by a psychotic animal control officer.",
            image: "images/movies/madagascar-three.jpg",
            comingSoon: 0,
            actors: "Jada Pinkett Smith, Ben Stiller and David Schwimmer",
            director: "Eric Darnell and Tom McGrath",
            hover: false
        },
        {
            name: "DC League of Super-Pets",
            description: "Superman's dog teams up with a flying cat to stop crime while Superman is on vacation.",
            image: "images/movies/superpets.jpg",
            comingSoon: 1,
            date: new Date(2022, 4, 20),
            actors: "Dwayne Johnson, Kate McKinnon and Kevin Hart",
            director: "Jared Stern and Sam Levine",
            hover: false
        },
        {
            name: "Trolls",
            description: "After the Bergens invade Troll Village, Poppy, the happiest Troll ever born, and the curmudgeonly Branch set off on a journey to rescue her friends.",
            image: "images/movies/trolls.jpg",
            comingSoon: 0,
            actors: "Anna Kendrick, Justin Timberlake and Zooey Deschanel",
            director: "Mike Mitchell and Walt Dohrn",
            hover: false
        },
        {
            name: "Turning Red",
            description: "A 13-year-old girl named Mei Lee turns into a giant red panda whenever she gets too excited.",
            image: "images/movies/turning-red.jpg",
            comingSoon: 1,
            date: new Date(2022, 2, 11),
            actors: "Rosalie Chiang, Sandra Oh and James Hong",
            director: "Domee Shi",
            hover: false
        },
        {
            name: "Cars",
            description: "A hot-shot race-car named Lightning McQueen gets waylaid in Radiator Springs, where he finds the true meaning of friendship and family.",
            image: "images/movies/cars.jpg",
            comingSoon: 0,
            actors: "Owen Wilson, Bonnie Hunt and Paul Newman",
            director: "John Lasseter and Joe Ranft",
            hover: false
        },
        {
            name: "Cars 2",
            description: "Star race car Lightning McQueen and his pal Mater head overseas to compete in the World Grand Prix race. But the road to the championship becomes rocky as Mater gets caught up in an intriguing adventure of his own: international espionage.",
            image: "images/movies/cars-two.jpg",
            comingSoon: 0,
            actors: "Owen Wilson, Larry the Cable Guy and Michael Caine",
            director: "John Lasseter and Bradford Lewis",
            hover: false
        },
        {
            name: "Cars 3",
            description: "Lightning McQueen sets out to prove to a new generation of racers that he's still the best race car in the world.",
            image: "images/movies/cars-three.jpg",
            comingSoon: 0,
            actors: "Owen Wilson, Cristela Alonzo and Chris Cooper",
            director: "Brian Fee",
            hover: false
        },
        {
            name: "Avatar: The Last Airbender",
            description: "In a war-torn world of elemental magic, a young boy reawakens to undertake a dangerous mystic quest to fulfill his destiny as the Avatar, and bring peace to the world.",
            image: "images/movies/avatar.jpg",
            comingSoon: 0,
            actors: "Dee Bradley Baker, Zach Tyler Eisen and Mae Whitman",
            director: "",
            hover: false
        }],
        watchList: [],
        searchKey: ""
    },
    methods: {
        // method to add item to watchlist 
        saveItem: function (movieName, movieDescription, movieImage, movieUpcoming, movieDate, movieActors, movieDirector) {
            //checks if the movie is already on the watchlist
            if (this.watchList.some(m => m.name === movieName)) {
                swal({title: "This is already on your watchlist"})
            }
            
            else {
                //create the movie object
                let myObj = {
                    name: movieName,
                    description: movieDescription,
                    image: movieImage,
                    comingSoon: movieUpcoming,
                    date: movieDate,
                    actors: movieActors,
                    director: movieDirector
                }
                //pushes to watchlist
                this.watchList.push(myObj);
                // adds to local storage
                let jd = JSON.stringify(myObj);
                localStorage.setItem(movieName, jd);
            };
        },

        // deleting items from the watchlist
        removeItem: function (movieName) {
            //gets the index of the movie to be deleted
            const index = this.watchList.map(function (e) { return e.name; }).indexOf(movieName);
            //removes movie from local storage and watchlist 
            if (index > -1) {
                this.watchList.splice(index, 1);
                localStorage.removeItem(movieName);
            }
        },
    },
    computed: {
        //search filter 
        filteredMovies() {
            //creating a new array for the searched movies
            let movieFind = this.popularList.concat(this.actionList, this.comedyList, this.kidList);
            movieFind = movieFind.filter((item) => {
                return item.name.toLowerCase().includes(this.searchKey.toLowerCase()) || item.director.toLowerCase().includes(this.searchKey.toLowerCase()) || item.actors.toLowerCase().includes(this.searchKey.toLowerCase())
            });

            return movieFind;
        }

    },
    mounted() {
        //create an array of local storage keys
        let localArr = [];
        for (let key in localStorage) {
            localArr.push(key);
        };
        //remove the local storage methods that return 
        localArr.splice(-6, 6);

        // get the movies and add it to the watchlist
        for (i = 0; i < localArr.length; i++) {
            let jd = localStorage.getItem(localArr[i]);
            let parseData = JSON.parse(jd);
            this.watchList.push(parseData);
        };

        // create array for upcoming movies
        upcomingMovie = this.popularList.concat(this.actionList, this.comedyList, this.kidList)
        upcomingMovie = upcomingMovie.filter((item) => {
            return item.comingSoon == 1;
        })
        // if data is equal to the upcoming movie date show an alert 
        
        for (i of upcomingMovie) {
            const releaseDate = i.date;
            const today = new Date();
            const alerted = sessionStorage.getItem("alerted") || '';
            if (releaseDate.toDateString() == today.toDateString() && alerted != "yes") {
                swal({
                    title: i.name + " is released today!",
                    button: "Aww Yiss!"
                });
                sessionStorage.setItem("alerted", "yes");
            };
        }
    }
})

