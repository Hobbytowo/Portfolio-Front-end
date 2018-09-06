// START Projects data

const projects = [
  {
    ind: 0,
    name: 'chart',
    title: 'Pie Chart Creator',
    discritpion: 'Pure JavScript application',
    imgAlt: '',
    bgColor: '#0B4D16',
    codeLink: 'https://github.com/Hobbytowo/PieChart-Creator',
    liveLink: 'https://hobbytowo.github.io/PieChart-Creator/',
    filters: ['Show all', 'SPA', 'JavaScript', 'SASS', 'Canvas', 'Gulp']
  },
  {
    ind: 1,
    name: 'solitaire',
    title: 'Spider Solitaire',
    discritpion: 'Game in Vue.js',
    imgAlt: '',
    bgColor: '#b70000',
    codeLink: 'https://github.com/Hobbytowo/spider-solitaire-game',
    liveLink: 'https://hobbytowo-spider-solitaire-game.netlify.com/',
    filters: ['Show all', 'SPA', 'SASS', 'JavaScript', 'Vue.js']
  },
  {
    ind: 2,
    name: 'hogwart',
    title: 'Hogwarts Website',
    discritpion: 'School website build with Bootstrap',
    imgAlt: '',
    bgColor: '#333',
    codeLink: 'https://github.com/Hobbytowo/Hogwarts-School-website',
    liveLink: 'https://hobbytowo.github.io/Hogwarts-School-website/',
    filters: ['Show all', 'Website', 'Bootstrap', 'JQuery', 'SASS']
  },
  {
    ind: 3,
    name: 'hairdresser',
    title: 'Hairdresser Website',
    discritpion: 'Pure JavaScript single page website without any library',
    imgAlt: '',
    bgColor: 'rgb(38, 21, 58)',
    codeLink: 'https://github.com/Hobbytowo/SPA-Hairdresser',
    liveLink: 'https://hobbytowo.github.io/SPA-Hairdresser/',
    filters: ['Show all', 'Website', 'JavaScript', 'SASS', 'Gulp']
  },
  {
    ind: 4,
    name: 'todo',
    title: 'ToDo Application',
    discritpion: 'Simple ToDo in Vue.js',
    imgAlt: '',
    bgColor: '#192d42',
    codeLink: 'https://github.com/Hobbytowo/ToDo-App-Vue.js',
    liveLink: 'https://hobbytowo-todo-vue.netlify.com/',
    filters: ['Show all', 'SPA', 'Vue.js', 'SASS']
  },
  {
    ind: 5,
    name: 'weather',
    title: 'Weather Application',
    discritpion: 'JavScript, geolocation and AJAX',
    imgAlt: '',
    bgColor: '#29b8e5',
    codeLink: 'https://github.com/Hobbytowo/WeatherApp',
    liveLink: 'https://hobbytowo.github.io/WeatherApp/',
    filters: ['Show all', 'SPA', 'SASS', 'JavaScript', 'Ajax', 'Gulp']
  },
  {
    ind: 6,
    name: 'watch',
    title: 'Watch animation',
    discritpion: 'Simple digital and analog watch animation',
    imgAlt: '',
    bgColor: '#f4a641',
    codeLink: 'https://codepen.io/Paradoks/pen/vdoGab',
    liveLink: 'https://codepen.io/Paradoks/full/vdoGab/',
    filters: ['Show all', 'Animation', 'JavaScript', 'SASS']
  },
  {
    ind: 7,
    name: 'fractalTree',
    title: 'Fractal Tree',
    discritpion: 'JavaScript and Canvas, electing properties',
    imgAlt: '',
    bgColor: '#00b740',
    codeLink: 'https://codepen.io/Paradoks/pen/yxyqZG',
    liveLink: 'https://codepen.io/Paradoks/full/yxyqZG/',
    filters: ['Show all', 'SPA', 'JavaScript', 'SASS', 'Canvas']
  },
  {
    ind: 8,
    name: 'portfolio',
    title: 'Portfolio',
    discritpion: 'Place with my excellent projects ;)',
    imgAlt: '',
    bgColor: '#001a28',
    codeLink: 'https://github.com/Hobbytowo/Portfolio-Front-end',
    liveLink: '',
    filters: ['Show all', 'Website', 'JavaScript', 'SASS', 'Canvas', 'Gulp']
  }
]

// E/O Projects data

// START add projects to HTML

const projectsContainer = document.querySelector('.projects__container')

const addProject = project => {
  const article = document.createElement('article')
  article.classList.add('projects__project', 'project', `project--${ project.name }`)

  article.innerHTML = `
    <img
      class="project__img"
      src="static/project-${ project.name }.png"
      alt="${ project.imgAlt }">
    <div class="project__content content content--${ project.name }">
      <h3 class="project__title">${ project.title }</h3>
      <h4 class="project__discritpion">${ project.discritpion }</h4>
      <div class="project__buttons">
        <a href="${ project.codeLink }">
          <button type="button" class="project__button button button--code">
            Code
          </button>
        </a>
        <a href="${ project.liveLink }">
          <button type="button" class="project__button button button--live">
            Live
          </button>
        </a>
      </div>
    </div>
  `
  projectsContainer.appendChild(article)

  const articleContent = document.querySelector(`.content--${ project.name }`)
  articleContent.style.backgroundColor = project.bgColor
}

projects.forEach(project => {
  addProject(project)
})

// E/O add projects to HTML

// START Dynamic filtering projects

const projectsMenu = document.querySelector('.projects__menu')
const filters = document.querySelectorAll('.filter')

projectsMenu.addEventListener('click', e => {
  const filter = e.target
  const filterName = filter.textContent

  if (filter.classList[2] !== 'filter--deselected') {
    return
  }

  // Remove and add classes

  [...filters].forEach(filter => {
    filter.classList.add('filter--deselected')
    filter.classList.remove('filter--selected')
  })

  filter.classList.add('filter--selected')
  filter.classList.remove('filter--deselected')

  // fitering projectsMenu

  const filteredProjects = projects.filter(project => {
    return project.filters.some(filter => filter === filterName)
  })

  // show only filtred projects
  projectsContainer.innerHTML = ''
  filteredProjects.forEach(project => {
    addProject(project)
  })

})

// E/O Dynamic filtering projects
