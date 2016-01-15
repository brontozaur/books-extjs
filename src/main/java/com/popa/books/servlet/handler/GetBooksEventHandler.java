package com.popa.books.servlet.handler;

import java.io.FileOutputStream;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Logger;

import com.google.gson.Gson;
import com.popa.books.dao.AbstractDB;
import com.popa.books.dao.Book;
import com.popa.books.dao.Database;
import com.popa.books.dao.DatabaseException;

public class GetBooksEventHandler extends EventHandler {
	
	private static final Logger logger = Logger.getLogger(GetBooksEventHandler.class);

	@Override
	public String handleEvent(HttpServletRequest request) throws ServletException {
		try {
			List<AbstractDB> books = Database.getDbObjectsList(Book.class);
//			Book book = (Book)books.get(0);
//			byte[] coverData = book.getFrontCover();
//			try{
//				FileOutputStream fos = new FileOutputStream("/usr/local/logs/covers/poza_din_db.png");
//				fos.write(coverData);
//				fos.close();
//			}catch(Exception e){
//				logger.error(e.getMessage(), e);
//			}
			System.err.println(new Gson().toJson(books));
			return new Gson().toJson(books);
		} catch (DatabaseException e) {
			logger.error(e.getMessage(), e);
			throw new ServletException(e);
		}
	}
}
