import { YOUTUBE_SEARCH_API, YOUTUBE_VIDEO_API } from "./constants"

export const fetchVideos = async () => {
    const resp = await fetch(YOUTUBE_VIDEO_API)
    const data = await resp.json()
    return data.items
}

export const searchApi = async (query) => {
    try {
        const res = await fetch(YOUTUBE_SEARCH_API + query)
        const data = await res.json()
        return JSON.stringify(data.items[1])
    } catch (error) {
        console.log(error);
    }
}