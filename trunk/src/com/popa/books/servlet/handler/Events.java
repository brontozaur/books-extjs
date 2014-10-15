package com.popa.books.servlet.handler;

public interface Events {

    String SAVE_BOOK = "save-book";
    String DEL_BOOK = "del-book";
    String GET_BOOKS = "get-books";

    String GET_AUTORS = "get-autors";
    String DEL_AUTOR = "del-autor";
    String SAVE_AUTOR = "save-autor";

    String GET_EDITURI = "get-edituri";
    String DEL_EDITURA = "del-editura";
    String SAVE_EDITURA = "save-editura";

    String GET_CATEGORII = "get-categorii";
    String DEL_CATEGORIE = "del-categorie";
    String SAVE_CATEGORIE = "save-categorie";

    String UPLOAD_FRONT_COVER = "upload-front-cover";
    String UPLOAD_BACK_COVER = "upload-back-cover";
}
