window.onload = function () {
  const header = document.querySelector('.header')
  const svg = document.querySelector('.header__canvas')
  const ctx = svg.getContext('2d')

  const centerX = svg.width / 2
  const bottom = svg.height

  const tree = []

  const treeColor = '#ccc'
  const startLength = bottom / 3.5
  const angleRight = 27
  const angleLeft = 52
  const lengthRight = 0.72
  const lengthLeft = 0.67
  const startDirection = -90
  const startStrokeWidth = 60
  const widthLeft = 0.5
  const widthRight = 0.67
  let repeat = 8

  // Start Branch class constructor

  class Branch {
    constructor (startX, startY, endX, endY, dir, len, width) {
      this.startX = startX
      this.startY = startY
      this.endX = endX
      this.endY = endY
      this.dir = dir
      this.len = len
      this.width = width
      this.finished = false
    }

    show () {
      ctx.beginPath()
      ctx.strokeStyle = treeColor
      ctx.moveTo(this.startX, this.startY)
      ctx.lineTo(this.endX, this.endY)
      ctx.lineWidth = this.width
      ctx.lineCap = 'round'
      ctx.stroke()
    }

    newBranchLeft () {
      const newAngleL = this.dir - angleLeft
      const newLengthL = this.len * lengthLeft
      const newWidthL = this.width * widthLeft

      const newXL = Math.cos((Math.PI / 180) * newAngleL) * newLengthL + this.endX
      const newYL = Math.sin((Math.PI / 180) * newAngleL) * newLengthL + this.endY

      return new Branch(
        this.endX,
        this.endY,
        newXL,
        newYL,
        newAngleL,
        newLengthL,
        newWidthL
      )
    }

    newBranchRight () {
      const newAngleR = this.dir + angleRight
      const newLengthR = this.len * lengthRight
      const newWidthR = this.width * widthRight

      const newXR = Math.cos((Math.PI / 180) * newAngleR) * newLengthR + this.endX
      const newYR = Math.sin((Math.PI / 180) * newAngleR) * newLengthR + this.endY

      return new Branch(
        this.endX,
        this.endY,
        newXR,
        newYR,
        newAngleR,
        newLengthR,
        newWidthR
      )
    }

    move (random) {
      this.endX += random
      this.endY += random
    }
  }

  // E/O Branch class

  // CLear screen (function)
  const clearScreen = () => {
    ctx.fillStyle = '#001a28'
    ctx.fillRect(0, 0, centerX * 2, bottom)
  }
  // E/O CLear screen (function)

  // Create root (function)
  const createRoot = () => {
    tree[0] = new Branch(
      centerX,
      bottom,
      centerX,
      bottom - startLength,
      startDirection,
      startLength,
      startStrokeWidth
    )
  }
  // E/O Create root (function)

  // Create branches (function)
  const createBranches = () => {
    for (let i = tree.length - 1; i >= 0; i--) {
      if (!tree[i].finished) {
        tree.push(tree[i].newBranchLeft())
        tree.push(tree[i].newBranchRight())
      }

      tree[i].finished = true
    }

    repeat--
    if (repeat >= 0) {
      createBranches()
    }
  }
  // E/O Create branches (function)

  // Show branches (function)
  const showBranches = () => {
    for (let i = 0; i < tree.length; i++) {
      tree[i].show()
    }
  }
  // E/O show branches (function)

  // Create leaves (function)
  const createLeaves = () => {
    for (let i = (tree.length - 1) / 2; i < tree.length; i++) {
      ctx.beginPath()
      let colorR = Math.random() * 255
      let colorG = Math.random() * (255 - 100) + 100
      ctx.fillStyle = `rgb(${ colorR }, ${ colorG }, 24)`
      ctx.arc(tree[i].endX, tree[i].endY, 3, 0, 2 * Math.PI)
      ctx.fill()
      ctx.stroke()
    }
  }
  // E/O Create leaves (function)

  // Draw tree (function)
  const drawTree = () => {
    createRoot()
    createBranches()
    showBranches()
    createLeaves()
  }
  // E/O Draw tree (function)

  drawTree() // invoke

  // Mousemove event listener
  header.addEventListener('mousemove', e => {
    clearScreen()

    let random = Math.random() - Math.random()
    for (let i = (tree.length - 1) / 2; i < tree.length; i++) {
      tree[i].move(random / 3)
    }
    showBranches()
    createLeaves()
  })
}
