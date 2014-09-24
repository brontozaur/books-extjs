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
 * public enum ValidationMode { AUTO, CALLBACK, NONE};
 * 
 *  
 * 
 * @version $Revision$ $Date$
 */
public class PersistenceUnitValidationModeType implements java.io.Serializable {


      //--------------------------/
     //- Class/Member Variables -/
    //--------------------------/

    /**
     * The AUTO type
     */
    public static final int AUTO_TYPE = 0;

    /**
     * The instance of the AUTO type
     */
    public static final PersistenceUnitValidationModeType AUTO = new PersistenceUnitValidationModeType(AUTO_TYPE, "AUTO");

    /**
     * The CALLBACK type
     */
    public static final int CALLBACK_TYPE = 1;

    /**
     * The instance of the CALLBACK type
     */
    public static final PersistenceUnitValidationModeType CALLBACK = new PersistenceUnitValidationModeType(CALLBACK_TYPE, "CALLBACK");

    /**
     * The NONE type
     */
    public static final int NONE_TYPE = 2;

    /**
     * The instance of the NONE type
     */
    public static final PersistenceUnitValidationModeType NONE = new PersistenceUnitValidationModeType(NONE_TYPE, "NONE");

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

    private PersistenceUnitValidationModeType(int type, java.lang.String value) 
     {
        super();
        this.type = type;
        this.stringValue = value;
    } //-- types.PersistenceUnitValidationModeType(int, java.lang.String)


      //-----------/
     //- Methods -/
    //-----------/

    /**
     * Method enumerate
     * 
     * Returns an enumeration of all possible instances of
     * PersistenceUnitValidationModeType
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
     * Returns the type of this PersistenceUnitValidationModeType
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
        members.put("AUTO", AUTO);
        members.put("CALLBACK", CALLBACK);
        members.put("NONE", NONE);
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
     * PersistenceUnitValidationModeType
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
     * Returns a new PersistenceUnitValidationModeType based on the
     * given String value.
     * 
     * @param string
     * @return PersistenceUnitValidationModeType
     */
    public static com.popa.books.castor.types.PersistenceUnitValidationModeType valueOf(java.lang.String string)
    {
        java.lang.Object obj = null;
        if (string != null) obj = _memberTable.get(string);
        if (obj == null) {
            String err = "'" + string + "' is not a valid PersistenceUnitValidationModeType";
            throw new IllegalArgumentException(err);
        }
        return (PersistenceUnitValidationModeType) obj;
    } //-- types.PersistenceUnitValidationModeType valueOf(java.lang.String) 

}
