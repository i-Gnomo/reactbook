import React from 'react';

class Video extends React.Component {
	render() {
		return <video style={this.props.style} src={this.props.videosrc} type="video/mp4" controls autoPlay="true">播放视频</video>;
	}
}

export default Video