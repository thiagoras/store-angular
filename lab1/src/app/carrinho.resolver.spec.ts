import { TestBed } from '@angular/core/testing';

import { CarrinhoResolver } from './carrinho.resolver';

describe('CarrinhoResolver', () => {
  let resolver: CarrinhoResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CarrinhoResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
