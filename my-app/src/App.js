// import logo from "./logo.svg";
import Tauschticket_Exporter_Logo from "./Tauschticket_Exporter_Logo.svg";
import facebook_logo from "./facebook_logo.svg";
import tiktok_logo from "./tiktok_logo.svg";
import instagram_logo from "./instagram_logo.svg";
import firstStep from "./_First_Step_.svg";
import "./App.css";
import Button from "@mui/material/Button";

import Textarea from "@mui/joy/Textarea";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> 
        */}
        <div className="header_page">
          <div className="header_page-navi">
            <a className="typography_header-page">What is it</a>
            <a className="typography_header-page">How to get Started</a>
            <a className="typography_header-page">Why Buchbaum ?</a>
          </div>
          <div className="header_page-logo">
            <img
              src={Tauschticket_Exporter_Logo}
              className="app_logo-tauschticket"
              alt="logo_tauschticket"
            />
          </div>
        </div>
        <div className="header_description">
          <p className="typography_description roboto-light">
            Suspendisse augue tortor, eleifend nec lacus sit amet, sollicitudin
            tristique dui. Donec gravida feugiat egestas. Aenean lacinia lacinia
            urna et laoreet. Integer et tempus mi. Praesent elit enim, tincidunt
            quis condimentum vitae, dignissim sed nulla. Phasellus varius nec
            erat sed accumsan. Proin eget suscipit enim. Integer justo leo,
            sollicitudin vitae neque at, sodales placerat orci. Suspendisse ac
            turpis tortor. Etiam tempus tortor a elit maximus consectetur.
            Integer ullamcorper, dolor vel posuere dictum, lectus quam tincidunt
            dui, et sodales nibh dui ut purus.
          </p>
        </div>
        <div className="howToGetStarted_section">
          <h1 className="header-1_1 abel-regular">How to get started</h1>
          <div className="howToGetStarted_section-guide">
            <div className=" __carousel"></div>
            <div className="howToGetStarted_section-guide__stepByStep">
              <div className="step">
                <img src={firstStep}></img>
                <h3 className="typography_step">First Step</h3>
              </div>
              <p className="step__desсription"></p>
              <div className="step">
                <img></img>
                <h3 className="typography_step">Second Step</h3>
              </div>
              <p className="step__desсription"></p>
              <div className="step">
                <img></img>
                <h3 className="typography_step">Third Step</h3>
              </div>
              <p className="step__desсription"></p>
            </div>
          </div>
        </div>

        <div className="area-textfield">
          {/* <div className="area-textfield__buttton">
            <Button variant="outlined" disableElevation>
              Start parcing
            </Button>
          </div> */}
          <div className="area-textfield__input">
            <form
              className="area-textfield__input-form"
              onSubmit={(event) => {
                event.preventDefault();
                const input = event.target[0].value;
                // console.log(input, typeof input);

                //Function for verifying a HTML link
                const checkingHTMLRegex = function (input) {
                  const regExTauschticket = /<title>Tauschticket: Homepage/;
                  // console.log(regExTauschticket.test(input));
                  const regEx =
                    /<[a-z]+\d?(\s+[\w-]+=("[^"]*"|'[^']*'))*\s*\/?>|&#?\w+;/i;

                  if (regEx.test(input) && regExTauschticket.test(input)) {
                    console.log(input);
                  }
                  if (regEx.test(input) && !regExTauschticket.test(input)) {
                    alert("Your HTML is not from Tauschticket Projekt");
                  }
                  if (!regEx.test(input)) {
                    alert("Your input is not HTML");
                  }
                };
                checkingHTMLRegex(input);

                ////////////////////////////////////////////
                //////Parsing an inserted HTML////////////
                ////////////////////////////////////////////
                const bookObjectArray = [];

                //Manual saving of Data//
                const parser = new DOMParser();
                const parsedDocument = parser.parseFromString(
                  input,
                  "text/html"
                );
                console.log(`Here is parsed HTML:`, parsedDocument);
                const parsedDocumentAllBooksRaw =
                  parsedDocument.getElementsByClassName("category_space2");
                console.log(parsedDocumentAllBooksRaw);

                //for-each loop
                for (let i = 0; i < parsedDocumentAllBooksRaw.length; i++) {
                  //Object//
                  const bookObject = {
                    book: {
                      title: "",
                      authors: [],
                      publishDate: "",
                      description: "",
                      imageUrl: "",
                      isbn: "",
                    },
                    comment: "",
                    price: 0,
                  };
                  /////Manual saving of Data for 1 Book/////

                  //Book Title
                  const bookTitle = parsedDocumentAllBooksRaw[
                    i
                  ].getElementsByClassName("category_item_link2")[0].innerText;
                  console.log(bookTitle);
                  //Author name (already plitted in Array)

                  const bookAuthor = parsedDocumentAllBooksRaw[i]
                    .getElementsByClassName("category_item_text")[0]
                    .textContent.split(`, `);
                  console.log(bookAuthor);

                  //Publish Date & Comment//

                  const bookDateArray = parsedDocumentAllBooksRaw[i]
                    .getElementsByClassName("category_item_text")[1]
                    .textContent.split(` `);
                  //getting braces off
                  const regexStringDate = /\(([^()]*)\)/g;
                  bookDateArray[1] = [
                    ...bookDateArray[1].matchAll(regexStringDate),
                  ].flat()[1];
                  //Comment and Publish Date Strings//
                  const bookComment = bookDateArray[0];
                  const bookDate = bookDateArray[1];
                  // console.log(bookDateArray);
                  // console.log(bookComment, bookDate);

                  //Describtion//

                  const bookDescribtion =
                    parsedDocumentAllBooksRaw[i]
                      .getElementsByClassName("category_item_comment_3")[0]
                      .textContent.trim()
                      .split(`\n`)
                      .join(` `)
                      .split(`...`)[0]
                      .trim() + ` ...`;
                  // console.log(bookDescribtion);

                  //Image & ISBN//

                  //ImageURL
                  const regexbookImage = /<img[^>]*src="([^"]+)"[^>]*>/g;
                  const bookImageArray =
                    parsedDocumentAllBooksRaw[i].getElementsByClassName(
                      "category_item_pic3"
                    )[0].innerHTML;
                  const bookImageSrcAtr = [
                    ...bookImageArray.matchAll(regexbookImage),
                  ].flat()[1];
                  const bookSrc = `https:` + bookImageSrcAtr;

                  //ISBN
                  let bookISBN;
                  const regexISBN = /([0-9]{13}(?![0-9]))/g;
                  const checkISBN = [...bookSrc.matchAll(regexISBN)].flat()[0];
                  if (typeof checkISBN === `string`) {
                    console.log("ISBN EXIST");
                    bookISBN = checkISBN;
                  } else {
                    bookISBN = ``;
                    console.log("ISBN doesnt exist");
                  }

                  //price//
                  const bookPrice = parseInt(
                    parsedDocumentAllBooksRaw[i].getElementsByClassName(
                      "category_item_tickets"
                    )[0].innerText
                  );
                  // console.log(bookPrice);

                  //INSERTING DATA IN OBJECT//

                  bookObject.book.title = bookTitle;
                  //Adding Authors//
                  for (let i = 0; i < bookAuthor.length; i++) {
                    bookObject.book.authors.push({
                      authorFullName: bookAuthor[i],
                      uuid: "",
                    });
                  }
                  bookObject.book.publishDate = bookDate;
                  bookObject.book.description = bookDescribtion;
                  bookObject.book.imageUrl = bookSrc;
                  bookObject.book.isbn = bookISBN;
                  bookObject.comment = bookComment;
                  bookObject.price = bookPrice;

                  console.log(bookObject);

                  bookObjectArray.push(bookObject);
                }
                console.log(bookObjectArray);

                //using localStorage for saving a bookArray
                localStorage.setItem(
                  "bookObjectArray",
                  JSON.stringify(bookObjectArray)
                );
                // localStorage.clear();
              }}
            >
              <Textarea
                placeholder="Paste your copied HTML code to parse it!"
                required
                sx={{ mb: 1 }}
                maxRows={14}
              />
              <div className="area-textfield__buttons">
                <Button type="submit">Start Parcing</Button>
                <Button
                  className="button_download_json"
                  variant="outlined"
                  onClick={() => {
                    //using localStorage to get bookArray from form-Object
                    const bookJSON = localStorage.getItem("bookObjectArray");
                    console.log("Here is your JSON-File:", bookJSON);

                    //downloading of json file//

                    let dataStr =
                      "data:text/json;charset=utf-8," +
                      encodeURIComponent(bookJSON);
                    let downloadAnchorNode = document.createElement(`a`);
                    downloadAnchorNode.setAttribute("href", dataStr);
                    downloadAnchorNode.setAttribute(
                      "download",
                      "JSON_books.json"
                    );
                    downloadAnchorNode.click();
                    downloadAnchorNode.remove();

                    //blob-2
                    // const myRequest = new Request("JSON_book.json");
                    // fetch(myRequest)
                    //   .then((response) => response.blob())
                    //   .then((myBlob) => {
                    //     const objectURL = URL.createObjectURL(myBlob);
                    //     console.log(objectURL);
                    //     buttonJSON.src = objectURL;
                    //   });
                    // //blob

                    // const text = "Hello World";
                    // const blob = new Blob([text], {
                    //   type: `text/plain
                    //   `,
                    // });
                    // console.log(blob);
                    // //creating url
                    // const url = URL.createObjectURL(blob);
                    // console.log(url);

                    // //setting as href
                    // const buttonJSON =
                    //   document.getElementsByClassName(`button_download_json`)[0];
                    // console.log(buttonJSON);
                    // buttonJSON.href = url;
                    // buttonJSON.download = `JSON-File of Books.json`;
                  }}
                >
                  GET JSON
                </Button>
              </div>
            </form>

            {/* <Textarea
              minRows={2}
              size="lg"
              variant="outlined"
              placeholder="Enter copied Data"
            /> */}
          </div>
        </div>
        <div className="footer">
          <h1 className="header-1_2 abel-regular">Why Buchbaum ?</h1>
          <div className="footer_description">
            <p className="typography_description roboto-light">
              Suspendisse augue tortor, eleifend nec lacus sit amet,
              sollicitudin tristique dui. Donec gravida feugiat egestas. Aenean
              lacinia lacinia urna et laoreet. Integer et tempus mi. Praesent
              elit enim, tincidunt quis condimentum vitae, dignissim sed nulla.
              Phasellus varius nec erat sed accumsan. Proin eget suscipit enim.
              Integer justo leo, sollicitudin vitae neque at, sodales placerat
              orci. Suspendisse ac turpis tortor. Etiam tempus tortor a elit
              maximus consectetur. Integer ullamcorper, dolor vel posuere
              dictum, lectus quam tincidunt dui, et sodales nibh dui ut purus.
            </p>
          </div>
        </div>
        <div className="links-section">
          <div className="links-section_logos">
            <img
              src={facebook_logo}
              className="links-section_logos-facebook"
            ></img>
            <img src={instagram_logo} className="links-section_logo"></img>
            <img src={tiktok_logo} className="links-section_logo"></img>
          </div>
          <p className="typography_links-section">
            2024 Tauschticket, Copyright All rights reserved
          </p>
        </div>
        {/* <p>And now</p> */}
      </header>
      {/* <body>
        <Button variant="outlined" disableElevation>
          Hello World
        </Button>
      </body> */}
    </div>
  );
}

export default App;
