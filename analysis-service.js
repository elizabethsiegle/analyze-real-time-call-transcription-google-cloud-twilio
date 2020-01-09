const language = require("@google-cloud/language");

exports.classify = async (transcription) => {
    const client = new language.LanguageServiceClient();
    const document = {
        content: transcription,
        type: 'PLAIN_TEXT',
    };
    const [result] = await client.analyzeEntitySentiment({ document });
    const entities = result.entities;

    console.log(`Entities and sentiments:`);
    entities.forEach(entity => {
        console.log(`Name: ${entity.name}. Type: ${entity.type}. Score: ${entity.sentiment.score}. Magnitude: ${entity.sentiment.magnitude}`);
    });
}