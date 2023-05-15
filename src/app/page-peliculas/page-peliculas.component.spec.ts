import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePeliculasComponent } from './page-peliculas.component';

describe('PagePeliculasComponent', () => {
  let component: PagePeliculasComponent;
  let fixture: ComponentFixture<PagePeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagePeliculasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagePeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
