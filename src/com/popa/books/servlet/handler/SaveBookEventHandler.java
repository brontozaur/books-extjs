package com.popa.books.servlet.handler;

import java.sql.Date;

import javax.persistence.EntityManager;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Logger;

import com.popa.books.dao.Autor;
import com.popa.books.dao.Book;
import com.popa.books.dao.persistence.BorgPersistence;

public class SaveBookEventHandler extends EventHandler {

	private static final Logger logger = Logger.getLogger(SaveBookEventHandler.class);

	@Override
	public void handleEvent(HttpServletRequest request) throws ServletException {
		EntityManager conn = null;
		try {
			conn = BorgPersistence.getEntityManager();
			conn.getTransaction().begin();
			Book book = new Book();
			try {
				book.setDataAparitie(Date.valueOf(request.getParameter("dataAparitie")));
			} catch (Exception e) {
				logger.error("cannot parse date: "+ request.getParameter("dataAparitie"));
			}
			book.setTitle(request.getParameter("title"));
			Autor autor = new Autor();
			autor.setNume(request.getParameter("autor"));
			autor.store(conn);
			book.setAutor(autor);
			book.store(conn);
			conn.getTransaction().commit();
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
