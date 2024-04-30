'use client'
import { initializeTheme } from "@/store/theme"
import { ReactNode, useLayoutEffect } from "react"

interface ClientRootConatinerProps {
  children: ReactNode
}

const ClientRootConatiner = ({
  children
}: ClientRootConatinerProps) => {
  useLayoutEffect(() => {
    initializeTheme()
  }, [])
  return (
    <>
      { children }
    </>
  )
}
export default ClientRootConatiner