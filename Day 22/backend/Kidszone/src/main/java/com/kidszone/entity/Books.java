package com.kidszone.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "_books")
public class Books {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bid;
    private String bookname;
    private String bookauthor;
    private String edition;

    private String bookdescription;

    private String imgURl;

    @ManyToOne
    @JoinColumn(name = "booksCategory")
    private BooksCategory booksCategory;

    public Long getBid() {
        return bid;
    }

    public void setBid(Long bid) {
        this.bid = bid;
    }

    public String getBookname() {
        return bookname;
    }

    public void setBookname(String bookname) {
        this.bookname = bookname;
    }

    public String getBookauthor() {
        return bookauthor;
    }

    public void setBookauthor(String bookauthor) {
        this.bookauthor = bookauthor;
    }

    public String getEdition() {
        return edition;
    }

    public void setEdition(String edition) {
        this.edition = edition;
    }

    public BooksCategory getBooksCategory() {
        return booksCategory;
    }

    public void setBooksCategory(BooksCategory booksCategory) {
        this.booksCategory = booksCategory;
    }

    public String getBookdescription() {
        return bookdescription;
    }

    public void setBookdescription(String bookdescription) {
        this.bookdescription = bookdescription;
    }

    public String getImgURl() {
        return imgURl;
    }

    public void setImgURl(String imgURl) {
        this.imgURl = imgURl;
    }

    public Books(Long bid, String bookname, String bookauthor, String edition, String bookdescription, String imgURl, BooksCategory booksCategory) {
        this.bid = bid;
        this.bookname = bookname;
        this.bookauthor = bookauthor;
        this.edition = edition;
        this.bookdescription = bookdescription;
        this.imgURl = imgURl;
        this.booksCategory = booksCategory;
    }
    public Books() {

    }
}
