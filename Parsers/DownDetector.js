/*
activation_example:!down Netflix
regex:(!down|!downdetector)
flags:gmi
*/

var sentence = current.text.replace(/!down/gmi, "").trim().toUpperCase();
if (sentence == '') {
    new x_snc_slackerbot.Slacker().send_chat(current, ':upside_down_face: I can\'t read your mind! Gimme a site name to search for!', true);
} else {
    //new x_snc_slackerbot.Slacker().send_chat(current, sentence.split(' ').join(' :clap: '), false);
    var downRequest = new x_snc_slackerbot.Slacker().send_chat(current, 'https://downdetector.com/status/' + escape(sentence), true);
    downRequest;
}
