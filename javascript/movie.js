const films = [
  { id: 1,  titre: "The Notebook",                               categorie: "Romance",         region: "USA",     image: "notebook.jpg",          directedBy: "Nick Cassavetes",                producedBy: "Lynn Harris",                              runningTime: "123 min",    starring: "Ryan Gosling, Rachel McAdams" },
  { id: 2,  titre: "Divergent",                                  categorie: "Science Fiction",  region: "USA",     image: "divergent.jpg",         directedBy: "Neil Burger",                    producedBy: "Douglas Wick",                             runningTime: "139 min",    starring: "Shailene Woodley, Theo James" },
  { id: 3,  titre: "Papicha",                                    categorie: "Drama",            region: "Algeria", image: "papicha.jpg",           directedBy: "Mounia Meddour",                 producedBy: "Xavier de Silguy",                         runningTime: "108 min",    starring: "Lyna Khoudri, Shirine Boutella" },
  { id: 4,  titre: "Baby Driver",                                categorie: "Action",           region: "USA",     image: "babydriver.jpg",        directedBy: "Edgar Wright",                   producedBy: "Nira Park",                                runningTime: "113 min",    starring: "Ansel Elgort, Kevin Spacey" },
  { id: 5,  titre: "500 Days of Summer",                         categorie: "Romance",          region: "USA",     image: "500days.jpg",           directedBy: "Marc Webb",                      producedBy: "Mason Novick",                             runningTime: "95 min",     starring: "Joseph Gordon-Levitt, Zooey Deschanel" },
  { id: 6,  titre: "Zootopia",                                   categorie: "Animation",        region: "USA",     image: "zootopia.jpg",          directedBy: "Byron Howard",                   producedBy: "Clark Spencer",                            runningTime: "108 min",    starring: "Ginnifer Goodwin, Jason Bateman" },
  { id: 7,  titre: "Bridge to Terabithia",                       categorie: "Drama",            region: "USA",     image: "terabithia.jpg",        directedBy: "Gábor Csupó",                   producedBy: "Lauren Levine",                            runningTime: "96 min",     starring: "Josh Hutcherson, AnnaSophia Robb" },
  { id: 8,  titre: "Suicide Squad",                              categorie: "Action",           region: "USA",     image: "suicidesquad.jpg",      directedBy: "David Ayer",                     producedBy: "Charles Roven",                            runningTime: "123 min",    starring: "Will Smith, Jared Leto, Margot Robbie" },
  { id: 9,  titre: "Prisoners",                                  categorie: "Drama",            region: "USA",     image: "prisoners.jpg",         directedBy: "Denis Villeneuve",               producedBy: "Broderick Johnson",                        runningTime: "153 min",    starring: "Hugh Jackman, Jake Gyllenhaal" },
  { id: 10, titre: "The Hunger Games",                           categorie: "Science Fiction",  region: "USA",     image: "hungergames.jpg",       directedBy: "Gary Ross",                      producedBy: "Nina Jacobson",                            runningTime: "142 min",    starring: "Jennifer Lawrence, Josh Hutcherson" },
  { id: 11, titre: "The Chronicles of Narnia",                   categorie: "Adventure",        region: "USA",     image: "narnia.jpg",            directedBy: "Andrew Adamson",                 producedBy: "Mark Johnson",                             runningTime: "143 min",    starring: "Georgie Henley, Skandar Keynes" },
  { id: 12, titre: "Five Feet Apart",                            categorie: "Romance",          region: "USA",     image: "fivefeetapart.jpg",     directedBy: "Justin Baldoni",                 producedBy: "Cathy Schulman",                           runningTime: "116 min",    starring: "Haley Lu Richardson, Cole Sprouse" },
  { id: 13, titre: "The Theory of Everything",                   categorie: "Drama",            region: "UK",      image: "theory.jpg",            directedBy: "James Marsh",                    producedBy: "Tim Bevan",                                runningTime: "123 min",    starring: "Eddie Redmayne, Felicity Jones" },
  { id: 14, titre: "Enola Holmes",                               categorie: "Adventure",        region: "UK",      image: "enola.jpg",             directedBy: "Harry Bradbeer",                 producedBy: "Mary Parent",                              runningTime: "123 min",    starring: "Millie Bobby Brown, Henry Cavill" },
  { id: 15, titre: "Ice Age",                                    categorie: "Animation",        region: "USA",     image: "iceage.jpg",            directedBy: "Chris Wedge",                    producedBy: "Lori Forte",                               runningTime: "81 min",     starring: "Ray Romano, John Leguizamo" },
  { id: 16, titre: "Annabelle",                                  categorie: "Horror",           region: "USA",     image: "annabelle.jpg",         directedBy: "John R. Leonetti",               producedBy: "James Wan",                                runningTime: "99 min",     starring: "Annabelle Wallis, Ward Horton" },
  { id: 17, titre: "Kung Fu Panda",                              categorie: "Animation",        region: "USA",     image: "kungfupanda.jpg",       directedBy: "John Stevenson",                 producedBy: "Melissa Cobb",                             runningTime: "92 min",     starring: "Jack Black, Angelina Jolie" },
  { id: 18, titre: "Fast and Furious",                           categorie: "Action",           region: "USA",     image: "fastfurious.jpg",       directedBy: "Rob Cohen",                      producedBy: "Neal H. Moritz",                           runningTime: "106 min",    starring: "Vin Diesel, Paul Walker" },
  { id: 19, titre: "Ce Que Le Jour Doit À La Nuit",             categorie: "Romance",          region: "Algeria", image: "cequejour.jpg",         directedBy: "Alexandre Arcady",               producedBy: "Alexandre Arcady",                         runningTime: "162 min",    starring: "Nora Arnezeder, Fu'ad Aït Aattou" },
  { id: 20, titre: "Your Name",                                  categorie: "Animation",        region: "Japan",   image: "yourname.jpg",          directedBy: "Makoto Shinkai",                 producedBy: "Noritaka Kawaguchi",                       runningTime: "106 min",    starring: "Ryunosuke Kamiki, Mone Kamishiraishi" },
  { id: 21, titre: "She's The Man",                              categorie: "Romance",          region: "USA",     image: "shestheman.jpg",        directedBy: "Andy Fickman",                   producedBy: "Lauren Shuler Donner",                     runningTime: "105 min",    starring: "Amanda Bynes, Channing Tatum" },
  { id: 22, titre: "Se7en",                                      categorie: "Drama",            region: "USA",     image: "se7en.jpg",             directedBy: "David Fincher",                  producedBy: "Arnold Kopelson",                          runningTime: "127 min",    starring: "Brad Pitt, Morgan Freeman" },
  { id: 23, titre: "The Lion King",                              categorie: "Animation",        region: "USA",     image: "lionking.jpg",          directedBy: "Roger Allers",                   producedBy: "Don Hahn",                                 runningTime: "88 min",     starring: "Matthew Broderick, Jeremy Irons" },
  { id: 24, titre: "Interstellar",                               categorie: "Science Fiction",  region: "USA",     image: "interstellar.jpg",      directedBy: "Christopher Nolan",              producedBy: "Emma Thomas",                              runningTime: "169 min",    starring: "Matthew McConaughey, Anne Hathaway" },
  { id: 25, titre: "Creed",                                      categorie: "Action",           region: "USA",     image: "creed.jpg",             directedBy: "Ryan Coogler",                   producedBy: "Irwin Winkler",                            runningTime: "133 min",    starring: "Michael B. Jordan, Sylvester Stallone" },
  { id: 26, titre: "Le Clandestin (Taxi El Makhfi)",             categorie: "Drama",            region: "Algeria", image: "clandestin.jpg",        directedBy: "Benamar Bakhti",                 producedBy: "CAAIC",                                    runningTime: "115 min",    starring: "Athmane Ariouat, Yahia Benmabrouk" },
  { id: 27, titre: "Avatar",                                     categorie: "Science Fiction",  region: "USA",     image: "avatar.jpg",            directedBy: "James Cameron",                  producedBy: "James Cameron",                            runningTime: "162 min",    starring: "Sam Worthington, Zoe Saldana" },
  { id: 28, titre: "Pirates of the Caribbean: Dead Man's Chest", categorie: "Adventure",        region: "USA",     image: "pirates2.jpg",          directedBy: "Gore Verbinski",                 producedBy: "Jerry Bruckheimer",                        runningTime: "151 min",    starring: "Johnny Depp, Orlando Bloom, Keira Knightley" },
  { id: 29, titre: "I Am Legend",                                categorie: "Science Fiction",  region: "USA",     image: "iamlegend.jpg",         directedBy: "Francis Lawrence",               producedBy: "Akiva Goldsman",                           runningTime: "101 min",    starring: "Will Smith, Alice Braga" },
  { id: 30, titre: "Sing",                                       categorie: "Animation",        region: "USA",     image: "sing.jpg",              directedBy: "Garth Jennings",                 producedBy: "Chris Meledandri",                         runningTime: "108 min",    starring: "Matthew McConaughey, Reese Witherspoon" },
  { id: 31, titre: "Money Heist",                                categorie: "Action",           region: "Spain",   image: "moneyheist.jpg",        directedBy: "Jesús Colmenar",                producedBy: "Álex Pina",                               runningTime: "45 min/Ep",  starring: "Álvaro Morte, Úrsula Corberó" },
  { id: 32, titre: "Rio",                                        categorie: "Animation",        region: "USA",     image: "rio.jpg",               directedBy: "Carlos Saldanha",                producedBy: "Bruce Anderson",                           runningTime: "96 min",     starring: "Jesse Eisenberg, Anne Hathaway" },
  { id: 33, titre: "Les Jours d'avant",                          categorie: "Drama",            region: "Algeria", image: "lesjours.jpg",          directedBy: "Karim Moussaoui",                producedBy: "Virginie Legeay",                          runningTime: "47 min",     starring: "Chawki Amari, Souhila Mallem" },
  { id: 34, titre: "The Fault in Our Stars",                     categorie: "Romance",          region: "USA",     image: "faultstars.jpg",        directedBy: "Josh Boone",                     producedBy: "Marty Bowen",                              runningTime: "126 min",    starring: "Shailene Woodley, Ansel Elgort" },
  { id: 35, titre: "The Nun",                                    categorie: "Horror",           region: "USA",     image: "nun.jpg",               directedBy: "Corin Hardy",                    producedBy: "James Wan",                                runningTime: "96 min",     starring: "Demián Bichir, Taissa Farmiga" },
  { id: 36, titre: "10 Things I Hate About You",                 categorie: "Romance",          region: "USA",     image: "10things.jpg",          directedBy: "Gil Junger",                     producedBy: "Andrew Lazar",                             runningTime: "97 min",     starring: "Heath Ledger, Julia Stiles" },
  { id: 37, titre: "Love, Rosie",                                categorie: "Romance",          region: "UK",      image: "loverosie.jpg",         directedBy: "Christian Ditter",               producedBy: "Robert Kulzer",                            runningTime: "102 min",    starring: "Lily Collins, Sam Claflin" },
  { id: 38, titre: "Terrifier",                                  categorie: "Horror",           region: "USA",     image: "terrifier.jpg",         directedBy: "Damien Leone",                   producedBy: "Damien Leone",                             runningTime: "85 min",     starring: "Jenna Kanell, David Howard Thornton" },
  { id: 39, titre: "Ratatouille",                                categorie: "Animation",        region: "USA",     image: "ratatouille.jpg",       directedBy: "Brad Bird",                      producedBy: "Brad Lewis",                               runningTime: "111 min",    starring: "Patton Oswalt, Ian Holm" },
  { id: 40, titre: "One Day",                                    categorie: "Romance",          region: "USA",     image: "oneday.jpg",            directedBy: "Lone Scherfig",                  producedBy: "Nina Jacobson",                            runningTime: "107 min",    starring: "Anne Hathaway, Jim Sturgess" },
  { id: 41, titre: "Shrek",                                      categorie: "Animation",        region: "USA",     image: "shrek.jpg",             directedBy: "Andrew Adamson, Vicky Jenson",   producedBy: "DreamWorks Animation",                     runningTime: "90 min",     starring: "Mike Myers, Eddie Murphy, Cameron Diaz" },
  { id: 42, titre: "Les Bienheureux",                            categorie: "Drama",            region: "Algeria", image: "bienheureux.jpg",       directedBy: "Sofia Djama",                    producedBy: "Serge Lalou",                              runningTime: "102 min",    starring: "Sami Bouajila, Nadia Kaci" },
  { id: 43, titre: "Hotel Transylvania",                         categorie: "Animation",        region: "USA",     image: "hoteltransylvania.jpg", directedBy: "Genndy Tartakovsky",             producedBy: "Michelle Murdocca",                        runningTime: "91 min",     starring: "Adam Sandler, Selena Gomez" },
  { id: 44, titre: "Purple Hearts",                              categorie: "Romance",          region: "USA",     image: "purplehearts.jpg",      directedBy: "Elizabeth Allen Rosenbaum",      producedBy: "Alloy Entertainment",                      runningTime: "120 min",    starring: "Sofia Carson, Nicholas Galitzine" },
  { id: 45, titre: "Tangled",                                    categorie: "Animation",        region: "USA",     image: "tangled.jpg",           directedBy: "Nathan Greno",                   producedBy: "Roy Conli",                                runningTime: "100 min",    starring: "Mandy Moore, Zachary Levi" },
  { id: 46, titre: "Elemental",                                  categorie: "Animation",        region: "USA",     image: "elemental.jpg",         directedBy: "Peter Sohn",                     producedBy: "Denise Ream",                              runningTime: "101 min",    starring: "Leah Lewis, Mamoudou Athie" },
  { id: 47, titre: "The Pursuit of Happyness",                   categorie: "Drama",            region: "USA",     image: "pursuit.jpg",           directedBy: "Gabriele Muccino",               producedBy: "Will Smith",                               runningTime: "117 min",    starring: "Will Smith, Jaden Smith" },
  { id: 48, titre: "My Neighbor Totoro",                         categorie: "Animation",        region: "Japan",   image: "totoro.jpg",            directedBy: "Hayao Miyazaki",                 producedBy: "Toru Hara",                                runningTime: "86 min",     starring: "Noriko Hidaka, Chika Sakamoto" },
  { id: 49, titre: "Harry Potter and the Sorcerer's Stone",      categorie: "Adventure",        region: "UK",      image: "harry1.jpg",            directedBy: "Chris Columbus",                 producedBy: "David Heyman",                             runningTime: "152 min",    starring: "Daniel Radcliffe, Emma Watson, Rupert Grint" },
  { id: 50, titre: "Taken",                                      categorie: "Action",           region: "USA",     image: "taken.jpg",             directedBy: "Pierre Morel",                   producedBy: "Luc Besson",                               runningTime: "90 min",     starring: "Liam Neeson, Maggie Grace" },
  { id: 51, titre: "Michael",                                    categorie: "Drama",            region: "USA",     image: "michael.jpg",           directedBy: "Antoine Fuqua",                  producedBy: "Graham King, John Branca, John McClain",   runningTime: "127 min",    starring: "Jaafar Jackson, Colman Domingo, Nia Long, Miles Teller" },
  { id: 52, titre: "The Matrix",                                 categorie: "Science Fiction",  region: "USA",     image: "matrix.jpg",            directedBy: "Lana Wachowski, Lilly Wachowski", producedBy: "Joel Silver",                             runningTime: "136 min",    starring: "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss" },
  { id: 53, titre: "Man of Steel",                               categorie: "Action",           region: "USA",     image: "man.jpg",               directedBy: "Zack Snyder",                    producedBy: "Charles Roven, Christopher Nolan",         runningTime: "143 min",    starring: "Henry Cavill, Amy Adams, Michael Shannon" },
  { id: 54, titre: "Batman v Superman",                          categorie: "Action",           region: "USA",     image: "batman.jpg",            directedBy: "Zack Snyder",                    producedBy: "Charles Roven, Deborah Snyder",            runningTime: "151 min",    starring: "Ben Affleck, Henry Cavill, Amy Adams" },
  { id: 55, titre: "The Avengers",                               categorie: "Action",           region: "USA",     image: "avengers.jpg",          directedBy: "Joss Whedon",                    producedBy: "Kevin Feige",                              runningTime: "143 min",    starring: "Robert Downey Jr., Chris Evans, Scarlett Johansson" },
  { id: 56, titre: "Venom",                                      categorie: "Action",           region: "USA",     image: "venom.jpg",             directedBy: "Ruben Fleischer",                producedBy: "Avi Arad, Matt Tolmach, Amy Pascal",       runningTime: "112 min",    starring: "Tom Hardy, Michelle Williams, Riz Ahmed" },
  { id: 57, titre: "Mission: Impossible - Fallout",              categorie: "Action",           region: "USA",     image: "mission.jpg",           directedBy: "Christopher McQuarrie",          producedBy: "Tom Cruise, Christopher McQuarrie",        runningTime: "147 min",    starring: "Tom Cruise, Henry Cavill, Ving Rhames" },
  { id: 58, titre: "Kingsman: The Golden Circle",                categorie: "Action",           region: "UK",      image: "kingsman.jpg",          directedBy: "Matthew Vaughn",                 producedBy: "Matthew Vaughn, David Reid",               runningTime: "141 min",    starring: "Colin Firth, Julianne Moore, Taron Egerton" },
  { id: 59, titre: "Bad Boys: Ride or Die",                      categorie: "Action",           region: "USA",     image: "bad.jpg",               directedBy: "Adil El Arbi, Bilall Fallah",    producedBy: "Jerry Bruckheimer, Will Smith",            runningTime: "115 min",    starring: "Will Smith, Martin Lawrence, Vanessa Hudgens" },
  { id: 60, titre: "Inception",                                  categorie: "Science Fiction",  region: "USA",     image: "inception.jpg",         directedBy: "Christopher Nolan",              producedBy: "Emma Thomas, Christopher Nolan",           runningTime: "148 min",    starring: "Leonardo DiCaprio, Joseph Gordon-Levitt, Marion Cotillard" },
  { id: 61, titre: "The Help",                                   categorie: "Drama",            region: "USA",     image: "help.jpg",              directedBy: "Tate Taylor",                    producedBy: "Chris Columbus, Michael Barnathan",        runningTime: "146 min",    starring: "Viola Davis, Emma Stone, Octavia Spencer" },
  { id: 62, titre: "I Am Sam",                                   categorie: "Drama",            region: "USA",     image: "sam.jpg",               directedBy: "Jessie Nelson",                  producedBy: "Jessie Nelson, Richard Solomon",           runningTime: "132 min",    starring: "Sean Penn, Michelle Pfeiffer, Dakota Fanning" },
  { id: 63, titre: "John Wick",                                  categorie: "Action",           region: "USA",     image: "john.jpg",              directedBy: "Chad Stahelski",                 producedBy: "Basil Iwanyk, David Leitch",               runningTime: "101 min",    starring: "Keanu Reeves, Michael Nyqvist, Alfie Allen" },
  { id: 64, titre: "Howl's Moving Castle",                       categorie: "Animation",        region: "Japan",   image: "howl.jpg",              directedBy: "Hayao Miyazaki",                 producedBy: "Toshio Suzuki",                            runningTime: "119 min",    starring: "Chieko Baisho, Takuya Kimura" },
  { id: 65, titre: "Alvin and the Chipmunks",                    categorie: "Animation",        region: "USA",     image: "alvin.jpg",             directedBy: "Tim Hill",                       producedBy: "Janice Karman, Ross Bagdasarian Jr.",      runningTime: "92 min",     starring: "Jason Lee, Justin Long, Matthew Gray Gubler" },
  { id: 66, titre: "Wonder",                                     categorie: "Drama",            region: "USA",     image: "wonder.jpg",            directedBy: "Stephen Chbosky",                producedBy: "Todd Lieberman, David Hoberman",           runningTime: "113 min",    starring: "Julia Roberts, Owen Wilson, Jacob Tremblay" },
  { id: 67, titre: "The Princess Diaries",                       categorie: "Romance",          region: "USA",     image: "princess.jpg",          directedBy: "Garry Marshall",                 producedBy: "Whitney Houston, Debra Martin Chase",      runningTime: "115 min",    starring: "Anne Hathaway, Julie Andrews" },
  { id: 68, titre: "F1",                                         categorie: "Drama",            region: "USA",     image: "f1.jpg",                directedBy: "Joseph Kosinski",                producedBy: "Jerry Bruckheimer, Brad Pitt",             runningTime: "155 min",    starring: "Brad Pitt, Damson Idris, Kerry Condon" },
  { id: 69, titre: "The Martian",                                categorie: "Science Fiction",  region: "USA",     image: "martian.jpg",           directedBy: "Ridley Scott",                   producedBy: "Simon Kinberg, Ridley Scott",              runningTime: "144 min",    starring: "Matt Damon, Jessica Chastain, Kristen Wiig" },
  { id: 70, titre: "Corpse Bride",                               categorie: "Animation",        region: "UK",      image: "corpse.jpg",            directedBy: "Tim Burton, Mike Johnson",       producedBy: "Tim Burton, Allison Abbate",               runningTime: "77 min",     starring: "Johnny Depp, Helena Bonham Carter" },
  { id: 71, titre: "Hachi: A Dog's Tale",                        categorie: "Drama",            region: "USA",     image: "hachi.jpg",             directedBy: "Lasse Hallström",               producedBy: "Richard Gere, Bill Johnson",               runningTime: "93 min",     starring: "Richard Gere, Joan Allen, Sarah Roemer" },
  { id: 72, titre: "Rush Hour",                                  categorie: "Action",           region: "USA",     image: "rush.jpg",              directedBy: "Brett Ratner",                   producedBy: "Roger Birnbaum, Arthur M. Sarkissian",     runningTime: "98 min",     starring: "Jackie Chan, Chris Tucker, Tom Wilkinson" },
  { id: 73, titre: "The Godfather",                              categorie: "Drama",            region: "USA",     image: "godfather.jpg",         directedBy: "Francis Ford Coppola",           producedBy: "Albert S. Ruddy",                          runningTime: "175 min",    starring: "Marlon Brando, Al Pacino, James Caan" },
  { id: 74, titre: "13 Going on 30",                             categorie: "Romance",          region: "USA",     image: "13.jpg",                directedBy: "Gary Winick",                    producedBy: "Susan Arnold, Donna Arkoff Roth",          runningTime: "98 min",     starring: "Jennifer Garner, Mark Ruffalo, Judy Greer" },
  { id: 75, titre: "Legally Blonde",                             categorie: "Romance",          region: "USA",     image: "legally.jpg",           directedBy: "Robert Luketic",                 producedBy: "Marc Platt, Ric Kidney",                   runningTime: "96 min",     starring: "Reese Witherspoon, Luke Wilson, Selma Blair" },
  { id: 76, titre: "Love & Other Drugs",                         categorie: "Romance",          region: "USA",     image: "love.jpg",              directedBy: "Edward Zwick",                   producedBy: "Edward Zwick, Scott Stuber",               runningTime: "112 min",    starring: "Jake Gyllenhaal, Anne Hathaway" },
  { id: 77, titre: "Me Before You",                              categorie: "Romance",          region: "UK",      image: "me.jpg",                directedBy: "Thea Sharrock",                  producedBy: "Karen Rosenfelt, Alison Owen",             runningTime: "110 min",    starring: "Emilia Clarke, Sam Claflin" },
  { id: 78, titre: "Little Women",                               categorie: "Drama",            region: "USA",     image: "little.jpg",            directedBy: "Greta Gerwig",                   producedBy: "Amy Pascal, Denise Di Novi",               runningTime: "135 min",    starring: "Saoirse Ronan, Emma Watson, Florence Pugh" },
  { id: 79, titre: "The Parent Trap",                            categorie: "Adventure",        region: "USA",     image: "parent.jpg",            directedBy: "Nancy Meyers",                   producedBy: "Charles Shyer",                            runningTime: "128 min",    starring: "Lindsay Lohan, Dennis Quaid, Natasha Richardson" },
  { id: 80, titre: "I Want to Eat Your Pancreas",                categorie: "Animation",        region: "Japan",   image: "want.jpg",              directedBy: "Shinichirō Ushijima",           producedBy: "Keisuke Mita",                             runningTime: "108 min",    starring: "Mahiro Takasugi, Lynn" },
  { id: 81, titre: "A Silent Voice",                             categorie: "Animation",        region: "Japan",   image: "silent.jpg",            directedBy: "Naoko Yamada",                   producedBy: "Kensuke Tateishi",                         runningTime: "130 min",    starring: "Miyu Irino, Saori Hayami" },
  { id: 82, titre: "The Wind Rises",                             categorie: "Animation",        region: "Japan",   image: "wind.jpg",              directedBy: "Hayao Miyazaki",                 producedBy: "Toshio Suzuki",                            runningTime: "126 min",    starring: "Hideaki Anno, Miori Takimoto" },
  { id: 83, titre: "Grave of the Fireflies",                     categorie: "Animation",        region: "Japan",   image: "grave.jpg",             directedBy: "Isao Takahata",                  producedBy: "Toru Hara",                                runningTime: "89 min",     starring: "Tsutomu Tatsumi, Ayano Shiraishi" }
];

