const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['cassandra'],
  localDataCenter: 'datacenter1',
  keyspace: 'system', // Connect ke system keyspace dulu
});

async function initCassandra() {
  try {
    await client.connect();
    console.log('✅ Connected to Cassandra');

    // Buat keyspace jika belum ada
    await client.execute(`
      CREATE KEYSPACE IF NOT EXISTS chat_app
      WITH replication = {
        'class': 'SimpleStrategy',
        'replication_factor': 1
      }
    `);

    // Switch ke keyspace chat_app
    await client.execute('USE chat_app');

    // Buat tabel jika belum ada
    await client.execute(`
      CREATE TABLE IF NOT EXISTS messages (
        id UUID PRIMARY KEY,
        chat_id UUID,
        sender_id UUID,
        receiver_id UUID,
        message TEXT,
        image TEXT,
        timestamp TIMESTAMP
      )
    `);

    console.log('✅ Cassandra initialized successfully');
  } catch (error) {
    console.error('Error initializing Cassandra:', error);
    throw error;
  }
}

module.exports = { client, initCassandra };
