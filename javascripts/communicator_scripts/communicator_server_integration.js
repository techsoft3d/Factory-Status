var Communicator;
(function(e){var f=function(){function c(a){this._endpoint=a}c.prototype.request=function(a){var d=this,b=new XMLHttpRequest;b.open("POST",this._endpoint+"/service");b.setRequestHeader("Access-Control-Allow-Origin","*");b.setRequestHeader("Access-Control-Allow-Methods","POST");b.setRequestHeader("Access-Control-Allow-Headers","Content-Type, Access-Control-Allow-Origin, Access-Control-Allow-Methods, Access-Control-Allow-Headers");b.overrideMimeType("application/json");b.setRequestHeader("Content-Type","application/json");
b.timeout=6E4;return new Promise(function(c,e){b.onreadystatechange=function(){4===b.readyState&&(200===b.status?c(d._parseServerSuccessResponse(b.responseText)):e(d._parseServerError(b)))};b.send(d._encodeServiceRequest(a))})};c.prototype._encodeServiceRequest=function(a){var d={};switch(a.getServiceClass()){case e.ServiceClass.CSR_Session:d["class"]="csr_session";break;case e.ServiceClass.SSR_Session:d["class"]="ssr_session"}d.params={};var b=a.getModelSearchDirectories();0<b.length&&(d.params.modelSearchDirectories=
b);b=a.getModel();null!==b&&(d.params.model=b);b=a.getReadyEndpoint();null!==b&&(d.params.readyEndpoint=b);b=a.getStatusEndpoint();null!==b&&(d.params.statusEndpoint=b);b=a.getDisconnectEndpoint();null!==b&&(d.params.disconnectEndpoint=b);b=a.getStatusUpdateFrequency();0!==b&&(d.params.statusUpdateFrequency=b.toString());a=a.getSessionToken();null!==a&&(d.params.sessionToken=a);return JSON.stringify(d)};c.prototype._parseServerSuccessResponse=function(a){var d=new e.ServiceResponse;a=JSON.parse(a);
d._setIsOk("ok"===a.result);if(d.getIsOk()){d._setServiceId(a.serviceId);for(var b=Object.keys(a.endpoints),c=d.getEndpoints(),f=0;f<b.length;f++)c[e.ServiceProtocol[b[f].toUpperCase()]]=a.endpoints[b[f]]}else d._setReason(a.reason);return d};c.prototype._parseServerError=function(a){a;a=new e.ServiceResponse;a._setIsOk(!1);a._setReason("Server error encountered when trying to connect to: "+this._endpoint);return a};return c}();e.ServiceBroker=f})(Communicator||(Communicator={}));
(function(e){var f;(function(a){a[a.CSR_Session=0]="CSR_Session";a[a.SSR_Session=1]="SSR_Session"})(f=e.ServiceClass||(e.ServiceClass={}));var c=function(){function a(a){void 0===a&&(a=f.CSR_Session);this._modelSearchDirectories=[];this._disconnectEndpoint=this._statusEndpoint=this._readyEndpoint=this._model=null;this._statusUpdateFrequency=0;this._sessionToken=null;this._serviceClass=a}a.prototype.setServiceClass=function(a){this._serviceClass=a};a.prototype.getServiceClass=function(){return this._serviceClass};
a.prototype.addModelSearchDirectory=function(a){this._modelSearchDirectories.push(a)};a.prototype.getModelSearchDirectories=function(){return this._modelSearchDirectories.slice()};a.prototype.getModel=function(){return this._model};a.prototype.setModel=function(a){this._model=a};a.prototype.getReadyEndpoint=function(){return this._readyEndpoint};a.prototype.setReadyEndpoint=function(a){this._readyEndpoint=a};a.prototype.getStatusEndpoint=function(){return this._statusEndpoint};a.prototype.setStatusEndpoint=
function(a){this._statusEndpoint=a};a.prototype.getDisconnectEndpoint=function(){return this._disconnectEndpoint};a.prototype.setDisconnectEndpoint=function(a){this._disconnectEndpoint=a};a.prototype.getStatusUpdateFrequency=function(){return this._statusUpdateFrequency};a.prototype.setStatusUpdateFrequency=function(a){this._statusUpdateFrequency=a};a.prototype.getSessionToken=function(){return this._sessionToken};a.prototype.setSessionToken=function(a){this._sessionToken=a};return a}();e.ServiceRequest=
c})(Communicator||(Communicator={}));
(function(e){(function(c){c[c.WS=0]="WS";c[c.WSS=1]="WSS";c[c.HTTP=2]="HTTP";c[c.HTTPS=3]="HTTPS"})(e.ServiceProtocol||(e.ServiceProtocol={}));var f=function(){function c(){this._isOk=!1;this._serviceId=this._reason=null;this._endpoints={}}c.prototype.getIsOk=function(){return this._isOk};c.prototype.getReason=function(){return this._reason};c.prototype.getServiceId=function(){return this._serviceId};c.prototype.getEndpoints=function(){return this._endpoints};c.prototype._setIsOk=function(a){this._isOk=
a};c.prototype._setReason=function(a){this._reason=a};c.prototype._setServiceId=function(a){this._serviceId=a};c.prototype._addEndpoint=function(a,c){this._endpoints[a]=c};return c}();e.ServiceResponse=f})(Communicator||(Communicator={}));