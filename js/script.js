$(function() {

        //Adicionando o efeito de scroll após se clicar em algum link de navegação do menu
        $(".nav-link").click(function(event) {
            event.preventDefault();
        $('html,body').animate( { scrollTop:$(this.hash).offset().top - 15 }, 1200);
        }); 


        $(window).scroll(function() {


            var scrollPortfolio = $("#portfolio").offset().top -60; //-60 para ter um ajuste ideal na página
            var scrollContato = $("#contato").offset().top -60; //idem item acima
            var scrollAtual = $(this).scrollTop();

            if (scrollAtual < scrollPortfolio) {
                $(".nav-item.active").removeClass("active");
                $(".nav-item.sobre").addClass("active");                               
            } else if ((scrollAtual >= scrollPortfolio) && (scrollAtual < scrollContato)) {
                $(".nav-item.active").removeClass("active");
                $(".nav-item.portfolio").addClass("active");                    
            } else if (scrollAtual >= scrollContato) {
                $(".nav-item.active").removeClass("active");
                $(".nav-item.contato").addClass("active");                    
            }

        });
     



		//Resolvendo o problema de o menu collapse permanecer após se clicar em algum local da página.
    	$(".navbar-toggler").blur(function() {
    		var screenSize = window.innerWidth;
    		if (screenSize < 768) {
    			$(".navbar-collapse").collapse("hide");
    		}
    	});

        // 


});