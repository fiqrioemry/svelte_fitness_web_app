#!/bin/sh

# Tunggu MySQL sampai ready
echo "Menunggu MySQL siap di $DB_HOST..."
while ! nc -z $DB_HOST 3306; do
  sleep 2
done
echo "MySQL sudah siap!"

# Tunggu Cassandra sampai ready
echo "Menunggu Cassandra siap..."
while ! nc -z cassandra 9042; do
  sleep 5
done
echo "Cassandra sudah siap!"

# Tunggu Redis sampai ready
echo "Menunggu Redis siap..."
while ! nc -z redis 6379; do
  sleep 2
done
echo "Redis sudah siap!"

# Jalankan migrasi dan seed
npx sequelize-cli db:migrate --env development
npx sequelize-cli db:seed:all --env development

# Inisialisasi Cassandra
node -e "require('./config/cassandra').initCassandra().catch(() => process.exit(1))"

# Jalankan aplikasi
npm run dev