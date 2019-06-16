# react-av-player

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

react-av-player是一个视频音乐播放器React组件，支持多种视频/音乐平台

# 支持的平台
|视频|音乐|
|:--:|:--:|
|优酷|网易云音乐|
|腾讯视频||
|爱奇艺||
|Bilibili||
|Youtube||
|TED||

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
