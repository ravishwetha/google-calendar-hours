var calendersSelectListOption = "<option value='${url}'>${title}</option>";
$.template( "calendersSelectListOption", calendersSelectListOption);

var rangeSelectList = "<select name='rangeList' id='rangeList'><option value='today'>Today</option><option value='week'>This week</option><option value='month'>This month</option><option value='year'>This yeah</option><option value='total'>Total</option></select>";
$.template( "rangeSelectList", rangeSelectList);