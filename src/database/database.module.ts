import { Module } from '@nestjs/common';
import { MongoClient, Db } from 'mongodb';

@Module({
  providers: [
    {
      provide: 'DATABASE_CONNECTION',
      useFactory: async (): Promise<Db> => {
        try {
          const client = await MongoClient.connect(process.env.MONGODB_HOST, {
            auth: {
              username: process.env.MONGODB_USERNAME,
              password: process.env.MONGODB_PASSWORD,
            },
          });

          const db = client.db(process.env.MONGODB_DATABASE);

          const channelCollection = db.collection('items');
          await channelCollection.createIndex({ datetime: 'text' });

          return db;
        } catch (e) {
          throw e;
        }
      },
    },
  ],
  exports: ['DATABASE_CONNECTION'],
})
export class DatabaseModule {}
