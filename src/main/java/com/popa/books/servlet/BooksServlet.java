package com.popa.books.servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

import com.google.gson.JsonObject;
import com.popa.books.init.ApplicationInit;
import com.popa.books.servlet.handler.EventHandler;
import com.popa.books.servlet.handler.EventHandlerFactory;

//@MultipartConfig
public class BooksServlet extends HttpServlet {

	private static final long serialVersionUID = 1L;

	public static Logger logger = Logger.getLogger(BooksServlet.class);

	public BooksServlet() {
		super();
	}

	@Override
	public void init() throws ServletException {
		ApplicationInit.initialize(getServletContext());
	}

	@Override
	public void destroy() {
		ApplicationInit.shutdown();
	}

	@Override
    protected void doGet(final HttpServletRequest request, final HttpServletResponse response) throws ServletException, IOException {
		doPost(request, response);
	}

	@Override
    protected void doPost(final HttpServletRequest request, final HttpServletResponse response) throws ServletException, IOException {
		EventHandler handler = EventHandlerFactory.getHandler(request);
		try {
			String responseText = handler.handleEvent(request);
			 response.setContentType("text/html;charset=UTF-8");
			if (responseText != null) {
				response.getWriter().write(responseText);
			} else {
			    JsonObject obj = new JsonObject();
			    obj.addProperty("success", true);
			    response.getWriter().write(obj.toString());
			}
		} catch (Exception e) {
			handler.processError(e);
			response.addHeader(ResponseKey.ERROR_MESSAGE, handler.getErrorMessage() != null ? handler.getErrorMessage() : "A intervenit o eroare!");
			response.addHeader(ResponseKey.ERROR_ROOT_CAUSE, handler.getErrorRootCause());
			response.addHeader(ResponseKey.ERROR_STACKTRACE, handler.getErrorStackTrace());
			response.sendError(HttpServletResponse.SC_NOT_ACCEPTABLE);
			throw new ServletException(e);
		}
	}
}
