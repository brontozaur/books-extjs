package com.popa.books.servlet.handler;

import java.io.File;
import java.io.FileOutputStream;
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
import com.popa.books.servlet.util.RequestUtils;

public class SaveBookEventHandler extends EventHandler {

    private static final Logger logger = Logger.getLogger(SaveBookEventHandler.class);

    @Override
    public String handleEvent(final HttpServletRequest request) throws ServletException {
        EntityManager conn = null;
        try {
            conn = BorgPersistence.getEntityManager();
            conn.getTransaction().begin();
            Book book = new Book();
            String bookId = RequestUtils.getString(request, "bookId");
            if (StringUtils.isNotEmpty(bookId)) {
                book.setBookId(Integer.valueOf(bookId));
            }
            String dateParam = RequestUtils.getString(request, "dataAparitie");
            try {
                if (StringUtils.isNotEmpty(dateParam)) {
                    SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
                    book.setDataAparitie(new Date(sdf.parse(dateParam).getTime()));
                }
            } catch (Exception e) {
                logger.error("cannot parse date: " + dateParam);
            }
            book.setTitle(RequestUtils.getString(request, "title"));

            String autorId = RequestUtils.getString(request, "autorId");
            if (StringUtils.isNotEmpty(autorId)) {
                Autor autor = (Autor) Database.getDbObjectById(Autor.class, Long.valueOf(autorId));
                book.setAuthor(autor);
            }

            String idCategorie = RequestUtils.getString(request, "idCategorie");
            if (StringUtils.isNotEmpty(idCategorie)) {
                Categorie categorie = (Categorie) Database.getDbObjectById(Categorie.class, Long.valueOf(idCategorie));
                book.setCategorie(categorie);
            }

            String idEditura = RequestUtils.getString(request, "idEditura");
            if (StringUtils.isNotEmpty(idEditura)) {
                Editura editura = (Editura) Database.getDbObjectById(Editura.class, Long.valueOf(idEditura));
                book.setEditura(editura);
            }
            book.setIsbn(RequestUtils.getString(request, "isbn"));
            book.setOriginalTitle(RequestUtils.getString(request, "originalTitle"));
            book.setSerie(RequestUtils.getString(request, "serie"));
            book.setNrPagini(NumberUtils.toInt(RequestUtils.getString(request, "nrPagini"), 0));
            book.setWidth(NumberUtils.toInt(RequestUtils.getString(request, "width"), 0));
            book.setHeight(NumberUtils.toInt(RequestUtils.getString(request, "height"), 0));
            book.setCitita("on".equals(RequestUtils.getString(request, "citita")));
            byte[] frontCover = RequestUtils.getByteArray(request, "frontCoverUpload");
            FileOutputStream fso = new FileOutputStream(new File("c:\\tmp\\test.png"));
            fso.write(frontCover);
            fso.close();

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
