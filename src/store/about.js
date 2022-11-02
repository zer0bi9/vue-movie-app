export default {
  namespaced: true,
  // 상태는 함수인 이유? 객체 데이터는 배열 데이터와 동열하게 참조형이므로 데이터의 불변성을 유지하기 위해 함수로 만들어 반환해야 고유함을 유지
  state: () => ({
    name: 'ZER0BI9',
    email: 'zerobi9@gmail.com',
    blog: 'https://zer0bi9',
    phone: '+82-10-1234-5678',
    image: 'https://png.pngtree.com/png-clipart/20200709/original/pngtree-abstract-s-letter-circle-vector-logo-design-alphabet-circle-logo-vector-png-image_3611616.jpg'
  })
}