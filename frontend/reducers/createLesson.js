export const initialCreateLessonState = {
    image:"",
    file:null,
    token:""
}

const createLessonReducer = (state,action) => {
    switch (action.type) {
        case "SET_IMAGE":
            return {
                ...state,
                image:action.payload
            }
        case "SET_TOKEN":
            return {
                ...state,
                token:action.payload
            }
        case "SET_FILE":
            return {
                ...state,
                file:action.payload
            }
        default:
            return state;
    }
}
export default createLessonReducer
