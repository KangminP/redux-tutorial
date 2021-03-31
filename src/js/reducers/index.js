import { ADD_ARTICLE } from "../constants/action-types"

const initialState = {
    articles: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            // 불변성 깨뜨림
            // 1. state.articles.push(action.payload)
            //    return state
            // 2. return { ...state, articles: state.articles.concat(action.payload)}
            // 3. spread 연산자
            return { ...state, articles: [...state.articles, action.payload]}
        default:
            return state
    }
}

export default rootReducer