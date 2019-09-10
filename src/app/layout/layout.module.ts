import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { FooterComponent } from "./footer/footer.component";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [HeaderComponent, SidebarComponent, FooterComponent],
  imports: [CommonModule, FlexLayoutModule],
  exports: [FooterComponent, HeaderComponent, SidebarComponent]
})
export class LayoutModule {}
