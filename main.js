tmp = "";
tmptotal = "0";
pre_op = "";

function Init(){
  document.form1.info.value = "0";
  tmp = "";
  tmptotal = "0";
  pre_op = "";
}
function InputNum(num){
  if(pre_op == "=")Init();
  if(document.form1.info.value == "0")tmp = num;
  else tmp += num;
  document.form1.info.value = tmp;
}
function Calc(op){
  if(pre_op == "")tmptotal = tmp;
  else if(pre_op == "=")tmptotal = tmptotal;
  else tmptotal = eval(tmptotal +pre_op + tmp);
  document.form1.info.value = tmptotal;
  tmp = "";
  pre_op = op;
}