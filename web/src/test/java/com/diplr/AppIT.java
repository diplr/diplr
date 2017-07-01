package com.diplr;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.core.env.Environment;
import org.springframework.test.context.junit4.SpringRunner;

import static org.assertj.core.api.Java6Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest
public class AppIT {

    @Autowired
    private Environment environment;

    @Test
    public void ethereumAppCorrectlyStarts() throws Exception {
        assertThat(environment.getProperty("spring.application.name")).isEqualTo("Diplr");
    }
}
