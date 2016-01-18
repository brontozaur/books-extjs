package com.popa.books.servlet;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Date;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.popa.books.dao.BookCover;
import com.popa.books.dao.persistence.BorgPersistence;
import com.popa.books.servlet.util.RequestUtils;
import org.apache.log4j.Logger;

//@MultipartConfig
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
        final String bookId = request.getParameter("bookId");
        final boolean isFrontCover = Boolean.valueOf(request.getParameter("isFrontCover"));
        if (isFrontCover) {
            File frontCover = new File(RequestUtils.getImagePath(bookId + "front.jpg"));
            if (frontCover.exists() && frontCover.isFile()) {
                response.setContentType("text/html;charset=UTF-8");
                response.getWriter().write(frontCover.getName() + "?time=" + new Date());
            } else {
                exportImageData(response, bookId, true);
            }
        } else {
            File backCover = new File(RequestUtils.getImagePath(bookId + ".jpg"));
            if (backCover.exists() && backCover.isFile()) {
                response.setContentType("text/html;charset=UTF-8");
                response.getWriter().write(backCover.getName() + "?time=" + new Date());
            } else {
                exportImageData(response, bookId, false);
            }
        }

    }

    private void exportImageData(final HttpServletResponse response,
                                 String bookId,
                                 final boolean isFrontCover) throws ServletException, IOException {
        EntityManager conn = null;
        try {
            conn = BorgPersistence.getEntityManager();
            Query query = conn.createNamedQuery(isFrontCover ? BookCover.QUERY_GET_FRONT : BookCover.QUERY_GET_BACK);
            query.setParameter("bookId", Long.valueOf(bookId));
            List imageData = query.getResultList();
            if (!imageData.isEmpty()) {
                byte[] imageContent = (byte[]) imageData.get(0);
                if (imageContent != null && imageContent.length > 0) {
                    File file = new File(RequestUtils.exportImageToDisk(bookId, isFrontCover));
                    file.deleteOnExit();
                    FileOutputStream fos = new FileOutputStream(file);
                    fos.write((byte[]) imageData.get(0));
                    fos.close();
                    response.setContentType("text/html;charset=UTF-8");
                    response.getWriter().write(file.getName());
                }
            }
        } catch (Exception e) {
            response.addHeader(ResponseKey.ERROR_MESSAGE, "A intervenit o eroare la incarcarea imaginii!");
            response.sendError(HttpServletResponse.SC_NOT_ACCEPTABLE);
            throw new ServletException(e);
        } finally {
            if (conn != null) {
                conn.close();
            }
        }
    }
}
