'use client'
import useThemeStore from "@/store/theme"
import { useEffect } from "react";
import { IoSunny, IoMoon } from "react-icons/io5";

interface ThemeSwitchProps {}

const ThemeSwitch = () => {
  const {
    currentTheme,
    toggleTheme
  } = useThemeStore()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="p-2 hover:bg-light-gray300 dark:hover:bg-dark-gray100 rounded transition ease-in-out delay-50 duration-200"
    >
      { currentTheme == "LIGHT"
        ? <IoSunny size={16} color={'#212529'} />
        : <IoMoon size={16} color={'#ffbe5b'} />
      }
    </button>
  )
}
export default ThemeSwitch