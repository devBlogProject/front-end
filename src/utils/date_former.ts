export default function dateFormer(date: string) {
  const dates: Array<string> = date.split('-')
  return dates[0] + '년 ' + dates[1] + '월 ' + dates[2] + '일'
}
