const calculator = () => {
  const body = document.querySelector('body')
  const title = document.querySelector('h1')
  const themeParag = document.querySelector('p')
  const numbers = Array.from(document.querySelectorAll('small'))
  const selectorBg = document.querySelector('.selector-bg')
  const selectors = Array.from(document.querySelectorAll('.selector-circle'))
  const screen = document.querySelector('input[type="text"]')
  const keysBg = document.querySelector('.keys')
  const keys = Array.from(document.querySelectorAll('.key'))
  const del = document.querySelector('#delete')
  const reset = document.querySelector('#reset')
  const equal = document.querySelector('#equal')

  const selectTheme = () => {
    selectors.forEach((selector) => {
      selector.addEventListener('click', (e) => {
        if (e.target === selectors[0]) {
          selectors[1].style.opacity = '0'
          selectors[2].style.opacity = '0'
          selectors[0].style.opacity = '1'
          body.style.background = 'var(--very-dark-desaturated-blue-body)'
          title.classList.remove('theme-two')
          themeParag.classList.remove('theme-two')
          selectors.forEach((selector) =>
            selector.classList.remove('theme-two')
          )
          numbers.forEach((number) => number.classList.remove('theme-two'))
          selectorBg.classList.remove('theme-two')
          screen.classList.remove('theme-two')
          keysBg.classList.remove('theme-two')
          keys.forEach((key) => key.classList.remove('theme-two'))

          title.classList.remove('theme-three')
          themeParag.classList.remove('theme-three')
          selectors.forEach((selector) =>
            selector.classList.remove('theme-three')
          )
          numbers.forEach((number) => number.classList.remove('theme-three'))
          selectorBg.classList.remove('theme-three')
          screen.classList.remove('theme-three')
          keysBg.classList.remove('theme-three')
          keys.forEach((key) => key.classList.remove('theme-three'))
        } else if (e.target === selectors[1]) {
          selectors[0].style.opacity = '0'
          selectors[2].style.opacity = '0'
          selectors[1].style.opacity = '1'

          title.classList.remove('theme-three')
          themeParag.classList.remove('theme-three')
          selectors.forEach((selector) =>
            selector.classList.remove('theme-three')
          )
          numbers.forEach((number) => number.classList.remove('theme-three'))
          selectorBg.classList.remove('theme-three')
          screen.classList.remove('theme-three')
          keysBg.classList.remove('theme-three')
          keys.forEach((key) => key.classList.remove('theme-three'))

          body.style.background = 'var(--light-gray)'
          title.classList.add('theme-two')
          themeParag.classList.add('theme-two')
          selectors.forEach((selector) => selector.classList.add('theme-two'))
          numbers.forEach((number) => number.classList.add('theme-two'))
          selectorBg.classList.add('theme-two')
          screen.classList.add('theme-two')
          keysBg.classList.add('theme-two')
          keys.forEach((key) => key.classList.add('theme-two'))
        } else {
          selectors[0].style.opacity = '0'
          selectors[1].style.opacity = '0'
          selectors[2].style.opacity = '1'

          title.classList.remove('theme-two')
          themeParag.classList.remove('theme-two')
          selectors.forEach((selector) =>
            selector.classList.remove('theme-two')
          )
          numbers.forEach((number) => number.classList.remove('theme-two'))
          selectorBg.classList.remove('theme-two')
          screen.classList.remove('theme-two')
          keysBg.classList.remove('theme-two')
          keys.forEach((key) => key.classList.remove('theme-two'))

          body.style.background = 'var(--very-dark-violet)'
          title.classList.add('theme-three')
          themeParag.classList.add('theme-three')
          selectors.forEach((selector) => selector.classList.add('theme-three'))
          numbers.forEach((number) => number.classList.add('theme-three'))
          selectorBg.classList.add('theme-three')
          screen.classList.add('theme-three')
          keysBg.classList.add('theme-three')
          keys.forEach((key) => key.classList.add('theme-three'))
        }
      })
    })
  }
  selectTheme()

  const checkInitialScreen = () => {
    if (screen.value === '') {
      keys[7].value = ''
      keys[12].value = ''
      keys[14].value = ''
      keys[15].value = ''
    } else {
      keys[7].value = '+'
      keys[12].value = '.'
      keys[14].value = '/'
      keys[15].value = '*'
    }
  }

  const handleExceptions = (result) => {
    if (result === Infinity || result === -Infinity) {
      screen.value = 'Resultado indefinido'
    } else if (Number.isNaN() === false) {
      screen.value = 'Resultado indeterminado'
    } else {
      screen.value = result
    }
  }

  const calculate = () => {
    keys.forEach((key) => {
      key.addEventListener('click', (e) => {
        checkInitialScreen()
        if (e.target.value === 'delete') {
          screen.value = screen.value.slice(0, -1)
        } else if (e.target.value === 'reset') {
          screen.value = ''
        } else if (e.target.value === 'equal') {
          const result = new Function(`return ${screen.value}`)()
          handleExceptions(result)
        } else {
          screen.value += e.target.value
        }
      })
    })
  }
  calculate()
}
calculator()
