const COLORES = [
  '#3b5bdb',
  '#2f9e44',
  '#e03131',
  '#f08c00',
  '#ae3ec9',
  '#0c8599',
  '#d6336c',
  '#364fc7'
]

const META = [1, 2, 3, 4, 5, 6, 7, 8, 0]

let estado = [1, 2, 3, 4, 5, 6, 7, 8, 0]
let movs = 0
let segundos = 0
let timer = null
let iniciado = false
let ganado = false

function render() {
  const tablero = document.getElementById('tablero')
  tablero.innerHTML = ''

  estado.forEach((val, i) => {
    const ficha = document.createElement('div')
    ficha.className = 'ficha'

    if (val === 0) {
      ficha.classList.add('vacia')
    } else {
      ficha.textContent = val
      ficha.style.backgroundColor = COLORES[val - 1]
      if (ganado) ficha.classList.add('ganada')
      else ficha.addEventListener('click', () => mover(i))
    }

    tablero.appendChild(ficha)
  })
}

function mover(i) {
  const vacia = estado.indexOf(0)
  const fi = Math.floor(i / 3)
  const ci = i % 3
  const fv = Math.floor(vacia / 3)
  const cv = vacia % 3

  const adyacente =
    (fi === fv && Math.abs(ci - cv) === 1) ||
    (ci === cv && Math.abs(fi - fv) === 1)

  if (!adyacente) return

  if (!iniciado) {
    iniciarTimer()
    iniciado = true
  }

  ;[estado[i], estado[vacia]] = [estado[vacia], estado[i]]
  movs++
  document.getElementById('movs').textContent = movs

  render()

  if (estado.join(',') === META.join(',')) {
    ganado = true
    clearInterval(timer)
    const t = document.getElementById('tiempo').textContent
    document.getElementById('mensaje').textContent =
      `¡Resuelto en ${movs} movimientos y ${t}!`
    render()
  }
}

function mezclar() {
  ganado = false
  document.getElementById('mensaje').textContent = ''

  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 0]

  for (let k = 0; k < 1000; k++) {
    const v = arr.indexOf(0)
    const vecinos = []
    if (v % 3 > 0) vecinos.push(v - 1)
    if (v % 3 < 2) vecinos.push(v + 1)
    if (v > 2) vecinos.push(v - 3)
    if (v < 6) vecinos.push(v + 3)
    const dest = vecinos[Math.floor(Math.random() * vecinos.length)]
    ;[arr[v], arr[dest]] = [arr[dest], arr[v]]
  }

  estado = [...arr]
  resetContadores()
  render()
}

function reiniciar() {
  ganado = false
  estado = [1, 2, 3, 4, 5, 6, 7, 8, 0]
  document.getElementById('mensaje').textContent = ''
  resetContadores()
  render()
}

function resetContadores() {
  movs = 0
  segundos = 0
  iniciado = false
  clearInterval(timer)
  document.getElementById('movs').textContent = '0'
  document.getElementById('tiempo').textContent = '0:00'
}

function iniciarTimer() {
  timer = setInterval(() => {
    segundos++
    const m = Math.floor(segundos / 60)
    const s = segundos % 60
    document.getElementById('tiempo').textContent =
      m + ':' + (s < 10 ? '0' : '') + s
  }, 1000)
}

document.getElementById('btnMezclar').addEventListener('click', mezclar)
document.getElementById('btnReset').addEventListener('click', reiniciar)

mezclar()