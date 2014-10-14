package com.popa.books.servlet.util;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.Part;

import com.popa.books.servlet.FormKeys;

public class RequestUtils {

    public static String getParameterValueFromRequest(final HttpServletRequest request, final String parameterName) throws ServletException {
        String contentType = request.getContentType();
        String eventValue = null;
        try {
            if (contentType == null) {
                eventValue = request.getParameter(parameterName);
            } else if (contentType.indexOf(FormKeys.MULTI_PART_FORM_CONTENT_TYPE) != -1 || contentType.indexOf(FormKeys.MULTI_PART_MIXED_STREAM) != -1) {
                Part part = request.getPart(parameterName);
                if (part == null) { // checkboxes that are unchecked
                    return null;
                }
                InputStream in = part.getInputStream();
                eventValue = readInputStream(in);
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

    private static String readInputStream(final InputStream in) throws IOException {
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
}
