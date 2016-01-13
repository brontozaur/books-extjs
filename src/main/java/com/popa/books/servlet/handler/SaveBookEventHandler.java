package com.popa.books.servlet.handler;

import java.io.File;
import java.sql.Date;
import java.text.SimpleDateFormat;

import javax.persistence.EntityManager;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang.StringUtils;
import org.apache.commons.lang.math.NumberUtils;
import org.apache.log4j.Logger;

import com.popa.books.dao.Autor;
import com.popa.books.dao.Book;
import com.popa.books.dao.Categorie;
import com.popa.books.dao.Database;
import com.popa.books.dao.Editura;
import com.popa.books.dao.persistence.BorgPersistence;

public class SaveBookEventHandler extends EventHandler {

    private static final Logger logger = Logger.getLogger(SaveBookEventHandler.class);

    @Override
    public String handleEvent(final HttpServletRequest request) throws ServletException {
        EntityManager conn = null;
        try {
            conn = BorgPersistence.getEntityManager();
            conn.getTransaction().begin();
            Book book = new Book();
            String bookId = request.getParameter("bookId");
            if (StringUtils.isNotEmpty(bookId)) {
                book.setBookId(Integer.valueOf(bookId));
            }
            String dateParam = request.getParameter("dataAparitie");
            try {
                if (StringUtils.isNotEmpty(dateParam)) {
                    SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
                    book.setDataAparitie(new Date(sdf.parse(dateParam).getTime()));
                }
            } catch (Exception e) {
                logger.error("cannot parse date: " + dateParam);
            }
            book.setTitle(request.getParameter("title"));

            String autorId = request.getParameter("autorId");
            if (StringUtils.isNotEmpty(autorId)) {
                Autor autor = (Autor) Database.getDbObjectById(Autor.class, Long.valueOf(autorId));
                book.setAuthor(autor);
            }

            String idCategorie = request.getParameter("idCategorie");
            if (StringUtils.isNotEmpty(idCategorie)) {
                Categorie categorie = (Categorie) Database.getDbObjectById(Categorie.class, Long.valueOf(idCategorie));
                book.setCategorie(categorie);
            }

            String idEditura = request.getParameter("idEditura");
            if (StringUtils.isNotEmpty(idEditura)) {
                Editura editura = (Editura) Database.getDbObjectById(Editura.class, Long.valueOf(idEditura));
                book.setEditura(editura);
            }
            book.setIsbn(request.getParameter("isbn"));
            book.setOriginalTitle(request.getParameter("originalTitle"));
            book.setSerie(request.getParameter("serie"));
            book.setNrPagini(NumberUtils.toInt(request.getParameter("nrPagini"), 0));
            book.setWidth(NumberUtils.toInt(request.getParameter("width"), 0));
            book.setHeight(NumberUtils.toInt(request.getParameter("height"), 0));
            book.setCitita("on".equals(request.getParameter("citita")));
            String frontCoverPath = request.getParameter("frontCoverImage");
            if (frontCoverPath.indexOf(File.separator) != -1) {
                frontCoverPath = frontCoverPath.substring(frontCoverPath.lastIndexOf(File.separator) + 1);
            }
            if (frontCoverPath.indexOf('/') != -1) {
                frontCoverPath = frontCoverPath.substring(frontCoverPath.lastIndexOf('/') + 1);
            }
            book.setFrontCoverPath(frontCoverPath);
            
            String backCoverPath = request.getParameter("backCoverImage");
            if (backCoverPath.indexOf(File.separator) != -1) {
                backCoverPath = backCoverPath.substring(backCoverPath.lastIndexOf(File.separator) + 1);
            }
            if (backCoverPath.indexOf('/') != -1) {
                backCoverPath = backCoverPath.substring(backCoverPath.lastIndexOf('/') + 1);
            }
            book.setBackCoverPath(backCoverPath);

            book.store(conn);
            conn.getTransaction().commit();
            return null;
        } catch (Exception exc) {
            if (conn.getTransaction().isActive()) {
                conn.getTransaction().rollback();
            }
            logger.error(exc, exc);
            throw new ServletException(exc);
        } finally {
            if (conn != null) {
                conn.close();
            }
        }
    }
}
