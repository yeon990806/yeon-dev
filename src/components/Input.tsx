'use client'
import { debounce } from 'lodash';
import { ReactNode, useCallback, useRef, useState } from "react"

interface InputProps {
  value: string
  icon: ReactNode
  inputFn: (v: string) => void
}

const Input = ({
  value,
  icon,
  inputFn
}: InputProps) => {
  const [inputValue, setInputValue] = useState<string>('');
  const oninputHandler = useCallback(() => {
    debounce((e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value
      inputFn(value)
      setInputValue(value)
    }, 200)
  }, [])

  return (
    <div className="">
      <input
        type="text"
        onChange={oninputHandler}
      />
      {icon}
    </div>
  )
}
export default Input