import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';

const AngularMaterialComponents = [
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatStepperModule,
    MatToolbarModule,
];

@NgModule({
    imports: [AngularMaterialComponents],
    exports: [AngularMaterialComponents],
})
export class AngularMaterialModule {}
