const messageGenerator = () => {
    const noun = ['You', 'Him', 'Her', 'They', 'That guy', 'That girl'];
    const verb = ['is learning', 'is working out', 'are grinding', 'is studying'];
    const phrase = ['Self-improvement is the best', 'Rewards to those who stay last', 'Be a sigma and escape the matrix.'];
    const secret = ['Make $10000/month', 'Wake up at 7 AM', 'The 1% group', 'Aizen Kosuke'];

    const randomizeMessage = (array) => {
        return array[Math.floor(Math.random() * array.length)];
    }

    let printNoun = randomizeMessage(noun);
    let printVerb = randomizeMessage(verb);
    let printPhrase = randomizeMessage(phrase);
    let printSecret = randomizeMessage(secret);

    if (Math.floor(Math.random() * 1) === 1) {
        return `${printNoun} ${printVerb}. ${printPhrase} ---- ${printSecret}`;
    } else {
        return `${printNoun} ${printVerb}. ${printPhrase}.`;
    }
}

console.log(messageGenerator());