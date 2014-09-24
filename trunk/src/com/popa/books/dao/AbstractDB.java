package com.popa.books.dao;

import javax.persistence.EntityManager;

public abstract class AbstractDB implements Cloneable {

    public static final String EMPTY = "";

	public AbstractDB() {
		super();
	}

	public abstract AbstractDB cloneObject() throws CloneNotSupportedException;

	public abstract long getId();

    public void store(EntityManager em) {
        // setServer_timestamp(BorgPersistence.getServerTimestamp());
        if (getId() <= 0) {
            em.persist(this);
        } else {
            em.merge(this);
        }
    }
}