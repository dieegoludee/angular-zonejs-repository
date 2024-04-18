import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [MainPageComponent, ListComponent, FormComponent],
  imports: [CommonModule],
  exports: [MainPageComponent],
})
export class DbzModule {}
