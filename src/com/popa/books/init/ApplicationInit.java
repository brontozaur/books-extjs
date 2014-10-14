package com.popa.books.init;

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
	};

	public static void initialize(ServletContext appContext) throws ServletException {
		LoggerMyWay.configure(LoggerMyWay.LOG_TXT, "admin", true);
		BorgPersistence.getEntityManager();
		loadPropertiesFile("config.properties");
	}

	public static void shutdown() {
		LoggerMyWay.shutDown();
	}

	private static void loadPropertiesFile(String propFileName) {
		Properties prop = new Properties();
		try {
			prop.load(Thread.currentThread().getContextClassLoader().getResourceAsStream("config.properties"));
			System.setProperty(PropertyKeys.COVERS_DIR, prop.getProperty(PropertyKeys.COVERS_DIR));
		} catch (Exception e) {
			logger.error(e, e);
		}

	}
}
