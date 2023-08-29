import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class RoleGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log('666666');
    if (true) {
      throw new UnauthorizedException('认证失败');
    }
    // return true;
  }
}

// import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
// import { Observable } from 'rxjs';
// import { Reflector } from '@nestjs/core';
// import type { Request } from 'express';
// @Injectable()
// export class RoleGuard implements CanActivate {
//   constructor(private Reflector: Reflector) {}
//   canActivate(
//     context: ExecutionContext,
//   ): boolean | Promise<boolean> | Observable<boolean> {
//     const admin = this.Reflector.get<string[]>('role', context.getHandler());
//     const request = context.switchToHttp().getRequest<Request>();
//     console.log('-----', admin, request.query.role);
//     if (admin.includes(request.query.role as string)) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }
