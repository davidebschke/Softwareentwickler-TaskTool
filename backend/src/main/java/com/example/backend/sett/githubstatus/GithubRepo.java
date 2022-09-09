package com.example.backend.sett.githubstatus;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GithubRepo extends MongoRepository<GithubRepositoryC, String> {
}
