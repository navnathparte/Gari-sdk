import { RegisterWallet } from 'src/wallet/entities/registerWallet.entity';
import { createConnection } from 'typeorm';

var databseConfig: any = {};

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => {
      const {
        DB_PORT,
        DB_USERNAME,
        DB_PASSWORD,
        DB_DATABASE,
        DB_HOST,
        DB_HOST_RO,
      } = process.env;

      // if (DB_HOST_RO && DB_HOST) {
      //   databseConfig = {
      //     replication: {
      //       master: {
      //         host: DB_HOST,
      //         port: parseInt(DB_PORT),
      //         username: DB_USERNAME,
      //         password: DB_PASSWORD,
      //         database: DB_DATABASE,
      //       },
      //       slaves: [
      //         {
      //           host: DB_HOST_RO,
      //           port: parseInt(DB_PORT),
      //           username: DB_USERNAME,
      //           password: DB_PASSWORD,
      //           database: DB_DATABASE,
      //         },
      //       ],
      //     },
      //   };
      // } else
       if (process.env.DB_LOCAL_HOST) {
        databseConfig = {
          host: process.env.DB_LOCAL_HOST,
          port: parseInt(process.env.DB_LOCAL_PORT),
          username: process.env.DB_LOCAL_USERNAME,
          password: process.env.DB_LOCAL_PASSWORD,
          database: process.env.DB_LOCAL_DATABASE,
        };
      }

      return await createConnection({
        type: 'postgres',
        ...databseConfig,
        synchronize: false,
        // extra: {
        //   max: 30,`
        // },
        entities: [
          RegisterWallet
        ],
      });
    },
  },
];
