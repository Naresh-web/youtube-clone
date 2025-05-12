import { useEffect } from 'react'
const Card = ({info}) => {
    const {snippet, statistics} = info
    const {channelTitle, title, thumbnails} = snippet
    return <>
        <div className="videocard">
            <div className="thumbnail">
                <img src={thumbnails.medium.url} alt="" />
            </div>
            <div className="videoContent">
                <div className="left">
                    <img src={thumbnails.default.url} alt="" />
                </div>
                <div className="right flex-4/5">
                <p className='font-bold font-14'>{title}</p>
                <ul>

                    <li>{channelTitle}</li>
                    <li>{statistics.viewCount} Views</li>
                </ul>
                </div>
            </div>
        </div>
    </>
}
export const AdVideo = ({info}) => {
    return (
        <div className="w-80 whitespace-pre-line flex border rounded-lg">
            <Card info={info}/>
        </div>
    )
}
export default Card