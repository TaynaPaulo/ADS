public class AlunoCadastrado {
   String Nome;
   String Pai;
   String Mae;
   String Nascimento;
   String CPF;
   String Endereco;
   String Cidade;
   String Telefone;
   String Curso;
   String Status;

   String DadosBasicos(){
      return "Nome: "+ Nome + "\n" + "Filiação: " + Pai + " - " + Mae + "\n" + "Data de Nascimento " + Nascimento+ "\n" + "Curso: " + Curso+ "\n" + "Status: " + Status;
     }

   Aluno tayna = new Aluno();
}
