import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

// TODO: 한번 true로 세팅된 값을 동적으로 변경 가능하도록 로직 추가
export const TokenAtom = atom({
  key: 'TokenAtom',
  default: false,
  effects_UNSTABLE: [persistAtom],
})
