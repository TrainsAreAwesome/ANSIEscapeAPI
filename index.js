export let printProsscedString = (text, continueWithoutEnding) => { //function you run when calling the api, if continueWithoutEnding then the commands arnt told to stop, like ever (try it out)
    if(!continueWithoutEnding){
        text += "\x1b[0m";}
    console.log(text);
}
export let getProsssedString = (text, continueWithoutEnding) => {  //same as printProsscedText but returns the prossced string instead of printing it
    if(!continueWithoutEnding){
        text += "\x1b[0m";}
    return text
}
//misc
export let errorNoise = () => {
    console.log("\x07")
}
//text formating
export let reset = "\x1b[0m";
export let bold = "\x1b[1m";
export let dim = "\x1b[2m";
export let italic = "\x1b[3m";
export let underline = "\x1b[4m";
export let slowBlink = "\x1b[5m"; //slowBlink and rapidBlink are the same in windows terminal
export let rapidBlink = "\x1b[6m";
export let invert = "\x1b[7m";
export let hide = "\x1b[8m";
export let strike = "\x1b[9m";
export let gothic = "\x1b[20m"; //doesnt work in windows terminal
export let doubleUnderline = "\x1b[21m";
export let unBoldAndDim = "\x1b[22m";
export let unItalic = "\x1b[23m";
export let unUnderline = "\x1b[24m";
export let unBlink = "\x1b[25m";
export let propSpacing = "\x1b[26m"; //used in teletext, added it anyway
export let unInvert = "\x1b[27m";
export let unHide = "\x1b[28m";
export let unStrike = "\x1b[29m";
export let unPropSpacing = "\x1b[50m"; //same as above commant above
export let framed = "\x1b[51m"; //doesnt work for me
export let encircled = "\x1b[52m"; //nor does this
export let overlined = "\x1b[53m";
export let unFramedAndEncircled = "\x1b[54m"; //couldnt test this as framed and encircled arnt supported in my terminal
export let unOverlined = "\x1b[55m";
export let superScript = "\x1b[73m"; //coulnt get this to work
export let subScript = "\x1b[74m"; //or this
export let unScript = "\x1b[75m"; //and therefor this
//whats an "ideogram" i dont know but im gonna add it anyway even though they dont work for my terminal
export let iUoRSL = "\x1b[60m"
export let iDUoDRSL = "\x1b[61m"
export let iOoLSL = "\x1b[62m"
export let iDOoDLSL = "\x1b[63m"
export let iSM = "\x1b[64m"
export let unIdeogram = "\x1b[65m"
//format colours
export let underlineColour = (r, g, b) => {
    return `\x1b[58;2;${r};${g};${b}m`; //doesnt work for me
}
export let defaultUnderlineColour = "\x1b[59m";
//4 bit text colours
export let black = "\x1b[30m";
export let red = "\x1b[31m";
export let green = "\x1b[32m";
export let yellow = "\x1b[33m";
export let blue = "\x1b[34m";
export let magenta = "\x1b[35m";
export let cyan = "\x1b[36m";
export let white = "\x1b[37m";
export let defaultTextColour = "\x1b[39m"; //reset text colour i think?
//4 bit bright text colours
export let brightBlack = "\x1b[90m"; //two below are the same as this
export let grey = "\x1b[90m"; 
export let gray = "\x1b[90m";
export let brightRed = "\x1b[91m";
export let brightGreen = "\x1b[92m";
export let brightYellow = "\x1b[93m";
export let brightBlue = "\x1b[94m";
export let brightMagenta = "\x1b[95m";
export let brightCyan = "\x1b[96m";
export let brightWhite = "\x1b[97m";
//4 bit bg colours
export let BGBlack = "\x1b[40m";
export let BGred = "\x1b[41m";
export let BGGreen = "\x1b[42m";
export let BGYellow = "\x1b[43m";
export let BGBlue = "\x1b[44m";
export let BGMagenta = "\x1b[45m";
export let BGCyan = "\x1b[46m";
export let BGWhite = "\x1b[47m";    
export let defaultBGColour = "\x1b[49m"
//4 bit bright bg colours
export let BGBrightBlack = "\x1b[100m"; //two below are the same as this
export let BGGrey = "\x1b[100m"; 
export let BGGray = "\x1b[100m";
export let BGBrightRed = "\x1b[101m";
export let BGBrightGreen = "\x1b[102m";
export let BGBrightYellow = "\x1b[103m";
export let BGBrightBlue = "\x1b[104m";
export let BGBrightMagenta = "\x1b[105m";
export let BGBrightCyan = "\x1b[106m";
export let BGBrightWhite = "\x1b[107m";

export let RGB = (r, g, b) => { //works out text rgb commands
    return `\x1b[38;2;${r};${g};${b}m`; //wow this looks awful
}
export let BRGB = (r, g, b) => { //works out backround rgb commands
    return `\x1b[48;2;${r};${g};${b}m`; //wow this also looks awful
}
console.log(errorNoise)