package com.popa.books.dao;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "book")
public class Book extends AbstractDB implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "bookId", nullable = false, unique = true)
    private long bookId;
    @Column(name = "title", unique = true)
    private String title = EMPTY;
    @Column(name = "dataAparitie", unique = true)
    private Date dataAparitie = null;
    @ManyToOne
    @JoinColumn(name = "idAutor", nullable = false)
    private Autor author;

    @Override
    public Book cloneObject() throws CloneNotSupportedException {
        return (Book) this.clone();
    }

	public long getBookId() {
		return bookId;
	}

	public void setBookId(long bookId) {
		this.bookId = bookId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Date getDataAparitie() {
		return dataAparitie;
	}

	public void setDataAparitie(Date dataAparitie) {
		this.dataAparitie = dataAparitie;
	}

	public Autor getAuthor() {
		return author;
	}

	public void setAuthor(Autor author) {
		this.author = author;
	}

	@Override
	public long getId() {
		return this.bookId;
	}

    
}
