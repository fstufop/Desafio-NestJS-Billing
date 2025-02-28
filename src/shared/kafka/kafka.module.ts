import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'KAFKA_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'csv-processor',
            brokers: ['kafka:9092'],
          },
          consumer: {
            groupId: 'csv-group',
          },
        },
      },
    ]),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class KafkaModule {}
