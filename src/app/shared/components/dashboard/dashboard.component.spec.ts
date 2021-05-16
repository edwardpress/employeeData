import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { allIcons, NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [NgxBootstrapIconsModule.pick(allIcons)],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show 15 for employee Count to test for @input binding', () => {
    component.employeeCount = 15;
    fixture.detectChanges();

    expect(
      fixture.nativeElement.querySelector('.employeeCount').innerText
    ).toEqual('15');
  });
});
