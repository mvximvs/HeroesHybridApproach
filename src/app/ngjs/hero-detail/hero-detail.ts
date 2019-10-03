declare var angular: angular.IAngularStatic;

(function () {
  "use strict";

  angular.module("heroApp").component("heroDetail", {
    template: require('html-loader!./hero-detail.html'),
    controller: HeroDetailController,
    controllerAs: 'vm',
    bindings: {
      hero: "<",
      onDelete: "&",
      onUpdate: "&"
    }
  });

  HeroDetailController.$inject = ['$window'];

  function HeroDetailController($window) {
    var vm = this;
    vm.$onInit = onInit;
    vm.download = download;

    function onInit() {
      vm.foo = isEdge();
    }

    vm.delete = function () {
      vm.onDelete({ hero: vm.hero });
    };

    vm.update = function (prop, value) {
      vm.onUpdate({ hero: vm.hero, prop: prop, value: value });
    };


    function download(filename) {

      if (vm.foo) {
        var fileName = 'testCsv';
        var csv_content = 'hello;world';
        var blob = new Blob(["\ufeff", csv_content], { type: "data:text/csv;charset=utf-8" });
        $window.navigator.msSaveOrOpenBlob(blob, fileName + '.csv');
      } else {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent('Hello World'));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);

      }



    }


    // is current browser edge?
    // parameter is optional
    function isEdge() {
      var match = navigator.userAgent.match(/Edge\/(\d+)/);
      return false;//match !== null? true : false;
    };


  }
})();