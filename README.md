# Puzzle deslizante

> Proyecto de aprendizaje desarrollado durante el Grado Superior de Desarrollo de Aplicaciones Web (DAW).

---

## Descripción

Este repositorio documenta la evolución de uno de mis primeros proyectos web: un puzzle construido con HTML, CSS y JavaScript. El objetivo original era practicar el posicionamiento de elementos con CSS. Con el tiempo, y a medida que he ido adquiriendo más conocimientos, he revisado y rehecho el proyecto para aplicar buenas prácticas y añadir interactividad real.

---

## Estructura del repositorio

```
puzzle/
├── index.html    # Estructura semántica del puzzle
├── styles.css    # Todos los estilos, sin nada inline en el HTML
├── app.js        # Lógica del puzzle
└── README.md     # Este archivo
```

---

## Cómo jugar

1. Abre `index.html` en el navegador
2. Pulsa **Mezclar** para desordenar las fichas
3. Haz clic en una ficha adyacente al hueco para moverla
4. Ordena las fichas del 1 al 8 en el menor número de movimientos posible

---

## Evolución del proyecto

### Versión 1 — Inicio del grado

La primera versión fue escrita cuando acababa de empezar a estudiar DAW. Era funcional pero presentaba problemas habituales en quien está aprendiendo:

- Estructura HTML mínima, sin semántica clara
- CSS mezclado con estilos en línea dentro del propio HTML
- Dos `div` con colores de fondo usados como "piezas", sin cuadrícula real
- Sin interactividad, responsividad ni accesibilidad
- Nomenclatura de clases poco descriptiva

```html
<div id="contenedor">
  <div class="primera"></div>
  <div class="segunda"></div>
</div>
```

```css
#contenedor { background-color: gray; width: 300px; height: 300px; }
.primera    { background-color: orange; width: 100px; height: 50px; position: absolute; }
.segunda    { background-color: brown;  width: 100px; height: 50px; margin-left: 100px; position: absolute; }
```

---

### Versión 2 — Revisión tras avanzar en el grado

Con más conocimientos sobre HTML semántico, CSS moderno y JavaScript, reescribí el proyecto desde cero:

**Mejoras en HTML y CSS:**

- Separación total de responsabilidades: cero estilos en línea, todo en `styles.css`
- HTML semántico con `<header>`, `<main>` y atributos ARIA para accesibilidad
- CSS Grid para el tablero, en vez de `position: absolute`
- Custom properties (`--variables`) en `:root` para colores, tamaños y radios
- Diseño responsivo con `@media queries`
- Transiciones CSS en hover y animación de victoria

**Lógica con JavaScript:**

- Puzzle deslizante 3×3 completamente funcional
- Detección de movimientos válidos (solo fichas adyacentes al hueco)
- Mezcla aleatoria siempre resoluble (simulando movimientos válidos desde el estado resuelto)
- Contador de movimientos y cronómetro
- Detección automática de victoria con mensaje final

---

## Qué aprendí

| Concepto | Versión 1 | Versión 2 |
|---|---|---|
| Separación HTML / CSS / JS | ❌ | ✅ |
| HTML semántico y ARIA | ❌ | ✅ |
| CSS Grid | ❌ | ✅ |
| Custom properties | ❌ | ✅ |
| Responsividad | ❌ | ✅ |
| Manipulación del DOM con JS | ❌ | ✅ |
| Lógica de juego | ❌ | ✅ |
| Generación aleatoria resoluble | ❌ | ✅ |

---

## Tecnologías

- HTML5 semántico
- CSS3 (Grid, Custom Properties, Transiciones, Animaciones)
- JavaScript vanilla (sin frameworks ni dependencias)

---

Proyecto personal de aprendizaje · Grado Superior DAW