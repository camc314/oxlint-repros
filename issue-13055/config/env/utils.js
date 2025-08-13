function BUILD_CONNECTURI(uri, opts = { tls: true }) {
    const URL = require('url')
    var params = URL.parse(uri)
    let obj = {
        url: uri,
        tls: false,
        port: params.port,
        host: params.hostname,
        db: params.pathname ? parseInt(params.pathname.split('/')[1]) : 0,
        username: (params.auth || '').split(':')[0],
        password: (params.auth || '').split(':')[1],
    }
    if (params.protocol == 'rediss:') obj.tls = true
    if (opts !== undefined) obj = Object.assign(opts, obj)
    return obj
}

module.exports = {
    BUILD_CONNECTURI,
}
