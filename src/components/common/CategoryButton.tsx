import Default from '@utils/interface'

const color: Array<string> = [
  'bg-yellow-400 text-yellow-100',
  'bg-green-400 text-green-600',
]
const text: Array<string> = ['DESIGN', 'DEVELOPER']

interface Interface extends Default {
  categoryId: number
}
function CategoryButton({ categoryId, className }: Interface) {
  return (
    <div className={`flex items-center px-1 ${color[categoryId]} ${className}`}>
      <a href="#" style={{ padding: '2px 0 0 0' }}>
        {text[categoryId]}
      </a>
    </div>
  )
}

export default CategoryButton
