package com.popa.books.dao;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "autor")
public class Autor extends AbstractDB implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "autorId", nullable = false, unique = true)
    private long autorId;
    @Column(name = "nume", unique = true)
    private String nume = EMPTY;

    @Override
    public Autor cloneObject() throws CloneNotSupportedException {
        return (Autor) this.clone();
    }

	public long getAutorId() {
		return autorId;
	}

	public void setAutorId(long autorId) {
		this.autorId = autorId;
	}

	public String getNume() {
		return nume;
	}

	public void setNume(String nume) {
		this.nume = nume;
	}

	@Override
	public long getId() {
		return this.autorId;
	}


    
}
