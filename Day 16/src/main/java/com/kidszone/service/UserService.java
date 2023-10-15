//package com.kidszone.Service;
//
//import java.util.List;
//import java.util.Optional;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.kidszone.Entity.User;
//import com.kidszone.Repository.userRepository;
//
//@Service
//public class UserService {
//	@Autowired
//	userRepository userRepository;
//	public List<User> getAllUsers(){
//		return userRepository.findAll();
//	}
//	public Optional<User> getUserById(Long id) {
//		return userRepository.findById(id);
//	}
//	public User addUser(User user) {
//		return userRepository.save(user);
//	}
//	public void deleteUser(Long id) {
//		userRepository.deleteById(id);
//	}
//	public User updateUser(User user) {
//		return userRepository.save(user);
//	}
//}
