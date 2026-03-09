import java.util.Scanner;

public class FigurasPlanas {

public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("Ingrese el tipo de figura (cuadrado, rectángulo, círculo, triángulo): ");
        String figura = sc.nextLine().toLowerCase();

        switch (figura) {
            case "cuadrado":
                System.out.println("Ingrese el lado del cuadrado: ");
                double lado = sc.nextDouble();
                double areaCuadrado = lado * lado;
                double perimetroCuadrado = 4 * lado;
                System.out.println("Área del cuadrado: " + areaCuadrado);
                System.out.println("Perímetro del cuadrado: " + perimetroCuadrado);
                break;

            case "rectángulo":
                System.out.println("Ingrese la base del rectángulo: ");
                double base = sc.nextDouble();
                System.out.println("Ingrese la altura del rectángulo: ");
                double altura = sc.nextDouble();
                double areaRectangulo = base * altura;
                double perimetroRectangulo = 2 * (base + altura);
                System.out.println("Área del rectángulo: " + areaRectangulo);
                System.out.println("Perímetro del rectángulo: " + perimetroRectangulo);
                break;

            case "círculo":
                System.out.println("Ingrese el radio del círculo: ");
                double radio = sc.nextDouble();
                double areaCirculo = Math.PI * radio * radio;
                double perimetroCirculo = 2 * Math.PI * radio;
                System.out.println("Área del círculo: " + areaCirculo);
                System.out.println("Perímetro del círculo: " + perimetroCirculo);
                break;

            case "Triángulo":
                System.out.println("Ingrese la base del triángulo: ");
                double baseTriangulo = sc.nextDouble();
                System.out.println("Ingrese la altura del triángulo: ");
                double alturaTriangulo = sc.nextDouble();
                double areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
                double perimetroTriangulo = baseTriangulo + alturaTriangulo + Math.sqrt(Math.pow(baseTriangulo, 2) + Math.pow(alturaTriangulo, 2)); 
                System.out.println("Área del triángulo: " + areaTriangulo);
                System.out.println("Perímetro del triángulo: " + perimetroTriangulo);
                break;

            default:
                System.out.println("Figura no reconocida.");

        }

        sc.close();
    }
}