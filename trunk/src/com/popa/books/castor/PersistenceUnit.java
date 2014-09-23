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
 * Class PersistenceUnit.
 * 
 * @version $Revision$ $Date$
 */
public class PersistenceUnit implements java.io.Serializable {


      //--------------------------/
     //- Class/Member Variables -/
    //--------------------------/

    /**
     * Name used in code to reference this persistence unit.
     * 
     *  
     */
    private java.lang.String _name;

    /**
     * Type of transactions used by EntityManagers from this 
     *  persistence unit.
     * 
     *  
     */
    private com.popa.books.castor.types.PersistenceUnitTransactionType _transactionType;

    /**
     * Description of this persistence unit.
     * 
     *  
     */
    private java.lang.String _description;

    /**
     * Provider class that supplies EntityManagers for this 
     *  persistence unit.
     * 
     *  
     */
    private java.lang.String _provider;

    /**
     * The container-specific name of the JTA datasource to use.
     * 
     *  
     */
    private java.lang.String _jtaDataSource;

    /**
     * The container-specific name of a non-JTA datasource to use.
     * 
     *  
     */
    private java.lang.String _nonJtaDataSource;

    /**
     * File containing mapping information. Loaded as a resource 
     *  by the persistence provider.
     * 
     *  
     */
    private final java.util.Vector _mappingFileList;

    /**
     * Jar file that is to be scanned for managed classes. 
     * 
     *  
     */
    private final java.util.Vector _jarFileList;

    /**
     * Managed class to be included in the persistence unit and
     *  to scan for annotations. It should be annotated 
     *  with either @Entity, @Embeddable or @MappedSuperclass.
     * 
     *  
     */
    private final java.util.Vector _clazzList;

    /**
     * When set to true then only listed classes and jars will 
     *  be scanned for persistent classes, otherwise the 
     *  enclosing jar or directory will also be scanned. 
     *  Not applicable to Java SE persistence units.
     * 
     *  
     */
    private boolean _excludeUnlistedClasses = true;

    /**
     * keeps track of state for field: _excludeUnlistedClasses
     */
    private boolean _has_excludeUnlistedClasses;

    /**
     * Defines whether caching is enabled for the 
     *  persistence unit if caching is supported by the
     *  persistence provider. When set to ALL, all entities 
     *  will be cached. When set to NONE, no entities will
     *  be cached. When set to ENABLE_SELECTIVE, only entities
     *  specified as cacheable will be cached. When set to
     *  DISABLE_SELECTIVE, entities specified as not cacheable
     *  will not be cached. When not specified or when set to
     *  UNSPECIFIED, provider defaults may apply.
     * 
     *  
     */
    private com.popa.books.castor.types.PersistenceUnitCachingType _sharedCacheMode;

    /**
     * The validation mode to be used for the persistence unit.
     * 
     *  
     */
    private com.popa.books.castor.types.PersistenceUnitValidationModeType _validationMode;

    /**
     * A list of standard and vendor-specific properties 
     *  and hints.
     * 
     *  
     */
    private Properties _properties;


      //----------------/
     //- Constructors -/
    //----------------/

    public PersistenceUnit() 
     {
        super();
        _mappingFileList = new Vector();
        _jarFileList = new Vector();
        _clazzList = new Vector();
    } //-- PersistenceUnit()


      //-----------/
     //- Methods -/
    //-----------/

    /**
     * Method addClazz
     * 
     * 
     * 
     * @param vClazz
     */
    public void addClazz(java.lang.String vClazz)
        throws java.lang.IndexOutOfBoundsException
    {
        _clazzList.addElement(vClazz);
    } //-- void addClazz(java.lang.String) 

    /**
     * Method addClazz
     * 
     * 
     * 
     * @param index
     * @param vClazz
     */
    public void addClazz(int index, java.lang.String vClazz)
        throws java.lang.IndexOutOfBoundsException
    {
        _clazzList.insertElementAt(vClazz, index);
    } //-- void addClazz(int, java.lang.String) 

    /**
     * Method addJarFile
     * 
     * 
     * 
     * @param vJarFile
     */
    public void addJarFile(java.lang.String vJarFile)
        throws java.lang.IndexOutOfBoundsException
    {
        _jarFileList.addElement(vJarFile);
    } //-- void addJarFile(java.lang.String) 

