### Redux 요소
1. store : state가 존재
    createStore : store 생성 함수
2. reducer : 두개의 파라미터를 받는 순수 자바스크립트 함수
    첫번쨰는 초기상태, 두번째는 action
    state는 전적으로 reducer로부터 받아야 함(return)
3. action : state를 바꾸기 위해 store에 보내는 신호(dispatch)

### Redux store state관련 API
1. getState() : 현재 state를 반환
2. dispatch() : action을 보냄
3. subscribe() : state 변화를 알려줌

### react-redux
React와 Redux를 묶어주는 라이브러리
connect 필요
1. mapStateToProps() : Redux state를 React 컴포넌트의 props와 연결
2. mapDispatchProps() : Redux action을 props와 연결
연결하기 위해 Provider 필요 => React App을 감싸서 Redux store 인식