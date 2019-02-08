
const getWords = browser.storage.sync.get('list')

function saveNewItem(item) {

  getWords.then((items, err) => {
    const article = "das"
    const noun = "boot"
    const list = [
      {
        "article": article,
        "noun": noun,
      },
      ...items.list
    ]
    browser.storage.sync.set({ list })
    getWords.then(items => console.log(items))
  })

  // e.preventDefault();
}
saveNewItem()
// document.getElementById('add').addEventListener('click', saveNewWord)
