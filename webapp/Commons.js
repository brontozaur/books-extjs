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
    
    function enablebuttonsAutor(enable){
        var modButton = Ext.ComponentQuery.query('autorgrid button[action=mod-autor]')[0];
        var delButton = Ext.ComponentQuery.query('autorgrid button[action=del-autor]')[0];
        if (enable){
        	modButton.enable();
        	delButton.enable();
        } else {
        	modButton.disable();
        	delButton.disable();
        }
    }
    
    function enablebuttonsEditura(enable){
        var modButton = Ext.ComponentQuery.query('edituragrid button[action=mod-editura]')[0];
        var delButton = Ext.ComponentQuery.query('edituragrid button[action=del-editura]')[0];
        if (enable){
        	modButton.enable();
        	delButton.enable();
        } else {
        	modButton.disable();
        	delButton.disable();
        }
    }