'use strict';

var Constants = require('../util/Constants');

class LogConfiguration {
    enableLog;
    logDirectory;
    logFileName;
    logFileMaxSize;
    loggingLevel;
    maxLogFiles;
    enableMasking;

    constructor(logConfig) {
        this.setLogEnable(logConfig.enableLog);
        this.setLogDirectory(logConfig.logDirectory);
        this.setLogFileName(logConfig.logFileName);
        this.setLogFileMaxSize(logConfig.logFileMaxSize);
        this.setLoggingLevel(logConfig.loggingLevel);
        this.setMaxLogFiles(logConfig.maxLogFiles);
        this.setMaskingEnabled(logConfig.enableMasking);
    }

    isLogEnabled() {
        return this.enableLog;
    }

    /**
     * @param {any} enableLogValue
     */
    setLogEnable(enableLogValue) {
        this.enableLog = enableLogValue;
    }

    isMaskingEnabled() {
        return this.enableMasking;
    }

    /**
     * @param {any} enableMaskingValue
     */
    setMaskingEnabled(enableMaskingValue) {
        this.enableMasking = enableMaskingValue;
    }

    getLogDirectory () {
        return this.logDirectory;
    }

    /**
     * @param {any} logDirectoryValue
     */
    setLogDirectory(logDirectoryValue) {
        this.logDirectory = logDirectoryValue;
    }

    getLogFileName () {
        return this.logFileName;
    }

    /**
     * @param {any} logFileNameValue
     */
    setLogFileName (logFileNameValue) {
        this.logFileName = logFileNameValue;
    }
    
    getLogFileMaxSize () {
        return this.logFileMaxSize;
    }

    /**
     * @param {any} logFileMaxSizeValue
     */
    setLogFileMaxSize (logFileMaxSizeValue) {
        this.logFileMaxSize = logFileMaxSizeValue;
    }

    getLoggingLevel () {
        return this.loggingLevel;
    }

    /**
     * @param {any} loggingLevelValue
     */
    setLoggingLevel (loggingLevelValue) {
        this.loggingLevel = loggingLevelValue;
    }

    getMaxLogFiles () {
        return this.maxLogFiles;
    }
    
    /**
     * @param {any} maxLogFilesValue
     */
    setMaxLogFiles (maxLogFilesValue) {
        this.maxLogFiles = maxLogFilesValue;
    }

    getDefaultLoggingProperties(warningMessage) {
        if (typeof (this.enableLog) === "boolean" && this.enableLog === true) {
            this.enableLog = true;
        } else {
            this.enableLog = false;
        }

        if (typeof (this.enableMasking) === "boolean" && this.enableMasking === true) {
            this.enableMasking = true;
        } else {
            this.enableMasking = false;
        }

        if (this.logFileMaxSize === null || this.logFileMaxSize === "" || this.logFileMaxSize === undefined) {
            this.logFileMaxSize = Constants.DEFAULT_LOG_SIZE;
        }

        if (this.maxLogFiles === null || this.maxLogFiles === "" || this.maxLogFiles === undefined) {
            this.maxLogFiles = Constants.DEFAULT_MAX_LOG_FILES;
        }

        if (this.loggingLevel === null || this.loggingLevel === "" || this.loggingLevel === undefined) {
            this.loggingLevel = Constants.DEFAULT_LOGGING_LEVEL;
        }

        if (this.logFilename === null || this.logFilename === "" || this.logFilename === undefined) {
            this.logFilename = Constants.DEFAULT_LOG_FILENAME;
        }

        if (this.enableLog) {
            var fs = require('fs');
            var path = require('path');
            if (this.logDirectory === null || this.logDirectory === "" || this.logDirectory === undefined) {
                this.logDirectory = Constants.DEFAULT_LOG_DIRECTORY;
                if (!fs.existsSync(this.logDirectory) && this.enableLog === true) {
                    fs.mkdir(path.resolve(this.logDirectory), function (err) {
                        if (err)
                            throw err;
                    })
                }
            }
            else if (!fs.existsSync(this.logDirectory)) {
                this.logDirectory = Constants.DEFAULT_LOG_DIRECTORY;
                warningMessage += Constants.INVALID_LOGDIRECTORY;
                if (!fs.existsSync(this.logDirectory) && this.enableLog === true) {
                    fs.mkdir(path.resolve(this.logDirectory), function (err) {
                        if (err)
                            throw err;
                    })
                }
            }
        }
    }
}

module.exports = LogConfiguration;