    /**
     * Method addJarFile
     * 
     * 
     * 
     * @param index
     * @param vJarFile
     */
    public void addJarFile(int index, java.lang.String vJarFile)
        throws java.lang.IndexOutOfBoundsException
    {
        _jarFileList.insertElementAt(vJarFile, index);
    } //-- void addJarFile(int, java.lang.String) 

    /**
     * Method addMappingFile
     * 
     * 
     * 
     * @param vMappingFile
     */
    public void addMappingFile(java.lang.String vMappingFile)
        throws java.lang.IndexOutOfBoundsException
    {
        _mappingFileList.addElement(vMappingFile);
    } //-- void addMappingFile(java.lang.String) 

    /**
     * Method addMappingFile
     * 
     * 
     * 
     * @param index
     * @param vMappingFile
     */
    public void addMappingFile(int index, java.lang.String vMappingFile)
        throws java.lang.IndexOutOfBoundsException
    {
        _mappingFileList.insertElementAt(vMappingFile, index);
    } //-- void addMappingFile(int, java.lang.String) 

    /**
     * Method deleteExcludeUnlistedClasses
     * 
     */
    public void deleteExcludeUnlistedClasses()
    {
        this._has_excludeUnlistedClasses= false;
    } //-- void deleteExcludeUnlistedClasses() 

    /**
     * Method enumerateClazz
     * 
     * 
     * 
     * @return Enumeration
     */
    public java.util.Enumeration enumerateClazz()
    {
        return _clazzList.elements();
    } //-- java.util.Enumeration enumerateClazz() 

    /**
     * Method enumerateJarFile
     * 
     * 
     * 
     * @return Enumeration
     */
    public java.util.Enumeration enumerateJarFile()
    {
        return _jarFileList.elements();
    } //-- java.util.Enumeration enumerateJarFile() 

    /**
     * Method enumerateMappingFile
     * 
     * 
     * 
     * @return Enumeration
     */
    public java.util.Enumeration enumerateMappingFile()
    {
        return _mappingFileList.elements();
    } //-- java.util.Enumeration enumerateMappingFile() 

    /**
     * Method getClazz
     * 
     * 
     * 
     * @param index
     * @return String
     */
    public java.lang.String getClazz(int index)
        throws java.lang.IndexOutOfBoundsException
    {
        //-- check bounds for index
        if ((index < 0) || (index >= _clazzList.size())) {
            throw new IndexOutOfBoundsException("getClazz: Index value '"+index+"' not in range [0.."+(_clazzList.size() - 1) + "]");
        }
        
        return (String)_clazzList.elementAt(index);
    } //-- java.lang.String getClazz(int) 

    /**
     * Method getClazz
     * 
     * 
     * 
     * @return String
     */
    public java.lang.String[] getClazz()
    {
        int size = _clazzList.size();
        java.lang.String[] mArray = new java.lang.String[size];
        for (int index = 0; index < size; index++) {
            mArray[index] = (String)_clazzList.elementAt(index);
        }
        return mArray;
    } //-- java.lang.String[] getClazz() 

    /**
     * Method getClazzCount
     * 
     * 
     * 
     * @return int
     */
    public int getClazzCount()
    {
        return _clazzList.size();
    } //-- int getClazzCount() 

    /**
     * Returns the value of field 'description'. The field
     * 'description' has the following description: Description of
     * this persistence unit.
     * 
     *  
     * 
     * @return String
     * @return the value of field 'description'.
     */
    public java.lang.String getDescription()
    {
        return this._description;
    } //-- java.lang.String getDescription() 

    /**
     * Returns the value of field 'excludeUnlistedClasses'. The
     * field 'excludeUnlistedClasses' has the following
     * description: When set to true then only listed classes and
     * jars will 
     *  be scanned for persistent classes, otherwise the 
     *  enclosing jar or directory will also be scanned. 
     *  Not applicable to Java SE persistence units.
     * 
     *  
     * 
     * @return boolean
     * @return the value of field 'excludeUnlistedClasses'.
     */
    public boolean getExcludeUnlistedClasses()
    {
        return this._excludeUnlistedClasses;
    } //-- boolean getExcludeUnlistedClasses() 

