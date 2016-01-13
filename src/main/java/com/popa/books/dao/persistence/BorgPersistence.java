package com.popa.books.dao.persistence;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityNotFoundException;
import javax.persistence.Persistence;
import javax.persistence.Query;

import org.apache.log4j.Logger;

public class BorgPersistence {

    private static Map<String, EntityManagerFactory> factories = new HashMap<String, EntityManagerFactory>();
    public static String DEFAULT_PERSISTENCE_UNIT = getPersistenceNames(true).get(0);
    private static Logger logger = Logger.getLogger(BorgPersistence.class);

    public static EntityManagerFactory getEntityManagerFactory(String persistenceUnitName) {
        EntityManagerFactory factory = factories.get(persistenceUnitName);
        if (factory != null) {
            if (!factory.isOpen()) {
                factory = Persistence.createEntityManagerFactory(persistenceUnitName);
                factories.put(persistenceUnitName, factory);
            }
        } else {
            factory = Persistence.createEntityManagerFactory(persistenceUnitName);
            factories.put(persistenceUnitName, factory);
        }
        return factory;
    }

    public static EntityManagerFactory getEntityManagerFactory() {
        return getEntityManagerFactory(DEFAULT_PERSISTENCE_UNIT);
    }

    public static EntityManager getEntityManager(final String persistenceUnitName) {
        EntityManagerFactory factory = getEntityManagerFactory(persistenceUnitName);
        return factory.createEntityManager();
    }

    public static EntityManager getEntityManager() {
        return getEntityManager(DEFAULT_PERSISTENCE_UNIT);
    }

    public static void closeFactory(String persistenceUnitName) {
        logger.info("closing EntityManagerFactory: " + persistenceUnitName);
        EntityManagerFactory factory = getEntityManagerFactory(persistenceUnitName);
        if (factory.isOpen()) {
            factory.close();
        }
        factories.remove(persistenceUnitName);
        logger.info("EntityManagerFactory " + persistenceUnitName + " succesfully closed");
    }

    public static void closeAllFactories() {
        logger.info("closing all factories....factories size: " + factories.size());
        List<String> factoryNames = new ArrayList<String>();
        factoryNames.addAll(factories.keySet());
        for (Iterator<String> it = factoryNames.iterator(); it.hasNext();) {
            closeFactory(it.next());
        }
        logger.info("all factories were successfully closed.");
    }

    public static boolean isLoaded(Object object) {
        return Persistence.getPersistenceUtil().isLoaded(object);
    }

    public static boolean isFieldLoaded(Object object, String fieldName) {
        return Persistence.getPersistenceUtil().isLoaded(object, fieldName);
    }

    public static void reloadObject(EntityManager manager, Object entity) throws EntityNotFoundException {
        manager.refresh(entity);
    }

    public static List<String> getPersistenceNames(boolean onlyVisible) {
        return ConfigFacade.getPersistenceUnitNames(onlyVisible);
    }

    public static Timestamp getServerTimestamp() {
        return getServerTimestamp(DEFAULT_PERSISTENCE_UNIT);
    }

    public static Timestamp getServerTimestamp(String persistenceUnitName) {
        String hibernateDialect = ConfigFacade.getHibernateDialect(persistenceUnitName);
        String serverTimeQuery = null;
        if (hibernateDialect.equals("org.hibernate.dialect.DB2Dialect")) { // DB2

        } else if (hibernateDialect.equals("org.hibernate.dialect.DB2400Dialect")) { // DB2 AS/400

        } else if (hibernateDialect.equals("org.hibernate.dialect.DB2390Dialect")) { // DB2 OS390

        } else if (hibernateDialect.equals("org.hibernate.dialect.PostgreSQLDialect")) { // PostgreSQL

        } else if (hibernateDialect.equals("org.hibernate.dialect.MySQLDialect")) { // MySQL
            serverTimeQuery = "SELECT now()";
        } else if (hibernateDialect.equals("org.hibernate.dialect.MySQLInnoDBDialect")) { // MySQL with InnoDB
            serverTimeQuery = "SELECT now()";
        } else if (hibernateDialect.equals("org.hibernate.dialect.MySQLMyISAMDialect")) { // MySQL with MyISAM
            serverTimeQuery = "SELECT now()";
        } else if (hibernateDialect.equals("org.hibernate.dialect.MySQL5InnoDBDialect")) { // MySQL 5 with InnoDB
            serverTimeQuery = "SELECT now()";
        } else if (hibernateDialect.equals("org.hibernate.dialect.OracleDialect")) { // Oracle 8

        } else if (hibernateDialect.equals("org.hibernate.dialect.Oracle9Dialect")) { // Oracle 9i/10g

        } else if (hibernateDialect.equals("org.hibernate.dialect.SybaseDialect")) { // Sybase

        } else if (hibernateDialect.equals("org.hibernate.dialect.SybaseAnywhereDialect")) { // Sybase Anywhere

        } else if (hibernateDialect.equals("org.hibernate.dialect.SQLServerDialect")) { // Microsoft SQL Server

        } else if (hibernateDialect.equals("org.hibernate.dialect.SAPDBDialect")) { // SAP DB

        } else if (hibernateDialect.equals("org.hibernate.dialect.InformixDialect")) { // Informix

        } else if (hibernateDialect.equals("org.hibernate.dialect.HSQLDialect")) { // HypersonicSQL

        } else if (hibernateDialect.equals("org.hibernate.dialect.IngresDialect")) { // Ingres

        } else if (hibernateDialect.equals("org.hibernate.dialect.ProgressDialect")) { // Progress

        } else if (hibernateDialect.equals("org.hibernate.dialect.MckoiDialect")) { // Mckoi SQL

        } else if (hibernateDialect.equals("org.hibernate.dialect.InterbaseDialect")) { // Interbase

        } else if (hibernateDialect.equals("org.hibernate.dialect.PointbaseDialect")) { // Pointbase

        } else if (hibernateDialect.equals("org.hibernate.dialect.FrontbaseDialect")) { // FrontBase

        } else if (hibernateDialect.equals("org.hibernate.dialect.FirebirdDialect")) { // Firebird

        } else
            throw new UnsupportedOperationException("cannot determine sql dialect for persistence unit " + persistenceUnitName);
        EntityManager em = null;
        try {
            em = BorgPersistence.getEntityManager();
            Query query = em.createNativeQuery(serverTimeQuery);
            return Timestamp.valueOf(query.getSingleResult().toString());
        } finally {
            em.close();
        }
    }
}
