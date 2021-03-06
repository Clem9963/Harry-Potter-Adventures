import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { LayoutModule } from "@angular/cdk/layout";

import { AppRoutingModule, routes } from "./app-routing.module";

import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material";
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material";
import { MatInputModule } from "@angular/material";
import { MatRippleModule } from "@angular/material";
import { MatProgressSpinnerModule } from "@angular/material";
import { MatSidenavModule } from "@angular/material";
import { MatSelectModule } from "@angular/material/select";

import { AppComponent } from "./app.component";
import { GameComponent } from "./game/game.component";
import { RestErrorComponent } from "./game/rest-error/rest-error.component";
import { LogBarComponent } from "./log-bar/log-bar.component";
import { SettingsComponent } from "./settings/settings.component";
import { AdminComponent } from "./admin/admin.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    GameComponent,
    SettingsComponent,
    AdminComponent,
    PageNotFoundComponent,
    HomeComponent,
    RestErrorComponent,
    LogBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    LayoutModule,
    MatDialogModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatSelectModule
  ],
  entryComponents: [RestErrorComponent, LogBarComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
