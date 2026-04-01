package com.klu.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klu.model.Student;
import com.klu.repository.StudentRepository;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    StudentRepository repository;

    @Override
    public Student addStudent(Student student) {
        return repository.save(student);
    }

    @Override
    public List<Student> getStudents() {
        return repository.findAll();
    }

    @Override
    public Student updateStudent(Long id, Student student) {

        Student s = repository.findById(id).orElseThrow();

        s.setName(student.getName());
        s.setEmail(student.getEmail());
        s.setCourse(student.getCourse());

        return repository.save(s);
    }

    @Override
    public void deleteStudent(Long id) {
        repository.deleteById(id);
    }
}