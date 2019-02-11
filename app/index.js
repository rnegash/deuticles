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
const displayMyNouns = document.getElementById('show-list')

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

displayMyNouns.addEventListener(
  'click',
  (e) => {
    browser.tabs.create({url: '/my-nouns.html'})
    e.preventDefault()
  },
  false
)
