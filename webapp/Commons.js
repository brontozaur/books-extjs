    function enablebuttons(enable){
        var modButton = Ext.ComponentQuery.query('booksgrid button[action=mod-book]')[0];
        var delButton = Ext.ComponentQuery.query('booksgrid button[action=del-book]')[0];
        if (enable){
        	modButton.enable();
        	delButton.enable();
        } else {
        	modButton.disable();
        	delButton.disable();
        }
    }
    
    function enablesavebutton(enable){
        var saveButton = Ext.ComponentQuery.query('bookinfo button[action=save-book]')[0];
        if (enable){
        	saveButton.enable();
        } else {
        	saveButton.disable();
        }
    }
    
    function clearInfoAreaFields(){
    	var titleField = Ext.ComponentQuery.query('bookinfo textfield[name=titleField]')[0];
    	titleField.setValue("");
    	var dateField = Ext.ComponentQuery.query('bookinfo textfield[name=dateField]')[0];
    	dateField.setValue("");
    	var autorField = Ext.ComponentQuery.query('bookinfo autorCombo[name=autorField]')[0];
    	autorField.setValue("");
    }
    
    function enableInfoAreaFields(enable){
    	var autorField = Ext.ComponentQuery.query('bookinfo autorCombo[name=autorField]')[0];
    	var titleField = Ext.ComponentQuery.query('bookinfo textfield[name=titleField]')[0];
    	var dateField = Ext.ComponentQuery.query('bookinfo textfield[name=dateField]')[0];
    	if (enable){
    		autorField.enable();
    		titleField.enable();
    		dateField.enable();
    	}else {
    		autorField.disable();
    		titleField.disable();
    		dateField.disable();    		
    	}
    }    