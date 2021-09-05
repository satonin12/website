function randomIntegerMinMax(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min))
}

const BLUE = 'tile_blue'
const RED = 'tile_red'
const GREEN = 'tile_green'
const PURPLE = 'tile_purple'
const ORANGE = 'tile_orange'

const ARR_VALUE = [BLUE, RED, GREEN, PURPLE, ORANGE]

/*
  * Important information
  ! Deprecated method, do not use
  ? Should this method be exposed
  TODO: refactor this method

*/

export class Tiles {
  constructor(par) {
    this.x = par.x
    this.y = par.y
    this.value = par.value
    this.dom = this.render()
    this.source = par.source
    this.click = () => {
      let { x, y } = this.source.tiles[this.x][this.y]

      let arr = this.source.field.map((arr) => {
        return arr.slice()
      })

      this.source.getNeihgboord(arr, x, y, 0)

      // проверка на 2 и более блока
      let flag = arr.flat().filter(function (item) {
        return item == 0
      }).length

      if (flag < 2) {
        this.cantClick(this.source.tiles[x][y])
        return
      }
      let tmp1 = []

      // вытянуть вверх все удаленные тайлы
      this.source.dropTiles(arr, tmp1)
      // добавить новые тайлы
      this.source.reAddTile(tmp1)
      // обновляем счёт игрока
      this.source.finalscore.calcScore(this.source.countTilesDelete)
      let percent = (this.source.finalscore.score * 100) / 1000
      let width = (percent * 400) / 100

      this.source.progress.run(width)
      // обновить объект (массив) тайлов
      this.source.update()
      this.source.countTilesDelete = 0
    }
  }

  cantClick(tile) {
    tile.dom.style.animationName = 'shakeX'
    tile.dom.style.opacity = 1
    tile.dom.classList.add('animate__animated', 'animate__shakeX')

    setTimeout(function () {
      let value = tile.value
      tile.dom.className = `tile ${ARR_VALUE[value - 1]}`
      tile.dom.addEventListener('animationend', () => {
        tile.dom.style.animationName = 'a1'
      })
    }, 800)
  }

  render() {
    let tileWidth = 50
    let tileHeight = 57

    let div = document.createElement('div')
    div.className = `tile ${ARR_VALUE[this.value - 1]}`
    let ttop = tileHeight * this.x
    let tleft = tileWidth * this.y
    div.style.cssText = `top: ${ttop}px; left: ${tleft}px`
    div.onclick = () => {
      this.click.call(this)
    }
    return div
  }

  set({ x, y, value }) {
    this.x = x
    this.y = y
    this.value = value
    this.dom.classList.replace(this.dom.classList[1], `${ARR_VALUE[value - 1]}`)

    return this
  }
}

export class Field {
  constructor(par) {
    this.width = par.width
    this.height = par.height
    this.tiles = []
    this.field = [...new Array(this.height)].map(() => {
      return new Array(this.width).fill(0)
    })
    this.countTilesDelete = 0
    this.finalscore = new Score()
    this.progress = new ProgressBar('.header_loading')
    // this.shuffle2Arr.call(this)

    // this.shuffle = document.getElementsByClassName('button').on('click', () => {
    // this.shuffle2Arr.call(this)
    // })
  }

  addTiles(obj) {
    return new Tiles(obj)
  }

  fill() {
    this.field.forEach((row, i) => {
      row.forEach((elem, j) => {
        this.field[i][j] = randomIntegerMinMax(1, 5)
      })
    })

    return this
  }

  update() {
    this.tiles.forEach((row, i) => {
      row.forEach((tile, j) => {
        tile.set({ x: j, y: i, value: this.field[i][j] })
      })
    })
    return this
  }

  render() {
    let game = document.getElementById('pole')
    let arr = new Array()
    this.field.forEach((row, i) => {
      let tileRow = []
      row.forEach((elem, j) => {
        let obj = { x: i, y: j, value: elem, source: this }
        let tile = this.addTiles(obj)
        let div = tile.dom
        tileRow.push(tile)
        arr.push(tile)
        game.append(div)
      })
      this.tiles.push([...tileRow])
    })
  }

  getNeihgboord(arr, x, y, replace, needle) {
    if (arr[y] === undefined || arr[x][y] === undefined) {
      return
    }

    let numb = arr[x][y]

    if (needle === undefined) {
      needle = numb
    }

    if (numb === needle) {
      arr[x][y] = replace

      let ks = []
      let cs = []

      x == 0
        ? ks.push(x, x + 1)
        : x == 8
        ? ks.push(x - 1, x)
        : ks.push(x - 1, x + 1)
      ks.push(x, x)

      cs.push(y, y)
      y == 0
        ? cs.push(y + 1, y)
        : y == 8
        ? cs.push(y, y - 1)
        : cs.push(y + 1, y - 1)

      ks.forEach((v, k) => this.getNeihgboord(arr, v, cs[k], replace, needle))
    }
  }

