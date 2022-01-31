export const scrollToTop = () => {
  document.querySelector(".content").scroll(0, 0);
};

export const getName = (name) => {
  switch (name) {
    case "css":
      return "CSS";
    case "cpp":
      return "C++";
    case "expressjs":
      return "ExpressJS";
    case "firebase":
      return "Firebase";
    case "html":
      return "HTML";
    case "java":
      return "Java";
    case "js":
      return "JavaScript";
    case "mongodb":
      return "MongoDB";
    case "mysql":
      return "MySQL";
    case "nextjs":
      return "NextJS";
    case "nuxt":
      return "NuxtJS";
    case "node":
      return "Node";
    case "postgres":
      return "PostgreSQL";
    case "python":
      return "Python";
    case "react":
      return "ReactJS";
    case "recoil":
      return "RecoilJS";
    case "redux":
      return "Redux";
    case "sass":
      return "Sass";
    case "sharepoint":
      return "MS SharePoint";
    case "tailwind":
      return "TailwindCSS";
    case "vue":
      return "VueJS";
  }
};
