import { ErrorInterceptorService } from './error-interceptor.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';

describe('ErrorInterceptorService', () => {
  let service: ErrorInterceptorService;
  let httpMock: HttpTestingController;
  let router: Router;
  let toastrService: ToastrService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ErrorInterceptorService,
        { provide: Router, useValue: jasmine.createSpyObj('Router', ['navigate']) },
        { provide: ToastrService, useValue: jasmine.createSpyObj('ToastrService', ['error']) },
      ],
    });

    service = TestBed.inject(ErrorInterceptorService);
    httpMock = TestBed.inject(HttpTestingController);
    router = TestBed.inject(Router);
    toastrService = TestBed.inject(ToastrService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should handle HTTP 401 error by redirecting to the log in page', () => {
    service.intercept({} as any, { handle: () => throwError({ status: 401 }) } as any).subscribe(
      () => fail('Expected an error'),
      () => {
        expect(router.navigate).toHaveBeenCalledWith(['/auth/login']);
      },
    );
  });

  it('should handle HTTP 404 error by redirecting to the not found page', () => {
    service.intercept({} as any, { handle: () => throwError({ status: 404 }) } as any).subscribe(
      () => fail('Expected an error'),
      () => {
        expect(router.navigate).toHaveBeenCalledWith(['/not-found']);
      },
    );
  });

  it('should handle other HTTP errors by showing an error message', () => {
    const errorMessage = 'error message';
    service.intercept({} as any, { handle: () => throwError({ message: errorMessage }) } as any).subscribe(
      () => fail('Expected an error'),
      () => {
        expect(toastrService.error).toHaveBeenCalledWith(errorMessage);
      },
    );
  });
});
