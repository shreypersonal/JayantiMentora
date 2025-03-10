import { logger } from 'react-native-logs'
import { consoleTransport } from 'react-native-logs/dist/transports/consoleTransport'

const logLevels = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
}

const defaultConfig = {
  levels: logLevels,
  severity: 'info',
  transportOptions: {
    colors: {
      info: 'blue',
      warn: 'yellow',
      error: 'red',
    },
  },
  async: true,
  dateFormat: 'time',
  printLevel: true,
  printDate: true,
  enabled: true,
}

const log = logger.createLogger(defaultConfig)

// After creating your logger, you can use the __DEV__  to log only in development
if (__DEV__) {
  log.setSeverity('debug')
}

export { log }
