import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from 'rxjs/operators';
import { SweetAlert } from "./sweet-alert";

export class HttpErrorInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError((httpErrorResponse) => {
      SweetAlert.exibirErro(httpErrorResponse.error.nome)
      return throwError(httpErrorResponse.error)
    }))
  }
}