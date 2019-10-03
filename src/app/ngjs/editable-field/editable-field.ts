declare var angular: angular.IAngularStatic;
// import * as angular from 'angular';

(function() {
  'use strict';
  angular.module('heroApp').component('editableField', {
    template: require('html-loader!./editable-field.html'),
    controller: EditableFieldController,
    controllerAs: 'vm',
    bindings: {
      fieldValue: '<',
      fieldType: '@?',
      onUpdate: '&'
    }
  });

  EditableFieldController.$inject = ['$scope','$element','$attrs'];

  function EditableFieldController($scope, $element, $attrs) {
    var vm = this;
    vm.editMode = false;

    vm.$onInit = function() {
        // Make a copy of the initial value to be able to reset it later
        vm.fieldValueCopy = vm.fieldValue;
  
        // Set a default fieldType
        if (!vm.fieldType) {
          vm.fieldType = 'text';
        }
      };

    vm.handleModeChange = function() {
      if (vm.editMode) {
        vm.onUpdate({ value: vm.fieldValue });
        vm.fieldValueCopy = vm.fieldValue;
      }
      vm.editMode = !vm.editMode;
    };

    vm.reset = function() {
      vm.fieldValue = vm.fieldValueCopy;
    };


  }
})();
