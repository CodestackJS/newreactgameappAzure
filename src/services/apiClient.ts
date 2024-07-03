

import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        // api key took from api.rawg.io site
        key: 'da2cd7079812461d8e77d2d44e9ca2ba'
    }

})