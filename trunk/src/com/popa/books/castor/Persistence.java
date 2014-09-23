package com.popa.books.castor;
/*
 * This class was automatically generated with 
 * <a href="http://www.castor.org">Castor 1.0.1</a>, using an XML
 * Schema.
 * $Id$
 */

  //---------------------------------/
 //- Imported classes and packages -/
//---------------------------------/

import java.util.Vector;

import org.exolab.castor.xml.Marshaller;
import org.exolab.castor.xml.Unmarshaller;

/**
 * Class Persistence.
 * 
 * @version $Revision$ $Date$
 */
public class Persistence implements java.io.Serializable {


      //--------------------------/
     //- Class/Member Variables -/
    //--------------------------/

    /**
     * Field _version
     */
    private java.lang.String _version = "2.0";

    /**
     * Field _persistenceUnitList
     */
    private final java.util.Vector _persistenceUnitList;


      //----------------/
     //- Constructors -/
    //----------------/

    public Persistence() 
     {
        super();
        setVersion("2.0");
        _persistenceUnitList = new Vector();
    } //-- Persistence()


      //-----------/
     //- Methods -/
    //-----------/

    /**
     * Method addPersistenceUnit
     * 
     * 
     * 
     * @param vPersistenceUnit
     */
    public void addPersistenceUnit(PersistenceUnit vPersistenceUnit)
        throws java.lang.IndexOutOfBoundsException
    {
        _persistenceUnitList.addElement(vPersistenceUnit);
    } //-- void addPersistenceUnit(PersistenceUnit) 

    /**
     * Method addPersistenceUnit
     * 
     * 
     * 
     * @param index
     * @param vPersistenceUnit
     */
    public void addPersistenceUnit(int index, PersistenceUnit vPersistenceUnit)
        throws java.lang.IndexOutOfBoundsException
    {
        _persistenceUnitList.insertElementAt(vPersistenceUnit, index);
    } //-- void addPersistenceUnit(int, PersistenceUnit) 

    /**
     * Method enumeratePersistenceUnit
     * 
     * 
     * 
     * @return Enumeration
     */
    public java.util.Enumeration enumeratePersistenceUnit()
    {
        return _persistenceUnitList.elements();
    } //-- java.util.Enumeration enumeratePersistenceUnit() 

    /**
     * Method getPersistenceUnit
     * 
     * 
     * 
     * @param index
     * @return PersistenceUnit
     */
    public PersistenceUnit getPersistenceUnit(int index)
        throws java.lang.IndexOutOfBoundsException
    {
        //-- check bounds for index
        if ((index < 0) || (index >= _persistenceUnitList.size())) {
            throw new IndexOutOfBoundsException("getPersistenceUnit: Index value '"+index+"' not in range [0.."+(_persistenceUnitList.size() - 1) + "]");
        }
        
        return (PersistenceUnit) _persistenceUnitList.elementAt(index);
    } //-- PersistenceUnit getPersistenceUnit(int) 

    /**
     * Method getPersistenceUnit
     * 
     * 
     * 
     * @return PersistenceUnit
     */
    public PersistenceUnit[] getPersistenceUnit()
    {
        int size = _persistenceUnitList.size();
        PersistenceUnit[] mArray = new PersistenceUnit[size];
        for (int index = 0; index < size; index++) {
            mArray[index] = (PersistenceUnit) _persistenceUnitList.elementAt(index);
        }
        return mArray;
    } //-- PersistenceUnit[] getPersistenceUnit() 

    /**
     * Method getPersistenceUnitCount
     * 
     * 
     * 
     * @return int
     */
    public int getPersistenceUnitCount()
    {
        return _persistenceUnitList.size();
    } //-- int getPersistenceUnitCount() 

    /**
     * Returns the value of field 'version'.
     * 
     * @return String
     * @return the value of field 'version'.
     */
    public java.lang.String getVersion()
    {
        return this._version;
    } //-- java.lang.String getVersion() 

    /**
     * Method isValid
     * 
     * 
     * 
     * @return boolean
     */
    public boolean isValid()
    {
        try {
            validate();
        }
        catch (org.exolab.castor.xml.ValidationException vex) {
            return false;
        }
        return true;
    } //-- boolean isValid() 

    /**
     * Method marshal
     * 
     * 
     * 
     * @param out
     */
    public void marshal(java.io.Writer out)
        throws org.exolab.castor.xml.MarshalException, org.exolab.castor.xml.ValidationException
    {
        
        Marshaller.marshal(this, out);
    } //-- void marshal(java.io.Writer) 

    /**
     * Method marshal
     * 
     * 
     * 
     * @param handler
     */
    public void marshal(org.xml.sax.ContentHandler handler)
        throws java.io.IOException, org.exolab.castor.xml.MarshalException, org.exolab.castor.xml.ValidationException
    {
        
        Marshaller.marshal(this, handler);
    } //-- void marshal(org.xml.sax.ContentHandler) 

    /**
     * Method removeAllPersistenceUnit
     * 
     */
    public void removeAllPersistenceUnit()
    {
        _persistenceUnitList.removeAllElements();
    } //-- void removeAllPersistenceUnit() 

    /**
     * Method removePersistenceUnit
     * 
     * 
     * 
     * @param index
     * @return PersistenceUnit
     */
    public PersistenceUnit removePersistenceUnit(int index)
    {
        java.lang.Object obj = _persistenceUnitList.elementAt(index);
        _persistenceUnitList.removeElementAt(index);
        return (PersistenceUnit) obj;
    } //-- PersistenceUnit removePersistenceUnit(int) 

    /**
     * Method setPersistenceUnit
     * 
     * 
     * 
     * @param index
     * @param vPersistenceUnit
     */
    public void setPersistenceUnit(int index, PersistenceUnit vPersistenceUnit)
        throws java.lang.IndexOutOfBoundsException
    {
        //-- check bounds for index
        if ((index < 0) || (index >= _persistenceUnitList.size())) {
            throw new IndexOutOfBoundsException("setPersistenceUnit: Index value '"+index+"' not in range [0.." + (_persistenceUnitList.size() - 1) + "]");
        }
        _persistenceUnitList.setElementAt(vPersistenceUnit, index);
    } //-- void setPersistenceUnit(int, PersistenceUnit) 

    /**
     * Method setPersistenceUnit
     * 
     * 
     * 
     * @param persistenceUnitArray
     */
    public void setPersistenceUnit(PersistenceUnit[] persistenceUnitArray)
    {
        //-- copy array
        _persistenceUnitList.removeAllElements();
        for (int i = 0; i < persistenceUnitArray.length; i++) {
            _persistenceUnitList.addElement(persistenceUnitArray[i]);
        }
    } //-- void setPersistenceUnit(PersistenceUnit) 

    /**
     * Sets the value of field 'version'.
     * 
     * @param version the value of field 'version'.
     */
    public void setVersion(java.lang.String version)
    {
        this._version = version;
    } //-- void setVersion(java.lang.String) 

    /**
     * Method unmarshal
     * 
     * 
     * 
     * @param reader
     * @return Persistence
     */
    public static Persistence unmarshal(java.io.Reader reader)
        throws org.exolab.castor.xml.MarshalException, org.exolab.castor.xml.ValidationException
    {
        return (Persistence) Unmarshaller.unmarshal(Persistence.class, reader);
    } //-- Persistence unmarshal(java.io.Reader) 

    /**
     * Method validate
     * 
     */
    public void validate()
        throws org.exolab.castor.xml.ValidationException
    {
        org.exolab.castor.xml.Validator validator = new org.exolab.castor.xml.Validator();
        validator.validate(this);
    } //-- void validate() 

}
