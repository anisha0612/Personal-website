// import Cats from "../assets/Images/Project/Cats-inc.png";
import Novella from "../assets/Images/Project/Novella.png";
import BlogWebsite from "../assets/Images/Project/Blog-website.png";
import Weather from "../assets/Images/Project/Weather.png";
import Dictionary from "../assets/Images/Project/Urban Dictionary.png";
import FaceDetection from "..//assets/Images/Project/face-detection.png";
import RobotFriends from "../assets/Images/Project/Robot Friends.png";
import UpBeat from "../assets/Images/Project/UpBeat.png";
const Projects = [
  {
    id: 1,
    imgSrc: Dictionary,
    title: "Urban Dictionary",
    content:
      "This is a Javascript web app for urban slang's based on Urban dictionary website using UrbanScrapper API .",
    tools: "Vanilla JavaScript, Bulma CSS , HTML, AJAX (axios fetch) ",
    url: "https://anisha0612.github.io/urban-dictionary/",
  },

  // {
  //   id: 3,
  //   imgSrc: Cats,
  //   title: "Cats Inc.",
  //   content:
  //     "This is a React.js web app using APIs to fetch data to render a card for each cat with name and email. A search box is used to get all the cats with the name entered.",
  //   url: "https://cats-inc.netlify.app/",
  // },
  {
    id: 8,
    imgSrc: UpBeat,
    title: "Up Beat",
    content:
      "This is music player that plays tracks from a playlist in the chart using the Deezer API(music).",
    tools: "Vanilla JavaScript, HTML, AJAX (axios fetch), TypeScript",
    url: "https://anisha0612.github.io/UpBeat/",
  },
  {
    id: 7,
    imgSrc: RobotFriends,
    title: "Robot Friends",
    content:
      "This is a React.js app which search for robots entered in the search field. It is a Progressive Web App with Redux used as a state management library.",
    tools: "React.js , Tachyons(styling) , APIs (Robot images), redux",
    url: "https://anisha0612.github.io/RoboFriends/",
  },

  {
    id: 4,
    imgSrc: Novella,
    title: "Novella",
    content:
      "This is a web app for creating Short stories where a user logs in through Google or through their email to publish public or private stories.",
    tools:
      "Node.js, Express.js,Handlebars.js,Passport.js (google oauth 2.0 and facebook authentication), MongoDB(Mongoose)",
    url: "https://shielded-badlands-81731.herokuapp.com/",
  },
  {
    id: 5,
    imgSrc: Weather,
    title: "Weather",
    content:
      "This is React.js Web app using API. Check the weather for the current location or search for the weather data for a city.",
    tools: "React.js, open weather map(API) and Material UI for React",
    url: "https://weather-openweather.netlify.app/",
  },
  {
    id: 2,
    imgSrc: FaceDetection,
    title: "Face Detection",
    content:
      "This a react.js webpage that detects a face in an image. Paste the URL of the image and press detect and a box is displayed around a face.",
    tools: "React.js, clarifai API , Node.js, Express.js and PostgreSQl",
    url: "https://face-detection-full-stack.herokuapp.com/",
  },
  {
    id: 6,
    imgSrc: BlogWebsite,
    title: "Blog Website",
    content: "Blogging website to store public blogs.",
    tools: "Node.js,Express.js, ejs and MongoDB",
    url: "https://obscure-gorge-23398.herokuapp.com/",
  },
];

export default Projects;
