import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { JHipsterSharedLibsModule, JHipsterSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [JHipsterSharedLibsModule, JHipsterSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [JHipsterSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JHipsterSharedModule {
  static forRoot() {
    return {
      ngModule: JHipsterSharedModule
    };
  }
}
