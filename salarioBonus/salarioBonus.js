/**
 * @author Luiz
 * 
 **/

function calcularSalario(){
    let fixo, salario, bonus, comissao

    fixo = parseFloat(frmFinal.txtFixo.value.replace(",", "."))
    bonus = parseFloat(frmFinal.txtBonus.value.replace(",", "."))

    comissao = (bonus * 15) / 100
    salario = comissao + fixo

    frmFinal.txtPorcentagem.value = comissao.toFixed(2)
    frmFinal.txtStatus.value = salario.toFixed(2)
    //frmFinal.txtColaborador.value  
}