import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[errorMsg]',
})
export class ErrorMsgDirective implements OnInit, OnChanges {
  private _color: string = 'red';
  htmlElement: ElementRef<HTMLElement>;
  @Input() set valido(valor: boolean) {
    if (valor) {
      this.htmlElement.nativeElement.classList.add('hidden');
    } else {
      this.htmlElement.nativeElement.classList.remove('hidden');
    }
  }
  @Input() set color(valor: string) {
    this.htmlElement.nativeElement.style.color = valor;
    this._color = valor;
  }
  @Input() mensaje: string = 'fallo';

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }
  ngOnChanges(changes: SimpleChanges): void {}
  ngOnInit(): void {
    this.setColor();
    this.setMensaje();
  }

  setColor() {
    this.htmlElement.nativeElement.style.color = this._color;
    this.htmlElement.nativeElement.classList.add('form-text');
  }
  setMensaje() {
    this.htmlElement.nativeElement.innerText = this.mensaje;
  }
}
