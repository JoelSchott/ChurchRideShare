import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// Primarily for storing api tokens from Cognito
export class LocalStorageService {

  constructor() { }

  set(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  get(key: string) {
    return localStorage.getItem(key);
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }

}
