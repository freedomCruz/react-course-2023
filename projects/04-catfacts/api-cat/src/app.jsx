import { useEffect, useState } from 'react'

const CAT_FAC = 'https://catfact.ninja/fact'

export function App () {
  const [fact, setFact] = useState()
  const [imagUrl, setImgUrl] = useState()

  useEffect(() => {
    fetch(CAT_FAC)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }, [])

  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(' ', 3)
    const imagUrl = `https://cataas.com//cat/says/${firstWord}?fontSize=25&fontColor=yellow`
    setImgUrl(imagUrl)
    console.log(imagUrl)
  }, [fact])

  return (
    <main>
      <h1>App de gatitos lindos</h1>
      <p>{fact}</p>
      <img src={imagUrl} alt={`Image using the three first word of: ${fact}`} />
    </main>
  )
}
