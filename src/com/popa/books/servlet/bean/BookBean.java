package com.popa.books.servlet.bean;

public class BookBean implements Node {

    private String name;
    private boolean leaf;
    private boolean loaded;
    private int howManyBooks;
    private String id;

    @Override
    public boolean isLeaf() {
        return leaf;
    }

    public void setLeaf(final boolean leaf) {
        this.leaf = leaf;
    }

    @Override
    public String getName() {
        return name;
    }

    public void setName(final String name) {
        this.name = name;
    }

    public boolean isLoaded() {
        return loaded;
    }

    public void setLoaded(boolean loaded) {
        this.loaded = loaded;
    }

    public int getHowManyBooks() {
        return howManyBooks;
    }

    public void setHowManyBooks(int howManyBooks) {
        this.howManyBooks = howManyBooks;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
}
