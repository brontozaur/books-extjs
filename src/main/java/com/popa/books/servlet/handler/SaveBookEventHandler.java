package com.popa.books.servlet.handler;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
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
            book.setFrontCover(loadFile(System.getProperty("covers.dir") + File.separator + request.getParameter("frontCoverImage")));
            book.setBackCover(loadFile(System.getProperty("covers.dir") + File.separator + request.getParameter("backCoverImage")));

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

    private byte[] loadFile(final String path) {
        File file = new File(path);
        byte[] bFile = new byte[(int) file.length()];
        try {
            FileInputStream fileInputStream = new FileInputStream(file);
            //convert file into array of bytes
            fileInputStream.read(bFile);
            fileInputStream.close();
        } catch (IOException exc) {
            logger.error(exc, exc);
        }

        return bFile;
    }
}
