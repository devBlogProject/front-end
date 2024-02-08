import React from 'react'
import { Post } from '@constants/interface'
import Default from '@utils/interface'
import CategoryButton from '@components/common/CategoryButton'
import dateFormer from '@utils/date_former.ts'
import TailwindProperties from '@utils/tailwindProperties.ts'

interface Interface extends Default {
  response: Post | null
}

/*Default PostCard*/
export function DefaultPostCard({
  response,
  className,
}: Interface): React.JSX.Element {
  if (!response)
    return (
      <div className="w-full md:h-44 h-80">
        <div className="_bg-skeleton w-full h-full" />
      </div>
    )
  const { data, status, message } = response
  const clickHandler = (): void => {
    window.location.href = '#'
  }
  const style: TailwindProperties = {
    sm: 'sm:flex sm:items-center sm:py-4 sm:px-4 sm:border-b sm:border-neutral-300 sm:hover:bg-neutral-100 sm:cursor-pointer',
    base: 'block border-b border-neutral-300',
  }
  return (
    <div
      onClick={clickHandler}
      className={`${style.sm} ${style.base} ${className}`}>
      <img
        alt="thumbnail"
        className="w-full h-40 sm:h-36 sm:w-36 sm:flex-wrap sm:rounded object-cover"
        src={data.thumbnailUrl}
      />
      <div className="flex-wrap w-full sm:ml-4 px-6 py-4 sm:p-0">
        <div className="flex items-center justify-between">
          <CategoryButton
            className="text-xs font-bold"
            categoryId={data.categoryId}
          />
          <span className="text-xs font-normal mt-1 text-neutral-400">
            {dateFormer(data.createdDate.slice(0, 10))}
          </span>
        </div>
        <h1 className="text-xl font-black text-gray-800 tracking-tight line-clamp-1 mt-4  sm:mt-1">
          {data.title}
        </h1>
        <p className="text-xs font-normal text-neutral-500 line-clamp-3 mt-1">
          {data.content}
        </p>
        <a href="#" className="flex items-center gap-2 pt-2">
          <img
            alt="profile"
            src={data.author.imageUrl}
            className="w-6 h-6 rounded-full border border-neutral-200"
          />
          <h1 className="text-xs font-bold text-neutral-500 mt-1">
            {data.author.nickName}
          </h1>
        </a>
      </div>
    </div>
  )
}
