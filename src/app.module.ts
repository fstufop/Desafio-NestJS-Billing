import { Module } from '@nestjs/common';
import { FileApiModule } from './modules/file-api/file-api.module';
import { FileProcessingModule } from './modules/file-processing/file-processing.module';
import { PaymentsModule } from './modules/payments/payments.module';
import { DatabaseModule } from './shared/database/database.module';

@Module({
  imports: [FileApiModule, FileProcessingModule, PaymentsModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
