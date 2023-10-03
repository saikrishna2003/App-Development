package com.kidszone.entity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Books {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
@Column(name="book_id")
private long bookId;
@Column(name="book_name")
private String emailId;
@Column(name="book_author")
private String bookName;
public long getUserId() {
	return bookId;
}
public void setUserId(long userId) {
	this.bookId = userId;
}
public String getEmailId() {
	return emailId;
}
public void setEmailId(String emailId) {
	this.emailId = emailId;
}
public String getUserName() {
	return bookName;
}
public void setUserName(String userName) {
	this.bookName = userName;
}
public Books(long userId, String emailId, String userName) {
	super();
	this.bookId = userId;
	this.emailId = emailId;
	this.bookName = userName;
}
public Books() {

}

}
