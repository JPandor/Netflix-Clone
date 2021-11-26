let movie = new Vue ({
    el: "#app",
    data :{
        movieList: [{
            name: "The Avengers",
            description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
            image: "../images/movies/avengers.jpg",
            comingSoon: 0,
            actors: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson", "Mark Ruffalo", "Jeremy Renner"],
            director: "Joss Whedon"
        },
        {
            name: "Avengers: Age of Ultron",
            description:"When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
            image: "../images/movies/avengers-age-of-ultron.jpg",
            comingSoon: 0,
            actors: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson", "Mark Ruffalo", "Jeremy Renner"],
            director: "Joss Whedon"
        },
        {
            name: "Avengers: Infinity War",
            description: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
            image: "../images/movies/avengers-infinity-war.jpg",
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
            image: "../images/movies/spiderman-nwh.jpg",
            comingSoon: 1,
            actors: ["Tom Holland", "Zendaya", "Benedict Cumberbatch"],
            director: "Jon Watts"
        },
        {
            name: "Zack Snyder's Justice League",
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
            name: "Batman v Superman: Dawn of Justice",
            description: "Fearing that the actions of Superman are left unchecked, Batman takes on the Man of Steel, while the world wrestles with what kind of a hero it really needs.",
            image: "../images/movies/batman-vs-superman.jpg",
            comingSoon: 0,
            actors: ["Henry Cavill", "Amy Adams", "Ben Affleck"],
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
    watchList: []
    },
})