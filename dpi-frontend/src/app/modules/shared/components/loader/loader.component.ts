import {Component, OnDestroy, OnInit} from '@angular/core';
import {LoaderService} from './service/loader.service';
import {Subscription} from 'rxjs';
import {LoaderState} from './loader.model';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy {

  show = false;
  subscription: Subscription | undefined;
  private id = -1;

  constructor(
    private loaderService: LoaderService
  ) { }

  ngOnInit(): void {
    this.subscription = this.loaderService.loaderState
    .subscribe((state: LoaderState) => {
      this.id = setTimeout(() => {
        this.show = state.show;
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    clearTimeout(this.id);
  }

}
