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
import com.popa.books.servlet.bean.AutorBean;
import com.popa.books.servlet.bean.BookBean;
import com.popa.books.servlet.bean.Node;

public class GetTreeEventHandler extends EventHandler {

    private static final Logger logger = Logger.getLogger(GetTreeEventHandler.class);

    @Override
    public String handleEvent(final HttpServletRequest request) throws ServletException {
        try {
            final String nodeId = request.getParameter("nodeId");
            List<Node> nodeList = new ArrayList<Node>();
            if ("byAutor".equals(request.getParameter("viewmode"))) {
                AutorBean nonLetterBean = null;
                final boolean isFlatMode = "flat".equals(request.getParameter("displayMode"));
                if (StringUtils.isEmpty(nodeId)) {
                    if (!isFlatMode) {
                        String sql = "SELECT SUBSTRING(a.nume,1,1) AS firstLetter, " + "(SELECT COUNT(1) FROM Autor a1 WHERE SUBSTRING(a1.nume,1,1) LIKE firstLetter) AS autorsNumber,"
                                + "(SELECT COUNT(1) FROM Book b WHERE b.idAutor = a.autorId) AS booksNumber " + "FROM Autor a GROUP BY firstLetter";
                        List<Object[]> lettersList = Database.getDataObject(sql);
                        for (Object[] data : lettersList) {
                            AutorBean bean = new AutorBean();
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
                                    nonLetterBean = new AutorBean();
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
                            AutorBean bean = new AutorBean();
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
                        AutorBean bean = new AutorBean();
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
            } else if ("byBooks".equals(request.getParameter("viewmode"))) {
                BookBean nonLetterBean = null;
                final boolean isFlatMode = "flat".equals(request.getParameter("displayMode"));
                if (StringUtils.isEmpty(nodeId)) {
                    if (!isFlatMode) {
                        String sql = "SELECT SUBSTRING(b.title,1,1) AS firstLetter, (SELECT COUNT(1) FROM Book b1 WHERE SUBSTRING(b1.title,1,1) LIKE firstLetter) AS booksNumber"
                                + " FROM Book b GROUP BY firstLetter";
                        List<Object[]> lettersList = Database.getDataObject(sql);
                        for (Object[] data : lettersList) {
                            BookBean bean = new BookBean();
                            String letter = String.valueOf(data[0]);
                            final int howManyBooks = Integer.valueOf(String.valueOf(data[1]));
                            bean.setHowManyBooks(howManyBooks);
                            bean.setLeaf(false);
                            bean.setLoaded(false);
                            if (StringUtils.isEmpty(letter) || !Character.isLetter(letter.charAt(0))) {
                                letter = Node.ALL;
                                if (nonLetterBean == null) {
                                    nonLetterBean = new BookBean();
                                    nonLetterBean.setLeaf(false);
                                    nonLetterBean.setLoaded(false);
                                    nonLetterBean.setName(letter);
                                    nonLetterBean.setId(letter);
                                }
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
                        String sql = "SELECT b.title FROM Book b";
                        List<Object[]> lettersList = Database.getDataObject(sql);
                        for (Object data : lettersList) {
                            AutorBean bean = new AutorBean();
                            String numeAutor = String.valueOf(data);
                            bean.setLeaf(true);
                            bean.setLoaded(true);
                            bean.setName(numeAutor);
                            bean.setId(numeAutor);
                            nodeList.add(bean);
                        }
                    }
                } else {
                    String where = "b.title LIKE '" + nodeId + "%'";
                    if (Node.ALL.equals(nodeId)) {
                        where = "b.title NOT LIKE 'A%' AND b.title NOT LIKE 'B%' AND b.title NOT LIKE 'C%' AND b.title NOT LIKE 'D%' AND b.title NOT LIKE 'E%' AND b.title NOT LIKE 'F%' AND "
                                + "b.title NOT LIKE 'G%' AND b.title NOT LIKE 'H%' AND b.title NOT LIKE 'I%' AND b.title NOT LIKE 'J%' AND b.title NOT LIKE 'K%' AND b.title NOT LIKE 'L%' AND "
                                + "b.title NOT LIKE 'M%' AND b.title NOT LIKE 'N%' AND b.title NOT LIKE 'O%' AND b.title NOT LIKE 'P%' AND b.title NOT LIKE 'R%' AND b.title NOT LIKE 'S%' AND "
                                + "b.title NOT LIKE 'T%' AND b.title NOT LIKE 'U%' AND b.title NOT LIKE 'W%' AND b.title NOT LIKE 'X%' AND b.title NOT LIKE 'W%' AND b.title NOT LIKE 'Y%' "
                                + "AND b.title NOT LIKE 'Z%'";
                    }
                    String sql = "SELECT b.title FROM Book b where " + where;
                    List<Object[]> lettersList = Database.getDataObject(sql);
                    for (Object data : lettersList) {
                        AutorBean bean = new AutorBean();
                        String numeAutor = String.valueOf(data);
                        bean.setLeaf(true);
                        bean.setLoaded(true);
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
