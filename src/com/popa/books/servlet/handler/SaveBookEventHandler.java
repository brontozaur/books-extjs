package com.popa.books.servlet.handler;

import java.sql.Date;

import javax.persistence.EntityManager;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang.StringUtils;
import org.apache.log4j.Logger;

import com.popa.books.dao.Autor;
import com.popa.books.dao.Book;
import com.popa.books.dao.Database;
import com.popa.books.dao.persistence.BorgPersistence;

public class SaveBookEventHandler extends EventHandler {

	private static final Logger logger = Logger.getLogger(SaveBookEventHandler.class);

	@Override
	public String handleEvent(HttpServletRequest request) throws ServletException {
		EntityManager conn = null;
		try {
			conn = BorgPersistence.getEntityManager();
			conn.getTransaction().begin();
			Book book = new Book();
			String bookId = request.getParameter("bookId");
			if (StringUtils.isNotEmpty(bookId)){
				book.setBookId(Integer.valueOf(bookId));
			}
			try {
				book.setDataAparitie(Date.valueOf(request.getParameter("dataAparitie")));
			} catch (Exception e) {
				logger.error("cannot parse date: "+ request.getParameter("dataAparitie"));
			}
			book.setTitle(request.getParameter("title"));
			String autorId = request.getParameter("autorId");
			Autor autor = (Autor) Database.getDbObjectById(Autor.class, Long.valueOf(autorId));
			book.setAuthor(autor);
			book.store(conn);
			conn.getTransaction().commit();
			return null;
		} catch (Exception exc) {
			conn.getTransaction().rollback();
			logger.error(exc, exc);
			throw new ServletException("error writing to db: "+exc.getMessage());
		} finally {
			if (conn != null) {
				conn.close();
			}
		}
	}

	@Override
	public String getEventName() {
		return Events.SAVE_BOOK;
	}

}
