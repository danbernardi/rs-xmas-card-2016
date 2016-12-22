export const drinks = [
  {
    name: 'Martinez',
    illustration: 'the_martinez_illust.png',
    heading: 'Your tastes are strong and steeped in tradition. This cocktail is the definition of old school.',
    img: 'martinez.png',
    color: '#752719',
    description: "For what some call the evolutionary link between the Manhattan and the Martini, the Martinez came from humble beginnings. As the story goes, a traveller came into a San Francisco bar and asked for a stout drink before his trip to Martinez, a town north of the city. The bartender reached for Old Tom Gin, which, at the time, was a “poorly distilled gin with sugar added so it’d be palatable.” This sweetened gin became the signature ingredient of this robust yet balanced sipping cocktail.",
    ingredients: [
      '1½ ounces Old Tom gin',
      'Sweet Vermouth',
      '¼ ounce Luxardo Maraschino liqueur',
      '2 dashes Angostura bitters'
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
      file: 'martinez.mp3',
      artist: 'Riz Ortolani Al Caiola',
      name: 'Holiday on Skis'
    }
  },

  {
    name: 'Remember The Maine',
    illustration: 'remember_the_maine_illust.png',
    heading: "You’ve got a dash of the revolutionary in you. Make this cocktail your rallying cry.",
    img: 'remember_the_maine.png',
    color: '#66385C',
    description: "“Remember the Maine, to hell with Spain!” screamed warmongering journalists when the USS Maine exploded in the Havana Harbor in 1898 under mysterious circumstances. But when famed spirits writer Charles H. Baker first told of this drink, a rye-based number that draws comparisons to both the Sazerac and Manhattan, he was speaking in context of the 1933 Cuban revolution. At the time, he sat in a hotel bar in Havana, “when each swallow was punctuated with bombs going off on the Prado.”",
    ingredients: [
      '2 ounces Rye',
      '¾ ounce Sweet Vermouth',
      '2 teaspoons Cherry Heering',
      '1 dash Absinthe'
    ],
    instructions: [
      'In a chilled coupe or cocktail glass, add a dash of absinthe. Roll around to coat and discard excess.',
      'Add all ingredients to a mixing glass.',
      'Add ice and stir well.',
      'Strain into prepared coupe or cocktail glass.',
      'Garnish with a brandied cherry.'
    ],
    garnish: [
      'Brandied cherry (preferably Luxardo)'
    ],
    scores: [7, 0, 2],
    music: {
      file: 'remember-the-maine.mp3',
      artist: 'The Soul Saints Orchestra',
      name: 'Santa’s Got a Bag of Soul'
    }
  },

  {
    name: 'Jack Rose',
    color: '#438270',
    illustration: 'the_jack_rose_illust.png',
    heading: 'You have a whimsical, literary sense about you. This boozy sour cocktail has your name written all over it.',
    img: 'jack_rose.png',
    description: "Like so many cocktails, the Jack Rose is embodied by the colorful characters who sipped it — from prohibition-era gangsters, to author John Steinbeck, to Hemingway’s wounded, languishing narrator in “The Sun Also Rises”. The drink is a sour made from apple brandy — “applejack” as it was known then — and it remains a simple but solid addition to the canon.",
    ingredients: [
      '1 ounce fresh lemon juice',
      '½ ounce Grenadine',
      '2 ounces Applejack'
    ],
    instructions: [
      'Shake all ingredients well with ice.',
      'Strain into a cocktail glass or serve over ice.'
    ],
    scores: [2, 2, 5],
    music: {
      file: 'jack-rose.mp3',
      artist: 'Esquivel',
      name: 'Jingle Bells'
    }
  },

  // // {
  // //   name: 'The Last Word',
  // //   illustration: 'the-last-word_illust.png',
  // //   heading: 'You are positively rakish, sexy and swashbuckling, may we recommend...',
  // //   img: 'placeholder.png',
  // //   color: '#8C8E49',
  // //   description: 'The Last Word is a gin-based prohibition-era cocktail originally developed at the Detroit Athletic Club. While the drink eventually fell out of favor, it has recently enjoyed a renewed popularity after being rediscovered as a cult hit in the Seattle area by bartender Murray Stenson during his tenure at the Zig Zag Café.',
  // //   ingredients: [
  // //     '¾ ounce gin',
  // //     '¾ ounce marachino liqueur',
  // //     '¾ ounce green Chartreuse',
  // //     '¾ ounce line juice'
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
  //   file: 'last-word.mp3',
  //   artist: ,
  //   name:
  // }
  // // },

  {
    name: 'Paper Plane',
    illustration: 'paper_plane_illust.png',
    heading: "You’re a smooth operator with swagger and style. This confident, young cocktail is the perfect holiday wingman.",
    img: 'paper_plane.png',
    color: '#385A24',
    description: "With four equal parts bourbon, aperol, amaro, and lemon juice — this <em>aperitivo</em> is a cinch to make and a pleasure to drink. If you like sour-forward cocktails, you’ll find this drink immediately likeable. And yes, its name is a reference to MIA’s hit song “Paper Planes.”",
    ingredients: [
      '¾ ounces Bourbon',
      '¾ ounces Aperol',
      '¾ ounces Amaro Nonino',
      '¾ ounces lemon juice'
    ],
    instructions: [
      'Add all ingredients to a shaker and fill with ice.',
      'Shake, and strain into a coupe glass.'
    ],
    scores: [5, 1, 7],
    music: {
      file: 'paper-plane.mp3',
      artist: 'RUN DMC',
      name: 'Christmas in Hollis'
    }
  },

  {
    name: 'East Side',
    illustration: 'east_side_illust.png',
    heading: "You shake up a scene like Al Capone with a Tommy Gun. This cocktail is flamboyant, fruity, and full-on gangster.",
    img: 'east_side.png',
    color: '#243C56',
    description: "The gin that gangsters smuggled into the South Side of Chicago had a harsh bite, requiring cocktails with sweeter mixers than their North Side counterparts. At least that’s the story surrounding Al Capone and his alleged drink of choice — the South Side — a gin-based number with lime juice, simple syrup, and sprigs of mint. The East Side does something similar but with the added brightness of St. Germain and cucumber.",
    ingredients: [
      '2 ounces Plymouth Gin',
      '1 ounce St Germain',
      '¾ ounce Fresh lime juice'
    ],
    instructions: [
      'Add several mint leaves (no stems) and several cucumber slices into a shaker tin, along with the lime and simple syrup, then muddle for several seconds.',
      'Add the gin and a generous amount of ice.',
      'Shake vigorously and strain with a Hawthorn strainer into a chilled coupe and garnish with a thin cucumber slice (if it is too thick, it will not float on top, but you can also slice the cucumber to sit on the side of the glass).'
    ],
    garnish: [
      '2 cucumber slices',
      '1 pinch mint'
    ],
    scores: [3, 2, 7],
    music: {
      file: 'east-side.mp3',
      artist: 'El Vez',
      name: 'Sleigh Ride'
    }
  },

  {
    name: 'Oaxaca Old Fashioned',
    illustration: 'oaxaca_old_fashioned_illust.png',
    heading: "You aren’t afraid to send up an old tradition with sophistication and style. This smokey cocktail nods to the past even as it winks to the future.",
    img: 'oaxaca_old_fashioned.png',
    color: '#6B3C1D',
    description: 'Swap whiskey with tequila and mezcal for this smokey and strong yet subtly balanced South-of-the-Border riff on an old classic. Invented by Philip Ward in the East Village in 2007, the instant popularity of the Oaxaca Old Fashioned helped lead to a resurgence in cocktails featuring Mexican spirits.',
    ingredients: [
      '1½ ounces Reposado Tequila',
      '½ ounce Mezcal',
      '1 teaspoon agave nectar',
      '1 dash Angostura bitters'
    ],
    instructions: [
      'Combine liquids in a cocktail shaker with a generous handful of ice. Stir until well chilled.',
      'Hold a lighted match over drink in one hand and orange peel in other hand, with the skin facing flame and about and inch away. Carefully and quickly squeeze orange peel until oils spark.'
    ],
    garnish: [
      'Strip of orange peel with pith, once inch wide'
    ],
    scores: [8, 4, 0],
    music: {
      file: 'oaxaca.mp3',
      artist: 'The Ventures',
      name: 'Frosty the Snowman'
    }
  },

  {
    name: 'Blood and Sand',
    illustration: 'blood_and_sand_illust.png',
    heading: 'Like a victorious matador, you are rakish, sexy, and swashbuckling. Equal parts fruity and smoky, this potent cocktail will have you seeing red and taking risks.',
    img: 'blood_and_sand.png',
    color: '#A4264D',
    description: "Rudolph Valentino, known as “The Latin Lover,” was a star and sex symbol of the silent film era. While his 1922 bullfighter movie “Blood and Sand” has not stood the test of time, the dashing drink sure has.",
    ingredients: [
      '¾ ounces The Glenrothes Select',
      'Reserve Single Malt Scotch Whisky',
      '¾ ounces Sweet Vermouth',
      '¾ ounces Cherry Heering',
      '¾ ounces orange juice'
    ],
    instructions: [
      'Add all the ingredients to a shaker and fill with ice.',
      'Shake, and strain into a chilled coupe or cocktail glass.',
      'Garnish with an orange peel.'
    ],
    garnish: [
      'orange peel'
    ],
    scores: [5, 8, 5],
    music: {
      file: 'blood-and-sand.mp3',
      artist: 'Los Straitjackets',
      name: 'Feliz Navidad'
    }
  },

  {
    name: 'Old Cuban',
    illustration: 'old_cuban_illust.png',
    heading: 'You are a modern-day adventurer — charming, brave  and partial to aged rum. Here’s a bubbly drink to refresh your soul and loosen your tongue.',
    img: 'old_cuban.png',
    color: '#AF5012',
    description: 'A sophisticated cousin to the mojito, the Old Cuban is the creation of modern cocktail master Audry Saunders. Its name conjures up the classic Hemingway tale “The Old Man and the Sea”, in which an old Cuban fisherman wrestles with a legendary marlin for days on end — a toiling, painful, delirious battle — and when the marlin is finally caught, the fisherman must watch in horror as his prize is eaten by sharks. Surely time for a drink, no?',
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
      'Strain into a coupe or cocktail glass and add Champagne.',
      'With a knife, slit the lime slice halfway through and pierce it with the mint sprig. Perch it on the rim of the glass.'
    ],
    garnish: [
      'lime slice',
      'mint sprig'
    ],
    scores: [5, 1, 9],
    music: {
      file: 'old-cuban.mp3',
      artist: 'The Youngsters',
      name: 'Christmas in Jail'
    }
  },

  {
    name: 'Three Dots and a Dash',
    illustration: 'three_dots_and_a_dash_illust.png',
    heading: 'You bring adventure, glory, and a little mystery to the mix. After a few of these rummy drinks you may need to send out three dots, three dashes and three more dots.',
    img: 'three_dots_and_a_dash.png',
    color: '#D56F22',
    description: 'A strong but dangerously drinkable tiki drink created by legendary Don the Beachcomber after World War II, this cocktail gets its namesake from the morse code signal for “Victory”: three dots and a dash. Its name is cleverly reflected in the garnish of three maraschino cherries on a cocktail pick (the dots) and one pineapple frond (the dash).',
    ingredients: [
      '1 ounce Rhum Agricole (preferably Duquesne Agricole Eleve Sous Bois)',
      '1 ounce Rum, Guyanese (preferably El Dorado 5 Year)',
      '½ ounce dry Curaçao',
      '½ ounce Falernum',
      '¼ ounce St. Elizabeth Allspice Dram',
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
      file: 'three-dots-and-a-dash.mp3',
      artist: 'Lynett Kaopuiki Paglinawan',
      name: 'Mele Kalikimaka la `Oe'
    }
  },

  {
    name: 'Fog Cutter',
    illustration: 'fog_cutter_illust.png',
    heading: 'You are never one to let the fog of today block hopes for tomorrow. Fruity, fun, and bright — let this liquid sunshine guide the way.',
    img: 'fog_cutter.png',
    color: '#78767B',
    description: 'In the ’50s and ’60s there were two Tiki Bar gods in California: Hollywood’s Donn Beach (“Don the Beachcomber”) and Oakland’s Victor Bergeron (“Trader Vic”). Fierce rivals, their followings each lay claim to classics like the Mai Tai, the Zombie, and every variation of punch you can imagine. The Fog-Cutter is a lesser-known Tiki drink from Trader Vic, but it’s not to be underestimated. A flamboyant combination of fruity flavor and boozey pep—it’s your island vacation in a glass.',
    ingredients: [
      '½ ounce fresh lemon juice',
      '1½ ounce fresh orange juice',
      '½ ounce Orgeat',
      '1 ounce Pisco',
      '½ ounce Gin',
      '2 ounces blended light aged rum',
      '½ ounce Oloroso sherry'
    ],
    instructions: [
      'Fill a cocktail shaker with ice.',
      'Add the white rum, gin, brandy, orange and lemon juices and orgeat and shake well.',
      'Strain into an ice-filled highball glass and float the Amontillado sherry on top.',
      'Garnish with the mint sprig.'
    ],
    garnish: [
      'mint sprig'
    ],
    scores: [7, 4, 5],
    music: {
      file: 'fog-cutter.mp3',
      artist: 'Strange Manor',
      name: 'Run Rude Rudolph'
    }
  },

  {
    name: 'Zombie',
    illustration: 'zombie_illust.png',
    heading: 'Zombies don’t phase you, and memory won’t serve you. This fruity drink hints at a hangover to come... but what a way to go.',
    img: 'zombie.png',
    color: '#2C668E',
    description: 'A hungover customer walked into the legendary Don the Beachcomber’s tiki bar and asked for something to help him through his business travels. Several days later, the customer returned rubbing his head, complaining that Don’s concoction had turned him into a zombie for the rest of the trip. And thus, bleary-eyed and troublemaking, the Zombie was born. The drink’s fun and fruity tenor belies a potency that has forced Beachcomber restaurants to instill a two-Zombie-per-person limit.',
    ingredients: [
      '¾ ounce fresh lime juice',
      '½ ounce Falernum',
      '1½ ounces each gold Puerto Rican rum and gold or dark Jamaican Rum',
      '1 ounce 151-proof Lemon Hard Demerara Rum',
      '1 teaspoon Grenadine',
      '6 drops Pernod',
      '1 dash of Angostura bitters',
      '½ ounce Don’s mix (2 parts grapefruit juice to 1 part cinnamon-infused sugar syrup blended at high speed with 6 ounces (¾ cup) crushed ice for no more than 5 seconds)',
      'Ice cubes to fill'
    ],
    instructions: [
      'Mix ingredients other than the 151 in a shaker with ice.',
      'Pour into glass and top with the high-proof rum.'
    ],
    garnish: [
      '1 mint sprig'
    ],
    scores: [9, 8, 8],
    music: {
      file: 'zombie.mp3',
      artist: 'Lord Jellicoe',
      name: 'Zombie Jamboree'
    }
  },

  {
    name: 'Hot Apple Pie',
    heading: 'Your ideal holiday is inside by the fire, swapping stories with loved ones (between naps, that is). This warm and fruity cocktail will ease you on your way to slumberland.',
    illustration: 'hot_apple_pie_illust.png',
    img: 'hot_apple_pie.png',
    color: '#8C171F',
    description: 'Winter nights are always better with a steaming mug in your hands. But if you really want to “treat yo self,” go for the Hot Apple Pie. It calls for Tuaca, a vanilla-citrus Italian liquor that dates back 500 years, which makes this apple-cinnamon treat a little more interesting than that splash of whiskey in your cocoa.',
    ingredients: [
      '2 ounces Tuaca',
      'Hot apple cider',
      'Whipped cream'
    ],
    instructions: [
      'Pour the Tuaca in an Irish coffee glass.',
      'Fill with hot apple cider.',
      'Top with whipped cream.',
      'Garnish with a cinnamon stick.'
    ],
    garnish: [
      'Cinnamon stick'
    ],
    scores: [3, 0, 8],
    music: {
      file: 'hot-apple-pie.mp3',
      artist: 'The Jive Turkeys',
      name: 'Get Down Santa'
    }
  }
];

export const beer = {
  name: "Cheap Beer",
  heading: "You are a rock and roll party animal. You already know what to drink...",
  img: 'cheap_beer.svg',
  diff: true,
  color: '#6A3661',
  description: "Cheap beer doesn’t mean you are cheap. You are a priceless inscrutable artifact of dive bars; a life-saving, rule breaking anti-hero. When work is done, it is done. If someone tries to strike up a conversation about politics, you only respond in pig latin. Cheap beer allows you to leave the house and be in it for the long haul. You can drink all night, stay up till dawn, tell a few jokes of questionable integrity, hit four parties and still manage to hold back someone’s hair at the porcelain throne.",
  ingredients: ['1 can'],
  instructions: ['Open can.'],
  illustration: 'beer_illust.png',
  music: {
    file: 'beer.mp3',
    artist: 'Twisted Sister',
    name: 'Oh Come All Ye Faithful'
  }
};
