let ENV  = {
}

if(process.env.NODE_ENV === "production"){
    ENV  = {
        "version": "1.0.1",
        "description": "uni-app",
        "url": "https://....",
        "api": "https://...." //接口
    }
}else if(process.env.NODE_ENV === "pre"){
    ENV  = {
        "version": "1.0.1",
        "description": "uni-app",
        "url": "https://....",
        "api": "https://...."
    }

}else{
    ENV  = {
        "version": "1.0.1",
        "description": "uni-app",
        "url": "https://....",
        "api": "https://...." //测试接口
    }
}
export default ENV