    /**
     * Method getJarFile
     * 
     * 
     * 
     * @param index
     * @return String
     */
    public java.lang.String getJarFile(int index)
        throws java.lang.IndexOutOfBoundsException
    {
        //-- check bounds for index
        if ((index < 0) || (index >= _jarFileList.size())) {
            throw new IndexOutOfBoundsException("getJarFile: Index value '"+index+"' not in range [0.."+(_jarFileList.size() - 1) + "]");
        }
        
        return (String)_jarFileList.elementAt(index);
    } //-- java.lang.String getJarFile(int) 

    /**
     * Method getJarFile
     * 
     * 
     * 
     * @return String
     */
    public java.lang.String[] getJarFile()
    {
        int size = _jarFileList.size();
        java.lang.String[] mArray = new java.lang.String[size];
        for (int index = 0; index < size; index++) {
            mArray[index] = (String)_jarFileList.elementAt(index);
        }
        return mArray;
    } //-- java.lang.String[] getJarFile() 

    /**
     * Method getJarFileCount
     * 
     * 
     * 
     * @return int
     */
    public int getJarFileCount()
    {
        return _jarFileList.size();
    } //-- int getJarFileCount() 

    /**
     * Returns the value of field 'jtaDataSource'. The field
     * 'jtaDataSource' has the following description: The
     * container-specific name of the JTA datasource to use.
     * 
     *  
     * 
     * @return String
     * @return the value of field 'jtaDataSource'.
     */
    public java.lang.String getJtaDataSource()
    {
        return this._jtaDataSource;
    } //-- java.lang.String getJtaDataSource() 

    /**
     * Method getMappingFile
     * 
     * 
     * 
     * @param index
     * @return String
     */
    public java.lang.String getMappingFile(int index)
        throws java.lang.IndexOutOfBoundsException
    {
        //-- check bounds for index
        if ((index < 0) || (index >= _mappingFileList.size())) {
            throw new IndexOutOfBoundsException("getMappingFile: Index value '"+index+"' not in range [0.."+(_mappingFileList.size() - 1) + "]");
        }
        
        return (String)_mappingFileList.elementAt(index);
    } //-- java.lang.String getMappingFile(int) 

    /**
     * Method getMappingFile
     * 
     * 
     * 
     * @return String
     */
    public java.lang.String[] getMappingFile()
    {
        int size = _mappingFileList.size();
        java.lang.String[] mArray = new java.lang.String[size];
        for (int index = 0; index < size; index++) {
            mArray[index] = (String)_mappingFileList.elementAt(index);
        }
        return mArray;
    } //-- java.lang.String[] getMappingFile() 

    /**
     * Method getMappingFileCount
     * 
     * 
     * 
     * @return int
     */
    public int getMappingFileCount()
    {
        return _mappingFileList.size();
    } //-- int getMappingFileCount() 

    /**
     * Returns the value of field 'name'. The field 'name' has the
     * following description: Name used in code to reference this
     * persistence unit.
     * 
     *  
     * 
     * @return String
     * @return the value of field 'name'.
     */
    public java.lang.String getName()
    {
        return this._name;
    } //-- java.lang.String getName() 

    /**
     * Returns the value of field 'nonJtaDataSource'. The field
     * 'nonJtaDataSource' has the following description: The
     * container-specific name of a non-JTA datasource to use.
     * 
     *  
     * 
     * @return String
     * @return the value of field 'nonJtaDataSource'.
     */
    public java.lang.String getNonJtaDataSource()
    {
        return this._nonJtaDataSource;
    } //-- java.lang.String getNonJtaDataSource() 

    /**
     * Returns the value of field 'properties'. The field
     * 'properties' has the following description: A list of
     * standard and vendor-specific properties 
     *  and hints.
     * 
     *  
     * 
     * @return Properties
     * @return the value of field 'properties'.
     */
    public Properties getProperties()
    {
        return this._properties;
    } //-- Properties getProperties() 

