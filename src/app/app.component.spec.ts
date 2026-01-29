import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'surprise-clock'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('surprise-clock');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('surprise-clock app is running!');
  });

  it('should render toolbar and contain Welcome text', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement as HTMLElement;
    const toolbar = compiled.querySelector('.toolbar');
    
    expect(toolbar).toBeTruthy();
    expect(toolbar?.textContent).toContain('Welcome');
  });

  it('should render Resources section', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement as HTMLElement;
    const resourcesHeading = Array.from(compiled.querySelectorAll('h2'))
      .find(h2 => h2.textContent?.includes('Resources'));
    
    expect(resourcesHeading).toBeTruthy();
    expect(resourcesHeading?.textContent).toContain('Resources');
  });

  it('should render Angular tutorial resource link and contain Learn Angular', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const link = compiled.querySelector<HTMLAnchorElement>('a.card[href="https://angular.io/tutorial"]');
    
    expect(link).toBeTruthy();
    expect(link?.textContent).toContain('Learn Angular');
  });

  it('should have terminal default to ng generate component xyz', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement as HTMLElement;
    const terminal = compiled.querySelector('.terminal pre');
    
    expect(terminal).toBeTruthy();
    expect(terminal?.textContent).toContain('ng generate component xyz');
  });

  it('should update terminal to ng build when clicking Build for Production button', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement as HTMLElement;
    const buildButton = Array.from(compiled.querySelectorAll<HTMLButtonElement>('button.card'))
      .find(btn => btn.textContent?.includes('Build for Production'));
    
    expect(buildButton).toBeTruthy();
    
    buildButton?.click();
    fixture.detectChanges();
    
    const terminal = compiled.querySelector('.terminal pre');
    expect(terminal?.textContent).toContain('ng build');
  });
});
