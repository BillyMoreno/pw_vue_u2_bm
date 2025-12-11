<template>

    <div>
        <img src="https://yesno.wtf/assets/yes/5-64c2804cc48057b94fd0b3eaf323d92c.gif" alt="No se puede cargar">

        <div class="pregunta-container">
            <input type="text" placeholder="Hazme una pregunta">
            <p>Recuerda terminar con el signo de interrogacion</p>
            <h2>Sere millonario</h2>
            <h1>YES, NO</h1>
        </div>

    </div>

</template>

<script>
export default {
}
</script>

<style>
img {
    height: 100vh;
    width: 100vw;
    max-height: 100%;
    max-width: 100%;
    position: fixed;
    left: 0px;
    top: 0px;

}

.pregunta-container {
    position: relative;
    color: white;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;/* centra verticalmente el contenido */
    height: 100vh;/* reemplaza el margin-top */
}

input {
    width: 200px;
    padding: 10px 15px;
    border-radius: 5px;
    border: none;
}

input:focus {
    outline: none;

}

p{
    font-size: 20px;
}

h2{
    margin-top: 150px;
}

</style>