    /**
     * Returns the value of field 'provider'. The field 'provider'
     * has the following description: Provider class that supplies
     * EntityManagers for this 
     *  persistence unit.
     * 
     *  
     * 
     * @return String
     * @return the value of field 'provider'.
     */
    public java.lang.String getProvider()
    {
        return this._provider;
    } //-- java.lang.String getProvider() 

    /**
     * Returns the value of field 'sharedCacheMode'. The field
     * 'sharedCacheMode' has the following description: Defines
     * whether caching is enabled for the 
     *  persistence unit if caching is supported by the
     *  persistence provider. When set to ALL, all entities 
     *  will be cached. When set to NONE, no entities will
     *  be cached. When set to ENABLE_SELECTIVE, only entities
     *  specified as cacheable will be cached. When set to
     *  DISABLE_SELECTIVE, entities specified as not cacheable
     *  will not be cached. When not specified or when set to
     *  UNSPECIFIED, provider defaults may apply.
     * 
     *  
     * 
     * @return PersistenceUnitCachingType
     * @return the value of field 'sharedCacheMode'.
     */
    public com.popa.books.castor.types.PersistenceUnitCachingType getSharedCacheMode()
    {
        return this._sharedCacheMode;
    } //-- types.PersistenceUnitCachingType getSharedCacheMode() 

    /**
     * Returns the value of field 'transactionType'. The field
     * 'transactionType' has the following description: Type of
     * transactions used by EntityManagers from this 
     *  persistence unit.
     * 
     *  
     * 
     * @return PersistenceUnitTransactionType
     * @return the value of field 'transactionType'.
     */
    public com.popa.books.castor.types.PersistenceUnitTransactionType getTransactionType()
    {
        return this._transactionType;
    } //-- types.PersistenceUnitTransactionType getTransactionType() 

    /**
     * Returns the value of field 'validationMode'. The field
     * 'validationMode' has the following description: The
     * validation mode to be used for the persistence unit.
     * 
     *  
     * 
     * @return PersistenceUnitValidationModeType
     * @return the value of field 'validationMode'.
     */
    public com.popa.books.castor.types.PersistenceUnitValidationModeType getValidationMode()
    {
        return this._validationMode;
    } //-- types.PersistenceUnitValidationModeType getValidationMode() 

    /**
     * Method hasExcludeUnlistedClasses
     * 
     * 
     * 
     * @return boolean
     */
    public boolean hasExcludeUnlistedClasses()
    {
        return this._has_excludeUnlistedClasses;
    } //-- boolean hasExcludeUnlistedClasses() 

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
     * Method removeAllClazz
     * 
     */
    public void removeAllClazz()
    {
        _clazzList.removeAllElements();
    } //-- void removeAllClazz() 

    /**
     * Method removeAllJarFile
     * 
     */
    public void removeAllJarFile()
    {
        _jarFileList.removeAllElements();
    } //-- void removeAllJarFile() 

    /**
     * Method removeAllMappingFile
     * 
     */
    public void removeAllMappingFile()
    {
        _mappingFileList.removeAllElements();
    } //-- void removeAllMappingFile() 

    /**
     * Method removeClazz
     * 
     * 
     * 
     * @param index
     * @return String
     */
    public java.lang.String removeClazz(int index)
    {
        java.lang.Object obj = _clazzList.elementAt(index);
        _clazzList.removeElementAt(index);
        return (String)obj;
    } //-- java.lang.String removeClazz(int) 

    /**
     * Method removeJarFile
     * 
     * 
     * 
     * @param index
     * @return String
     */
    public java.lang.String removeJarFile(int index)
    {
        java.lang.Object obj = _jarFileList.elementAt(index);
        _jarFileList.removeElementAt(index);
        return (String)obj;
    } //-- java.lang.String removeJarFile(int) 

    /**
     * Method removeMappingFile
     * 
     * 
     * 
     * @param index
     * @return String
     */
    public java.lang.String removeMappingFile(int index)
    {
        java.lang.Object obj = _mappingFileList.elementAt(index);
        _mappingFileList.removeElementAt(index);
        return (String)obj;
    } //-- java.lang.String removeMappingFile(int) 

