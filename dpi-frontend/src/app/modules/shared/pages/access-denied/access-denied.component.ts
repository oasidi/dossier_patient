import {Component, OnInit} from '@angular/core';
import {KeycloakService} from 'keycloak-angular';

@Component({
  selector: 'app-access-denied',
  templateUrl: './access-denied.component.html',
  styleUrls: ['./access-denied.component.scss']
})
export class AccessDeniedComponent implements OnInit {

  constructor(
    private location: KeycloakService
  ) { }

  ngOnInit(): void {
    this.animate();
  }

  private animate() {
    let root = document.documentElement;
    let eyef = document.getElementById('eyef');
    let container = document.getElementById('eyef');
    let cx = document.getElementById("eyef").getAttribute("cx");
    let cy = document.getElementById("eyef").getAttribute("cy");
    let x;
    let y;

    document.addEventListener("mousemove", evt => {
      x = evt.clientX / innerWidth;
      y = evt.clientY / innerHeight;

      root.style.setProperty("--mouse-x", x);
      root.style.setProperty("--mouse-y", y);

      // @ts-ignore
      cx = 50 + 30 * x;
      // @ts-ignore
      cy = 50 + 30 * y;
      eyef.setAttribute("cx", cx);
      eyef.setAttribute("cy", cy);

    });
  }

  goBack() {
    this.location.login();
  }
}
