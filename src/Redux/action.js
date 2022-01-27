
export const fav_reset = () => {
    return {
        type:"REST_FAV",
    }
}

export const add_to_fav = (payload) => {
    return {
        type:"ADD_TO_FAV",
        payload
    }
}

export const remov_to_fav = (payload) => {
    return {
        type:"REMOV",
        payload
    }
}