    /**
     * Method setClazz
     * 
     * 
     * 
     * @param index
     * @param vClazz
     */
    public void setClazz(int index, java.lang.String vClazz)
        throws java.lang.IndexOutOfBoundsException
    {
        //-- check bounds for index
        if ((index < 0) || (index >= _clazzList.size())) {
            throw new IndexOutOfBoundsException("setClazz: Index value '"+index+"' not in range [0.." + (_clazzList.size() - 1) + "]");
        }
        _clazzList.setElementAt(vClazz, index);
    } //-- void setClazz(int, java.lang.String) 

    /**
     * Method setClazz
     * 
     * 
     * 
     * @param clazzArray
     */
    public void setClazz(java.lang.String[] clazzArray)
    {
        //-- copy array
        _clazzList.removeAllElements();
        for (int i = 0; i < clazzArray.length; i++) {
            _clazzList.addElement(clazzArray[i]);
        }
    } //-- void setClazz(java.lang.String) 

    /**
     * Sets the value of field 'description'. The field
     * 'description' has the following description: Description of
     * this persistence unit.
     * 
     *  
     * 
     * @param description the value of field 'description'.
     */
    public void setDescription(java.lang.String description)
    {
        this._description = description;
    } //-- void setDescription(java.lang.String) 

    /**
     * Sets the value of field 'excludeUnlistedClasses'. The field
     * 'excludeUnlistedClasses' has the following description: When
     * set to true then only listed classes and jars will 
     *  be scanned for persistent classes, otherwise the 
     *  enclosing jar or directory will also be scanned. 
     *  Not applicable to Java SE persistence units.
     * 
     *  
     * 
     * @param excludeUnlistedClasses the value of field
     * 'excludeUnlistedClasses'.
     */
    public void setExcludeUnlistedClasses(boolean excludeUnlistedClasses)
    {
        this._excludeUnlistedClasses = excludeUnlistedClasses;
        this._has_excludeUnlistedClasses = true;
    } //-- void setExcludeUnlistedClasses(boolean) 

    /**
     * Method setJarFile
     * 
     * 
     * 
     * @param index
     * @param vJarFile
     */
    public void setJarFile(int index, java.lang.String vJarFile)
        throws java.lang.IndexOutOfBoundsException
    {
        //-- check bounds for index
        if ((index < 0) || (index >= _jarFileList.size())) {
            throw new IndexOutOfBoundsException("setJarFile: Index value '"+index+"' not in range [0.." + (_jarFileList.size() - 1) + "]");
        }
        _jarFileList.setElementAt(vJarFile, index);
    } //-- void setJarFile(int, java.lang.String) 

    /**
     * Method setJarFile
     * 
     * 
     * 
     * @param jarFileArray
     */
    public void setJarFile(java.lang.String[] jarFileArray)
    {
        //-- copy array
        _jarFileList.removeAllElements();
        for (int i = 0; i < jarFileArray.length; i++) {
            _jarFileList.addElement(jarFileArray[i]);
        }
    } //-- void setJarFile(java.lang.String) 

    /**
     * Sets the value of field 'jtaDataSource'. The field
     * 'jtaDataSource' has the following description: The
     * container-specific name of the JTA datasource to use.
     * 
     *  
     * 
     * @param jtaDataSource the value of field 'jtaDataSource'.
     */
    public void setJtaDataSource(java.lang.String jtaDataSource)
    {
        this._jtaDataSource = jtaDataSource;
    } //-- void setJtaDataSource(java.lang.String) 

    /**
     * Method setMappingFile
     * 
     * 
     * 
     * @param index
     * @param vMappingFile
     */
    public void setMappingFile(int index, java.lang.String vMappingFile)
        throws java.lang.IndexOutOfBoundsException
    {
        //-- check bounds for index
        if ((index < 0) || (index >= _mappingFileList.size())) {
            throw new IndexOutOfBoundsException("setMappingFile: Index value '"+index+"' not in range [0.." + (_mappingFileList.size() - 1) + "]");
        }
        _mappingFileList.setElementAt(vMappingFile, index);
    } //-- void setMappingFile(int, java.lang.String) 

