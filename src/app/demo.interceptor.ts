import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const demoInterceptor: HttpInterceptorFn = (req, next) => {
  // Add an auth token
  const authToken = 'Your_AUTH_TOKEN_HERE'

  // Clone the request and add the auth header
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${authToken}`
    }
  })
  
  // Pass the cloned request with the updated header to the next handler
  return next(authReq).pipe(
    catchError((err: any) => {
      if (err instanceof HttpErrorResponse){
        if (err.status === 401){
          // Specific handling for unauthorized errors
          console.error('Unauthorized request', err)
        } else {
          // Handle other HTTP error codes
          console.error('HTTP Error:', err)
        }
      } else {
        // Handle non-HTTP errors
        console.error("An error occurred:", err)
      }

      // Rethrow the error to propagate it further
      return throwError(() => err)
    })
  );
};
