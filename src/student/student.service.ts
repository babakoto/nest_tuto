import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/create.student.dto';
import { Student } from './models/student.model';

@Injectable()
export class StudentService {

    constructor(
        @InjectRepository(Student)
        private studentRepository:Repository<Student>){}



    
       async findStudents(){
            return await this.studentRepository.find();
        }

        async createStudent(studentDto:CreateStudentDto){
            if(!studentDto) throw new BadRequestException("Tsy mande!!!!");
            const {name,email} = studentDto;
            const student = new Student();
            student.name = name;
            student.email= email;
           return await this.studentRepository.save(student);

        }


        async updateStudent( id:string, newStudent:CreateStudentDto){
           const student = await this.findById(id);
            student.email = newStudent.email;
            student.name = newStudent.name;
            return await this.studentRepository.save(student);

        }


        async findById(id:string){
            const student = await this.studentRepository.findOne({id});
            if(!student) throw new NotFoundException("Not found 404");
            return student;

        }


        async removeStudent(id:string){
            const student = await this.findById(id);
            return this.studentRepository.remove(student);

        }
    
}

