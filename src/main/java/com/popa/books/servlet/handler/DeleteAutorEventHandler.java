package com.popa.books.servlet.handler;

import javax.persistence.EntityManager;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang.StringUtils;
import org.apache.log4j.Logger;

import com.popa.books.dao.Autor;
import com.popa.books.dao.persistence.BorgPersistence;

public class DeleteAutorEventHandler extends EventHandler {

	private static final Logger logger = Logger.getLogger(DeleteAutorEventHandler.class);

	@Override
	public String handleEvent(HttpServletRequest request) throws ServletException {
		EntityManager conn = null;
		try {
			conn = BorgPersistence.getEntityManager();
			conn.getTransaction().begin();
			String autorId = request.getParameter("autorId");
			if (StringUtils.isEmpty(autorId)){
				logger.error("autor id is incorrect: "+ autorId);
				throw new ServletException("autor id is incorrect: "+autorId);
			}
			Autor autor = conn.createNamedQuery("Autor.findById", Autor.class).setParameter("autorId", Long.valueOf(autorId))
					.getSingleResult();
			conn.remove(autor);
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
