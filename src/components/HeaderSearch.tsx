"use client"
import MobileDetect from "mobile-detect"
import { useLayoutEffect, useState } from "react"

const HeaderSearch = () => {
  const [buttonText, setButtonText] = useState<string>('⌘ + K')

  useLayoutEffect(() => {
    const md = new MobileDetect(window.navigator.userAgent)

    if (md.match('Mac OS | ios')) setButtonText('⌘ + K')
    else setButtonText('ctrl + K')
  }, [])

  return (
    <button
      type="button"
      className="inline-flex items-center gap-3 p-1 pl-2 rounded-md bg-light-gray300 dark:bg-dark-gray100"
    >
      <span className="leading-none text-light-gray600 dark:text-dark-gray600">
        Search
      </span>
      <span className="px-2 pt-2 pb-1 leading-none bg-light-gray400 dark:bg-dark-gray200 rounded-md text-light-gray800 dark:text-dark-gray700">
        {buttonText}
      </span>
    </button>
  )
}
export default HeaderSearch