  dropTiles(arr, tmp1) {
    // идём слева направо
    // идем сверху вниз
    // запоминаем индекс и кладём в массив
    // если находим значение 0
    // смещаем все запомнившие индексы
    // верхний запоминаем, присужаем 0 и сдвигаем на 1 вниз

    for (let j = 0; j < 9; j++) {
      let top = 0
      let tmp = []
      let tmpTile = []
      for (let i = 0; i < 9; i++) {
        if (arr[i][j] === 0) {
          this.tiles[i][j].dom.remove()
          this.tiles[i][j] = null

          for (let k = top, s = 0; s < tmp.length; k++, s++) {
            arr[k + 1][j] = tmp[s]
            tmpTile[s].dom.style.top = `${57 * (k + 1)}px`
            this.tiles[k + 1][j] = tmpTile[s]
            this.field[k + 1][j] = tmpTile[s].value
          }

          arr[top][j] = 0
          this.tiles[top][j] = null
          this.field[top][j] = null
          tmp1.push({ x: top, y: j })

          top++
          this.countTilesDelete++
        } else {
          tmp.push(arr[i][j])
          tmpTile.push(this.tiles[i][j])
        }
      }
    }
  }

  reAddTile(arr) {
    arr.forEach((item) => {
      let newValue = randomIntegerMinMax(1, 5)

      let obj = { x: item.x, y: item.y, value: newValue, source: this }
      let tile = this.addTiles(obj)

      this.tiles[item.x][item.y] = tile
      this.field[item.x][item.y] = newValue

      document.getElementById('pole').append(tile.dom)
    })
  }

  shuffle2Arr() {
    let iR, jR, tmp, tmp1
    for (let i = this.width - 1; i >= 0; i--) {
      for (let j = this.height - 1; j >= 0; j--) {
        iR = Math.floor(Math.random() * (i + 1))
        jR = Math.floor(Math.random() * (j + 1))

        tmp = this.tiles[iR][jR]
        this.tiles[iR][jR] = this.tiles[i][j]
        this.tiles[i][j] = tmp
      }
    }
    this.update()
  }
}

export class Score {
  constructor(score = 0) {
    this.score = score
    this.step = 10
  }

  calcScore(countTilesDelete) {
    if (countTilesDelete >= 2 && countTilesDelete <= 3) {
      this.score += countTilesDelete * 10
    }
    if (countTilesDelete >= 4 && countTilesDelete <= 5) {
      this.score += countTilesDelete * 15
    }
    if (countTilesDelete >= 6) {
      this.score += countTilesDelete * 20
    }

    this.step--
    if (this.step <= 0) {
      this.win(false)
    }
    if (this.score >= 1000) {
      this.win(true)
    }
    this.render()
  }

  win(flag) {
    if (flag) {
      document.getElementsByClassName('modal-window_text')[0].textContent =
        'Вы победили'
    } else {
      document.getElementsByClassName('modal-window_text')[0].textContent =
        'Вы проиграли'
    }

    // document.getElementsByClassName('modal-window').removeClass('animate__animated animate__hinge')
    // document.getElementById('startGame').hide()

    let modalWindow = document.getElementsByClassName('modal-window')
    console.log(modalWindow)
    modalWindow[0].style.display = 'block'

    setTimeout(function () {
      window.location.reload()
    }, 3000)
  }

  render() {
    document.getElementById('score').innerHTML = this.score
    document.getElementById('step').innerHTML = this.step
  }
}

export class ProgressBar {
  constructor(selector) {
    this.delay = 100
    this.step = 2
    this.width = 0
    this.progressBar = document.querySelector(selector)
    this.timer = false

    this.go = () => {
      this.set(this.getProgress() + this.step)
    }
  }

  getProgress() {
    return parseInt(this.progressBar.style.width) || 0
  }

  run(width) {
    this.delay = this.delay
    this.width = width
    if (this.timer) this.stop()
    this.timer = setInterval(this.go, this.delay)
    this.progressBar.style.transitionDuration = this.delay + 'ms'
    return this
  }

  set(width) {
    if (width >= 400) {
      this.stop()
    }
    if (width == this.width) {
      this.pause()
      return
    }

    this.progressBar.style.width = width + 'px'
    return this
  }

  pause() {
    if (this.timer) {
      this.stop()
    } else {
      this.run()
    }
    return this
  }

  stop() {
    clearInterval(this.timer)
    this.timer = false
    return this
  }
}
