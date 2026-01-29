import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have showSurprise and currentDateTime properties', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.showSurprise).toBeDefined();
    expect(app.currentDateTime).toBeDefined();
  });

  it('should show surprise text when onSurpriseClick is called', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.showSurprise).toBe(false);
    app.onSurpriseClick();
    expect(app.showSurprise).toBe(true);
  });

  it('should set currentDateTime when onShowDateTime is called', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.currentDateTime).toBe('');
    app.onShowDateTime();
    expect(app.currentDateTime).not.toBe('');
    expect(app.currentDateTime).toContain('2026');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Surprise Clock');
  });

  it('should render two buttons', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const buttons = compiled.querySelectorAll('button');
    expect(buttons.length).toBe(2);
  });

  it('should display surprise text when button is clicked', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const surpriseButton = compiled.querySelector('.surprise-btn') as HTMLButtonElement;
    surpriseButton.click();
    fixture.detectChanges();
    expect(compiled.querySelector('.surprise-text')?.textContent).toContain('SURPRISE!');
  });
});
