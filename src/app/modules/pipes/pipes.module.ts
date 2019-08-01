import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsListComponent } from './students-list/students-list.component';
import { IsPassedImpurePipe } from './shared/isPassedImpure.pipe';
import { IsPassedPurePipe } from './shared/isPassedPure.pipe';

@NgModule({
  declarations: [StudentsListComponent, IsPassedImpurePipe, IsPassedPurePipe],
  imports: [
    CommonModule
  ],
  exports: [StudentsListComponent]
})
export class PipesModule { }
