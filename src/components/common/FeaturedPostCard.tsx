import React from 'react'
import { Post } from '@constants/interface'
import Default from '@utils/interface'
import TailwindProperties from '@utils/tailwindProperties'
import CategoryButton from '@components/common/CategoryButton'
import dateFormer from '@utils/date_former'

interface FeaturedPostCard extends Default {
  response: Post | null
}
function FeaturedPostCard({ response, className }: FeaturedPostCard) {
  if (!response)
    return (
      <div className="w-auto h-80 md:h-70 md:m-4">
        <div className="_bg-skeleton w-auto h-full md:m-6 md:rounded" />
      </div>
    )
  const { data, status, message } = response
  const clickListener = (): void => {
    window.location.href = '#'
  }
  const style: TailwindProperties = {
    sm: 'sm:block sm:p-4 sm:cursor-pointer sm:hover:bg-neutral-100',
    base: 'block pb-1 border-b border-neutral-300',
  }
  return (
    <div
      onClick={clickListener}
      className={`${style.sm} ${style.base} ${className}`}>
      <div>
        <img
          alt="thumbnail"
          className="w-full h-40 object-cover  sm:rounded sm:w-full sm:h-80"
          src={data.thumbnailUrl}
        />
      </div>
      <div className="px-6 pb-2  sm:px-0">
        <div title="text" className="flex justify-between items-center mt-4">
          <CategoryButton
            className="text-xs font-bold"
            categoryId={data.categoryId}
          />
          <span className="text-xs font-normal text-neutral-400">
            {dateFormer(data.createdDate.slice(0, 10))}
          </span>
        </div>
        <h1 className="text-xl font-black text-gray-700 line-clamp-2 tracking-tight mt-3  sm:text-2xl sm:line-clamp-2">
          {data.title}
        </h1>
        <p className="text-xs font-normal text-neutral-500 line-clamp-4 mt-0 sm:mt-2">
          {data.content}
        </p>
        <a href="#" className="w-fit h-fit flex items-center gap-2 mt-2">
          <img
            alt="profile"
            src={data.author.imageUrl}
            className="w-6 h-6 rounded-full sm:w-8 sm:h-8"
          />
          <h1 className="text-xs sm:text-sm font-bold text-neutral-500 mt-1">
            {data.author.nickName}
          </h1>
        </a>
      </div>
    </div>
  )
}
export default FeaturedPostCard
