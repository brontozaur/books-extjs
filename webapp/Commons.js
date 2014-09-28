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
    
    function clearInfoAreaFields(){
    	var titleField = Ext.ComponentQuery.query('bookinfo textfield[name=titleField]')[0];
    	titleField.setValue("");
    	var dateField = Ext.ComponentQuery.query('bookinfo textfield[name=dateField]')[0];
    	dateField.setValue("");
    	var autorField = Ext.ComponentQuery.query('bookinfo autorCombo[name=autorField]')[0];
    	autorField.setValue("");
    }