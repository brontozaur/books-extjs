package com.popa.books.servlet.handler;

import javax.persistence.EntityManager;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang.StringUtils;
import org.apache.log4j.Logger;

import com.popa.books.dao.Categorie;
import com.popa.books.dao.persistence.BorgPersistence;

public class SaveCategorieEventHandler extends EventHandler {

    private static final Logger logger = Logger.getLogger(SaveCategorieEventHandler.class);

    @Override
    public String handleEvent(final HttpServletRequest request) throws ServletException {
        EntityManager conn = null;
        try {
            conn = BorgPersistence.getEntityManager();
            conn.getTransaction().begin();
            Categorie Categorie = new Categorie();
            String idCategorie = request.getParameter("idCategorie");
            if (StringUtils.isNotEmpty(idCategorie)) {
                Categorie.setIdCategorie(Integer.valueOf(idCategorie));
            }
            Categorie.setNumeCategorie(request.getParameter("numeCategorie"));
            Categorie.store(conn);
            conn.getTransaction().commit();
            return null;
        } catch (Exception exc) {
            conn.getTransaction().rollback();
            logger.error(exc, exc);
            throw new ServletException("error writing to db: " + exc.getMessage());
        } finally {
            if (conn != null) {
                conn.close();
            }
        }
    }
}
