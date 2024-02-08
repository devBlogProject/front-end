import { useEffect } from 'react'
import TailwindProperties from '@utils/tailwindProperties'

function Navigator(className: any): React.JSX.Element {
  useEffect((): void => {
    const navigator: HTMLElement | null = document.getElementById(id)
    window.addEventListener('scroll', (): void => {
      if (navigator === null) return
      navigator.style.transition = '1s ease-in-out'
      window.addEventListener('scroll', (): void => {
        if (navigator === null) return
        if (window.scrollY > 1) {
          navigator.style.height = '4rem'
        } else {
          navigator.style.height = '4.5rem'
        }
      })
    })
  }, [])
  const id: string = 'navigator--'
  const style: TailwindProperties = {
    sm: 'sm:w-full sm:flex sm:items-center sm:fixed sm:top-0 sm:left-0 sm:px-32 sm:bg-white sm:border-b sm:border-neutral-200 sm:z-50',
    base: 'w-full fixed top-0 left-0 bg-white border-b border-neutral-200',
  }

  return (
    <section>
      <div
        className={`${style.sm} ${style.base} ${className}`}
        id={id}
        style={{ height: '4.5rem' }}></div>
      <div style={{ height: '4.5rem' }} />
    </section>
  )
}

export default Navigator
