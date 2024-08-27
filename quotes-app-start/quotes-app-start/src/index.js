// HELPERS
// NOTE: You can test this in the browser console
const randomElement = array => {
  if (!array.length) throw new Error("Array is empty!");
  return array[Math.floor(Math.random() * array.length)];
}

// NOTE: How about implementing const getJsonXHR = (url, callback) => {...}
const getJsonXHR = (url, callback) => {
  const xhr = new XMLHttpRequest()
  xhr.onload = () => {
    if (xhr.status == "404") {
      console.log(`NOT FOUND: ${url}`)
      callback([{ content: `NOT FOUND: ${url}` }])
      return
    }


    const text = xhr.responseText

    let json

    try {
      json = JSON.parse(text)
    }

    catch (err) {
      console.log(`ERR: ${err}`)
      json = [{content: `Don't take any wooden nickels!`}]
    }

    finally{
      callback(json)
    }
    //  const json = JSON.parse(text)
   // callback(json)
  }

  xhr.open("GET", url)
  xhr.send()
}
// MAIN
// Note: The page is already loaded (that's what <script defer ...> does) 
// ... so go to town!
// ... get a reference to "random" button
const randomButton = document.querySelector("#btn-random")
// ... get a reference to "results" <div>
const results = document.querySelector("#results")
// ... and so on
const jsonUrl = "data/quotes-data.csv";

const quoteComponent = json => {
  results.innerHTML = randomElement(json).content
}

randomButton.onclick = () => getJsonXHR(jsonUrl, quoteComponent)



