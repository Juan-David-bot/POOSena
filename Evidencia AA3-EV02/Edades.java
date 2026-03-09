import java.util.Scanner;

public class Edades {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        /*
         * Desarrollar un programa que permita almacenar las edades de un grupo de 10
         * personas en un
         * vector de enteros y luego determine la cantidad de personas que son menores
         * de edad, mayores
         * de edad, cuántos adultos mayores, la edad más baja, la edad más alta y el
         * promedio de edades
         * ingresadas. Para el ejercicio anterior, suponga que un adulto mayor debe
         * tener una edad igual o
         * superior a 60. Debe validar para cada ingreso, que los valores estén en un
         * rango entre 1 y 120 años.
         * En caso de error deberá notificar y solicitar un nuevo valor.
         */

        int[] edades = new int[10];
        int menores = 0;
        int mayores = 0;
        int adultosMayores = 0;
        int edadMinima = Integer.MAX_VALUE;
        int edadMaxima = Integer.MIN_VALUE;
        int sumaEdades = 0;

        for (int i = 0; i < edades.length; i++) {
            int edad;
            do {
                System.out.print("Ingrese la edad de la " + (i + 1) + " persona: ");
                edad = sc.nextInt();
                if (edad < 1 || edad > 120) {
                    System.out.println("Edad incorrecta. Por favor, ingrese un valor entre 1 y 120.");
                }
            } while (edad < 1 || edad > 120);

            edades[i] = edad;
            sumaEdades += edad;

            if (edad < 18) {
                menores++;
            } else if (edad >= 18 && edad < 60) {
                mayores++;
            } else {
                adultosMayores++;
            }

            if (edad < edadMinima) {
                edadMinima = edad;
            }
            if (edad > edadMaxima) {
                edadMaxima = edad;
            }
        }

        double promedio = (double) sumaEdades / edades.length;

        System.out.println("Cantidad de personas menores de edad: " + menores);
        System.out.println("Cantidad de personas mayores de edad: " + mayores);
        System.out.println("Cantidad de adultos mayores: " + adultosMayores);
        System.out.println("Edad más baja: " + edadMinima);
        System.out.println("Edad más alta: " + edadMaxima);
        System.out.println("Promedio de edades: " + promedio);

        sc.close();
    }

}
