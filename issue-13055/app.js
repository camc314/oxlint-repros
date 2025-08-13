let pkg = require(`${process.cwd()}/package.json`)

async function start() {
    global.Globals = await require('./globals')
    Globals.initialize(process.env.NODE_ENV)

    console.log(__GLOBALINITIALIZED)
    let x = SAFEBOX_ENCRYPTFIELD.vault('encrypted')
}
start()
