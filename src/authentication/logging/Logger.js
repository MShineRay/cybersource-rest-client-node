const winston = require('winston');
const { format } = require('winston');
const DataMasker = require('./SensitiveDataMasker');
const { combine, timestamp, label, printf } = format;
require('winston-daily-rotate-file');

const maskedLoggingFormat = printf(({ level, message, label, timestamp }) => {
  return `[${timestamp}] [${level.toUpperCase()}] [${label}] : ${DataMasker.maskSensitiveData(message)}`;
});

const unmaskedLoggingFormat = printf(({ level, message, label, timestamp }) => {
  return `[${timestamp}] [${level.toUpperCase()}] [${label}] : ${JSON.stringify(message)}`;
});

exports.getLogger = function (merchantConfig, loggerCategory = 'UnknownCategoryLogger') {
  var enableLog = merchantConfig.getLogConfiguration().isLogEnabled();
  var enableMasking = merchantConfig.getLogConfiguration().isMaskingEnabled();
  var loggerCategoryRandomiser = Math.floor((Math.random() * 1000) + 1);
  var newLogger;

  if (enableLog) {
    var appTransports = createTransportFromConfig(merchantConfig);

    var loggingLevel = merchantConfig.getLogConfiguration().getLoggingLevel();

    newLogger = winston.loggers.get(loggerCategory + loggerCategoryRandomiser, {
      level: loggingLevel,
      format: combine(
        label({ label: loggerCategory }),
        timestamp(),
        enableMasking ? maskedLoggingFormat : unmaskedLoggingFormat
      ),
      transports: appTransports
    });
  } else {
    newLogger = winston.loggers.get(loggerCategory + loggerCategoryRandomiser, {
      level: loggingLevel,
      format: combine(
        label({ label: loggerCategory }),
        timestamp(),
        enableMasking ? maskedLoggingFormat : unmaskedLoggingFormat
      ),
      transports: [new winston.transports.Console({
        silent: !enableLog
      })]
    });
  }

  return newLogger;
}

function createTransportFromConfig(mConfig) {
  var transports = [];

  var enableLog = mConfig.getLogConfiguration().isLogEnabled();
  var loggingLevel = mConfig.getLogConfiguration().getLoggingLevel();
  var maxLogFiles = mConfig.getLogConfiguration().getMaxLogFiles();
  var logFileName = mConfig.getLogConfiguration().getLogFileName();
  var logDirectory = mConfig.getLogConfiguration().getLogDirectory();

  transports.push(new winston.transports.DailyRotateFile({
    level: loggingLevel,
    filename: logFileName + '-%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    dirname: logDirectory,
    maxFiles: maxLogFiles,
    silent: !enableLog
  }));

  return transports;
}