function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let userPrompt = document.querySelector("#user-prompt");
  let apiKey = "e6893b7t5a0c3d944e8aabao5ca712f3";
  let prompt = `Generate a poem about ${userPrompt.value}`;
  let context =
    "You are a classic english poet and poetry expert who writes beautiful 4 lines poems. Each line must be separated and end with <br />. You love to write short and funny peoms for people to enjoy. Make sure to follow user prompt excactly. Sign it with <strong>SheCodes AI</strong> and separate the signature with <br />.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
