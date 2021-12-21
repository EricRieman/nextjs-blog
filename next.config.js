const {PHASE_DEVELOPMENT_SERVER} = require('next/constants')

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER

  return {
    env: {
      db_useLocal: isDev,
      db_user: 'new-user',
      db_cluster: 'learning',
      db_collection: 'nextjs-messages'
    }
  }
}
