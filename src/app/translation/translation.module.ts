import { NgModule } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateService } from '@ngx-translate/core';

import { TranslatorService } from '../core/translator/translator.service';

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const translationOptions = {
  loader: {
    provide: TranslateLoader,
    useFactory: (createTranslateLoader),
    deps: [HttpClient]
  }
};

@NgModule({
  imports: [TranslateModule.forRoot(translationOptions)],
  exports: [TranslateModule],
  providers: [TranslateService]
})
export class TranslationModule {
	constructor(private translate: TranslatorService) {
		
	}
}
