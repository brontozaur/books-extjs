package com.popa.books.init;

import java.io.File;
import java.io.InputStream;
import java.util.Properties;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;

import org.apache.log4j.Logger;

import com.popa.books.LoggerMyWay;
import com.popa.books.dao.persistence.BorgPersistence;
import com.popa.books.servlet.PropertyKeys;

public class ApplicationInit {

    public static Logger logger = Logger.getLogger(ApplicationInit.class);

    private ApplicationInit() {
    }

    public static void initialize(final ServletContext appContext) throws ServletException {
//        LoggerMyWay.configure(LoggerMyWay.LOG_TXT, "admin", true);
        BorgPersistence.getEntityManager();
        loadPropertiesFile("config.properties");
    }

    public static void shutdown() {
//        LoggerMyWay.shutDown();
    }

    private static void loadPropertiesFile(final String propFileName) {
        Properties prop = new Properties();
        try {
            InputStream is = Thread.currentThread().getContextClassLoader().getResourceAsStream("config.properties");
            prop.load(is);
            is.close();
            String coversDir;
            if (System.getProperty("os.name").contains("Mac")) {
                coversDir = prop.getProperty(PropertyKeys.MAC_COVERS_DIR);
            } else if (System.getProperty("os.name").contains("Windows")) {
                coversDir = prop.getProperty(PropertyKeys.WIN_COVERS_DIR);
            } else if (System.getProperty("os.name").contains("nux")) {
                coversDir = prop.getProperty(PropertyKeys.LINUX_COVERS_DIR);
            } else {
                throw new IllegalArgumentException("Unsupported OS: " + System.getProperty("os.name"));
            }
            if (!coversDir.endsWith("/") && !coversDir.endsWith("\\")){
                coversDir += File.separator;
            }
            System.setProperty(PropertyKeys.COVERS_DIR, coversDir);
        } catch (Exception e) {
            logger.error(e, e);
        }

    }
}
