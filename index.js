const { stdin } = require("process");
const openai = require("./openai");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let voice = "en-US-AdamMultilingualNeural";
rl.question("Voice (leave blank for default): ", async function(output){
    if (output != "")
        voice = output;
    e();
});
e();
function e() {
    rl.question("\n\nText to Speech: ", async function(output){
        const filename = output.slice(0, 9)+"-"+Date.now().toString()+".mp3";
        await openai.textToSpeech(output, filename, voice);
        console.log("Saved to "+filename);
        e();
    });
}
// openai.textToSpeech("Actually I'm getting really lazy. Here's the end.");