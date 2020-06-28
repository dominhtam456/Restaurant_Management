export default class CommonUtil{
    
    static epochToDateTime = (epoch, f) => {   
        let format = f;    
        let utcSeconds = epoch;
        let date = new Date(0);
        date.setUTCSeconds(utcSeconds);
        format = format.replace("dd", date.getDate());
        format = format.replace("MM", date.getMonth() + 1);
        format = format.replace("yyyy", date.getFullYear());
        format = format.replace("mm", date.getMinutes());
        format = format.replace("hh", date.getHours());

        //let dateString = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} (${date.getHours()}:${date.getMinutes()})`
        return format;
    }
}