let categorieChoisie = "All";
let regionChoisie    = "All";
let motCleRecherche  = "";

function afficherFilms() {
  var conteneur = document.getElementById("films");
  if (!conteneur) return;

  conteneur.innerHTML = "";

  var resultat = films.filter(function(film) {
    var matchCat    = categorieChoisie === "All" || film.categorie === categorieChoisie;
    var matchReg    = regionChoisie    === "All" || film.region.toLowerCase() === regionChoisie.toLowerCase();
    var matchSearch = film.titre.toLowerCase().includes(motCleRecherche.toLowerCase());
    return matchCat && matchReg && matchSearch;
  });

  var badge = document.getElementById("count-badge");
  if (badge) {
    badge.textContent = resultat.length + " title" + (resultat.length !== 1 ? "s" : "");
  }

  if (resultat.length === 0) {
    conteneur.innerHTML =
      '<div class="empty-state">' +
        '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#777" stroke-width="1.5">' +
          '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>' +
        '</svg>' +
        '<p>No movies found.</p>' +
      '</div>';
    return;
  }

  resultat.forEach(function(film) {
    var card = document.createElement("div");
    card.className = "film-card";
    card.innerHTML =
      '<a href="film.html?id=' + film.id + '">' +
        '<img src="' + '../image/' + film.image + '" alt="' + film.titre + '" loading="lazy">' +
        '<div class="play-icon">' +
          '<svg width="16" height="16" viewBox="0 0 24 24" fill="#141414"><polygon points="5 3 19 12 5 21 5 3"/></svg>' +
        '</div>' +
        '<div class="card-overlay">' +
          '<div class="card-title">' + film.titre + '</div>' +
          '<div class="card-meta">' +
            '<span class="card-cat">' + film.categorie + '</span>' +
            '<span>' + film.runningTime + '</span>' +
          '</div>' +
        '</div>' +
      '</a>';
    conteneur.appendChild(card);
  });
}

