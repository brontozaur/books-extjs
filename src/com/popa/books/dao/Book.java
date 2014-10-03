package com.popa.books.dao;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.NamedQuery;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "book")
@NamedQuery(name = "Book.findById", query = "select b from Book b where b.bookId = :bookId")
public class Book extends AbstractDB implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "bookId", nullable = false, unique = true)
    private long bookId;
    @Column(name = "title", nullable = false)
    private String title;
    @Column(name = "originalTitle", nullable = false)
    private String originalTitle;
    @Column(name = "dataAparitie")
    private Date dataAparitie = null;
    @OneToOne
    @JoinColumn(name = "idAutor", nullable = false)
    private Autor author;
    @Column(name = "nrPagini", nullable = false)
    private int nrPagini;
    @Column(name = "width", nullable = false)
    private int width;
    @Column(name = "height", nullable = false)
    private int height;
    @Column(name = "frontCoverPath", nullable = false)
    private String frontCoverPath;
    @Column(name = "backCoverPath", nullable = false)
    private String backCoverPath;
    @Column(name = "isbn", nullable = false)
    private String isbn;
    @Column(name = "citita", nullable = false)
    private boolean citita;
    @JoinColumn(name = "idEditura", nullable = false)
    private Editura editura;
    @JoinColumn(name = "idCategorie", nullable = false)
    private Categorie categorie;

    @Override
    public Book cloneObject() throws CloneNotSupportedException {
        return (Book) this.clone();
    }

    public long getBookId() {
        return bookId;
    }

    public void setBookId(final long bookId) {
        this.bookId = bookId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(final String title) {
        this.title = title;
    }

    public Date getDataAparitie() {
        return dataAparitie;
    }

    public void setDataAparitie(final Date dataAparitie) {
        this.dataAparitie = dataAparitie;
    }

    public Autor getAuthor() {
        return author;
    }

    public void setAuthor(final Autor author) {
        this.author = author;
    }

    @Override
    public long getId() {
        return this.bookId;
    }

    public String getOriginalTitle() {
        return originalTitle;
    }

    public void setOriginalTitle(final String originalTitle) {
        this.originalTitle = originalTitle;
    }

    public int getNrPagini() {
        return nrPagini;
    }

    public void setNrPagini(final int nrPagini) {
        this.nrPagini = nrPagini;
    }

    public int getWidth() {
        return width;
    }

    public void setWidth(final int width) {
        this.width = width;
    }

    public int getHeight() {
        return height;
    }

    public void setHeight(final int height) {
        this.height = height;
    }

    public String getFrontCoverPath() {
        return frontCoverPath;
    }

    public void setFrontCoverPath(final String frontCoverPath) {
        this.frontCoverPath = frontCoverPath;
    }

    public String getBackCoverPath() {
        return backCoverPath;
    }

    public void setBackCoverPath(final String backCoverPath) {
        this.backCoverPath = backCoverPath;
    }

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(final String isbn) {
        this.isbn = isbn;
    }

    public boolean isCitita() {
        return citita;
    }

    public void setCitita(final boolean citita) {
        this.citita = citita;
    }

    public Editura getEditura() {
        return editura;
    }

    public void setEditura(final Editura editura) {
        this.editura = editura;
    }

    public Categorie getCategorie() {
        return categorie;
    }

    public void setCategorie(final Categorie categorie) {
        this.categorie = categorie;
    }
}
