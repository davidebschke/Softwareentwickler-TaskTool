package com.example.backend.Projects;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface Projectrepo extends MongoRepository <Project, String> {
}
