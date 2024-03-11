// import logo from "./logo.svg";
import Tauschticket_Exporter_Logo from "./Tauschticket_Exporter_Logo.svg";
import facebook_logo from "./facebook_logo.svg";
import tiktok_logo from "./tiktok_logo.svg";
import instagram_logo from "./instagram_logo.svg";

import firstStep from "./_ButtonBase_.svg";
import secondStep from "./_Second_Step_.svg";
import thirdStep from "./_Third_Step_.svg";

import "./App.css";
import "./typography.css";
import "./Carousel.css";

import TriggerProgressBar from "./CircularProgressBar.js";
import Button from "@mui/material/Button";
import Textarea from "@mui/joy/Textarea";

import Carousel from "./Carousel";

import * as React from "react";
import PropTypes from "prop-types";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

function CircularWithValueLabel() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <CircularProgressWithLabel value={progress} />;
}
function CircularIndeterminate() {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
}

function App() {
  //Images
  const images = [
    "https://via.placeholder.com/800x400/ff5733/fff",
    "https://via.placeholder.com/800x400/33ff57/fff",
    "https://via.placeholder.com/800x400/5733ff/fff",
  ];
  //Disable and Enable buttons
  const [textareaValue, setTextareaValue] = React.useState("");
  const [buttonActive, setButtonActive] = React.useState(false);
  const [downloading, setDownloading] = React.useState(false);
  const [buttonActiveJSON, setButtonActiveJSON] = React.useState(false);

  const handleTextareaChange = (event) => {
    const value = event.target.value;
    setTextareaValue(value);
    setButtonActive(value.trim().length > 0); // Enable button if textarea is filled
  };

  const handleButtonClick = () => {
    // Handle button click action here

    setDownloading(true);

    setTimeout(() => {
      console.log(`Timeout worked`);
      setDownloading(false);
    }, 3000);

    setButtonActiveJSON(true);
  };

  // const [, setIsLoading] = useState(true);
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
            <div className=" howToGetStarted_section-guide__carousel">
              <Carousel images={images} />
            </div>
            <div className="howToGetStarted_section-guide__stepByStep">
              <div className="step">
                <img
                  src={firstStep}
                  className="howToGetStarted_section__icons"
                ></img>
                <h3 className="typography_step">First Step</h3>
              </div>
              <p className="step__desсription roboto-regular">
                In justo mi, pharetra in est bibendum, elementum fringilla est.
                Donec ut elementum augue, eget fringilla libero. Nulla a odio
                sem. Nunc erat est, consectetur at ipsum ac, luctus accumsan
                urna. Pellentesque ultricies metus vitae arcu ullamcorper
                faucibus. Nulla id dignissim eros. Suspendisse et ligula nec est
                pellentesque eleifend. Etiam volutpat feugiat dignissim.
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
              </p>
              <div className="step">
                <img
                  src={secondStep}
                  className="howToGetStarted_section__icons"
                ></img>
                <h3 className="typography_step">Second Step</h3>
              </div>
              <p className="step__desсription roboto-regular">
                In justo mi, pharetra in est bibendum, elementum fringilla est.
                Donec ut elementum augue, eget fringilla libero. Nulla a odio
                sem. Nunc erat est, consectetur at ipsum ac, luctus accumsan
                urna. Pellentesque ultricies metus vitae arcu ullamcorper
                faucibus. Nulla id dignissim eros. Suspendisse et ligula nec est
                pellentesque eleifend. Etiam volutpat feugiat dignissim.
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
              </p>
              <div className="step">
                <img
                  src={thirdStep}
                  className="howToGetStarted_section__icons"
                ></img>
                <h3 className="typography_step">Third Step</h3>
              </div>
              <p className="step__desсription roboto-regular">
                In justo mi, pharetra in est bibendum, elementum fringilla est.
                Donec ut elementum augue, eget fringilla libero. Nulla a odio
                sem. Nunc erat est, consectetur at ipsum ac, luctus accumsan
                urna. Pellentesque ultricies metus vitae arcu ullamcorper
                faucibus. Nulla id dignissim eros. Suspendisse et ligula nec est
                pellentesque eleifend. Etiam volutpat feugiat dignissim.
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
              </p>
            </div>
          </div>
        </div>

        <div className="area-textfield">
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
                onChange={handleTextareaChange}
                required
                sx={{ mb: 1 }}
                maxRows={14}
                minRows={4}
              />
              <div className="area-textfield__buttons">
                {/* hi HALLO*/}
                <div className="parcing-animation">
                  {/* <Button
        className={`button-toggle` + (index === false ? " display-none" : "")}
        onClick={handleClick}
      >
        Start Parcing
      </Button> */}
                  <Button
                    className="button-toggle"
                    onClick={handleButtonClick}
                    type="submit"
                    disabled={!buttonActive}
                  >
                    Start parcing
                  </Button>
                  <div className="parcing-animation_cirle">
                    {downloading && <CircularIndeterminate />}
                  </div>
                </div>

                <Button
                  className="button_download_json"
                  variant="outlined"
                  disabled={!buttonActiveJSON}
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

                    //CLEANING LOCAL STORAGE and disable Button//
                    localStorage.clear();
                    setButtonActiveJSON(false);
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
