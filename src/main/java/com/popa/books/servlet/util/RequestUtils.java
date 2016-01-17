package com.popa.books.servlet.util;

import java.io.*;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.Part;

import com.popa.books.LoggerMyWay;
import org.apache.commons.io.IOUtils;

import com.popa.books.servlet.FormKeys;

public class RequestUtils {

    public static String getString(final HttpServletRequest request, final String parameterName) throws ServletException {
        String contentType = request.getContentType();
        String eventValue = null;
        try {
            if (contentType != null && (contentType.indexOf(FormKeys.MULTI_PART_FORM_CONTENT_TYPE) != -1 || contentType.indexOf(FormKeys.MULTI_PART_MIXED_STREAM) != -1)) {
                Part part = request.getPart(parameterName);
                if (part == null) { // checkboxes that are unchecked
                    return null;
                }
                InputStream in = part.getInputStream();
                eventValue = IOUtils.toString(in);
            } else {
                eventValue = request.getParameter(parameterName);
            }
            if (eventValue == null) {
                throw new ServletException("Cannot detect the value for request parameter: " + parameterName);
            }
        } catch (Exception e) {
            throw new ServletException(e.getMessage(), e);
        }
        return eventValue;
    }

    public static byte[] getByteArray(final HttpServletRequest request, final String parameterName) throws ServletException {
        String contentType = request.getContentType();
        byte[] eventValue = null;
        try {
            if (contentType == null) {
                eventValue = request.getParameter(parameterName).getBytes();
            } else if (contentType.indexOf(FormKeys.MULTI_PART_FORM_CONTENT_TYPE) != -1 || contentType.indexOf(FormKeys.MULTI_PART_MIXED_STREAM) != -1) {
                Part part = request.getPart(parameterName);
                if (part == null) { // checkboxes that are unchecked
                    return null;
                }
                InputStream in = part.getInputStream();
                eventValue = IOUtils.toByteArray(in);
            } else {
                throw new ServletException("Unknown content type: " + request.getContentType());
            }
            if (eventValue == null) {
                throw new ServletException("Cannot detect the value for request parameter: " + parameterName);
            }
        } catch (Exception e) {
            throw new ServletException(e.getMessage(), e);
        }
        return eventValue;
    }

    public static String inputStreamToString(final InputStream in) throws IOException {
        InputStreamReader is = new InputStreamReader(in);
        StringBuilder sb = new StringBuilder();
        BufferedReader br = new BufferedReader(is);
        String read = br.readLine();
        while (read != null) {
            sb.append(read);
            read = br.readLine();
        }
        return sb.toString();
    }

    public static byte[] inputStreamToByteArray(final InputStream in) throws IOException {
        ByteArrayOutputStream buffer = new ByteArrayOutputStream();
        int nRead;
        byte[] data = new byte[16384];
        while ((nRead = in.read(data, 0, data.length)) != -1) {
            buffer.write(data, 0, nRead);
        }
        buffer.flush();
        return buffer.toByteArray();
    }

    public static String exportImageToDisk(final String bookId, final boolean isFrontCover) {
        String path = LoggerMyWay.class.getClassLoader().getResource("").getPath();
        path += "../../data";
        return path + File.separator + bookId + (isFrontCover? "front":"")+ ".jpg";
    }

    public static String getImagePath(final String imageName) {
        String path = LoggerMyWay.class.getClassLoader().getResource("").getPath();
        path += "../../data";
        return path + File.separator + imageName;
    }

}
