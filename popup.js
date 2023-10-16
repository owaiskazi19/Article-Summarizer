const articleContent = // Get the content of the article;
const API_KEY = '';

fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
    method: 'POST',
    headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        prompt: `Summarize the following article: ${articleContent}`,
        max_tokens: 150 // Adjust to control summary length
    })
})
.then(response => response.json())
.then(data => {
    const summary = data.choices[0].text;
    console.log(summary);
    // Display the summary in your extension UI
});
