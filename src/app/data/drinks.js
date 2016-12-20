export const drinks = [
  {
    name: 'The Martinez',
    illustration: require('../../assets/img/drinks/the-martinez_illust.svg'),
    heading: 'You are positively rakish, sexy and swashbuckling, may we recommend...',
    img: require('../../assets/img/drinks/martinez.png'),
    color: '#934224',
    description: 'For what some have called the evolutionary link between the Manhattan and the Martini, the Martinez came from humble beginnings. As the story goes, a traveller came into a San Francisco bar and asked for a stout drink before his trip to Martinez, a town north of the city. The bartender reached for Old Tom Gin, which, at the time, was a “poorly distilled gin with sugar added so it’d be palatable.” This sweetened gin became the drink’s signature ingredient, and since then, the Martinez has grown into a balanced but strong sipping drink.',
    ingredients: [
      '1½ ounces Old Tom gin',
      'Sweet vermouth',
      '1/4 ounce Luxardo Maraschino liqueur',
      '2 dashses Angostura bitters'
    ],
    instructions: [
      'Add all ingredients to a shaker and fill with ice.',
      'Shake, and strain into a chilled coupe glass.'
    ],
    garnish: [
      '1 lemon twist'
    ],
    scores: [6, 0, 1], // [Strength, Weirdness, Fruitiness], out of 10,
    music: {
      file: require('../../assets/audio/martinez.mp3'),
      artist: 'Riz Ortolani Al Caiola',
      name: 'Holiday on Skis'
    }
  },

  {
    name: 'Remember The Maine',
    illustration: require('../../assets/img/drinks/remember-the-maine_illust.svg'),
    heading: 'You are positively rakish, sexy and swashbuckling, may we recommend...',
    img: require('../../assets/img/drinks/remember_the_maine.png'),
    color: '#6A3661',
    description: 'The Maine, a U.S. naval ship, was sitting off the coast of Havana in 1898 in a bout of saber-rattling with Spain, which controlled Cuba at the time. When it mysteriously exploded and sank (some blame a coal fire), warmongering journalists used the phrase “Remember the Maine, to Hell with Spain” as a rallying cry that would jumpstart the Spanish-American war, leading to Cuban independence.',
    ingredients: [
      '2 ounces rye',
      '3/4 ounce sweet vermouth',
      '2 teaspoons Cherry Heering',
      '1 dash absinthe'
    ],
    instructions: [
      'In a chilled coupe or cocktail glass, add a dash of adbinthe. Roll around to coat and discard excess.',
      'Add all ingredients to a mixing glass.',
      'Add ice and stir well.',
      'Strain into prepared coupe or cocktail glass.',
      'Garnish with a brandied cherry.'
    ],
    garnish: [
      'Brandied cherry',
      '(preferably Luxardo)'
    ],
    scores: [7, 0, 2],
    music: {
      file: require('../../assets/audio/remember-the-maine.mp3'),
      artist: 'The Soul Saints Orchestra',
      name: 'Santa\'s Got a Bag of Soul'
    }
  },

  {
    name: 'The Jack Rose',
    illustration: require('../../assets/img/drinks/the-jack-rose_illust.svg'),
    heading: 'You are positively rakish, sexy and swashbuckling, may we recommend...',
    img: require('../../assets/img/drinks/jack_rose.png'),
    color: '#58B094',
    description: 'A Jack Rose is a cocktail containing applejack, grenadine, and lemon or lime juice. It was popular in the 1920s and 1930s, notably appearing in Ernest Hemingway’s 1926 classic, The Sun Also Rises, in which Jake Barnes, the narrator, drinks a Jack Rose in the Crillon Paris hotel bar while awaiting the arrival of Lady Brett Ashley. It was also a favorite drink of author John Steinbeck.',
    ingredients: [
      '1 ounce fresh lemon juice',
      '½ ounce grenadine',
      '2 ounces applejack'
    ],
    instructions: [
      'Shake all ingredients well with ice.',
      'Strain into a cocktail glass or serve over ice.'
    ],
    scores: [2, 2, 5],
    music: {
      file: require('../../assets/audio/jack-rose.mp3'),
      artist: 'Esquivel',
      name: 'Jingle Bells'
    }
  },

  // // {
  // //   name: 'The Last Word',
  // //   illustration: require('../../assets/img/drinks/the-last-word_illust.svg'),
  // //   heading: 'You are positively rakish, sexy and swashbuckling, may we recommend...',
  // //   img: require('../../assets/img/drinks/placeholder.png'),
  // //   color: '#8C8E49',
  // //   description: 'The Last Word is a gin-based prohibition-era cocktail originally developed at the Detroit Athletic Club. While the drink eventually fell out of favor, it has recently enjoyed a renewed popularity after being rediscovered as a cult hit in the Seattle area by bartender Murray Stenson during his tenure at the Zig Zag Café.',
  // //   ingredients: [
  // //     '3/4 ounce gin',
  // //     '3/4 ounce marachino liqueur',
  // //     '3/4 ounce green Chartreuse',
  // //     '3/4 ounce line juice'
  // //   ],
  // //   instructions: [
  // //     'Vigorously shake all ingredients together with ice.',
  // //     'Strain into a martini glass or a coupe and garnish with lime twist.'
  // //   ],
  // //   garnish: [
  // //     'lime twist'
  // //   ],
  // //   scores: [4, 5, 6],
  // //   music: {
  //   file: require('../../assets/audio/last-word.mp3'),
  //   artist: ,
  //   name:
  // }
  // // },

  {
    name: 'Paper Plane',
    illustration: require('../../assets/img/drinks/paper-plane_illust.svg'),
    heading: 'You are positively rakish, sexy and swashbuckling, may we recommend...',
    img: require('../../assets/img/drinks/paper_plane.png'),
    color: '#437BA4',
    description: 'This quattro-proportioned drink was created by Sam Ross of New York’s Little Branch. It got its name from M.I.A.’s song, which Ross was listening to when the drink was created.',
    ingredients: [
      '3/4 ounces bourbon',
      '3/4 ounces Aperol',
      '3/4 ounces Amaro Nonino',
      '3/4 ounces lemon juice'
    ],
    instructions: [
      'Add all ingredients to a shaker and fill with ice.',
      'Shake, and strain into a coupe glass.'
    ],
    scores: [5, 1, 7],
    music: {
      file: require('../../assets/audio/paper-plane.mp3'),
      artist: 'RUN DMC',
      name: 'Christmas in Hollis'
    }
  },

  {
    name: 'East Side',
    illustration: require('../../assets/img/drinks/east-side_illust.svg'),
    heading: 'You are positively rakish, sexy and swashbuckling, may we recommend...',
    img: require('../../assets/img/drinks/east_side.png'),
    color: '#705E4D',
    description: 'According to one story, the drink was the preferred beverage of Al Capone, whose gang dominated Chicago’s South Side.[3] The gin imported by Capone’s rivals on the North Side of Chicago was smooth, and usually consumed with ginger ale.[3] However, the gin run by Capone’s gang had a rougher edge to it, and required more sweeteners to make it palatable.[3] Thus the South Side was born.[3]',
    ingredients: [
      '2 ounces Plymouth gin',
      '1 ounce St-Germain',
      '3/4 ounce Fresh lime juice'
    ],
    instructions: [
      'Add several mint leaves (no stems) and several cucumber slices into a shaker tin, along with the lime and simple syrup, then muddle for several seconds.',
      'Add the gin and a generous amount of ice.',
      'Shake vigorously and strain with a Hawthorn strainer into a chilled coupe and garnish with a thin cucumber slice (if it is too thick, it will not float on top, but you can also slice the cucumber to sit on the site of the glass).'
    ],
    garnish: [
      '2 cucumber slices',
      '1 pinch mint'
    ],
    scores: [3, 2, 7],
    music: {
      file: require('../../assets/audio/east-side.mp3'),
      artist: 'El Vez',
      name: 'Sleigh Ride'
    }
  },

  {
    name: 'Oaxaca Old Fashioned',
    illustration: require('../../assets/img/drinks/oaxaca-old-fasioned_illust.svg'),
    heading: 'You are positively rakish, sexy and swashbuckling, may we recommend...',
    img: require('../../assets/img/drinks/oaxaca_old_fashioned.png'),
    color: '#715E4D',
    description: 'When the Most Interesting Man in the World says he doesn’t always drink beer, he was probably drinking this:',
    ingredients: [
      '1½ ounces reposado tequila',
      '½ ounce mezcal',
      '1 teaspoon agave nectar',
      '1 dash Angostura bitters'
    ],
    instructions: [
      'Combine liquids in a cocktail shaker with a generous handful of ice. Stir until well chilled.',
      'Hold a lighted match over drink in one hand and orange peel in other hand, with orange side facing flame and about and inch away. Carefully and quickly squeeze orange peel until oils spark.'
    ],
    garnish: [
      'Strip of orange peel with pith, once inch wide'
    ],
    scores: [8, 4, 0],
    music: {
      file: require('../../assets/audio/oaxaca.mp3'),
      artist: 'The Ventures',
      name: 'Frosty the Snowman'
    }
  },

  {
    name: 'Blood and Sand',
    illustration: require('../../assets/img/drinks/blood-and-sand_illust.svg'),
    heading: 'You are positively rakish, sexy and swashbuckling, may we recommend...',
    img: require('../../assets/img/drinks/blood_and_sand.png'),
    color: '#DE1D5F',
    description: 'Rudolph Valentino, known as “The Latin Lover,” was a star and sex symbol of the silent film era. His 1922 bullfighter movie Blood and Sand has not stood the test of time. But the drink named after it has.',
    ingredients: [
      '3/4 ounces The Glenrothes Select',
      'Reserve Single Malt Scotch Whisky',
      '3/4 ounces Sweet vermouth',
      '3/4 ounces Cherry Heering',
      '3/4 ounces orange juice'
    ],
    instructions: [
      'Add all the ingredients to a shaker and fill with ice.',
      'Shake, and strain into a chilled coupe or cocktail glass.',
      'Garnish with an orange peel'
    ],
    garnish: [
      'orange peel'
    ],
    scores: [5, 8, 5],
    music: {
      file: require('../../assets/audio/blood-and-sand.mp3'),
      artist: 'Los Straitjackets',
      name: 'Feliz Navidad'
    }
  },

  {
    name: 'Old Cuban',
    illustration: require('../../assets/img/drinks/old-cuban_illust.svg'),
    heading: 'You are positively rakish, sexy and swashbuckling, may we recommend...',
    img: require('../../assets/img/drinks/old_cuban.png'),
    color: '#F6772D',
    description: 'This quattro-proportioned drink was created by Sam Ross of New York’s Little Branch. It got its name from M.I.A.’s song, which Ross was listening to when the drink was created.',
    ingredients: [
      '1½ ounces Bacardí 8-year-old rum',
      'Freshly squeezed lime juice',
      'Simple syrup',
      '6 whole mint leaves',
      '2 dashes Angostura bitters',
      'Champagne'
    ],
    instructions: [
      'Gently bruise the mint with lime juice in a shaker using a muddler or wooden spoon.',
      'Add syrup, rum, bitters and a big handful of ice, and shake until well chilled.',
      'Strain into a coupe or cocktail glass and add Champagne',
      'With a knife, slit the lime slice halfway through and pierce it with the mint sprig. Perch it on the rim of the glass.'
    ],
    garnish: [
      'lime slice',
      'mint sprig'
    ],
    scores: [5, 1, 9],
    music: {
      file: require('../../assets/audio/old-cuban.mp3'),
      artist: 'The Youngsters',
      name: 'Christmas in Jail'
    }
  },

  {
    name: 'Three Dots and a Dash',
    illustration: require('../../assets/img/drinks/three-dots-and-a-dash_illust.svg'),
    heading: 'You are positively rakish, sexy and swashbuckling, may we recommend...',
    img: require('../../assets/img/drinks/three_dots_and_a_dash.png'),
    color: '#FFBA00',
    description: 'This tiki classic was created during WWII by the godfather of the genre himself, Don the Beachcomber. The name “Three dots and a dash” means “victory” in Morse Code.',
    ingredients: [
      '1 ounce rhum agricole (preferably Duquesne Agricole Eleve Sous Bois)',
      '1 ounce rum, Guyanese (preferably El Dorado 5 Year)',
      '½ ounce dry curaçao',
      '½ ounce falernum',
      '1/4 ounce St. Elizabeth Allspice Dram',
      '1 ounce lime juice',
      '½ ounce honey syrup (2:1, honey:water)',
      '3 dashes Angostura bitters'
    ],
    instructions: [
      'Add all ingredients to a shaker and fill with ice.',
      'Shake, and strain into a coupe glass.'
    ],
    garnish: [
      'pineapple leaves',
      'pineapple spear',
      'an orchid',
      'three brandied cherries'
    ],
    scores: [8, 8, 5],
    music: {
      file: require('../../assets/audio/three-dots-and-a-dash.mp3'),
      artist: 'Lynett Kaopuiki Paglinawan',
      name: 'Mele Kalikimaka la `Oe'
    }
  },

  {
    name: 'Fog Cutter',
    illustration: require('../../assets/img/drinks/fog-cutter_illust.svg'),
    heading: 'You are positively rakish, sexy and swashbuckling, may we recommend...',
    img: require('../../assets/img/drinks/fog_cutter.png'),
    color: '#BEBFBF',
    description: '“Fog Cutter, hell, after two of these you won’t even see the stuff” -Victor Bergeron (“Trader Vic”) The Fog Cutter was created by Don the Beachcomber’s rival, Trader Vic, during the “Tiki Era” in the Hollywood bar scene.',
    ingredients: [
      '½ ounce fresh lemon juice',
      '1½ ounce fresh orange juice',
      '½ ounce orgeat',
      '1 ounce Pisco',
      '½ ounce gin',
      '2 ounces blended light aged rum',
      '½ ounce oloroso Sherry'
    ],
    instructions: [
      'Fill a cocktail shaker with ice.',
      'Add the white rum, gin, brandy, orange and lemon juices and orgeat and shake well.',
      'Strain into an ice-filled highball glsass and float the Amontillado sherry on top.',
      'Garnish with the mint sprig.'
    ],
    garnish: [
      '1 mint sprig'
    ],
    scores: [7, 4, 5],
    music: {
      file: require('../../assets/audio/fog-cutter.mp3'),
      artist: 'Strange Manor',
      name: 'Run Rude Rudolph'
    }
  },

  {
    name: 'Zombie',
    illustration: require('../../assets/img/drinks/zombie_illust.svg'),
    heading: 'You are positively rakish, sexy and swashbuckling, may we recommend...',
    img: require('../../assets/img/drinks/zombie.png'),
    color: '#3B87A3',
    description: 'Legend has it that Donn Beach originally concocted the Zombie to help a hung-over customer get through a business meeting.[2]The customer returned several days later to complain that he had been turned into a zombie for his entire trip. Its smooth, fruity taste works to conceal its extremely high alcoholiccontent. Don the Beachcomber restaurants limit their customers to two Zombies apiece.',
    ingredients: [
      '3/4 ounce fresh lime juice',
      '½ ounce felernum',
      '1½ ounces each gold Puerto Rican rum and gold or dark Jamaican rum',
      '1 ounce 151-proof Lemon Hard Demerara rum',
      '1 teaspoon grenadine',
      '6 drops Pernod',
      '1 dash of Angostura bitters',
      '½ ounce Don\'s mix (2 parts grapefruit juice to 1 part cinnamon-infused sugar syrup blend with 6 ounces (3/4 cup) crushed ice, then blend at high speed for no more than 5 seconds.',
      'Add ice cubes to fill.'
    ],
    instructions: [
      'Mix ingredients other than the 151 in a shaker with ice.',
      'Pour into glass and top with the high-proof rum'
    ],
    garnish: [
      '1 mint sprig'
    ],
    scores: [9, 8, 8],
    music: {
      file: require('../../assets/audio/zombie.mp3'),
      artist: 'Lord Jellicoe',
      name: 'Zombie Jamboree'
    }
  },

  {
    name: 'Hot Apple Pie',
    heading: 'You are positively rakish, sexy and swashbuckling, may we recommend...',
    illustration: require('../../assets/img/drinks/hot-apple-pie_illust.svg'),
    img: require('../../assets/img/drinks/hot_apple_pie.png'),
    color: '#C90037',
    description: 'Tuaca Liqueur is a popular vanilla liqueur that has roots dating back 500 years to the time of Lorenzo the Magnificent. The legend is that this patron of Italian Renaissance arts enjoyed this liqueur and it was lost until 1938, when brothers-in-law Gaetano Tuoni and Giorgio Canepa revived the recipe, naming it using a combination of their own surnames.  Tuaca saw a rise in popularity during World War II.',
    ingredients: [
      '2 ounces Tuaca',
      'Hot apple cider',
      'Whipped cream'
    ],
    instructions: [
      'Pour the Tuaca in an Irish coffee glass',
      'Fill with hot apple cider',
      'Top with whipped cream',
      'Garnish with a cinnamon stick.'
    ],
    garnish: [
      'Cinnamon stick'
    ],
    scores: [3, 0, 8],
    music: {
      file: require('../../assets/audio/hot-apple-pie.mp3'),
      artist: 'The Jive Turkeys',
      name: 'Get Down Santa'
    }
  }
];

export const beer = {
  name: "Cheap Beer",
  heading: "You are a rock and roll party animal. May we recommend...",
  img: require('../../assets/img/drinks/cheap_beer.svg'),
  color: '#6A3661',
  description: "Cheap beer doesn’t mean you are cheap. You are a priceless inscrutable artifact of dive bars; a life-saving, rule breaking anti-hero. When work is done, it is done. If someone tries to strike up a conversation about politics, you only respond in pig latin. Cheap beer allows you to leave the house and be in it for the long haul. You can drink all night, stay up till dawn, tell a few jokes of questionable integrity, hit four parties and still manage to hold back someone’s hair at the porcelain throne.",
  ingredients: ['1 can'],
  instructions: ['Open can'],
  illustration: require('../../assets/img/drinks/beer_illust.svg'),
  music: {
    file: require('../../assets/audio/beer.mp3'),
    artist: 'Twisted Sister',
    name: 'Oh Come All Ye Faithful'
  }
};
