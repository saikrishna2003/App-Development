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

    public Books(Long bid, String bookname, String bookauthor, String edition, BooksCategory booksCategory) {
        this.bid = bid;
        this.bookname = bookname;
        this.bookauthor = bookauthor;
        this.edition = edition;
        this.booksCategory = booksCategory;
    }

    public Books() {

    }
}
