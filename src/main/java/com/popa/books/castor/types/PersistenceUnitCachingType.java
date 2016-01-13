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

import java.io.Serializable;
import java.util.Enumeration;
import java.util.Hashtable;
import org.exolab.castor.xml.Marshaller;
import org.exolab.castor.xml.Unmarshaller;

/**
 * public enum SharedCacheMode { ALL, NONE, ENABLE_SELECTIVE,
 * DISABLE_SELECTIVE, UNSPECIFIED};
 * 
 *  
 * 
 * @version $Revision$ $Date$
 */
public class PersistenceUnitCachingType implements java.io.Serializable {


      //--------------------------/
     //- Class/Member Variables -/
    //--------------------------/

    /**
     * The ALL type
     */
    public static final int ALL_TYPE = 0;

    /**
     * The instance of the ALL type
     */
    public static final PersistenceUnitCachingType ALL = new PersistenceUnitCachingType(ALL_TYPE, "ALL");

    /**
     * The NONE type
     */
    public static final int NONE_TYPE = 1;

    /**
     * The instance of the NONE type
     */
    public static final PersistenceUnitCachingType NONE = new PersistenceUnitCachingType(NONE_TYPE, "NONE");

    /**
     * The ENABLE_SELECTIVE type
     */
    public static final int ENABLE_SELECTIVE_TYPE = 2;

    /**
     * The instance of the ENABLE_SELECTIVE type
     */
    public static final PersistenceUnitCachingType ENABLE_SELECTIVE = new PersistenceUnitCachingType(ENABLE_SELECTIVE_TYPE, "ENABLE_SELECTIVE");

    /**
     * The DISABLE_SELECTIVE type
     */
    public static final int DISABLE_SELECTIVE_TYPE = 3;

    /**
     * The instance of the DISABLE_SELECTIVE type
     */
    public static final PersistenceUnitCachingType DISABLE_SELECTIVE = new PersistenceUnitCachingType(DISABLE_SELECTIVE_TYPE, "DISABLE_SELECTIVE");

    /**
     * The UNSPECIFIED type
     */
    public static final int UNSPECIFIED_TYPE = 4;

    /**
     * The instance of the UNSPECIFIED type
     */
    public static final PersistenceUnitCachingType UNSPECIFIED = new PersistenceUnitCachingType(UNSPECIFIED_TYPE, "UNSPECIFIED");

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

    private PersistenceUnitCachingType(int type, java.lang.String value) 
     {
        super();
        this.type = type;
        this.stringValue = value;
    } //-- types.PersistenceUnitCachingType(int, java.lang.String)


      //-----------/
     //- Methods -/
    //-----------/

    /**
     * Method enumerate
     * 
     * Returns an enumeration of all possible instances of
     * PersistenceUnitCachingType
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
     * Returns the type of this PersistenceUnitCachingType
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
        members.put("ALL", ALL);
        members.put("NONE", NONE);
        members.put("ENABLE_SELECTIVE", ENABLE_SELECTIVE);
        members.put("DISABLE_SELECTIVE", DISABLE_SELECTIVE);
        members.put("UNSPECIFIED", UNSPECIFIED);
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
     * PersistenceUnitCachingType
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
     * Returns a new PersistenceUnitCachingType based on the given
     * String value.
     * 
     * @param string
     * @return PersistenceUnitCachingType
     */
    public static com.popa.books.castor.types.PersistenceUnitCachingType valueOf(java.lang.String string)
    {
        java.lang.Object obj = null;
        if (string != null) obj = _memberTable.get(string);
        if (obj == null) {
            String err = "'" + string + "' is not a valid PersistenceUnitCachingType";
            throw new IllegalArgumentException(err);
        }
        return (PersistenceUnitCachingType) obj;
    } //-- types.PersistenceUnitCachingType valueOf(java.lang.String) 

}
