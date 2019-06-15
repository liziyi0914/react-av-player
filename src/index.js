import React, {Component} from 'react'

class Video extends Component {

	static defaultProps = {
		type: 'NULL',
		args: {}
	};

	render() {
		var { type,args } = this.props;
		var url = '';
		switch(type){
			case 'Bilibili':
				url = '//player.bilibili.com/player.html?aid='+String(args.aid)+'&cid='+String(args.cid)+'&page=1';
				break;
			case 'Youku':
				url = 'http://player.youku.com/embed/'+String(args.path);
				break;
			case 'iQiyi':
				url = 'http://open.iqiyi.com/developer/player_js/coopPlayerIndex.html?vid='+String(args.vid)+'&tvId='+String(args.tvId)+'&accessToken=2.f22860a2479ad60d8da7697274de9346&appKey=3955c3425820435e86d0f4cdfe56f5e7&appId=1368&height=100%&width=100%';
				break;
			case 'Tencent':
				url = 'https://v.qq.com/iframe/player.html?vid='+String(args.vid);
				break;
			case 'Youtube':
				url = 'http://www.youtube.com/embed/'+String(args.path)+'?autoplay=1&controls=0';
				break;
			default:
				return <p>Video Component</p>;
		}
		return <iframe src={url} scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>;
	}
}

class Audio extends Component {

	static defaultProps = {
		type: 'NULL',
		args: {},
		width: 330,
		height: 450
	};

	render() {
		var { type,args,width,height } = this.props;
		var url = '';
		switch(type){
			case 'NeteaseMusic':
				url = '//music.163.com/outchain/player?type='+String(args.type)+'&id='+String(args.id)+'&auto=1&height='+String(height);
				break;
			default:
				return <p>Audio Component</p>;
		}
		return <iframe frameBorder="no" border="0" marginWidth="0" marginHeight="0" width={width} height={height} src={url}></iframe>;
	}

}

export {
	Video,
	Audio
};
