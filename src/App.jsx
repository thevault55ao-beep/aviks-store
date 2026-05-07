// @ts-nocheckimport { useState, useEffect, useContext, createContext } from ‘react’;

const AppContext = createContext(null);

const T = {
PT: {
nav: { home:“Início”, catalog:“Catálogo”, about:“Sobre”, contact:“Contato”, cart:“Carrinho”, login:“Entrar”, logout:“Sair”, admin:“Admin” },
hero: { tag:“Coleção Premium 2025”, title:“AVIK’S”, sub1:“Roupas Infantis Premium”, sub2:“Moda elegante e sofisticada para crianças de 1 a 10 anos”, cta:“Explorar Coleção”, cta2:“Sobre” },
stats: { col:“Nossa Coleção”, age:“Faixa Etária”, qual:“Qualidade” },
features: { q:“Premium Quality”, qd:“Tecidos e acabamentos cuidadosamente selecionados”, d:“Elegant Design”, dd:“Estilos sofisticados para crianças modernas”, s:“Fast Delivery”, sd:“Entrega rápida para toda Angola” },
cta2: { title:“Pronto para Explorar?”, sub:“Navegue pela nossa coleção completa de roupas infantis premium”, btn:“Explorar Coleção” },
catalog: { title:“Nossa Coleção”, filterGender:“Filtrar por Gênero”, filterAge:“Filtrar por Idade”, all:“Todos”, boys:“Meninos”, girls:“Meninas”, allAges:“Todas as Idades”, found:“produtos encontrados” },
product: { size:“Tamanho”, desc:“Descrição”, add:“Adicionar ao Carrinho”, back:“Voltar” },
cart: { title:“Carrinho de Compras”, empty:“Seu carrinho está vazio”, subtotal:“Subtotal”, total:“Total”, checkout:“Finalizar Compra”, continue:“Continuar Comprando”, promo:“Código Promocional”, apply:“Aplicar”, discount:“Desconto aplicado” },
checkout: { title:“Finalizar Compra”, summary:“Resumo”, payment:“Pagamento”, name:“Nome Completo”, email:“Email”, phone:“Telefone”, address:“Endereço”, city:“Cidade”, cardNum:“Número do Cartão”, expiry:“Validade”, cvv:“CVV”, confirm:“Confirmar Pedido”, card:“Cartão de Crédito”, multicaixa:“Multicaixa Express” },
confirm: { title:“Pedido Confirmado!”, msg:“Obrigado pela compra. Receberá um email em breve.”, orderNum:“Número do Pedido”, backHome:“Voltar ao Início” },
about: { title:“Sobre a Avik’s”, story:“A Avik’s nasceu da ideia de representar a infância como um universo mágico e cheio de possibilidades. A nossa missão é vestir crianças que carregam dentro de si um pequeno universo cheio de luz.”, mission:“Nossa Missão”, missionText:“Oferecer moda infantil premium que une elegância, conforto e durabilidade, celebrando a imaginação de cada criança de 1 a 10 anos.”, values:“Nossos Valores”, v:[“Qualidade Premium”,“Design Único”,“Conforto Total”,“Entrega Rápida”] },
contact: { title:“Contato”, nameLbl:“Nome”, msgLbl:“Mensagem”, send:“Enviar Mensagem”, sent:“Mensagem enviada com sucesso!”, whatsapp:“WhatsApp”, emailLbl:“Email”, location:“Localização”, hours:“Horário” },
delivery: { title:“Informações de Entrega”, standard:“Entrega Padrão”, express:“Entrega Express”, free:“Entrega Grátis”, days3:“3-5 dias úteis”, days1:“24-48 horas”, freeNote:“Pedidos acima de 50.000 AOA” },
auth: { loginTitle:“Entrar”, signupTitle:“Criar Conta”, email:“Email”, password:“Senha”, name:“Nome Completo”, login:“Entrar”, signup:“Criar Conta”, noAccount:“Não tem conta?”, hasAccount:“Já tem conta?”, adminCode:“Código Admin (opcional)” },
admin: { title:“Painel Admin”, products:“Produtos”, orders:“Pedidos”, inventory:“Inventário”, add:“Adicionar Produto”, edit:“Editar”, del:“Excluir”, namePT:“Nome (PT)”, nameEN:“Nome (EN)”, price:“Preço (AOA)”, gender:“Gênero”, age:“Faixa Etária”, image:“URL da Imagem”, descPT:“Descrição (PT)”, descEN:“Descrição (EN)”, save:“Salvar”, cancel:“Cancelar” },
footer: { desc:“Moda infantil premium para crianças de 1 a 10 anos.”, rights:“Todos os direitos reservados.”, subscribe:“Inscrever”, placeholder:“Seu email” },
},
EN: {
nav: { home:“Home”, catalog:“Catalog”, about:“About”, contact:“Contact”, cart:“Cart”, login:“Login”, logout:“Logout”, admin:“Admin” },
hero: { tag:“Premium Collection 2025”, title:“AVIK’S”, sub1:“Premium Children’s Clothing”, sub2:“Elegant and sophisticated fashion for children ages 1 to 10”, cta:“Explore Collection”, cta2:“About” },
stats: { col:“Our Collection”, age:“Age Range”, qual:“Quality” },
features: { q:“Premium Quality”, qd:“Carefully selected fabrics and craftsmanship”, d:“Elegant Design”, dd:“Sophisticated styles for modern children”, s:“Fast Delivery”, sd:“Quick shipping across Angola” },
cta2: { title:“Ready to Explore?”, sub:“Browse our complete collection of premium children’s clothing”, btn:“Explore Collection” },
catalog: { title:“Our Collection”, filterGender:“Filter by Gender”, filterAge:“Filter by Age”, all:“All”, boys:“Boys”, girls:“Girls”, allAges:“All Ages”, found:“products found” },
product: { size:“Size”, desc:“Description”, add:“Add to Cart”, back:“Back” },
cart: { title:“Shopping Cart”, empty:“Your cart is empty”, subtotal:“Subtotal”, total:“Total”, checkout:“Checkout”, continue:“Continue Shopping”, promo:“Promo Code”, apply:“Apply”, discount:“Discount applied” },
checkout: { title:“Checkout”, summary:“Summary”, payment:“Payment”, name:“Full Name”, email:“Email”, phone:“Phone”, address:“Address”, city:“City”, cardNum:“Card Number”, expiry:“Expiry”, cvv:“CVV”, confirm:“Confirm Order”, card:“Credit Card”, multicaixa:“Multicaixa Express” },
confirm: { title:“Order Confirmed!”, msg:“Thank you for your purchase. A confirmation email will be sent shortly.”, orderNum:“Order Number”, backHome:“Back to Home” },
about: { title:“About Avik’s”, story:“Avik’s was born from the idea of representing childhood as a magical universe full of possibilities. Our mission is to dress children who carry within them a little universe full of light.”, mission:“Our Mission”, missionText:“Offer premium children’s fashion that unites elegance, comfort and durability, celebrating the imagination of every child from 1 to 10 years old.”, values:“Our Values”, v:[“Premium Quality”,“Unique Design”,“Total Comfort”,“Fast Delivery”] },
contact: { title:“Contact”, nameLbl:“Name”, msgLbl:“Message”, send:“Send Message”, sent:“Message sent successfully!”, whatsapp:“WhatsApp”, emailLbl:“Email”, location:“Location”, hours:“Hours” },
delivery: { title:“Delivery Information”, standard:“Standard Delivery”, express:“Express Delivery”, free:“Free Delivery”, days3:“3-5 business days”, days1:“24-48 hours”, freeNote:“Orders over 50,000 AOA” },
auth: { loginTitle:“Sign In”, signupTitle:“Create Account”, email:“Email”, password:“Password”, name:“Full Name”, login:“Sign In”, signup:“Create Account”, noAccount:“Don’t have an account?”, hasAccount:“Already have an account?”, adminCode:“Admin Code (optional)” },
admin: { title:“Admin Panel”, products:“Products”, orders:“Orders”, inventory:“Inventory”, add:“Add Product”, edit:“Edit”, del:“Delete”, namePT:“Name (PT)”, nameEN:“Name (EN)”, price:“Price (AOA)”, gender:“Gender”, age:“Age Range”, image:“Image URL”, descPT:“Description (PT)”, descEN:“Description (EN)”, save:“Save”, cancel:“Cancel” },
footer: { desc:“Premium children’s fashion for ages 1 to 10.”, rights:“All rights reserved.”, subscribe:“Subscribe”, placeholder:“Your email” },
},
};