    /**
     * Method setMappingFile
     * 
     * 
     * 
     * @param mappingFileArray
     */
    public void setMappingFile(java.lang.String[] mappingFileArray)
    {
        //-- copy array
        _mappingFileList.removeAllElements();
        for (int i = 0; i < mappingFileArray.length; i++) {
            _mappingFileList.addElement(mappingFileArray[i]);
        }
    } //-- void setMappingFile(java.lang.String) 

    /**
     * Sets the value of field 'name'. The field 'name' has the
     * following description: Name used in code to reference this
     * persistence unit.
     * 
     *  
     * 
     * @param name the value of field 'name'.
     */
    public void setName(java.lang.String name)
    {
        this._name = name;
    } //-- void setName(java.lang.String) 

    /**
     * Sets the value of field 'nonJtaDataSource'. The field
     * 'nonJtaDataSource' has the following description: The
     * container-specific name of a non-JTA datasource to use.
     * 
     *  
     * 
     * @param nonJtaDataSource the value of field 'nonJtaDataSource'
     */
    public void setNonJtaDataSource(java.lang.String nonJtaDataSource)
    {
        this._nonJtaDataSource = nonJtaDataSource;
    } //-- void setNonJtaDataSource(java.lang.String) 

    /**
     * Sets the value of field 'properties'. The field 'properties'
     * has the following description: A list of standard and
     * vendor-specific properties 
     *  and hints.
     * 
     *  
     * 
     * @param properties the value of field 'properties'.
     */
    public void setProperties(Properties properties)
    {
        this._properties = properties;
    } //-- void setProperties(Properties) 

    /**
     * Sets the value of field 'provider'. The field 'provider' has
     * the following description: Provider class that supplies
     * EntityManagers for this 
     *  persistence unit.
     * 
     *  
     * 
     * @param provider the value of field 'provider'.
     */
    public void setProvider(java.lang.String provider)
    {
        this._provider = provider;
    } //-- void setProvider(java.lang.String) 

    /**
     * Sets the value of field 'sharedCacheMode'. The field
     * 'sharedCacheMode' has the following description: Defines
     * whether caching is enabled for the 
     *  persistence unit if caching is supported by the
     *  persistence provider. When set to ALL, all entities 
     *  will be cached. When set to NONE, no entities will
     *  be cached. When set to ENABLE_SELECTIVE, only entities
     *  specified as cacheable will be cached. When set to
     *  DISABLE_SELECTIVE, entities specified as not cacheable
     *  will not be cached. When not specified or when set to
     *  UNSPECIFIED, provider defaults may apply.
     * 
     *  
     * 
     * @param sharedCacheMode the value of field 'sharedCacheMode'.
     */
    public void setSharedCacheMode(com.popa.books.castor.types.PersistenceUnitCachingType sharedCacheMode)
    {
        this._sharedCacheMode = sharedCacheMode;
    } //-- void setSharedCacheMode(types.PersistenceUnitCachingType) 

    /**
     * Sets the value of field 'transactionType'. The field
     * 'transactionType' has the following description: Type of
     * transactions used by EntityManagers from this 
     *  persistence unit.
     * 
     *  
     * 
     * @param transactionType the value of field 'transactionType'.
     */
    public void setTransactionType(com.popa.books.castor.types.PersistenceUnitTransactionType transactionType)
    {
        this._transactionType = transactionType;
    } //-- void setTransactionType(types.PersistenceUnitTransactionType) 

    /**
     * Sets the value of field 'validationMode'. The field
     * 'validationMode' has the following description: The
     * validation mode to be used for the persistence unit.
     * 
     *  
     * 
     * @param validationMode the value of field 'validationMode'.
     */
    public void setValidationMode(com.popa.books.castor.types.PersistenceUnitValidationModeType validationMode)
    {
        this._validationMode = validationMode;
    } //-- void setValidationMode(types.PersistenceUnitValidationModeType) 

    /**
     * Method unmarshal
     * 
     * 
     * 
     * @param reader
     * @return PersistenceUnit
     */
    public static PersistenceUnit unmarshal(java.io.Reader reader)
        throws org.exolab.castor.xml.MarshalException, org.exolab.castor.xml.ValidationException
    {
        return (PersistenceUnit) Unmarshaller.unmarshal(PersistenceUnit.class, reader);
    } //-- PersistenceUnit unmarshal(java.io.Reader) 

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
