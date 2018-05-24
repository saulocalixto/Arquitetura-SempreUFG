package Model;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 *
 * @author saulo-linux
 */
public class Utilitarios {
    
    private static StringBuffer buffer;
    private static DateFormat dateFormat;
    
    static StringBuffer getBuffer() {
        return buffer == null ? new StringBuffer() : buffer;
    }
    
    static String formataData(Date data) {
        
        return getDateFormat().format(data);
    }
    
    private static DateFormat getDateFormat() {
        return dateFormat == null ? new SimpleDateFormat("dd/MM/yyyy HH:mm:ss") 
                : dateFormat;
    }
}
