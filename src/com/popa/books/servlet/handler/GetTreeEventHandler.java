package com.popa.books.servlet.handler;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang.StringUtils;
import org.apache.log4j.Logger;

import com.google.gson.Gson;
import com.popa.books.dao.Database;
import com.popa.books.dao.DatabaseException;
import com.popa.books.servlet.bean.LetterBean;
import com.popa.books.servlet.bean.Node;

public class GetTreeEventHandler extends EventHandler {

	private static final Logger logger = Logger.getLogger(GetTreeEventHandler.class);

	@Override
	public String handleEvent(final HttpServletRequest request) throws ServletException {
		try {
			final String nodeId = request.getParameter("nodeId");
			List<Node> nodeList = new ArrayList<Node>();
			if ("byAutor".equals(request.getParameter("viewmode"))) {
				if (StringUtils.isEmpty(nodeId)) {
					String sql = "SELECT SUBSTRING(a.nume,1,1), COUNT(DISTINCT SUBSTRING(a.nume,1,1)) FROM Autor a GROUP BY SUBSTRING(a.nume,1,1)";
					List<Object[]> lettersList = Database.getDataObject(sql);
					for (Object data : lettersList) {
						LetterBean bean = new LetterBean();
						String letter = String.valueOf(((Object[]) data)[0]);
						final int size = Integer.valueOf(String.valueOf(((Object[]) data)[1]));
						bean.setSize(size);
						bean.setLeaf(false);
						bean.setLoaded(false);
						if (StringUtils.isEmpty(letter)) {
							letter = Node.ALL;
						}
						bean.setName(letter);
						nodeList.add(bean);
					}
				} else {
					String sql = "SELECT a.nume FROM Autor a where a.nume LIKE '" + nodeId + "%'";
					List<Object[]> lettersList = Database.getDataObject(sql);
					for (Object data : lettersList) {
						LetterBean bean = new LetterBean();
						String numeAutor = String.valueOf(data);
						bean.setSize(1);
						bean.setLeaf(true);
						bean.setLoaded(true);
						if (StringUtils.isEmpty(numeAutor)) {
							numeAutor = Node.ALL;
						}
						bean.setName(numeAutor);
						nodeList.add(bean);
					}
				}
			}
			System.err.println(new Gson().toJson(nodeList));
			return new Gson().toJson(nodeList);
		} catch (DatabaseException e) {
			logger.error(e.getMessage(), e);
			throw new ServletException(e);
		}
	}
}
