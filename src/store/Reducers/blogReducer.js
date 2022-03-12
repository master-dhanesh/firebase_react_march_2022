import { 
        BLOG_FAIL, 
        BLOG_REQUEST, 
        BLOG_SUCCESS,
        BLOG_CREATE,
} from '../ActionTypes';


const initState = {
    blogs: [],
    errors: null,
    loading: false
};

const blogReducer = (state=initState, {type, payload}) => {
    switch (type) {
        case BLOG_REQUEST:
            return {
                ...state,
                loading: true
            }
        case BLOG_SUCCESS:
            
            return {
                ...state,
                loading: false,
                blogs: payload
            }
        case BLOG_FAIL:
            return {
                ...state,
                loading: false,
                errors: payload
            }
        case BLOG_CREATE: 
            let b = [...state.blogs, payload];
            return {
                ...state,
                loading: false,
                blogs: b
            }
        default:
            return state;
    }
}

export default blogReducer