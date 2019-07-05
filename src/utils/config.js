let ENV  = {
}

if(process.env.NODE_ENV === "production"){
    ENV  = {
        "version": "1.0.1",
        "description": "铁航接送机项目小程序",   
        "img_url": "https://mgr.jichangzhuanxian.com/",
        "url": "https://wechat.jichangzhuanxian.com",
        "api": "https://mgr.jichangzhuanxian.com/", //接口
        "sorket": "https://mgr.jichangzhuanxian.com/",
        "baiduMap": {
            "ak": '7yqnu8ZMk9qK0sQwfzmOAGouVWrHNoPO', //百度地图开发者 web AK
            "suggestionUrl": "https://api.map.baidu.com/place/v2/suggestion/", //百度地图建议地址 http://lbsyun.baidu.com/index.php?title=webapi/place-suggestion-api
            "trackHistoryUrl": "https://api.map.baidu.com/trace/v2/track/gethistory", //查询某一个监控对象一天之内轨迹接口
            "entityListUrl": "https://api.map.baidu.com/trace/v2/entity/list",
            "service_id": "139760",
        },
    }
}else if(process.env.NODE_ENV === "pre"){
    ENV  = {
        "version": "1.0.1",
        "description": "铁航接送机项目小程序",   
        "url": "https://pre.jichangzhuanxian.com/",
        "img_url": "https://test.jichangzhuanxian.com/",
        "api": "https://test.jichangzhuanxian.com/", 
        "sorket": "https://test.jichangzhuanxian.com/",
        "baiduMap": {
            "ak": '7yqnu8ZMk9qK0sQwfzmOAGouVWrHNoPO', //百度地图开发者 web AK
            "suggestionUrl": "https://api.map.baidu.com/place/v2/suggestion/", //百度地图建议地址 http://lbsyun.baidu.com/index.php?title=webapi/place-suggestion-api
            "trackHistoryUrl": "https://api.map.baidu.com/trace/v2/track/gethistory", //查询某一个监控对象一天之内轨迹接口
            "entityListUrl": "https://api.map.baidu.com/trace/v2/entity/list",
            "service_id": "139760",
        }, //websorket 地址  后台推送消息给微信页面 三方公用界面也使用这个链接*/
    }

}else{
    ENV  = {
        "version": "1.0.1",
        "description": "铁航接送机项目小程序",      
        "url": "https://test.jichangzhuanxian.com",
        "img_url": "https://test.jichangzhuanxian.com/",
        "api": "https://test.jichangzhuanxian.com/", //测试接口
        "sorket": "https://test.jichangzhuanxian.com/", 
        "baiduMap": {
            "ak": '7yqnu8ZMk9qK0sQwfzmOAGouVWrHNoPO', //百度地图开发者 web AK
            "suggestionUrl": "https://api.map.baidu.com/place/v2/suggestion/", //百度地图建议地址 http://lbsyun.baidu.com/index.php?title=webapi/place-suggestion-api
            "trackHistoryUrl": "https://api.map.baidu.com/trace/v2/track/gethistory", //查询某一个监控对象一天之内轨迹接口
            "entityListUrl": "https://api.map.baidu.com/trace/v2/entity/list",
            "service_id": "139760",
        },
    }
}
export default ENV