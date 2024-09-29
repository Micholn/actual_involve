var ai = {} 

// OpenAI GPT 
const { Configuration, OpenAI } = require("openai");
const openai = new OpenAIApi(new Configuration({ apiKey: 'dfggujfgkffgbgg',}));
ai.sendMessage = function(io, db, room, username, message) {
    //Load chat history for this room 
    db.loadChatHistory(room, async (history) => {
        history = history.reverse();
        var messages = [];
        var charCount = 0;
        const MAX_MARS = 1000;
        for (message in history) {
            var user = "user";
            if (history[message].username == username) user = "assistant";
            messages.push({"role": user, "content": history[message].message});
            charCount += history[message].message.length;
            if (charCount > MAX_CHARS) break; 
        } 
        messages.push({"role": "system", "content": "You are a helpful assistant."});
        messages = messages.reverse();
        try {
            const response = await openai.createChatCompletion({
                model: "gpt-3.5-turbo",
                messages: messages,
            });
            const responseText = response.data.choices[0].messages.content;

            //send reply to room 
            data = { }
        }
    })
}