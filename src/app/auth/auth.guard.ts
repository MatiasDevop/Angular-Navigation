import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
      private authService: AuthService,
      private router:Router
    ){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    
      return this.checkAuth();
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
    
      return this.checkAuth();
  }
  checkAuth(): boolean{
    console.log('CheackAuth Func', this.authService.isLoggedIn);
    if(this.authService.isLoggedIn){return true;}
    
    this.router.navigate(['/login']);
    return false;
  }
  
}
