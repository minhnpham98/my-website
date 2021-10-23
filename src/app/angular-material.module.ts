import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

const AngularMaterialComponents = [
    MatToolbarModule,
];

@NgModule({
    imports: [AngularMaterialComponents],
    exports: [AngularMaterialComponents],
})
export class AngularMaterialModule {}
