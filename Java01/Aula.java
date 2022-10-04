import java.util.Scanner;

public class Aula{
    public static void main(String[] args){
    
        Scanner scan = new Scanner(System.in);

        System.out.println("Digite o seu sexo: 1 para masculino, 2 para feminino.");
        
        int inputSexo = scan.nextInt();
        String sexo;

        switch (inputSexo){
            case 1 : { 
                sexo = "Masculino";
                break;
            }
            case 2 : { 
                sexo = "Feminino";
                break;
            }
            default : sexo = "Outros";
        }

        System.out.println("O sexo escolhido é: "+sexo);


        /* String sexo = (scan.nextInt() == 1 ? "Masculino" : "Feminino"); */
        /* 

        int inputSexo = scan.nextInt();

        String sexo;
        if (inputSexo == 1) {
            sexo = "Masculino";
        } else {
            sexo = "Feminino";
        } */

        

/*         Scanner scan = new Scanner(System.in);
        
        System.out.println("Digite seu nome:");
        String nome = scan.nextLine();

        System.out.println("Digite sua idade:");
        int idade = scan.nextInt();

        System.out.println("Digite a N1");
        double n1 = scan.nextDouble();
        System.out.println("Digite a N2");
        double n2 = scan.nextDouble();
        System.out.println("Digite a N3");
        double n3 = scan.nextDouble();

        double total = n1 + n2 + n3;
        double media = total / 3;

        if (media == 70){}

        if (media >= 70){
            System.out.println("Você está aprovado");
        } else {
            System.out.println("Você está de exame!");

            double exame = 100 - media;

            System.out.println("Você precisa tirar "+exame);
        } */
   }
}