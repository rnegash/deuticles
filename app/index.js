function saveNewItem(article, noun) {
  const getWords = browser.storage.sync.get('list')
  const setUpdatedList = browser.storage.sync.set

  getWords.then((items, err) => {
    const { list: history } = items
    const list = {
        [noun]: {
          "article": article,
          "noun": noun,
        },
        ...history
      }
    setUpdatedList({ list })
    console.log(list)
  })
}

const addButton = document.getElementById('add')

addButton.addEventListener(
  'click',
  (e) => {
    const article = document.getElementById('article').value
    const noun = document.getElementById('noun').value
    saveNewItem(article, noun)
    e.preventDefault()
  },
  false
)

document.getElementById('noun').addEventListener("keyup", event => {
    if(event.key !== "Enter") return; // Use `.key` instead.
    addButton.click(); // Things you want to do.
    event.preventDefault(); // No need to `return false;`.
});
