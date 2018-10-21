// START Projects data

const projects = [
  {
    name: 'colors',
    title: 'Colors Tester',
    descritpion: 'Colors combination tester checking contrast ratio due to WCAG',
    imgAlt: 'Colors tester application with counted ratio and ranges to change colors values',
    bgColor: '#755c72',
    codeLink: 'https://github.com/Hobbytowo/Colors-Tester',
    liveLink: 'https://colors-ratio-tester-hobbytowo.netlify.com/',
    filters: ['Show all', 'SPA', 'SASS', 'JavaScript', 'React']
  },
  {
    name: 'chart',
    title: 'Pie Chart Creator',
    descritpion: 'Pure JavScript application',
    imgAlt: 'Pie chart with tooltip',
    bgColor: '#0B4D16',
    codeLink: 'https://github.com/Hobbytowo/PieChart-Creator',
    liveLink: 'https://hobbytowo.github.io/PieChart-Creator/',
    filters: ['Show all', 'SPA', 'JavaScript', 'SASS', 'Canvas', 'Gulp']
  },
  {
    name: 'solitaire',
    title: 'Spider Solitaire',
    descritpion: 'Game in Vue.js',
    imgAlt: 'Cards sorted in Spider Solitaire Game',
    bgColor: '#b70000',
    codeLink: 'https://github.com/Hobbytowo/spider-solitaire-game',
    liveLink: 'https://hobbytowo-spider-solitaire-game.netlify.com/',
    filters: ['Show all', 'SPA', 'SASS', 'JavaScript', 'Vue.js']
  },
  {
    name: 'hogwart',
    title: 'Hogwarts Website',
    descritpion: 'School website built with Bootstrap',
    imgAlt: 'Herbs of Hogwarts Houses on Hogwarts Website',
    bgColor: '#333',
    codeLink: 'https://github.com/Hobbytowo/Hogwarts-School-website',
    liveLink: 'https://hobbytowo.github.io/Hogwarts-School-website/',
    filters: ['Show all', 'Website', 'Bootstrap', 'JQuery', 'SASS']
  },
  {
    name: 'hairdresser',
    title: 'Hairdresser Website',
    descritpion: 'Pure JavaScript single page website without any library',
    imgAlt: 'Header and menu on Hairdresser Website, woman with colorful hair',
    bgColor: 'rgb(38, 21, 58)',
    codeLink: 'https://github.com/Hobbytowo/SPA-Hairdresser',
    liveLink: 'https://hobbytowo.github.io/SPA-Hairdresser/',
    filters: ['Show all', 'Website', 'JavaScript', 'SASS', 'Gulp']
  },
  {
    name: 'todo',
    title: 'ToDo Application',
    descritpion: 'Simple ToDo in Vue.js',
    imgAlt: 'Form to creating ToDo list',
    bgColor: '#192d42',
    codeLink: 'https://github.com/Hobbytowo/ToDo-App-Vue.js',
    liveLink: 'https://hobbytowo-todo-vue.netlify.com/',
    filters: ['Show all', 'SPA', 'Vue.js', 'SASS']
  },
  {
    name: 'weather',
    title: 'Weather Application',
    descritpion: 'JavScript, geolocation and AJAX',
    imgAlt: 'Weather discription for example city: New York',
    bgColor: '#29b8e5',
    codeLink: 'https://github.com/Hobbytowo/WeatherApp',
    liveLink: 'https://hobbytowo.github.io/WeatherApp/',
    filters: ['Show all', 'SPA', 'SASS', 'JavaScript', 'Ajax', 'Gulp']
  },
  {
    name: 'watch',
    title: 'Watch animation',
    descritpion: 'Simple digital and analog watch animation',
    imgAlt: 'Digital and analog watch',
    bgColor: '#f4a641',
    codeLink: 'https://codepen.io/Paradoks/pen/vdoGab',
    liveLink: 'https://codepen.io/Paradoks/full/vdoGab/',
    filters: ['Show all', 'Animation', 'JavaScript', 'SASS']
  },
  {
    name: 'fractalTree',
    title: 'Fractal Tree',
    descritpion: 'JavaScript and Canvas, electing properties',
    imgAlt: 'Fractal Tree with form for changing properties of tree',
    bgColor: '#303030',
    codeLink: 'https://codepen.io/Paradoks/pen/yxyqZG',
    liveLink: 'https://codepen.io/Paradoks/full/yxyqZG/',
    filters: ['Show all', 'SPA', 'JavaScript', 'SASS', 'Canvas']
  },
  {
    name: 'portfolio',
    title: 'Portfolio',
    descritpion: 'Place with my excellent projects ;)',
    imgAlt: 'Header of this website',
    bgColor: '#001a28',
    codeLink: 'https://github.com/Hobbytowo/Portfolio-Front-end',
    liveLink: 'https://portfolio-frontend-kedzioraweronika.netlify.com/',
    filters: ['Show all', 'Website', 'JavaScript', 'SASS', 'Canvas', 'Gulp']
  },
  {
    name: 'treehouse',
    title: 'Treehouse',
    descritpion: 'PSD to HTML project',
    imgAlt: 'Header of treehouse website',
    bgColor: '#7cc576',
    codeLink: 'https://github.com/Hobbytowo/Web-Dev-Challenge',
    liveLink: 'https://treehouse-hobbytowo.netlify.com/',
    filters: ['Show all', 'Website', 'JQuery', 'SASS', 'Gulp']
  }
]

