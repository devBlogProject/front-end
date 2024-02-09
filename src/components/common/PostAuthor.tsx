import React from 'react'

interface PostAuthor extends Default {
  data: PostAuthor
}
function PostAuthor({ data, className }: PostAuthor) {
  const { createdDate, updatedDate, nickName, imageUrl } = data
  const style: TailwindProperties = {
    xl: '',
    base: '',
  }
  return (
    <section className={`${style.xl} ${style.base} ${className}`}>
      <img alt="profile_img" src={imageUrl} />
      <h1>{nickName}</h1>
      <h2>{createdDate}</h2>
      <h2>{updatedDate}</h2>
    </section>
  )
}
export default PostAuthor
