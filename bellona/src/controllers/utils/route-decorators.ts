import { Get as GetWrap, Post as PostWrap, Put as PutWrap, Delete as DeleteWrap, Version } from '@nestjs/common';

function wrap(method: (path: string) => MethodDecorator, data: { version: number, path?: string }) {
  const versionWrapper = Version(data.version.toString());
  const methodWrapper = method(data.path);
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    versionWrapper(target, propertyKey, descriptor);
    methodWrapper(target, propertyKey, descriptor)
  };
}

export function Get(data: { version: number, path?: string }) {
  return wrap(GetWrap, data);
}

export function Post(data: { version: number, path?: string }) {
  return wrap(PostWrap, data);
}

export function Put(data: { version: number, path?: string }) {
  return wrap(PutWrap, data);
}

export function Delete(data: { version: number, path?: string }) {
  return wrap(DeleteWrap, data);
}