// E/O Projects data

// START add projects to HTML

const projectsContainer = document.querySelector('.projects__container')

const addProject = project => {
  const article = document.createElement('article')
  article.classList.add('projects__project', 'project', `project--${ project.name }`)
  Object.defineProperty(article, 'filters', {
    value: `${ project.filters }`
  })

  article.innerHTML = `
    <img
      class="project__img"
      src="static/project-${ project.name }.png"
      alt="${ project.imgAlt }">
    <div class="project__content content content--${ project.name }">
      <h3 class="project__title">${ project.title }</h3>
      <h4 class="project__discritpion">${ project.descritpion }</h4>
      <div class="project__buttons">
        <a href="${ project.codeLink }">
          <button
            type="button"
            class="project__button button button--code"
            disabled="true"
            >
            Code
          </button>
        </a>
        <a href="${ project.liveLink }">
          <button
            type="button"
            class="project__button button button--live"
            disabled="true"
            >
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
const allProjects = document.querySelectorAll('.project')

projectsMenu.addEventListener('click', e => {
  const hiddenProjects = document.querySelectorAll('.hideProject')
  const filter = e.target
  const filterName = filter.textContent

  if (filter.classList[2] !== 'filter--deselected') {
    return
  }

  // Remove and add manu classes

  [...filters].forEach(filter => {
    filter.classList.add('filter--deselected')
    filter.classList.remove('filter--selected')
  })

  filter.classList.add('filter--selected')
  filter.classList.remove('filter--deselected')

  // Filtering projects

  const projectsToHide = [...allProjects].filter(project => {
    return project.filters.split(',').every(filter => filter !== filterName)
  })

  const projectsToShow = [...hiddenProjects].filter(project => {
    return project.filters.split(',').some(filter => filter === filterName)
  })

  projectsToShow.forEach(project => {
    project.classList.add('showProject')
    project.classList.remove('hideProject')
  })

  projectsToHide.forEach(project => {
    project.classList.remove('showProject')
    project.classList.add('hideProject')
  })
})

// E/O Dynamic filtering projects

// START Show and hide project content

const showContent = content => {
  content.style.display = 'flex'
  window.setTimeout(() => {
    const buttons = content.querySelectorAll('.button')
    Array.from(buttons).forEach(button => {
      button.disabled = false
    })

    content.style.opacity = '1'
  }, 1)
}

const hideContent = content => {
  content.style.opacity = '0'
  content.style.display = 'none'

  const buttons = content.querySelectorAll('.button')
  Array.from(buttons).forEach(button => {
    button.disabled = true
  })
}

[...allProjects].forEach(project => {
  // events for hover
  project.addEventListener('mouseenter', e => {
    const content = e.target.children[1]

    showContent(content)

    content.addEventListener('mouseleave', e => {
      hideContent(content)
    })
  })

  // events for click - mobile
  project.addEventListener('click', e => {
    if (e.target.nodeName !== 'IMG') {
      return
    }

    const content = e.target.nextElementSibling

    showContent(content)

    window.setTimeout(() => {
      hideContent(content)
    }, 5000)
  })
})

// E/O Show and hide project content
