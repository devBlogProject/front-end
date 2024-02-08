import React from 'react'
import FeaturedPostCard from '@components/common/FeaturedPostCard'
import { PostResponse } from '@constants/interface'
import Default from '@utils/interface'
import TailwindProperties from '@utils/tailwindProperties'

function WeekBoard({ className }: Default): React.JSX.Element {
  const style: TailwindProperties = {
    xl: 'xl:w-auto xl:flex xl:mx-36 xl:gap-8',
    lg: 'lg:w-auto xl:flex lg:mx-4 lg:gap-4',
    md: 'md:w-auto md:flex md:mx-8 md:gap-4',
    sm: 'sm:w-auto sm:grid sm:mx-4 sm:gap-8',
    base: 'w-full grid mx-0 gap-0',
  }
  return (
    <section
      className={`${style.xl} ${style.lg} ${style.md} ${style.sm} ${style.base} ${className}`}>
      <div className="md:w-1/2 md:flex-wrap w-full">
        <FeaturedPostCard response={null} className="border-t sm:pt-6" />
      </div>
      <div className="md:w-1/2 md:flex-wrap w-full">
        <FeaturedPostCard response={PostResponse} className="border-t sm:pt-6" />
      </div>
    </section>
  )
}
export default WeekBoard
