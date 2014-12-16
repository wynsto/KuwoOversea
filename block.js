chrome.webRequest.onBeforeRequest.addListener(
        function(details) {
          return {cancel: true};
        },
        {urls: ["http://webstat.kuwo.cn/webpv/www.jpg","http://www.kuwo.cn/yy/PlayCheckIp*","http://webstat.kuwo.cn/npv/all.jpg*","http://webstat.kuwo.cn/logtj/comm/commjstj/webmusic/web_player_ip.jpg*","http://webstat.kuwo.cn/logtj/comm/webplayer/playinit.jpg*","http://hm.baidu.com/hm.gif*","http://webstat.kuwo.cn/npv/webmusic.jpg","http://wa.kuwo.cn/lyrics/img/kwgg/kwgg_372.js","http://wa.kuwo.cn/lyrics/img/kwgg/kwgg_212.js","http://webstat.kuwo.cn/logtj/comm/commjstj/webmusic/play_song_sum.jpg*","http://td.atm.youku.com/tdcm/adcontrol*","http://valf.atm.youku.com/*","http://valc.atm.youku.com/*","http://valo.atm.youku.com/*","http://v.aty.sohu.com/*","http://pro.hoye.letv.com/*","http://ark.letv.com/*","http://livew.l.qq.com/*","http://livem.l.qq.com/*","http://d.cntv.cn/*","http://pubads.g.doubleclick.net/gampad/adx?*","http://pub.funshion.com/interface/deliver?*","http://policy.cupid.qiyi.com/*","http://acs.56.com/*","http://de.as.pptv.com/ikandelivery/vast/*"]},
        ["blocking"]);
