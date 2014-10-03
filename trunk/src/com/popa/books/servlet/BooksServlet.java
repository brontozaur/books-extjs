package com.popa.books.servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

import com.popa.books.init.ApplicationInit;
import com.popa.books.servlet.handler.EventHandler;
import com.popa.books.servlet.handler.EventHandlerFactory;

public class BooksServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    public static Logger logger = Logger.getLogger(BooksServlet.class);

    public BooksServlet() {
        super();
    }

    @Override
    public void init() throws ServletException {
        ApplicationInit.initialize(getServletContext());
    }

    @Override
    public void destroy() {
        ApplicationInit.shutdown();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        EventHandler handler = EventHandlerFactory.getHandler(request);
        String responseText = handler.handleEvent(request);
        if (responseText != null) {
            response.setContentType("text/html;charset=UTF-8");
            response.getWriter().write(responseText);
        }
    }
}