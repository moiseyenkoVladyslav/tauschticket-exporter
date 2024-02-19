import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";

import Textarea from "@mui/joy/Textarea";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
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
                //////Parsing an inserted HTML//////
                ////////////////////////////////////////////

                /////Manual saving of Data for 1 Book/////
                const parser = new DOMParser();
                const parsedDocument = parser.parseFromString(
                  input,
                  "text/html"
                );
                console.log(`Here is parsed HTML:`, parsedDocument);

                //Book Title
                const bookTitle = parsedDocument.getElementsByClassName(
                  "category_item_link2"
                )[0].innerText;
                console.log(bookTitle);
                //Author name (already plitted in Array)

                const bookAuthor = parsedDocument
                  .getElementsByClassName("category_item_text")[0]
                  .textContent.split(`,`);
                console.log(bookAuthor);
                //Publish Date//
                const bookDate = parsedDocument
                  .getElementsByClassName("category_item_text")[1]
                  .textContent.split(` `);

                //getting braces off//
                const regexStringDate = /\(([^()]*)\)/g;
                bookDate[1] = [
                  ...bookDate[1].matchAll(regexStringDate),
                ].flat()[1];
                console.log(bookDate);
              }}
            >
              <Textarea
                placeholder="Paste your copied HTML code to parse it!"
                required
                sx={{ mb: 1 }}
                maxRows={16}
              />

              <Button type="submit">Start Parcing</Button>
            </form>
            {/* <Textarea
              minRows={2}
              size="lg"
              variant="outlined"
              placeholder="Enter copied Data"
            /> */}
          </div>
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
