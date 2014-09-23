package com.popa.books.servlet.handler;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;

public abstract class EventHandler {

	public abstract void handleEvent(HttpServletRequest request) throws ServletException;
	
	public abstract String getEventName();
	
}
