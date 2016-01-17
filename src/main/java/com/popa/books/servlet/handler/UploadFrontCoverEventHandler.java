package com.popa.books.servlet.handler;

import java.io.File;
import java.io.FileOutputStream;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Logger;

import com.google.gson.JsonObject;
import com.popa.books.servlet.util.RequestUtils;

public class UploadFrontCoverEventHandler extends EventHandler {

	private static final Logger logger = Logger.getLogger(UploadFrontCoverEventHandler.class);

	@Override
	public String handleEvent(final HttpServletRequest request) throws ServletException {
		try {
			byte[] frontCover = RequestUtils.getByteArray(request, "frontCoverUpload");
            File file = new File(RequestUtils.exportImageToDisk(request.getParameter("bookId"), true));
            file.deleteOnExit();
			FileOutputStream fso = new FileOutputStream(file);
			fso.write(frontCover);
			fso.close();

			JsonObject obj = new JsonObject();
			obj.addProperty("success", true);
			obj.addProperty("fileName", file.getName() + "?time=" + new Date());

			return obj.toString();
		} catch (Exception exc) {
			logger.error(exc, exc);
			throw new ServletException(exc);
		}
	}
}
