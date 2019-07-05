module.exports = {
    configureWebpack: (config) => {
        console.log(process.env.NODE_ENV)
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
            config.mode = 'production';
        } else {
            // 为开发环境修改配置...
            config.mode = 'development';
        }
        console.log(config.mode)
    }
}