function filtrerCategorie(cat, el) {
  categorieChoisie = cat;
  document.querySelectorAll("#categories-row .btn").forEach(function(b) { b.classList.remove("active"); });
  el.classList.add("active");
  afficherFilms();
}

function filtrerRegion(reg, el) {
  regionChoisie = reg;
  document.querySelectorAll("#regions-row .btn").forEach(function(b) { b.classList.remove("active"); });
  el.classList.add("active");
  afficherFilms();
}

function rechercheFilm() {
  var input = document.getElementById("search-input");
  if (!input) return;
  motCleRecherche = input.value;
  afficherFilms();
}

function toggleSearch() {
  var wrapper = document.getElementById("searchWrapper");
  var input   = document.getElementById("search-input");
  if (!wrapper || !input) return;
  wrapper.classList.toggle("open");
  if (wrapper.classList.contains("open")) {
    input.focus();
  } else {
    input.value     = "";
    motCleRecherche = "";
    afficherFilms();
  }
}

function chargerDetailsFilm() {
  var conteneurDetails = document.getElementById("details-content");
  if (!conteneurDetails) return;

  var urlParams = new URLSearchParams(window.location.search);
  var idFilm    = parseInt(urlParams.get("id"));
  var film      = films.find(function(f) { return f.id === idFilm; });

  if (!film) {
    conteneurDetails.innerHTML =
      "<h2>Movie not found</h2>" +
      '<a href="../index.html" class="back-btn">← Back to Catalog</a>';
    return;
  }

  try { sessionStorage.setItem("selectedFilm", JSON.stringify(film)); } catch(e) {}

  conteneurDetails.innerHTML =
    '<div class="image-wrapper">' +
      '<img src="' + '../image/' + film.image + '" alt="' + film.titre + '">' +
    '</div>' +
    '<h1>' + film.titre + '</h1>' +
    '<table class="info-table">' +
      '<tr><th>Category</th><td>'     + film.categorie              + '</td></tr>' +
      '<tr><th>Region</th><td>'       + film.region                 + '</td></tr>' +
      '<tr><th>Directed By</th><td>'  + (film.directedBy  || "N/A") + '</td></tr>' +
      '<tr><th>Produced By</th><td>'  + (film.producedBy  || "N/A") + '</td></tr>' +
      '<tr><th>Running Time</th><td>' + (film.runningTime || "N/A") + '</td></tr>' +
      '<tr><th>Starring</th><td>'     + (film.starring    || "N/A") + '</td></tr>' +
    '</table>' +
    '<div class="action-buttons">' +
      '<button class="buy-btn" onclick="showReservation()">🎟️ Buy Now</button>' +
      '<a href="../index.html" class="back-btn">← Back to Catalog</a>' +
    '</div>';
}

document.addEventListener("DOMContentLoaded", function() {

  afficherFilms();
  chargerDetailsFilm();

  var navbar = document.getElementById("navbar");
  if (navbar) {
    window.addEventListener("scroll", function() {
      navbar.classList.toggle("scrolled", window.scrollY > 60);
    });
  }

  var searchBtn = document.getElementById("searchToggleBtn");
  if (searchBtn) searchBtn.addEventListener("click", toggleSearch);

  var searchInput = document.getElementById("search-input");
  if (searchInput) searchInput.addEventListener("input", rechercheFilm);

  document.querySelectorAll("#categories-row .btn").forEach(function(btn) {
    btn.addEventListener("click", function() { filtrerCategorie(btn.dataset.cat, btn); });
  });

  document.querySelectorAll("#regions-row .btn").forEach(function(btn) {
    btn.addEventListener("click", function() { filtrerRegion(btn.dataset.reg, btn); });
  });

});

function showReservation() {
  var urlParams = new URLSearchParams(window.location.search);
  var idFilm    = parseInt(urlParams.get("id"));
  window.location.href = "reservation.html?id=" + idFilm;
}