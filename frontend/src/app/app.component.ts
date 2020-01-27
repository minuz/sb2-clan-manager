import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, ViewChild } from '@angular/core';

@Component({
  selector: 'sb2-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  @ViewChild('snav', { static: true }) snav;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  ngOnDestroy() {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }
}
