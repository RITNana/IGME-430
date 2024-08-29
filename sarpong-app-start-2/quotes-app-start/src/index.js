// HELPERS
// NOTE: You can test this in the browser console
const randomElement = array => {
  if (!array.length) throw new Error("Array is empty!");
  return array[Math.floor(Math.random() * array.length)];
}

// NOTE: How about implementing const getJsonXHR = (url, callback) => {...}
const getJsonXHR = (url, callback) => {
  // create a xhr object to interact with server
  const xhr = new XMLHttpRequest()

  // when the server loads in
  xhr.onload = () => {
    if (xhr.status == "404") { // if the status code is 404 (ERROR!)
      console.log(`NOT FOUND: ${url}`) // display message of url not found
      callback([{ content: `NOT FOUND: ${url}` }]) // display url not found for getting quote
      return // exit out of statement 
    }

    // create variable to return text received from the server
    const text = xhr.responseText
    // create a variable to edit our json file
    let json

    // convert the json string into an object 
    // if it doesnt work, catch the error and display the text in an array object
    try {
      json = JSON.parse(text)
    }

    catch (err) {
      console.log(`ERR: ${err}`)
      json = [{content: `Don't take any wooden nickels!`}]
    }
    // run the callback parameter containing the object
    finally{
      callback(json)
    }
    //  const json = JSON.parse(text)
   //   callback(json)
  }

// open the request
  xhr.open("GET", url)

  // send the request
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

// make references for the heading and quote from the card html
 const heading = document.querySelector('.text-white.text-2xl.font-bold.pb-2')
   const quote = document.querySelector(".text-gray-300.py-1")

   // url of the json file
const jsonUrl = "https://people.rit.edu/ns8363/IGME-430/sarpong-app-start-2/quotes-app-start/data/quote-random.php";

  const quoteComponent = json => {
    results.innerHTML = `${json.content} - <b>${json.author}</b>`
  }

// pass in the json variable as a param

// update the html with the author of the random quote
// update the html with the random quote
 const cardComponent = json => {
   heading.innerHTML = `${json.author}`
   quote.innerHTML = `<q><i>${json.content}</i></q>`
    }

//  randomButton.onclick = () => getJsonXHR(jsonUrl, quoteComponent)

// when the random button is clicked, call the getJsonXHR function
 randomButton.onclick = () => getJsonXHR(jsonUrl, cardComponent)





