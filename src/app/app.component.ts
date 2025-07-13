import { Component } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';
import { ProAppConfigService } from '@totvs/protheus-lib-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private proAppConfigService: ProAppConfigService) {
  }

  readonly menus: Array<PoMenuItem> = [
    { label: 'Albuns', link: '/albuns', icon: "po-icon-device-desktop" },
    { label: 'Sair', action: this.closeApp.bind(this) }
  ];

  private onClick() {
    alert('Clicked in menu item')
  }

  private closeApp() {
    if (this.proAppConfigService.insideProtheus()) {
      this.proAppConfigService.callAppClose();
    } else {
      alert('O App não está sendo executado dentro do Protheus.');
    }
  }

}
