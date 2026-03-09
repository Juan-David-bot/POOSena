import java.util.Scanner;

public class Emisora {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        /*
         * Una emisora con presencia en diferentes ciudades, desea conocer el rating de
         * canciones y
         * cantantes más escuchados (sonados) en este semestre del año. Por lo tanto, se
         * ha pedido a
         * aprendices del SENA desarrollar una solución que permita conocer la respuesta
         * de 6 personas con
         * relación a sus gustos musicales. Con fines administrativos y realizar una
         * rifa entre las personas
         * encuestadas, la emisora desea poder registrar de las personas entrevistadas
         * su nombre, número de
         * identificación (cédula), fecha de nacimiento, correo electrónico, ciudad de
         * residencia, ciudad de
         * origen. Además, se deberá poder almacenar el artista y título de hasta 3
         * canciones favoritas en
         * cada una de las personas que se ingrese. Teniendo en cuenta lo anterior, se
         * sugiere que la solución
         * deberá mostrar un menú que permita las siguientes opciones:
         * a. Agregar una persona con los datos que se listan anteriormente.
         * b. Mostrar la información personal de una persona particular por medio de su
         * posición en el
         * vector.
         */

        String[] nombres = new String[6];
        String[] cedulas = new String[6];
        String[] fechasNacimiento = new String[6];
        String[] correos = new String[6];
        String[] ciudadesResidencia = new String[6];
        String[] ciudadesOrigen = new String[6];
        String[][] cancionesFavoritas = new String[6][3];
        int opcion;
        do {
            System.out.println("Menú:");
            System.out.println("1. Agregar una persona");
            System.out.println("2. Mostrar información de una persona");
            System.out.println("3. Salir");
            opcion = scanner.nextInt();
            scanner.nextLine(); // Limpiar el buffer

            switch (opcion) {
                case 1:

                    break;
                case 2:

                    break;
                case 3:
                    System.out.println("Saliendo...");
                    break;
                default:
                    System.out.println("Opción no válida.");
            }
        } while (opcion != 3);

        scanner.close();
    }

}
