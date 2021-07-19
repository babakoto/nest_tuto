import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from './student/student.module';

@Module({
  imports: [
    StudentModule,
    TypeOrmModule.forRoot()
  ],
})
export class AppModule {}


