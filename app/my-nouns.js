const getWords = browser.storage.sync.get('list')

getWords.then(list => {
  const listElement = document.getElementById('list')

  const myWords = list.list
  Object.keys(myWords).forEach(key => {
    const li = document.createElement('li')
    const { article, noun } = myWords[key]
    const articleWithNoun = document.createTextNode(`${article} ${noun}`)
    li.appendChild(articleWithNoun)
    listElement.appendChild(li)
  })
})
