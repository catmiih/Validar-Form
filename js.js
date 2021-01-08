// Método de verificação

function validar() {
            var nome = form1.nome.value;
            var email = form1.email.value;
			var endereco = form1.endereco.value;
            var senha = form1.senha.value;
			
			if( nome == "") {
				alert('Preencha o campo com seu nome');
				form1.nome.focus;
				return false;
			}else if( email == "") {
				alert('Preencha o campo com seu email');
				form1.email.focus;
				return false;
			}else if( endereco == "") {
				alert('Preencha o campo com seu endereço');
				form1.endereco.focus;
				return false;
			}else if( senha == "") {
				alert('Preencha o campo com sua senha');
				form1.senha.focus;
				return false;
			}else {
				alert("Tudo certo! Obrigado pelo cadastro!");
			}			
		}