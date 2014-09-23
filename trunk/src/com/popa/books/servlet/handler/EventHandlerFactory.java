package com.popa.books.servlet.handler;

import javax.servlet.http.HttpServletRequest;

public class EventHandlerFactory {
	
	private EventHandlerFactory(){}

	public static EventHandler getHandler(HttpServletRequest request){
		final String eventName = request.getParameter("event");
		EventHandler handler = null;
		if (Events.SAVE_BOOK.equals(eventName)) {
			handler = new SaveBookEventHandler();
		}
		if (handler == null){
			throw new NullPointerException("no handler was found for event: "+eventName);
		}
		return handler;
	}
}
