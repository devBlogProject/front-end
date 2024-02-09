import React from 'react'
import PostCategories from '@components/common/PostCategories'
import PostStats from '@components/common/PostStats'
import Author from '@components/common/PostAuthor.tsx'

function PostDescription() {
  return (
    <section title="panel">
      <h1>Title of the Post</h1>
      <div className="w-fit h-fit flex items-center">
        <PostStats data={{ likeCount: 0, viewCount: 0 }} />
        <PostCategories data={[0, 1, 2]} />
      </div>
      <Author data={author} />
    </section>
  )
}
export default PostDescription
