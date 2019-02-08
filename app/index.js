
const getWords = browser.storage.sync.get('list')

function saveNewItem(item) {

  getWords.then((items, err) => {
    const article = "der"
    const noun = "tisch"
    const { list: history } = items
    console.log("items", history)
    const list = {
        [noun]: {
          "article": article,
          "noun": noun,
        },
        ...history
      }
    browser.storage.sync.set({ list })
    getWords.then(items => console.log(items))
  })

  // e.preventDefault();
}
saveNewItem()
// document.getElementById('add').addEventListener('click', saveNewWord)
