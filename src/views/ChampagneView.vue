<template>
    <div class="champagne">
        <div class="container-fluid">
            <div class="row justify-content-start" style="height:511px">
                <div class="col-md-4 d-flex justify-content-center align-self-center">
                    <div class="mstamp"></div>
                </div>
                <div class="address col-md-4 align-self-center">
                    <p>Endereço:<br>SHIN Trecho 1 / Lago Norte, Brasília, DF<br>71560-100<br>de frente ao balão do Torto<br><br>Telefone: <a href="tel:+5561998112533">(61) 99811-2533</a></p>
                </div>
            </div>
        </div>
        <p class="footn">©2024 – Mocambo Ltda. – Todos os direitos reservados.</p>

    </div>
</template>

<style scoped>
p{        
    color: var(--amarelo);
}
.champagne {
    position: relative;
    height: 511px;
    width: 100%;
    background: transparent url('../assets/Grupo 32.png') 0% 0% no-repeat padding-box;
    opacity: 1;
    background-position: center;

}

.mstamp {
    width: 159px;
    height: 163px;
    background: transparent url('../assets/Grupo 20.svg') center;
    opacity: 1;
}

 .footn{
    position: absolute;
    justify-self: center;
    bottom: 3%;
    transform: translateX(-50%);
    left: 50%;
    width: 60%;
}

@media (max-width: 767px){
    .address{
        align-self:baseline
    }
    .champagne {
        height: 682px;
        background-size: cover;
    }
}

</style>
