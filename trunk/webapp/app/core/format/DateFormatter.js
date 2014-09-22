Ext.define('BM.core.format.DateFormatter', {
    alternateClassName: 'DATEFORMATTER',
    singleton: true,

    getDateFormat: function() {
        return 'd.m.Y';
    },

    getDateTimeFormat: function() {
        return 'd.m.Y H:i:s';
    },

    /**
     * @param {date or number} value - the date to be formatted
     * @param {string} emptyValue - the value which should be returned if this date is not set
     * @return {String} formatted date
     */
    getDate: function(value, emptyValue) {
        var me = this;
        return me.getFormatted(value, me.getDateFormat(), emptyValue);
    },

    getDateCustomFormat: function(value, emptyValue, format) {
        var me = this;
        return me.getFormatted(value, format, emptyValue);
    },

    getDateTime: function(value, emptyValue) {
        var me = this;
        return me.getFormatted(value, me.getDateTimeFormat(), emptyValue);
    },

    getFormatted: function(date, format, emptyValue) {
        if (date) {
            if (!date.getMonth) {
                date = new Date(date);
            }

            return Ext.util.Format.date(date, format);
        } else {
            return emptyValue;
        }
    },

    // Returns the time as string from a dateTime object
    getTime: function(dateTime) {
        var hours = dateTime.getHours();
        var minutes = dateTime.getMinutes();
        var seconds = dateTime.getSeconds();

        return hours + ":" + minutes + ":" + seconds;
    }
});