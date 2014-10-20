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
            if ("letters".equals(request.getParameter("mode"))) {
                String sql = "select distinct(a.nume) from Autor a";
                List<Object[]> lettersList = Database.getDataObject(sql);
                List<Node> nodeList = new ArrayList<Node>();
                for (Object authorName : lettersList) {
                    LetterBean bean = new LetterBean();
                    bean.setLeaf(false);
                    String letterString;
                    if (authorName == null || StringUtils.isEmpty(authorName.toString())) {
                        letterString = Node.ALL;
                    } else {
                        letterString = authorName.toString().substring(0, 1);
                    }
                    bean.setName(letterString);
                    nodeList.add(bean);
                }
                System.err.println(new Gson().toJson(nodeList));
                return new Gson().toJson(nodeList);
            }
            return new Gson().toJson(new ArrayList<Node>());
        } catch (DatabaseException e) {
            logger.error(e.getMessage(), e);
            throw new ServletException(e);
        }
    }
}
