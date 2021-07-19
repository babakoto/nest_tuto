import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateStudentDto } from './dto/create.student.dto';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {


    constructor(private studentService:StudentService){
    }



    @Get("/")
    async findStudents(){
        return await this.studentService.findStudents(); 
    }


    @Post("/")
    async createStudent(@Body() student:CreateStudentDto){
        return await this.studentService.createStudent(student);

    }

    @Put("/:id")
    async update(@Param("id")id:string,@Body() student:CreateStudentDto){
        return await this.studentService.updateStudent(id,student);

    }

    @Delete("/:id")
    async delete(@Param("id")id:string){
        return await this.studentService.removeStudent(id);

    }



}

