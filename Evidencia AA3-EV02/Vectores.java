import java.util.Scanner;

public class Vectores {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        /*
         * Escriba un programa que lea dos vectores de números enteros ordenados
         * ascendentemente y
         * luego produzca la lista ordenada de la mezcla de los dos, por ejemplo, si los
         * dos arreglos tienen los
         * números 1 3 6 9 17 y 2 4 10 17, respectivamente, la lista de números en la
         * pantalla debe ser 1 2 3 4
         * 6 9 10 17 17. Limite los vectores a un tamaño de 5 y debe validar en cada
         * ingreso que realmente se
         * estén ingresando los datos de forma ascendente.
         */

        int[] vector1 = new int[5];
        int[] vector2 = new int[5];
        System.out.println("Ingrese los números del primer vector en orden ascendente: ");
        for (int i = 0; i < vector1.length; i++) {
            int num = sc.nextInt();
            if (i == 0 || num > vector1[i - 1]) {
                vector1[i] = num;
            } else {
                System.out.println("Por favor, ingrese un número mayor que " + vector1[i - 1]);
                i--; // Decrementar para volver a pedir el número
            }
        }

        System.out.println("Ingrese los números del segundo vector en orden ascendente: ");
        for (int i = 0; i < vector2.length; i++) {
            int num = sc.nextInt();
            if (i == 0 || num > vector2[i - 1]) {
                vector2[i] = num;
            } else {
                System.out.println("Por favor, ingrese un número mayor que " + vector2[i - 1]);
                i--; // Decrementar para volver a pedir el número
            }
        }

        int[] mezcla = new int[vector1.length + vector2.length];
        int i = 0, j = 0, k = 0;
        while (i < vector1.length && j < vector2.length) {
            if (vector1[i] < vector2[j]) {
                mezcla[k++] = vector1[i++];
            } else {
                mezcla[k++] = vector2[j++];
            }
        }
        while (i < vector1.length) {
            mezcla[k++] = vector1[i++];
        }
        while (j < vector2.length) {
            mezcla[k++] = vector2[j++];
        }
        System.out.println("Vector mezclado en orden ascendente: ");
        for (int num : mezcla) {
            System.out.print(num + " ");
        }

        sc.close();

    }

}
