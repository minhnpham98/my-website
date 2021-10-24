import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

const AngularMaterialComponents = [
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatStepperModule,
    MatTabsModule,
    MatToolbarModule,
];

@NgModule({
    imports: [AngularMaterialComponents],
    exports: [AngularMaterialComponents],
})
export class AngularMaterialModule {}
