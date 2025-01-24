FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./

# Install all dependencies, including dev dependencies
ENV NODE_ENV=development
RUN npm install

# copy .env file
COPY .env .

# Copy the rest of the application code
COPY . .

EXPOSE 4000

# "dev": "nodemon --exec ts-node --transpile-only src/server.ts",
CMD ["npx", "ts-node", "src/server.ts"]
