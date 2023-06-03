import { Injectable } from "@angular/core";
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from "@angular/common/http";
import { AuthService } from "./auth.service";
import {Observable} from "rxjs";


@Injectable()
export class AuthInterceptor implements HttpInterceptor{

  constructor(private authService: AuthService) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authToken = this.authService.getTokenLocalStorage();

    if (authToken) {
      req = req.clone({
        setHeaders: {
          Authorization: "Bearer " + authToken
        }
      });
    }

    return next.handle(req);
  }


}
