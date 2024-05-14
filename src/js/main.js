


    function importFonts(r) {
    let fonts = {};

    // Определения шрифтов
    const fontStyles = `
      @font-face {
          font-family: 'TT Lakes Regular';
          src: url('${require('../fonts/TTLakes-Regular.ttf')}');
          font-weight: normal;
          font-style: normal;
      }

      @font-face {
          font-family: 'TT Lakes Bold';
          src: url('${require('../fonts/TTLakes-Bold.ttf')}');
          font-weight: normal;
          font-style: normal;
      }

      @font-face {
          font-family: 'TT Lakes Medium';
          src: url('${require('../fonts/TTLakes-Medium.ttf')}');
          font-weight: normal;
          font-style: normal;
      }
    `;

    // Создаем стили для шрифтов
    const style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(fontStyles));
    document.head.appendChild(style);

    return fonts;
}
 
// Импорт шрифтов
const fonts = importFonts(require.context('../fonts', false, /\.(woff|woff2|eot|ttf|otf)$/));

export default fonts;
  





 import './content';
  import './modal';  
  
  import './brands';
  import './service';

import '../css/style.css';
