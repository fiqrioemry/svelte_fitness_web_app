# Gunakan image Node.js versi LTS sebagai base image
FROM node:18

# Set working directory di dalam container
WORKDIR /app

# Copy package.json dan package-lock.json
COPY package*.json ./

RUN npm install -g nodemon

# Install dependencies
RUN npm install

# Copy semua file project ke working directory
COPY . .

# Expose port yang digunakan oleh aplikasi
EXPOSE 5000

# Command untuk menjalankan aplikasi
CMD ["npm", "run", "dev"]