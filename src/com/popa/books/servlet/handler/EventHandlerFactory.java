package com.popa.books.servlet.handler;

import javax.servlet.http.HttpServletRequest;

public class EventHandlerFactory {

	private EventHandlerFactory() {
	}

	public static EventHandler getHandler(HttpServletRequest request) {
		final String eventName = request.getParameter("event");
		EventHandler handler = null;
		if (Events.SAVE_BOOK.equals(eventName)) {
			handler = new SaveBookEventHandler();
		} else if (Events.GET_BOOKS.equals(eventName)) {
			handler = new GetBooksEventHandler();
		} else if (Events.DEL_BOOK.equals(eventName)) {
			handler = new DeleteBookEventHandler();
		} else if (Events.GET_AUTORS.equals(eventName)) {
			handler = new GetAutorsEventHandler();
		} else if (Events.GET_EDITURI.equals(eventName)) {
			handler = new GetEdituriEventHandler();
		} else if (Events.DEL_EDITURA.equals(eventName)) {
			handler = new DeleteEdituraEventHandler();
		} else if (Events.SAVE_EDITURA.equals(eventName)) {
			handler = new SaveEdituraEventHandler();
		} else if (Events.DEL_AUTOR.equals(eventName)) {
			handler = new DeleteAutorEventHandler();
		} else if (Events.SAVE_AUTOR.equals(eventName)) {
			handler = new SaveAutorEventHandler();
		}
		if (handler == null) {
			throw new NullPointerException("no handler was found for event: " + eventName);
		}
		return handler;
	}
}
