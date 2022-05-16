package net.javaguides.springboot;

import net.javaguides.springboot.model.Employee;
import net.javaguides.springboot.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Arrays;
import java.util.List;

@SpringBootApplication
public class SpringbootBackendApplication {
	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendApplication.class, args);
	}

	@Bean
	public ApplicationRunner applicationRunner() {
		return new ApplicationRunner() {
			@Autowired
			EmployeeRepository repository;
			@Override
			public void run(ApplicationArguments args) throws Exception {
				Employee employee1 = Employee.builder()
						.firstName("soyul")
						.lastName("park")
						.emailId("soyul@a.com")
						.build();
				Employee employee2 = Employee.builder()
						.firstName("jungwu")
						.lastName("park")
						.emailId("jungwu@a.com")
						.build();

				List<Employee> employeeList = Arrays.asList(employee1, employee2);
				repository.saveAll(employeeList);
			}//run
		};
	}
}
