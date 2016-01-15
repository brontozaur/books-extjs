package com.popa.books.servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.popa.books.dao.Book;
import com.popa.books.dao.Database;
import org.apache.log4j.Logger;

import com.google.gson.JsonObject;
import com.popa.books.init.ApplicationInit;
import com.popa.books.servlet.handler.EventHandler;
import com.popa.books.servlet.handler.EventHandlerFactory;

@MultipartConfig
public class ImageLoader extends HttpServlet {

    private static final long serialVersionUID = 1L;

    public static Logger logger = Logger.getLogger(BooksServlet.class);

    public ImageLoader() {
        super();
    }

    @Override
    public void init() throws ServletException {
    }

    @Override
    public void destroy() {
    }

    @Override
    protected void doGet(final HttpServletRequest request, final HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }

    @Override
    protected void doPost(final HttpServletRequest request, final HttpServletResponse response) throws ServletException, IOException {
        try {
			Book book = (Book)Database.getDbObjectById(Book.class, Long.valueOf(request.getParameter("bookId")));
            byte[] coverData = book.getFrontCover();
            response.getOutputStream().write(coverData);
            response.setContentType("image/jpeg");
        } catch (Exception e) {
            response.addHeader(ResponseKey.ERROR_MESSAGE, "A intervenit o eroare la incarcarea imaginii!");
            response.sendError(HttpServletResponse.SC_NOT_ACCEPTABLE);
            throw new ServletException(e);
        }
    }
}
