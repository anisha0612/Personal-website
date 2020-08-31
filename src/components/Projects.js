import Cats from "../assets/Project/Cats-inc.png";
import Novella from "../assets/Project/Novella.png";
import BlogWebsite from "../assets/Project/Blog-website.png";
import Weather from "../assets/Project/Weather.png";

const Projects = [
  {
    id: 1,
    imgSrc: "",
    title: "Face Detection",
    content:
      "This a react.js webpage that detects a face in a image.Paste the url of the image(image address) and press detect and the DeepAI API detects the face and the a box is displayed around a face.",
    url: "",
  },
  {
    id: 2,
    imgSrc: Cats,
    title: "Cats Inc.",
    content:
      "This is a React.js web app using APIs to fetch data to render a card for each cat with name and email. A search box is used to get all the cats with the name entered.",
    url: "https://cats-inc.netlify.app/",
  },
  {
    id: 3,
    imgSrc: Novella,
    title: "Novella",
    content:
      "This is a web app for creating Short stories where a user logs in through Google or through their email to publish public or private stories.",
    url: "https://shielded-badlands-81731.herokuapp.com/",
  },
  {
    id: 4,
    imgSrc: Weather,
    title: "Weather",
    content:
      "This is React.js Web app using API and Material UI for React. This app displays the weather data for the current location and you can also search for the weather data for a city.",
    url: "https://weather-openweather.netlify.app/",
  },
  {
    id: 5,
    imgSrc: BlogWebsite,
    title: "Blog Website",
    content: "Blogging website using node,express.js, ejs and mongoDB",
    url: "https://obscure-gorge-23398.herokuapp.com/",
  },
];

export default Projects;
