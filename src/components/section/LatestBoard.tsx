import React from 'react'
import { PostResponse } from '@constants/interface'
import TextPostCard from '@components/common/TextPostCard'
import Default from '@utils/interface'
import TailwindProperties from '@utils/tailwindProperties'

function LatestBoard({ className }: Default): React.JSX.Element {
  const style: TailwindProperties = {
    xl: 'xl:w-auto xl:flex xl:mx-28 xl:gap-4',
    lg: 'lg:w-auto lg:flex lg:mx-4 lg:gap-4',
    md: 'md:w-auto md:grid md:mx-8 md:gap-4',
    sm: 'sm:w-auto sm:grid sm:grid-cols-2 sm:mx-4 sm:gap-4',
    base: 'w-full grid',
  }
  const board: string = 'lg:w-1/4 sm:w-full w-full flex-wrap _float-up'
  return (
    <section
      className={`${style.xl} ${style.lg} ${style.md} ${style.sm} ${style.base} ${className}`}>
      <TextPostCard response={null} className={board} />
      <TextPostCard response={PostResponse} className={board} />
      <TextPostCard response={PostResponse} className={board} />
      <TextPostCard response={PostResponse} className={board} />
    </section>
  )
}

export default LatestBoard
