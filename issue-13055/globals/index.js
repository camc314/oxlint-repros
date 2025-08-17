/**
 * Globals.js
 *
 * @description ::
 * @help        ::
 */

/* global Enum */

const i18nFactory = require('i18n-2')

global.__APPERROR = function (s) {
    Logger.log({
        level: 'error',
        message: s,
    })
}

global.__GLOBALINITIALIZED = true
global.__STARTLAUNCH = new Date()

function initLogger() {
    const { transports, createLogger, format, addColors } = require('winston')
    const { combine, colorize, timestamp, label, prettyPrint, simple, splat, printf } = format

    const customLevels = {
        colors: {
            //silly: '',
            input: 'grey',
            verbose: 'cyan',
            prompt: 'grey',
            info: 'green',
            data: 'grey',
            help: 'cyan',
            warn: 'yellow',
            debug: 'blue',
            error: 'red',
        },
    }

    const myFormat = printf((info) => {
        return `${info.timestamp} ${info.level}: ${info.message}`
    })

    let loggerSettings = {
        transports: [
            new transports.Console({
                level: 'debug',
                format: combine(
                    format.json(),
                    format.colorize({ all: true }),
                    timestamp(),
                    splat(),
                    myFormat,
                ),
                defaultMeta: {},
            }),
        ],
        exitOnError: false,
    }

    addColors(customLevels.colors)
    global.Logger = createLogger(loggerSettings)

    String.prototype.capitalize = function () {
        return this.replace(/(^|\s)([a-z])/g, function (m, p1, p2) {
            return p1 + p2.toUpperCase()
        })
    }
}

module.exports = {
    /**
     * @desc
     * @param
     * @return
     **/

    initialize: async function (env) {
        initLogger()
        if (global.sails === undefined) {
            global.sails = {
                config: require(`${process.cwd()}/config/env/${env}`),
            }

            _.merge(sails.config.custom, require(`${process.cwd()}/config/common.js`).common)

            sails.config.i18n = { locales: ['en', 'fr'], path: sails.config.custom.pathI18n }
            global.i18n = new i18nFactory({
                locales: sails.config.i18n.locales,
                defaultLocale: 'en',
                directory: sails.config.i18n.path,
                extension: '.json',
                devMode: false,
            })
        }

        if (sails.log === undefined) {
            sails.log = {
                verbose: function (s) {
                    Logger.log({
                        level: 'verbose',
                        message: s,
                    })
                },
                info: function (s) {
                    Logger.log({
                        level: 'info',
                        message: s,
                    })
                },
                debug: function (s) {
                    Logger.log({
                        level: 'debug',
                        message: s,
                    })
                },
                warn: function (s) {
                    Logger.log({
                        level: 'warn',
                        message: s,
                    })
                },
                error: function (s) {
                    Logger.log({
                        level: 'error',
                        message: s,
                    })
                },
            }
        }
        global.APPNAME = sails.config.shortAppName
    },

    /**
     * @desc
     * @param
     * @return
     **/

    loadModules: function (path, filter = /(.+)\.js$/) {
        let modules = require('include-all')({
            dirname: `${process.cwd()}/${path}`,
            filter,
        })

        for (let moduleName in modules) {
            global[moduleName] = modules[moduleName]
            sails.log.debug(`Module ${moduleName} loaded`)
        }
    },
}
