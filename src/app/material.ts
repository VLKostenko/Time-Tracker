import { MatButtonModule, MatCardModule, MatTableModule, MatExpansionModule, MatInputModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
	imports: [ MatButtonModule, MatCardModule, MatTableModule, MatExpansionModule, MatInputModule ],
	exports: [ MatButtonModule, MatCardModule, MatTableModule, MatExpansionModule, MatInputModule ],
})
export class MaterialModule { }