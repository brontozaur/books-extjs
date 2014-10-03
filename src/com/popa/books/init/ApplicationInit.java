package com.popa.books.init;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;

import com.popa.books.LoggerMyWay;
import com.popa.books.dao.persistence.BorgPersistence;

public class ApplicationInit {

    private ApplicationInit() {
    };

    public static void initialize(ServletContext appContext) throws ServletException {
        LoggerMyWay.configure(LoggerMyWay.LOG_TXT, "admin", true);
        BorgPersistence.getEntityManager();
    }

    public static void shutdown() {
        LoggerMyWay.shutDown();
    }
}
