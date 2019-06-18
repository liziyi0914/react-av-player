# react-av-player

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

react-av-player是一个视频音乐播放器React组件，支持多种视频/音乐平台

# 支持的平台
|视频|音乐|
|:--:|:--:|
|[优酷](https://youku.com/)|[网易云音乐](https://music.163.com/)|
|[腾讯视频](https://v.qq.com/)|[喜马拉雅FM](https://www.ximalaya.com)|
|[爱奇艺](https://iqiyi.com/)||
|[虎牙直播](https://huya.com/)||
|[Bilibili](https://bilibili.com/)||
|[Youtube](https://youtube.com/)||
|[TED](https://ted.com/)||
|[Twitch](https://twitch.tv/)||
|[Mixer](https://mixer.com/)||
|[XVideos](https://xvideos.com/)||
|[Redtube](https://redtube.com/)||

# 使用方式
```javascript
import { Video, Audio } from 'react-av-player';

...
<Video type="Youku" args={{path:'abcd=='}}/>
<Audio type="NeteaseMusic" args={{type:0,id:123,auto:1}}>
...
```


[build-badge]: https://img.shields.io/travis/liziyi0914/react-av-player/master.svg
[build]: https://travis-ci.org/liziyi0914/react-av-player

[npm-badge]: https://img.shields.io/npm/v/react-av-player.svg
[npm]: https://www.npmjs.org/package/react-av-player

[coveralls-badge]: https://coveralls.io/repos/github/liziyi0914/react-av-player/badge.svg?branch=master
[coveralls]: https://coveralls.io/github/liziyi0914/react-av-player?branch=master
