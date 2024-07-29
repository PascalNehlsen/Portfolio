import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  constructor() {}

  private activeImage: string = '';

  showImage(imageName: string) {
    this.activeImage = imageName;
  }

  hideImage() {
    this.activeImage = '';
  }

  getActiveImage(): string {
    return this.activeImage;
  }
}
