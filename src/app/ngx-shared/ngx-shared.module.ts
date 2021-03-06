import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { TranslateModule } from "@ngx-translate/core";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { NgZorroAntdModule } from "ng-zorro-antd";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,

    NgZorroAntdModule.forRoot(),
    PerfectScrollbarModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,

    TranslateModule,
    PerfectScrollbarModule,
    NgZorroAntdModule
  ]
})
export class NgxSharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxSharedModule
    };
  }
}
