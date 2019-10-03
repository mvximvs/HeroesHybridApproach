// start: load angular ( order matters )
import * as angular from 'angular';
import { UpgradeModule, setAngularJSGlobal } from '@angular/upgrade/static';
// end: load angular order matters

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { heroAppModule } from './../ngjs/index';
import { HelloworldComponent } from './helloworld/helloworld.component';

@NgModule({
  declarations: [ HelloworldComponent ],
  imports: [
    BrowserModule,
    UpgradeModule
  ] // ,
   // bootstrap: [HelloworldComponent]
})


export class AppModule {
  constructor(private upgrade: UpgradeModule) { }
  ngDoBootstrap() {
      setAngularJSGlobal(angular);
      this.upgrade.bootstrap(document.body, [heroAppModule.name], { strictDi: false });
  }
 }

