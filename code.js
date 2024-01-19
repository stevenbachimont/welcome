const commands = String.raw`samurai@internal-cdprojektred.com/:~ cd HAX
samurai@internal-cdprojektred.com/HAX/:~ ls`;



let blink = document.querySelector('.blink');
const code = document.querySelector('.code');

const RandomNumber = (min, max) => {
    return Math.floor(Math.random() * max) + min
};

const Delay = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time))
};

const ResetTerminal = () => {
    code.innerHTML = '<span class="blink">█</span>';
    blink = document.querySelector('.blink');
};

const RenderString = characters => {
    blink.insertAdjacentHTML('beforeBegin', characters);
};

const TypeString = async characters => {
    for(const character of characters.split('')) {
        await Delay(RandomNumber(100, 200));
        RenderString(character);
    }
}

const DrawLines = async ( characters, min = 50, max = 500 ) => {
    for(const line of characters.split('\n')) {
        await Delay(RandomNumber(min, max));
        RenderString(`${line}\n`);
    }
}

const DrawCommands = async commands => {
    for( const line of commands.split('\n')){
        // Seperate the directory and the command
        const [currentDir, command] = line.split(':~ ');

        // Print the directory, type the command and finish with new line
        RenderString(`${currentDir}:~ `);
        await TypeString(command);
        RenderString('\n');
    }
}

// Start the code
(async()=> {
    await DrawCommands("slect your directory:~ cd HAX");
    await Delay(1000);
    RenderString("type your password:");
    await Delay(1000);
    RenderString("\n");
    await DrawCommands('sudo cd/HAX:~ node.js');
    await TypeString("\n\nstevenbachimont.com\n\n");
    await Delay(1000);
    await DrawCommands("slect your directory:~ cd HAX");
    await Delay(1000);
    RenderString("type your password:");
    await Delay(1000);
    RenderString("\n");
    await DrawCommands('sudo cd/HAX:~ node.js');
    await TypeString("\n\nstevenbachimont.com\n\n");
    await Delay(1000);
    await DrawCommands("slect your directory:~ cd HAX");
    await Delay(1000);
    RenderString("type your password:");
    await Delay(1000);
    RenderString("\n");
    await DrawCommands('sudo cd/HAX:~ node.js');
    await TypeString("\n\nstevenbachimont.com\n\n");
    await Delay(1000);

})();

