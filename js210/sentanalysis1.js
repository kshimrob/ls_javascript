/* 
1. Create two counters (positive and negative)
2. Break up the text into individual words
3. Go through each word in the text - if there is a match with positive, add, and vice versa.
4. Find the difference of pos and neg
5. Return statement
*/

var textExcerpt = 'To be or not to be-that is the question:\n' +
  'Whether \'tis nobler in the mind to suffer\n' +
  'The slings and arrows of outrageous fortune,\n' +
  'Or to take arms against a sea of troubles,\n' +
  'And, by opposing, end them. To die, to sleep-\n' +
  'No more-and by a sleep to say we end\n' +
  'The heartache and the thousand natural shocks\n' +
  'That flesh is heir to-\'tis a consummation\n' +
  'Devoutly to be wished. To die, to sleep-\n' +
  'To sleep, perchance to dream. Aye, there\'s the rub,\n' +
  'For in that sleep of death what dreams may come,\n' +
  'When we have shuffled off this mortal coil,\n' +
  'Must give us pause. There\'s the respect\n' +
  'That makes calamity of so long life.\n' +
  'For who would bear the whips and scorns of time,\n' +
  'Th\' oppressor\'s wrong, the proud man\'s contumely, [F: poor]\n' +
  'The pangs of despised love, the law’s delay, [F: disprized]\n' +
  'The insolence of office, and the spurns\n' +
  'That patient merit of the unworthy takes,\n' +
  'When he himself might his quietus make\n' +
  'With a bare bodkin? Who would fardels bear, [F: these Fardels]\n' +
  'To grunt and sweat under a weary life,\n' +
  'But that the dread of something after death,\n' +
  'The undiscovered country from whose bourn\n' +
  'No traveler returns, puzzles the will\n' +
  'And makes us rather bear those ills we have\n' +
  'Than fly to others that we know not of?\n' +
  'Thus conscience does make cowards of us all,\n' +
  'And thus the native hue of resolution\n' +
  'Is sicklied o\'er with the pale cast of thought,\n' +
  'And enterprises of great pitch and moment, [F: pith]\n' +
  'With this regard their currents turn awry, [F: away]\n' +
  'And lose the name of action.-Soft you now,\n' +
  'The fair Ophelia.-Nymph, in thy orisons\n' +
  'Be all my sins remembered';

  var positiveWords = ['fortune', 'dream', 'love', 'respect', 'patience', 'devout', 'noble', 'resolution'];
  var negativeWords = ['die', 'heartache', 'death', 'despise', 'scorn', 'weary', 'trouble', 'oppress'];

  function sentiment(text) {
    var positive = 0;
    var negative = 0;
    var positiveMatches = [];
    var negativeMatches = [];
    var sentiment;

    var words = textExcerpt.split(/\s/);

    for (var i = 0; i < words.length; i++) {
      var word = words[i].toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
      if (positiveWords.indexOf(word) > -1) {
        positive += 1;
        positiveMatches.push(word);
      } else if (negativeWords.indexOf(word) > -1) {
        negative += 1;
        negativeMatches.push(word);
      }
    }

    if ((positive - negative) > 0) {
      sentiment = 'Positive';
    } else if ((positive - negative) < 0) {
      sentiment = 'Negative';
    } else {
      sentiment = 'Neutral';
    }

    console.log('There are ' + positive + ' positive words in the text.');
    console.log('Positive sentiments: ' + positiveMatches.join(', '));

    console.log('There are ' + negative + ' negative words in the text.');
    console.log('Negative sentiments: ' + negativeMatches.join(', '));

    console.log('The sentiment of the text is ' + sentiment);
  }

  // not quite right with the final result...not all matches are being made

