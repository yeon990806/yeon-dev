'use client'
import { ReactNode, useLayoutEffect } from "react"
import { initializeTheme } from "@/store/theme"
import { KBarAnimator, KBarPortal, KBarPositioner, KBarProvider, KBarSearch } from "kbar";
import { SHORTCUT } from "@/libs/shortcut";

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
      <KBarProvider actions={SHORTCUT}>
        <KBarPortal>
          <KBarPositioner>
            <KBarAnimator>
              <KBarSearch />
            </KBarAnimator>
          </KBarPositioner>
        </KBarPortal>
      </KBarProvider>
      { children }
    </>
  )
}
export default ClientRootConatiner