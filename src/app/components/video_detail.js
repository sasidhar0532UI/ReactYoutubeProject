import React from 'react';
const VideoDetail = (props) => {
    const video = props.video;
    console.log(video)

    if (!video) {
        return <div>Loading..!</div>
    }

    const Id = video.id.videoId;
    const url = `https://www.youtube.com/embed/${Id}`;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
            </div>
        </div>
    )
}
export default VideoDetail;