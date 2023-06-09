import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PrimeNg
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    ButtonModule,
    CardModule,
    FieldsetModule, 
    TableModule,
    ToolbarModule,
    MenubarModule
  ]
})
export class PrimeNgModule { }
