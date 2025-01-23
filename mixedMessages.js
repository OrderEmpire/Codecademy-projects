import readline from 'node:readline';

// Create & store all the message components.
const mathStudents = ['Christopher', 'Leo', 'Tony', 'Cameron', 'Kasha', 'Naya', 'Cooper', 'Yushef', 'Mr. Kermode'];
const verb = ['is eating', 'is LOCKED IN!!!', 'is playing Minecraft', 'is plotting something', 'is brainrotting others', 'is thinking he/she is Aizen'];
const adjective = ['Deliciously', 'Enjoyably', 'Seriously', 'Devious', 'Intentionally'];
const secretMessage = ['Self-improvement', 'Escape the Matrix', 'Skibidi Toilet', 'Welcome to my Soul Society'];

// Select random messages in each components.
const randomMessages = (array) => {
    return array[Math.floor(Math.random() * array.length)];
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
// Displayed the user each time they run the program.
rl.question(`What's your name? `, (userName)=> {
    const getStudents = randomMessages(mathStudents);
    const getVerb = randomMessages(verb);
    const getAdj = randomMessages(adjective);
    const getMessage = randomMessages(secretMessage);

    if (Math.floor(Math.random() * 4) >= 3) {
        console.log(`${userName}: ${getStudents} ${getVerb} ${getAdj}. | ${getMessage}`);
    } else {
        console.log(`${userName}: ${getStudents} ${getVerb} ${getAdj}.`);
    }
    rl.close();
});