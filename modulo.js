var app = angular.module("app", []);

        app.controller("controlador", function ($scope) {

             $scope.registros = [
                { titulo: "O que é OVH?", desc: "OVH é o servidor utilizado para realizar envios. Faz parte de nossa infraestrutura", categoria: "ovh" },
                { titulo: "Proposta comercial MKT", desc: "https://dinamize.com.br/proposta/MKT-proposta-comercial.pdf", categoria: "comercial" },
                { titulo: "Proposta comercial PRO", desc: "https://dinamize.com.br/proposta/PRO-proposta-comercial.pdf", categoria: "comercial" },
                { titulo: "Exemplo de ticket OVH", desc: "http://suporte.dinamize.com/a/tickets/608911", categoria: "ovh" },
                { titulo: "Manual Teste A/B m2e clássico", desc: "http://www.dinamize.com/documentacao/teste-ab.pdf", categoria: "antigo" },
	            { titulo: "Como funcionam os gatilhos de automações", desc: "Automações são baseadas em ações futuras", categoria: "automaçao" },
	            { titulo: "Compilado de Cases", desc: "https://docs.google.com/document/d/1Hq8dUre8a7QSXVo0hckUhry61SMOg4ElFg2EPFLLag4/edit", categoria: "tutoriais" },
	            { titulo: "videos de tutoriais", desc: "http://suporte.dinamize.com/solution/articles/4000141450-v%C3%ADdeos-tutoriais", categoria: "tutoriais" },
	            { titulo: "Motivos para manter plataforma", desc: "Identificar seu público, Personalizar conteúdo, Enviar conteúdo de forma automática, enviar conteúdo para um público específico é melhor que enviar de tudo pra todos, Fazer menos com mais resultado.", categoria: "dicas" },
	            { titulo: "Como realizar envios", desc: "http://suporte.dinamize.com/a/tickets/612269", categoria: "envios" },
	            { titulo: "Origem não rastreada", desc: "Se o acesso a Landing Page não foi por um e-mail enviado por nós, ele fica como Acesso de origem não rastreada nos relatórios", categoria: "landing pages" },
	            { titulo: "Como separar valores múltiplos em importação", desc: "Deverá ser assim: Grupo1|Grupo 2|Grupo 3  Pode usar pipe, vírgula ou ponto e vírgula. Sem espaços.", categoria: "importaçao" },
	            { titulo: "Webinar para importação, envio e relatórios", desc: "https://register.gotowebinar.com/recording/6218763391153924354", categoria: "importação" },
	            { titulo: "Webinar para captação de contatos", desc: "https://register.gotowebinar.com/recording/7885414111149483777", categoria: "landing pages" },
	            { titulo: "Webinar para automações", desc: "https://register.gotowebinar.com/recording/4435991048162035715", categoria: "automações" },
	            { titulo: "Link para encodar URL de UTM", desc: "https://ga-dev-tools.appspot.com/campaign-url-builder/", categoria: "utm" },
	            { titulo: "Lead tracking alteração", desc: "Quem já tem formulários do tipo Site não precisa fazer nenhuma edição desde que ele tem o nosso script de captação - quem tem pop-ups nossas, precisa necessariamente clicar no editar formulário da pop-up e salvar (não precisa editar nada) ", categoria: "lead tracking" },
	            { titulo: "Envio de teste", desc: "O envio de teste pode ser entregue como Spam ou ser bloqueado pelo filtro anti-spam dos provedores por possuir a palavra teste com letras maiúsculas inseridas no assunto, além disso, este envio é disparado de uma infraestrutura diferente, utilizada somente para esse tipo de disparo.", categoria: "teste" },
	            { titulo: "Painel de acesso mail2easy clássico", desc: "http://painel.mail2easy.com.br", categoria: "antigo" },
	            { titulo: "Painel de acesso mail2easyPRO", desc: "https://mail2easypro.com", categoria: "pro" },
	            { titulo: "Sara", desc: "Female", categoria: "nicolas" },
	            { titulo: "Sara", desc: "Female", categoria: "nicolas" },
	            { titulo: "Sara", desc: "http://suporte.dinamize.com/a/tickets/617917", categoria: "importação" },             
            ];
        });
