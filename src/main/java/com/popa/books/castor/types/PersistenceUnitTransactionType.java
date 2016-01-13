/*
 * This class was automatically generated with 
 * <a href="http://www.castor.org">Castor 1.0.1</a>, using an XML
 * Schema.
 * $Id$
 */

package com.popa.books.castor.types;

  //---------------------------------/
 //- Imported classes and packages -/
//---------------------------------/

import java.util.Hashtable;

/**
 * public enum PersistenceUnitTransactionType {JTA,
 * RESOURCE_LOCAL};
 * 
 *  
 * 
 * @version $Revision$ $Date$
 */
public class PersistenceUnitTransactionType implements java.io.Serializable {


      //--------------------------/
     //- Class/Member Variables -/
    //--------------------------/

    /**
     * The JTA type
     */
    public static final int JTA_TYPE = 0;

    /**
     * The instance of the JTA type
     */
    public static final PersistenceUnitTransactionType JTA = new PersistenceUnitTransactionType(JTA_TYPE, "JTA");

    /**
     * The RESOURCE_LOCAL type
     */
    public static final int RESOURCE_LOCAL_TYPE = 1;

    /**
     * The instance of the RESOURCE_LOCAL type
     */
    public static final PersistenceUnitTransactionType RESOURCE_LOCAL = new PersistenceUnitTransactionType(RESOURCE_LOCAL_TYPE, "RESOURCE_LOCAL");

    /**
     * Field _memberTable
     */
    private static java.util.Hashtable _memberTable = init();

    /**
     * Field type
     */
    private int type = -1;

    /**
     * Field stringValue
     */
    private java.lang.String stringValue = null;


      //----------------/
     //- Constructors -/
    //----------------/

    private PersistenceUnitTransactionType(int type, java.lang.String value) 
     {
        super();
        this.type = type;
        this.stringValue = value;
    } //-- types.PersistenceUnitTransactionType(int, java.lang.String)


      //-----------/
     //- Methods -/
    //-----------/

    /**
     * Method enumerate
     * 
     * Returns an enumeration of all possible instances of
     * PersistenceUnitTransactionType
     * 
     * @return Enumeration
     */
    public static java.util.Enumeration enumerate()
    {
        return _memberTable.elements();
    } //-- java.util.Enumeration enumerate() 

    /**
     * Method getType
     * 
     * Returns the type of this PersistenceUnitTransactionType
     * 
     * @return int
     */
    public int getType()
    {
        return this.type;
    } //-- int getType() 

    /**
     * Method init
     * 
     * 
     * 
     * @return Hashtable
     */
    private static java.util.Hashtable init()
    {
        Hashtable members = new Hashtable();
        members.put("JTA", JTA);
        members.put("RESOURCE_LOCAL", RESOURCE_LOCAL);
        return members;
    } //-- java.util.Hashtable init() 

    /**
     * Method readResolve
     * 
     *  will be called during deserialization to replace the
     * deserialized object with the correct constant instance.
     * <br/>
     * 
     * @return Object
     */
    private java.lang.Object readResolve()
    {
        return valueOf(this.stringValue);
    } //-- java.lang.Object readResolve() 

    /**
     * Method toString
     * 
     * Returns the String representation of this
     * PersistenceUnitTransactionType
     * 
     * @return String
     */
    public java.lang.String toString()
    {
        return this.stringValue;
    } //-- java.lang.String toString() 

    /**
     * Method valueOf
     * 
     * Returns a new PersistenceUnitTransactionType based on the
     * given String value.
     * 
     * @param string
     * @return PersistenceUnitTransactionType
     */
    public static com.popa.books.castor.types.PersistenceUnitTransactionType valueOf(java.lang.String string)
    {
        java.lang.Object obj = null;
        if (string != null) obj = _memberTable.get(string);
        if (obj == null) {
            String err = "'" + string + "' is not a valid PersistenceUnitTransactionType";
            throw new IllegalArgumentException(err);
        }
        return (PersistenceUnitTransactionType) obj;
    } //-- types.PersistenceUnitTransactionType valueOf(java.lang.String) 

}
