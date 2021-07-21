package com.example.springboot;

import com.example.springboot.entities.Role;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ApplicationListener;

import java.util.Arrays;
import java.util.List;

public class DatabaseInitializer implements ApplicationListener<ApplicationReadyEvent> {
    private final List<String> usernames = Arrays.asList(
            "ada.lovelace@nix.io",
            "alan.turing@nix.io",
            "dennis.ritchie@nix.io"
    );
    private final List<String> fullNames = Arrays.asList(
            "Ada Lovelace",
            "Alan Turing",
            "Dennis Ritchie"
    );
//    private final List<String> roles = Arrays.asList(
//            Role.USER_ADMIN,
//            Role.AUTHOR_ADMIN,
//            Role.BOOK_ADMIN
//    );
    private final String password = "Test12345_";

    @Override
    public void onApplicationEvent(ApplicationReadyEvent applicationReadyEvent) {

    }
}
