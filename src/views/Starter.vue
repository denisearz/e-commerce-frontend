<template>
    <div>
        <div class="buttonContainer">
            <b-button 
            variant="dark"
            id="buton"
            >
                <i class="fas fa-burn fa-3x"></i>
                    <label for="fa-burn" style="color:black; top:3rem; position:relative; right:3rem">Gasista</label>
                </b-button>

            <b-button 
            variant="dark"
            id="buton"
            >
                <i class="fas fa-paint-roller fa-3x"></i>
                    <label for="fa-paint-roller" style="color:black; top:3rem; position:relative; right:3.5rem">Pintor</label>
                </b-button>

            <b-button 
            variant="dark"
            id="buton"
            style="padding-left:1.3rem"

            >
                <i class="fas fa-bolt fa-3x"></i>
                    <label for="fa-bolt" style="color:black; top:3rem; position:relative; right:4.4rem">Electricista</label>
                </b-button>

            <b-button 
            id="buton"
            variant="dark"
            >
                <i class="fas fa-fan fa-3x"></i>
                    <label for="fa-fan" style="color:black; top:4rem; position:relative; right:5.5rem">Técnico de Aire <br>Acondicionado</label>
                </b-button>

            <b-button 
            variant="dark"
            id="buton"
            >
                <i class="fas fa-wrench fa-3x"></i>
                <div>
                    <label for="fa-wrench" style="color:black; top:1.5rem; position:relative; right:0.5rem">Plomero</label>
                </div>
                </b-button>
           
            <b-button 
            variant="dark"
            id="buton"
            style="padding:5px"
            >
                <i class="fas fa-users fa-3x"></i>
                <div>
                    <label for="fa-users" style="color:black; top:1.5rem; position:relative; right:0.5rem">Ver todos</label>
                </div>
            </b-button>
        </div>

    </div>
</template>
<script>
export default {};
</script>
<style>
.buttonContainer{
    width: 100%;
    height: 20rem;
    display: flex;
    justify-content: space-around;
    align-items: center;

}
#buton{
    width: 4.5rem;
    height: 4.5rem;
}
#buton :hover{
    color: greenyellow;
}

</style>
