import soloTraveller from "../assets/soloTraveller.png";
import smu_Snapshot from "../assets/SMU-Snapshot.png";
import teamGenerator from "../assets/TeamGenerator.png";
import noteTaker from "../assets/noteTakerapp.png";
import chatApp from "../assets/ChatApp.png";
import CapWorkDayScheduler from "../assets/CaptureWorkDayScheduler.jpeg";

const ProjectCardData = [
  {
    imgsrc: soloTraveller,
    title: "Solo Traveller Website",
    text: "As a team we have been tasked to conceive and execute a design that solves a real-world problem. In creating our first collaborative full-stack application, we will combine a robust back end with servers, databases, advanced APIs, and user authentication to an intuitive front end. We’ll continue to build on the agile development methodologies that we have learnt throughout this course, like storing your project code in GitHub, managing our work with a project management tool, and implementing feature and bug fixes using the Git branch workflow and pull requests.",
    view: "https://tranquil-garden-06194.herokuapp.com/",
    source: "https://github.com/NKC27/solo-traveller",
  },
  {
    imgsrc: smu_Snapshot,
    title: "Search Marvel Universe",
    text: "Marvel Universe Search is a search engine, which provides a user with a variety of information surrounding a character of their choice. Using the Marvel font and traditional red and white theme, we want to create a website that would appeal to the superhero fanbase that want to know a little more about their favourite characters. We have chosen to use Materialize as our CSS framework, which will allow us to create a clean, user-friendly database that will speed up our styling process.",
    view: "https://nkc27.github.io/Search-Marvel-Universe/",
    source: "https://github.com/NKC27/Search-Marvel-Universe",
  },
  {
    imgsrc: teamGenerator,
    title: "Team Profile Generator",
    text: "I have built an app that creates a webpage of team cards via CLI user input. The user is prompted questions in the CLI (command line interface) or Terminal with the option to add further team members through a list input.",
    view: "https://github.com/NKC27/Team-Profile-Generator",
    source: "https://github.com/NKC27/Team-Profile-Generator",
  },
  {
    imgsrc: noteTaker,
    title: "Note Taker Application",
    text: "I have created an application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file. The application’s front end has already been created. It's my job to build the back end, connect the two, and then deploy the entire application to Heroku.",
    view: "https://note-taker-nkc.herokuapp.com/",
    source: "https://github.com/NKC27/Note-Taker-with-Express.js",
  },
  {
    imgsrc: chatApp,
    title: "Chat Application",
    text: "An applcation set out for our users for Solo Traveller. So users once agreed on going on a trip can talk to other going members live through the chat feature.",
    view: "https://murmuring-badlands-11041.herokuapp.com/",
    source: "https://github.com/NKC27/solo-traveller-chat-app",
  },
  {
    imgsrc: CapWorkDayScheduler,
    title: "Work Day Scheduler",
    text: "A work day planner made using HTML, CSS, moment.js, Jquery, web api & Javascript",
    view: "https://nkc27.github.io/Work-Day-Planner/",
    source: "https://github.com/NKC27/Work-Day-Planner",
  },
];

export default ProjectCardData;
