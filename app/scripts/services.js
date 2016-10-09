'use strict';

angular.module('confusionApp')
        .constant("baseURL", "http://localhost:3000/")

        .service('menuFactory', ['$resource', 'baseURL', function($resource, baseURL) {
    
            this.getDishes = function(){
                return $resource(baseURL+"dishes/:id", null, {'update':{method:'PUT'}});
            };

            this.getPromotion = function () {        
                return $resource(baseURL+"promotions/:id");
            };
            
        }])

        .factory('corporateFactory', ['$resource', 'baseURL', function($resource, baseURL) {

            var corpFac = {};
            
            corpFac.getLeadership = function(){
                return $resource(baseURL+"leadership/:id");
            };
            
            return corpFac;
        
        }])

        .factory('feedbackFactory', ['$resource', 'baseURL', function($resource, baseURL) {
    
            var feedFac = {};
            
            feedFac.getFeedback = function(){
                return $resource(baseURL+"feedback/");
            };
            
            return feedFac;

        }])

;
