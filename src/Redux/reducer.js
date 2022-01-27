
const INITIAL_VALUE = {
    fav: []
}

export const fav_reducer = ( state = INITIAL_VALUE  , action ) => {
    switch (action.type){
        case "REST_FAV":
            return {
                fav: []
            }

        case "ADD_TO_FAV":
            return {
                fav: [ ...state.fav , action.payload ]
            }

        case "REMOV":
            return {
                fav: state.fav.filter( i => i !==  action.payload )
            }

        default :
            return state;
    }
}
