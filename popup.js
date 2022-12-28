const botTokenField = document.getElementById("bot-token");

// get current storage id from synced local storage, and set the value of token field.
chrome.storage.sync.get(["bot_token"], (tokenObj) => {
  console.log(tokenObj.bot_token);
  botTokenField.value = tokenObj.bot_token;
});

// event listener to update token id.
botTokenField.addEventListener("focusout", () => {
  chrome.storage.sync.set({ bot_token: `${botTokenField.value}` }, () => {
    console.log(`Value set to : ${botTokenField.value}`);
  });
});
