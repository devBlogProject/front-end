import MonthBoard from '@components/section/MonthBoard'
import LatestBoard from '@components/section/LatestBoard'
import WeekBoard from '@components/section/WeekBoard'
import FilteredBoard from '@components/section/FilteredBoard'

const Home = () => {
  return (
    <main>
      <MonthBoard className="my-8" />
      <WeekBoard className="my-8" />
      <LatestBoard className="my-8" />
      <FilteredBoard className="my-8" />
    </main>
  )
}

export default Home
