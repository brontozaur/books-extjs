package com.popa.books.servlet;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.popa.books.LoggerMyWay;
import com.popa.books.dao.BookCover;
import com.popa.books.dao.persistence.BorgPersistence;
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
        EntityManager conn = null;
        try {
            conn = BorgPersistence.getEntityManager();
            final boolean isFrontCover = Boolean.valueOf(request.getParameter("isFrontCover"));
            Query query = conn.createNamedQuery(isFrontCover ? BookCover.QUERY_GET_FRONT : BookCover.QUERY_GET_BACK);
            query.setParameter("bookId", Long.valueOf(request.getParameter("bookId")));
            List imageDatas = query.getResultList();
            if (!imageDatas.isEmpty()) {
                String path = LoggerMyWay.class.getClassLoader().getResource("").getPath();
                path += "../../data";
                File file = new File(path + File.separator + System.currentTimeMillis()+ (isFrontCover? "front":"")+ ".jpg");
                file.deleteOnExit();
                FileOutputStream fos = new FileOutputStream(file.getAbsolutePath());
                fos.write((byte[]) imageDatas.get(0));
                fos.close();
                response.setContentType("text/html;charset=UTF-8");
                response.getWriter().write(file.getName());
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
