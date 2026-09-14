var bloco = window.document.getElementById("bloco")
var versos = window.document.getElementById("versiculos")
var bloco_atual

window.addEventListener("load",(Event) => {
    bloco_atual = 0
    bloco_selecionado();
    console.log("teste")
})

function bloco_selecionado(){
    switch(bloco_atual){
        case 0:
            bloco.innerHTML = "saldações e beneficios das provações \n1-4"
            versos.innerHTML = "¹ Tiago, servo de Deus e do Senhor Jesus Cristo, às doze tribos que se encontram na Dispersão, saudações.² Meus irmãos, tende por motivo de toda alegria o passardes por várias provações,³ sabendo que a provação da vossa fé, uma vez confirmada, produz perseverança.⁴ Ora, a perseverança deve ter ação completa, para que sejais perfeitos e íntegros, em nada deficientes."
            break;
        case 1:
            bloco.innerHTML = "como obter sabedoria\n5-8"
            versos.innerHTML = "⁵ Se, porém, algum de vós necessita de sabedoria, peça-a a Deus, que a todos dá liberalmente e nada lhes impropera; e ser-lhe-á concedida.⁶ Peça-a, porém, com fé, em nada duvidando; pois o que duvida é semelhante à onda do mar, impelida e agitada pelo vento.⁷ Não suponha esse homem que alcançará do Senhor alguma coisa;⁸ homem de ânimo dobre, inconstante em todos os seus caminhos."
            break;
        case 2:
            bloco.innerHTML = "circustancias transitorias\n9-11"
            versos.innerHTML = "⁹ O irmão, porém, de condição humilde glorie-se na sua dignidade,¹⁰ e o rico, na sua insignificância, porque ele passará como a flor da erva.¹¹ Porque o sol se levanta com seu ardente calor, e a erva seca, e a sua flor cai, e desaparece a formosura do seu aspecto; assim também se murchará o rico em seus caminhos."
            break;
        case 3:
            bloco.innerHTML = "origem do pecado\n12-15"
            versos.innerHTML = "¹² Bem-aventurado o homem que suporta, com perseverança, a provação; porque, depois de ter sido aprovado, receberá a coroa da vida, a qual o Senhor prometeu aos que o amam.¹³ Ninguém, ao ser tentado, diga: Sou tentado por Deus; porque Deus não pode ser tentado pelo mal e ele mesmo a ninguém tenta.¹⁴ Ao contrário, cada um é tentado pela sua própria cobiça, quando esta o atrai e seduz.¹⁵ Então, a cobiça, depois de haver concebido, dá à luz o pecado; e o pecado, uma vez consumado, gera a morte."
            break;
        case 4:
            bloco.innerHTML = "origem do bem\n16-18"
            versos.innerHTML = "¹⁶ Não vos enganeis, meus amados irmãos.¹⁷ Toda boa dádiva e todo dom perfeito são lá do alto, descendo do Pai das luzes, em quem não pode existir variação ou sombra de mudança.¹⁸ Pois, segundo o seu querer, ele nos gerou pela palavra da verdade, para que fôssemos como que primícias das suas criaturas."
            break;
        case 5:
            bloco.innerHTML = "como lidar com a ira e o mal\n19-21"
            versos.innerHTML = "¹⁹ Sabeis estas coisas, meus amados irmãos. Todo homem, pois, seja pronto para ouvir, tardio para falar, tardio para se irar.²⁰ Porque a ira do homem não produz a justiça de Deus.²¹ Portanto, despojando-vos de toda impureza e acúmulo de maldade, acolhei, com mansidão, a palavra em vós implantada, a qual é poderosa para salvar a vossa alma."
            break;
        case 6:
            bloco.innerHTML = "seja praticante\n22-25"
            versos.innerHTML = "²² Tornai-vos, pois, praticantes da palavra e não somente ouvintes, enganando-vos a vós mesmos.²³ Porque, se alguém é ouvinte da palavra e não praticante, assemelha-se ao homem que contempla, num espelho, o seu rosto natural;²⁴ pois a si mesmo se contempla, e se retira, e para logo se esquece de como era a sua aparência.²⁵ Mas aquele que considera, atentamente, na lei perfeita, lei da liberdade, e nela persevera, não sendo ouvinte negligente, mas operoso praticante, esse será bem-aventurado no que realizar."
            break;
        case 7:
            bloco.innerHTML = "a verdadeira religiao\n25-27"
            versos.innerHTML = "²⁶ Se alguém supõe ser religioso, deixando de refrear a língua, antes, enganando o próprio coração, a sua religião é vã.²⁷ A religião pura e sem mácula, para com o nosso Deus e Pai, é esta: visitar os órfãos e as viúvas nas suas tribulações e a si mesmo guardar-se incontaminado do mundo."
            break;
    }
}
function anterior(){
    bloco_atual -= 1;
    if(bloco_atual < 0){bloco_atual = 7;}
    bloco_selecionado();
    console.log(bloco_atual);
}

function proximo(){
    bloco_atual += 1;
    if(bloco_atual > 7){bloco_atual  = 0;}
    
    bloco_selecionado();
    console.log(bloco_atual);
}