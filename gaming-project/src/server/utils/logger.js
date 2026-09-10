// Provee un logger simple y consistente para procesos de servidor y scripts.
function logInfo(message, metadata = {}) {
  console.log(JSON.stringify({ level: 'info', message, metadata, timestamp: new Date().toISOString() }));
}

function logError(message, metadata = {}) {
  console.error(JSON.stringify({ level: 'error', message, metadata, timestamp: new Date().toISOString() }));
}

module.exports = { logInfo, logError };
