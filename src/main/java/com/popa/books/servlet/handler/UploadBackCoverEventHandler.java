package com.popa.books.servlet.handler;

import java.io.File;
import java.io.FileOutputStream;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Logger;

import com.google.gson.JsonObject;
import com.popa.books.servlet.PropertyKeys;
import com.popa.books.servlet.util.RequestUtils;

public class UploadBackCoverEventHandler extends EventHandler {

	private static final Logger logger = Logger.getLogger(UploadBackCoverEventHandler.class);

	@Override
	public String handleEvent(final HttpServletRequest request) throws ServletException {
		try {
			String extjsFilePath = RequestUtils.getString(request, "fileName"); //usually c:\fakepath/filename.extension
            String fileName = extjsFilePath.substring(extjsFilePath.lastIndexOf("\\") + 1);
			byte[] frontCover = RequestUtils.getByteArray(request, "backCoverUpload");
            File dir = new File(System.getProperty(PropertyKeys.COVERS_DIR));
			if (!dir.exists() || !dir.isDirectory()){
			    if (!dir.mkdirs()){
			        throw new ServletException("Cannot create dir: "+System.getProperty(PropertyKeys.COVERS_DIR));
			    }
			}
            File serverOut = new File(dir.getAbsolutePath() + File.separator + fileName);
			FileOutputStream fso = new FileOutputStream(serverOut);
			fso.write(frontCover);
			fso.close();

			JsonObject obj = new JsonObject();
			obj.addProperty("success", true);
			obj.addProperty("fileName", serverOut.getName());

			return obj.toString();
		} catch (Exception exc) {
			logger.error(exc, exc);
			throw new ServletException(exc);
		}
	}
}
