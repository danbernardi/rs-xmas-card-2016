import React from 'react';
import Ham from '../svgs/Ham';
import Takeout from '../svgs/Takeout';
import Drinks from '../svgs/Drinks';

export const questions = [
  {
    id: 'naughty',
    question: 'Have you been naughty or nice?',
    answers: [{
      name: 'Naughty',
      responses: ["We'll make it a double."],
      scores: [8, 4, 6], // [Badassness, Weirdness, Fun], out of 10
      beer: true
    }, {
      name: 'Middle',
      responses: ["Indecisive. Bartender's choice."],
      scores: [2, 8, 2]
    }, {
      name: 'Nice',
      responses: ["This cocktail should change that."],
      scores: [0, 0, 0]
    }],
    color: '#95801D'
  },
  {
    id: 'party',
    question: 'My idea of a holiday party consists of',
    answers: [
      {
        name: 'Setting intentions and expressing gratitude.',
        responses: ["Not sure we know any drink recipes with Kombucha.."],
        scores: [0, 0, 0]
      },
      {
        name: 'Lots of sequins and screaming.',
        responses: ["Wooooooooooooooooo!\nLive hard die young."],
        scores: [4, 2, 8],
        beer: true
      },
      {
        name: 'Is it still a party if I\'m asleep in bed?',
        responses: ["I guess if you drank a few of these first..."],
        scores: [0, 6, 3]
      }
    ],
    color: '#555626'
  },
  {
    id: 'snow',
    question: 'What do you do at the first snow fall?',
    answers: [
      {
        name: 'Make a snow angel',
        responses: ["How ⛄️🌲🌟 of you."],
        scores: [0, 0, 2]
      },
      {
        name: 'Start a snowball fight',
        responses: ["Playful...yet aggressive."],
        scores: [5, 2, 9],
        beer: true
      },
      {
        name: 'Eww... snow!',
        responses: ["Light on the ice?"],
        scores: [0, 9, 2]
      },
      {
        name: 'Write my name...',
        responses: ["In yellow? Chartreuse drinker?"],
        scores: [9, 9, 0]
      }
    ],
    color: '#145446'
  },
  {
    id: 'meal',
    question: 'My ideal holiday meal is...',
    answers: [
      {
        name: <Ham />,
        responses: ["Solid. Dependable\nClassic..."],
        scores: [2, 0, 4]
      },
      {
        name: <Takeout />,
        responses: ["Burned one too many turkeys? Something easy then..."],
        scores: [5, 9, 2]
      },
      {
        name: <Drinks />,
        responses: ["We've got just the holiday \"meal\" for you..."],
        scores: [9, 5, 5],
        beer: true
      }
    ],
    color: '#B8021C'
  }
];
