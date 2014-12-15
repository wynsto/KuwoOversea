// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

 chrome.webRequest.onBeforeRequest.addListener(
        function(details) {
          return {cancel: true};
        },
        {urls: ["http://webstat.kuwo.cn/webpv/www.jpg","http://www.kuwo.cn/yy/PlayCheckIp*","http://webstat.kuwo.cn/npv/all.jpg*","http://webstat.kuwo.cn/logtj/comm/commjstj/webmusic/web_player_ip.jpg*","http://webstat.kuwo.cn/logtj/comm/webplayer/playinit.jpg*","http://hm.baidu.com/hm.gif*","http://webstat.kuwo.cn/npv/webmusic.jpg","http://wa.kuwo.cn/lyrics/img/kwgg/kwgg_372.js","http://wa.kuwo.cn/lyrics/img/kwgg/kwgg_212.js","http://webstat.kuwo.cn/logtj/comm/commjstj/webmusic/play_song_sum.jpg*"]},
        ["blocking"]);
