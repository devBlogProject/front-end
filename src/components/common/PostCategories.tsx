import React from 'react'
import Default from '@utils/interface.ts'
import TailwindProperties from '@utils/tailwindProperties.ts'

interface PostCategories extends Default {
  data: {
    categories: number[]
  }
}
function PostCategories({ data, className }: PostCategories) {
  const { categories } = data
  const comps: React.ReactNode[] | null = []
  categories.forEach((element: number, index: number) => {
    comps.push(<Category categoryNumber={element} key={index} />)
  })
  if (!comps) return <></>
  const style: TailwindProperties = {
    xl: '',
    base: '',
  }
  return <div className={`${style.xl} ${style.base} ${className}`}>{comps}</div>
}

const categoryDict = ['design', 'math', 'career']
interface Category extends Default {
  categoryNumber: number
}
function Category({ categoryNumber }: Category) {
  const style: TailwindProperties = {
    xl: '',
    base: 'text-xs font-bold px-4 py-2 rounded-2xl',
  }
  return (
    <div className={`${style.xl} ${style.base}`}>
      {categoryDict[categoryNumber]}
    </div>
  )
}

export default PostCategories
