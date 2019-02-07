
const getWords = browser.storage.sync.get('stuff')

function saveNewWord(e) {
  const article = "das"
  const noun = "boot"

    browser.storage.sync.set({
      "stuff": {
         [article]: noun,
      }
    getWords.then(console.log)

  })

  e.preventDefault();
}

document.getElementById('add').addEventListener('click', saveNewWord)
