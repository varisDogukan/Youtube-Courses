// Types
import { Ball, Brick, Paddle } from '../sprites';

export class CanvasView {
  canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D | null;
  private scoreDisplay: HTMLObjectElement | null;
  private start: HTMLObjectElement | null;
  private info: HTMLObjectElement | null;

  constructor(canvasName: string) {
    this.canvas = document.querySelector(canvasName) as HTMLCanvasElement; // *1
    this.context = this.canvas.getContext('2d'); // *2
    this.scoreDisplay = document.querySelector('#score');
    this.start = document.querySelector('#start');
    this.info = document.querySelector('#info');
  }

  clear(): void {
    this.context?.clearRect(0, 0, this.canvas.width, this.canvas.height); // *3
  }

  initStartButton(startFunction: (view: CanvasView) => void): void {
    this.start?.addEventListener('click', () => startFunction(this));
  }

  drawScore(score: number): void {
    if (this.scoreDisplay) this.scoreDisplay.innerHTML = score.toString();
  }

  drawInfo(text: string): void {
    if (this.info) this.info.innerHTML = text;
  }

  drawSprite(brick: Brick | Paddle | Ball): void {
    if (!brick) return;

    this.context?.drawImage(
      brick.image,
      brick.pos.x,
      brick.pos.y,
      brick.width,
      brick.height
    ); // *4
  }

  drawBricks(bricks: Brick[]): void {
    bricks.forEach(brick => this.drawSprite(brick));
  }
}

/*
--------- Açıklamalar ---------
1 - querySelector metodu genel olarak Element tipinde bir değer döndürür, bu nedenle as HTMLCanvasElement kullanılarak değerin HTMLCanvasElement tipine dönüştürülmesi gerekir.

2 - getContext metodu, HTML <canvas> elemanı için bir çizim ortamı oluşturmak için kullanılan bir metoddur. Bu metod, '2d' parametresi ile çağrılırsa, 2 boyutlu bir çizim ortamı oluşturur. Bu ortam, çizim yapmak, resim çizmek, metin yazmak ve benzeri görsel işlemler için kullanılabilir.

3 - clearRect metodu, HTML <canvas> elemanı için bir 2 boyutlu çizim ortamında belirli bir alanı temizlemek için kullanılan bir metoddur. Bu metod, belirtilen alanı arka plan rengi ile temizler ve bu alanın içeriğini siler.

  Örnek;
    const canvas = document.querySelector('#myCanvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(x, y, width, height);

  Bu örnekte, x ve y parametreleri temizlenecek alanın sol üst köşesinin koordinatlarını, width ve height parametreleri ise temizlenecek alanın genişliğini ve yüksekliğini belirtir.

4 - drawImage metodu, HTML <canvas> elemanı içinde bir görsel nesne (resim, video veya diğer bir <canvas> elemanı) çizmek için kullanılan bir metoddur. Bu metod, CanvasRenderingContext2D nesnesinin bir özelliğidir ve çizim yapmak için kullanılan bir 2 boyutlu çizim ortamının içeriğini oluşturmak için kullanılır.

*/
