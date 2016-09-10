'use strict';
/**
 * Created by shanergulley on 9/7/2016.
 */
angular.module('vera4App')
.factory('VeraService' , function ($resource) {
  return $resource('http://localhost/port_3480/data_request?id=variableget&Variable=:variable' , {variable: '@variable'});
});
