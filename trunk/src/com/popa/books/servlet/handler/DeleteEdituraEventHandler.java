package com.popa.books.servlet.handler;

import javax.persistence.EntityManager;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang.StringUtils;
import org.apache.log4j.Logger;

import com.popa.books.dao.Editura;
import com.popa.books.dao.persistence.BorgPersistence;

public class DeleteEdituraEventHandler extends EventHandler {

	private static final Logger logger = Logger.getLogger(DeleteEdituraEventHandler.class);

	@Override
	public String handleEvent(HttpServletRequest request) throws ServletException {
		EntityManager conn = null;
		try {
			conn = BorgPersistence.getEntityManager();
			conn.getTransaction().begin();
			String idEditura = request.getParameter("idEditura");
			if (StringUtils.isEmpty(idEditura)){
				logger.error("editura id is incorrect: "+ idEditura);
				throw new ServletException("editura id is incorrect: "+idEditura);
			}
			Editura editura = conn.createNamedQuery("Editura.findById", Editura.class).setParameter("idEditura", Long.valueOf(idEditura))
					.getSingleResult();
			conn.remove(editura);
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
}
