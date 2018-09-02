window.onload = function () {
  const svg = document.querySelector('.svg')
  const ctx = svg.getContext('2d')

  const centerX = svg.width / 2
  const bottom = svg.height

  let tree = []

  let treeColor = '#eee'
  let startLength = centerX / 2.8
  let angleRight = 25
  let angleLeft = 45
  let startDirection = -90
  let startStrokeWidth = 35
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
      const newLengthL = this.len * 0.67
      const newWidthL = this.width * 0.67

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
      const newLengthR = this.len * 0.75
      const newWidthR = this.width * 0.67

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
  }

  // E/O Branch class

  // Create branches function
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

  const showBranches = () => {
    for (let i = 0; i < tree.length; i++) {
      tree[i].show()
    }
  }

  // Create root
  tree[0] = new Branch(
    centerX,
    bottom,
    centerX,
    bottom - startLength,
    startDirection,
    startLength,
    startStrokeWidth
  )

  createBranches()
  showBranches()
}
