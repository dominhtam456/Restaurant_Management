export default class CommonUtil{
    
    static epochToDateTime = (epoch, f) => {   
        let format = f;    
        let utcSeconds = epoch;
        let date = new Date(0);
        date.setUTCSeconds(utcSeconds);
        format = date.getDate() > 10 ? format.replace("dd", date.getDate()): (format.replace("dd","0"+ date.getDate())) ;
        format = date.getMonth() + 1 > 10 ? format.replace("MM", date.getMonth() + 1) : format.replace("MM","0"+ (date.getMonth() + 1));
        format = format.replace("yyyy", date.getFullYear());
        format = format.replace("mm", date.getMinutes());
        format = format.replace("hh", date.getHours());

        //let dateString = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} (${date.getHours()}:${date.getMinutes()})`
        return format;
    }

    static formatVND = (text, groupSeparate = '.', currency = 'đ') => {
        text += "";
        text = text.replace(/\D/gm, '');
        // if ( text[0] === '0' ) {
        //   text =  text.replace( text[0], '' );
        // }
        if (text.length >= 4) {
          for ( var i = text.length - 3; i >=1 ; i -= 3 ) {
            text =  text.replace( text, text.substr(0, i) + groupSeparate + text.substr(i, text.length) );
          }
        }
        return text + currency;
      }

    static moveElementToLast = (element, array) => {
      array.push(array.splice(array.indexOf(element), 1)[0]);
      return array;
    }

    static getRandomColor = () => {
      let color = "hsl(" + Math.random() * 360 + ", 100%, 75%)";
      return color;
    }
}