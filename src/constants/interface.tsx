export interface Post {
  status: string
  data: {
    createdDate: string
    updatedDate: string
    id: number
    title: string
    content: string
    thumbnailUrl: string
    categoryId: number
    author: {
      createdDate: string
      updatedDate: string
      email: string
      nickName: string
      authority: string
      imageUrl: string
      socialType: string
    }
    postNum: number
    viewCount: number
  }
  message: string
}

export const PostResponse: Post = {
  status: 'string',
  data: {
    createdDate: '2024-01-16T06:03:59.294Z',
    updatedDate: '2024-01-16T06:03:59.294Z',
    id: 0,
    title: '자바스크립트의 await 사건의 지평선',
    content:
      '모든 블랙홀 주변에는 중력을 벗어나기 위해 필요한 속도가 광속을 초과하는 경계가 있습니다. 빛을 포함한 무엇이든 그 경계를 넘어가면 불가사의한 블랙홀의 내부에 영원히 갇히게 됩니다. 탈출구는 없으며 나머지 우주로 돌아갈 방법도 없습니다. 이 경계를 블랙홀의 사건의 지평선이라고 부릅니다.\n' +
      '\n' +
      '자바스크립트의 Promise 주위에는 이와 유사한 경계가 있습니다. 실행 흐름이 일단 이 경계를 넘어가면, 강제로 탈출하거나 원래 있던 곳으로 돌아올 방법이 없습니다. 저는 이 경계를 Promise의 await 사건의 지평선이라고 부르겠습니다.\n' +
      '\n' +
      'async 함수는 Promise의 결괏값을 위해 멈출 때마다 await 사건의 지평선을 가로지르게 됩니다. 일단 한번 넘어가면 Promise가 처리되기 전까지 제어권은 절대 넘어오지 않습니다. 그리고 Promise가 처리된다고 보장할 수 있는 방법이 전혀 없습니다. 아마 이벤트 루프의 다음 tick에서 바로 처리되거나, 최악의 경우에는 절대 처리되지 않을 수도 있습니다. 만약 이 상황이 된다면 불쌍한 대기 함수는 영원히 무기력한 상태에 빠지게 됩니다. 마치 호박석 속의 곤충과 같이 말이죠.\n' +
      '\n' +
      '이는 이론적이기보다는 중요하고 실질적인 문제입니다. 예를 들어, 일부 설정을 진행하고, 동작을 수행하며, 필요한 해체 작업을 하는 매우 일반적인 패턴을 구현한 async 함수를 생각해 보세요. 아래의 코드에서 async 함수는 lock을 얻고, 인자로 받은 함수를 기다린 다음, 작업이 완료되면 lock을 해제합니다.',
    thumbnailUrl:
      'https://velog.velcdn.com/images/sehyunny/post/9a074eca-4274-4f46-8970-62b73fa5243e/image.png',
    categoryId: 0,
    author: {
      createdDate: '2024-01-16T06:03:59.294Z',
      updatedDate: '2024-01-16T06:03:59.294Z',
      email: 'string',
      nickName: 'sehyun hwang',
      authority: 'MEMBER',
      imageUrl:
        'https://images.velog.io/images/sehyunny/profile/6ebb7b31-b87d-4007-a417-1d8e6c71d23d/hwangse.png',
      socialType: 'GOOGLE',
    },
    postNum: 0,
    viewCount: 0,
  },
  message: 'string',
}
