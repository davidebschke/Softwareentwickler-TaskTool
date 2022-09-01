package com.example.backend.projects;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Projectrepo extends MongoRepository <Project, String> {
}
