import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LightboxComponent } from './components/lightbox/lightbox.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    NavbarComponent, 
    FooterComponent, 
    LightboxComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  ngOnInit() {
    this.printDeveloperSignature();
  }

  private printDeveloperSignature() {
    const titleStyle = 'background: #d4a373; color: #08090c; font-weight: 800; font-size: 12px; padding: 4px 10px; border-radius: 2px;';
    const subStyle = 'background: #14161c; color: #e2e8f0; font-weight: 600; font-size: 11px; padding: 4px 10px; border-left: 2px solid #d4a373;';
    const textStyle = 'color: #94a3b8; font-size: 10px; font-family: monospace; line-height: 1.6;';
    const linkStyle = 'color: #34d399; font-size: 10px; font-family: monospace; font-weight: bold;';

    console.log(
      `%c ⚡ ARCHITECTURAL WEB PORTFOLIO %c\n` +
      `%c Engineered & Architected by Siva Bala Keerthick %c\n\n` +
      `%cClient:  THIVAGAR S.M -Architect(B.Arch)\n` +
      `Engine:                  Angular 22 (Standalone + Signals)\n` +
      `Portfolio:               %chttps://portfolio-sivabalakeerthick.web.app/\n` +
      `%cInquiries & Commissions: %csivabalakeerthick@gmail.com `,
      titleStyle,
      '',
      subStyle,
      '',
      textStyle,
      linkStyle,
      textStyle,
      linkStyle
    );
  }
}
