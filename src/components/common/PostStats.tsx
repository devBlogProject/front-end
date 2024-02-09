import React, { useState } from 'react'
import TailwindProperties from '@utils/tailwindProperties.ts'

interface PostStats extends Default {
  data: {
    viewCount: number
    likeCount: number
    /* like의 증하강에 대한 POST와 관련된 다른 정보가 더 포함될 예정입니다. */
  }
}
function PostStats({ data, className }: PostStats) {
  const { viewCount, likeCount } = data
  const [like, setLike] = useState<boolean>(likeCount)
  const closeHandler = () => {
    // 포스트에 좋아요를 누른 이후에 이를 취소하는 상황이 있을 수 있습니다. 이때 불필요한 송수신을 막기 위해 페이지를 닫을 때, like의 POST를 이루어지게 합니다.
    console.log('POST likeCount')
  }
  const activateLike = () => {
    setLike(true)
    window.addEventListener('close', closeHandler)
  }
  const deactivateLike = () => {
    setLike(false)
    window.removeEventListener('close', closeHandler)
  }
  const clickHandler = () => {
    if (!like) activateLike()
    else deactivateLike()
  }
  const style: TailwindProperties = {
    xl: '',
    base: 'w-fit h-fit flex items-center gap-4',
  }
  return (
    <div className={`${style.xl} ${style.base} ${className}`}>
      <button
        title="view"
        className="px-4 py-2 bg-neutral-100">{`${viewCount}`}</button>
      <button
        title="like"
        className={`px-4 py-2 bg-neutral-100 ${like ? 'text-red-100' : 'text-black'}`}
        onClick={clickHandler}>{`${likeCount}`}</button>
      <button title="another attribute">0</button>
    </div>
  )
}

export default PostStats
