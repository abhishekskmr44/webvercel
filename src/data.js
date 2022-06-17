import p1 from "./img/sephora.JPG";
import p2 from "./img/mytheresa.JPG";
import p3 from "./img/orbitz.JPG";
import p4 from "./img/tic-tac-toe-project.png";

const data = [
  {
    id: 1,
    img: { p1 },
    link: "https://papaya-medovik-778f4e.netlify.app/",
    gitlink: "https://github.com/Sephora-Clone/Sephora-Online-Beauty-Products",
    title: "Sephora.com",
    desc: "Sephora.com is a cosmetic website. My project is a clone of the original website. It has a signup page, a login page and a completely functional payment page. Technology used is HTML, CSS & Javascript.",
    tech: ["HTML", "CSS", "JAVASCRIPT"],
  },
  {
    id: 2,
    img: { p2 },
    link: "https://glittering-cocada-d76c60.netlify.app/",
    gitlink: "https://github.com/abhishekskmr44/my-theresa",
    title: "MyTheresa.com",
    desc: "MyTheresa.com is a complete fashion, wardrobe and attire speacialist website. It has a signup page, a login page and a completely functional payment page. Technology used is HTML, CSS & Javascript. Data fetching is also used.",
    tech: ["HTML", "CSS", "JAVASCRIPT", "ES6"],
  },
  {
    id: 3,
    img: { p3 },
    link: "https://bucolic-muffin-8abf9f.netlify.app/",
    gitlink: "https://github.com/KalashThakur/Orbitz",
    title: "Orbitz.com",
    desc: "Orbitz.com is a an amazing travel website. Also list of hotels, cities and destinations It has a signup page, a login page and a completely functional payment page. Technology used is React JS.",
    tech: ["React.Js", "Redux ToolKit", "Material UI"],
  },
];

export default data;
