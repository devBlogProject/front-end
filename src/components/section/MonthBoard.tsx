import React from 'react'
import { PostResponse } from '@constants/interface'
import Default from '@utils/interface'
import TailwindProperties from '@utils/tailwindProperties'
import FeaturedPostCard from '@components/common/FeaturedPostCard'
import { DefaultPostCard } from '@components/common/DefaultPostCard'

function MonthBoard({ className }: Default): React.JSX.Element {
  const style: TailwindProperties = {
    xl: 'xl:w-auto xl:flex xl:mx-28 xl:gap-4',
    lg: 'lg:w-auto lg:flex lg:mx-4 lg:gap-4',
    md: 'md:w-auto md:flex md:mx-4 md:gap-4',
    sm: 'sm:w-auto sm:grid sm:justify-center sm:items-start sm:mx-4',
    base: 'w-full grid',
  }
  return (
    <section
      className={`${style.xl} ${style.lg} ${style.md} ${style.sm} ${style.base} ${className}`}>
      <div title="1,1" className="w-full flex-wrap  lg:w-3/5">
        <FeaturedPostCard response={null} />
      </div>
      <div title="1,4" className="w-full flex-wrap grid gap-0  lg:w-2/5">
        <DefaultPostCard response={PostResponse} />
        <DefaultPostCard response={PostResponse} />
        <DefaultPostCard response={null} />
      </div>
    </section>
  )
}

export default MonthBoard
