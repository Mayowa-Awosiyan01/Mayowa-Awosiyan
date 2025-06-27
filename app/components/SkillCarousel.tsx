import Skill from "./skill";
export default function SkillCarousel() {
  const skillInfo =[
    {
      name: "Python",
      link: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/172px-Python-logo-notext.svg.png",
      alt: "Python's Logo"
    },
    {
      name: "Java",
      link: "https://static-00.iconduck.com/assets.00/java-icon-2048x2048-3pfathb3.png",
      alt: "Java's Logo"
    },
    {
      name: "JavaScript",
      link: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      alt: "JavaScript's Logo"
    },
    {
      name: "TypeScript",
      link: "https://cdn.iconscout.com/icon/free/png-256/free-typescript-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-7-pack-logos-icons-2945272.png?f=webp&w=256",
      alt: "TypeScript's Logo"
    },
    {
      name: "Next.JS",
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV9uzErWz9EXqZDxZ5lP9aYpMz8eK6rr5X3w&s",
      alt: "Next.JS's Logo"
    },
    {
      name: "HTML",
      link: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/768px-HTML5_logo_and_wordmark.svg.png",
      alt: "HTML Logo"
    },
    {
      name: "CSS",
      link: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/544px-CSS3_logo_and_wordmark.svg.png",
      alt: "CSS Logo"
    },
    {
      name: "React",
      link: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png",
      alt: "React's Logo"
    },
    {
      name: "TailwindCSS",
      link: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/768px-Tailwind_CSS_Logo.svg.png?20230715030042",
      alt: "Tailwind Logo"
    },
    {
      name: "Flutter",
      link: "https://storage.googleapis.com/cms-storage-bucket/4fd5520fe28ebf839174.svg",
      alt: "Flutter Logo"
    },
    {
      name: "Docker",
      link: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png",
      alt: "Docker Logo"
    },
    {
      name: "PostgreSQL",
      link: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/810px-Postgresql_elephant.svg.png",
      alt: "PostgreSQL"
    },
    {
      name: "Firebase",
      link: "https://raw.githubusercontent.com/Mayowa-Awosiyan01/Mayowa-Awosiyan/05e5008fcd9938621e34560cbc25340010384006/public/Logomark_Full%20Color.svg",
      alt: "Firebase Logo"
    },
    {
      name: "GitHub",
      link: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/900px-Octicons-mark-github.svg.png?20180806170715",
      alt: "Github Logo"
    },
    {
      name: "Node.js",
      link: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
      alt: "Node.js Logo"
    }
  ];
  return (
    <div>
      <ul>
        {skillInfo.map(skill, index)=>(
            <li key={index}>
                {Skill.}
            </li>
        )}
      </ul>
    </div>
  );
}
