const getWords = browser.storage.sync.get('list')

getWords.then(list => {

  const myWords = list.list
  Object.keys(myWords).forEach(key => {
    const { article, noun } = myWords[key]
    const listElement = document.getElementById(checkEmpty(article))
    const li = document.createElement('li')
    const articleWithNoun = document.createTextNode(`${article} ${noun}`)
    li.appendChild(articleWithNoun)
    listElement.appendChild(li)
  })
})

const checkEmpty = art => (art === '' ? 'das' : art )
