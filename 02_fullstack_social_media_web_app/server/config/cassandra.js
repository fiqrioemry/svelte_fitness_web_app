const cassandra = require('cassandra-driver');
const client = new cassandra.Client({
  contactPoints: ['cassandra'],
  localDataCenter: 'datacenter1',
});

async function initCassandra() {
  await client.connect();

  await client.execute(`
    CREATE KEYSPACE IF NOT EXISTS chat_app
    WITH replication = {'class': 'SimpleStrategy', 'replication_factor': '1'}
  `);

  await client.execute(`
    CREATE TABLE IF NOT EXISTS chat_app.messages (
      id UUID PRIMARY KEY,
      sender TEXT,
      receiver TEXT,
      content TEXT,
      timestamp TIMESTAMP
    )
  `);

  await client.shutdown();
}

initCassandra().catch(console.error);
