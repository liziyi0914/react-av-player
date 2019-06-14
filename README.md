# react-av-player

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

react-av-player提供视频、音乐播放器，支持多种视频/音乐平台

# 支持的平台
|视频|音乐|
|:--:|:--:|
|优酷|网易云音乐|
|腾讯视频||
|爱奇艺||
|Bilibili||
|Youtube||

# 使用方式
## 优酷
```javascript
import { Video } from 'react-av-player';

...
<Video type="Youku" args={aid=123,cid=456}/>
...
```

[build-badge]: https://img.shields.io/travis/liziyi0914/react-av-player/master.png?style=flat-square
[build]: https://travis-ci.org/liziyi0914/react-av-player

[npm-badge]: https://img.shields.io/npm/v/react-av-player.png?style=flat-square
[npm]: https://www.npmjs.org/package/react-av-player

[coveralls-badge]: https://coveralls.io/repos/github/liziyi0914/react-av-player/badge.svg?branch=master
[coveralls]: https://coveralls.io/github/liziyi0914/react-av-player?branch=master
