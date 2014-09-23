package com.popa.books.dao.persistence;

import java.io.*;
import java.net.URISyntaxException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;
import org.exolab.castor.xml.MarshalException;
import org.exolab.castor.xml.ValidationException;

import com.popa.books.castor.Persistence;
import com.popa.books.castor.PersistenceUnit;
import com.popa.books.castor.Property;

public final class ConfigFacade {

	private static final String PERSISTENCE_XML = "../../../../.."+ File.separator + "META-INF"
			+ File.separator + "persistence.xml";
	private static Logger logger = Logger.getLogger(ConfigFacade.class);
	private static final String CONNECTION_URL_PROP_NAME = "hibernate.connection.url";
	private static final String CONNECTION_VISIBLE = "borg.visible.in.login";
	private static final String HIBERNATE_DIALECT = "hibernate.dialect";

	private static Persistence persistence;

	static {
		loadPersistence();
	}

	private ConfigFacade() {
	}

	private static void loadPersistence() {
		try {
			URL xmlURL = ConfigFacade.class.getResource(PERSISTENCE_XML);
			persistence = Persistence.unmarshal(new FileReader(new File(xmlURL
					.toURI())));
		} catch (MarshalException exc) {
			logger.error("cannot unmarshall " + PERSISTENCE_XML + " file", exc);
		} catch (ValidationException exc) {
			logger.error("cannot validate " + PERSISTENCE_XML + " file", exc);
		} catch (FileNotFoundException exc) {
			logger.error("file " + PERSISTENCE_XML + " not found", exc);
		} catch (URISyntaxException exc) {
			logger.error("file " + PERSISTENCE_XML + " not found", exc);
		}
	}

	public static Persistence getPersistence() {
		return persistence;
	}

	public static List<String> getPersistenceUnitNames(boolean onlyVisible) {
		List<String> puNames = new ArrayList<String>();
		for (PersistenceUnit pu : persistence.getPersistenceUnit()) {
			if (!isPersistenceUnitVisibleInLogin(pu) && onlyVisible) {
				continue;
			}
			puNames.add(pu.getName());
		}
		return puNames;
	}

	public static List<String> getDatabaseNames(boolean onlyVisible) {
		List<String> databaseNames = new ArrayList<String>();
		for (PersistenceUnit pu : persistence.getPersistenceUnit()) {
			if (!isPersistenceUnitVisibleInLogin(pu) && onlyVisible) {
				continue;
			}
			for (Property prop : pu.getProperties().getProperty()) {
				if (prop.getName().equals(CONNECTION_URL_PROP_NAME)) {
					databaseNames.add(prop.getValue());
				}
			}
		}
		return databaseNames;
	}

	private static boolean isPersistenceUnitVisibleInLogin(PersistenceUnit pu) {
		for (Property prop : pu.getProperties().getProperty()) {
			if (prop.getName().equals(CONNECTION_VISIBLE)) {
				return prop.getValue().equals("true");
			}
		}
		return false;
	}

	public static String getHibernateDialect(String persistenceUnitName) {
		for (PersistenceUnit pu : persistence.getPersistenceUnit()) {
			for (Property prop : pu.getProperties().getProperty()) {
				if (prop.getName().equals(HIBERNATE_DIALECT)) {
					return prop.getValue();
				}
			}
		}
		throw new NullPointerException("cannot get hibernate dialog for " + persistenceUnitName);
	}
}