export const questions = [
  {
    id: 'question-1',
    question: 'Have you been naughty or nice?',
    answers: [{
      name: 'Naughty',
      responses: ['Meow', '😼', "We'll make it a double then..." ],
      scores: [8, 4, 6], // [Badassness, Weirdness, Fun], out of 10
      beer: true
    }, {
      name: 'Red',
      responses: ["Hmm. Bartender's choice..."],
      scores: [2, 8, 2]
    }, {
      name: 'Nice',
      responses: ["Sounds good. We'll put some ice in your water..."],
      scores: [0, 0, 0]
    }],
    color: '#95801D',
    nextPage: 'question-2'
  },
  {
    id: 'question-2',
    question: 'My idea of a holiday party consists of',
    answers: [
      {
        name: 'Setting intentions and expressing gratitude.',
        responses: ["Mmm Hmm.", "Totally..."],
        scores: [0, 0, 0]
      },
      {
        name: 'Lots of sequins and screaming.',
        responses: ["Wooooooooooooooooo!", "Live hard die young. We've got just the drink for you..."],
        scores: [4, 2, 8]
      },
      {
        name: 'Is it still a party if I\'m asleep in bed?',
        responses: ["Ummm.", "I guess if you drank a few of these first..."],
        scores: [0, 6, 3],
        beer: true
      }
    ],
    color: '#555626',
    nextPage: 'question-3'
  },
  {
    id: 'question-3',
    question: 'What do you do at the first snow fall?',
    answers: [
      {
        name: 'Make a snow angel',
        responses: [""],
        scores: [0, 0, 2]
      },
      {
        name: 'Start a snowball fight',
        responses: ["Nice!", "Early bird gets the unsuspecting victim..."],
        scores: [5, 2, 9]
      },
      {
        name: 'Eww... snow!',
        responses: ["Huh.", "Different strokes I guess..."],
        scores: [0, 9, 2]
      },
      {
        name: 'Write my name...',
        responses: ["Wait.", "In the snow?", "Gross..."],
        scores: [9, 9, 0],
        beer: true
      }
    ],
    color: '#145446',
    nextPage: 'question-4'
  },
  {
    id: 'question-4',
    question: 'My ideal holiday meal is...',
    answers: [
      {
        name: 'ham.svg',
        responses: ["Solid.", "Dependable", "Classic..."],
        scores: [2, 0, 4]
      },
      {
        name: 'takeout.svg',
        responses: ["I feel ya.", "Burned one too many turkeys..."],
        scores: [5, 9, 2],
        beer: true
      },
      {
        name: 'drinks.svg',
        responses: ["Well that's convenient.", "We've got just the holiday meal for you..."],
        scores: [9, 5, 5]
      }
    ],
    color: '#B8021C',
    nextPage: 'result'
  }
];
