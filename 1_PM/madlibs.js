/* In this task, make a madlibs templates story
using JS string template literals. In the story
variable, write out the template of your madlibs
using string variables in the place of certain
nouns, adjectives, and verbs */

/* Variables, i.e.


Change thses values to generate a different story
*/

const name = 'Marissa';
const noun1 = 'nightclub';
const noun2 = 'pset';
const job1 = 'plumber';
const adj1 = 'grimy';
const place = 'airport';
const adj2 = 'spiky'; 
const noun3 = 'tongue';
const verb1 = 'fuck';
const verb2 = 'ate';
const adverb = 'grumpily';

const story = `
Once upon a time there was a young princess named ${name}. She was trapped in a ${noun1} for her entire life and wasn't able to leave.
Her evil ${noun2} kept her trapped. One day, a fair ${job1} happened upon the ${noun1} when he was traveling through the ${adj1} ${place}.
He realized that the princess was trapped, so he asked her to let down her ${adj2} ${noun3} through the window so he could come ${verb1} her.
The ${job1} ${verb2} her and they rode off into the sunset. They lived ${adverb} ever after.
`;

console.log(story);
