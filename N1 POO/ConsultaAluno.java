public class ConsultaAluno {
    public static void main(String[] args){
        System.out.println("O aluno buscado é:");

        AlunoCadastrado tayna = new AlunoCadastrado();
        tayna.Nome = "Taynã Paulo Gomes Machado";
        tayna.Pai = "Adilson Magalhães Machado";
        tayna.Mae = "Dayane Silveira Gomes Camargo";
        tayna.Nascimento = "31/01/2004";
        tayna.CPF = "06825698109";
        tayna.Endereco = "Rua das cerejeiras, 1172, Jardim Botânico";
        tayna.Cidade = "Sinop";
        tayna.Curso = "Analise e Desensvolvimento de Sistemas";
        tayna.Status = "Cursando";

        System.out.println(tayna.DadosBasicos());
    }
}
    

