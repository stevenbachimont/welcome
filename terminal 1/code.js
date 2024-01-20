const commands1 = String.raw`stevenbachimont.com/:~ cd Dark Side`;
const commands2 = String.raw`stevenbachimont.com/Dark Side/:~ ls`;


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

    await Delay(500);
    RenderString("\n");
    await Delay(800);
    RenderString("\n");
    await Delay(500);
    RenderString("\n");
    await Delay(200);
    RenderString("\n");
    await Delay(500);
    RenderString("\n");
    await Delay(200);
    RenderString("\n");
    await Delay(500);
    RenderString("\n");
    await Delay(800);
    RenderString("\n");
    await DrawCommands("/:~ ssh stevenbachimont.com -p 8080");
    await Delay(1000);
    RenderString("stevenbachimont.com password:");
    await Delay(2000);
    RenderString("\n");
    await Delay(200);
    RenderString("\n");
    await DrawCommands(commands1);
    await Delay(500);
    RenderString("\n");
    await Delay(800);
    RenderString("\n");
    await DrawCommands(commands2);
    await Delay(2000);
    RenderString("\n");
    await Delay(200);
    RenderString("\n");
    RenderString('Click on the Dark side');
})();

