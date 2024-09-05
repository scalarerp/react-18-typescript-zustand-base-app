import { useLocalStorage } from 'usehooks-ts'
import MoonSvg from './../SvgIcons/SvgFiles/MoonSvg'
import SunSvg from './../SvgIcons/SvgFiles/SunSvg'
import { useEffect } from 'react'

const themeKey = 'theme-todo-name'

const Theme = () => {
  const [value, setValue] = useLocalStorage(themeKey, 'light')

  const isDark = value === 'dark'

  const setTheme = async (newValue: 'light' | 'dark') => {
    const headEl = document?.getElementById?.('css-color-scheme')
    headEl!.innerText = `*{color-scheme: ${newValue}`
    document.documentElement.setAttribute('data-bs-theme', newValue)
    setValue(newValue)
  }

  useEffect(() => {
    setTheme(value as 'light' | 'dark')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!isDark) return <SunSvg role="button" onClick={() => setTheme('dark')} />
  return <MoonSvg role="button" onClick={() => setTheme('light')} />
}

export default Theme
