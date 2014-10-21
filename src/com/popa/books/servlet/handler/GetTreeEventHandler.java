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
            LetterBean nonLetterBean = null;
            if ("byAutor".equals(request.getParameter("viewmode"))) {
                final boolean isFlatMode = "flat".equals(request.getParameter("displayMode"));
                if (StringUtils.isEmpty(nodeId)) {
                    if (!isFlatMode) {
                        String sql = "SELECT SUBSTRING(a.nume,1,1) AS firstLetter, " + "(SELECT COUNT(1) FROM Autor a1 WHERE SUBSTRING(a1.nume,1,1) LIKE firstLetter) AS autorsNumber,"
                                + "(SELECT COUNT(1) FROM Book b WHERE b.idAutor = a.autorId) AS booksNumber " + "FROM Autor a GROUP BY firstLetter";
                        List<Object[]> lettersList = Database.getDataObject(sql);
                        for (Object[] data : lettersList) {
                            LetterBean bean = new LetterBean();
                            String letter = String.valueOf(data[0]);
                            final int howManyAutors = Integer.valueOf(String.valueOf(data[1]));
                            final int howManyBooks = Integer.valueOf(String.valueOf(data[2]));
                            bean.setHowManyAutors(howManyAutors);
                            bean.setHowManyBooks(howManyBooks);
                            bean.setLeaf(false);
                            bean.setLoaded(false);
                            if (StringUtils.isEmpty(letter) || !Character.isLetter(letter.charAt(0))) {
                                letter = Node.ALL;
                                if (nonLetterBean == null) {
                                    nonLetterBean = new LetterBean();
                                    nonLetterBean.setLeaf(false);
                                    nonLetterBean.setLoaded(false);
                                    nonLetterBean.setName(letter);
                                    nonLetterBean.setId(letter);
                                }
                                nonLetterBean.setHowManyAutors(nonLetterBean.getHowManyAutors() + howManyAutors);
                                nonLetterBean.setHowManyBooks(nonLetterBean.getHowManyBooks() + howManyBooks);
                                continue;
                            }
                            bean.setName(letter.toUpperCase());
                            bean.setId(letter);
                            nodeList.add(bean);
                        }
                        if (nonLetterBean != null) {
                            nodeList.add(nonLetterBean);
                        }
                    } else {
                        String sql = "SELECT a.nume, (SELECT COUNT(1) FROM Book b WHERE b.idAutor = a.autorId) AS bookCount FROM Autor a";
                        List<Object[]> lettersList = Database.getDataObject(sql);
                        for (Object[] data : lettersList) {
                            LetterBean bean = new LetterBean();
                            String numeAutor = String.valueOf(data[0]);
                            final int howManyBooks = Integer.valueOf(String.valueOf(data[1]));
                            bean.setLeaf(true);
                            bean.setLoaded(true);
                            bean.setHowManyBooks(howManyBooks);
                            bean.setName(numeAutor);
                            bean.setId(numeAutor);
                            nodeList.add(bean);
                        }
                    }
                } else {
                    String where = "a.nume LIKE '" + nodeId + "%'";
                    if (Node.ALL.equals(nodeId)) {
                        where = "a.nume NOT LIKE 'A%' AND a.nume NOT LIKE 'B%' AND a.nume NOT LIKE 'C%' AND a.nume NOT LIKE 'D%' AND a.nume NOT LIKE 'E%' AND a.nume NOT LIKE 'F%' AND "
                                + "a.nume NOT LIKE 'G%' AND a.nume NOT LIKE 'H%' AND a.nume NOT LIKE 'I%' AND a.nume NOT LIKE 'J%' AND a.nume NOT LIKE 'K%' AND a.nume NOT LIKE 'L%' AND "
                                + "a.nume NOT LIKE 'M%' AND a.nume NOT LIKE 'N%' AND a.nume NOT LIKE 'O%' AND a.nume NOT LIKE 'P%' AND a.nume NOT LIKE 'R%' AND a.nume NOT LIKE 'S%' AND "
                                + "a.nume NOT LIKE 'T%' AND a.nume NOT LIKE 'U%' AND a.nume NOT LIKE 'W%' AND a.nume NOT LIKE 'X%' AND a.nume NOT LIKE 'W%' AND a.nume NOT LIKE 'Y%' "
                                + "AND a.nume NOT LIKE 'Z%'";
                    }
                    String sql = "SELECT a.nume, (SELECT COUNT(1) FROM Book b WHERE b.idAutor = a.autorId) AS bookCount FROM Autor a where " + where;
                    List<Object[]> lettersList = Database.getDataObject(sql);
                    for (Object[] data : lettersList) {
                        LetterBean bean = new LetterBean();
                        String numeAutor = String.valueOf(data[0]);
                        final int howManyBooks = Integer.valueOf(String.valueOf(data[1]));
                        bean.setLeaf(true);
                        bean.setLoaded(true);
                        bean.setHowManyBooks(howManyBooks);
                        if (StringUtils.isEmpty(numeAutor)) {
                            numeAutor = Node.ALL;
                        }
                        bean.setName(numeAutor);
                        bean.setId(numeAutor);
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