export const QUESTION = 'Question';
export const setQuestion = (questionData) => ({
    type : QUESTION, 
    payload : questionData
})

const initialState = {}

const question = ( state = initialState, action) => {
    switch (action.type){
        case QUESTION :{
            return {
                ...state,
                questionData: action.payload,
            }
        }
        default:
            return state;
    }
};

export default question; 