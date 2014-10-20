package com.popa.books.servlet.bean;

public class LetterBean implements Node {

    private String name;
    private boolean leaf;

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

}