const PRODUCTS = [
{ id:1,  namePT:“Conjunto Branco Linho”,       nameEN:“White Linen Set”,         price:8500,  gender:“boys”,  age:“1-3”, image:“https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?w=600&q=80”, descPT:“Conjunto de camisa e shorts em linho branco, elegante e confortável.”, descEN:“White linen shirt and shorts set, elegant and comfortable.”, sizes:[“1 ano”,“2 anos”,“3 anos”,“4 anos”] },
{ id:2,  namePT:“Conjunto Laranja Linho”,       nameEN:“Orange Linen Set”,        price:8500,  gender:“boys”,  age:“1-3”, image:“https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&q=80”, descPT:“Conjunto estiloso em linho, perfeito para o dia a dia.”, descEN:“Stylish linen set, perfect for everyday.”, sizes:[“1 ano”,“2 anos”,“3 anos”] },
{ id:3,  namePT:“Conjunto Azul Marinho”,        nameEN:“Navy Blue Set”,           price:8500,  gender:“boys”,  age:“4-6”, image:“https://images.unsplash.com/photo-1522771930-78848d9293e8?w=600&q=80”, descPT:“Conjunto clássico azul marinho com toque sofisticado.”, descEN:“Classic navy blue set with a sophisticated touch.”, sizes:[“3 anos”,“4 anos”,“5 anos”,“6 anos”] },
{ id:4,  namePT:“Conjunto Floral Rosa”,         nameEN:“Pink Floral Set”,         price:9200,  gender:“girls”, age:“1-3”, image:“https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&q=80”, descPT:“Delicado conjunto com estampa floral e laços.”, descEN:“Delicate set with floral print and bows.”, sizes:[“1 ano”,“2 anos”,“3 anos”] },
{ id:5,  namePT:“Conjunto Verde Poa”,           nameEN:“Green Polka Dot Set”,     price:7800,  gender:“girls”, age:“1-3”, image:“https://images.unsplash.com/photo-1503944168849-8bf86875bbd8?w=600&q=80”, descPT:“Blusa verde com calca de poa, charmoso e divertido.”, descEN:“Green blouse with polka dot pants, charming and fun.”, sizes:[“1 ano”,“2 anos”,“3 anos”] },
{ id:6,  namePT:“Regata Waffle Verde”,          nameEN:“Green Waffle Tank”,       price:7200,  gender:“boys”,  age:“4-6”, image:“https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=600&q=80”, descPT:“Regata textura waffle em verde, moderno e fresco.”, descEN:“Green waffle texture tank, modern and fresh.”, sizes:[“3 anos”,“4 anos”,“5 anos”,“6 anos”] },
{ id:7,  namePT:“Conjunto Waffle Colorido”,     nameEN:“Colorful Waffle Set”,     price:7200,  gender:“boys”,  age:“4-6”, image:“https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=600&q=80”, descPT:“Conjunto waffle em cinza, laranja e azul.”, descEN:“Waffle set in gray, orange and blue.”, sizes:[“2 anos”,“3 anos”,“4 anos”,“5 anos”] },
{ id:8,  namePT:“Conjunto Cinza com Renda”,     nameEN:“Gray Lace Set”,           price:8900,  gender:“girls”, age:“4-6”, image:“https://images.unsplash.com/photo-1503944168849-8bf86875bbd8?w=600&q=80”, descPT:“Delicado conjunto cinza com detalhes em renda.”, descEN:“Delicate gray set with lace details.”, sizes:[“3 anos”,“4 anos”,“5 anos”,“6 anos”] },
{ id:9,  namePT:“Vestido Creme Bordado”,        nameEN:“Cream Embroidered Dress”, price:12500, gender:“girls”, age:“4-6”, image:“https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=600&q=80”, descPT:“Vestido creme com bordado floral e mangas bufantes.”, descEN:“Cream dress with floral embroidery and puff sleeves.”, sizes:[“3 anos”,“4 anos”,“5 anos”,“6 anos”,“7 anos”] },
{ id:10, namePT:“Conjunto Marrom Poa”,          nameEN:“Brown Polka Dot Set”,     price:8200,  gender:“girls”, age:“1-3”, image:“https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&q=80”, descPT:“Blusa com ruffle e calca de poa, conjunto de verao.”, descEN:“Ruffle blouse with polka dot pants, summer set.”, sizes:[“1 ano”,“2 anos”,“3 anos”] },
{ id:11, namePT:“Conjunto Linho Muslin Branco”, nameEN:“White Muslin Set”,        price:9000,  gender:“boys”,  age:“1-3”, image:“https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?w=600&q=80”, descPT:“Conjunto texturado em muslin branco, levissimo.”, descEN:“White muslin textured set, ultra-light.”, sizes:[“2 anos”,“3 anos”,“4 anos”] },
{ id:12, namePT:“Conjunto Linho 3 Cores”,       nameEN:“Linen Set 3 Colors”,      price:8800,  gender:“boys”,  age:“1-3”, image:“https://images.unsplash.com/photo-1522771930-78848d9293e8?w=600&q=80”, descPT:“Conjunto linho em verde musgo, branco e azul bebe.”, descEN:“Linen set in moss green, white and baby blue.”, sizes:[“1 ano”,“2 anos”,“3 anos”] },
{ id:13, namePT:“Conjunto Jeans Floral”,        nameEN:“Floral Denim Set”,        price:11500, gender:“girls”, age:“7-10”,image:“https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=600&q=80”, descPT:“Conjunto jeans com estampa floral amarela.”, descEN:“Denim set with yellow floral print.”, sizes:[“4 anos”,“5 anos”,“6 anos”,“7 anos”,“8 anos”] },
{ id:14, namePT:“Vestido Branco Girassol”,      nameEN:“White Sunflower Dress”,   price:13500, gender:“girls”, age:“7-10”,image:“https://images.unsplash.com/photo-1503944168849-8bf86875bbd8?w=600&q=80”, descPT:“Vestido branco com girassois bordados, encantador.”, descEN:“White dress with embroidered sunflowers, enchanting.”, sizes:[“3 anos”,“4 anos”,“5 anos”,“6 anos”,“7 anos”,“8 anos”,“9 anos”] },
{ id:15, namePT:“Conjunto Jeans e Blusa”,       nameEN:“Denim and White Set”,     price:10800, gender:“girls”, age:“7-10”,image:“https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&q=80”, descPT:“Blusa branca com mangas bufantes e jardineira jeans.”, descEN:“White puff sleeve blouse and denim overalls.”, sizes:[“4 anos”,“5 anos”,“6 anos”,“7 anos”,“8 anos”,“9 anos”] },
];

const PROMO = { AVIK10:0.10, STAR20:0.20, KIDS15:0.15 };
const fmt = function(n) { return n.toLocaleString(“pt-AO”) + “ AOA”; };

const CSS = `
*,*::before,*::after{margin:0;padding:0;-webkit-box-sizing:border-box;box-sizing:border-box;}
:root{
–y:#F0C127;–yh:#DAAA1A;–yl:#FFFBEE;
–dk:#0F0F0F;–dk2:#1A1A1A;
–tx:#1A1A1A;–mt:#666666;–mt2:#999999;
–bd:#E5E5E5;–bd2:#F0F0F0;
–wh:#FFFFFF;–bg:#FAFAFA;
}
body{font-family:‘Montserrat’,Helvetica,Arial,sans-serif;background:var(–wh);color:var(–tx);-webkit-font-smoothing:antialiased;}
img{max-width:100%;display:block;}

/* NAV */
.nav{position:fixed;top:0;left:0;right:0;z-index:900;height:64px;background:var(–wh);border-bottom:1px solid var(–bd);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:0 2rem;-webkit-transition:box-shadow .25s;transition:box-shadow .25s;}
.nav.sh{-webkit-box-shadow:0 2px 16px rgba(0,0,0,.08);box-shadow:0 2px 16px rgba(0,0,0,.08);}
.nav-logo{font-size:1.2rem;font-weight:900;color:var(–y);cursor:pointer;letter-spacing:1.5px;-webkit-user-select:none;user-select:none;}
.nav-links{display:-webkit-box;display:-webkit-flex;display:flex;list-style:none;margin:0;padding:0;}
.nav-links li + li{margin-left:2px;}
.nav-links a{padding:.45rem .85rem;font-size:.82rem;font-weight:600;color:var(–tx);cursor:pointer;border-radius:6px;-webkit-transition:color .15s;transition:color .15s;display:block;}
.nav-links a:hover,.nav-links a.on{color:var(–y);}
.nav-r{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;}
.nav-r > * + *{margin-left:.5rem;}
.lang-btn{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border:1.5px solid var(–bd);border-radius:50px;padding:.32rem .85rem;font-size:.75rem;font-weight:700;cursor:pointer;background:var(–wh);color:var(–tx);font-family:‘Montserrat’,Helvetica,Arial,sans-serif;letter-spacing:.5px;-webkit-transition:border-color .15s;transition:border-color .15s;}
.lang-btn > * + *{margin-left:4px;}
.lang-btn:hover{border-color:var(–y);}
.lang-a{color:var(–y);}
.lang-x{color:var(–mt2);}
.cart-btn{position:relative;width:36px;height:36px;border-radius:7px;border:1.5px solid var(–bd);background:var(–wh);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;cursor:pointer;-webkit-transition:all .15s;transition:all .15s;}
.cart-btn:hover{border-color:var(–y);background:var(–yl);}
.cart-badge{position:absolute;top:-5px;right:-5px;width:16px;height:16px;background:var(–y);border-radius:50%;font-size:.6rem;font-weight:800;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:var(–dk);}
.login-btn{background:var(–y);color:var(–dk);border:none;padding:.45rem 1.2rem;border-radius:6px;font-size:.8rem;font-weight:700;cursor:pointer;font-family:‘Montserrat’,Helvetica,Arial,sans-serif;-webkit-transition:background .15s;transition:background .15s;}
.login-btn:hover{background:var(–yh);}

/* PAGE */
.pg{padding-top:64px;min-height:100vh;-webkit-animation:fu .3s ease;animation:fu .3s ease;}
@-webkit-keyframes fu{from{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px);}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0);}}
@keyframes fu{from{opacity:0;transform:translateY(10px);}to{opacity:1;transform:translateY(0);}}
.ctr{max-width:1140px;margin:0 auto;padding:0 2rem;}
.sec{padding:5rem 2rem;}

/* BUTTONS */
.btn-y{background:var(–y);color:var(–dk);border:none;padding:.8rem 1.8rem;border-radius:6px;font-size:.85rem;font-weight:700;cursor:pointer;font-family:‘Montserrat’,Helvetica,Arial,sans-serif;-webkit-transition:all .18s;transition:all .18s;}
.btn-y:hover{background:var(–yh);}
.btn-y.full{width:100%;}
.btn-o{background:transparent;color:var(–dk);border:1.5px solid var(–dk);padding:.8rem 1.8rem;border-radius:6px;font-size:.85rem;font-weight:700;cursor:pointer;font-family:‘Montserrat’,Helvetica,Arial,sans-serif;-webkit-transition:all .18s;transition:all .18s;}
.btn-o:hover{background:var(–dk);color:var(–wh);}
.btn-dk{background:var(–dk);color:var(–wh);border:none;padding:.85rem 2rem;border-radius:6px;font-size:.88rem;font-weight:700;cursor:pointer;font-family:‘Montserrat’,Helvetica,Arial,sans-serif;-webkit-transition:background .18s;transition:background .18s;}
.btn-dk:hover{background:var(–dk2);}
.btn-back{background:none;border:none;color:var(–mt);font-size:.8rem;font-weight:600;cursor:pointer;margin-bottom:1.5rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-family:‘Montserrat’,Helvetica,Arial,sans-serif;padding:0;}
.btn-back:hover{color:var(–dk);}
.btn-ghost{background:none;border:1.5px solid var(–bd);padding:.65rem 1rem;border-radius:6px;cursor:pointer;font-size:.82rem;font-weight:600;font-family:‘Montserrat’,Helvetica,Arial,sans-serif;color:var(–mt);width:100%;-webkit-transition:all .15s;transition:all .15s;}
.btn-ghost:hover{border-color:var(–dk);color:var(–dk);}

/* SECTION HEADER */
.sh-lbl{font-size:.68rem;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;color:var(–y);display:block;margin-bottom:.5rem;}
.sh-title{font-size:2rem;font-weight:800;color:var(–dk);margin-bottom:.4rem;letter-spacing:-.4px;}
.sh-sub{font-size:.88rem;color:var(–mt);font-weight:400;}
.sec-hd{text-align:center;margin-bottom:2.5rem;}

/* HERO */
.hero{min-height:calc(100vh - 64px);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:var(–wh);overflow:hidden;position:relative;}
.hero-in{max-width:1140px;margin:0 auto;padding:4rem 2rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%;}
.hero-left{width:48%;}
.hero-right{width:48%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;}
.hero-tag{display:inline-block;font-size:.68rem;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(–y);border:1.5px solid var(–y);border-radius:50px;padding:.28rem .85rem;margin-bottom:1rem;}
.hero-title{font-size:5rem;font-weight:900;color:var(–dk);line-height:.95;letter-spacing:-2px;margin-bottom:.4rem;}
.hero-sub1{font-size:1rem;font-weight:700;color:var(–y);margin-bottom:.7rem;letter-spacing:.3px;}
.hero-desc{font-size:.9rem;color:var(–mt);line-height:1.75;max-width:400px;margin-bottom:2rem;font-weight:400;}
.hero-btns{display:-webkit-box;display:-webkit-flex;display:flex;margin-bottom:2.5rem;}
.hero-btns > * + *{margin-left:.8rem;}
.hero-stats{display:-webkit-box;display:-webkit-flex;display:flex;padding-top:1.5rem;border-top:1px solid var(–bd);}
.hero-stats > * + *{margin-left:2rem;}
.st-num{font-size:1.4rem;font-weight:900;color:var(–dk);display:block;letter-spacing:-.5px;}
.st-lbl{font-size:.7rem;color:var(–mt);font-weight:500;}
.hero-img-box{width:420px;height:460px;border-radius:16px;overflow:hidden;background:linear-gradient(135deg,#EEF6FF,#FFF9E0);position:relative;border:1px solid var(–bd);}
.hero-img-box img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;display:block;}
.hero-img-pill{position:absolute;bottom:18px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);background:var(–y);color:var(–dk);font-size:.72rem;font-weight:700;padding:.35rem .95rem;border-radius:50px;white-space:nowrap;letter-spacing:.5px;}

/* FEATURES STRIP */
.feat-strip{background:var(–bg);border-top:1px solid var(–bd);border-bottom:1px solid var(–bd);}
.feat-grid{max-width:1140px;margin:0 auto;padding:2.5rem 2rem;display:-webkit-box;display:-webkit-flex;display:flex;}
.feat-grid > * + *{margin-left:1.5rem;}
.feat-card{background:var(–wh);border:1px solid var(–bd);border-radius:10px;padding:1.6rem;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-transition:box-shadow .2s;transition:box-shadow .2s;}
.feat-card:hover{-webkit-box-shadow:0 4px 20px rgba(0,0,0,.07);box-shadow:0 4px 20px rgba(0,0,0,.07);}
.feat-icon{width:38px;height:38px;background:var(–yl);border-radius:8px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin-bottom:.9rem;}
.feat-icon svg{width:18px;height:18px;stroke:var(–y);fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;}
.feat-title{font-size:.88rem;font-weight:700;margin-bottom:.3rem;}
.feat-desc{font-size:.78rem;color:var(–mt);line-height:1.6;font-weight:400;}

/* CTA BAND */
.cta-band{background:var(–y);padding:4rem 2rem;text-align:center;}
.cta-band h2{font-size:2.2rem;font-weight:900;color:var(–dk);margin-bottom:.4rem;letter-spacing:-.4px;}
.cta-band p{font-size:.88rem;color:rgba(0,0,0,.5);margin-bottom:1.8rem;font-weight:400;}

/* PRODUCT GRID */
.prod-grid{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;margin:-0.65rem;}
.prod-card{background:var(–wh);border:1px solid var(–bd);border-radius:10px;overflow:hidden;cursor:pointer;-webkit-transition:all .2s;transition:all .2s;width:calc(25% - 1.3rem);margin:.65rem;}
.prod-card:hover{-webkit-box-shadow:0 8px 28px rgba(0,0,0,.1);box-shadow:0 8px 28px rgba(0,0,0,.1);-webkit-transform:translateY(-3px);transform:translateY(-3px);border-color:var(–y);}
.prod-img{width:100%;height:230px;-o-object-fit:cover;object-fit:cover;background:var(–bg);display:block;}
.prod-body{padding:.9rem 1rem 1.1rem;}
.prod-badge{display:inline-block;font-size:.65rem;font-weight:700;text-transform:uppercase;letter-spacing:.8px;padding:.18rem .55rem;border-radius:4px;margin-bottom:.45rem;}
.b-boys{background:rgba(25,100,200,.08);color:#1564C8;}
.b-girls{background:rgba(200,50,110,.08);color:#C8326E;}
.prod-name{font-size:.88rem;font-weight:700;color:var(–dk);margin-bottom:.25rem;}
.prod-age{font-size:.72rem;color:var(–mt2);margin-bottom:.7rem;font-weight:500;}
.prod-ft{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;}
.prod-price{font-size:.95rem;font-weight:800;color:var(–dk);letter-spacing:-.2px;}
.add-btn{background:var(–y);color:var(–dk);border:none;width:28px;height:28px;border-radius:5px;font-size:1rem;font-weight:700;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-transition:background .15s;transition:background .15s;-webkit-flex-shrink:0;flex-shrink:0;}
.add-btn:hover{background:var(–yh);}

/* CATALOG */
.cat-lay{display:-webkit-box;display:-webkit-flex;display:flex;max-width:1140px;margin:0 auto;padding:3rem 2rem 5rem;}
.filt-panel{width:200px;-webkit-flex-shrink:0;flex-shrink:0;margin-right:2.5rem;}
.cat-main{-webkit-box-flex:1;-webkit-flex:1;flex:1;min-width:0;}
.filt-grp{margin-bottom:2rem;}
.filt-grp-ttl{font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:var(–dk);margin-bottom:.9rem;}
.filt-opt{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-bottom:.55rem;cursor:pointer;}
.filt-opt input[type=“radio”]{-webkit-appearance:auto;appearance:auto;accent-color:var(–y);width:14px;height:14px;margin-right:.55rem;cursor:pointer;}
.filt-opt label{font-size:.82rem;font-weight:500;cursor:pointer;}
.cat-hd{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin-bottom:1.8rem;}
.cat-ttl{font-size:1.5rem;font-weight:800;color:var(–dk);letter-spacing:-.4px;}
.cat-cnt{font-size:.78rem;color:var(–mt);font-weight:500;}

/* PRODUCT DETAIL */
.det-pg{max-width:960px;margin:0 auto;padding:3rem 2rem 5rem;}
.det-grid{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;}
.det-img-wrap{width:47%;}
.det-info-wrap{width:47%;}
.det-img{border-radius:14px;overflow:hidden;border:1px solid var(–bd);}
.det-img img{width:100%;display:block;}
.det-tag{font-size:.68rem;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(–y);display:block;margin-bottom:.65rem;}
.det-title{font-size:1.7rem;font-weight:800;color:var(–dk);margin-bottom:.4rem;letter-spacing:-.4px;line-height:1.2;}
.det-price{font-size:1.5rem;font-weight:900;color:var(–dk);margin-bottom:1.4rem;letter-spacing:-.4px;}
.det-lbl{font-size:.68rem;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:var(–mt);margin-bottom:.45rem;}
.sz-row{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;margin-bottom:1.4rem;}
.sz-row > *{margin-right:.45rem;margin-bottom:.45rem;}
.sz-chip{padding:.38rem .85rem;border:1.5px solid var(–bd);border-radius:5px;font-size:.78rem;font-weight:600;cursor:pointer;background:var(–wh);font-family:‘Montserrat’,Helvetica,Arial,sans-serif;-webkit-transition:all .15s;transition:all .15s;}
.sz-chip:hover,.sz-chip.on{border-color:var(–y);background:var(–yl);}
.det-desc{font-size:.85rem;color:var(–mt);line-height:1.8;margin-bottom:1.8rem;font-weight:400;}

/* CART */
.cart-pg{max-width:960px;margin:0 auto;padding:3rem 2rem 5rem;}
.cart-grid{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;}
.cart-list-col{-webkit-box-flex:1;-webkit-flex:1;flex:1;margin-right:2rem;}
.cart-sum-col{width:320px;-webkit-flex-shrink:0;flex-shrink:0;}
.cart-list{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-flex-direction:column;flex-direction:column;}
.cart-list > * + *{margin-top:.9rem;}
.c-item{background:var(–wh);border:1px solid var(–bd);border-radius:10px;padding:.9rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;}
.c-item > * + *{margin-left:.9rem;}
.c-img{width:70px;height:70px;border-radius:8px;-o-object-fit:cover;object-fit:cover;background:var(–bg);-webkit-flex-shrink:0;flex-shrink:0;}
.c-inf{-webkit-box-flex:1;-webkit-flex:1;flex:1;min-width:0;}
.c-name{font-size:.85rem;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.c-meta{font-size:.7rem;color:var(–mt);margin-top:.15rem;}
.qty-r{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-top:.45rem;}
.qty-r > * + *{margin-left:7px;}
.qty-b{width:22px;height:22px;border-radius:4px;border:1.5px solid var(–bd);background:var(–wh);cursor:pointer;font-size:.85rem;font-weight:700;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-transition:all .15s;transition:all .15s;}
.qty-b:hover{border-color:var(–y);background:var(–yl);}
.qty-n{font-size:.82rem;font-weight:700;min-width:18px;text-align:center;}
.c-price-col{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end;}
.c-price-col > * + *{margin-top:.4rem;}
.c-price{font-size:.9rem;font-weight:800;white-space:nowrap;}
.rm-btn{background:none;border:none;color:#ccc;cursor:pointer;font-size:.95rem;padding:4px;-webkit-transition:color .15s;transition:color .15s;}
.rm-btn:hover{color:#d32f2f;}
.sum-box{background:var(–wh);border:1px solid var(–bd);border-radius:10px;padding:1.4rem;position:-webkit-sticky;position:sticky;top:80px;}
.sum-ttl{font-size:.95rem;font-weight:800;margin-bottom:1.1rem;}
.sum-row{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;font-size:.82rem;margin-bottom:.65rem;}
.sum-tot{font-weight:800;font-size:.95rem;padding-top:.75rem;margin-top:.5rem;border-top:1px solid var(–bd);}
.promo-r{display:-webkit-box;display:-webkit-flex;display:flex;margin:1rem 0;}
.promo-r > * + *{margin-left:.45rem;}
.promo-in{-webkit-box-flex:1;-webkit-flex:1;flex:1;padding:.52rem .75rem;border:1.5px solid var(–bd);border-radius:5px;font-family:‘Montserrat’,Helvetica,Arial,sans-serif;font-size:.78rem;outline:none;}
.promo-in:focus{border-color:var(–y);}
.promo-ap{background:var(–dk);color:var(–wh);border:none;padding:.52rem .8rem;border-radius:5px;font-size:.75rem;font-weight:700;cursor:pointer;font-family:‘Montserrat’,Helvetica,Arial,sans-serif;-webkit-transition:background .15s;transition:background .15s;white-space:nowrap;}
.promo-ap:hover{background:var(–dk2);}
.pm{font-size:.72rem;margin-bottom:.5rem;}.pm.ok{color:#2e7d32;}.pm.err{color:#c62828;}
.empty-s{text-align:center;padding:5rem 2rem;}
.sum-actions > * + *{margin-top:.65rem;}

/* CHECKOUT */
.co-pg{max-width:960px;margin:0 auto;padding:3rem 2rem 5rem;}
.co-grid{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;}
.co-form-col{-webkit-box-flex:1;-webkit-flex:1;flex:1;margin-right:2rem;}
.co-sum-col{width:320px;-webkit-flex-shrink:0;flex-shrink:0;}
.co-card{background:var(–wh);border:1px solid var(–bd);border-radius:10px;padding:1.6rem;margin-bottom:1rem;}
.co-sec-ttl{font-size:.75rem;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:var(–mt);margin-bottom:1.1rem;padding-bottom:.65rem;border-bottom:1px solid var(–bd2);}
.fg{margin-bottom:.9rem;}
.fl{display:block;font-size:.68rem;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:var(–mt);margin-bottom:.38rem;}
.fi{width:100%;padding:.6rem .85rem;border:1.5px solid var(–bd);border-radius:5px;font-family:‘Montserrat’,Helvetica,Arial,sans-serif;font-size:.85rem;outline:none;background:var(–bg);-webkit-transition:border-color .15s;transition:border-color .15s;}
.fi:focus{border-color:var(–y);background:var(–wh);}
textarea.fi{resize:vertical;}
.fr2{display:-webkit-box;display:-webkit-flex;display:flex;}
.fr2 > * + *{margin-left:.9rem;}
.fr2 > *{-webkit-box-flex:1;-webkit-flex:1;flex:1;}
.pay-opts{display:-webkit-box;display:-webkit-flex;display:flex;margin-bottom:1rem;}
.pay-opts > * + *{margin-left:.7rem;}
.pay-opt{border:1.5px solid var(–bd);border-radius:8px;padding:.9rem;cursor:pointer;-webkit-transition:all .15s;transition:all .15s;text-align:center;-webkit-box-flex:1;-webkit-flex:1;flex:1;}
.pay-opt:hover,.pay-opt.on{border-color:var(–y);background:var(–yl);}
.pay-lbl{font-size:.75rem;font-weight:700;margin-top:.25rem;}
.mx-note{background:var(–yl);border:1px solid rgba(240,193,39,.4);border-radius:7px;padding:.9rem;font-size:.8rem;color:var(–mt);text-align:center;line-height:1.6;}

/* CONFIRM */
.conf-pg{min-height:calc(100vh - 64px);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:2rem;}
.conf-card{background:var(–wh);border:1px solid var(–bd);border-radius:14px;padding:3rem;text-align:center;max-width:460px;width:100%;}
.conf-chk{width:60px;height:60px;background:var(–y);border-radius:50%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin:0 auto 1.4rem;}
.conf-chk svg{width:28px;height:28px;stroke:var(–dk);fill:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;}
.conf-title{font-size:1.5rem;font-weight:800;margin-bottom:.7rem;letter-spacing:-.4px;}
.conf-msg{color:var(–mt);font-size:.85rem;line-height:1.7;margin-bottom:1.4rem;}
.conf-box{background:var(–bg);border-radius:7px;padding:1rem;margin-bottom:1.8rem;}
.conf-box-lbl{font-size:.68rem;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:var(–mt);}
.conf-box-num{font-size:1.2rem;font-weight:900;color:var(–dk);margin-top:.15rem;}

/* AUTH */
.auth-pg{min-height:calc(100vh - 64px);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:2rem;background:var(–bg);}
.auth-card{background:var(–wh);border:1px solid var(–bd);border-radius:14px;padding:2.4rem;width:100%;max-width:370px;}
.auth-logo{text-align:center;font-size:1.4rem;font-weight:900;color:var(–y);letter-spacing:1.5px;margin-bottom:1.4rem;}
.auth-title{font-size:1.2rem;font-weight:800;text-align:center;margin-bottom:1.4rem;color:var(–dk);}
.auth-sw{text-align:center;margin-top:.9rem;font-size:.78rem;color:var(–mt);}
.auth-sw span{color:var(–y);cursor:pointer;font-weight:700;}

/* ABOUT */
.abt-hero{padding:5rem 2rem;background:var(–wh);}
.abt-in{max-width:960px;margin:0 auto;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;}
.abt-left{width:47%;}
.abt-right{width:47%;}
.abt-img{border-radius:14px;overflow:hidden;border:1px solid var(–bd);}
.abt-img img{width:100%;height:360px;-o-object-fit:cover;object-fit:cover;display:block;}
.abt-tag{font-size:.68rem;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(–y);display:block;margin-bottom:.7rem;}
.abt-title{font-size:2rem;font-weight:900;color:var(–dk);margin-bottom:.9rem;letter-spacing:-.5px;line-height:1.2;}
.abt-text{font-size:.88rem;color:var(–mt);line-height:1.85;font-weight:400;}
.abt-mission{margin-top:1.4rem;padding:1.1rem 1.2rem;border-left:3px solid var(–y);background:var(–yl);border-radius:0 8px 8px 0;}
.abt-m-lbl{font-size:.68rem;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:var(–y);margin-bottom:.3rem;}
.abt-m-txt{font-size:.82rem;color:var(–tx);line-height:1.7;font-weight:400;}
.vals-sec{background:var(–bg);padding:4rem 2rem;border-top:1px solid var(–bd);}
.vals-grid{display:-webkit-box;display:-webkit-flex;display:flex;max-width:960px;margin:0 auto;}
.vals-grid > * + *{margin-left:1.2rem;}
.val-card{background:var(–wh);border:1px solid var(–bd);border-radius:10px;padding:1.4rem;text-align:center;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-transition:all .2s;transition:all .2s;}
.val-card:hover{border-color:var(–y);}
.val-num{font-size:1.8rem;font-weight:900;color:var(–y);margin-bottom:.4rem;}
.val-name{font-size:.82rem;font-weight:700;color:var(–dk);}

/* CONTACT */
.ct-sec{padding:5rem 2rem;}
.ct-in{max-width:860px;margin:0 auto;display:-webkit-box;display:-webkit-flex;display:flex;}
.ct-left{width:45%;margin-right:2.5rem;}
.ct-right{-webkit-box-flex:1;-webkit-flex:1;flex:1;}
.ct-info-card{background:var(–wh);border:1px solid var(–bd);border-radius:10px;padding:1.2rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-bottom:.9rem;-webkit-transition:border-color .2s;transition:border-color .2s;}
.ct-info-card:hover{border-color:var(–y);}
.ct-icon{width:36px;height:36px;background:var(–yl);border-radius:7px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-shrink:0;flex-shrink:0;margin-right:.9rem;}
.ct-icon svg{width:16px;height:16px;stroke:var(–y);fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;}
.ct-lbl{font-size:.68rem;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:var(–mt);}
.ct-val{font-size:.85rem;font-weight:600;color:var(–dk);margin-top:.1rem;}
.ct-form-card{background:var(–wh);border:1px solid var(–bd);border-radius:10px;padding:1.8rem;}

/* DELIVERY */
.del-sec{background:var(–bg);padding:4rem 2rem;border-top:1px solid var(–bd);}
.del-grid{display:-webkit-box;display:-webkit-flex;display:flex;max-width:860px;margin:0 auto;}
.del-grid > * + *{margin-left:1.2rem;}
.del-card{background:var(–wh);border:1px solid var(–bd);border-radius:10px;padding:1.6rem;text-align:center;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-transition:all .2s;transition:all .2s;}
.del-card:hover{border-color:var(–y);}
.del-card.hl{border-color:var(–y);background:var(–yl);}
.del-nm{font-size:.85rem;font-weight:700;color:var(–dk);margin-bottom:.3rem;}
.del-pr{font-size:1.3rem;font-weight:900;color:var(–dk);margin-bottom:.25rem;letter-spacing:-.4px;}
.del-ds{font-size:.75rem;color:var(–mt);}

/* ADMIN */
.adm-lay{display:-webkit-box;display:-webkit-flex;display:flex;max-width:1140px;margin:0 auto;padding:2rem 2rem 5rem;}
.adm-sb{width:195px;-webkit-flex-shrink:0;flex-shrink:0;margin-right:2rem;background:var(–dk);border-radius:10px;padding:1.1rem;height:-webkit-fit-content;height:fit-content;position:-webkit-sticky;position:sticky;top:80px;}
.adm-ct-wrap{-webkit-box-flex:1;-webkit-flex:1;flex:1;}
.adm-brand{font-size:1rem;font-weight:900;color:var(–y);text-align:center;margin-bottom:1.3rem;letter-spacing:1.5px;}
.adm-nav{list-style:none;margin:0;padding:0;}
.adm-nav > * + *{margin-top:3px;}
.adm-ni{padding:.55rem .85rem;border-radius:6px;color:rgba(255,255,255,.55);font-size:.8rem;font-weight:600;cursor:pointer;-webkit-transition:all .15s;transition:all .15s;}
.adm-ni:hover,.adm-ni.on{background:var(–y);color:var(–dk);}
.adm-ct{background:var(–wh);border:1px solid var(–bd);border-radius:10px;padding:1.8rem;}
.adm-ct-hd{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-bottom:1.4rem;}
.adm-ct-ttl{font-size:1.2rem;font-weight:800;letter-spacing:-.3px;}
.tbl-wrap{overflow-x:auto;}
.dtbl{width:100%;border-collapse:collapse;font-size:.8rem;}
.dtbl th{text-align:left;padding:.6rem .75rem;border-bottom:2px solid var(–bd);font-size:.66rem;text-transform:uppercase;letter-spacing:1px;color:var(–mt);font-weight:700;}
.dtbl td{padding:.8rem .75rem;border-bottom:1px solid var(–bd2);vertical-align:middle;}
.dtbl tr:hover td{background:var(–bg);}
.t-img{width:38px;height:38px;border-radius:6px;-o-object-fit:cover;object-fit:cover;border:1px solid var(–bd);}
.tbl-acts > * + *{margin-left:.3rem;}
.tb{padding:.28rem .65rem;border-radius:4px;font-size:.7rem;font-weight:700;cursor:pointer;border:none;font-family:‘Montserrat’,Helvetica,Arial,sans-serif;-webkit-transition:all .15s;transition:all .15s;}
.tb-ed{background:rgba(240,193,39,.15);color:#7A6000;}
.tb-ed:hover{background:var(–y);color:var(–dk);}
.tb-dl{background:rgba(211,47,47,.1);color:#c62828;}
.tb-dl:hover{background:#d32f2f;color:var(–wh);}
.st-cards{display:-webkit-box;display:-webkit-flex;display:flex;margin-bottom:1.4rem;}
.st-cards > * + *{margin-left:1rem;}
.st-card{background:var(–bg);border:1px solid var(–bd);border-radius:8px;padding:1.1rem;text-align:center;-webkit-box-flex:1;-webkit-flex:1;flex:1;}
.st-n{font-size:1.8rem;font-weight:900;color:var(–dk);}
.st-l{font-size:.68rem;color:var(–mt);font-weight:600;text-transform:uppercase;letter-spacing:1px;}

/* MODAL */
.mo{position:fixed;inset:0;background:rgba(0,0,0,.4);z-index:2000;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:1rem;}
.mo-box{background:var(–wh);border-radius:14px;padding:2rem;width:100%;max-width:510px;max-height:90vh;overflow-y:auto;}
.mo-ttl{font-size:1.05rem;font-weight:800;margin-bottom:1.4rem;}
.mo-acts{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;margin-top:1.4rem;}
.mo-acts > * + *{margin-left:.7rem;}
.btn-can{background:none;border:1.5px solid var(–bd);padding:.5rem 1rem;border-radius:5px;font-size:.8rem;font-weight:700;cursor:pointer;font-family:‘Montserrat’,Helvetica,Arial,sans-serif;-webkit-transition:all .15s;transition:all .15s;}
.btn-can:hover{border-color:var(–dk);}

/* TOAST */
.toast{position:fixed;bottom:2rem;right:2rem;background:var(–dk);color:var(–wh);padding:.8rem 1.4rem;border-radius:7px;z-index:9999;font-size:.8rem;font-weight:600;-webkit-box-shadow:0 6px 20px rgba(0,0,0,.25);box-shadow:0 6px 20px rgba(0,0,0,.25);-webkit-animation:ti .25s ease;animation:ti .25s ease;max-width:280px;}
@-webkit-keyframes ti{from{-webkit-transform:translateX(110%);transform:translateX(110%);opacity:0;}to{-webkit-transform:translateX(0);transform:translateX(0);opacity:1;}}
@keyframes ti{from{transform:translateX(110%);opacity:0;}to{transform:translateX(0);opacity:1;}}

/* FOOTER */
.footer{background:var(–dk);}
.ft-main{max-width:1140px;margin:0 auto;padding:3rem 2rem 2rem;display:-webkit-box;display:-webkit-flex;display:flex;}
.ft-col1{width:30%;margin-right:2.5rem;}
.ft-col{-webkit-box-flex:1;-webkit-flex:1;flex:1;}
.ft-col + .ft-col{margin-left:2rem;}
.ft-brand{font-size:1.2rem;font-weight:900;color:var(–y);letter-spacing:1.5px;margin-bottom:.5rem;}
.ft-desc{font-size:.78rem;color:rgba(255,255,255,.4);line-height:1.7;margin-bottom:1.1rem;}
.nl-r{display:-webkit-box;display:-webkit-flex;display:flex;}
.nl-r > * + *{margin-left:.4rem;}
.nl-in{-webkit-box-flex:1;-webkit-flex:1;flex:1;padding:.52rem .75rem;border-radius:5px;border:none;font-family:‘Montserrat’,Helvetica,Arial,sans-serif;font-size:.75rem;outline:none;}
.nl-btn{background:var(–y);color:var(–dk);border:none;padding:.52rem .85rem;border-radius:5px;font-size:.72rem;font-weight:700;cursor:pointer;font-family:‘Montserrat’,Helvetica,Arial,sans-serif;-webkit-transition:background .15s;transition:background .15s;white-space:nowrap;}
.nl-btn:hover{background:var(–yh);}
.ft-col-ttl{font-size:.68rem;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:rgba(255,255,255,.45);margin-bottom:.9rem;}
.ft-links{list-style:none;margin:0;padding:0;}
.ft-links li + li{margin-top:.5rem;}
.ft-links a{font-size:.78rem;color:rgba(255,255,255,.5);cursor:pointer;-webkit-transition:color .15s;transition:color .15s;font-weight:400;}
.ft-links a:hover{color:var(–y);}
.ft-bot{border-top:1px solid rgba(255,255,255,.08);padding:1.1rem 2rem;max-width:1140px;margin:0 auto;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;}
.ft-copy{font-size:.72rem;color:rgba(255,255,255,.28);}
.soc-r{display:-webkit-box;display:-webkit-flex;display:flex;}
.soc-r > * + *{margin-left:.5rem;}
.soc-btn{width:30px;height:30px;border-radius:5px;background:rgba(255,255,255,.07);border:none;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-transition:all .15s;transition:all .15s;}
.soc-btn:hover{background:var(–y);}
.soc-btn svg{width:14px;height:14px;fill:rgba(255,255,255,.6);}
.soc-btn:hover svg{fill:var(–dk);}

/* RESPONSIVE */
@media(max-width:880px){
.hero-in{-webkit-box-orient:vertical;-webkit-flex-direction:column;flex-direction:column;}
.hero-left,.hero-right{width:100%;}
.hero-right{-webkit-box-ordinal-group:0;-webkit-order:-1;order:-1;}
.hero-img-box{width:100%;max-width:300px;height:300px;margin:0 auto;}
.hero-desc{max-width:100%;}
.hero-btns{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;}
.hero-stats{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;}
.feat-grid{-webkit-box-orient:vertical;-webkit-flex-direction:column;flex-direction:column;}
.feat-grid > * + *{margin-left:0;margin-top:1rem;}
.cat-lay{-webkit-box-orient:vertical;-webkit-flex-direction:column;flex-direction:column;}
.filt-panel{width:100%;margin-right:0;margin-bottom:1.5rem;-webkit-box-orient:horizontal;-webkit-flex-direction:row;flex-direction:row;display:-webkit-box;display:-webkit-flex;display:flex;}
.filt-grp{margin-bottom:0;}
.filt-grp + .filt-grp{margin-left:2rem;}
.det-grid,.abt-in,.ct-in{-webkit-box-orient:vertical;-webkit-flex-direction:column;flex-direction:column;}
.det-img-wrap,.det-info-wrap,.abt-left,.abt-right,.ct-left,.ct-right{width:100%;}
.abt-right{margin-top:2rem;}
.ct-left{margin-right:0;margin-bottom:1.5rem;}
.cart-grid,.co-grid{-webkit-box-orient:vertical;-webkit-flex-direction:column;flex-direction:column;}
.cart-list-col,.co-form-col{margin-right:0;margin-bottom:1.5rem;}
.cart-sum-col,.co-sum-col{width:100%;}
.vals-grid,.del-grid{-webkit-flex-wrap:wrap;flex-wrap:wrap;}
.vals-grid > * + *,.del-grid > * + *{margin-left:0;margin-top:1rem;}
.val-card,.del-card{width:100%;}
.ft-main{-webkit-flex-wrap:wrap;flex-wrap:wrap;}
.ft-col1{width:100%;margin-right:0;margin-bottom:1.5rem;}
.ft-col + .ft-col{margin-left:0;}
.ft-col{width:50%;margin-top:1rem;}
.adm-lay{-webkit-box-orient:vertical;-webkit-flex-direction:column;flex-direction:column;}
.adm-sb{width:100%;position:static;margin-right:0;margin-bottom:1rem;}
.adm-nav{-webkit-box-orient:horizontal;-webkit-flex-direction:row;flex-direction:row;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;}
.adm-nav > * + *{margin-top:0;margin-left:4px;}
.nav{padding:0 1rem;}
.nav-links{display:none;}
.prod-card{width:calc(50% - 1.3rem);}
}
@media(max-width:500px){
.hero-title{font-size:3.5rem;}
.prod-card{width:calc(100% - 1.3rem);}
}
`;

const Ico = {
Cart: function() {
return (
<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
<path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
</svg>
);
},
Check: function() {
return (
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
<polyline points="20 6 9 17 4 12"/>
</svg>
);
},
Star: function() { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>; },
Brush: function() { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L3 14.67V21h6.33l10.06-10.06a5.5 5.5 0 0 0 0-7.78z"/></svg>; },
Truck: function() { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>; },
Phone: function() { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 5.55 5.55l1.97-1.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>; },
Mail: function() { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>; },
Pin: function() { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>; },
Clock: function() { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>; },
IG: function() { return <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>; },
FB: function() { return <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>; },
TW: function() { return <svg viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>; },
};

function Toast({ msg, onDone }) {
useEffect(function() { var t = setTimeout(onDone, 2500); return function() { clearTimeout(t); }; }, []);
return <div className="toast">{msg}</div>;
}

function Footer({ setPage }) {
var ctx = useContext(AppContext);
var t = ctx.t; var lang = ctx.lang;
var _s = useState(””); var email = _s[0]; var setEmail = _s[1];
var _s2 = useState(false); var subbed = _s2[0]; var setSubbed = _s2[1];
return (
<footer className="footer">
<div className="ft-main">
<div className="ft-col1">
<div className="ft-brand">AVIK’S</div>
<p className="ft-desc">{t.footer.desc}</p>
{subbed
? <div style={{fontSize:”.78rem”,color:“var(–y)”,fontWeight:“600”}}>Inscrito com sucesso</div>
: <div className="nl-r">
<input className="nl-in" placeholder={t.footer.placeholder} value={email} onChange={function(e){setEmail(e.target.value);}} />
<button className=“nl-btn” onClick={function(){if(email) setSubbed(true);}}>{t.footer.subscribe}</button>
</div>
}
</div>
<div className="ft-col">
<div className="ft-col-ttl">{lang===“PT”?“Loja”:“Shop”}</div>
<ul className="ft-links">
<li><a onClick={function(){setPage(“catalog”);}}>{t.nav.catalog}</a></li>
<li><a onClick={function(){setPage(“catalog”);}}>{t.catalog.boys}</a></li>
<li><a onClick={function(){setPage(“catalog”);}}>{t.catalog.girls}</a></li>
</ul>
</div>
<div className="ft-col">
<div className="ft-col-ttl">Company</div>
<ul className="ft-links">
<li><a onClick={function(){setPage(“about”);}}>{t.nav.about}</a></li>
<li><a onClick={function(){setPage(“contact”);}}>{t.nav.contact}</a></li>
</ul>
</div>
<div className="ft-col">
<div className="ft-col-ttl">Support</div>
<ul className="ft-links">
<li><a>{lang===“PT”?“Entrega”:“Delivery”}</a></li>
<li><a>info@aviks.ao</a></li>
<li><a>+244 900 000 000</a></li>
</ul>
</div>
</div>
<div className="ft-bot">
<span className="ft-copy">2026 AVIK’S. {t.footer.rights}</span>
<div className="soc-r">
<button className="soc-btn"><Ico.IG /></button>
<button className="soc-btn"><Ico.FB /></button>
<button className="soc-btn"><Ico.TW /></button>
</div>
</div>
</footer>
);
}

function Navbar({ page, setPage }) {
var ctx = useContext(AppContext);
var lang = ctx.lang; var setLang = ctx.setLang; var cart = ctx.cart; var user = ctx.user; var setUser = ctx.setUser; var t = ctx.t;
var _sh = useState(false); var sh = _sh[0]; var setSh = _sh[1];
useEffect(function() {
function fn() { setSh(window.scrollY > 8); }
window.addEventListener(“scroll”, fn);
return function() { window.removeEventListener(“scroll”, fn); };
}, []);
var total = cart.reduce(function(s,i) { return s + i.qty; }, 0);
return (
<nav className={“nav” + (sh ? “ sh” : “”)}>
<div className=“nav-logo” onClick={function(){setPage(“home”);}}>AVIK’S</div>
<ul className="nav-links">
{[“home”,“catalog”,“about”,“contact”].map(function(p) {
return <li key={p}><a className={page===p?“on”:””} onClick={function(){setPage(p);}}>{t.nav[p]}</a></li>;
})}
{user && user.isAdmin && <li><a className={page===“admin”?“on”:””} onClick={function(){setPage(“admin”);}}>{t.nav.admin}</a></li>}
</ul>
<div className="nav-r">
<button className=“lang-btn” onClick={function(){setLang(lang===“PT”?“EN”:“PT”);}}>
<span className="lang-a">{lang}</span>
<span className="lang-x">|</span>
<span className="lang-x">{lang===“PT”?“EN”:“PT”}</span>
</button>
<button className=“cart-btn” onClick={function(){setPage(“cart”);}}>
<Ico.Cart />
{total > 0 && <span className="cart-badge">{total}</span>}
</button>
{user
? <button className="login-btn" onClick={function(){setUser(null);}}>{t.nav.logout}</button>
: <button className=“login-btn” onClick={function(){setPage(“auth”);}}>{t.nav.login}</button>
}
</div>
</nav>
);
}

function ProductCard({ product, setPage, setSelectedProduct }) {
var ctx = useContext(AppContext);
var lang = ctx.lang; var addToCart = ctx.addToCart; var t = ctx.t;
var name = lang===“PT” ? product.namePT : product.nameEN;
return (
<div className=“prod-card” onClick={function(){setSelectedProduct(product);setPage(“product”);}}>
<img src={product.image} alt={name} className="prod-img" loading="lazy" />
<div className="prod-body">
<span className={“prod-badge “ + (product.gender===“boys” ? “b-boys” : “b-girls”)}>
{product.gender===“boys” ? t.catalog.boys : t.catalog.girls}
</span>
<div className="prod-name">{name}</div>
<div className="prod-age">{product.age} {lang===“PT”?“anos”:“years”}</div>
<div className="prod-ft">
<span className="prod-price">{fmt(product.price)}</span>
<button className="add-btn" onClick={function(e){e.stopPropagation();addToCart(product);}}>+</button>
</div>
</div>
</div>
);
}

function HomePage({ setPage, setSelectedProduct }) {
var ctx = useContext(AppContext);
var t = ctx.t; var lang = ctx.lang; var products = ctx.products;
return (
<div className="pg">
<section className="hero">
<div className="hero-in">
<div className="hero-left">
<span className="hero-tag">{t.hero.tag}</span>
<h1 className="hero-title">{t.hero.title}</h1>
<div className="hero-sub1">{t.hero.sub1}</div>
<p className="hero-desc">{t.hero.sub2}</p>
<div className="hero-btns">
<button className=“btn-y” onClick={function(){setPage(“catalog”);}}>{t.hero.cta}</button>
<button className=“btn-o” onClick={function(){setPage(“about”);}}>{t.hero.cta2}</button>
</div>
<div className="hero-stats">
<div><span className="st-num">1000+</span><span className="st-lbl">{t.stats.col}</span></div>
<div><span className="st-num">1-10</span><span className="st-lbl">{t.stats.age}</span></div>
<div><span className="st-num">Premium</span><span className="st-lbl">{t.stats.qual}</span></div>
</div>
</div>
<div className="hero-right">
<div className="hero-img-box">
<img
src=“https://avikshop-och9cdq7.manus.space/manus-storage/aviks-brand-image_746818a0.jpg”
alt=“Avik’s brand”
onError={function(e){e.target.src=“https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=600”;}}
/>
<span className="hero-img-pill">Colecao 2025</span>
</div>
</div>
</div>
</section>
<div className="feat-strip">
<div className="feat-grid">
<div className="feat-card"><div className="feat-icon"><Ico.Star /></div><div className="feat-title">{t.features.q}</div><div className="feat-desc">{t.features.qd}</div></div>
<div className="feat-card"><div className="feat-icon"><Ico.Brush /></div><div className="feat-title">{t.features.d}</div><div className="feat-desc">{t.features.dd}</div></div>
<div className="feat-card"><div className="feat-icon"><Ico.Truck /></div><div className="feat-title">{t.features.s}</div><div className="feat-desc">{t.features.sd}</div></div>
</div>
</div>
<section className=“sec” style={{background:“var(–wh)”}}>
<div className="ctr">
<div className="sec-hd">
<span className="sh-lbl">{lang===“PT”?“Nova Colecao”:“New Collection”}</span>
<h2 className="sh-title">{t.catalog.title}</h2>
<p className="sh-sub">{lang===“PT”?“Descubra nossa colecao premium de roupas infantis”:“Discover our premium collection of children’s clothing”}</p>
</div>
<div className="prod-grid">
{products.slice(0,8).map(function(p){return <ProductCard key={p.id} product={p} setPage={setPage} setSelectedProduct={setSelectedProduct} />;})}
</div>
</div>
</section>
<div className="cta-band">
<div className="ctr">
<h2>{t.cta2.title}</h2>
<p>{t.cta2.sub}</p>
<button className=“btn-dk” onClick={function(){setPage(“catalog”);}}>{t.cta2.btn}</button>
</div>
</div>
<div className="del-sec">
<div className="ctr">
<div className=“sec-hd” style={{marginBottom:“1.8rem”}}>
<span className="sh-lbl">Logistica</span>
<h2 className="sh-title">{t.delivery.title}</h2>
</div>
<div className="del-grid">
<div className="del-card"><div className="del-nm">{t.delivery.standard}</div><div className="del-pr">1.500 AOA</div><div className="del-ds">{t.delivery.days3} - Luanda</div></div>
<div className="del-card hl"><div className="del-nm">{t.delivery.express}</div><div className="del-pr">3.000 AOA</div><div className="del-ds">{t.delivery.days1} - Luanda</div></div>
<div className="del-card"><div className="del-nm">{t.delivery.free}</div><div className=“del-pr” style={{color:”#2e7d32”}}>Gratis</div><div className="del-ds">{t.delivery.freeNote}</div></div>
</div>
</div>
</div>
<Footer setPage={setPage} />
</div>
);
}

function CatalogPage({ setPage, setSelectedProduct }) {
var ctx = useContext(AppContext);
var t = ctx.t; var lang = ctx.lang; var products = ctx.products;
var _g = useState(“all”); var gender = _g[0]; var setGender = _g[1];
var _a = useState(“all”); var age = _a[0]; var setAge = _a[1];
var gOpts = [{v:“all”,l:t.catalog.all},{v:“boys”,l:t.catalog.boys},{v:“girls”,l:t.catalog.girls}];
var aOpts = [{v:“all”,l:t.catalog.allAges},{v:“1-3”,l:lang===“PT”?“1-3 anos”:“1-3 years”},{v:“4-6”,l:lang===“PT”?“4-6 anos”:“4-6 years”},{v:“7-10”,l:lang===“PT”?“7-10 anos”:“7-10 years”}];
var filtered = products.filter(function(p){ return (gender===“all”||p.gender===gender) && (age===“all”||p.age===age); });
return (
<div className="pg">
<div className="cat-lay">
<aside className="filt-panel">
<div className="filt-grp">
<div className="filt-grp-ttl">{t.catalog.filterGender}</div>
{gOpts.map(function(o){return(
<label key={o.v} className="filt-opt">
<input type=“radio” name=“g” checked={gender===o.v} onChange={function(){setGender(o.v);}} />
<span>{o.l}</span>
</label>
);})}
</div>
<div className="filt-grp">
<div className="filt-grp-ttl">{t.catalog.filterAge}</div>
{aOpts.map(function(o){return(
<label key={o.v} className="filt-opt">
<input type=“radio” name=“a” checked={age===o.v} onChange={function(){setAge(o.v);}} />
<span>{o.l}</span>
</label>
);})}
</div>
</aside>
<main className="cat-main">
<div className="cat-hd">
<h1 className="cat-ttl">{t.catalog.title}</h1>
<span className="cat-cnt">{filtered.length} {t.catalog.found}</span>
</div>
<div className="prod-grid">
{filtered.map(function(p){return <ProductCard key={p.id} product={p} setPage={setPage} setSelectedProduct={setSelectedProduct} />;})}
</div>
</main>
</div>
<Footer setPage={setPage} />
</div>
);
}

function ProductPage({ product, setPage }) {
var ctx = useContext(AppContext);
var lang = ctx.lang; var addToCart = ctx.addToCart; var t = ctx.t;
var _si = useState(0); var si = _si[0]; var setSi = _si[1];
if (!product) { setPage(“catalog”); return null; }
var name = lang===“PT” ? product.namePT : product.nameEN;
var desc = lang===“PT” ? product.descPT : product.descEN;
return (
<div className="pg">
<div className="det-pg">
<button className=“btn-back” onClick={function(){setPage(“catalog”);}}>{”<”} {t.product.back}</button>
<div className="det-grid">
<div className="det-img-wrap"><div className="det-img"><img src={product.image} alt={name} /></div></div>
<div className="det-info-wrap">
<span className="det-tag">{product.gender===“boys”?t.catalog.boys:t.catalog.girls} - {product.age} {lang===“PT”?“anos”:“years”}</span>
<h1 className="det-title">{name}</h1>
<div className="det-price">{fmt(product.price)}</div>
<div className="det-lbl">{t.product.size}</div>
<div className="sz-row">
{product.sizes.map(function(s,i){return <button key={i} className={“sz-chip” + (si===i?” on”:””)} onClick={function(){setSi(i);}}>{s}</button>;})}
</div>
<div className=“det-lbl” style={{marginBottom:”.4rem”}}>{t.product.desc}</div>
<p className="det-desc">{desc}</p>
<button className=“btn-y full” style={{borderRadius:“7px”,padding:“1rem”}} onClick={function(){addToCart(Object.assign({},product,{selectedSize:product.sizes[si]}));}}>{t.product.add}</button>
</div>
</div>
</div>
<Footer setPage={setPage} />
</div>
);
}

function CartPage({ setPage }) {
var ctx = useContext(AppContext);
var t = ctx.t; var lang = ctx.lang; var cart = ctx.cart; var setCart = ctx.setCart;
var _p = useState(””); var promo = _p[0]; var setPromo = _p[1];
var _d = useState(0); var disc = _d[0]; var setDisc = _d[1];
var _pm = useState({txt:””,ok:false}); var pm = _pm[0]; var setPm = _pm[1];
var sub = cart.reduce(function(s,i){return s+i.price*i.qty;},0);
var discAmt = sub*disc; var total = sub-discAmt;
function upd(id,d){setCart(function(p){return p.map(function(i){return i.id===id?Object.assign({},i,{qty:Math.max(1,i.qty+d)}):i;});});}
function rm(id){setCart(function(p){return p.filter(function(i){return i.id!==id;});});}
function ap(){var r=PROMO[promo.toUpperCase()];if(r){setDisc(r);setPm({txt:t.cart.discount+” “+r*100+”%”,ok:true});}else setPm({txt:lang===“PT”?“Codigo invalido”:“Invalid code”,ok:false});}
if(!cart.length) return (
<div className="pg"><div className="empty-s">
<div style={{fontSize:“1.1rem”,fontWeight:“700”,marginBottom:”.4rem”}}>{t.cart.empty}</div>
<div style={{color:“var(–mt)”,fontSize:”.85rem”,marginBottom:“1.2rem”}}>{lang===“PT”?“Explore a nossa colecao.”:“Explore our collection.”}</div>
<button className=“btn-y” onClick={function(){setPage(“catalog”);}}>{t.cart.continue}</button>
</div><Footer setPage={setPage} /></div>
);
return (
<div className="pg"><div className="cart-pg">
<h1 style={{fontSize:“1.5rem”,fontWeight:“800”,marginBottom:“1.8rem”,letterSpacing:”-.4px”}}>{t.cart.title}</h1>
<div className="cart-grid">
<div className="cart-list-col">
<div className="cart-list">
{cart.map(function(item){return(
<div key={item.id} className="c-item">
<img src={item.image} alt="" className="c-img" />
<div className="c-inf">
<div className="c-name">{lang===“PT”?item.namePT:item.nameEN}</div>
{item.selectedSize && <div className="c-meta">{item.selectedSize}</div>}
<div className="qty-r">
<button className="qty-b" onClick={function(){upd(item.id,-1);}}>-</button>
<span className="qty-n">{item.qty}</span>
<button className="qty-b" onClick={function(){upd(item.id,1);}}>+</button>
</div>
</div>
<div className="c-price-col">
<span className="c-price">{fmt(item.price*item.qty)}</span>
<button className="rm-btn" onClick={function(){rm(item.id);}}>x</button>
</div>
</div>
);})}
</div>
</div>
<div className="cart-sum-col">
<div className="sum-box">
<div className="sum-ttl">{t.checkout.summary}</div>
<div className="sum-row"><span>{t.cart.subtotal}</span><span>{fmt(sub)}</span></div>
{disc>0 && <div className=“sum-row” style={{color:”#2e7d32”}}><span>Desconto</span><span>-{fmt(discAmt)}</span></div>}
<div className="sum-row"><span>{lang===“PT”?“Entrega”:“Delivery”}</span><span style={{color:“var(–mt)”}}>A calcular</span></div>
<div className="sum-row sum-tot"><span>{t.cart.total}</span><span>{fmt(total)}</span></div>
<div className="promo-r">
<input className="promo-in" placeholder={t.cart.promo} value={promo} onChange={function(e){setPromo(e.target.value);}} />
<button className="promo-ap" onClick={ap}>{t.cart.apply}</button>
</div>
{pm.txt && <div className={“pm “ + (pm.ok?“ok”:“err”)}>{pm.txt}</div>}
<div className="sum-actions">
<button className=“btn-y full” style={{borderRadius:“6px”}} onClick={function(){setPage(“checkout”);}}>{t.cart.checkout}</button>
<button className=“btn-ghost” onClick={function(){setPage(“catalog”);}}>{t.cart.continue}</button>
</div>
</div>
</div>
</div>
</div><Footer setPage={setPage} /></div>
);
}

function CheckoutPage({ setPage }) {
var ctx = useContext(AppContext);
var t = ctx.t; var lang = ctx.lang; var cart = ctx.cart; var setCart = ctx.setCart;
var _pay = useState(“card”); var pay = _pay[0]; var setPay = _pay[1];
var _f = useState({name:””,email:””,phone:””,address:””,city:””}); var f = _f[0]; var setF = _f[1];
var sub = cart.reduce(function(s,i){return s+i.price*i.qty;},0);
function submit(){if(!f.name||!f.email) return; setCart([]); setPage(“confirm”);}
function FG(props){var label=props.label;var field=props.field;var type=props.type||“text”;return(
<div className="fg"><label className="fl">{label}</label><input className=“fi” type={type} value={f[field]||””} onChange={function(e){setF(Object.assign({},f,{[field]:e.target.value}));}} /></div>
);}
return (
<div className="pg"><div className="co-pg">
<h1 style={{fontSize:“1.5rem”,fontWeight:“800”,marginBottom:“1.8rem”,letterSpacing:”-.4px”}}>{t.checkout.title}</h1>
<div className="co-grid">
<div className="co-form-col">
<div className="co-card">
<div className="co-sec-ttl">{lang===“PT”?“Dados Pessoais”:“Personal Details”}</div>
<FG label={t.checkout.name} field="name" />
<div className="fr2"><FG label={t.checkout.email} field="email" type="email" /><FG label={t.checkout.phone} field="phone" /></div>
<FG label={t.checkout.address} field="address" />
<FG label={t.checkout.city} field="city" />
</div>
<div className="co-card">
<div className="co-sec-ttl">{t.checkout.payment}</div>
<div className="pay-opts">
<div className={“pay-opt” + (pay===“card”?” on”:””)} onClick={function(){setPay(“card”);}}><div style={{fontSize:“1.3rem”}}>Cartao</div><div className="pay-lbl">{t.checkout.card}</div></div>
<div className={“pay-opt” + (pay===“multicaixa”?” on”:””)} onClick={function(){setPay(“multicaixa”);}}><div style={{fontSize:“1rem”,fontWeight:“700”}}>MCX</div><div className="pay-lbl">{t.checkout.multicaixa}</div></div>
</div>
{pay===“card” && (
<div>
<div className="fg"><label className="fl">{t.checkout.cardNum}</label><input className="fi" placeholder=".... .... .... ...." /></div>
<div className="fr2">
<div className="fg"><label className="fl">{t.checkout.expiry}</label><input className="fi" placeholder="MM/AA" /></div>
<div className="fg"><label className="fl">{t.checkout.cvv}</label><input className="fi" placeholder="..." /></div>
</div>
</div>
)}
{pay===“multicaixa” && <div className="mx-note">{lang===“PT”?“Recebera uma notificacao para confirmar o pagamento via Multicaixa Express.”:“You will receive a notification to confirm payment via Multicaixa Express.”}</div>}
</div>
</div>
<div className="co-sum-col">
<div className=“sum-box” style={{position:“sticky”,top:“80px”}}>
<div className="sum-ttl">{t.checkout.summary}</div>
{cart.map(function(i){return(
<div key={i.id} className="sum-row"><span style={{fontSize:”.78rem”,color:“var(–mt)”}}>{(lang===“PT”?i.namePT:i.nameEN)+” x”+i.qty}</span><span style={{fontWeight:“700”}}>{fmt(i.price*i.qty)}</span></div>
);})}
<div className="sum-row sum-tot"><span>{t.cart.total}</span><span>{fmt(sub)}</span></div>
<button className=“btn-y full” style={{borderRadius:“6px”,marginTop:“1rem”,padding:”.9rem”}} onClick={submit}>{t.checkout.confirm}</button>
</div>
</div>
</div>
</div><Footer setPage={setPage} /></div>
);
}

function ConfirmPage({ setPage }) {
var ctx = useContext(AppContext); var t = ctx.t;
var num = “AVK-” + Math.floor(10000+Math.random()*90000);
return (
<div className="pg"><div className="conf-pg">
<div className="conf-card">
<div className="conf-chk"><Ico.Check /></div>
<h1 className="conf-title">{t.confirm.title}</h1>
<p className="conf-msg">{t.confirm.msg}</p>
<div className="conf-box"><div className="conf-box-lbl">{t.confirm.orderNum}</div><div className="conf-box-num">#{num}</div></div>
<button className=“btn-y full” style={{borderRadius:“6px”,padding:”.9rem”}} onClick={function(){setPage(“home”);}}>{t.confirm.backHome}</button>
</div>
</div></div>
);
}

function AuthPage({ setPage }) {
var ctx = useContext(AppContext); var setUser = ctx.setUser; var t = ctx.t;
var _il = useState(true); var isLogin = _il[0]; var setIsLogin = _il[1];
var _f = useState({name:””,email:””,password:””,adminCode:””}); var f = _f[0]; var setF = _f[1];
function sub(){if(!f.email||!f.password) return; setUser({name:f.name||f.email.split(”@”)[0],email:f.email,isAdmin:f.adminCode===“ADMIN2025”}); setPage(“home”);}
return (
<div className="pg"><div className="auth-pg">
<div className="auth-card">
<div className="auth-logo">AVIK’S</div>
<h2 className="auth-title">{isLogin?t.auth.loginTitle:t.auth.signupTitle}</h2>
{!isLogin && <div className="fg"><label className="fl">{t.auth.name}</label><input className="fi" value={f.name} onChange={function(e){setF(Object.assign({},f,{name:e.target.value}));}} /></div>}
<div className="fg"><label className="fl">{t.auth.email}</label><input className="fi" type="email" value={f.email} onChange={function(e){setF(Object.assign({},f,{email:e.target.value}));}} /></div>
<div className="fg"><label className="fl">{t.auth.password}</label><input className="fi" type="password" value={f.password} onChange={function(e){setF(Object.assign({},f,{password:e.target.value}));}} /></div>
{!isLogin && <div className="fg"><label className="fl">{t.auth.adminCode}</label><input className="fi" placeholder="..." value={f.adminCode} onChange={function(e){setF(Object.assign({},f,{adminCode:e.target.value}));}} /></div>}
<button className=“btn-y full” style={{borderRadius:“6px”,padding:”.85rem”}} onClick={sub}>{isLogin?t.auth.login:t.auth.signup}</button>
<div className="auth-sw">{isLogin?t.auth.noAccount:t.auth.hasAccount} <span onClick={function(){setIsLogin(!isLogin);}}>{isLogin?t.auth.signup:t.auth.login}</span></div>
</div>
</div></div>
);
}

function AboutPage({ setPage }) {
var ctx = useContext(AppContext); var t = ctx.t; var lang = ctx.lang;
return (
<div className="pg">
<section className="abt-hero">
<div className="abt-in">
<div className="abt-left">
<span className="abt-tag">{lang===“PT”?“A Nossa Historia”:“Our Story”}</span>
<h1 className="abt-title">{t.about.title}</h1>
<p className="abt-text">{t.about.story}</p>
<div className="abt-mission">
<div className="abt-m-lbl">{t.about.mission}</div>
<div className="abt-m-txt">{t.about.missionText}</div>
</div>
</div>
<div className="abt-right">
<div className="abt-img">
<img src=“https://avikshop-och9cdq7.manus.space/manus-storage/aviks-brand-image_746818a0.jpg” alt=“Aviks” onError={function(e){e.target.src=“https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=600”;}} />
</div>
</div>
</div>
</section>
<div className="vals-sec">
<div className="ctr">
<div className=“sec-hd” style={{marginBottom:“1.8rem”}}>
<span className="sh-lbl">Valores</span>
<h2 className="sh-title">{t.about.values}</h2>
</div>
<div className="vals-grid">
{t.about.v.map(function(v,i){return(
<div key={i} className="val-card"><div className="val-num">{“0”+(i+1)}</div><div className="val-name">{v}</div></div>
);})}
</div>
</div>
</div>
<Footer setPage={setPage} />
</div>
);
}

function ContactPage({ setPage }) {
var ctx = useContext(AppContext); var t = ctx.t; var lang = ctx.lang;
var _f = useState({name:””,email:””,msg:””}); var f = _f[0]; var setF = _f[1];
var _s = useState(false); var sent = _s[0]; var setSent = _s[1];
var infos = [
{icon:<Ico.Phone />,label:t.contact.whatsapp,val:”+244 900 000 000”},
{icon:<Ico.Mail />,label:t.contact.emailLbl,val:“info@aviks.ao”},
{icon:<Ico.Pin />,label:t.contact.location,val:“Luanda, Angola”},
{icon:<Ico.Clock />,label:t.contact.hours,val:lang===“PT”?“Seg-Sab, 9h-18h”:“Mon-Sat, 9am-6pm”},
];
return (
<div className="pg"><div className="ct-sec">
<div className="ctr">
<div className="sec-hd">
<span className="sh-lbl">Contacto</span>
<h2 className="sh-title">{t.contact.title}</h2>
</div>
<div className="ct-in">
<div className="ct-left">
{infos.map(function(x,i){return(
<div key={i} className="ct-info-card">
<div className="ct-icon">{x.icon}</div>
<div><div className="ct-lbl">{x.label}</div><div className="ct-val">{x.val}</div></div>
</div>
);})}
</div>
<div className="ct-right">
<div className="ct-form-card">
{sent ? (
<div style={{textAlign:“center”,padding:“2rem”}}>
<div className=“conf-chk” style={{margin:“0 auto 1rem”}}><Ico.Check /></div>
<div style={{fontWeight:“700”,fontSize:“1rem”}}>{t.contact.sent}</div>
</div>
) : (
<div>
<div className="fg"><label className="fl">{t.contact.nameLbl}</label><input className="fi" value={f.name} onChange={function(e){setF(Object.assign({},f,{name:e.target.value}));}} /></div>
<div className="fg"><label className="fl">Email</label><input className="fi" type="email" value={f.email} onChange={function(e){setF(Object.assign({},f,{email:e.target.value}));}} /></div>
<div className="fg"><label className="fl">{t.contact.msgLbl}</label><textarea className="fi" rows={4} value={f.msg} onChange={function(e){setF(Object.assign({},f,{msg:e.target.value}));}} /></div>
<button className=“btn-y full” style={{borderRadius:“6px”}} onClick={function(){if(f.name&&f.email) setSent(true);}}>{t.contact.send}</button>
</div>
)}
</div>
</div>
</div>
</div>
</div><Footer setPage={setPage} /></div>
);
}

function AdminPage({ setPage }) {
var ctx = useContext(AppContext); var t = ctx.t; var lang = ctx.lang; var products = ctx.products; var setProducts = ctx.setProducts;
var _tab = useState(“products”); var tab = _tab[0]; var setTab = _tab[1];
var _mo = useState(false); var modal = _mo[0]; var setModal = _mo[1];
var _ei = useState(null); var editItem = _ei[0]; var setEditItem = _ei[1];
var blank = {namePT:””,nameEN:””,price:””,gender:“boys”,age:“1-3”,image:””,descPT:””,descEN:””};
var _f = useState(blank); var f = _f[0]; var setF = _f[1];
function openAdd(){setEditItem(null);setF(blank);setModal(true);}
function openEdit(p){setEditItem(p);setF(Object.assign({},p,{price:String(p.price)}));setModal(true);}
function save(){
if(editItem) setProducts(function(p){return p.map(function(x){return x.id===editItem.id?Object.assign({},f,{id:editItem.id,price:Number(f.price),sizes:editItem.sizes}):x;});});
else setProducts(function(p){return p.concat([Object.assign({},f,{id:Date.now(),price:Number(f.price),sizes:[“1 ano”,“2 anos”,“3 anos”]})]);});
setModal(false);
}
function del(id){setProducts(function(p){return p.filter(function(x){return x.id!==id;});});}
function FF(props){var label=props.label;var field=props.field;var type=props.type||“text”;return(
<div className="fg"><label className="fl">{label}</label><input className=“fi” type={type} value={f[field]||””} onChange={function(e){setF(Object.assign({},f,{[field]:e.target.value}));}} /></div>
);}
return (
<div className="pg"><div className="adm-lay">
<aside className="adm-sb">
<div className="adm-brand">AVIK’S</div>
<ul className="adm-nav">
{[“products”,“orders”,“inventory”].map(function(s){return(
<li key={s} className={“adm-ni” + (tab===s?” on”:””)} onClick={function(){setTab(s);}}>
{s===“products”?t.admin.products:s===“orders”?t.admin.orders:t.admin.inventory}
</li>
);})}
</ul>
</aside>
<div className="adm-ct-wrap"><div className="adm-ct">
{tab===“products” && (
<div>
<div className="adm-ct-hd">
<div className="adm-ct-ttl">{t.admin.products}</div>
<button className=“btn-y” style={{fontSize:”.8rem”,padding:”.5rem 1rem”,borderRadius:“5px”}} onClick={openAdd}>{t.admin.add}</button>
</div>
<div className="tbl-wrap">
<table className="dtbl">
<thead><tr><th></th><th>{lang===“PT”?“Nome”:“Name”}</th><th>{lang===“PT”?“Preco”:“Price”}</th><th>Genero</th><th>Idade</th><th></th></tr></thead>
<tbody>
{products.map(function(p){return(
<tr key={p.id}>
<td><img src={p.image} alt="" className="t-img" /></td>
<td style={{fontWeight:“600”}}>{lang===“PT”?p.namePT:p.nameEN}</td>
<td style={{fontWeight:“700”}}>{fmt(p.price)}</td>
<td><span className={“prod-badge “ + (p.gender===“boys”?“b-boys”:“b-girls”)}>{p.gender===“boys”?t.catalog.boys:t.catalog.girls}</span></td>
<td style={{color:“var(–mt)”}}>{p.age}</td>
<td className="tbl-acts"><button className="tb tb-ed" onClick={function(){openEdit(p);}}>{t.admin.edit}</button><button className="tb tb-dl" onClick={function(){del(p.id);}}>{t.admin.del}</button></td>
</tr>
);})}
</tbody>
</table>
</div>
</div>
)}
{tab===“orders” && <div><div className="adm-ct-ttl">{t.admin.orders}</div><div style={{textAlign:“center”,padding:“3rem”,color:“var(–mt)”,fontSize:”.88rem”}}>{lang===“PT”?“Nenhum pedido ainda.”:“No orders yet.”}</div></div>}
{tab===“inventory” && (
<div>
<div className="adm-ct-ttl">{t.admin.inventory}</div>
<div className="st-cards">
<div className="st-card"><div className="st-n">{products.length}</div><div className="st-l">Total</div></div>
<div className="st-card"><div className="st-n">{products.filter(function(p){return p.gender===“boys”;}).length}</div><div className="st-l">{t.catalog.boys}</div></div>
<div className="st-card"><div className="st-n">{products.filter(function(p){return p.gender===“girls”;}).length}</div><div className="st-l">{t.catalog.girls}</div></div>
</div>
</div>
)}
</div></div>
</div>
{modal && (
<div className=“mo” onClick={function(e){if(e.target.className===“mo”) setModal(false);}}>
<div className="mo-box">
<div className="mo-ttl">{editItem?t.admin.edit:t.admin.add}</div>
<div className="fr2"><FF label={t.admin.namePT} field="namePT" /><FF label={t.admin.nameEN} field="nameEN" /></div>
<div className="fr2">
<FF label={t.admin.price} field="price" type="number" />
<div className="fg"><label className="fl">{t.admin.gender}</label>
<select className="fi" value={f.gender} onChange={function(e){setF(Object.assign({},f,{gender:e.target.value}));}}><option value="boys">Boys</option><option value="girls">Girls</option></select>
</div>
</div>
<div className="fr2">
<div className="fg"><label className="fl">{t.admin.age}</label>
<select className="fi" value={f.age} onChange={function(e){setF(Object.assign({},f,{age:e.target.value}));}}><option value="1-3">1-3</option><option value="4-6">4-6</option><option value="7-10">7-10</option></select>
</div>
<FF label={t.admin.image} field="image" />
</div>
<FF label={t.admin.descPT} field="descPT" />
<FF label={t.admin.descEN} field="descEN" />
<div className="mo-acts">
<button className="btn-can" onClick={function(){setModal(false);}}>{t.admin.cancel}</button>
<button className=“btn-y” style={{borderRadius:“5px”,padding:”.5rem 1.1rem”}} onClick={save}>{t.admin.save}</button>
</div>
</div>
</div>
)}
<Footer setPage={setPage} /></div>
);
}

export default function App() {
var _lang = useState(“PT”); var lang = _lang[0]; var setLang = _lang[1];
var _page = useState(“home”); var page = _page[0]; var setPage = _page[1];
var _cart = useState([]); var cart = _cart[0]; var setCart = _cart[1];
var _user = useState(null); var user = _user[0]; var setUser = _user[1];
var _prods = useState(PRODUCTS); var products = _prods[0]; var setProducts = _prods[1];
var _sel = useState(null); var selectedProduct = _sel[0]; var setSelectedProduct = _sel[1];
var _toast = useState(null); var toast = _toast[0]; var setToast = _toast[1];
var t = T[lang];

useEffect(function() {
if (document.getElementById(“aviks-font”)) return;
var link = document.createElement(“link”);
link.id = “aviks-font”;
link.rel = “stylesheet”;
link.href = “https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap”;
document.head.appendChild(link);
}, []);

function addToCart(product) {
setCart(function(prev) {
var ex = prev.find(function(i){return i.id===product.id;});
if (ex) return prev.map(function(i){return i.id===product.id?Object.assign({},i,{qty:i.qty+1}):i;});
return prev.concat([Object.assign({},product,{qty:1})]);
});
var name = lang===“PT” ? product.namePT : product.nameEN;
setToast(lang===“PT” ? name+” adicionado ao carrinho” : name+” added to cart”);
}

function go(p) { setPage(p); window.scrollTo({top:0,behavior:“smooth”}); }

return (
<AppContext.Provider value={{lang,setLang,t,cart,setCart,addToCart,user,setUser,products,setProducts}}>
<style>{CSS}</style>
<Navbar page={page} setPage={go} />
{page===“home”     && <HomePage     setPage={go} setSelectedProduct={setSelectedProduct} />}
{page===“catalog”  && <CatalogPage  setPage={go} setSelectedProduct={setSelectedProduct} />}
{page===“product”  && <ProductPage  product={selectedProduct} setPage={go} />}
{page===“cart”     && <CartPage     setPage={go} />}
{page===“checkout” && <CheckoutPage setPage={go} />}
{page===“confirm”  && <ConfirmPage  setPage={go} />}
{page===“auth”     && <AuthPage     setPage={go} />}
{page===“about”    && <AboutPage    setPage={go} />}
{page===“contact”  && <ContactPage  setPage={go} />}
{page===“admin” && user && user.isAdmin && <AdminPage setPage={go} />}
{toast && <Toast msg={toast} onDone={function(){setToast(null);}} />}
</AppContext.Provider>
);
}
