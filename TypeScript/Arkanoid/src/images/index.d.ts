/*
Bu kod, TypeScript tarafından yüklenen tüm .png uzantılı dosyalar için bir module tanımı yapmaktadır. Bu tanımlama, dosyaların bir değer olarak dize (string) olarak kullanılabileceğini belirtir ve dosyaların dışarı aktarılmasını sağlar.

Örneğin, bir .png dosyasının yolu ./image.png olarak tanımlanmışsa, bu dosya import image from './image.png' şeklinde JavaScript koduna dahil edilebilir ve image değişkeni, dosyanın yolunu (örneğin, "./image.png") olarak barındırır.
*/
declare module '*.png' {
  const value: string;
  export = value;
}
